/**
 * The browser speech engine's vocabulary: which model it loads, how fast it
 * speaks, and how its text is shaped. Pure; the engine itself lives in
 * `phononSpeech`, and the pinned voice catalog is shared with mobile.
 */
import type { ModelId } from "phonon-webgpu";

export const PHONON_MODEL: ModelId = "phonon-31m-en";

/** Speaking speeds the model makes itself. Past them the PCM is resampled. */
const PHONON_MIN_SPEED = 0.77;
const PHONON_MAX_SPEED = 1.3;

/** Clamp a requested speed into what the model can synthesize itself. */
export function nativeSpeedFor(speed: number): number {
  if (!Number.isFinite(speed)) return 1;
  return Math.min(PHONON_MAX_SPEED, Math.max(PHONON_MIN_SPEED, speed));
}

/**
 * How far to resample the model's PCM to reach `speed`. 1 inside the model's
 * range; outside it the audio is shortened or lengthened, so pitch moves with
 * the rate.
 */
export function resampleFactorFor(speed: number): number {
  if (!Number.isFinite(speed) || speed <= 0) return 1;
  return speed / nativeSpeedFor(speed);
}

const TRAILING_PAUSE = /\[pause:([\d.]+)s\]\s*$/;

/**
 * Split the player's silence directive off a unit. The engine has no such
 * syntax, so the caller appends the silence to the PCM instead.
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
