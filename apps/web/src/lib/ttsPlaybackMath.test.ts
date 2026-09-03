import { describe, expect, it } from "vite-plus/test";

import { convergeEstimatedDuration, estimateSpokenDuration, seekSchedule } from "./ttsPlaybackMath";

describe("estimateSpokenDuration", () => {
  it("estimates ~15 chars per second at 1x", () => {
    expect(estimateSpokenDuration("a".repeat(60), 1)).toBe(4);
  });

  it("scales inversely with playback rate", () => {
    expect(estimateSpokenDuration("a".repeat(60), 2)).toBe(2);
  });

  it("is zero for empty text or non-positive rate", () => {
    expect(estimateSpokenDuration("", 1)).toBe(0);
    expect(estimateSpokenDuration("hi", 0)).toBe(0);
  });
});

describe("convergeEstimatedDuration", () => {
  it("uses observed chars/sec once a paragraph has synthesized", () => {
    // 60 chars synthesized into 3s of audio => 20 chars/sec observed.
    const total = convergeEstimatedDuration({
      scheduled: 3,
      spokenCharsSynthesized: 60,
      remainingChars: 40,
      fallbackCharsPerSecond: 15,
      speed: 1,
    });
    expect(total).toBe(5); // 3s known + 40/20 estimated
  });

  it("falls back to the base rate before any evidence", () => {
    const total = convergeEstimatedDuration({
      scheduled: 0,
      spokenCharsSynthesized: 0,
      remainingChars: 45,
      fallbackCharsPerSecond: 15,
      speed: 1,
    });
    expect(total).toBe(3);
  });

  it("returns the known extent when nothing remains", () => {
    expect(
      convergeEstimatedDuration({
        scheduled: 4.5,
        spokenCharsSynthesized: 100,
        remainingChars: 0,
        fallbackCharsPerSecond: 15,
        speed: 2,
      }),
    ).toBe(4.5);
  });
});
