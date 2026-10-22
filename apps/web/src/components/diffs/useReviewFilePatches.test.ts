import type { ReviewDiffPreviewSource } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { reviewFilePatchRequest } from "./useReviewFilePatches";

const file = { path: "src/app.ts", previousPath: null };

const source = (overrides: Partial<ReviewDiffPreviewSource>): ReviewDiffPreviewSource =>
  ({
    id: "x",
    kind: "branch-range",
    title: "Changes",
    baseRef: null,
    headRef: null,
    diff: "",
    diffHash: "hash",
    truncated: false,
    ...overrides,
  }) as ReviewDiffPreviewSource;

describe("reviewFilePatchRequest", () => {
  it("compares the range itself for a commit range", () => {
    const request = reviewFilePatchRequest({
      cwd: "/repos/example",
      baseRef: "main",
      submodulePath: undefined,
      ignoreWhitespace: false,
      source: source({ kind: "commit-range", baseRef: "abc1234^", headRef: "abc1234" }),
      file,
    });

    expect(request.commitRange).toEqual({ from: "abc1234^", to: "abc1234" });
    expect(request.submodule).toBeUndefined();
    expect(request.file.sourceKind).toBe("commit-range");
  });

  it("reads inside the submodule for a submodule range", () => {
    const request = reviewFilePatchRequest({
      cwd: "/repos/example",
      baseRef: null,
      submodulePath: "t3code",
      ignoreWhitespace: false,
      source: source({
        kind: "submodule-range",
        baseRef: "ef052d19",
        headRef: "05013f7f",
      }),
      file,
    });

    expect(request.submodule).toEqual({ path: "t3code", from: "ef052d19", to: "05013f7f" });
    // A submodule read must not also ask for a commit range in the parent.
    expect(request.commitRange).toBeUndefined();
    expect(request.file.sourceKind).toBe("submodule-range");
  });

  it("adds no scope for a plain branch comparison", () => {
    const request = reviewFilePatchRequest({
      cwd: "/repos/example",
      baseRef: "main",
      submodulePath: undefined,
      ignoreWhitespace: true,
      source: source({ kind: "branch-range", baseRef: "main", headRef: "feature" }),
      file,
    });

    expect(request.baseRef).toBe("main");
    expect(request.commitRange).toBeUndefined();
    expect(request.submodule).toBeUndefined();
    expect(request.ignoreWhitespace).toBe(true);
  });
});
