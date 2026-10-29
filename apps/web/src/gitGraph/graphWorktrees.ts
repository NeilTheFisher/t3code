import type { VcsGraphWorktree } from "@t3tools/contracts";

import type { MockWorktree } from "./mockGraph";

/** The part of a thread shell the worktree list needs. */
export interface WorktreeThreadLink {
  readonly id: string;
  readonly projectId: string;
  readonly worktreePath: string | null;
}

function normalizePath(path: string | null): string | null {
  if (path === null) return null;
  const trimmed = path.trim().replace(/\/+$/, "");
  return trimmed.length > 0 ? trimmed : null;
}

/**
 * The graph's own view of a checkout. `main` and `current` are separate facts:
 * the repository's own worktree, and the one this graph was read from. Two
 * threads can therefore show the same refs with different `current` checkouts.
 *
 * A checkout is linked to a thread by path; the repository's own checkout is the
 * one threads without a worktree live in, so it matches those of this project.
 */
export function graphWorktrees(
  worktrees: ReadonlyArray<VcsGraphWorktree> | undefined,
  threads: ReadonlyArray<WorktreeThreadLink>,
  projectId: string | null,
): ReadonlyArray<MockWorktree> {
  const byPath = new Map<string, string[]>();
  const inMainCheckout: string[] = [];
  for (const thread of threads) {
    const threadPath = normalizePath(thread.worktreePath);
    if (threadPath === null) {
      if (projectId === null || thread.projectId === projectId) inMainCheckout.push(thread.id);
      continue;
    }
    const list = byPath.get(threadPath) ?? [];
    list.push(thread.id);
    byPath.set(threadPath, list);
  }

  return (worktrees ?? []).map((worktree) => {
    const path = normalizePath(worktree.path) ?? worktree.path;
    return {
      path: worktree.path,
      head: worktree.head,
      branch: worktree.branch ?? "detached",
      threadIds: worktree.isMain ? inMainCheckout : (byPath.get(path) ?? []),
      main: worktree.isMain,
      current: worktree.isCurrent,
      dirty: worktree.dirty,
      stale: false,
    };
  });
}
