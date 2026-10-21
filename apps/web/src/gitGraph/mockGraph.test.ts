import { describe, expect, it } from "vite-plus/test";

import { mockGraphData } from "./mockGraph";

describe("mock graph fixture", () => {
  it("keeps every parent in the list after its child", () => {
    const { commits } = mockGraphData(new Date("2026-10-20T12:00:00Z"));
    const indexBySha = new Map(commits.map((commit, index) => [commit.sha, index]));

    for (const [index, commit] of commits.entries()) {
      for (const parent of commit.parents) {
        const parentIndex = indexBySha.get(parent);
        expect(parentIndex, `${commit.sha} is missing parent ${parent}`).toBeDefined();
        expect(parentIndex!, `${commit.sha} must appear after parent ${parent}`).toBeGreaterThan(
          index,
        );
      }
    }
  });
});
