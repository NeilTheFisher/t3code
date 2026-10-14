import { describe, expect, it } from "vite-plus/test";

import { splitSpokenUnits } from "./spokenText";

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
