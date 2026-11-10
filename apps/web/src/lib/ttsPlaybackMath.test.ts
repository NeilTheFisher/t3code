import { describe, expect, it } from "vite-plus/test";

import {
  convergeEstimatedDuration,
  estimateSpokenDuration,
  playbackPosition,
  type ScheduledChunk,
} from "./ttsPlaybackMath";

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

describe("playbackPosition", () => {
  const chunk = (
    paragraph: number,
    at: number,
    startedAt: number,
    duration = 2,
  ): ScheduledChunk => ({ paragraph, at, startedAt, duration });

  it("is idle before the first chunk starts", () => {
    expect(playbackPosition([chunk(0, 0, 5)], 1)).toEqual({ head: 0, paragraph: null });
  });

  it("reads the head and paragraph of the chunk being heard", () => {
    const schedule = [chunk(0, 0, 0), chunk(1, 2, 2), chunk(2, 4, 4)];
    expect(playbackPosition(schedule, 3.5)).toEqual({ head: 3.5, paragraph: 1 });
  });

  it("holds the last chunk's end through a gap instead of running ahead", () => {
    // Chunk 1 starts late (synthesis behind realtime): the clock is at 3 but the
    // audio heard has only reached 2.
    const schedule = [chunk(0, 0, 0), chunk(1, 2, 3)];
    expect(playbackPosition(schedule, 2.5)).toEqual({ head: 2, paragraph: 0 });
  });

  it("accounts for a chunk resumed mid-buffer by a seek", () => {
    // Seeking to 3 resumes paragraph 1's chunk at message-time 3, now.
    const schedule = [chunk(1, 3, 10), chunk(2, 4, 11, 2)];
    expect(playbackPosition(schedule, 10.5)).toEqual({ head: 3.5, paragraph: 1 });
  });

  it("ends on the last chunk's end when everything has played", () => {
    expect(playbackPosition([chunk(0, 0, 0)], 99)).toEqual({ head: 2, paragraph: 0 });
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
