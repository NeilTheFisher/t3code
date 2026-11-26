import type { VcsLogGraphResult, VcsStatusResult } from "@t3tools/contracts";

export interface CachedGraph {
  readonly result: VcsLogGraphResult;
}

/**
 * A panel is unmounted whenever another right-panel tab is selected, so a graph
 * read survives that by living here. A remount paints the cached read at once and
 * re-reads behind it, so a stale paint never outlives the next visit either.
 */
const MAX_ENTRIES = 12;
const entries = new Map<string, CachedGraph>();

export const graphCacheKey = (input: {
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

const store = (key: string, entry: CachedGraph): void => {
  // The newest entry is last, so the first key is the one to drop.
  entries.delete(key);
  entries.set(key, entry);
  while (entries.size > MAX_ENTRIES) {
    const oldest = entries.keys().next().value;
    if (oldest === undefined) return;
    entries.delete(oldest);
  }
};

export function readCachedGraph(key: string): CachedGraph | undefined {
  const entry = entries.get(key);
  if (entry === undefined) return undefined;
  store(key, entry);
  return entry;
}

export function rememberGraph(key: string, result: VcsLogGraphResult): void {
  store(key, { result });
}

/**
 * What the graph must re-read for: a moved ref or a commit landing on it. Edits
 * inside the working tree change the status but not this signature, so typing in
 * a file does not re-read the history.
 */
export function graphLiveSignature(
  status: Pick<
    VcsStatusResult,
    "isRepo" | "refName" | "aheadCount" | "behindCount" | "hasWorkingTreeChanges"
  >,
): string {
  return [
    status.isRepo ? "repo" : "none",
    status.refName ?? "",
    String(status.aheadCount),
    String(status.behindCount),
    status.hasWorkingTreeChanges ? "dirty" : "clean",
  ].join("\u0000");
}

export function forgetCachedGraph(key: string): void {
  entries.delete(key);
}

/** Tests only: a cache that outlives a file would leak between cases. */
export function clearGraphCache(): void {
  entries.clear();
}
