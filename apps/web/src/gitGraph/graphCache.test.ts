import { beforeEach, describe, expect, it } from "vite-plus/test";

import type { VcsLogGraphResult } from "@t3tools/contracts";

import {
  clearGraphCache,
  forgetCachedGraph,
  graphCacheKey,
  graphLiveSignature,
  readCachedGraph,
  rememberGraph,
} from "./graphCache";

const key = (limit = 120) =>
  graphCacheKey({
    environmentId: "environment",
    cwd: "/repo",
    includeRemotes: true,
    limit,
  });

const result = (subject: string) =>
  ({
    currentBranch: "main",
    commits: [{ sha: "a".repeat(40), subject, parents: [], refs: [] }],
    truncated: false,
    worktrees: [],
  }) as unknown as VcsLogGraphResult;

describe("git graph cache", () => {
  beforeEach(() => {
    clearGraphCache();
  });

  it("returns what was remembered under the same query key", () => {
    rememberGraph(key(), result("first"));

    expect(readCachedGraph(key())?.result).toEqual(result("first"));
  });

  it("separates the limit, remotes and checkout a read was taken for", () => {
    rememberGraph(key(120), result("first"));
    rememberGraph(key(240), result("more"));

    expect(readCachedGraph(key(120))?.result).toEqual(result("first"));
    expect(readCachedGraph(key(240))?.result).toEqual(result("more"));
    expect(
      readCachedGraph(
        graphCacheKey({ environmentId: "other", cwd: "/repo", includeRemotes: true, limit: 120 }),
      ),
    ).toBeUndefined();
  });

  it("re-reads for a new commit, a checkout or a dirty tree", () => {
    const status = {
      isRepo: true,
      refName: "main",
      aheadCount: 0,
      behindCount: 0,
      hasWorkingTreeChanges: false,
    };
    const signature = graphLiveSignature(status);

    expect(graphLiveSignature({ ...status })).toBe(signature);
    // Saving a file changes the file list, not what the history reads for.
    expect(graphLiveSignature({ ...status, hasWorkingTreeChanges: false })).toBe(signature);
    expect(graphLiveSignature({ ...status, aheadCount: 1 })).not.toBe(signature);
    expect(graphLiveSignature({ ...status, behindCount: 2 })).not.toBe(signature);
    expect(graphLiveSignature({ ...status, refName: "release" })).not.toBe(signature);
    expect(graphLiveSignature({ ...status, hasWorkingTreeChanges: true })).not.toBe(signature);
    expect(graphLiveSignature({ ...status, isRepo: false })).not.toBe(signature);
  });

  it("drops the least recently read query past its bound", () => {
    for (let index = 0; index < 13; index += 1) {
      rememberGraph(key(index), result(`commit ${index}`));
    }

    expect(readCachedGraph(key(0))).toBeUndefined();
    expect(readCachedGraph(key(12))?.result).toEqual(result("commit 12"));
  });

  it("forgets a query, as when its revalidation proves the repository moved", () => {
    rememberGraph(key(), result("first"));
    forgetCachedGraph(key());

    expect(readCachedGraph(key())).toBeUndefined();
  });
});
