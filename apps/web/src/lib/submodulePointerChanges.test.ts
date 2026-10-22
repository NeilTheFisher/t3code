import { describe, expect, it } from "vite-plus/test";

import { submodulePointerChanges } from "./submodulePointerChanges";

const GITLINK_PATCH = [
  "diff --git a/t3code b/t3code",
  "index ef052d1..05013f7 160000",
  "--- a/t3code",
  "+++ b/t3code",
  "@@ -1 +1 @@",
  "-Subproject commit ef052d19539d2d1eac30d8c360660f5525280e90",
  "+Subproject commit 05013f7feb17e47f9340ceed87121f4a9c200186",
].join("\n");

describe("submodulePointerChanges", () => {
  it("reads the submodule path and both revisions out of a gitlink hunk", () => {
    expect(submodulePointerChanges(GITLINK_PATCH)).toEqual([
      {
        path: "t3code",
        from: "ef052d19539d2d1eac30d8c360660f5525280e90",
        to: "05013f7feb17e47f9340ceed87121f4a9c200186",
      },
    ]);
  });

  it("ignores ordinary file patches", () => {
    const patch = [
      "diff --git a/docs/readme.md b/docs/readme.md",
      "index 1111111..2222222 100644",
      "--- a/docs/readme.md",
      "+++ b/docs/readme.md",
      "@@ -1 +1 @@",
      "-old",
      "+new",
    ].join("\n");

    expect(submodulePointerChanges(patch)).toEqual([]);
  });

  it("keeps a gitlink entry beside other files without borrowing their lines", () => {
    const patch = [
      "diff --git a/a.txt b/a.txt",
      "index 1111111..2222222 100644",
      "--- a/a.txt",
      "+++ b/a.txt",
      "@@ -1 +1 @@",
      "-Subproject commit not-a-pointer",
      "+still not one",
      GITLINK_PATCH,
      "diff --git a/b.txt b/b.txt",
      "index 3333333..4444444 100644",
      "--- a/b.txt",
      "+++ b/b.txt",
      "@@ -1 +1 @@",
      "-before",
      "+after",
    ].join("\n");

    expect(submodulePointerChanges(patch).map((change) => change.path)).toEqual(["t3code"]);
  });

  it("needs both sides of the pointer to offer a submodule diff", () => {
    const half = ["diff --git a/t3code b/t3code", "@@ -1 +1 @@", "+Subproject commit abc1234"].join(
      "\n",
    );

    expect(submodulePointerChanges(half)).toEqual([]);
  });
});
