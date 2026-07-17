import { describe, expect, it } from "@effect/vitest";

import {
  buildRecoveredTranscript,
  DEFAULT_MAX_TRANSCRIPT_CHARS,
  type TranscriptSourceMessage,
} from "./RecoveredThreadTranscript.ts";

const msg = (
  role: TranscriptSourceMessage["role"],
  text: string,
  isStreaming = false,
): TranscriptSourceMessage => ({ role, text, isStreaming });

describe("buildRecoveredTranscript", () => {
  it("returns undefined for no renderable messages", () => {
    expect(buildRecoveredTranscript([])).toBeUndefined();
    expect(buildRecoveredTranscript([msg("user", "   "), msg("assistant", "hi", true)])).toBe(
      undefined,
    );
  });

  it("renders role labels in chronological order with delimiters", () => {
    const out = buildRecoveredTranscript([
      msg("user", "hello"),
      msg("assistant", "hi there"),
      msg("system", "note"),
    ]);
    expect(out).toBeDefined();
    expect(out!.startsWith("[Recovered conversation history follows")).toBe(true);
    expect(
      out!.endsWith("[End of recovered conversation history. The user's new message follows.]"),
    ).toBe(true);
    const userIdx = out!.indexOf("User:\nhello");
    const assistantIdx = out!.indexOf("Assistant:\nhi there");
    const systemIdx = out!.indexOf("System:\nnote");
    expect(userIdx).toBeGreaterThan(-1);
    expect(assistantIdx).toBeGreaterThan(userIdx);
    expect(systemIdx).toBeGreaterThan(assistantIdx);
    expect(out).not.toContain("omitted");
  });

  it("skips streaming and empty messages", () => {
    const out = buildRecoveredTranscript([
      msg("user", "keep me"),
      msg("assistant", "partial answer", true),
      msg("assistant", ""),
    ]);
    expect(out).toContain("User:\nkeep me");
    expect(out).not.toContain("partial answer");
  });

  it("drops oldest messages first when over budget and adds a truncation notice", () => {
    const oldest = msg("user", "OLDEST ".repeat(10));
    const filler = Array.from({ length: 50 }, (_, i) =>
      msg("assistant", `filler ${i} ${"x".repeat(100)}`),
    );
    const newest = msg("user", "NEWEST question");
    const out = buildRecoveredTranscript([oldest, ...filler, newest], { maxChars: 1000 });
    expect(out).toBeDefined();
    expect(out).toContain("NEWEST question");
    expect(out).not.toContain("OLDEST");
    expect(out).toContain("[...earlier messages omitted to fit the context budget...]");
    // Kept messages remain in chronological order (highest filler indexes last).
    const kept = [...out!.matchAll(/filler (\d+)/g)].map((m) => Number(m[1]));
    expect(kept).toEqual([...kept].sort((a, b) => a - b));
  });

  it("tail-clamps a single oversized newest message instead of dropping it", () => {
    const out = buildRecoveredTranscript([msg("user", `${"a".repeat(500)}TAIL-MARKER`)], {
      maxChars: 100,
    });
    expect(out).toBeDefined();
    expect(out).toContain("TAIL-MARKER");
    expect(out).toContain("omitted");
    // Body respects the budget (plus notice/header/footer overhead only).
    expect(out!.length).toBeLessThan(600);
  });

  it("respects the default cap", () => {
    const messages = Array.from({ length: 100 }, (_, i) => msg("user", "y".repeat(1000) + ` ${i}`));
    const out = buildRecoveredTranscript(messages);
    expect(out).toBeDefined();
    expect(out!.length).toBeLessThanOrEqual(DEFAULT_MAX_TRANSCRIPT_CHARS + 500);
    expect(out).toContain(" 99");
    expect(out).toContain("omitted");
  });
});
