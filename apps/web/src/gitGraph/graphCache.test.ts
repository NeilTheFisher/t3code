import { beforeEach, describe, expect, it } from "vite-plus/test";

import type { VcsLogGraphResult } from "@t3tools/contracts";

import {
  clearGraphCache,
  forgetCachedGraph,
  graphCacheKey,
  isFreshGraph,
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
    rememberGraph(key(), result("first"), 1_000);

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

  it("treats a read younger than a minute as fresh and an older one as stale", () => {
    rememberGraph(key(), result("first"), 1_000);

    const entry = readCachedGraph(key())!;
    expect(isFreshGraph(entry, 1_000)).toBe(true);
    expect(isFreshGraph(entry, 1_000 + 59_000)).toBe(true);
    expect(isFreshGraph(entry, 1_000 + 60_000)).toBe(false);
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
