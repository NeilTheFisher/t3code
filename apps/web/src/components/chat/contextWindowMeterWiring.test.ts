import { describe, expect, it } from "vite-plus/test";

import threadDetailsPanelSource from "./ThreadDetailsPanel.tsx?raw";
import threadDetailsUsageSource from "./ThreadDetailsUsage.tsx?raw";

// The context window indicator has been lost to rebase merges before: it now lives
// in the thread details panel, which must pass the thread's context window into the
// usage section, and that section must render both the meter and provider limits.
// These guards fail if either wire is dropped.
describe("context window indicator wiring", () => {
  it("passes the thread's context window into the usage section", () => {
    expect(threadDetailsPanelSource).toMatch(
      /<ThreadDetailsContext usage=\{props\.usage\.contextWindow\} \/>/,
    );
    expect(threadDetailsPanelSource).toContain("<ThreadDetailsUsage");
  });

  it("renders the context window meter and the provider limits", () => {
    expect(threadDetailsUsageSource).toContain("export function ThreadDetailsContext");
    expect(threadDetailsUsageSource).toContain("formatContextWindowTokens(usage.usedTokens)");
    expect(threadDetailsUsageSource).toMatch(/limits\.windows\.map\(\(window\) => <LimitRow/);
  });
});
