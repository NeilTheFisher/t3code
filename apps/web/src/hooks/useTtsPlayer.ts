/**
 * Module-level singleton TTS player: one `<audio>` element + in-flight
 * AbortController shared app-wide, so audio survives row unmounts and thread
 * navigation, and a new play supersedes the current one. Status mirrors into
 * `useAudioPlayerStore`, which the global mini-player also renders from.
 */
import { useCallback } from "react";
import { type MessageId } from "@t3tools/contracts";
import { useClientSettings } from "./useSettings";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { markdownToSpokenText } from "~/lib/markdownToSpokenText";
import { synthesizeSpeech } from "~/lib/ttsClient";

const TITLE_MAX_CHARS = 80;

/** Display excerpt of the synthesized text, prepared once at play time. */
function excerptTitle(text: string): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  return trimmed.length > TITLE_MAX_CHARS ? `${trimmed.slice(0, TITLE_MAX_CHARS - 1)}…` : trimmed;
}

let audioElement: HTMLAudioElement | null = null;
let abortController: AbortController | null = null;
let currentBlobUrl: string | null = null;

function ensureAudioElement(): HTMLAudioElement {
  if (audioElement === null) {
    audioElement = new Audio();
    const store = () => useAudioPlayerStore.getState();
    audioElement.addEventListener("ended", () => {
      stopPlayback();
    });
    audioElement.addEventListener("error", () => {
      store().setError("Audio playback failed.", store().playingMessageId);
      teardown();
    });
    // Mirror position/duration into the store for the mini-player's scrub bar.
    audioElement.addEventListener("timeupdate", () => {
      const el = audioElement;
      if (el === null) return;
      store().setProgress(el.currentTime, Number.isFinite(el.duration) ? el.duration : 0);
    });
    audioElement.addEventListener("loadedmetadata", () => {
      const el = audioElement;
      if (el === null) return;
      store().setProgress(0, Number.isFinite(el.duration) ? el.duration : 0);
    });
    audioElement.addEventListener("pause", () => {
      const s = store();
      // `ended` already transitions to idle; only surface mid-playback pauses.
      if (s.status === "playing" && audioElement !== null && !audioElement.ended) {
        s.setPaused();
      }
    });
    audioElement.addEventListener("play", () => {
      const s = store();
      if (s.status === "paused" && s.playingMessageId !== null) {
        s.setPlaying(s.playingMessageId);
      }
    });
  }
  return audioElement;
}

function teardown(): void {
  if (abortController !== null) {
    abortController.abort();
    abortController = null;
  }
  if (audioElement !== null) {
    audioElement.pause();
    audioElement.removeAttribute("src");
    audioElement.load();
  }
  if (currentBlobUrl !== null) {
    URL.revokeObjectURL(currentBlobUrl);
    currentBlobUrl = null;
  }
}

export function stopPlayback(): void {
  teardown();
  useAudioPlayerStore.getState().setIdle();
}

/** Toggle pause/resume of the shared element; no-op when idle/loading. */
export function togglePausePlayback(): void {
  const el = audioElement;
  const s = useAudioPlayerStore.getState();
  if (el === null || (s.status !== "playing" && s.status !== "paused")) return;
  if (el.paused) {
    void el.play();
  } else {
    el.pause();
  }
}

/** Seek the shared element (seconds); no-op when nothing is loaded. */
export function seekPlayback(seconds: number): void {
  if (audioElement !== null && Number.isFinite(seconds)) {
    audioElement.currentTime = Math.max(0, seconds);
  }
}

/**
 * Perceptual volume curve: slider position -> amplitude. Position 0.5 sounds
 * "half as loud" at ~12% amplitude, matching how OS volume sliders behave.
 */
const VOLUME_EXP = 3;
export function sliderToVolume(position: number): number {
  const pos = Math.min(1, Math.max(0, position));
  return pos ** VOLUME_EXP;
}

export function setPlaybackVolume(position: number): void {
  const el = ensureAudioElement();
  el.volume = sliderToVolume(position);
  el.muted = el.volume === 0;
  useAudioPlayerStore.getState().setVolume(position);
}

export function setPlaybackRate(rate: number): void {
  const el = ensureAudioElement();
  el.playbackRate = rate;
  useAudioPlayerStore.getState().setRate(rate);
}

export interface PlayOptions {
  voice: string;
  serverUrl: string;
}

export async function startPlayback(
  id: MessageId,
  text: string,
  options: PlayOptions,
): Promise<void> {
  const store = useAudioPlayerStore.getState();
  if (store.playingMessageId === id && store.status !== "idle") {
    stopPlayback();
    return;
  }

  teardown();
  const controller = new AbortController();
  abortController = controller;
  const { volume, rate } = store;
  const spoken = markdownToSpokenText(text);
  if (spoken.length === 0) {
    // e.g. a message that was only a fenced code block.
    useAudioPlayerStore.getState().setError("Nothing to read aloud.", id);
    return;
  }
  store.setLoading(id, excerptTitle(spoken));

  let blob: Blob;
  try {
    blob = await synthesizeSpeech({
      text: spoken,
      voice: options.voice,
      serverUrl: options.serverUrl,
      signal: controller.signal,
      onWakingUp: () => {
        useAudioPlayerStore.getState().setWaking(id);
      },
    });
  } catch (error) {
    if (controller.signal.aborted) {
      // A subsequent play/stop already cleaned up; don't clobber its state.
      return;
    }
    abortController = null;
    const message = error instanceof Error ? error.message : "TTS request failed.";
    useAudioPlayerStore.getState().setError(message, id);
    throw error;
  }

  // If a newer call superseded us between fetch start and resolve, bail.
  if (abortController !== controller) {
    return;
  }
  abortController = null;

  const blobUrl = URL.createObjectURL(blob);
  currentBlobUrl = blobUrl;
  const audio = ensureAudioElement();
  audio.src = blobUrl;
  const amplitude = sliderToVolume(volume);
  audio.volume = amplitude;
  audio.muted = amplitude === 0;
  audio.playbackRate = rate;

  try {
    await audio.play();
    useAudioPlayerStore.getState().setPlaying(id);
  } catch (error) {
    // A newer play superseding us also rejects this play() (via pause() in its
    // teardown); only clean up and surface an error if we are still current.
    if (currentBlobUrl === blobUrl) {
      teardown();
      const message = error instanceof Error ? error.message : "Audio playback failed.";
      useAudioPlayerStore.getState().setError(message, id);
      throw error;
    }
  }
}

export function useTtsPlayer() {
  const tts = useClientSettings((s) => s.tts);

  const play = useCallback(
    (id: MessageId, text: string) =>
      startPlayback(id, text, { voice: tts.voice, serverUrl: tts.serverUrl }),
    [tts.voice, tts.serverUrl],
  );

  return {
    play,
    stop: stopPlayback,
  };
}

/** Test helper — resets the singleton between Vitest runs. */
export function __resetTtsPlayerForTests(): void {
  teardown();
  audioElement = null;
}
