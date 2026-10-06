import { describe, expect, it } from "vite-plus/test";

import { findActiveBlockIndex, normalizeWords } from "./ttsParagraphMatching";

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

describe("findActiveBlockIndex", () => {
  it("matches a plain paragraph despite case and punctuation differences", () => {
    const blocks = ["Hello, world! This is a test."];
    expect(findActiveBlockIndex(blocks, "hello world this is a")).toBe(0);
  });

  it("matches a list block even though the cue carries no newlines", () => {
    const blocks = ["First item of the list\nSecond item"];
    expect(findActiveBlockIndex(blocks, "first item of the list")).toBe(0);
  });

  it("locates a heading when the spoken paragraph merges it with the body", () => {
    const blocks = ["Release notes", "We shipped a bunch of fixes today."];
    expect(findActiveBlockIndex(blocks, "release notes we shipped")).toBe(0);
  });

  it("locates a later list item that became its own spoken paragraph", () => {
    const blocks = ["First item", "Second item", "Third item"];
    expect(findActiveBlockIndex(blocks, "second item")).toBe(1);
  });

  it("prefers the block matching the most opening words", () => {
    const blocks = ["The cat sat", "The cat sat on the mat"];
    expect(findActiveBlockIndex(blocks, "the cat sat on the mat")).toBe(1);
  });

  it("returns -1 when no block shares the cue's opening words", () => {
    const blocks = ["Completely different text", "Another unrelated block"];
    expect(findActiveBlockIndex(blocks, "nothing here matches")).toBe(-1);
  });

  it("returns -1 for an empty cue", () => {
    expect(findActiveBlockIndex(["some block"], "   ")).toBe(-1);
  });
});
