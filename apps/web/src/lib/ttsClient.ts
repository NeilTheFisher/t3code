/**
 * Thin fetch wrapper for the local Kokoro-FastAPI server's OpenAI-compatible
 * TTS endpoint. Pure: no React, no store coupling, no logging side-effects.
 *
 * The server is expected to be reachable at `serverUrl` (loopback by default).
 * See ~/projects/Kokoro-FastAPI for the reference implementation.
 *
 * An on-demand proxy may sit in front of the server (see the setup repo's
 * kokoro-proxy/): while it wakes the container it replies 503 + Retry-After.
 * Poll until the server is up before surfacing an error to the caller.
 */

export type TtsRequest = {
  text: string;
  voice: string;
  serverUrl: string;
  signal?: AbortSignal | undefined;
  /** Called once when the first 503 is seen — lets the UI show a "waking" hint. */
  onWakingUp?: (() => void) | undefined;
};

/** Total time to wait for an on-demand TTS server to wake before failing. */
export const TTS_WAKE_TIMEOUT_MS = 150_000;
const WAKE_POLL_INTERVAL_MS = 2_000;

const stripTrailingSlash = (url: string): string => url.replace(/\/+$/, "");

const sleep = (ms: number, signal?: AbortSignal): Promise<void> =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(signal.reason);
      },
      { once: true },
    );
  });

async function postSpeech(req: TtsRequest): Promise<Response> {
  const endpoint = `${stripTrailingSlash(req.serverUrl)}/v1/audio/speech`;
  const init: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "kokoro",
      input: req.text,
      voice: req.voice,
      response_format: "wav",
    }),
  };
  if (req.signal !== undefined) {
    init.signal = req.signal;
  }
  return await fetch(endpoint, init);
}

export async function synthesizeSpeech(req: TtsRequest): Promise<Blob> {
  const deadline = Date.now() + TTS_WAKE_TIMEOUT_MS;
  let notifiedWaking = false;

  // The on-demand proxy returns 503 while the container starts. Retry with a
  // backoff until it is healthy; anything else fails fast as before.
  for (;;) {
    const res = await postSpeech(req);

    if (res.status === 503 || res.status === 504) {
      if (Date.now() >= deadline) {
        const detail = await res.text().catch(() => "");
        throw new TtsServerError(res.status, res.statusText, detail);
      }
      if (!notifiedWaking) {
        notifiedWaking = true;
        req.onWakingUp?.();
      }
      await sleep(WAKE_POLL_INTERVAL_MS, req.signal);
      continue;
    }

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      throw new TtsServerError(res.status, res.statusText, detail);
    }

    return await res.blob();
  }
}

export class TtsServerError extends Error {
  readonly status: number;
  readonly statusText: string;
  readonly detail: string;

  constructor(status: number, statusText: string, detail: string) {
    const trimmedDetail = detail.trim();
    const suffix = trimmedDetail.length > 0 ? `: ${trimmedDetail}` : "";
    super(`TTS server returned ${status} ${statusText}${suffix}`);
    this.name = "TtsServerError";
    this.status = status;
    this.statusText = statusText;
    this.detail = trimmedDetail;
  }
}
