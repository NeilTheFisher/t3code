/**
 * Module-level singleton TTS player: one `<audio>` element + in-flight
 * AbortController shared app-wide, so audio survives row unmounts and a new
 * play supersedes the current one. Status mirrors into `useAudioPlayerStore`.
 */
import { useCallback } from "react";
import { type MessageId } from "@t3tools/contracts";
import { useClientSettings } from "./useSettings";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { synthesizeSpeech } from "~/lib/ttsClient";

let audioElement: HTMLAudioElement | null = null;
let abortController: AbortController | null = null;
let currentBlobUrl: string | null = null;

function ensureAudioElement(): HTMLAudioElement {
  if (audioElement === null) {
    audioElement = new Audio();
    audioElement.addEventListener("ended", () => {
      stopPlayback();
    });
    audioElement.addEventListener("error", () => {
      const store = useAudioPlayerStore.getState();
      store.setError("Audio playback failed.", store.playingMessageId);
      teardown();
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
  store.setLoading(id);

  let blob: Blob;
  try {
    blob = await synthesizeSpeech({
      text,
      voice: options.voice,
      serverUrl: options.serverUrl,
      signal: controller.signal,
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
