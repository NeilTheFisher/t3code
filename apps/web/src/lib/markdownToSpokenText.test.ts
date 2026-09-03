import { describe, expect, it } from "vite-plus/test";

import { markdownToSpokenText } from "./markdownToSpokenText";

describe("markdownToSpokenText", () => {
  it("strips heading markers", () => {
    expect(markdownToSpokenText("## Section title\nBody text.")).toBe("Section title Body text.");
  });

  it("unwraps bold and italic", () => {
    expect(markdownToSpokenText("**bold** and *ital* and _em_")).toBe("bold and ital and em");
  });

  it("drops fenced code blocks entirely", () => {
    expect(markdownToSpokenText("before\n```ts\nconst x = 1;\n```\nafter")).toBe("before after");
  });

  it("keeps inline code text without backticks", () => {
    expect(markdownToSpokenText("run `bun test` now")).toBe("run bun test now");
  });

  it("keeps link labels and drops URLs", () => {
    expect(markdownToSpokenText("see [the docs](https://example.com) here")).toBe(
      "see the docs here",
    );
  });

  it("keeps image alt text", () => {
    expect(markdownToSpokenText("![diagram of the flow](img.png)")).toBe("diagram of the flow");
  });

  it("drops bare URLs", () => {
    expect(markdownToSpokenText("go to https://example.com now")).toBe("go to now");
  });

  it("strips list bullets and ordered markers", () => {
    expect(markdownToSpokenText("- one\n- two\n1. three\n2) four")).toBe("one two three four");
  });

  it("strips blockquote markers", () => {
    expect(markdownToSpokenText("> quoted line\n> another")).toBe("quoted line another");
  });

  it("strips github alert brackets", () => {
    expect(markdownToSpokenText("> [!NOTE]\n> This is a note.")).toBe("NOTE. This is a note.");
  });

  it("strips strikethrough and task-list checkboxes", () => {
    expect(markdownToSpokenText("~~gone~~\n- [x] done\n- [ ] todo")).toBe("gone done todo");
  });

  it("collapses whitespace into single spaces", () => {
    expect(markdownToSpokenText("a\n\n\n   b\t\tc")).toBe("a b c");
  });

  it("passes plain text through unchanged", () => {
    expect(markdownToSpokenText("Just a normal sentence.")).toBe("Just a normal sentence.");
  });
});
