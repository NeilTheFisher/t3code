/**
 * Watcher-only decisions for Android alert cards. Each one is pure so the
 * dev watcher script and the relay can share the same reading of a visit.
 */

export function isTerminalAwarenessPhase(phase: string): boolean {
  return phase === "completed" || phase === "failed";
}

export function isPendingAwarenessPhase(phase: string): boolean {
  return phase === "waiting_for_approval" || phase === "waiting_for_input";
}

function epochMillis(value: string | null | undefined): number | null {
  if (value == null) return null;
  const millis = Date.parse(value);
  return Number.isNaN(millis) ? null : millis;
}

/**
 * A terminal alert is stale once the thread was read at or after its run
 * finished. FCM can deliver that alert late, so the decision has to be made
 * again at send time rather than when the phase changed.
 */
export function completionReadPast(input: {
  readonly phase: string;
  readonly stateUpdatedAt: string;
  readonly latestRunCompletedAt?: string | null;
  readonly lastVisitedAt?: string | null;
}): boolean {
  if (!isTerminalAwarenessPhase(input.phase)) return false;
  const readAt = epochMillis(input.lastVisitedAt);
  const completedAt = epochMillis(input.latestRunCompletedAt ?? input.stateUpdatedAt);
  return readAt !== null && completedAt !== null && readAt >= completedAt;
}

/**
 * `undefined` means the watcher has no baseline for this thread yet, so the
 * first `lastVisitedAt` it sees is seeded rather than treated as a read.
 * Pending cards stay until answered, so a read never dismisses them.
 */
export function visitAdvanceDismissal(input: {
  readonly phase: string | null;
  readonly previousVisitedAt?: string | null | undefined;
  readonly nextVisitedAt?: string | null | undefined;
}): { readonly readAt: string } | null {
  if (input.previousVisitedAt === undefined) return null;
  if (input.phase !== null && isPendingAwarenessPhase(input.phase)) return null;
  const next = input.nextVisitedAt;
  if (next == null) return null;
  const nextMs = epochMillis(next);
  if (nextMs === null) return null;
  const previousMs = epochMillis(input.previousVisitedAt);
  if (previousMs !== null && nextMs <= previousMs) return null;
  return { readAt: next };
}
