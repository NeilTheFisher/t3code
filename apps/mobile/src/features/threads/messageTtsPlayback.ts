import { type EnvironmentId } from "@t3tools/contracts";
import { runAtomCommand, squashAtomCommandFailure } from "@t3tools/client-runtime/state/runtime";
import {
  createAudioPlaylist,
  setAudioModeAsync,
  type AudioPlaylist,
  type AudioPlaylistStatus,
} from "expo-audio";
import { File, Paths } from "expo-file-system";
import { useSyncExternalStore } from "react";
import { Alert } from "react-native";

import { splitSpokenUnits } from "../../lib/spokenText";
import { appAtomRegistry } from "../../state/atom-registry";
import { requestTtsSpeech } from "../../state/tts";

export type MessageTtsStatus = "idle" | "loading" | "playing" | "paused";

/** Display excerpt of the synthesized text, prepared once at play time. */
const TITLE_MAX_CHARS = 80;
/** Kokoro's rough speaking rate, used only until real segment durations arrive. */
const ESTIMATED_CHARS_PER_SECOND = 15;

interface MessageTtsState {
  readonly messageId: string | null;
  /** Thread the active narration belongs to, so only its mini-player shows. */
  readonly threadId: string | null;
  readonly title: string | null;
  readonly status: MessageTtsStatus;
  readonly error: string | null;
}

const IDLE: MessageTtsState = {
  messageId: null,
  threadId: null,
  title: null,
  status: "idle",
  error: null,
};

let state: MessageTtsState = IDLE;
const listeners = new Set<() => void>();
let audioModeConfigured = false;

/**
 * Playback position is kept out of `state` so the 250ms status ticks do not
 * re-render every play button; only the mini-player subscribes to it.
 */
export interface MessageTtsProgress {
  readonly currentTime: number;
  readonly duration: number;
}

let progress: MessageTtsProgress = { currentTime: 0, duration: 0 };
const progressListeners = new Set<() => void>();

// Segment playback. The endpoint returns a whole request's audio at once, so
// the message is split into sentence-sized segments that are fetched in order
// and appended to one playlist: the first segment starts playing while later
// ones are still being synthesized, instead of waiting for the whole message.
let playlist: AudioPlaylist | null = null;
let segments: string[] = [];
let nextFetchIndex = 0;
let observedDurations: number[] = [];
/** Bumped on every stop/play so in-flight fetches are discarded. */
let generation = 0;
/** Generation of the fetch loop currently running, or -1 when none is. */
let activeFetchGeneration = -1;
/** The playlist ran out of queued tracks while more are still being fetched. */
let awaitingResume = false;

function setState(next: MessageTtsState) {
  if (next === state) return;
  state = next;
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getState() {
  return state;
}

function setProgress(currentTime: number, duration: number) {
  if (currentTime === progress.currentTime && duration === progress.duration) return;
  progress = { currentTime, duration };
  for (const listener of progressListeners) listener();
}

function subscribeProgress(listener: () => void) {
  progressListeners.add(listener);
  return () => {
    progressListeners.delete(listener);
  };
}

function getProgress() {
  return progress;
}

function excerptTitle(text: string): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  return trimmed.length > TITLE_MAX_CHARS ? `${trimmed.slice(0, TITLE_MAX_CHARS - 1)}…` : trimmed;
}

function estimateSeconds(chars: number): number {
  return chars / ESTIMATED_CHARS_PER_SECOND;
}

function sum(values: readonly number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

function readPlaybackError(error: unknown): string | null {
  if (error === null || error === undefined) return null;
  if (typeof error === "string") return error;
  if (typeof error === "object" && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string") return message;
  }
  return "Playback failed.";
}

type PlaylistStatusEvent = AudioPlaylistStatus & { readonly error?: unknown };

function onPlaylistStatus(status: PlaylistStatusEvent) {
  if (state.messageId === null) return;
  const errorMessage = readPlaybackError(status.error);
  if (errorMessage !== null) {
    stopMessageTts();
    setState({ ...IDLE, error: errorMessage });
    Alert.alert("Playback failed", errorMessage);
    return;
  }

  const index = status.currentIndex ?? 0;
  if (Number.isFinite(status.duration) && status.duration > 0) {
    observedDurations[index] = status.duration;
  }
  updateProgress(index, status.currentTime ?? 0, status.duration ?? 0);

  if (status.didJustFinish) {
    // ExoPlayer reaches "ended" both at the true end and when it catches up to
    // the fetch head; only the former means the message is done.
    if (nextFetchIndex >= segments.length) stopMessageTts();
    else awaitingResume = true;
  }
}

function updateProgress(index: number, currentTime: number, currentDuration: number) {
  const completedDuration = sum(observedDurations.slice(0, index));
  const completedChars = segments.slice(0, index).reduce((total, s) => total + s.length, 0);
  // Calibrate the remaining estimate from the segments already played, so the
  // bar converges on the real length instead of trusting the fallback rate.
  const observedCharsPerSecond = completedDuration > 0 ? completedChars / completedDuration : 0;
  const charsPerSecond =
    observedCharsPerSecond > 0 ? observedCharsPerSecond : ESTIMATED_CHARS_PER_SECOND;
  const remainingChars = segments.slice(index + 1).reduce((total, s) => total + s.length, 0);
  const currentExtent =
    currentDuration > 0 ? currentDuration : (segments[index]?.length ?? 0) / charsPerSecond;
  setProgress(
    completedDuration + currentTime,
    completedDuration + currentExtent + remainingChars / charsPerSecond,
  );
}

function getPlaylist(): AudioPlaylist {
  if (playlist === null) {
    playlist = createAudioPlaylist({ updateInterval: 250 });
    playlist.addListener("playlistStatusUpdate", onPlaylistStatus);
  }
  return playlist;
}

export function stopMessageTts() {
  generation += 1;
  awaitingResume = false;
  if (playlist !== null) {
    playlist.pause();
    playlist.clear();
  }
  segments = [];
  nextFetchIndex = 0;
  observedDurations = [];
  setProgress(0, 0);
  setState(IDLE);
}

export function pauseMessageTts() {
  if (playlist === null || state.status !== "playing") return;
  playlist.pause();
  setState({ ...state, status: "paused" });
}

export function resumeMessageTts() {
  if (playlist === null || state.status !== "paused") return;
  playlist.play();
  setState({ ...state, status: "playing" });
}

async function fetchSegment(
  text: string,
  messageId: string,
  index: number,
  environmentId: EnvironmentId,
  forGeneration: number,
): Promise<string | null> {
  const result = await runAtomCommand(
    appAtomRegistry,
    requestTtsSpeech,
    { environmentId, input: { text } },
    { reportFailure: false, reportDefect: false },
  );
  // A stop or a new message while this request was in flight wins.
  if (forGeneration !== generation) return null;
  if (result._tag === "Failure") throw squashAtomCommandFailure(result);

  const file = new File(
    Paths.cache,
    `t3-tts-${messageId.replace(/[^a-zA-Z0-9._-]/g, "_")}-${index}.ogg`,
  );
  if (file.exists) file.delete();
  file.create({ overwrite: true });
  await file.write(result.value);
  return file.uri;
}

/** Fetch and queue the remaining segments while the playlist plays. */
async function fetchRemaining(
  environmentId: EnvironmentId,
  messageId: string,
  forGeneration: number,
) {
  if (activeFetchGeneration === forGeneration) return;
  activeFetchGeneration = forGeneration;
  try {
    while (forGeneration === generation && nextFetchIndex < segments.length) {
      const index = nextFetchIndex;
      const uri = await fetchSegment(
        segments[index]!,
        messageId,
        index,
        environmentId,
        forGeneration,
      );
      if (forGeneration !== generation || uri === null) return;

      const audio = getPlaylist();
      audio.add({ uri });
      nextFetchIndex = index + 1;

      // If playback had already drained the queue, resume at the new track.
      if (awaitingResume) {
        awaitingResume = false;
        if (state.status === "playing") {
          audio.skipTo(index);
          audio.play();
        }
      }
    }
  } catch (cause) {
    if (forGeneration === generation) {
      const message = cause instanceof Error ? cause.message : "Could not play this message.";
      stopMessageTts();
      Alert.alert("Playback failed", message);
    }
  } finally {
    if (activeFetchGeneration === forGeneration) activeFetchGeneration = -1;
  }
}

export async function playMessageTts(
  messageId: string,
  threadId: string,
  environmentId: EnvironmentId,
  text: string,
): Promise<void> {
  if (state.messageId === messageId) {
    if (state.status === "paused") {
      resumeMessageTts();
      return;
    }
    if (state.status !== "idle") {
      stopMessageTts();
      return;
    }
  }

  const nextSegments = splitSpokenUnits(text);
  if (nextSegments.length === 0) return;

  stopMessageTts();
  const forGeneration = generation;
  segments = nextSegments;
  setState({
    messageId,
    threadId,
    title: excerptTitle(text),
    status: "loading",
    error: null,
  });
  setProgress(0, estimateSeconds(text.length));

  try {
    if (!audioModeConfigured) {
      audioModeConfigured = true;
      await setAudioModeAsync({ playsInSilentMode: true, interruptionMode: "mixWithOthers" }).catch(
        () => undefined,
      );
    }

    const firstUri = await fetchSegment(
      nextSegments[0]!,
      messageId,
      0,
      environmentId,
      forGeneration,
    );
    if (firstUri === null) return;

    const audio = getPlaylist();
    audio.add({ uri: firstUri });
    nextFetchIndex = 1;
    audio.play();
    setState({
      messageId,
      threadId,
      title: excerptTitle(text),
      status: "playing",
      error: null,
    });
    void fetchRemaining(environmentId, messageId, forGeneration);
  } catch (cause) {
    if (forGeneration !== generation) return;
    const message = cause instanceof Error ? cause.message : "Could not play this message.";
    stopMessageTts();
    Alert.alert("Playback failed", message);
  }
}

export function useMessageTtsStatus(messageId: string) {
  const snapshot = useSyncExternalStore(subscribe, getState, getState);
  const isThis = snapshot.messageId === messageId;
  return {
    isLoading: isThis && snapshot.status === "loading",
    isPlaying: isThis && snapshot.status === "playing",
    isPaused: isThis && snapshot.status === "paused",
  };
}

export interface ThreadTtsPlayback {
  readonly messageId: string | null;
  readonly title: string | null;
  readonly status: MessageTtsStatus;
  readonly isLoading: boolean;
  readonly isPlaying: boolean;
  readonly isPaused: boolean;
  readonly currentTime: number;
  readonly duration: number;
}

/** The playback state for `threadId`, or null when this thread is not narrating. */
export function useThreadTtsPlayback(threadId: string): ThreadTtsPlayback | null {
  const snapshot = useSyncExternalStore(subscribe, getState, getState);
  const progressSnapshot = useSyncExternalStore(subscribeProgress, getProgress, getProgress);
  if (snapshot.threadId !== threadId || snapshot.status === "idle") return null;
  return {
    messageId: snapshot.messageId,
    title: snapshot.title,
    status: snapshot.status,
    isLoading: snapshot.status === "loading",
    isPlaying: snapshot.status === "playing",
    isPaused: snapshot.status === "paused",
    currentTime: progressSnapshot.currentTime,
    duration: progressSnapshot.duration,
  };
}
