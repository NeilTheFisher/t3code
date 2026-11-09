/**
 * The browser speech engine's vocabulary: which model, where its files come
 * from, and how a stored voice name reaches both engines. Pure; the engine
 * itself lives in `phononSpeech`.
 */
import type { ModelId } from "phonon-webgpu";

export const PHONON_MODEL: ModelId = "phonon-31m-en";

/** Speaking speeds the model makes natively; past them the server synthesizes. */
export const PHONON_MIN_SPEED = 0.77;
export const PHONON_MAX_SPEED = 1.3;

/** The voice `speak` uses when the stored name is unknown to the model. */
export const PHONON_DEFAULT_VOICE = "Delia";

/**
 * The Kokoro voices this fork shipped before the browser engine, mapped to the
 * closest Phonon voice so an existing `tts.voice` keeps its character.
 */
const KOKORO_TO_PHONON: Readonly<Record<string, string>> = {
  af_heart: "Delia",
  af_bella: "Zoey",
  af_nicole: "Juniper",
  am_michael: "Easton",
  am_adam: "Trevor",
  bf_emma: "Maeve",
};

const PHONON_TO_KOKORO: Readonly<Record<string, string>> = Object.fromEntries(
  Object.entries(KOKORO_TO_PHONON).map(([kokoro, phonon]) => [phonon, kokoro]),
);

/** Voice name for the in-browser engine. */
export function phononVoiceFor(stored: string): string {
  const trimmed = stored.trim();
  if (trimmed.length === 0) return PHONON_DEFAULT_VOICE;
  return KOKORO_TO_PHONON[trimmed] ?? trimmed;
}

/** Voice name for the environment's Kokoro server, used above the engine's speeds. */
export function serverVoiceFor(stored: string): string {
  const trimmed = stored.trim();
  if (trimmed.length === 0) return "af_heart";
  return PHONON_TO_KOKORO[trimmed] ?? trimmed;
}

/** Whether this narration's speed is inside the model's native range. */
export function canSynthesizeLocally(speed: number): boolean {
  return Number.isFinite(speed) && speed >= PHONON_MIN_SPEED && speed <= PHONON_MAX_SPEED;
}

const MODEL_ASSET_PREFIX = "/v1/audio/model/";

/** Root the client fetches model files from: this environment's own proxy. */
export function modelAssetBase(serverUrl: string): string {
  return `${serverUrl.replace(/\/+$/, "")}${MODEL_ASSET_PREFIX}`;
}

/** The pinned voice catalog, shaped exactly like the upstream path it replaces. */
const VOICE_CATALOG_PATH =
  "gradium/phonon-voices/resolve/0ee17205f254b5abc43b266c8a0f215565c352f7/voices.jsonl";

export function voiceCatalogUrl(serverUrl: string): string {
  return `${modelAssetBase(serverUrl)}${VOICE_CATALOG_PATH}`;
}

/** Voice names the catalog reports for English, in catalog order. */
export function parseVoiceCatalog(text: string): string[] {
  const names: string[] = [];
  for (const line of text.split("\n")) {
    if (line.trim().length === 0) continue;
    try {
      const voice: unknown = JSON.parse(line);
      if (typeof voice !== "object" || voice === null) continue;
      const { name, language } = voice as { name?: unknown; language?: unknown };
      if (language !== "en" || typeof name !== "string" || name.length === 0) continue;
      if (!names.includes(name)) names.push(name);
    } catch {
      // A truncated line is the server's problem, not a reason to lose the list.
    }
  }
  return names;
}

const TRAILING_PAUSE = /\[pause:([\d.]+)s\]\s*$/;

/**
 * Split the player's silence directive off a unit. The server renders
 * `[pause:Ns]` itself; the browser engine has no such syntax, so the caller
 * appends the silence to the PCM instead.
 */
export function splitPauseDirective(text: string): { text: string; pauseSeconds: number } {
  const match = TRAILING_PAUSE.exec(text);
  if (match === null) return { text: text.trim(), pauseSeconds: 0 };
  const seconds = Number.parseFloat(match[1] ?? "");
  return {
    text: text.slice(0, match.index).trim(),
    pauseSeconds: Number.isFinite(seconds) && seconds > 0 ? seconds : 0,
  };
}

/** Origin the pinned model files live on, before the environment proxies them. */
const MODEL_UPSTREAM_ORIGIN = "https://huggingface.co/";

/**
 * The environment URL that serves a pinned Hub URL, or null when the URL is not
 * one of the model's files (so the caller leaves it alone).
 */
export function rewriteModelUrl(url: string, assetBase: string): string | null {
  if (!url.startsWith(MODEL_UPSTREAM_ORIGIN)) return null;
  return `${assetBase}${url.slice(MODEL_UPSTREAM_ORIGIN.length)}`;
}
