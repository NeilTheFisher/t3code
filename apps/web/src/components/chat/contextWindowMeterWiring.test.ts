import { describe, expect, it } from "vite-plus/test";

import chatComposerSource from "./ChatComposer.tsx?raw";
import composerFooterControlsSource from "./ComposerFooterControls.tsx?raw";
import chatViewSource from "../ChatView.tsx?raw";

// The context window indicator is the fork's main feature and has been lost to
// rebase merges more than once. It only renders when two wires stay connected:
// ChatView hands the composer the derived snapshot, and ChatComposer gates it on
// the opt-in setting. These guards fail loudly if either wire is dropped.
//
// Upstream moved the footer out of `ChatComposer` into `ComposerFooterControls`,
// taking the meter with it, so the meter's own render is checked in that file.
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
