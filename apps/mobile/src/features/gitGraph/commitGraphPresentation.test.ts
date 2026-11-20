import { describe, expect, it } from "vite-plus/test";

import type { VcsGraphRef } from "@t3tools/contracts";

import {
  COMMIT_GRAPH_MAX_LIMIT,
  commitRefBadges,
  nextCommitGraphLimit,
  repositoryLabelFromCwd,
  shortCommitSha,
} from "./commitGraphPresentation";

const ref = (kind: VcsGraphRef["kind"], name: string): VcsGraphRef => ({ kind, name });

describe("commit graph presentation", () => {
  it("leads with HEAD, then branches, remotes and tags", () => {
    const badges = commitRefBadges(
      [
        ref("tag", "v1.2.0"),
        ref("remote", "origin/main"),
        ref("branch", "main"),
        ref("head", "HEAD"),
      ],
      "main",
    );

    expect(badges.badges.map((badge) => `${badge.kind}:${badge.name}`)).toEqual([
      "head:HEAD",
      "branch:main",
      "remote:origin/main",
    ]);
    expect(badges.hidden).toBe(1);
    expect(badges.badges[1]?.current).toBe(true);
  });

  it("marks only the checked-out branch as current", () => {
    const badges = commitRefBadges([ref("branch", "feature"), ref("branch", "main")], "main");

    expect(badges.badges.map((badge) => badge.current)).toEqual([false, true]);
  });

  it("reports no hidden refs when every badge fits", () => {
    const badges = commitRefBadges([ref("head", "HEAD")], "main");

    expect(badges.badges).toHaveLength(1);
    expect(badges.hidden).toBe(0);
  });

  it("grows the window by a page and stops at the contract ceiling", () => {
    expect(nextCommitGraphLimit(120)).toBe(240);
    expect(nextCommitGraphLimit(960)).toBe(COMMIT_GRAPH_MAX_LIMIT);
    expect(nextCommitGraphLimit(COMMIT_GRAPH_MAX_LIMIT)).toBe(COMMIT_GRAPH_MAX_LIMIT);
  });

  it("abbreviates a sha without shortening a short one", () => {
    expect(shortCommitSha("0123456789abcdef")).toBe("0123456");
    expect(shortCommitSha("abc")).toBe("abc");
  });

  it("names the checkout by its folder on either path style", () => {
    expect(repositoryLabelFromCwd("/home/me/t3code")).toBe("t3code");
    expect(repositoryLabelFromCwd("C:\\work\\t3code\\")).toBe("t3code");
    expect(repositoryLabelFromCwd("t3code")).toBe("t3code");
  });
});
