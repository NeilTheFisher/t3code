import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";
import { SourceControlProviderError, type ChangeRequest } from "@t3tools/contracts";

import * as VcsProcess from "../vcs/VcsProcess.ts";
import * as GerritCli from "./GerritCli.ts";
import * as SourceControlProvider from "./SourceControlProvider.ts";
import {
  providerAuth,
  type SourceControlCliDiscoverySpec,
} from "./SourceControlProviderDiscovery.ts";
import {
  gerritChangeFromRecord,
  gerritStateQuery,
  type GerritChange,
  type GerritQueryChange,
} from "../pullRequest/gerritPullRequestJson.ts";

/**
 * Gerrit is read over Secure Shell, so its discovery probe checks that `ssh` exists rather than a
 * provider-specific CLI. Authentication is the SSH key itself, which the probe cannot judge, so
 * the item is reported available with an unknown account.
 */
export const discovery = {
  type: "cli",
  kind: "gerrit",
  label: "Gerrit",
  executable: "ssh",
  versionArgs: ["-V"],
  authArgs: ["-V"],
  // The probed executable is `ssh`, whose version says nothing about Gerrit.
  suppressVersion: true,
  parseAuth: () =>
    providerAuth({
      status: "unknown",
      detail: "Reads change requests over SSH with the server's SSH key.",
    }),
  installHint: "Install an SSH client and add a key that can read the Gerrit project.",
} satisfies SourceControlCliDiscoverySpec;

/** The review host the context names, which every Gerrit command runs against. */
function hostFromContext(
  context: SourceControlProvider.SourceControlProviderContext | undefined,
): string | null {
  for (const candidate of [context?.provider.baseUrl, context?.remoteUrl]) {
    if (candidate === undefined || candidate.length === 0) continue;
    try {
      const host = new URL(candidate).hostname;
      if (host.length > 0) return host;
    } catch {
      // Try the next candidate.
    }
  }
  return null;
}

/**
 * The change-request identity a Gerrit change maps to for branch discovery. `headRefName` is the
 * branch the caller asked about, because Gerrit itself has no notion of a source branch and the
 * caller matches on that name.
 */
function toChangeRequest(change: GerritChange, headRefName: string): ChangeRequest {
  return {
    provider: "gerrit",
    number: change.number,
    title: change.title,
    url: change.url,
    baseRefName: change.baseBranch,
    headRefName,
    state: change.state,
    isDraft: change.isDraft,
    closedAt: change.closedAt,
    mergedAt: change.mergedAt,
    updatedAt: DateTime.make(change.updatedAt),
    isCrossRepository: false,
    // The project path is the repository identity the remote also yields, so the owner derived
    // from its first segment matches without the change having to name an owner of its own.
    headRepositoryNameWithOwner: change.project,
    headRepositoryOwnerLogin: null,
  };
}

/** `change:` takes the Change-Id or the numeric change; a URL names the numeric change. */
function referenceSearch(reference: string): string | null {
  const trimmed = reference.trim();
  if (trimmed.length === 0) return null;
  if (/^\d+$/u.test(trimmed)) return `change:${trimmed}`;
  if (/^I[0-9a-f]{6,40}$/iu.test(trimmed)) return `change:${trimmed}`;
  const number = /\/(\d+)(?:\/)?$/u.exec(trimmed)?.[1];
  return number === undefined ? null : `change:${number}`;
}

/** @public Service construction is part of the canonical Effect module API. */
export const make = Effect.gen(function* () {
  const cli = yield* GerritCli.GerritCli;
  const process = yield* VcsProcess.VcsProcess;

  const failure = (input: {
    readonly operation: string;
    readonly cwd: string;
    readonly detail: string;
    readonly reference?: string;
    readonly repository?: string;
    readonly cause?: unknown;
  }) =>
    new SourceControlProviderError({
      provider: "gerrit",
      operation: input.operation,
      cwd: input.cwd,
      detail: input.detail,
      ...(input.reference === undefined
        ? {}
        : {
            reference: SourceControlProvider.transportSafeSourceControlErrorValue(input.reference),
          }),
      ...(input.repository === undefined ? {} : { repository: input.repository }),
      ...(input.cause === undefined ? {} : { cause: input.cause }),
    });

  const readChanges = (input: GerritCli.GerritQueryInput, operation: string) =>
    cli.queryChanges(input).pipe(
      Effect.mapError((error) =>
        failure({ operation, cwd: input.cwd, detail: error.detail, cause: error }),
      ),
      Effect.map((page) => page.changes),
    );

  /** The host and `change:` search a reference names, or a failure when it names neither. */
  const resolveReference = (
    input: {
      readonly cwd: string;
      readonly context?: SourceControlProvider.SourceControlProviderContext;
      readonly reference: string;
    },
    operation: string,
  ) =>
    Effect.gen(function* () {
      const host = hostFromContext(input.context);
      const search = referenceSearch(input.reference);
      if (host === null || search === null) {
        return yield* failure({
          operation,
          cwd: input.cwd,
          reference: input.reference,
          detail: "Gerrit change could not be identified.",
        });
      }
      return { host, search };
    });

  /** The branch tip's commit hash and message, which is how a local branch names its change. */
  const branchCommit = (cwd: string, branch: string) =>
    process.run({
      operation: "GerritSourceControlProvider.branchCommit",
      command: "git",
      args: ["log", "-1", "--format=%H%n%B", branch],
      cwd,
      allowNonZeroExit: true,
      timeoutMs: 10_000,
      maxOutputBytes: 256_000,
    });

  /**
   * The Gerrit query that names the change a branch's tip belongs to. The Change-Id is stable
   * across patch sets, so it finds the change even when the local branch has commits the last
   * push did not carry; the commit hash is a fallback for a branch whose message has none.
   */
  const searchFromCommitLog = (stdout: string): string | null => {
    const [shaLine = "", ...messageLines] = stdout.split("\n");
    const sha = shaLine.trim();
    const changeId = /^\s*Change-Id:\s*(I[0-9a-f]{6,40})\s*$/imu.exec(messageLines.join("\n"))?.[1];
    if (changeId !== undefined) return `change:${changeId}`;
    return sha.length > 0 ? `commit:${sha}` : null;
  };

  /** Reads a ref's tip, answering with the query it names or null when the ref is absent. */
  const searchForBranch = (cwd: string, branch: string) =>
    branchCommit(cwd, branch).pipe(
      Effect.mapError((error) =>
        failure({
          operation: "listChangeRequests",
          cwd,
          detail: "Could not read the branch's commit.",
          cause: error,
        }),
      ),
      Effect.map((log) => (Number(log.exitCode) === 0 ? searchFromCommitLog(log.stdout) : null)),
    );

  const provider: SourceControlProvider.SourceControlProvider["Service"] =
    SourceControlProvider.SourceControlProvider.of({
      kind: "gerrit",

      listChangeRequests: (input) =>
        Effect.gen(function* () {
          const host = hostFromContext(input.context);
          if (host === null) return [];
          const branch = SourceControlProvider.sourceBranch({
            headSelector: input.headSelector,
            ...(input.source === undefined ? {} : { source: input.source }),
          });
          if (branch.length === 0) return [];
          const clause = gerritStateQuery(input.state);
          const changesFor = (search: string) =>
            readChanges(
              {
                cwd: input.cwd,
                host,
                search: clause === null ? search : `${search} ${clause}`,
                limit: input.limit ?? 1,
              },
              "listChangeRequests",
            );
          const collect = (records: ReadonlyArray<GerritQueryChange>) => {
            const changes: Array<ChangeRequest> = [];
            for (const record of records) {
              const change = gerritChangeFromRecord(host, record);
              if (change !== null) changes.push(toChangeRequest(change, branch));
            }
            return changes;
          };
          // A Gerrit branch often tracks the branch its change is destined for, so the head
          // selector can name a ref whose tip is not the change. When that ref carries nothing,
          // the worktree's own HEAD is the branch whose commit actually holds the change.
          const requested = yield* searchForBranch(input.cwd, branch);
          if (requested !== null) {
            const found = collect(yield* changesFor(requested));
            if (found.length > 0) return found;
          }
          const head = yield* searchForBranch(input.cwd, "HEAD");
          return head !== null && head !== requested ? collect(yield* changesFor(head)) : [];
        }),

      getChangeRequest: (input) =>
        Effect.gen(function* () {
          const { host, search } = yield* resolveReference(input, "getChangeRequest");
          const records = yield* readChanges(
            { cwd: input.cwd, host, search, limit: 1, files: true },
            "getChangeRequest",
          );
          const record = records[0];
          const change = record === undefined ? null : gerritChangeFromRecord(host, record);
          if (change === null) {
            return yield* failure({
              operation: "getChangeRequest",
              cwd: input.cwd,
              reference: input.reference,
              detail: "Gerrit has no such change.",
            });
          }
          return toChangeRequest(change, change.headRef);
        }),

      checkoutChangeRequest: (input) =>
        Effect.gen(function* () {
          const { host, search } = yield* resolveReference(input, "checkoutChangeRequest");
          const records = yield* readChanges(
            { cwd: input.cwd, host, search, limit: 1 },
            "checkoutChangeRequest",
          );
          const ref = records[0]?.currentPatchSet?.ref;
          if (ref === undefined) {
            return yield* failure({
              operation: "checkoutChangeRequest",
              cwd: input.cwd,
              reference: input.reference,
              detail: "Gerrit did not report a ref for the change.",
            });
          }
          const remote = input.context?.remoteName ?? "origin";
          yield* process
            .run({
              operation: "GerritSourceControlProvider.checkout.fetch",
              command: "git",
              args: ["fetch", remote, ref],
              cwd: input.cwd,
              timeoutMs: 60_000,
            })
            .pipe(
              Effect.mapError((error) =>
                failure({
                  operation: "checkoutChangeRequest",
                  cwd: input.cwd,
                  reference: input.reference,
                  detail: `Could not fetch ${ref} from ${remote}.`,
                  cause: error,
                }),
              ),
            );
          yield* process
            .run({
              operation: "GerritSourceControlProvider.checkout.checkout",
              command: "git",
              args: ["checkout", ...(input.force === true ? ["-f"] : []), "--detach", "FETCH_HEAD"],
              cwd: input.cwd,
              timeoutMs: 60_000,
            })
            .pipe(
              Effect.mapError((error) =>
                failure({
                  operation: "checkoutChangeRequest",
                  cwd: input.cwd,
                  reference: input.reference,
                  detail: "Could not check out the fetched change.",
                  cause: error,
                }),
              ),
            );
        }),

      // Gerrit has no create-repository, clone-URL, default-branch or create-change surface in
      // this build; every one of them fails rather than offering a control that cannot work.
      createChangeRequest: (input) =>
        failure({
          operation: "createChangeRequest",
          cwd: input.cwd,
          reference: input.headSelector,
          detail: "Gerrit changes are opened with `git push refs/for/<branch>`, not from here.",
        }),
      getRepositoryCloneUrls: (input) =>
        failure({
          operation: "getRepositoryCloneUrls",
          cwd: input.cwd,
          repository: input.repository,
          detail: "Gerrit clone URLs are read from the remote, not the API.",
        }),
      createRepository: (input) =>
        failure({
          operation: "createRepository",
          cwd: input.cwd,
          repository: input.repository,
          detail: "Gerrit projects are created in Gerrit, not from here.",
        }),
      getDefaultBranch: (input) =>
        failure({
          operation: "getDefaultBranch",
          cwd: input.cwd,
          detail: "Gerrit does not report a project's default branch over the query command.",
        }),
    });

  return provider;
});
