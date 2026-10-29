import {
  CommandId,
  MessageId,
  ThreadId,
  OrchestratorMcpFailure,
  ProjectId,
  threadWorkspaceAssignmentKey,
} from "@t3tools/contracts";
import * as Crypto from "effect/Crypto";
import * as Effect from "effect/Effect";
import * as Hex from "effect/encoding/Hex";
import * as FileSystem from "effect/FileSystem";
import * as Option from "effect/Option";
import * as ThreadLaunch from "../../../orchestration-v2/ThreadLaunchService.ts";
import * as ThreadMessageIntake from "../../../orchestration-v2/ThreadMessageIntake.ts";
import * as Claims from "../../../orchestration-v2/AttachmentClaims.ts";
import * as Project from "../../../project/ProjectService.ts";
import * as ManagedProjectFolders from "../../../project/ManagedProjectFolders.ts";
import * as Repositories from "../../../sourceControl/SourceControlRepositoryService.ts";
import * as GitVcsDriver from "../../../vcs/GitVcsDriver.ts";
import * as ServerSettings from "../../../serverSettings.ts";
import * as ProviderRegistry from "../../../provider/ProviderRegistry.ts";
import * as DateTime from "effect/DateTime";
import { resolveNewThreadModelSelection } from "@t3tools/shared/usageLimits";
import {
  resolveProjectDefaultThreadWorkspaceId,
  resolveProjectSettings,
} from "@t3tools/shared/projectSettings";
import { resolveRuntimeMode } from "../../delegatedTaskModes.ts";
import * as McpInvocationContext from "../../McpInvocationContext.ts";
import * as McpToolAccess from "../../McpToolAccess.ts";
import {
  newCommandId,
  readCaller,
  resolveProjectId,
  unavailable,
  type Caller,
} from "../../threadAccess.ts";
import { ProjectToolkit } from "./tools.ts";

function projectFailure(error: Project.ProjectServiceError) {
  if (error._tag === "ProjectOperationError") return unavailable();
  const message =
    error._tag === "ProjectNotFoundError"
      ? "The project was not found."
      : error._tag === "ProjectConflictError"
        ? "The workspace is already registered to a project."
        : "The project is not empty; force=true is required to delete it.";
  return new OrchestratorMcpFailure({ code: "invalid_request", message });
}

/**
 * A client names a project the way a person does: by title. Resolve an id or
 * path first, then fall back to an exact case-insensitive title, so a launch
 * into an unknown project fails loudly instead of landing somewhere else.
 */
const resolveProjectReference = Effect.fn("mcp.resolveProjectReference")(function* (
  context: Caller,
  reference: ProjectId | undefined,
) {
  if (reference === undefined) return yield* resolveProjectId(context, reference);
  const projects = yield* Project.ProjectService;
  const project = yield* projects.getById(reference).pipe(Effect.mapError(unavailable));
  if (Option.isSome(project)) return reference;
  // Title matching is a convenience on top of the id; a shell listing that
  // cannot be read must not fail a launch that named an id.
  const shells = yield* projects.listShells().pipe(
    Effect.mapError(unavailable),
    Effect.catchCause(() => Effect.succeed([])),
  );
  const wanted = reference.trim().toLowerCase();
  const matches = shells.filter(
    (shell) =>
      shell.title.trim().toLowerCase() === wanted ||
      shell.workspaceRoot?.replace(/\/+$/u, "").toLowerCase() === wanted.replace(/\/+$/u, ""),
  );
  const only = matches[0];
  if (matches.length === 1 && only !== undefined) return only.id;
  // An id the service does not list here (a client-supplied project the shell
  // projection has not caught up with) is still the id that was asked for;
  // only a human-readable name has to resolve, because a wrong one would
  // otherwise land work in the wrong project.
  if (!/[\s/\\]/u.test(reference)) return reference;
  const known = shells.map((shell) => `"${shell.title}"`).join(", ");
  return yield* new OrchestratorMcpFailure({
    code: "invalid_request",
    message:
      matches.length === 0
        ? `No project is named "${reference}". Projects: ${known}.`
        : `"${reference}" names ${matches.length} projects; pass the project id instead.`,
  });
});

/** Require project worktrees so launches cannot target arbitrary host directories. */
const assertProjectWorktree = Effect.fn("mcp.assertProjectWorktree")(function* (
  workspaceRoot: string,
  worktreePath: string,
) {
  const git = yield* GitVcsDriver.GitVcsDriver;
  const fileSystem = yield* FileSystem.FileSystem;
  const real = (path: string) => fileSystem.realPath(path).pipe(Effect.orElseSucceed(() => path));
  const worktrees = yield* git.listWorktreePaths(workspaceRoot).pipe(
    Effect.flatMap((paths) => Effect.forEach(paths, real)),
    Effect.orElseSucceed((): ReadonlyArray<string> => []),
  );
  if (!worktrees.includes(yield* real(worktreePath)))
    return yield* new OrchestratorMcpFailure({
      code: "invalid_request",
      message:
        "worktreePath must be one of the project's git worktrees. t3_worktree_list shows them.",
    });
});

/** A fixed-length id, so a long key fits in the scratch folder name derived from it. */
const launchCommandId = Effect.fn("mcp.launchCommandId")(function* (
  namespace: string,
  key: string,
) {
  const crypto = yield* Crypto.Crypto;
  // @effect-diagnostics-next-line preferSchemaOverJson:off - a JSON pair keeps the caller apart from the key.
  const bytes = new TextEncoder().encode(JSON.stringify([namespace, key]));
  const digest = yield* crypto.digest("SHA-256", bytes).pipe(Effect.mapError(unavailable));
  return CommandId.make(`mcp:launch:${Hex.encode(digest)}`);
});

const access = Effect.gen(function* () {
  yield* readCaller();
  return yield* Project.ProjectService;
});
export const layer = McpToolAccess.toLayer(ProjectToolkit, {
  t3_thread_launch: McpToolAccess.startsThreads(
    (input) => input,
    (input, { runtimeMode, interactionMode, linkOrigin }) =>
      Effect.gen(function* () {
        const scope = yield* McpInvocationContext.McpInvocationContext;
        const context = yield* readCaller();
        const { caller } = context;
        // A retry with the same key replays the first launch: the ids derive
        // from the caller and the key, and the launch service replays a
        // command it already accepted.
        const commandId =
          input.clientRequestId === undefined
            ? yield* newCommandId()
            : yield* launchCommandId(scope.requestNamespace, input.clientRequestId);
        const threadId = ThreadId.make(commandId);
        const messageId = MessageId.make(commandId);
        const attachments = input.attachments ?? [];
        if (attachments.some((attachment) => !Claims.attachmentIsPendingUpload(attachment)))
          return yield* new OrchestratorMcpFailure({
            code: "invalid_request",
            message: "A new thread accepts only pending attachment uploads.",
          });
        // A client outside a thread that names no project gets a project-less
        // thread rather than an error: that is what "just ask T3 to do X" means.
        const wantsScratch =
          input.scratch === true || (input.projectId === undefined && context.caller === undefined);
        if (wantsScratch && input.projectId !== undefined)
          return yield* new OrchestratorMcpFailure({
            code: "invalid_request",
            message: "scratch:true picks its own project; omit projectId.",
          });
        if (wantsScratch && input.workspaceStrategy !== undefined)
          return yield* new OrchestratorMcpFailure({
            code: "invalid_request",
            message:
              "A thread without a project picks its own folder; omit workspaceStrategy or pass projectId.",
          });
        const projectId = wantsScratch
          ? (yield* ManagedProjectFolders.ManagedProjectFolders.pipe(
              Effect.flatMap((folders) => folders.ensureScratchProject),
              Effect.mapError(
                (error) =>
                  new OrchestratorMcpFailure({
                    code: "orchestration_error",
                    message: error.message,
                  }),
              ),
            )).projectId
          : yield* resolveProjectReference(context, input.projectId);
        const readProject = Project.ProjectService.pipe(
          Effect.flatMap((projects) => projects.getById(projectId)),
          Effect.mapError(unavailable),
          Effect.map(Option.getOrUndefined),
        );
        const projectDefaultWorkspaceId = yield* ServerSettings.ServerSettingsService.pipe(
          Effect.flatMap((settings) => settings.getSettings),
          Effect.mapError(unavailable),
          Effect.flatMap((settings) =>
            Effect.map(readProject, (project) =>
              resolveProjectDefaultThreadWorkspaceId(settings, projectId, project),
            ),
          ),
        );
        // A retry of an accepted launch replays it: it keeps the model it started
        // with and skips the checks only a new launch needs, which the project
        // may no longer pass, such as a base branch deleted since.
        const launched =
          input.clientRequestId === undefined
            ? null
            : yield* context.threads.getThreadShell(threadId).pipe(Effect.mapError(unavailable));
        const launchedModel =
          launched === null || launched.deletedAt !== null ? undefined : launched.modelSelection;
        const replaying = launchedModel !== undefined;
        if (!replaying && input.workspaceStrategy?.type === "existing_worktree") {
          const project = yield* readProject;
          if (project === undefined)
            return yield* new OrchestratorMcpFailure({
              code: "invalid_request",
              message: "The project was not found.",
            });
          yield* assertProjectWorktree(project.workspaceRoot, input.workspaceStrategy.worktreePath);
        }
        // Reject unresolved base refs before accepting a launch; worktree provisioning happens later.
        const strategy = input.workspaceStrategy;
        if (!replaying && strategy?.type === "worktree")
          yield* ThreadLaunch.ThreadLaunchService.pipe(
            Effect.flatMap((launches) =>
              launches.checkWorktreeBase({ projectId, workspaceStrategy: strategy }),
            ),
            Effect.mapError(
              (error) =>
                new OrchestratorMcpFailure({
                  code: "invalid_request",
                  message: `${error.message} No thread was created. Pass a branch, tag, or commit that exists there${
                    strategy.startFromOrigin === true
                      ? "; the project has no usable remote to fetch it from."
                      : ", or set startFromOrigin:true if it exists only on a remote."
                  }`,
                }),
            ),
          );
        // A caller outside a thread has nothing to inherit, so it starts with the
        // project's effective defaults, as the composer does. Its mode stays
        // within the ceiling it was approved with.
        const projectDefaults =
          caller === undefined && !replaying
            ? yield* ServerSettings.ServerSettingsService.pipe(
                Effect.flatMap((settings) => settings.getSettings),
                Effect.mapError(unavailable),
                Effect.flatMap((settings) =>
                  Effect.map(
                    readProject,
                    (project) => resolveProjectSettings(settings, projectId, project).settings,
                  ),
                ),
              )
            : undefined;
        const modelSelection =
          input.modelSelection ??
          launchedModel ??
          caller?.modelSelection ??
          (projectDefaults
            ? resolveNewThreadModelSelection({
                defaultSelection: projectDefaults.defaultModelSelection,
                fallbackSelection: projectDefaults.fallbackModelSelection,
                providers: yield* ProviderRegistry.ProviderRegistry.pipe(
                  Effect.flatMap((registry) => registry.getProviders),
                ),
                settings: projectDefaults,
                projectId,
                now: DateTime.toEpochMillis(yield* DateTime.now),
              }).selection
            : null) ??
          undefined;
        if (modelSelection === undefined)
          return yield* new OrchestratorMcpFailure({
            code: "invalid_request",
            message:
              "Pass modelSelection: the project has no default model. orchestrator_capabilities lists providers and models.",
          });
        const startedRuntimeMode =
          projectDefaults !== undefined && input.runtimeMode === undefined
            ? yield* resolveRuntimeMode(runtimeMode, projectDefaults.defaultRuntimeMode).pipe(
                Effect.orElseSucceed(() => runtimeMode),
              )
            : runtimeMode;
        const result = yield* ThreadMessageIntake.launchThread({
          commandId,
          threadId,
          projectId,
          title: input.title,
          modelSelection,
          runtimeMode: startedRuntimeMode,
          interactionMode,
          workspaceStrategy: input.workspaceStrategy ?? { type: "root" },
          ...(input.message === undefined && attachments.length === 0
            ? {}
            : {
                initialMessage: {
                  messageId,
                  ...(caller === undefined ? {} : { senderThreadId: caller.id }),
                  text: input.message ?? "",
                  attachments,
                },
              }),
          createdBy: "agent",
          creationSource: "mcp",
          ...(linkOrigin === undefined ? {} : { linkOrigin }),
          // Kept only alongside linkOrigin: thread.create drops it otherwise.
          ...(input.delegatedFrom === undefined ? {} : { delegatedFrom: input.delegatedFrom }),
        }).pipe(
          Effect.mapError((error) => {
            if (error._tag === "AttachmentClaimError") {
              return new OrchestratorMcpFailure({
                code: "orchestration_error",
                message: error.message,
              });
            }
            if (error._tag === "ThreadManagementProviderInstanceDisabledError") {
              return new OrchestratorMcpFailure({
                code: "invalid_request",
                message: error.message,
              });
            }
            return unavailable();
          }),
        );
        const thread = result.projection.thread;
        // A replay keeps the filing the first launch chose, even if the project
        // default changed since.
        if (!replaying && projectDefaultWorkspaceId !== null) {
          const settings = yield* ServerSettings.ServerSettingsService;
          const current = yield* settings.getSettings.pipe(Effect.mapError(unavailable));
          yield* settings
            .updateSettings({
              sidebarThreadWorkspaceAssignments: {
                ...current.sidebarThreadWorkspaceAssignments,
                [threadWorkspaceAssignmentKey(scope.environmentId, thread.id)]:
                  projectDefaultWorkspaceId,
              },
            })
            .pipe(
              Effect.catchCause((cause) =>
                Effect.logWarning(
                  "Could not file a launched thread into its project workspace",
                  cause,
                ),
              ),
            );
        }
        const run = result.projection.runs.find((run) => run.userMessageId === messageId);
        return {
          threadId: thread.id,
          link: McpInvocationContext.threadLinkFor(scope, thread.id),
          projectId: thread.projectId,
          modelSelection: thread.modelSelection,
          runId: run?.id ?? null,
          status: run?.status ?? null,
        };
      }),
    // The launched thread carries the caller's link, if it has one.
    "stamped",
  ),
  t3_project_list: McpToolAccess.reads((input) =>
    Effect.gen(function* () {
      const projects = yield* access;
      // Identities are resolved: linked environments find this side's project by repository.
      return yield* projects
        .listPage({ cursor: input.cursor ?? 0, limit: input.limit ?? 20 })
        .pipe(Effect.mapError(unavailable));
    }),
  ),
  t3_project_read: McpToolAccess.reads((input) =>
    Effect.gen(function* () {
      const projects = yield* access;
      const result = yield* projects.getById(input.projectId).pipe(Effect.mapError(unavailable));
      if (Option.isNone(result))
        return yield* new OrchestratorMcpFailure({
          code: "invalid_request",
          message: "The project was not found.",
        });
      return result.value;
    }),
  ),
  t3_project_create: McpToolAccess.writesEnvironment(
    ({ workspaceRoot, ...input }) =>
      Effect.gen(function* () {
        const projects = yield* Project.ProjectService;
        if (workspaceRoot === undefined) {
          // Only updates record model defaults; reject defaults that creation would silently drop.
          if (
            input.scripts !== undefined ||
            input.createWorkspaceRootIfMissing !== undefined ||
            input.defaultModelSelection !== undefined
          )
            return yield* new OrchestratorMcpFailure({
              code: "invalid_request",
              message:
                "A project started from its title takes only a title; set scripts or defaultModelSelection afterwards with t3_project_update.",
            });
          const folders = yield* ManagedProjectFolders.ManagedProjectFolders;
          const created = yield* folders.createNamedProject({ name: input.title }).pipe(
            Effect.mapError(
              (error) =>
                new OrchestratorMcpFailure({
                  code: "orchestration_error",
                  message: error.message,
                }),
            ),
          );
          const project = yield* projects
            .getById(created.projectId)
            .pipe(
              Effect.mapError(unavailable),
              Effect.flatMap(
                Option.match({ onNone: () => Effect.fail(unavailable()), onSome: Effect.succeed }),
              ),
            );
          return {
            ...project,
            ...(created.commitError === undefined ? {} : { commitError: created.commitError }),
          };
        }
        const commandId = yield* newCommandId();
        return yield* projects
          .create({ ...input, workspaceRoot, commandId, projectId: ProjectId.make(commandId) })
          .pipe(Effect.mapError(projectFailure));
      }),
    // Linked work may bring the repository it works in; an existing
    // registered workspace is still refused.
    { linkedCallers: "allowed" },
  ),
  t3_project_update: McpToolAccess.writesEnvironment((input) =>
    Effect.gen(function* () {
      const projects = yield* Project.ProjectService;
      return yield* projects
        .update({ ...input, commandId: yield* newCommandId() })
        .pipe(Effect.mapError(projectFailure));
    }),
  ),
  t3_project_delete: McpToolAccess.writesEnvironment((input) =>
    Effect.gen(function* () {
      const projects = yield* Project.ProjectService;
      return yield* projects
        .delete({ ...input, commandId: yield* newCommandId() })
        .pipe(Effect.mapError(projectFailure));
    }),
  ),
  t3_project_clone: McpToolAccess.writesEnvironment(
    (input) =>
      Effect.gen(function* () {
        const repositories = yield* Repositories.SourceControlRepositoryService;
        return yield* repositories.cloneRepository(input).pipe(
          Effect.mapError(
            (error) =>
              new OrchestratorMcpFailure({
                code: "orchestration_error",
                message: error.detail,
              }),
          ),
        );
      }),
    // An existing destination is never adopted.
    { linkedCallers: "allowed" },
  ),
});
