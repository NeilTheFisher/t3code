import type { VcsGraphWorktree } from "@t3tools/contracts";

import type { MockWorktree } from "./mockGraph";

/**
 * The graph's own view of a checkout. `main` and `current` are separate facts:
 * the repository's own worktree, and the one this graph was read from. Two
 * threads can therefore show the same refs with different `current` checkouts.
 */
export function graphWorktrees(
  worktrees: ReadonlyArray<VcsGraphWorktree> | undefined,
): ReadonlyArray<MockWorktree> {
  return (worktrees ?? []).map((worktree) => ({
    path: worktree.path,
    branch: worktree.branch ?? "detached",
    threadId: null,
    main: worktree.isMain,
    current: worktree.isCurrent,
    dirty: worktree.dirty,
    stale: false,
  }));
}
