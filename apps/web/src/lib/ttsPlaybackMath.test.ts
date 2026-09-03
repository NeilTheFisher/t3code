import { describe, expect, it } from "vite-plus/test";

import { estimateSpokenDuration, seekSchedule } from "./ttsPlaybackMath";

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

describe("seekSchedule", () => {
  const chunks = [
    { at: 0, duration: 2 },
    { at: 2, duration: 2 },
    { at: 4, duration: 2 },
    { at: 6, duration: 2 },
  ];

  it("drops chunks before the target and resumes mid-chunk", () => {
    expect(seekSchedule(chunks, 3)).toEqual([
      { index: 1, offset: 1 },
      { index: 2, offset: 0 },
      { index: 3, offset: 0 },
    ]);
  });

  it("keeps the current chunk when seeking to a chunk boundary", () => {
    expect(seekSchedule(chunks, 2)).toEqual([
      { index: 1, offset: 0 },
      { index: 2, offset: 0 },
      { index: 3, offset: 0 },
    ]);
  });

  it("returns everything when seeking to the start", () => {
    expect(seekSchedule(chunks, 0).map((e) => e.index)).toEqual([0, 1, 2, 3]);
  });

  it("drops everything when seeking past the end", () => {
    expect(seekSchedule(chunks, 99)).toEqual([]);
  });

  it("handles an empty timeline", () => {
    expect(seekSchedule([], 1)).toEqual([]);
  });
});
