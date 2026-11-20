import type { VcsLogGraphResult } from "@t3tools/contracts";

export interface CachedCommitGraph {
  readonly result: VcsLogGraphResult;
  readonly readAt: number;
}

/**
 * Leaving the screen unmounts it, so a graph read survives that by living here.
 * Within this window a remount paints the cached read and does not re-read at all.
 */
const FRESH_MS = 60_000;
const MAX_ENTRIES = 12;
const entries = new Map<string, CachedCommitGraph>();

export const commitGraphCacheKey = (input: {
  readonly environmentId: string;
  readonly cwd: string;
  readonly includeRemotes: boolean;
  readonly limit: number;
}): string =>
  [
    input.environmentId,
    input.cwd,
    input.includeRemotes ? "remotes" : "local",
    String(input.limit),
  ].join("\u0000");

/** Everything a query key holds except the window size, which the screen grows in place. */
export const commitGraphScopeKey = (input: {
  readonly environmentId: string;
  readonly cwd: string;
  readonly includeRemotes: boolean;
}): string =>
  [input.environmentId, input.cwd, input.includeRemotes ? "remotes" : "local"].join("\u0000");

const store = (key: string, entry: CachedCommitGraph): void => {
  // The newest entry is last, so the first key is the one to drop.
  entries.delete(key);
  entries.set(key, entry);
  while (entries.size > MAX_ENTRIES) {
    const oldest = entries.keys().next().value;
    if (oldest === undefined) return;
    entries.delete(oldest);
  }
};

export function readCachedCommitGraph(key: string): CachedCommitGraph | undefined {
  const entry = entries.get(key);
  if (entry === undefined) return undefined;
  store(key, entry);
  return entry;
}

export function isFreshCommitGraph(entry: CachedCommitGraph, now = Date.now()): boolean {
  return now - entry.readAt < FRESH_MS;
}

export function rememberCommitGraph(
  key: string,
  result: VcsLogGraphResult,
  now = Date.now(),
): void {
  store(key, { result, readAt: now });
}

/** Tests only: a cache that outlives a file would leak between cases. */
export function clearCommitGraphCache(): void {
  entries.clear();
}
