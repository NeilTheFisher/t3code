import * as DateTime from "effect/DateTime";
import * as Result from "effect/Result";
import * as Schema from "effect/Schema";
import type { ChangeRequestState, PullRequestState } from "@t3tools/contracts";

/**
 * Gerrit's SSH `gerrit query` answers in newline-delimited JSON — one object per change, then a
 * final `{"type":"stats",...}` record. The reader keeps the changes and only lifts `moreChanges`
 * out of the stats row, since that is what tells a listing whether a cursor has further to go.
 */

const RawAccountSchema = Schema.Struct({
  name: Schema.optional(Schema.NullOr(Schema.String)),
  email: Schema.optional(Schema.NullOr(Schema.String)),
  username: Schema.optional(Schema.NullOr(Schema.String)),
});

const RawApprovalSchema = Schema.Struct({
  type: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  value: Schema.optional(Schema.NullOr(Schema.String)),
  grantedOn: Schema.optional(Schema.Int),
  by: Schema.optional(Schema.NullOr(RawAccountSchema)),
});

const RawFileSchema = Schema.Struct({
  file: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  insertions: Schema.optional(Schema.Int),
  /** Gerrit reports deletions as a negative count. */
  deletions: Schema.optional(Schema.Int),
});

const RawCommentSchema = Schema.Struct({
  timestamp: Schema.optional(Schema.Int),
  reviewer: Schema.optional(Schema.NullOr(RawAccountSchema)),
  author: Schema.optional(Schema.NullOr(RawAccountSchema)),
  message: Schema.optional(Schema.NullOr(Schema.String)),
  /** Gerrit names a file comment's path `path` in REST and `file` in the query output. */
  path: Schema.optional(Schema.NullOr(Schema.String)),
  file: Schema.optional(Schema.NullOr(Schema.String)),
  line: Schema.optional(Schema.NullOr(Schema.Int)),
  in_reply_to: Schema.optional(Schema.NullOr(Schema.String)),
  unresolved: Schema.optional(Schema.Boolean),
});

const RawPatchSetSchema = Schema.Struct({
  number: Schema.optional(Schema.Int),
  revision: Schema.optional(Schema.String),
  ref: Schema.optional(Schema.String),
  createdOn: Schema.optional(Schema.Int),
  author: Schema.optional(Schema.NullOr(RawAccountSchema)),
  uploader: Schema.optional(Schema.NullOr(RawAccountSchema)),
  kind: Schema.optional(Schema.String),
  parents: Schema.optional(Schema.Array(Schema.String)),
  sizeInsertions: Schema.optional(Schema.Int),
  sizeDeletions: Schema.optional(Schema.Int),
  files: Schema.optional(Schema.Array(RawFileSchema)),
  approvals: Schema.optional(Schema.Array(RawApprovalSchema)),
  comments: Schema.optional(Schema.Array(RawCommentSchema)),
});

const RawChangeSchema = Schema.Struct({
  project: Schema.optional(Schema.String),
  branch: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  number: Schema.optional(Schema.Int),
  subject: Schema.optional(Schema.String),
  owner: Schema.optional(Schema.NullOr(RawAccountSchema)),
  url: Schema.optional(Schema.String),
  commitMessage: Schema.optional(Schema.NullOr(Schema.String)),
  createdOn: Schema.optional(Schema.Int),
  lastUpdated: Schema.optional(Schema.Int),
  open: Schema.optional(Schema.Boolean),
  status: Schema.optional(Schema.String),
  wip: Schema.optional(Schema.Boolean),
  comments: Schema.optional(Schema.Array(RawCommentSchema)),
  currentPatchSet: Schema.optional(Schema.NullOr(RawPatchSetSchema)),
  patchSets: Schema.optional(Schema.Array(RawPatchSetSchema)),
});

const RawStatsSchema = Schema.Struct({
  type: Schema.Literal("stats"),
  rowCount: Schema.optional(Schema.Int),
  moreChanges: Schema.optional(Schema.Boolean),
});

const decodeRawChange = Schema.decodeUnknownResult(RawChangeSchema);
const decodeRawStats = Schema.decodeUnknownResult(RawStatsSchema);

/** The scan key Gerrit writes for a file that only carries the commit message. */
const COMMIT_MESSAGE_FILE = "/COMMIT_MSG";

type RawPatchSet = Schema.Schema.Type<typeof RawPatchSetSchema>;
export type GerritQueryChange = Schema.Schema.Type<typeof RawChangeSchema>;

export interface GerritChangePage {
  readonly changes: ReadonlyArray<GerritQueryChange>;
  readonly moreChanges: boolean;
}

export interface GerritActor {
  readonly login: string;
  readonly name: string | null;
}

export interface GerritChange {
  readonly number: number;
  readonly title: string;
  readonly state: PullRequestState;
  readonly isDraft: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly mergedAt: string | null;
  readonly closedAt: string | null;
  readonly owner: GerritActor | null;
  readonly baseBranch: string;
  readonly headRef: string;
  readonly project: string;
  readonly changeId: string | null;
  readonly url: string;
}

export interface GerritChangeDetail extends GerritChange {
  readonly body: string;
  readonly additions: number;
  readonly deletions: number;
  readonly changedFiles: number;
  readonly reviewers: ReadonlyArray<GerritActor>;
}

export interface GerritCommentEntry {
  readonly id: string;
  readonly kind: "issue-comment" | "review-comment";
  readonly body: string;
  readonly createdAt: string;
  readonly author: GerritActor | null;
  readonly path: string | null;
  readonly line: number | null;
}

export interface GerritChangeActivity {
  readonly comments: ReadonlyArray<GerritCommentEntry>;
}

/**
 * Gerrit statuses to the contract's three. Anything unknown is read as open rather than failing
 * the whole payload: a new status Gerrit introduces must not break a listing.
 */
export function gerritStateToChangeRequestState(
  status: string | null | undefined,
): PullRequestState {
  switch (status) {
    case "MERGED":
      return "merged";
    case "ABANDONED":
      return "closed";
    default:
      // NEW, DRAFT and any future open statuses.
      return "open";
  }
}

/** The contract's state back to Gerrit's own query grammar; null spans them all. */
export function gerritStateQuery(state: ChangeRequestState | "all"): string | null {
  switch (state) {
    case "open":
      return "status:open";
    case "merged":
      return "status:merged";
    case "closed":
      // Gerrit's `closed` spans merged and abandoned; the contract's closed means abandoned.
      return "status:abandoned";
    case "all":
      return null;
  }
}

/** Gerrit answers with Unix seconds, which the contract wants as second-precision UTC ISO. */
export function gerritEpochToIso(seconds: number | null | undefined): string | null {
  if (seconds === undefined || seconds === null || !Number.isFinite(seconds)) return null;
  return DateTime.formatIso(DateTime.makeUnsafe(seconds * 1000)).replace(/\.\d{3}Z$/u, "Z");
}

function accountLogin(
  account: Schema.Schema.Type<typeof RawAccountSchema> | null | undefined,
): string | null {
  return account?.username ?? account?.email ?? account?.name ?? null;
}

/** An account with a name to show and, because the login falls back to it, one to compare. */
function actor(
  account: Schema.Schema.Type<typeof RawAccountSchema> | null | undefined,
): GerritActor | null {
  const login = accountLogin(account)?.trim();
  if (account == null || login === undefined || login.length === 0) return null;
  return { login, name: account.name ?? null };
}

export function gerritChangeUrl(host: string, project: string, number: number): string {
  return `https://${host}/c/${project}/+/${number}`;
}

export function currentPatchSet(record: GerritQueryChange): RawPatchSet | null {
  return record.currentPatchSet ?? record.patchSets?.at(-1) ?? null;
}

export function gerritChangeFromRecord(
  host: string,
  record: GerritQueryChange,
): GerritChange | null {
  const number = record.number;
  const subject = record.subject;
  const project = record.project;
  const baseBranch = record.branch;
  const createdAt = gerritEpochToIso(record.createdOn);
  const updatedAt = gerritEpochToIso(record.lastUpdated);
  if (
    number === undefined ||
    subject === undefined ||
    project === undefined ||
    baseBranch === undefined ||
    createdAt === null ||
    updatedAt === null
  ) {
    // A malformed row is dropped rather than failing the listing.
    return null;
  }
  const patchSet = currentPatchSet(record);
  const state = gerritStateToChangeRequestState(record.status);
  return {
    number,
    title: subject,
    state,
    isDraft: record.wip === true,
    createdAt,
    updatedAt,
    mergedAt: state === "merged" ? updatedAt : null,
    closedAt: state === "closed" ? updatedAt : null,
    owner: actor(record.owner),
    baseBranch,
    headRef: patchSet?.ref ?? `refs/heads/${baseBranch}`,
    project,
    changeId: record.id ?? null,
    url: record.url ?? gerritChangeUrl(host, project, number),
  };
}

function realFiles(
  patchSet: RawPatchSet | null,
): ReadonlyArray<Schema.Schema.Type<typeof RawFileSchema>> {
  return (patchSet?.files ?? []).filter((file) => file.file !== COMMIT_MESSAGE_FILE);
}

export function gerritDetailFromRecord(
  host: string,
  record: GerritQueryChange,
): GerritChangeDetail | null {
  const change = gerritChangeFromRecord(host, record);
  if (change === null) return null;
  const patchSet = currentPatchSet(record);
  const files = realFiles(patchSet);
  const additions = files.reduce((sum, file) => sum + Math.max(file.insertions ?? 0, 0), 0);
  const deletions = files.reduce(
    (sum, file) => sum + Math.abs(Math.min(file.deletions ?? 0, 0)),
    0,
  );
  const seen = new Set<string>();
  const reviewers: Array<GerritActor> = [];
  for (const approval of patchSet?.approvals ?? []) {
    const reviewer = actor(approval.by);
    if (reviewer === null || seen.has(reviewer.login)) continue;
    seen.add(reviewer.login);
    reviewers.push(reviewer);
  }
  return {
    ...change,
    body: record.commitMessage ?? change.title,
    additions,
    deletions,
    changedFiles: files.length,
    reviewers,
  };
}

function commentEntries(record: GerritQueryChange): Array<GerritCommentEntry> {
  const entries: Array<GerritCommentEntry> = [];
  const pathOf = (comment: Schema.Schema.Type<typeof RawCommentSchema>) =>
    comment.path ?? comment.file ?? null;
  (record.comments ?? []).forEach((comment, index) => {
    const createdAt = gerritEpochToIso(comment.timestamp);
    if (createdAt === null) return;
    const path = pathOf(comment);
    entries.push({
      id: `message-${comment.timestamp ?? index}-${index}`,
      kind: path === null ? "issue-comment" : "review-comment",
      body: comment.message ?? "",
      createdAt,
      author: actor(comment.reviewer ?? comment.author),
      path,
      line: comment.line ?? null,
    });
  });
  (record.patchSets ?? []).forEach((patchSet) => {
    (patchSet.comments ?? []).forEach((comment, index) => {
      const path = pathOf(comment);
      if (path === null) return;
      const createdAt = gerritEpochToIso(comment.timestamp ?? patchSet.createdOn);
      if (createdAt === null) return;
      entries.push({
        id: `inline-${patchSet.number ?? 0}-${comment.timestamp ?? index}-${index}`,
        kind: "review-comment",
        body: comment.message ?? "",
        createdAt,
        author: actor(comment.reviewer ?? comment.author),
        path,
        line: comment.line ?? null,
      });
    });
  });
  return entries.toSorted((left, right) => left.createdAt.localeCompare(right.createdAt));
}

export function gerritActivityFromRecord(record: GerritQueryChange): GerritChangeActivity {
  return { comments: commentEntries(record) };
}

/**
 * Splits Gerrit's newline-delimited JSON into changes and lifts the truncation flag out of the
 * trailing stats record. A line that is not a decodable change is dropped rather than failing the
 * whole answer, which keeps one malformed row from hiding every other.
 */
export function decodeGerritQueryOutput(raw: string): Result.Result<GerritChangePage, unknown> {
  const changes: Array<GerritQueryChange> = [];
  let moreChanges = false;
  let lastFailure: unknown = null;
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.length === 0) continue;
    let parsed: unknown;
    try {
      parsed = JSON.parse(trimmed);
    } catch (cause) {
      lastFailure = cause;
      continue;
    }
    const stats = decodeRawStats(parsed);
    if (Result.isSuccess(stats)) {
      moreChanges = stats.success.moreChanges === true;
      continue;
    }
    // Gerrit answers a bad query with a `{"type":"error","message":...}` record, which the change
    // schema would otherwise swallow as an empty change and report as a successful empty listing.
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "type" in parsed &&
      parsed.type === "error"
    ) {
      return Result.fail("message" in parsed ? parsed.message : parsed);
    }
    const decoded = decodeRawChange(parsed);
    if (Result.isSuccess(decoded)) {
      changes.push(decoded.success);
    } else {
      lastFailure = decoded.failure;
    }
  }
  if (changes.length === 0 && lastFailure !== null) return Result.fail(lastFailure);
  return Result.succeed({ changes, moreChanges });
}
