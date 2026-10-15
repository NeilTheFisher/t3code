import { describe, expect, it } from "vite-plus/test";

import { splitMarkdownBlocks, splitSpokenUnits } from "./spokenText";

describe("splitSpokenUnits", () => {
  it("splits on sentence boundaries and keeps the punctuation", () => {
    expect(splitSpokenUnits("One. Two! Three? Four…")).toEqual(["One.", "Two!", "Three?", "Four…"]);
  });

  it("does not split inside decimals or unspaced punctuation", () => {
    expect(splitSpokenUnits("Version 3.14 is out")).toEqual(["Version 3.14 is out"]);
    expect(splitSpokenUnits("see example.com now")).toEqual(["see example.com now"]);
  });

  it("hard-wraps an over-long sentence at word boundaries", () => {
    const text = `${"word ".repeat(60)}end.`;
    const units = splitSpokenUnits(text);
    expect(units.length).toBeGreaterThan(1);
    for (const unit of units) expect(unit.length).toBeLessThanOrEqual(160);
    expect(units.join(" ")).toBe(text.trim());
  });

  it("drops blank input", () => {
    expect(splitSpokenUnits("   ")).toEqual([]);
  });
});

describe("splitMarkdownBlocks", () => {
  it("splits paragraphs on blank lines and keeps headings and lists whole", () => {
    const md = "# Title\n\nFirst para.\n\n- one\n- two\n\nLast para.";
    expect(splitMarkdownBlocks(md)).toEqual([
      "# Title",
      "First para.",
      "- one\n- two",
      "Last para.",
    ]);
  });

  it("never splits inside a fenced code block", () => {
    const md = "Before.\n\n```ts\nconst a = 1;\n\nconst b = 2;\n```\n\nAfter.";
    const blocks = splitMarkdownBlocks(md);
    expect(blocks).toHaveLength(3);
    expect(blocks[1]).toBe("```ts\nconst a = 1;\n\nconst b = 2;\n```");
  });

  it("handles tilde fences and ignores single backticks", () => {
    const md = "a `inline` b\n\n~~~\nx\n~~~";
    expect(splitMarkdownBlocks(md)).toEqual(["a `inline` b", "~~~\nx\n~~~"]);
  });

  it("returns nothing for whitespace", () => {
    expect(splitMarkdownBlocks("\n\n   \n")).toEqual([]);
  });
});
