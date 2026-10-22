import { describe, expect, it } from "vite-plus/test";

import {
  EMPTY_TREE_SHA,
  partitionCommitRuns,
  resolveGraphSelection,
  selectionDiffRange,
} from "./graphSelection";

// Newest first, the order the graph lists commits in.
const COMMITS = [
  { sha: "aaaaaaaa", parents: ["bbbbbbbb"] },
  { sha: "bbbbbbbb", parents: ["cccccccc"] },
  { sha: "cccccccc", parents: ["dddddddd"] },
  { sha: "dddddddd", parents: [] },
];

describe("graph selection", () => {
  it("selects a single commit on a plain click", () => {
    const selection = resolveGraphSelection(COMMITS, "bbbbbbbb", "bbbbbbbb");

    expect([...selection!.shas]).toEqual(["bbbbbbbb"]);
    expect(selection!.top.sha).toBe("bbbbbbbb");
    expect(selection!.bottom.sha).toBe("bbbbbbbb");
  });

  it("force-selects the commits between the anchor and the extended click", () => {
    const selection = resolveGraphSelection(COMMITS, "aaaaaaaa", "cccccccc");

    expect([...selection!.shas]).toEqual(["aaaaaaaa", "bbbbbbbb", "cccccccc"]);
    expect(selection!.top.sha).toBe("aaaaaaaa");
    expect(selection!.bottom.sha).toBe("cccccccc");
  });

  it("keeps the range contiguous when extending upward", () => {
    const selection = resolveGraphSelection(COMMITS, "cccccccc", "aaaaaaaa");

    expect(selection!.shas.size).toBe(3);
    expect(selection!.top.sha).toBe("aaaaaaaa");
    expect(selection!.bottom.sha).toBe("cccccccc");
  });

  it("falls back to just the anchor when the head is outside the window", () => {
    const selection = resolveGraphSelection(COMMITS, "bbbbbbbb", "not-loaded");

    expect([...selection!.shas]).toEqual(["bbbbbbbb"]);
  });

  it("returns null without an anchor in the window", () => {
    expect(resolveGraphSelection(COMMITS, null, null)).toBeNull();
    expect(resolveGraphSelection(COMMITS, "not-loaded", "bbbbbbbb")).toBeNull();
  });

  it("diffs a single commit against its first parent", () => {
    expect(selectionDiffRange({ top: COMMITS[1]!, bottom: COMMITS[1]! })).toEqual({
      from: "cccccccc",
      to: "bbbbbbbb",
      label: "bbbbbbbb",
    });
  });

  it("diffs a run from the bottom commit's parent to the top commit", () => {
    // Selecting the three newest rows means the older `cccccccc` is the base,
    // not `aaaaaaaa` — the graph lists newest first.
    expect(selectionDiffRange({ top: COMMITS[0]!, bottom: COMMITS[2]! })).toEqual({
      from: "dddddddd",
      to: "aaaaaaaa",
      label: "cccccccc..aaaaaaaa",
    });
  });

  it("diffs a run ending at a root commit against the empty tree", () => {
    expect(selectionDiffRange({ top: COMMITS[0]!, bottom: COMMITS[3]! }).from).toBe(EMPTY_TREE_SHA);
  });

  it("groups the selected rows into one run so a single outline can wrap them", () => {
    const selection = resolveGraphSelection(COMMITS, "bbbbbbbb", "cccccccc")!;
    const runs = partitionCommitRuns(COMMITS, selection);

    expect(
      runs.map((run) => ({ selected: run.selected, shas: run.commits.map((c) => c.sha) })),
    ).toEqual([
      { selected: false, shas: ["aaaaaaaa"] },
      { selected: true, shas: ["bbbbbbbb", "cccccccc"] },
      { selected: false, shas: ["dddddddd"] },
    ]);
  });

  it("keeps the whole window in one unselected run without a selection", () => {
    const runs = partitionCommitRuns(COMMITS, null);

    expect(runs).toHaveLength(1);
    expect(runs[0]?.selected).toBe(false);
    expect(runs[0]?.commits).toHaveLength(COMMITS.length);
  });
});
