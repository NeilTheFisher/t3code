import { describe, expect, it } from "vite-plus/test";

import chatComposerSource from "./ChatComposer.tsx?raw";
import composerFooterControlsSource from "./ComposerFooterControls.tsx?raw";

// The context window indicator has been lost to rebase merges before: the composer
// must derive the snapshot, gate it on the setting, and the footer must render it.
// These guards fail if either wire is dropped.
describe("context window indicator wiring", () => {
  it("derives the context window snapshot in the composer", () => {
    expect(chatComposerSource).toMatch(
      /const activeContextWindow = deriveLatestContextWindowSnapshot\(/,
    );
  });

  it("lets the composer render the meter only while the setting is enabled", () => {
    expect(chatComposerSource).toMatch(
      /settings\.contextWindowMeterEnabled\s*\?\s*activeContextWindow\s*:\s*null/,
    );
    expect(composerFooterControlsSource).toContain("<ContextWindowMeter");
  });
});
