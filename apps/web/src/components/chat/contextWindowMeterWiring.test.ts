import { describe, expect, it } from "vite-plus/test";

import chatComposerSource from "./ChatComposer.tsx?raw";
import chatViewSource from "../ChatView.tsx?raw";

// The context window indicator is the fork's main feature and has been lost to
// rebase merges more than once. It only renders when two wires stay connected:
// ChatView hands the composer the derived snapshot, and ChatComposer gates it on
// the opt-in setting. These guards fail loudly if either wire is dropped.
describe("context window indicator wiring", () => {
  it("passes the derived context window snapshot into the composer", () => {
    expect(chatViewSource).toMatch(/activeContextWindow=\{activeContextWindow\}/);
  });

  it("lets the composer render the meter only while the setting is enabled", () => {
    expect(chatComposerSource).toContain("<ContextWindowMeter");
    expect(chatComposerSource).toMatch(
      /settings\.contextWindowMeterEnabled\s*\?\s*activeContextWindow\s*:\s*null/,
    );
  });
});
