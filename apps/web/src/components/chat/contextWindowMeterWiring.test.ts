import { describe, expect, it } from "vite-plus/test";

import chatComposerSource from "./ChatComposer.tsx?raw";
import composerFooterControlsSource from "./ComposerFooterControls.tsx?raw";
import chatViewSource from "../ChatView.tsx?raw";

// The context window indicator has been lost to rebase merges before: it needs
// ChatView's derived snapshot and ChatComposer's opt-in gate, and its render now
// lives in ComposerFooterControls. These guards fail if either wire is dropped.
describe("context window indicator wiring", () => {
  it("passes the derived context window snapshot into the composer", () => {
    expect(chatViewSource).toMatch(/activeContextWindow=\{activeContextWindow\}/);
  });

  it("lets the composer render the meter only while the setting is enabled", () => {
    expect(chatComposerSource).toMatch(
      /settings\.contextWindowMeterEnabled\s*\?\s*activeContextWindow\s*:\s*null/,
    );
    expect(composerFooterControlsSource).toContain("<ContextWindowMeter");
  });
});
