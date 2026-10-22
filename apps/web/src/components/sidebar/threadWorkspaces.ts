import type { SidebarThreadWorkspace } from "@t3tools/contracts";

/**
 * Workspaces are a fork-local, client-only grouping of threads: a lighter
 * cousin of Chrome tab groups, applied to the sidebar. Nothing here crosses the
 * wire, so the server, desktop, and mobile clients are unaffected.
 */

export const THREAD_WORKSPACE_ICON_KEYS = [
  "briefcase",
  "building-2",
  "house",
  "flask-conical",
  "notebook-pen",
  "code",
  "graduation-cap",
  "palette",
] as const;
export type ThreadWorkspaceIconKey = (typeof THREAD_WORKSPACE_ICON_KEYS)[number];

export const THREAD_WORKSPACE_TINTS = [
  "info",
  "warning",
  "success",
  "error",
  "update",
  "primary",
] as const;
export type ThreadWorkspaceTint = (typeof THREAD_WORKSPACE_TINTS)[number];

export const DEFAULT_THREAD_WORKSPACE_ICON: ThreadWorkspaceIconKey = "briefcase";
export const DEFAULT_THREAD_WORKSPACE_TINT: ThreadWorkspaceTint = "info";

/** Seeded once, when the beta is first enabled, so the strip is never empty. */
export const DEFAULT_THREAD_WORKSPACES: readonly SidebarThreadWorkspace[] = [
  { id: "work", name: "Work", icon: "building-2", tint: "info" },
  { id: "personal", name: "Personal", icon: "house", tint: "success" },
];

export type ThreadWorkspaceAssignments = Readonly<Record<string, string>>;

type ScopedThreadIdentity = {
  readonly environmentId: string;
  readonly id: string;
};

export function threadWorkspaceKey(environmentId: string, threadId: string): string {
  return `${environmentId}:${threadId}`;
}

/** Mirrors `scopedThreadKey`, without widening caller ids to branded types. */
export function threadWorkspaceKeyFor(thread: ScopedThreadIdentity): string {
  return threadWorkspaceKey(thread.environmentId, thread.id);
}

export function isThreadWorkspaceIconKey(value: string): value is ThreadWorkspaceIconKey {
  return (THREAD_WORKSPACE_ICON_KEYS as readonly string[]).includes(value);
}

export function isThreadWorkspaceTint(value: string): value is ThreadWorkspaceTint {
  return (THREAD_WORKSPACE_TINTS as readonly string[]).includes(value);
}

/** Assignments to a deleted workspace are treated as unassigned, not as dangling. */
export function resolveAssignedWorkspaceId(
  assignments: ThreadWorkspaceAssignments,
  threadKey: string,
  workspaces: readonly SidebarThreadWorkspace[],
): string | null {
  const assigned = assignments[threadKey];
  if (assigned === undefined) return null;
  return workspaces.some((workspace) => workspace.id === assigned) ? assigned : null;
}

export function filterThreadsByWorkspace<T extends ScopedThreadIdentity>(
  threads: readonly T[],
  input: {
    readonly assignments: ThreadWorkspaceAssignments;
    readonly workspaces: readonly SidebarThreadWorkspace[];
    readonly activeWorkspaceId: string | null;
  },
): readonly T[] {
  if (input.activeWorkspaceId === null) return threads;
  return threads.filter(
    (thread) =>
      resolveAssignedWorkspaceId(
        input.assignments,
        threadWorkspaceKeyFor(thread),
        input.workspaces,
      ) === input.activeWorkspaceId,
  );
}

export type ThreadWorkspaceAttentionCounts = {
  /** Workspace id to the number of its threads that need the user. */
  readonly byWorkspace: ReadonlyMap<string, number>;
  /** Every thread that needs the user, assigned or not: the "All" badge. */
  readonly total: number;
};

export function countThreadWorkspaceAttention<T extends ScopedThreadIdentity>(
  threads: readonly T[],
  input: {
    readonly assignments: ThreadWorkspaceAssignments;
    readonly workspaces: readonly SidebarThreadWorkspace[];
    readonly needsAttention: (thread: T) => boolean;
  },
): ThreadWorkspaceAttentionCounts {
  const byWorkspace = new Map<string, number>();
  let total = 0;
  for (const thread of threads) {
    if (!input.needsAttention(thread)) continue;
    total += 1;
    const workspaceId = resolveAssignedWorkspaceId(
      input.assignments,
      threadWorkspaceKeyFor(thread),
      input.workspaces,
    );
    if (workspaceId === null) continue;
    byWorkspace.set(workspaceId, (byWorkspace.get(workspaceId) ?? 0) + 1);
  }
  return { byWorkspace, total };
}

export type OrderedThreadWorkspaceSearch<T> = {
  readonly results: readonly T[];
  /**
   * Index of the first result outside the active workspace, so the list can
   * label where the current workspace's matches end. Null when every result
   * belongs to the active workspace (or no workspace is active).
   */
  readonly otherWorkspacesStartIndex: number | null;
};

/**
 * Search deliberately escapes the active workspace: filtering must never hide a
 * thread the user is looking for. Matches inside the active workspace sort
 * first so the likely answer is still at the top.
 */
export function orderThreadWorkspaceSearch<T extends ScopedThreadIdentity>(
  results: readonly T[],
  input: {
    readonly assignments: ThreadWorkspaceAssignments;
    readonly workspaces: readonly SidebarThreadWorkspace[];
    readonly activeWorkspaceId: string | null;
  },
): OrderedThreadWorkspaceSearch<T> {
  const activeWorkspaceId = input.activeWorkspaceId;
  if (activeWorkspaceId === null || results.length === 0) {
    return { results, otherWorkspacesStartIndex: null };
  }
  const inWorkspace: T[] = [];
  const otherWorkspaces: T[] = [];
  for (const thread of results) {
    const assigned = resolveAssignedWorkspaceId(
      input.assignments,
      threadWorkspaceKeyFor(thread),
      input.workspaces,
    );
    if (assigned === activeWorkspaceId) inWorkspace.push(thread);
    else otherWorkspaces.push(thread);
  }
  if (inWorkspace.length === 0 || otherWorkspaces.length === 0) {
    return { results, otherWorkspacesStartIndex: null };
  }
  return {
    results: [...inWorkspace, ...otherWorkspaces],
    otherWorkspacesStartIndex: inWorkspace.length,
  };
}

/** Keeps the sidebar badge narrow the way an inbox badge is narrow. */
export function formatThreadWorkspaceAttentionCount(count: number): string {
  return count > 9 ? "9+" : String(count);
}

export function createThreadWorkspaceId(
  existing: readonly SidebarThreadWorkspace[],
  random: () => number = Math.random,
): string {
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const id = `ws-${random().toString(36).slice(2, 10)}`;
    if (!existing.some((workspace) => workspace.id === id)) return id;
  }
  return `ws-${existing.length + 1}`;
}

/** A thread moved into a workspace follows it even while `All` stays selected. */
export function assignThreadToWorkspace(
  assignments: ThreadWorkspaceAssignments,
  threadKeys: readonly string[],
  workspaceId: string | null,
): ThreadWorkspaceAssignments {
  if (threadKeys.length === 0) return assignments;
  const next = { ...assignments };
  for (const key of threadKeys) {
    if (workspaceId === null) delete next[key];
    else next[key] = workspaceId;
  }
  return next;
}

export function removeThreadWorkspaceAssignments(
  assignments: ThreadWorkspaceAssignments,
  workspaceId: string,
): ThreadWorkspaceAssignments {
  const next: Record<string, string> = {};
  for (const [key, assigned] of Object.entries(assignments)) {
    if (assigned !== workspaceId) next[key] = assigned;
  }
  return next;
}
