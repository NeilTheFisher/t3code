import * as Schema from "effect/Schema";
import { GitRefName, TrimmedNonEmptyString } from "./baseSchemas.ts";
import { GitCommandError } from "./git.ts";
import { VcsError } from "./vcs.ts";

// An object id or HEAD, never an option-looking ref, since it is passed to git as a revision.
const ReviewMergeBase = Schema.String.check(
  Schema.isPattern(/^(?:[0-9a-f]{40}|[0-9a-f]{64}|HEAD)$/),
);

export const ReviewDiffChangeType = Schema.Literals([
  "change",
  "rename-pure",
  "rename-changed",
  "new",
  "deleted",
]);
export type ReviewDiffChangeType = typeof ReviewDiffChangeType.Type;
export const ReviewDiffPreviewSubmodule = Schema.Struct({
  path: TrimmedNonEmptyString,
  from: TrimmedNonEmptyString,
  to: TrimmedNonEmptyString,
});
export type ReviewDiffPreviewSubmodule = typeof ReviewDiffPreviewSubmodule.Type;

export const ReviewDiffPreviewCommitRange = Schema.Struct({
  from: TrimmedNonEmptyString,
  to: TrimmedNonEmptyString,
});
export type ReviewDiffPreviewCommitRange = typeof ReviewDiffPreviewCommitRange.Type;

export const ReviewDiffPreviewInput = Schema.Struct({
  cwd: TrimmedNonEmptyString,
  baseRef: Schema.optional(GitRefName),
  // A branch-range file read reuses its preview's merge base instead of resolving it again.
  mergeBase: Schema.optionalKey(ReviewMergeBase),
  commitSha: Schema.optional(TrimmedNonEmptyString),
  /** Set to preview a commit range instead of the working tree or a branch. */
  commitRange: Schema.optionalKey(ReviewDiffPreviewCommitRange),
  /** Set to preview a submodule's own history instead of the parent repository. */
  submodule: Schema.optionalKey(ReviewDiffPreviewSubmodule),
  ignoreWhitespace: Schema.optionalKey(Schema.Boolean),
  sourceKind: Schema.optionalKey(
    Schema.Literals(["working-tree", "branch-range", "commit", "commit-range"]),
  ),
  trackedOnly: Schema.optionalKey(Schema.Boolean),
  /** From a trackedOnly result, so the complete read adds only the untracked files. */
  completionToken: Schema.optionalKey(Schema.String),
  metadataOnly: Schema.optionalKey(Schema.Boolean),
  file: Schema.optionalKey(
    Schema.Struct({
      path: Schema.NonEmptyString,
      previousPath: Schema.NullOr(Schema.NonEmptyString),
      sourceKind: Schema.Literals([
        "working-tree",
        "branch-range",
        "commit",
        "commit-range",
        "submodule-range",
      ]),
      // The preview's change type; the server still confirms a tracked path before relying on it.
      changeType: Schema.optionalKey(ReviewDiffChangeType),
    }),
  ),
});
export type ReviewDiffPreviewInput = typeof ReviewDiffPreviewInput.Type;

export const ReviewBranchCommitsInput = Schema.Struct({
  cwd: TrimmedNonEmptyString,
  baseRef: Schema.optional(GitRefName),
});
export type ReviewBranchCommitsInput = typeof ReviewBranchCommitsInput.Type;

export const ReviewBranchCommitsResult = Schema.Struct({
  commits: Schema.Array(
    Schema.Struct({
      sha: Schema.String,
      subject: Schema.String,
      committedAt: Schema.String,
    }),
  ),
  truncated: Schema.Boolean,
});
export type ReviewBranchCommitsResult = typeof ReviewBranchCommitsResult.Type;

export const ReviewDiffPreviewSourceKind = Schema.Literals([
  "working-tree",
  "branch-range",
  "commit",
  "commit-range",
  "submodule-range",
]);
export type ReviewDiffPreviewSourceKind = typeof ReviewDiffPreviewSourceKind.Type;

export const ReviewDiffFileStat = Schema.Struct({
  path: Schema.String,
  previousPath: Schema.NullOr(Schema.String),
  // Older servers omit it.
  changeType: Schema.optionalKey(ReviewDiffChangeType),
  additions: Schema.Number,
  deletions: Schema.Number,
});
export type ReviewDiffFileStat = typeof ReviewDiffFileStat.Type;

export const ReviewDiffPreviewSource = Schema.Struct({
  id: TrimmedNonEmptyString,
  kind: ReviewDiffPreviewSourceKind,
  title: TrimmedNonEmptyString,
  commitSubject: Schema.optionalKey(TrimmedNonEmptyString),
  baseRef: Schema.NullOr(GitRefName),
  headRef: Schema.NullOr(GitRefName),
  // Branch-range only; older servers omit it.
  mergeBase: Schema.optionalKey(ReviewMergeBase),
  diff: Schema.String,
  diffHash: TrimmedNonEmptyString,
  truncated: Schema.Boolean,
  patchesDeferred: Schema.optionalKey(Schema.Boolean),
  /** Set when the underlying git command failed; the diff is empty, not clean. */
  error: Schema.optional(TrimmedNonEmptyString),
  /** Complete statistics, independent of patch limits. Absent on older servers. */
  files: Schema.optionalKey(Schema.Array(ReviewDiffFileStat)),
});
export type ReviewDiffPreviewSource = typeof ReviewDiffPreviewSource.Type;

export const ReviewDiffFileContentsInput = Schema.Struct({
  cwd: TrimmedNonEmptyString,
  sourceKind: ReviewDiffPreviewSourceKind,
  /** The submodule to read inside when `sourceKind` is `submodule-range`. */
  submodulePath: Schema.optionalKey(TrimmedNonEmptyString),
  changeType: ReviewDiffChangeType,
  baseRef: Schema.NullOr(GitRefName),
  headRef: Schema.NullOr(GitRefName),
  oldPath: Schema.NonEmptyString,
  newPath: Schema.NonEmptyString,
});
export type ReviewDiffFileContentsInput = typeof ReviewDiffFileContentsInput.Type;

export const ReviewDiffFileContentsResult = Schema.Struct({
  oldContents: Schema.String,
  newContents: Schema.String,
});
export type ReviewDiffFileContentsResult = typeof ReviewDiffFileContentsResult.Type;

export const ReviewDiffPreviewResult = Schema.Struct({
  cwd: TrimmedNonEmptyString,
  generatedAt: Schema.DateTimeUtc,
  sources: Schema.Array(ReviewDiffPreviewSource),
  incomplete: Schema.optionalKey(Schema.Boolean),
  completionToken: Schema.optionalKey(Schema.String),
});
export type ReviewDiffPreviewResult = typeof ReviewDiffPreviewResult.Type;

export const ReviewDiffPreviewError = Schema.Union([VcsError, GitCommandError]);
export type ReviewDiffPreviewError = typeof ReviewDiffPreviewError.Type;
