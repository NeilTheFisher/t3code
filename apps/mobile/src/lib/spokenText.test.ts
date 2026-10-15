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
  it("splits paragraphs on blank lines, keeps headings, and splits list items", () => {
    const md = "# Title\n\nFirst para.\n\n- one\n- two\n\nLast para.";
    expect(splitMarkdownBlocks(md)).toEqual([
      "# Title",
      "First para.",
      "- one",
      "- two",
      "Last para.",
    ]);
  });

  it("keeps a numbered item's own marker so numbering survives on its own", () => {
    const md = "Next steps:\n\n1. First.\n2. Second.\n3. Third.";
    expect(splitMarkdownBlocks(md)).toEqual([
      "Next steps:",
      "1. First.",
      "2. Second.",
      "3. Third.",
    ]);
  });

  it("keeps a list item's wrapped continuation lines with the item", () => {
    const md = "1. First line\n   wrapped onto a second line\n2. Second.";
    expect(splitMarkdownBlocks(md)).toEqual([
      "1. First line\n   wrapped onto a second line",
      "2. Second.",
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
