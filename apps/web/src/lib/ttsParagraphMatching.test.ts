import { describe, expect, it } from "vite-plus/test";

import {
  findParagraphIndexForBlock,
  mapParagraphsToBlocks,
  normalizeWords,
} from "./ttsParagraphMatching";

/** The block index a single cue resolves to. */
function blockFor(blocks: readonly string[], cue: string): number {
  return mapParagraphsToBlocks(blocks, [cue])[0]!;
}

describe("normalizeWords", () => {
  it("lowercases and strips punctuation", () => {
    expect(normalizeWords("Hello, World!")).toEqual(["hello", "world"]);
  });

  it("drops inlined pause tags", () => {
    expect(normalizeWords("First item [pause:0.4s] second item")).toEqual([
      "first",
      "item",
      "second",
      "item",
    ]);
  });
});

describe("mapParagraphsToBlocks", () => {
  it("matches a plain paragraph despite case and punctuation differences", () => {
    const blocks = ["Hello, world! This is a test."];
    expect(blockFor(blocks, "hello world this is a")).toBe(0);
  });

  it("matches a list block even though the cue carries no newlines", () => {
    const blocks = ["First item of the list\nSecond item"];
    expect(blockFor(blocks, "first item of the list")).toBe(0);
  });

  it("locates a heading when the spoken paragraph merges it with the body", () => {
    const blocks = ["Release notes", "We shipped a bunch of fixes today."];
    expect(blockFor(blocks, "release notes we shipped")).toBe(0);
  });

  it("locates a later list item that became its own spoken paragraph", () => {
    const blocks = ["First item", "Second item", "Third item"];
    expect(blockFor(blocks, "second item")).toBe(1);
  });

  it("prefers the block matching the most opening words", () => {
    const blocks = ["The cat sat", "The cat sat on the mat"];
    expect(blockFor(blocks, "the cat sat on the mat")).toBe(1);
  });

  it("returns -1 when no block shares the cue's opening words", () => {
    const blocks = ["Completely different text", "Another unrelated block"];
    expect(blockFor(blocks, "nothing here matches")).toBe(-1);
  });

  it("returns -1 for an empty cue", () => {
    expect(blockFor(["some block"], "   ")).toBe(-1);
  });

  it("matches a cue that starts mid-block (a later sentence)", () => {
    const blocks = ["Intro sentence. The cat sat on the mat."];
    expect(blockFor(blocks, "the cat sat on the mat")).toBe(0);
  });

  it("matches a list item whose inline code renders as a file chip without its path", () => {
    // The spoken cue keeps the full path; the chip shows only the file name.
    const blocks = [
      "First paragraph.",
      "ttsServerUrl.ts\n(new, 17 lines) — empty tts.serverUrl resolves to the environment",
      "useTtsPlayer.ts\n— one line to resolve that origin",
    ];
    expect(
      blockFor(
        blocks,
        "apps/web/src/lib/ttsServerUrl.ts (new, 17 lines) — empty tts.serverUrl resolves",
      ),
    ).toBe(1);
  });

  it("does not claim a block on one shared word after a shifted cue", () => {
    expect(blockFor(["An unrelated ts mention"], "apps/web/src/lib/file.ts")).toBe(-1);
  });

  it("advances past a block that opens with the same words as the previous one", () => {
    const blocks = ["Updated the parser.", "Updated the parser and the renderer."];
    expect(
      mapParagraphsToBlocks(blocks, ["updated the parser", "updated the parser and the renderer"]),
    ).toEqual([0, 1]);
  });

  it("never maps a later paragraph back to an earlier block", () => {
    const blocks = ["Run the tests.", "Then run the tests again."];
    expect(mapParagraphsToBlocks(blocks, ["run the tests", "then run the tests again"])).toEqual([
      0, 1,
    ]);
  });
});

describe("findParagraphIndexForBlock", () => {
  it("maps a block to the paragraph whose opening words it starts with", () => {
    const cues = ["hello world this is a", "second item"];
    expect(findParagraphIndexForBlock(cues, "Second item of the list")).toBe(1);
  });

  it("prefers the paragraph sharing the most opening words", () => {
    const cues = ["the cat sat", "the cat sat on the mat"];
    expect(findParagraphIndexForBlock(cues, "The cat sat on the mat.")).toBe(1);
  });

  it("is the inverse of mapParagraphsToBlocks for a cue/block pair", () => {
    const blocks = ["Release notes", "We shipped a bunch of fixes today."];
    const cues = ["we shipped a bunch of fixes"];
    const blockIndex = mapParagraphsToBlocks(blocks, cues)[0]!;
    expect(blockIndex).toBe(1);
    expect(findParagraphIndexForBlock(cues, blocks[blockIndex]!)).toBe(0);
  });

  it("returns -1 when no paragraph shares the block's opening words", () => {
    expect(findParagraphIndexForBlock(["totally unrelated"], "Nothing here matches")).toBe(-1);
  });

  it("returns -1 for an empty cue list or empty block text", () => {
    expect(findParagraphIndexForBlock([], "some block")).toBe(-1);
    expect(findParagraphIndexForBlock(["some cue"], "   ")).toBe(-1);
  });

  it("seeks the clicked line, not just the block's first line", () => {
    const cues = ["first item", "second item"];
    expect(findParagraphIndexForBlock(cues, "First item\nSecond item", "Second item")).toBe(1);
  });

  it("seeks a clicked file-chip list item whose cue keeps the full path", () => {
    const cues = [
      "apps/web/src/lib/ttsServerUrl.ts (new, 17 lines) — empty tts.serverUrl resolves",
      "apps/web/src/hooks/useTtsPlayer.ts — one line to resolve that origin",
    ];
    expect(findParagraphIndexForBlock(cues, "useTtsPlayer.ts\n— one line to resolve")).toBe(1);
  });
});
