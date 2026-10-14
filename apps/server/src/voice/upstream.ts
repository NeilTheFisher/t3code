/**
 * The local OpenAI-compatible TTS service both TTS routes proxy to (Paradee on
 * the host). Kept in one place so the raw `/v1/audio/*` proxy (`http.ts`) and
 * the typed environment speech endpoint (`voice/http.ts`) cannot drift.
 */

const TTS_UPSTREAM_URL = process.env.T3CODE_TTS_SERVER_URL ?? "http://127.0.0.1:8880";

/** The model name an OpenAI-compatible speech endpoint expects. */
export const TTS_UPSTREAM_MODEL = "kokoro";

/** Absolute upstream URL for `path`, tolerant of a trailing slash on the base. */
export function ttsUpstreamPath(path: string): string {
  return `${TTS_UPSTREAM_URL.replace(/\/+$/, "")}${path}`;
}
