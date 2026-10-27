import { threadWorkspaceAssignmentKey, type SidebarThreadWorkspace } from "@t3tools/contracts";

import { resolveSidebarThreadStatus } from "../Sidebar.logic";
import type { SidebarThreadSummary } from "../../types";

/**
 * Workspaces are a fork-local grouping of threads: a lighter cousin of Chrome
 * tab groups, applied to the sidebar. The list and assignments live in server
 * settings so they follow the user across clients; only the active selection is
 * per-client.
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

/**
 * A strip slot rather than a workspace: selecting it shows threads with no
 * assignment. Generated ids are `ws-…`, and a real workspace always wins anyway,
 * so no stored workspace can be mistaken for this selection.
 */
export const UNSORTED_WORKSPACE_SELECTION = "unsorted";

export type ThreadWorkspaceAssignments = Readonly<Record<string, string>>;

/** The workspace selection a thread list or search is scoped to; null means unfiltered. */
export type ThreadWorkspaceFilter = {
  readonly assignments: ThreadWorkspaceAssignments;
  readonly workspaces: readonly SidebarThreadWorkspace[];
  readonly activeWorkspaceId: string | null;
};

type ScopedThreadIdentity = {
  readonly environmentId: string;
  readonly id: string;
};

export type ThreadAttentionInput = Pick<
  SidebarThreadSummary,
  | "archivedAt"
  | "settledOverride"
  | "hasPendingApprovals"
  | "hasPendingUserInput"
  | "pendingSubagentRequest"
  | "runtime"
  | "blockedOnThreadWait"
>;

/**
 * A badge means "this thread needs you": a decision is waiting (approval or
 * input), a run failed, or a usage limit stopped it. Working, done and woke are
 * deliberately excluded so the number stays quiet, and a settled thread has
 * already been dealt with, so it never counts.
 */
export function threadNeedsWorkspaceAttention(thread: ThreadAttentionInput): boolean {
  if (thread.archivedAt !== null) return false;
  if (thread.settledOverride === "settled") return false;
  const status = resolveSidebarThreadStatus(thread);
  return status === "approval" || status === "input" || status === "failed" || status === "limited";
}

export function threadWorkspaceKeyFor(thread: ScopedThreadIdentity): string {
  return threadWorkspaceAssignmentKey(thread.environmentId, thread.id);
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

export function isUnsortedWorkspaceSelection(
  activeWorkspaceId: string | null,
  workspaces: readonly SidebarThreadWorkspace[],
): boolean {
  return (
    activeWorkspaceId === UNSORTED_WORKSPACE_SELECTION &&
    !workspaces.some((workspace) => workspace.id === activeWorkspaceId)
  );
}

/**
 * The filter a view must actually apply, or null when every thread shows: the
 * strip is off, or All is selected.
 */
function effectiveThreadWorkspaceFilter(
  filter: ThreadWorkspaceFilter | null,
): ThreadWorkspaceFilter | null {
  return filter !== null && filter.activeWorkspaceId !== null ? filter : null;
}

export function filterThreadsByWorkspace<T extends ScopedThreadIdentity>(
  threads: readonly T[],
  filter: ThreadWorkspaceFilter | null,
): readonly T[] {
  const active = effectiveThreadWorkspaceFilter(filter);
  if (active === null) return threads;
  const assignedWorkspaceId = (thread: T) =>
    resolveAssignedWorkspaceId(
      active.assignments,
      threadWorkspaceKeyFor(thread),
      active.workspaces,
    );
  if (isUnsortedWorkspaceSelection(active.activeWorkspaceId, active.workspaces)) {
    return threads.filter((thread) => assignedWorkspaceId(thread) === null);
  }
  return threads.filter((thread) => assignedWorkspaceId(thread) === active.activeWorkspaceId);
}

export type ThreadWorkspaceAttentionCounts = {
  /** Workspace id to the number of its threads that need the user. */
  readonly byWorkspace: ReadonlyMap<string, number>;
  /** Unassigned threads that need the user: the "Unsorted" badge. */
  readonly unsorted: number;
  /** Every thread that needs the user, assigned or not: the "All" badge. */
  readonly total: number;
};

/** No badges: the strip is off, so nothing is filed and nothing is drawn. */
const NO_THREAD_WORKSPACE_ATTENTION: ThreadWorkspaceAttentionCounts = {
  byWorkspace: new Map(),
  unsorted: 0,
  total: 0,
};

export function countThreadWorkspaceAttention<T extends ScopedThreadIdentity>(
  threads: readonly T[],
  filter: ThreadWorkspaceFilter | null,
  needsAttention: (thread: T) => boolean,
): ThreadWorkspaceAttentionCounts {
  if (filter === null) return NO_THREAD_WORKSPACE_ATTENTION;
  const byWorkspace = new Map<string, number>();
  let unsorted = 0;
  let total = 0;
  for (const thread of threads) {
    if (!needsAttention(thread)) continue;
    total += 1;
    const workspaceId = resolveAssignedWorkspaceId(
      filter.assignments,
      threadWorkspaceKeyFor(thread),
      filter.workspaces,
    );
    if (workspaceId === null) {
      unsorted += 1;
      continue;
    }
    byWorkspace.set(workspaceId, (byWorkspace.get(workspaceId) ?? 0) + 1);
  }
  return { byWorkspace, unsorted, total };
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
  filter: ThreadWorkspaceFilter | null,
): OrderedThreadWorkspaceSearch<T> {
  const active = effectiveThreadWorkspaceFilter(filter);
  if (active === null || results.length === 0) {
    return { results, otherWorkspacesStartIndex: null };
  }
  const activeWorkspaceId = active.activeWorkspaceId;
  const unsorted = isUnsortedWorkspaceSelection(activeWorkspaceId, active.workspaces);
  const inWorkspace: T[] = [];
  const otherWorkspaces: T[] = [];
  for (const thread of results) {
    const assigned = resolveAssignedWorkspaceId(
      active.assignments,
      threadWorkspaceKeyFor(thread),
      active.workspaces,
    );
    if (unsorted ? assigned === null : assigned === activeWorkspaceId) inWorkspace.push(thread);
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

/**
 * The Settled header counts the rows this client holds plus the older pages it
 * has not loaded. Those pages carry no assignment, so a view with a workspace
 * selected counts only the rows it holds.
 */
export function threadWorkspaceSettledCount(input: {
  readonly heldCount: number;
  readonly unloadedCount: number;
  readonly filter: ThreadWorkspaceFilter | null;
}): number {
  return effectiveThreadWorkspaceFilter(input.filter) === null
    ? input.heldCount + input.unloadedCount
    : input.heldCount;
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
