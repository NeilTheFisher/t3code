import * as Effect from "effect/Effect";
import type {
  PullRequestCapabilities,
  PullRequestCheck,
  PullRequestInvolvement,
  PullRequestListState,
  PullRequestReviewCommentDraft,
  PullRequestReviewThread,
  PullRequestReviewVerdict,
  PullRequestViewerPermissions,
} from "@t3tools/contracts";

import * as VcsProcess from "../vcs/VcsProcess.ts";
import * as GerritCli from "../sourceControl/GerritCli.ts";
import * as GerritRestApi from "../sourceControl/GerritRestApi.ts";
import {
  PullRequestProviderError,
  type ProviderChangeRequest,
  type ProviderChangeRequestActivity,
  type ProviderChangeRequestDetail,
  type ProviderChangeRequestSummary,
  type PullRequestProviderApi,
} from "./PullRequestProvider.ts";
import {
  currentPatchSet,
  gerritActivityFromRecord,
  gerritChangeFromRecord,
  gerritDetailFromRecord,
  gerritStateQuery,
  type GerritActor,
  type GerritChange,
  type GerritChangeDetail,
  type GerritQueryChange,
} from "./gerritPullRequestJson.ts";

/** Gerrit's review label, whose `+2`/`-2` the three contract verdicts map onto. */
const CODE_REVIEW_LABEL = "Code-Review";
/** Gerrit's verification label, the closest thing it has to a check. */
const VERIFIED_LABEL = "Verified";
const VERDICT_SCORE: Readonly<Record<PullRequestReviewVerdict, number>> = {
  comment: 0,
  approve: 2,
  "request-changes": -2,
};

/**
 * What this build can do with a Gerrit change. Reads are complete — listing, detail, files,
 * comments, diff — and so are the writes Gerrit exposes over SSH: a cover comment, a Code-Review
 * verdict, submit, abandon, restore and rebase. The change description is editable through
 * Gerrit's REST edit flow; Gerrit has no reactions and cannot rewrite a remark, so those stay off
 * rather than offering what would fail.
 */
const CAPABILITIES: PullRequestCapabilities = {
  diff: true,
  comment: true,
  actions: ["merge", "close", "reopen", "update-branch"],
  // Gerrit submits rather than merging by a strategy; "merge" is the one honest stand-in.
  mergeMethods: ["merge"],
  updateMethods: ["rebase"],
  search: true,
  // Gerrit keeps each file's reviewed flag on the change itself.
  viewedFiles: "host",
  edit: { changeRequest: true, comment: false },
  reactions: false,
  review: {
    // Inline comments, replies and resolution all need the comment ids only Gerrit's REST API
    // returns; the SSH command line carries neither ids nor `in_reply_to`.
    inlineComment: true,
    reply: true,
    resolve: true,
    verdicts: ["comment", "approve", "request-changes"],
  },
  reviewers: { request: true, listCandidates: true },
};

const VIEWER_PERMISSIONS: PullRequestViewerPermissions = {
  actions: ["merge", "close", "reopen", "update-branch"],
  comment: true,
  resolve: true,
  verdicts: ["comment", "approve", "request-changes"],
  requestReviewers: true,
  updateMethods: ["rebase"],
};

function toActor(actor: GerritActor | null): ProviderChangeRequest["author"] {
  return actor === null ? null : { login: actor.login, name: actor.name, avatarUrl: null };
}

function toChangeRequest(change: GerritChange): ProviderChangeRequest {
  return {
    number: change.number,
    title: change.title,
    url: change.url,
    author: toActor(change.owner),
    headBranch: change.headRef,
    baseBranch: change.baseBranch,
    state: change.state,
    isDraft: change.isDraft,
    mergeability: "unknown",
    // Line counts are a separate read, which only the detail is worth spending on.
    additions: 0,
    deletions: 0,
    createdAt: change.createdAt,
    updatedAt: change.updatedAt,
    // Gerrit carries no reviewer list on a listing, so nothing is reported as requested.
    reviewRequestLogins: [],
    labels: [],
  };
}

function toDetail(detail: GerritChangeDetail): ProviderChangeRequestDetail {
  return {
    ...toChangeRequest(detail),
    body: detail.body,
    additions: detail.additions,
    deletions: detail.deletions,
    changedFiles: detail.changedFiles,
    mergedAt: detail.mergedAt,
    closedAt: detail.closedAt,
    reviewers: detail.reviewers.flatMap((reviewer) => {
      const actor = toActor(reviewer);
      return actor === null ? [] : [actor];
    }),
    checks: [],
    // Gerrit submits rather than merging by a strategy.
    mergeCapabilities: { merge: true, squash: false, rebase: false },
    viewerPermissions: VIEWER_PERMISSIONS,
  };
}

function toSummary(change: GerritChange): ProviderChangeRequestSummary {
  return {
    number: change.number,
    title: change.title,
    url: change.url,
    headBranch: change.headRef,
    baseBranch: change.baseBranch,
    state: change.state,
    isDraft: change.isDraft,
    closedAt: change.closedAt,
    mergedAt: change.mergedAt,
    updatedAt: change.updatedAt,
    author: toActor(change.owner),
  };
}

/**
 * Gerrit's `Verified` and `Code-Review` votes as checks: one per reviewer per label, the sign of
 * the vote as the status. Gerrit has no other check-like signal, so a change with neither vote
 * reports none.
 */
function gerritChecks(record: GerritQueryChange): ReadonlyArray<PullRequestCheck> {
  const checks: Array<PullRequestCheck> = [];
  const seen = new Set<string>();
  for (const approval of currentPatchSet(record)?.approvals ?? []) {
    if (approval.type !== VERIFIED_LABEL && approval.type !== CODE_REVIEW_LABEL) continue;
    const by = approval.by;
    const login = by?.username ?? by?.email ?? by?.name;
    if (login === undefined || login === null || login.length === 0) continue;
    const key = `${approval.type}:${login}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const value = Number(approval.value ?? 0);
    checks.push({
      name: `${login} · ${approval.type}`,
      status: value > 0 ? "success" : value < 0 ? "failure" : "pending",
      description: null,
      url: null,
    });
  }
  return checks;
}

function involvementQualifier(involvement: PullRequestInvolvement): string | null {
  switch (involvement) {
    case "authored":
      return "owner:self";
    case "reviewing":
      return "reviewer:self";
    case "all":
      return null;
  }
}

function listSearch(
  repository: string,
  state: PullRequestListState,
  involvement: PullRequestInvolvement,
  query?: string,
): string {
  const terms = [`project:${repository}`];
  const stateTerm = gerritStateQuery(state);
  if (stateTerm !== null) terms.push(stateTerm);
  const involvementTerm = involvementQualifier(involvement);
  if (involvementTerm !== null) terms.push(involvementTerm);
  // Gerrit reads a bare term as a message/subject search.
  const trimmed = query?.trim() ?? "";
  if (trimmed.length > 0) terms.push(trimmed);
  return terms.join(" ");
}

const changeQuery = (number: number, repository: string) =>
  `change:${number} project:${repository}`;

const actionVerb: Readonly<Partial<Record<string, "submit" | "abandon" | "restore" | "rebase">>> = {
  merge: "submit",
  close: "abandon",
  reopen: "restore",
  "update-branch": "rebase",
};

/** A review's line comments as Gerrit's `CommentInput` map: `REVISION` is the new side. */
function gerritInlineComments(
  drafts: ReadonlyArray<PullRequestReviewCommentDraft>,
): Record<string, Array<{ line: number; side: "PARENT" | "REVISION"; message: string }>> {
  const comments: Record<
    string,
    Array<{ line: number; side: "PARENT" | "REVISION"; message: string }>
  > = Object.create(null);
  for (const draft of drafts) {
    const position = draft.position;
    const onOld =
      position.kind === "deleted" || (position.kind === "context" && position.side === "left");
    const line =
      position.kind === "added"
        ? position.newLine
        : position.kind === "deleted"
          ? position.oldLine
          : position.side === "left"
            ? position.oldLine
            : position.newLine;
    (comments[draft.path] ??= []).push({
      line,
      side: onOld ? "PARENT" : "REVISION",
      message: draft.body,
    });
  }
  return comments;
}

/** Gerrit REST timestamps are space-separated UTC; the contract wants ISO. */
function restTimestamp(value: string | null): string | null {
  if (value === null) return null;
  const match = /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})/u.exec(value);
  return match === null ? value : `${match[1]}T${match[2]}Z`;
}

function restActor(comment: GerritRestApi.GerritRestComment): ProviderChangeRequest["author"] {
  const login = comment.authorLogin ?? comment.authorName;
  return login === null ? null : { login, name: comment.authorName, avatarUrl: null };
}

/** Inline comments as threads, each root comment naming the thread the UI replies to. */
function gerritReviewThreads(
  comments: ReadonlyArray<GerritRestApi.GerritRestComment>,
): ReadonlyArray<PullRequestReviewThread> {
  const byId = new Map(comments.map((comment) => [comment.id, comment]));
  const threads: Array<PullRequestReviewThread> = [];
  for (const root of comments) {
    if (root.inReplyTo !== null && byId.has(root.inReplyTo)) continue;
    // A thread is its root plus every descendant reply, reached by walking the `inReplyTo` chain
    // rather than only the root's direct children.
    const members = [root];
    for (let index = 0; index < members.length; index += 1) {
      const parent = members[index];
      if (parent !== undefined) {
        members.push(...comments.filter((comment) => comment.inReplyTo === parent.id));
      }
    }
    const threadComments = members.flatMap((comment) => {
      const createdAt = restTimestamp(comment.createdAt);
      return createdAt === null
        ? []
        : [
            {
              id: comment.id,
              author: restActor(comment),
              body: comment.message,
              createdAt,
              url: null,
            },
          ];
    });
    threads.push({
      id: root.id,
      path: root.path,
      line: root.line !== null && root.line > 0 ? root.line : null,
      side: root.side === "PARENT" ? "left" : "right",
      isResolved: !members.reduce((newest, comment) =>
        (comment.createdAt ?? "") > (newest.createdAt ?? "") ? comment : newest,
      ).unresolved,
      isOutdated: false,
      comments: threadComments,
    });
  }
  return threads;
}

/** A git trailer line, e.g. `Change-Id: Iabc` or `Signed-off-by: X`. */
const TRAILER_LINE = /^[A-Za-z][A-Za-z0-9-]*: .+$/u;

/**
 * Gerrit's change subject is the commit message's first line and its body is the rest. Rewriting
 * either must keep the trailing trailer block, above all its `Change-Id`: without that line Gerrit
 * files the rewrite as a brand new change rather than a patch set on the same one.
 */
function rewriteCommitMessage(
  current: string,
  title: string | undefined,
  body: string | undefined,
): string {
  const lines = current.replace(/\n+$/u, "").split("\n");
  const subject = lines[0] ?? "";
  const rest = lines.slice(1);
  // A trailer block is the run of `Key: value` lines closing the message, after a blank line.
  let trailerStart = rest.length;
  while (trailerStart > 0 && TRAILER_LINE.test(rest[trailerStart - 1] ?? "")) trailerStart -= 1;
  const hasTrailers = trailerStart < rest.length && (rest[trailerStart - 1] ?? "").trim() === "";
  const bodyEnd = hasTrailers ? trailerStart - 1 : rest.length;
  const trailers = hasTrailers ? rest.slice(trailerStart) : [];
  return [title ?? subject, body ?? rest.slice(0, bodyEnd).join("\n").trim(), trailers.join("\n")]
    .filter((part) => part.length > 0)
    .join("\n\n")
    .concat("\n");
}

/**
 * The submitted description with any subject line and trailer block removed. The editor may carry
 * the whole commit message, and `rewriteCommitMessage` re-adds both, so keeping them here would
 * duplicate the subject and the `Change-Id`.
 */
function submittedDescription(message: string, subject: string): string {
  const lines = message.replace(/\n+$/u, "").split("\n");
  if ((lines[0] ?? "").trim() === subject.trim()) {
    let start = 1;
    while (start < lines.length && (lines[start] ?? "").trim() === "") start += 1;
    lines.splice(0, start);
  }
  let trailerStart = lines.length;
  while (trailerStart > 0 && TRAILER_LINE.test(lines[trailerStart - 1] ?? "")) trailerStart -= 1;
  if (trailerStart < lines.length && (lines[trailerStart - 1] ?? "").trim() === "") {
    lines.splice(trailerStart - 1);
  }
  return lines.join("\n").trim();
}

export const make = Effect.gen(function* () {
  const cli = yield* GerritCli.GerritCli;
  const process = yield* VcsProcess.VcsProcess;
  const rest = yield* GerritRestApi.GerritRestApi;

  const fail =
    (operation: string) =>
    (error: GerritCli.GerritCliError): PullRequestProviderError =>
      new PullRequestProviderError({
        provider: "gerrit",
        operation,
        reason:
          error._tag === "GerritCliAuthenticationError"
            ? "unauthenticated"
            : error._tag === "GerritCliUnavailableError"
              ? "missing-tool"
              : "failed",
        detail: error.detail,
        cause: error,
      });

  const failure = (operation: string, detail: string, cause?: unknown): PullRequestProviderError =>
    new PullRequestProviderError({
      provider: "gerrit",
      operation,
      reason: "failed",
      detail,
      ...(cause === undefined ? {} : { cause }),
    });

  const failRest =
    (operation: string) =>
    (error: GerritRestApi.GerritRestApiError): PullRequestProviderError =>
      new PullRequestProviderError({
        provider: "gerrit",
        operation,
        reason: "failed",
        detail: error.detail,
        cause: error,
      });

  const unsupported = (operation: string) => (): Effect.Effect<never, PullRequestProviderError> =>
    Effect.fail(failure(operation, "Gerrit does not support this operation in this build."));

  const readChanges = (input: GerritCli.GerritQueryInput, operation: string) =>
    cli.queryChanges(input).pipe(Effect.mapError(fail(operation)));

  const readOne = (input: GerritCli.GerritQueryInput, operation: string) =>
    readChanges(input, operation).pipe(
      Effect.flatMap((page) => {
        const record = page.changes[0];
        return record === undefined
          ? Effect.fail(
              new PullRequestProviderError({
                provider: "gerrit",
                operation,
                reason: "not-found",
                detail: `Gerrit has no change ${input.search}.`,
              }),
            )
          : Effect.succeed(record);
      }),
    );

  /** The change's current patch set, which every write and the diff address. */
  const loadPatchSet = (
    input: { cwd: string; host: string; number: number; repository: string },
    operation: string,
  ) =>
    Effect.gen(function* () {
      const record = yield* readOne(
        {
          cwd: input.cwd,
          host: input.host,
          search: changeQuery(input.number, input.repository),
          limit: 1,
        },
        operation,
      );
      const patchSet = currentPatchSet(record);
      const ref = patchSet?.ref;
      const number = patchSet?.number;
      if (ref === undefined || number === undefined) {
        return yield* failure(operation, "Gerrit did not report a patch set for the change.");
      }
      return { ref, number, parent: patchSet?.parents?.[0] ?? null };
    });

  const git = (cwd: string, operation: string, args: ReadonlyArray<string>) =>
    process
      .run({
        operation: `GerritPullRequestProvider.${operation}`,
        command: "git",
        args,
        cwd,
        allowNonZeroExit: true,
        timeoutMs: 60_000,
        maxOutputBytes: 16 * 1024 * 1024,
      })
      .pipe(
        Effect.mapError((error) => failure(operation, "Git failed for the Gerrit change.", error)),
      );

  /** The remote whose URL names the routed Gerrit host, so a fetch never assumes `origin`. */
  const resolveRemote = (cwd: string, host: string, operation: string) =>
    git(cwd, operation, ["remote", "-v"]).pipe(
      Effect.map((output) => {
        if (Number(output.exitCode) !== 0) return "origin";
        const remotes = output.stdout
          .split("\n")
          .map((line) => line.split(/\s+/))
          .filter((parts) => parts[2] === "(fetch)");
        const match = remotes.find((parts) => parts[1]?.includes(host));
        return match?.[0] ?? "origin";
      }),
    );

  /**
   * Fetches a patch set into its own local ref rather than `FETCH_HEAD`, which every fetch
   * overwrites: two concurrent diffs would otherwise read each other's revision.
   */
  const fetchRef = (cwd: string, remote: string, ref: string, into: string) =>
    git(cwd, "getDiff", ["fetch", remote, `${ref}:${into}`]).pipe(
      Effect.flatMap((output) =>
        Number(output.exitCode) === 0
          ? Effect.void
          : Effect.fail(failure("getDiff", `Could not fetch ${ref} from ${remote}.`)),
      ),
    );

  /** The root comment of a thread, which names the path and line a reply is anchored to. */
  /** The host and SSH user a REST call is made for, both read from the project's git remote. */
  const restTarget = (cwd: string, host: string, operation: string) =>
    cli.viewer(cwd).pipe(
      Effect.map((username) => ({ host, username })),
      Effect.mapError(fail(operation)),
    );

  const threadContext = (
    input: { cwd: string; host: string; number: number },
    threadId: string,
    operation: string,
  ) =>
    Effect.gen(function* () {
      const target = yield* restTarget(input.cwd, input.host, operation);
      const comments = yield* rest
        .listComments({ ...target, change: input.number })
        .pipe(Effect.mapError(failRest(operation)));
      const root = comments.find((comment) => comment.id === threadId);
      if (root === undefined) {
        return yield* failure(operation, "Gerrit has no such comment thread.");
      }
      const members = [root];
      for (let index = 0; index < members.length; index += 1) {
        const parent = members[index];
        if (parent !== undefined) {
          members.push(...comments.filter((comment) => comment.inReplyTo === parent.id));
        }
      }
      // The newest member carries the thread's current resolution, which a reply inherits.
      const latest = members.reduce((newest, comment) =>
        (comment.createdAt ?? "") > (newest.createdAt ?? "") ? comment : newest,
      );
      return { root, latest };
    });

  const provider: PullRequestProviderApi = {
    kind: "gerrit",
    capabilities: CAPABILITIES,

    // Gerrit authenticates with the SSH key named by the checkout's remote, so the account
    // follows the project rather than the process.
    getViewer: (input) => cli.viewer(input.cwd).pipe(Effect.mapError(fail("getViewer"))),

    listChangeRequests: (input) =>
      readChanges(
        {
          cwd: input.cwd,
          host: input.host,
          search: listSearch(input.repository, input.state, input.involvement, input.query),
          limit: input.limit,
          start: input.cursor?.delivered ?? 0,
        },
        "listChangeRequests",
      ).pipe(
        Effect.map((page) => {
          const items: Array<ProviderChangeRequest> = [];
          for (const record of page.changes) {
            const change = gerritChangeFromRecord(input.host, record);
            if (change !== null) items.push(toChangeRequest(change));
          }
          return {
            items,
            truncated: page.moreChanges,
            // Gerrit answers newest-update-first and `--start` continues it, so every page can
            // be carried on from.
            continues: true,
            cursorAdvance: page.changes.length,
          };
        }),
      ),

    getChangeRequestSummary: (input) =>
      readOne(
        {
          cwd: input.cwd,
          host: input.host,
          search: changeQuery(input.number, input.repository),
          limit: 1,
        },
        "getChangeRequestSummary",
      ).pipe(
        Effect.flatMap((record) => {
          const change = gerritChangeFromRecord(input.host, record);
          return change === null
            ? Effect.fail(
                failure("getChangeRequestSummary", "Gerrit returned an unreadable change."),
              )
            : Effect.succeed(toSummary(change));
        }),
      ),

    getChangeRequestChecks: (input) =>
      readOne(
        {
          cwd: input.cwd,
          host: input.host,
          search: changeQuery(input.number, input.repository),
          limit: 1,
        },
        "getChangeRequestChecks",
      ).pipe(
        Effect.flatMap((record) => {
          const change = gerritChangeFromRecord(input.host, record);
          return change === null
            ? Effect.fail(
                failure("getChangeRequestChecks", "Gerrit returned an unreadable change."),
              )
            : Effect.succeed({ state: change.state, checks: gerritChecks(record) });
        }),
      ),

    getChangeRequest: (input) =>
      readOne(
        {
          cwd: input.cwd,
          host: input.host,
          search: changeQuery(input.number, input.repository),
          limit: 1,
          files: true,
          allApprovals: true,
          commitMessage: true,
        },
        "getChangeRequest",
      ).pipe(
        Effect.flatMap((record) => {
          const detail = gerritDetailFromRecord(input.host, record);
          return detail === null
            ? Effect.fail(failure("getChangeRequest", "Gerrit returned an unreadable change."))
            : Effect.succeed(toDetail(detail));
        }),
      ),

    getChangeRequestActivity: (input) =>
      Effect.gen(function* () {
        const record = yield* readOne(
          {
            cwd: input.cwd,
            host: input.host,
            search: changeQuery(input.number, input.repository),
            limit: 1,
            patchSets: true,
            comments: true,
          },
          "getChangeRequestActivity",
        );
        const activity = gerritActivityFromRecord(record);
        const restComments = yield* Effect.gen(function* () {
          const target = yield* restTarget(input.cwd, input.host, "getChangeRequestActivity");
          return yield* rest.listComments({ ...target, change: input.number });
        }).pipe(Effect.orElseSucceed(() => [] as ReadonlyArray<GerritRestApi.GerritRestComment>));
        const messages = activity.comments
          .filter((comment) => comment.kind === "issue-comment")
          .map((comment) => ({
            id: comment.id,
            kind: "issue-comment" as const,
            author: toActor(comment.author),
            body: comment.body,
            createdAt: comment.createdAt,
            url: null,
            path: null,
            reviewState: null,
          }));
        // REST carries the comment ids and parentage SSH cannot; without it, show the SSH
        // inline comments, which read but cannot be replied to.
        const inline =
          restComments.length > 0
            ? restComments.flatMap((comment) => {
                const createdAt = restTimestamp(comment.createdAt);
                return createdAt === null
                  ? []
                  : [
                      {
                        id: comment.id,
                        kind: "review-comment" as const,
                        author: restActor(comment),
                        body: comment.message,
                        createdAt,
                        url: null,
                        path: comment.path,
                        reviewState: null,
                      },
                    ];
              })
            : activity.comments
                .filter((comment) => comment.kind === "review-comment")
                .map((comment) => ({
                  id: comment.id,
                  kind: "review-comment" as const,
                  author: toActor(comment.author),
                  body: comment.body,
                  createdAt: comment.createdAt,
                  url: null,
                  path: comment.path,
                  reviewState: null,
                }));
        const comments = [...messages, ...inline].toSorted((left, right) =>
          left.createdAt.localeCompare(right.createdAt),
        ) satisfies ProviderChangeRequestActivity["comments"];
        return {
          comments,
          commentCount: comments.length,
          commentsTruncated: false,
          reviewThreads: gerritReviewThreads(restComments),
          commits: [],
        };
      }),

    getViewerPermissions: () => Effect.succeed(VIEWER_PERMISSIONS),

    getDiff: (input) =>
      Effect.gen(function* () {
        const patchSet = yield* loadPatchSet(input, "getDiff");
        const remote = yield* resolveRemote(input.cwd, input.host, "getDiff");
        const revision = `refs/t3-gerrit/${input.number}/${patchSet.number}`;
        yield* fetchRef(input.cwd, remote, patchSet.ref, revision);
        const output = yield* git(
          input.cwd,
          "getDiff",
          patchSet.parent === null
            ? ["diff-tree", "-p", "--root", "--no-commit-id", revision]
            : ["diff", patchSet.parent, revision, "--no-color"],
        );
        if (Number(output.exitCode) !== 0) {
          return yield* failure("getDiff", "Git could not diff the Gerrit change.");
        }
        return {
          patch: output.stdout,
          truncated: output.stdoutTruncated,
          nextCursor: null,
        };
      }),

    getDiffFileContents: (input) =>
      Effect.gen(function* () {
        const patchSet = yield* loadPatchSet(input, "getDiffFileContents");
        const remote = yield* resolveRemote(input.cwd, input.host, "getDiffFileContents");
        const revision = `refs/t3-gerrit/${input.number}/${patchSet.number}`;
        yield* fetchRef(input.cwd, remote, patchSet.ref, revision);
        const show = (rev: string, path: string) =>
          git(input.cwd, "getDiffFileContents", ["show", `${rev}:${path}`]).pipe(
            Effect.flatMap((output) =>
              Number(output.exitCode) !== 0
                ? Effect.succeed("")
                : output.stdoutTruncated
                  ? Effect.fail(
                      failure("getDiffFileContents", `Git output for ${path} was truncated.`),
                    )
                  : Effect.succeed(output.stdout),
            ),
          );
        const [oldContents, newContents] = yield* Effect.all(
          [
            input.changeType === "new" || patchSet.parent === null
              ? Effect.succeed("")
              : show(patchSet.parent, input.oldPath),
            input.changeType === "deleted" ? Effect.succeed("") : show(revision, input.newPath),
          ],
          { concurrency: 2 },
        );
        return { oldContents, newContents };
      }),

    getFilesViewed: (input) =>
      Effect.gen(function* () {
        const target = yield* restTarget(input.cwd, input.host, "getFilesViewed");
        const files = yield* rest
          .listFiles({ ...target, change: input.number })
          .pipe(Effect.mapError(failRest("getFilesViewed")));
        return {
          files: files.flatMap((file) =>
            file.reviewed ? [{ path: file.path, state: "viewed" as const }] : [],
          ),
          truncated: false,
        };
      }),

    setFilesViewed: (input) =>
      Effect.gen(function* () {
        const target = yield* restTarget(input.cwd, input.host, "setFilesViewed");
        for (const file of input.files) {
          yield* rest
            .setFileReviewed({
              ...target,
              change: input.number,
              path: file.path,
              reviewed: file.viewed,
            })
            .pipe(Effect.mapError(failRest("setFilesViewed")));
        }
      }),

    runAction: (input) =>
      Effect.gen(function* () {
        const verb = actionVerb[input.action];
        if (verb === undefined) {
          return yield* failure("runAction", `Gerrit cannot ${input.action} a change.`);
        }
        const patchSet = yield* loadPatchSet(input, "runAction");
        yield* cli
          .review({
            cwd: input.cwd,
            host: input.host,
            change: input.number,
            patchSet: patchSet.number,
            action: verb,
          })
          .pipe(Effect.mapError(fail("runAction")));
      }),

    updateChangeRequest: (input) =>
      Effect.gen(function* () {
        const record = yield* readOne(
          {
            cwd: input.cwd,
            host: input.host,
            search: changeQuery(input.number, input.repository),
            limit: 1,
            commitMessage: true,
          },
          "updateChangeRequest",
        );
        const detail = gerritDetailFromRecord(input.host, record);
        if (detail === null) {
          return yield* failure("updateChangeRequest", "Gerrit returned an unreadable change.");
        }
        const target = yield* restTarget(input.cwd, input.host, "updateChangeRequest");
        const subject = (detail.body.split("\n")[0] ?? "").trim();
        const body =
          input.body === undefined ? undefined : submittedDescription(input.body, subject);
        yield* rest
          .updateMessage({
            ...target,
            change: input.number,
            message: rewriteCommitMessage(detail.body, input.title, body),
          })
          .pipe(Effect.mapError(failRest("updateChangeRequest")));
      }),

    comment: (input) =>
      Effect.gen(function* () {
        const patchSet = yield* loadPatchSet(input, "comment");
        yield* cli
          .review({
            cwd: input.cwd,
            host: input.host,
            change: input.number,
            patchSet: patchSet.number,
            message: input.body,
          })
          .pipe(Effect.mapError(fail("comment")));
      }),

    submitReview: (input) =>
      Effect.gen(function* () {
        const patchSet = yield* loadPatchSet(input, "submitReview");
        yield* cli
          .reviewJson({
            cwd: input.cwd,
            host: input.host,
            change: input.number,
            patchSet: patchSet.number,
            review: {
              message: input.body,
              labels: { [CODE_REVIEW_LABEL]: VERDICT_SCORE[input.verdict] },
              comments: gerritInlineComments(input.comments),
            },
          })
          .pipe(Effect.mapError(fail("submitReview")));
      }),

    // Gerrit has no reactions and cannot rewrite a remark; those fail rather than being offered.
    // Replies, resolution and reviewers use Gerrit's REST API for the comment ids and account
    // search the SSH command line cannot carry.
    replyToThread: (input) =>
      Effect.gen(function* () {
        const target = yield* restTarget(input.cwd, input.host, "replyToThread");
        const { root, latest } = yield* threadContext(input, input.threadId, "replyToThread");
        yield* rest
          .postReview({
            ...target,
            change: input.number,
            review: {
              comments: {
                [root.path]: [
                  {
                    // Anchor on the root's own side and line; a file-level root has no line, and
                    // an explicit `line: 1` would move the reply onto the first line instead.
                    ...(root.line === null ? {} : { line: root.line }),
                    ...(root.side === null ? {} : { side: root.side }),
                    message: input.body,
                    in_reply_to: latest.id,
                    unresolved: latest.unresolved,
                  },
                ],
              },
            },
          })
          .pipe(Effect.mapError(failRest("replyToThread")));
      }),

    setThreadResolution: (input) =>
      Effect.gen(function* () {
        const target = yield* restTarget(input.cwd, input.host, "setThreadResolution");
        const { root, latest } = yield* threadContext(input, input.threadId, "setThreadResolution");
        yield* rest
          .postReview({
            ...target,
            change: input.number,
            review: {
              comments: {
                [root.path]: [
                  {
                    ...(root.line === null ? {} : { line: root.line }),
                    ...(root.side === null ? {} : { side: root.side }),
                    // Gerrit drops a comment with an empty message before applying `unresolved`.
                    message: input.resolved ? "Resolved" : "Reopened",
                    in_reply_to: latest.id,
                    unresolved: !input.resolved,
                  },
                ],
              },
            },
          })
          .pipe(Effect.mapError(failRest("setThreadResolution")));
      }),

    listReviewerCandidates: (input) =>
      Effect.gen(function* () {
        const target = yield* restTarget(input.cwd, input.host, "listReviewerCandidates");
        const [accounts, reviewers] = yield* Effect.all(
          [
            rest.searchAccounts({ ...target, query: "is:active", limit: 50 }),
            rest.listReviewers({ ...target, change: input.number }),
          ],
          { concurrency: 2 },
        ).pipe(Effect.mapError(failRest("listReviewerCandidates")));
        const requested = new Set(reviewers.map((reviewer) => reviewer.accountId));
        return {
          candidates: accounts.flatMap((account) => {
            const login = account.username ?? account.name ?? String(account.accountId);
            return [
              {
                login,
                name: account.name,
                avatarUrl: null,
                // Gerrit addresses a reviewer by account id, not by username.
                id: String(account.accountId),
                kind: "user" as const,
                isRequested: requested.has(account.accountId),
              },
            ];
          }),
          truncated: accounts.length >= 50,
        };
      }),

    setReviewerRequest: (input) =>
      Effect.gen(function* () {
        const target = yield* restTarget(input.cwd, input.host, "setReviewerRequest");
        for (const reviewer of input.reviewers) {
          yield* rest
            .setReviewer({
              ...target,
              change: input.number,
              reviewer: reviewer.id,
              requested: input.requested,
            })
            .pipe(Effect.mapError(failRest("setReviewerRequest")));
        }
      }),

    setReaction: unsupported("setReaction"),
  };

  return provider;
});

/** Exported for tests that only need the query a listing builds. */
export { listSearch };
