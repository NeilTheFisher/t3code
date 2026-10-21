import { describe, expect, it } from "vite-plus/test";

import { layoutGraph } from "./graphLayout";

describe("graph layout", () => {
  it("keeps a linear history in one lane", () => {
    const layout = layoutGraph([
      { sha: "c", parents: ["b"] },
      { sha: "b", parents: ["a"] },
      { sha: "a", parents: [] },
    ]);

    expect(layout.laneCount).toBe(1);
    expect(layout.rows.map((row) => row.lane)).toEqual([0, 0, 0]);
    expect(layout.rows[0]?.parentLanes).toEqual([{ sha: "b", lane: 0 }]);
    expect(layout.rows[2]?.parentLanes).toEqual([]);
  });

  it("gives a side branch its own lane and curves back at the fork", () => {
    const layout = layoutGraph([
      { sha: "main-b", parents: ["main-a"] },
      { sha: "side-b", parents: ["side-a"] },
      { sha: "side-a", parents: ["main-a"] },
      { sha: "main-a", parents: [] },
    ]);

    const sideB = layout.rows[1]!;
    const sideA = layout.rows[2]!;
    const mainA = layout.rows[3]!;

    expect(sideB.lane).toBe(1);
    expect(sideA.parentLanes).toEqual([{ sha: "main-a", lane: 0 }]);
    expect(mainA.lane).toBe(0);
    expect(layout.laneCount).toBe(2);
  });

  it("reuses the merge target lane instead of opening a third lane", () => {
    const layout = layoutGraph([
      { sha: "merge", parents: ["main", "side"] },
      { sha: "side", parents: ["base"] },
      { sha: "main", parents: ["base"] },
      { sha: "base", parents: [] },
    ]);

    expect(layout.rows[0]?.lane).toBe(0);
    const parentLanes = layout.rows[0]?.parentLanes ?? [];
    expect(parentLanes.map((edge) => edge.lane).sort()).toEqual([0, 1]);
    expect(layout.rows[2]?.lane).toBe(0);
    expect(layout.rows[3]?.lane).toBe(1);
    expect(layout.laneCount).toBe(2);
  });

  it("routes a converging parent into the lane that already holds it", () => {
    const layout = layoutGraph([
      { sha: "top", parents: ["shared", "other"] },
      { sha: "other", parents: ["shared"] },
      { sha: "shared", parents: [] },
    ]);

    expect(layout.rows[0]?.lane).toBe(0);
    expect(layout.rows[1]?.lane).toBe(1);
    expect(layout.rows[1]?.parentLanes).toEqual([{ sha: "shared", lane: 0 }]);
    expect(layout.rows[2]?.lane).toBe(0);
    expect(layout.laneCount).toBe(2);
  });

  it("does not draw edges to parents outside the loaded window", () => {
    const layout = layoutGraph([{ sha: "tip", parents: ["outside"] }]);

    expect(layout.rows[0]?.parentLanes).toEqual([]);
    expect(layout.laneCount).toBe(1);
  });
});
