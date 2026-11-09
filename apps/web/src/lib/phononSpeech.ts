/**
 * Local speech through Phonon, the WebGPU engine with a WebAssembly fallback.
 * It emits the same s16le mono chunks the Kokoro proxy streams, so the player
 * schedules paragraphs, seeks and highlights without knowing which engine ran.
 */
import type { Phonon, Speech } from "phonon-webgpu";

import {
  PHONON_DEFAULT_VOICE,
  PHONON_MAX_SPEED,
  PHONON_MIN_SPEED,
  PHONON_MODEL,
  modelAssetBase,
  phononVoiceFor,
  rewriteModelUrl,
  splitPauseDirective,
} from "./phononModel";

/** Sample rate the model makes and the player's audio graph runs at. */
const SAMPLE_RATE = 24_000;
/** Small chunks cost one audio buffer each, so they are batched to ~250 ms. */
const BATCH_SAMPLES = 6_000;

type PhononModule = typeof import("phonon-webgpu");

let engine: Phonon | null = null;
let loading: Promise<Phonon> | null = null;
/** Why the engine cannot run here, once it has failed. */
let failure: string | null = null;

/** The engine bundle this app serves itself; see `vite/phononAssets.ts`. */
function phononModuleUrl(): string {
  return `${import.meta.env.BASE_URL}phonon/phonon.js`;
}

/**
 * Whether this page may run the engine at all. Cache Storage, and with it a
 * model kept between narrations, needs a secure origin: a plain-http tailnet
 * address would download 44 MB per message, so those pages ask the environment.
 */
export function localSpeechAvailable(): boolean {
  return globalThis.isSecureContext === true;
}

let activeBase = "";
let users = 0;
let restoreFetch: (() => void) | null = null;

/**
 * Point the model's pinned Hub URLs at this environment while `run` is in
 * flight. The library keys its Cache Storage by the upstream URL, so the
 * rewrite stays in the network layer and a cached model is reused anywhere.
 */
async function withModelOrigin<T>(serverUrl: string, run: () => Promise<T>): Promise<T> {
  activeBase = modelAssetBase(serverUrl);
  if (restoreFetch === null) {
    const original = globalThis.fetch;
    globalThis.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
      const proxied = rewriteModelUrl(url, activeBase);
      return proxied === null ? original(input, init) : original(proxied, init);
    }) as typeof fetch;
    restoreFetch = () => {
      globalThis.fetch = original;
    };
  }
  users += 1;
  try {
    return await run();
  } finally {
    users -= 1;
    if (users === 0 && restoreFetch !== null) {
      restoreFetch();
      restoreFetch = null;
    }
  }
}

async function loadEngine(serverUrl: string, onLoadingModel?: () => void): Promise<Phonon> {
  if (engine !== null) return engine;
  if (failure !== null) throw new Error(failure);
  if (loading === null) {
    loading = (async () => {
      onLoadingModel?.();
      const module = (await import(/* @vite-ignore */ phononModuleUrl())) as PhononModule;
      const tts = await withModelOrigin(serverUrl, () =>
        module.Phonon.load({ model: PHONON_MODEL }),
      );
      engine = tts;
      return tts;
    })().catch((error: unknown) => {
      failure = error instanceof Error ? error.message : "The speech model could not start.";
      loading = null;
      throw error;
    });
  }
  return await loading;
}

/** Why the engine is unavailable, if it failed since the last reset. */
export function phononFailure(): string | null {
  return failure;
}

export interface PhononSpeechRequest {
  readonly text: string;
  readonly voice: string;
  readonly speed: number;
  /** Environment base whose `/v1/audio/model` route serves the model files. */
  readonly serverUrl: string;
  readonly signal?: AbortSignal | undefined;
  /** Receives s16le mono 24 kHz chunks, framed on sample boundaries. */
  readonly onChunk: (pcm: ArrayBuffer) => void;
  /** Called once before a cold load, so the UI can say the model is arriving. */
  readonly onLoadingModel?: (() => void) | undefined;
}

/** Float32 samples to s16le, batched so the player schedules few large buffers. */
function createPcmWriter(onChunk: (pcm: ArrayBuffer) => void): {
  push: (samples: Float32Array) => void;
  flush: () => void;
  silence: (seconds: number) => void;
} {
  let batch = new Float32Array(BATCH_SAMPLES);
  let filled = 0;

  const emit = (samples: Float32Array, count: number) => {
    const bytes = new ArrayBuffer(count * 2);
    const view = new DataView(bytes);
    for (let i = 0; i < count; i += 1) {
      const sample = Math.max(-1, Math.min(1, samples[i] ?? 0));
      view.setInt16(i * 2, Math.round(sample * 32_767), true);
    }
    onChunk(bytes);
  };

  const flush = () => {
    if (filled === 0) return;
    emit(batch, filled);
    filled = 0;
  };

  return {
    push(samples) {
      let offset = 0;
      while (offset < samples.length) {
        const room = BATCH_SAMPLES - filled;
        const take = Math.min(room, samples.length - offset);
        batch.set(samples.subarray(offset, offset + take), filled);
        filled += take;
        offset += take;
        if (filled === BATCH_SAMPLES) {
          emit(batch, filled);
          filled = 0;
        }
      }
    },
    flush,
    silence(seconds) {
      flush();
      const count = Math.round(seconds * SAMPLE_RATE);
      if (count <= 0) return;
      emit(new Float32Array(count), count);
    },
  };
}

/** Synthesize one spoken unit, streaming its PCM to `onChunk`. */
export async function streamPhononChunks(request: PhononSpeechRequest): Promise<void> {
  const { text, pauseSeconds } = splitPauseDirective(request.text);
  if (text.length === 0) {
    if (pauseSeconds > 0) createPcmWriter(request.onChunk).silence(pauseSeconds);
    return;
  }
  const tts = await loadEngine(request.serverUrl, request.onLoadingModel);
  request.signal?.throwIfAborted();

  const writer = createPcmWriter(request.onChunk);
  const speed = Math.min(PHONON_MAX_SPEED, Math.max(PHONON_MIN_SPEED, request.speed));
  const speak = (voice: string): Promise<Speech> =>
    withModelOrigin(request.serverUrl, () =>
      tts.speak(text, {
        voice,
        speed,
        ...(request.signal === undefined ? {} : { signal: request.signal }),
        onAudio: (samples) => writer.push(samples),
      }),
    );

  const voice = phononVoiceFor(request.voice);
  try {
    await speak(voice);
  } catch (error) {
    // A stored voice the model does not know still has to play.
    const message = error instanceof Error ? error.message : "";
    if (!message.startsWith("No voice ") || voice === PHONON_DEFAULT_VOICE) throw error;
    await speak(PHONON_DEFAULT_VOICE);
  }
  writer.silence(pauseSeconds);
}
