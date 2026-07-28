import { describe, expect, it } from "vite-plus/test";
import {
  buildFileDiffRenderKey,
  buildPatchCacheKey,
  expandPartialPatchWithCurrentFile,
  extractBinaryPatchPaths,
  getDiffLineStat,
  getRenderablePatch,
} from "./diffRendering";

describe("buildPatchCacheKey", () => {
  it("returns a stable cache key for identical content", () => {
    const patch = "diff --git a/a.ts b/a.ts\n+console.log('hello')";

    expect(buildPatchCacheKey(patch)).toBe(buildPatchCacheKey(patch));
  });

  it("normalizes outer whitespace before hashing", () => {
    const patch = "diff --git a/a.ts b/a.ts\n+console.log('hello')";

    expect(buildPatchCacheKey(`\n${patch}\n`)).toBe(buildPatchCacheKey(patch));
  });

  it("changes when diff content changes", () => {
    const before = "diff --git a/a.ts b/a.ts\n+console.log('hello')";
    const after = "diff --git a/a.ts b/a.ts\n+console.log('hello world')";

    expect(buildPatchCacheKey(before)).not.toBe(buildPatchCacheKey(after));
  });

  it("changes when cache scope changes", () => {
    const patch = "diff --git a/a.ts b/a.ts\n+console.log('hello')";

    expect(buildPatchCacheKey(patch, "diff-panel:light")).not.toBe(
      buildPatchCacheKey(patch, "diff-panel:dark"),
    );
  });
});

describe("getRenderablePatch", () => {
  it("compacts partial hunk render offsets for virtualized review diffs", () => {
    const patch = [
      "diff --git a/example.ts b/example.ts",
      "index 1111111..2222222 100644",
      "--- a/example.ts",
      "+++ b/example.ts",
      "@@ -48,4 +48,4 @@",
      " context",
      "-before",
      "+after",
      " context",
      " context",
      "@@ -80,3 +80,4 @@",
      " context",
      "+added",
      " context",
      " context",
    ].join("\n");

    const parsed = getRenderablePatch(patch, "review", {
      compactPartialHunkOffsets: true,
    });
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;

    const file = parsed.files[0];
    expect(file?.hunks[0]?.collapsedBefore).toBe(47);
    expect(file?.hunks[0]?.unifiedLineStart).toBe(0);
    expect(file?.hunks[1]?.collapsedBefore).toBeGreaterThan(0);
    expect(file?.hunks[1]?.unifiedLineStart).toBe(file?.hunks[0]?.unifiedLineCount);
    expect(file?.unifiedLineCount).toBe(
      file?.hunks.reduce((total, hunk) => total + hunk.unifiedLineCount, 0),
    );
  });

  it("retains source-file offsets for checkpoint diffs", () => {
    const patch = [
      "diff --git a/example.ts b/example.ts",
      "--- a/example.ts",
      "+++ b/example.ts",
      "@@ -48,1 +48,1 @@",
      "-before",
      "+after",
    ].join("\n");

    const parsed = getRenderablePatch(patch, "checkpoint");
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;
    expect(parsed.files[0]?.hunks[0]?.unifiedLineStart).toBe(47);
  });
});

describe("buildFileDiffRenderKey", () => {
  it("keeps file identity stable when Pierre hydrates a partial diff", () => {
    const patch = [
      "diff --git a/example.ts b/example.ts",
      "--- a/example.ts",
      "+++ b/example.ts",
      "@@ -1 +1 @@",
      "-before",
      "+after",
    ].join("\n");
    const parsed = getRenderablePatch(patch, "hydrated-key");
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;

    const file = parsed.files[0];
    expect(file).toBeDefined();
    if (!file) return;
    const key = buildFileDiffRenderKey(file);
    file.cacheKey = `${file.cacheKey}:hydrated`;

    expect(buildFileDiffRenderKey(file)).toBe(key);
  });
});

describe("getDiffLineStat", () => {
  it("totals additions and deletions across every file and hunk", () => {
    const patch = [
      "diff --git a/example.ts b/example.ts",
      "--- a/example.ts",
      "+++ b/example.ts",
      "@@ -1,2 +1,3 @@",
      "-before",
      "+after",
      "+added",
      " context",
      "@@ -10,2 +11,1 @@",
      "-removed",
      " context",
      "diff --git a/README.md b/README.md",
      "--- a/README.md",
      "+++ b/README.md",
      "@@ -1 +1,2 @@",
      " title",
      "+description",
    ].join("\n");

    const parsed = getRenderablePatch(patch);
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;

    expect(getDiffLineStat(parsed.files)).toEqual({ additions: 3, deletions: 2 });
  });
});
describe("getRenderablePatch upgradeFullContextFiles", () => {
  it("reconstructs full context by reversing a partial patch against the current file", () => {
    const currentContents = ["one", "changed", "three", "four"].join("\n");
    const partialPatch = ["@@ -1,3 +1,3 @@", " one", "-two", "+changed", " three"].join("\n");

    const fullPatch = expandPartialPatchWithCurrentFile(
      partialPatch,
      "example.txt",
      currentContents,
    );
    const parsed = getRenderablePatch(fullPatch ?? undefined, "expanded", {
      upgradeFullContextFiles: true,
    });

    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;
    expect(parsed.files[0]?.isPartial).toBe(false);
    expect(fullPatch).toContain("-two");
    expect(fullPatch).toContain("+changed");
  });

  it("rebuilds full-context patches into collapsed, expandable non-partial diffs", () => {
    const oldLines = Array.from({ length: 200 }, (_, index) => `line ${index + 1}`);
    const newLines = [...oldLines];
    newLines[99] = "changed line";
    const longFullContextPatch = [
      "diff --git a/x.ts b/x.ts",
      "--- a/x.ts",
      "+++ b/x.ts",
      "@@ -1,200 +1,200 @@",
      ...oldLines.flatMap((line, index) =>
        index === 99 ? [`-${line}`, `+${newLines[index]}`] : [` ${line}`],
      ),
    ].join("\n");

    const parsed = getRenderablePatch(longFullContextPatch, "t", {
      upgradeFullContextFiles: true,
    });
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;
    const [file] = parsed.files;
    expect(file!.isPartial).toBe(false);
    expect(file!.deletionLines).toHaveLength(200);
    expect(file!.additionLines).toHaveLength(200);
    expect(file!.hunks[0]!.collapsedBefore).toBeGreaterThan(0);
    expect(file!.hunks[0]!.unifiedLineCount).toBeLessThan(200);
  });

  it("leaves mid-file partial patches untouched", () => {
    const midFilePatch = [
      "--- a/y.ts",
      "+++ b/y.ts",
      "@@ -100,3 +100,3 @@",
      " a",
      "-b",
      "+c",
      " d",
    ].join("\n");
    const parsed = getRenderablePatch(midFilePatch, "t", { upgradeFullContextFiles: true });
    if (parsed?.kind !== "files") return;
    expect(parsed.files[0]!.isPartial).toBe(true);
  });
});

describe("getRenderablePatchFromContents", () => {
  it("synthesizes a renderable non-partial diff from before/after text", () => {
    const oldText = ["const a = 1;", "foo();", "return a;"].join("\n");
    const newText = ["const a = 1;", "bar();", "return a;"].join("\n");

    const parsed = getRenderablePatchFromContents(oldText, newText, "/repo/src/app.ts");
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;
    expect(parsed.files).toHaveLength(1);
    const [file] = parsed.files;
    expect(file!.name).toBe("/repo/src/app.ts");
    expect(file!.isPartial).toBe(false);
    expect(file!.hunks.length).toBeGreaterThan(0);
    expect(file!.hunks[0]!.unifiedLineStart).toBe(0);
  });

  it("returns null when contents are identical", () => {
    expect(getRenderablePatchFromContents("same", "same", "x.ts")).toBeNull();
  });
});

describe("extractBinaryPatchPaths", () => {
  it("collects paths from Binary files markers including /dev/null sides", () => {
    const patch = [
      "diff --git a/deleted.bin b/deleted.bin",
      "deleted file mode 100644",
      "index 9f2c1aa..0000000",
      "Binary files a/deleted.bin and /dev/null differ",
      "diff --git a/img/logo.png b/img/logo.png",
      "index 1234567..89abcde 100644",
      "GIT binary patch",
      "delta 123",
      "zcmZ1garbagegarbage",
    ].join("\n");

    const paths = extractBinaryPatchPaths(patch);
    expect(paths.has("deleted.bin")).toBe(true);
    expect(paths.has("img/logo.png")).toBe(true);
  });

  it("ignores diff body lines that merely start with Binary", () => {
    const patch = [
      "diff --git a/a.txt b/a.txt",
      "--- a/a.txt",
      "+++ b/a.txt",
      "@@ -1 +1 @@",
      "-Binary files a/a.txt and b/a.txt differ",
      "+text",
    ].join("\n");

    const paths = extractBinaryPatchPaths(patch);
    expect(paths.size).toBe(0);
  });
});
