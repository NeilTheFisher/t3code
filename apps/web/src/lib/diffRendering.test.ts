import { describe, expect, it } from "vite-plus/test";
import {
  buildPatchCacheKey,
  extractBinaryPatchPaths,
  getRenderablePatch,
  getRenderablePatchFromContents,
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

  it("separates binary files from renderable text diffs", () => {
    const patch = [
      "diff --git a/.session.swp b/.session.swp",
      "new file mode 100644",
      "index 0000000..9f2c1aa",
      "Binary files /dev/null and b/.session.swp differ",
      "diff --git a/a.txt b/a.txt",
      "index 1111111..2222222 100644",
      "--- a/a.txt",
      "+++ b/a.txt",
      "@@ -1 +1,2 @@",
      " hi",
      "+there",
    ].join("\n");

    const parsed = getRenderablePatch(patch, "checkpoint");
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;
    expect(parsed.files).toHaveLength(1);
    expect(parsed.files[0]?.name).toBe("a.txt");
    expect(parsed.binaryFiles).toHaveLength(1);
    expect(parsed.binaryFiles[0]?.name).toBe(".session.swp");
    expect(parsed.binaryFiles[0]?.type).toBe("new");
  });

  it("returns a files result when the patch contains only binary changes", () => {
    const patch = [
      "diff --git a/blob.bin b/blob.bin",
      "index 1234567..89abcde 100644",
      "Binary files a/blob.bin and b/blob.bin differ",
    ].join("\n");

    const parsed = getRenderablePatch(patch, "checkpoint");
    expect(parsed?.kind).toBe("files");
    if (parsed?.kind !== "files") return;
    expect(parsed.files).toHaveLength(0);
    expect(parsed.binaryFiles.map((file) => file.name)).toEqual(["blob.bin"]);
  });

  it("keeps hunk-less non-binary entries (e.g. mode-only changes) renderable", () => {
    const patch = ["diff --git a/script.sh b/script.sh", "old mode 100644", "new mode 100755"].join(
      "\n",
    );

    const parsed = getRenderablePatch(patch, "checkpoint");
    if (parsed?.kind !== "files") return;
    expect(parsed.binaryFiles).toHaveLength(0);
  });
});

describe("getRenderablePatch upgradeFullContextFiles", () => {
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
