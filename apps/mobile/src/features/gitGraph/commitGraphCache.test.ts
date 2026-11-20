import { beforeEach, describe, expect, it } from "vite-plus/test";

import type { VcsLogGraphResult } from "@t3tools/contracts";

import {
  clearCommitGraphCache,
  commitGraphCacheKey,
  commitGraphScopeKey,
  isFreshCommitGraph,
  readCachedCommitGraph,
  rememberCommitGraph,
} from "./commitGraphCache";

const key = (limit = 120) =>
  commitGraphCacheKey({
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

describe("commit graph cache", () => {
  beforeEach(() => {
    clearCommitGraphCache();
  });

  it("returns what was remembered under the same query key", () => {
    rememberCommitGraph(key(), result("first"), 1_000);

    expect(readCachedCommitGraph(key())?.result).toEqual(result("first"));
  });

  it("separates the limit, remotes and checkout a read was taken for", () => {
    rememberCommitGraph(key(120), result("first"));
    rememberCommitGraph(key(240), result("more"));

    expect(readCachedCommitGraph(key(120))?.result).toEqual(result("first"));
    expect(readCachedCommitGraph(key(240))?.result).toEqual(result("more"));
    expect(
      readCachedCommitGraph(
        commitGraphCacheKey({
          environmentId: "other",
          cwd: "/repo",
          includeRemotes: true,
          limit: 120,
        }),
      ),
    ).toBeUndefined();
    expect(
      readCachedCommitGraph(
        commitGraphCacheKey({
          environmentId: "environment",
          cwd: "/repo",
          includeRemotes: false,
          limit: 120,
        }),
      ),
    ).toBeUndefined();
  });

  it("groups every limit of one query under the same scope", () => {
    const scope = { environmentId: "environment", cwd: "/repo", includeRemotes: true } as const;
    expect(commitGraphScopeKey(scope)).toBe(commitGraphScopeKey({ ...scope }));
    expect(commitGraphScopeKey(scope)).not.toBe(
      commitGraphScopeKey({ ...scope, includeRemotes: false }),
    );
  });

  it("treats a read younger than a minute as fresh and an older one as stale", () => {
    rememberCommitGraph(key(), result("first"), 1_000);

    const entry = readCachedCommitGraph(key())!;
    expect(isFreshCommitGraph(entry, 1_000)).toBe(true);
    expect(isFreshCommitGraph(entry, 1_000 + 59_000)).toBe(true);
    expect(isFreshCommitGraph(entry, 1_000 + 60_000)).toBe(false);
  });

  it("drops the least recently read query past its bound", () => {
    for (let index = 0; index < 13; index += 1) {
      rememberCommitGraph(key(index), result(`commit ${index}`));
    }

    expect(readCachedCommitGraph(key(0))).toBeUndefined();
    expect(readCachedCommitGraph(key(12))?.result).toEqual(result("commit 12"));
  });
});
