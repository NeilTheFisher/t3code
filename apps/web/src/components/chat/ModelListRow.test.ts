import { describe, expect, it } from "vite-plus/test";

import { formatModelContextWindowTokens } from "../modelMetadata";

describe("formatModelContextWindowTokens", () => {
  it("formats the full context limit with locale separators", () => {
    expect(formatModelContextWindowTokens(1_050_000, "en-US")).toBe("1,050,000");
  });
});
