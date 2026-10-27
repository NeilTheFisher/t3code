/**
 * Fetch layer for the local OpenAI-compatible TTS endpoint: no React, no store.
 * A 503 means an on-demand backend is waking, so poll before surfacing an error.
 * With `stream: true` the server emits raw s16le mono 24kHz chunks as it
 * synthesizes, so playback starts before the whole message exists.
 */

export type TtsRequest = {
  text: string;
  voice: string;
  serverUrl: string;
  /** Synthesis speed: the server synthesizes faster/slower speech, pitch intact. */
  speed?: number | undefined;
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
      speed: req.speed,
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
 * Progressive PCM chunks of a streaming synthesis. TCP reads do not align with
 * 16-bit samples, so a carry byte from one read is prepended to the next: every
 * chunk starts on a sample boundary with an even length.
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
  let carry = new Uint8Array(0);
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value === undefined || value.byteLength === 0) continue;

    // Prepend any odd leftover byte from the previous read.
    let framed = value;
    if (carry.byteLength > 0) {
      framed = new Uint8Array(carry.byteLength + value.byteLength);
      framed.set(carry, 0);
      framed.set(value, carry.byteLength);
      carry = new Uint8Array(0);
    }
    const evenLength = framed.byteLength - (framed.byteLength % 2);
    if (evenLength !== framed.byteLength) {
      carry = framed.slice(evenLength);
      framed = framed.slice(0, evenLength);
    }
    if (framed.byteLength === 0) continue;
    onChunk(framed.buffer as ArrayBuffer);
  }
  // A trailing unpaired byte is not audio; drop it.
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
