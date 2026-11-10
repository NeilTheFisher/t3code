// Phonon runs in a hidden WebView because Hermes has neither WebGPU nor WASM.
// The page is app-owned; the engine and weights come from the environment origin
// so the model cache and the weight proxy share one authenticated connection.
import type { EnvironmentId } from "@t3tools/contracts";
import { PHONON_DEFAULT_VOICE } from "@t3tools/client-runtime/phonon-voices";
import type { WebView } from "react-native-webview";
import type { WebViewMessageEvent } from "react-native-webview";

/** The engine bundle's path below an environment's HTTP base. */
export const PHONON_ENGINE_PATH = "/v1/audio/engine/";

interface PhononHost {
  readonly environmentId: EnvironmentId;
  readonly view: WebView<object>;
  /** Selected narration voice; a per-request voice still wins. */
  voice: string;
  readonly ready: Promise<void>;
  resolveReady: () => void;
  rejectReady: (error: Error) => void;
}

interface PendingSynthesis {
  readonly host: PhononHost;
  readonly chunks: string[];
  readonly resolve: (base64: string) => void;
  readonly reject: (error: Error) => void;
  readonly onLoadingModel?: (() => void) | undefined;
  readonly onProgress?: ((percent: number) => void) | undefined;
  readonly dispose: () => void;
}

/**
 * Hosts stack: a screen opened over a thread (the voice picker) may register
 * its own engine, and closing it must leave the thread's engine working. The
 * newest host for an environment serves its requests.
 */
const hosts: PhononHost[] = [];
const pending = new Map<string, PendingSynthesis>();
let nextId = 0;
/** One synth at a time: the engine itself serializes text and reuses one KV cache. */
let queue: Promise<unknown> = Promise.resolve();

function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error: unknown) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

function postToPage(host: PhononHost, message: Record<string, unknown>): void {
  const json = JSON.stringify(JSON.stringify(message));
  host.view.injectJavaScript(`window.T3Phonon && window.T3Phonon.handle(${json});true;`);
}

function hostFor(environmentId: EnvironmentId): PhononHost | null {
  for (let index = hosts.length - 1; index >= 0; index -= 1) {
    if (hosts[index]!.environmentId === environmentId) return hosts[index]!;
  }
  return null;
}

function hostForView(view: WebView<object>): PhononHost | null {
  for (let index = hosts.length - 1; index >= 0; index -= 1) {
    if (hosts[index]!.view === view) return hosts[index]!;
  }
  return null;
}

/** Whether an engine page is already registered for this environment. */
export function hasPhononHost(environmentId: EnvironmentId): boolean {
  return hostFor(environmentId) !== null;
}

export function registerPhononHost(
  environmentId: EnvironmentId,
  view: WebView<object>,
  voice: string = PHONON_DEFAULT_VOICE,
): () => void {
  let resolveReady = () => {};
  let rejectReady = (_error: Error) => {};
  const ready = new Promise<void>((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
  });
  ready.catch(() => {
    // A rejection is delivered to whatever synthesis is waiting on it.
  });
  const replaced = hostForView(view);
  if (replaced !== null) {
    hosts.splice(hosts.indexOf(replaced), 1);
    failHost(replaced, aborted("The speech engine was replaced."));
  }
  const host: PhononHost = {
    environmentId,
    view,
    voice,
    ready,
    resolveReady,
    rejectReady,
  };
  hosts.push(host);
  return () => {
    const index = hosts.indexOf(host);
    if (index >= 0) hosts.splice(index, 1);
    failHost(host, aborted("The speech engine went away."));
  };
}

/** The voice later synthesis requests use when they do not name one. */
export function setPhononHostVoice(voice: string): void {
  for (const host of hosts) host.voice = voice;
}

function aborted(message: string): Error {
  const error = new Error(message);
  error.name = "AbortError";
  return error;
}

function failHost(host: PhononHost, error: Error): void {
  for (const [id, entry] of pending) {
    if (entry.host !== host) continue;
    pending.delete(id);
    entry.dispose();
    entry.reject(error);
  }
}

/** Runtime messages from one engine page. */
export function handlePhononMessage(event: WebViewMessageEvent, view?: WebView<object>): void {
  const host = view === undefined ? (hosts[hosts.length - 1] ?? null) : hostForView(view);
  let message: unknown;
  try {
    message = JSON.parse(event.nativeEvent.data);
  } catch {
    return;
  }
  if (typeof message !== "object" || message === null) return;
  const data = message as {
    type?: unknown;
    id?: unknown;
    data?: unknown;
    message?: unknown;
    percent?: unknown;
  };
  if (data.type === "host-ready") {
    host?.resolveReady();
    return;
  }
  if (data.type === "fatal") {
    const error = new Error(
      typeof data.message === "string" ? data.message : "The speech engine could not start.",
    );
    host?.rejectReady(error);
    if (host !== null) failHost(host, error);
    return;
  }
  if (typeof data.id !== "string") return;
  const entry = pending.get(data.id);
  if (entry === undefined) return;
  if (host !== null && entry.host !== host) return;

  if (data.type === "loading-model") {
    entry.onLoadingModel?.();
  } else if (data.type === "chunk" && typeof data.data === "string") {
    entry.chunks.push(data.data);
  } else if (data.type === "progress" && typeof data.percent === "number") {
    entry.onProgress?.(data.percent);
  } else if (data.type === "done") {
    pending.delete(data.id);
    entry.dispose();
    entry.resolve(entry.chunks.join(""));
  } else if (data.type === "error") {
    pending.delete(data.id);
    entry.dispose();
    entry.reject(
      new Error(typeof data.message === "string" ? data.message : "Speech synthesis failed."),
    );
  } else if (data.type === "cancelled") {
    pending.delete(data.id);
    entry.dispose();
    entry.reject(new Error("Speech synthesis was cancelled."));
  }
}

interface PhononSynthesisRequest {
  readonly environmentId: EnvironmentId;
  readonly text: string;
  /** Defaults to the host's selected voice. */
  readonly voice?: string | undefined;
  /** Retried once when the model does not know `voice`. */
  readonly fallbackVoice?: string | undefined;
  readonly signal?: AbortSignal | undefined;
  /** Called once when the engine page starts a cold model load. */
  readonly onLoadingModel?: (() => void) | undefined;
  readonly onProgress?: ((percent: number) => void) | undefined;
}

/** Synthesize one unit to a base64 WAV, waiting for the host page when needed. */
export function synthesizePhononWav(request: PhononSynthesisRequest): Promise<string> {
  const run = () => startSynthesis(request);
  const result = queue.then(run, run);
  queue = result.catch(() => undefined);
  return result;
}

async function startSynthesis(request: PhononSynthesisRequest): Promise<string> {
  const active = hostFor(request.environmentId);
  if (active === null) {
    throw new Error("The speech engine is not ready on this screen.");
  }
  if (request.signal?.aborted === true) throw request.signal.reason;
  await withTimeout(
    active.ready,
    15_000,
    "The speech engine did not start. Reopen the thread and try again.",
  );

  const id = `synth-${(nextId += 1)}`;
  return await new Promise<string>((resolve, reject) => {
    const onAbort = () => {
      postToPage(active, { type: "cancel", id });
      pending.delete(id);
      reject(request.signal?.reason ?? new Error("Speech synthesis was cancelled."));
    };
    request.signal?.addEventListener("abort", onAbort, { once: true });
    pending.set(id, {
      host: active,
      chunks: [],
      resolve,
      reject,
      onLoadingModel: request.onLoadingModel,
      onProgress: request.onProgress,
      dispose: () => request.signal?.removeEventListener("abort", onAbort),
    });
    postToPage(active, {
      type: "synthesize",
      id,
      text: request.text,
      voice: request.voice ?? active.voice,
      fallbackVoice: request.fallbackVoice ?? PHONON_DEFAULT_VOICE,
    });
  });
}

/**
 * The engine page. Its inline module imports the engine beside it, rewrites the
 * pinned Hub URLs to this environment's weight proxy, and returns each
 * paragraph as a WAV so native playback needs no WebView once it starts.
 */
export const PHONON_ENGINE_HTML = `<!doctype html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"></head><body>
<script type="module">
const MODEL_PREFIX = "https://huggingface.co/";
const MODEL_PROXY = new URL("/v1/audio/model/", document.baseURI).href;
const memory = new Map();
const originalFetch = window.fetch.bind(window);
window.fetch = async (input, init) => {
  const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
  const proxied = url.startsWith(MODEL_PREFIX) ? MODEL_PROXY + url.slice(MODEL_PREFIX.length) : url;
  if (!proxied.startsWith(MODEL_PROXY)) return originalFetch(input, init);
  const hit = memory.get(proxied);
  if (hit) return new Response(hit.slice(0), { headers: { "content-type": "application/octet-stream" } });
  const response = await originalFetch(proxied, init);
  if (!response.ok) return response;
  const bytes = new Uint8Array(await response.arrayBuffer());
  memory.set(proxied, bytes);
  return new Response(bytes.slice(0), { headers: response.headers });
};
const post = (message) => window.ReactNativeWebView.postMessage(JSON.stringify(message));
const controllers = new Map();
let engine = null;
let loading = null;
function loadEngine(id) {
  if (engine) return Promise.resolve(engine);
  if (!loading) {
    loading = (async () => {
      const module = await import("./phonon.js");
      return await module.Phonon.load({
        model: "phonon-31m-en",
        progress: (percent) => post({ type: "progress", id, percent }),
      });
    })()
      .then((value) => { engine = value; return value; })
      .catch((error) => { loading = null; throw error; });
  }
  return loading;
}
function writeAscii(view, offset, text) {
  for (let i = 0; i < text.length; i += 1) view.setUint8(offset + i, text.charCodeAt(i));
}
function wavBytes(samples, sampleRate) {
  const frames = samples.length;
  const buffer = new ArrayBuffer(44 + frames * 2);
  const view = new DataView(buffer);
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + frames * 2, true);
  writeAscii(view, 8, "WAVE");
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(view, 36, "data");
  view.setUint32(40, frames * 2, true);
  let at = 44;
  for (let i = 0; i < frames; i += 1) {
    const sample = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(at, sample < 0 ? sample * 32768 : sample * 32767, true);
    at += 2;
  }
  return new Uint8Array(buffer);
}
function toBase64(bytes) {
  let text = "";
  for (let i = 0; i < bytes.length; i += 0x2000) {
    text += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x2000));
  }
  return btoa(text);
}
async function speak(phonon, request, voice, controller) {
  return await phonon.speak(request.text, {
    voice,
    signal: controller.signal,
  });
}
async function synthesize(request) {
  const controller = new AbortController();
  controllers.set(request.id, controller);
  try {
    if (!engine) post({ type: "loading-model", id: request.id });
    const phonon = await loadEngine(request.id);
    if (controller.signal.aborted) {
      post({ type: "cancelled", id: request.id });
      return;
    }
    let speech;
    try {
      speech = await speak(phonon, request, request.voice, controller);
    } catch (error) {
      const message = (error && error.message) || "";
      if (!message.startsWith("No voice ") || !request.fallbackVoice || request.fallbackVoice === request.voice) throw error;
      speech = await speak(phonon, request, request.fallbackVoice, controller);
    }
    if (controller.signal.aborted) {
      post({ type: "cancelled", id: request.id });
      return;
    }
    const wav = wavBytes(speech.audio, speech.sampleRate || 24000);
    // One message per paragraph: every crossing costs RN JS-thread time, and a
    // paragraph is small enough to send whole.
    post({ type: "chunk", id: request.id, data: toBase64(wav) });
    post({ type: "done", id: request.id });
  } catch (error) {
    if (controller.signal.aborted) post({ type: "cancelled", id: request.id });
    else post({ type: "error", id: request.id, message: (error && error.message) || String(error) });
  } finally {
    controllers.delete(request.id);
  }
}
window.T3Phonon = {
  handle(raw) {
    const message = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (!message || typeof message !== "object") return;
    if (message.type === "cancel") {
      const controller = controllers.get(message.id);
      if (controller) controller.abort();
      return;
    }
    if (message.type === "synthesize") void synthesize(message);
  },
};
post({ type: "host-ready" });
</script></body></html>`;
