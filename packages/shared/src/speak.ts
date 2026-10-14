/**
 * The `t3_speak` MCP tool lets an agent say text aloud through the reader's
 * connected clients. The tool result carries everything a client needs; nothing
 * is stored server-side.
 */

export const SPEAK_TOOL_NAME = "t3_speak";

/** What the `t3_speak` tool result carries so clients can speak it. */
export interface SpeakReference {
  readonly text: string;
  readonly speed?: number;
  readonly interrupt?: boolean;
}

const MAX_SPEAK_TEXT = 4_000;

export function readSpeakReference(value: unknown): SpeakReference | undefined {
  if (typeof value !== "object" || value === null) return undefined;
  const { text, speed, interrupt } = value as Record<string, unknown>;
  if (typeof text !== "string") return undefined;
  const trimmed = text.trim();
  if (trimmed.length === 0 || trimmed.length > MAX_SPEAK_TEXT) return undefined;
  return {
    text: trimmed,
    ...(typeof speed === "number" && Number.isFinite(speed) && speed > 0 ? { speed } : {}),
    ...(interrupt === true ? { interrupt: true } : {}),
  };
}
