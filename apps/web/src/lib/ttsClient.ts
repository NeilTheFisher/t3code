/**
 * Fetch layer for the local Kokoro-FastAPI server's OpenAI-compatible TTS
 * endpoint. Pure: no React, no store coupling, no logging side-effects.
 *
 * The server is expected to be reachable at `serverUrl` (loopback by default).
 * See ~/projects/Kokoro-FastAPI for the reference implementation.
 *
 * An on-demand proxy may sit in front of the server (see the setup repo's
 * kokoro-proxy/): while it wakes the container it replies 503 + Retry-After.
 * Poll until the server is up before surfacing an error to the caller.
 *
 * Streaming: with `stream: true` + `response_format: "pcm"` the server emits
 * raw s16le mono 24kHz chunks as they are synthesized (and stops generating on
 * client disconnect). Chunks arrive progressively; the first bytes play long
 * before the whole message is synthesized.
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

async function postSpeech(req: TtsRequest, stream: boolean): Promise<Response> {
  const endpoint = `${stripTrailingSlash(req.serverUrl)}/v1/audio/speech`;
  const init: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "kokoro",
      input: req.text,
      voice: req.voice,
      response_format: "pcm",
      stream: stream || undefined,
    }),
  };
  if (req.signal !== undefined) {
    init.signal = req.signal;
  }
  return await fetch(endpoint, init);
}

interface WakeContext {
  deadline: number;
  notifiedWaking: boolean;
  req: TtsRequest;
}

/** Retry-while-waking one POST until it is neither 503 nor 504. */
async function postUntilAwake(req: TtsRequest, stream: boolean): Promise<Response> {
  const wake: WakeContext = {
    deadline: Date.now() + TTS_WAKE_TIMEOUT_MS,
    notifiedWaking: false,
    req,
  };
  for (;;) {
    const res = await postSpeech(req, stream);
    if (res.status !== 503 && res.status !== 504) {
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        throw new TtsServerError(res.status, res.statusText, detail);
      }
      return res;
    }
    if (Date.now() >= wake.deadline) {
      const detail = await res.text().catch(() => "");
      throw new TtsServerError(res.status, res.statusText, detail);
    }
    if (!wake.notifiedWaking) {
      wake.notifiedWaking = true;
      req.onWakingUp?.();
    }
    await sleep(WAKE_POLL_INTERVAL_MS, req.signal);
  }
}

export async function synthesizeSpeech(req: TtsRequest): Promise<Blob> {
  const res = await postUntilAwake(req, false);
  return await res.blob();
}

/** Sample shape of the server's PCM stream (s16le mono). */
export const TTS_PCM_SAMPLE_RATE = 24_000;

/**
 * Progressive PCM chunks of a streaming synthesis. Resolves once the HTTP
 * response starts; iterate the returned async iterable for each chunk. The
 * request aborts (and the server stops generating) if `signal` aborts.
 */
export async function streamSpeechChunks(
  req: TtsRequest,
  onChunk: (chunk: ArrayBuffer) => void,
): Promise<void> {
  const res = await postUntilAwake(req, true);
  const reader = res.body?.getReader();
  if (reader === undefined) {
    throw new Error("TTS server returned no stream body.");
  }
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value !== undefined && value.byteLength > 0) {
      onChunk(value.buffer as ArrayBuffer);
    }
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
