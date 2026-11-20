import type { VcsGraphRef, VcsGraphRefKind } from "@t3tools/contracts";

export const COMMIT_GRAPH_INITIAL_LIMIT = 120;
export const COMMIT_GRAPH_PAGE_SIZE = 120;
/** The contract's `limit` ceiling; a window past it would be rejected. */
export const COMMIT_GRAPH_MAX_LIMIT = 1_000;

export function nextCommitGraphLimit(limit: number): number {
  return Math.min(limit + COMMIT_GRAPH_PAGE_SIZE, COMMIT_GRAPH_MAX_LIMIT);
}

export function shortCommitSha(sha: string): string {
  return sha.slice(0, 7);
}

const REF_KIND_ORDER: Record<VcsGraphRefKind, number> = {
  head: 0,
  branch: 1,
  remote: 2,
  tag: 3,
};

export interface CommitRefBadge {
  readonly key: string;
  readonly kind: VcsGraphRefKind;
  readonly name: string;
  readonly current: boolean;
}

export interface CommitRefBadges {
  readonly badges: ReadonlyArray<CommitRefBadge>;
  readonly hidden: number;
}

/**
 * A phone row fits a few badges, so HEAD leads and the rest keep their kind order.
 * The caller names how many are left over instead of hiding them silently.
 */
export function commitRefBadges(
  refs: ReadonlyArray<VcsGraphRef>,
  currentBranch: string | null,
  maxBadges = 3,
): CommitRefBadges {
  const ordered = refs
    .map((ref, index) => ({ ref, index }))
    .sort(
      (left, right) =>
        REF_KIND_ORDER[left.ref.kind] - REF_KIND_ORDER[right.ref.kind] || left.index - right.index,
    )
    .map(({ ref }) => ref);
  const badges = ordered.slice(0, Math.max(0, maxBadges)).map((ref) => ({
    key: `${ref.kind}:${ref.name}`,
    kind: ref.kind,
    name: ref.name,
    current: ref.kind === "branch" && ref.name === currentBranch,
  }));
  return { badges, hidden: ordered.length - badges.length };
}

/** The checkout's folder name, which is what a repository is called in a list. */
export function repositoryLabelFromCwd(cwd: string): string {
  const trimmed = cwd.replace(/[\\/]+$/, "");
  const separator = Math.max(trimmed.lastIndexOf("/"), trimmed.lastIndexOf("\\"));
  return separator >= 0 ? trimmed.slice(separator + 1) : trimmed;
}
