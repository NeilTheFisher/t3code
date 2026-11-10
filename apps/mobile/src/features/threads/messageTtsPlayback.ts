import { type EnvironmentId } from "@t3tools/contracts";
import { PHONON_DEFAULT_VOICE } from "@t3tools/client-runtime/phonon-voices";
import {
  createAudioPlaylist,
  setAudioModeAsync,
  type AudioPlaylist,
  type AudioPlaylistStatus,
} from "expo-audio";
import { File, Paths } from "expo-file-system";
import { useSyncExternalStore } from "react";
import { Alert } from "react-native";

import { markdownToSpokenText, splitSpokenUnits } from "../../lib/spokenText";
import { synthesizePhononWav } from "./phononEngine";

export type MessageTtsStatus = "idle" | "loading" | "playing" | "paused";

/** Display excerpt of the synthesized text, prepared once at play time. */
const TITLE_MAX_CHARS = 80;
/** Kokoro's rough speaking rate, used only to estimate durations up front. */
const ESTIMATED_CHARS_PER_SECOND = 15;
/** Selectable narration speeds; 1x is the default. */
export const NARRATION_RATES = [1, 1.25, 1.5, 2] as const;

/** One synthesized sentence, tagged with the markdown block it was read from. */
interface SpokenUnit {
  readonly text: string;
  readonly block: number;
}

interface MessageTtsState {
  readonly messageId: string | null;
  /** Thread the active narration belongs to, so only its mini-player shows. */
  readonly threadId: string | null;
  readonly title: string | null;
  readonly status: MessageTtsStatus;
  readonly error: string | null;
  /** Markdown block currently being read, for the in-thread highlight. */
  readonly activeBlock: number | null;
  readonly rate: number;
}

const IDLE: MessageTtsState = {
  messageId: null,
  threadId: null,
  title: null,
  status: "idle",
  error: null,
  activeBlock: null,
  rate: 1,
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

// Every spoken unit is synthesized to a WAV file before the playlist starts, so
// a backgrounded or suspended WebView can never stall playback or seeking.
let playlist: AudioPlaylist | null = null;
let units: SpokenUnit[] = [];
/** First unit index for each markdown block, or undefined when it has no speech. */
let blockStarts: number[] = [];
let observedDurations: number[] = [];
/** Bumped on every stop/play so in-flight synthesis is discarded. */
let generation = 0;
/** Aborts the paragraph loop when the narration is stopped or replaced. */
let synthesisController: AbortController | null = null;
/** Ignore a `didJustFinish` until this time; a seek emits one for the old track. */
let ignoreFinishUntil = 0;
/** Chosen speed, kept across narrations. */
let currentRate = 1;

function setState(next: MessageTtsState) {
  if (
    next.messageId === state.messageId &&
    next.threadId === state.threadId &&
    next.title === state.title &&
    next.status === state.status &&
    next.error === state.error &&
    next.activeBlock === state.activeBlock &&
    next.rate === state.rate
  ) {
    return;
  }
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

/** Unit duration: the real one once seen, otherwise a length estimate. */
function unitDuration(index: number): number {
  const observed = observedDurations[index];
  if (observed !== undefined && Number.isFinite(observed) && observed > 0) return observed;
  return estimateSeconds(units[index]?.text.length ?? 0);
}

/** Playback time elapsed before unit `index` (observed durations + estimates). */
function elapsedBefore(index: number): number {
  let total = 0;
  for (let i = 0; i < index; i += 1) total += unitDuration(i);
  return total;
}

function totalDuration(): number {
  let total = 0;
  for (let index = 0; index < units.length; index += 1) total += unitDuration(index);
  return total;
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

function setActiveBlockFor(index: number) {
  const block = units[index]?.block ?? null;
  if (block !== state.activeBlock) setState({ ...state, activeBlock: block });
}

function updateProgress(index: number, currentTime: number) {
  setProgress(elapsedBefore(index) + currentTime, totalDuration());
}

function onPlaylistStatus(status: PlaylistStatusEvent) {
  if (state.messageId === null) return;
  const errorMessage = readPlaybackError(status.error);
  if (errorMessage !== null) {
    stopMessageTts();
    setState({ ...IDLE, rate: currentRate, error: errorMessage });
    Alert.alert("Playback failed", errorMessage);
    return;
  }

  const unit = status.currentIndex ?? 0;
  if (Number.isFinite(status.duration) && status.duration > 0) {
    observedDurations[unit] = status.duration;
  }
  setActiveBlockFor(unit);
  updateProgress(unit, status.currentTime ?? 0);

  if (status.didJustFinish && Date.now() >= ignoreFinishUntil) {
    // Each track reports its own finish; only the last one ends the narration.
    if (unit >= units.length - 1) stopMessageTts();
  }
}

function getPlaylist(): AudioPlaylist {
  if (playlist === null) {
    playlist = createAudioPlaylist({ updateInterval: 250 });
    playlist.addListener("playlistStatusUpdate", onPlaylistStatus);
  }
  return playlist;
}

/**
 * Build the spoken units for a message's markdown blocks. Returns an empty unit
 * list when nothing in the message would be spoken (for example, only code).
 */
function buildUnits(blocks: readonly string[]): {
  units: SpokenUnit[];
  blockStarts: number[];
  spoken: string;
} {
  const nextUnits: SpokenUnit[] = [];
  const nextBlockStarts: number[] = [];
  const spokenParts: string[] = [];
  blocks.forEach((block, blockIndex) => {
    const spoken = markdownToSpokenText(block).trim();
    if (spoken.length === 0) return;
    const parts = splitSpokenUnits(spoken);
    if (parts.length === 0) return;
    nextBlockStarts[blockIndex] = nextUnits.length;
    for (const part of parts) nextUnits.push({ text: part, block: blockIndex });
    spokenParts.push(spoken);
  });
  return { units: nextUnits, blockStarts: nextBlockStarts, spoken: spokenParts.join(" ") };
}

/** Whether a message's blocks contain anything that can be read aloud. */
export function blocksHaveSpeech(blocks: readonly string[]): boolean {
  return blocks.some((block) => markdownToSpokenText(block).trim().length > 0);
}

export function stopMessageTts() {
  generation += 1;
  synthesisController?.abort();
  synthesisController = null;
  if (playlist !== null) {
    playlist.pause();
    playlist.clear();
  }
  units = [];
  blockStarts = [];
  observedDurations = [];
  setProgress(0, 0);
  setState({ ...IDLE, rate: currentRate });
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

/** Change the narration speed. Applies to the current and later segments. */
export function setNarrationRate(rate: number) {
  currentRate = rate;
  if (playlist !== null) playlist.playbackRate = rate;
  if (state.messageId !== null) setState({ ...state, rate });
}

/** Move the playback head to unit `index`. Every unit has audio by now. */
function seekToUnit(index: number) {
  if (state.messageId === null || units.length === 0) return;
  const target = Math.max(0, Math.min(index, units.length - 1));
  const audio = getPlaylist();
  ignoreFinishUntil = Date.now() + 600;
  if (audio.currentIndex === target) {
    // Already on this track, so skipTo would no-op; rewind it to restart. This
    // is what makes tapping the paragraph you started on seek back to its start.
    void audio.seekTo(0).catch(() => undefined);
  } else {
    audio.skipTo(target);
  }
  setActiveBlockFor(target);
  setProgress(elapsedBefore(target), totalDuration());
  // Seeking while paused resumes, so a tap always plays.
  if (state.status === "playing") audio.play();
  else if (state.status === "paused") {
    audio.play();
    setState({ ...state, status: "playing" });
  }
}

/** Seek to a fraction of the whole narration, used by the mini-player scrub bar. */
export function seekToRatio(ratio: number) {
  if (units.length === 0 || !Number.isFinite(ratio)) return;
  const target = Math.max(0, Math.min(1, ratio)) * totalDuration();
  let accumulated = 0;
  for (let index = 0; index < units.length; index += 1) {
    accumulated += unitDuration(index);
    if (accumulated >= target) {
      seekToUnit(index);
      return;
    }
  }
  seekToUnit(units.length - 1);
}

/** Seek to the first spoken unit of a message block (tap-to-seek in the thread). */
export function seekToBlock(blockIndex: number) {
  let start = blockStarts[blockIndex];
  if (start === undefined) {
    // A block with no speech of its own (a code fence, an image) still seeks:
    // fall back to the nearest block that does.
    for (let offset = 1; offset < blockStarts.length; offset += 1) {
      const after = blockStarts[blockIndex + offset];
      if (after !== undefined) {
        start = after;
        break;
      }
      const before = blockStarts[blockIndex - offset];
      if (before !== undefined) {
        start = before;
        break;
      }
    }
  }
  if (start === undefined) return;
  seekToUnit(start);
}

/** Skip the playback head forward or back by `deltaSeconds`. */
export function skipNarration(deltaSeconds: number) {
  const total = totalDuration();
  if (units.length === 0 || total <= 0) return;
  seekToRatio((progress.currentTime + deltaSeconds) / total);
}

/** Stable short hash of a unit's text and voice, so edited messages don't reuse stale audio. */
function hashSpeech(text: string, voice: string): string {
  const value = `${voice}\u0000${text}`;
  let hash = 5381;
  for (let i = 0; i < value.length; i += 1) hash = ((hash << 5) + hash + value.charCodeAt(i)) | 0;
  return (hash >>> 0).toString(36);
}

/**
 * One unit's WAV, synthesized on this device and cached on disk. Repeating a
 * narration or seeking back and forth reuses the file instead of re-synthesizing.
 */
async function synthesizeSegment(
  text: string,
  messageId: string,
  index: number,
  environmentId: EnvironmentId,
  voice: string,
  forGeneration: number,
  signal: AbortSignal,
): Promise<string | null> {
  const file = new File(
    Paths.cache,
    `t3-tts-${messageId.replace(/[^a-zA-Z0-9._-]/g, "_")}-${index}-${hashSpeech(text, voice)}.wav`,
  );
  if (file.exists) return file.uri;

  const base64 = await synthesizePhononWav({
    environmentId,
    text,
    voice,
    signal,
  });
  // A stop or a new message while this synthesis was in flight wins.
  if (forGeneration !== generation) return null;

  if (file.exists) file.delete();
  file.create({ overwrite: true });
  await file.write(base64, { encoding: "base64" });
  return file.uri;
}

export async function playMessageTts(
  messageId: string,
  threadId: string,
  environmentId: EnvironmentId,
  blocks: readonly string[],
  voice: string = PHONON_DEFAULT_VOICE,
): Promise<void> {
  const built = buildUnits(blocks);
  if (built.units.length === 0) return;

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

  stopMessageTts();
  const forGeneration = generation;
  units = built.units;
  blockStarts = built.blockStarts;
  const controller = new AbortController();
  synthesisController = controller;
  setState({
    messageId,
    threadId,
    title: excerptTitle(built.spoken),
    status: "loading",
    error: null,
    activeBlock: null,
    rate: currentRate,
  });
  setProgress(0, totalDuration());

  try {
    if (!audioModeConfigured) {
      audioModeConfigured = true;
      await setAudioModeAsync({ playsInSilentMode: true, interruptionMode: "mixWithOthers" }).catch(
        () => undefined,
      );
    }

    // Synthesize the whole message before playback: the WebView is not needed
    // once this returns, so backgrounding or suspending it cannot stall audio,
    // and every paragraph has a file to seek to.
    const uris: string[] = [];
    for (let index = 0; index < units.length; index += 1) {
      if (forGeneration !== generation) return;
      const uri = await synthesizeSegment(
        units[index]!.text,
        messageId,
        index,
        environmentId,
        voice,
        forGeneration,
        controller.signal,
      );
      if (uri === null || forGeneration !== generation) return;
      uris.push(uri);
    }

    const audio = getPlaylist();
    audio.playbackRate = currentRate;
    for (const uri of uris) audio.add({ uri });
    audio.play();
    setState({ ...state, status: "playing", activeBlock: units[0]!.block });
  } catch (cause) {
    // A stop, a replaced message, or the screen closing owns the state already.
    if (forGeneration !== generation || (cause instanceof Error && cause.name === "AbortError")) {
      stopMessageTts();
      return;
    }
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

/**
 * The playback state for `threadId`, or null when this thread is not narrating.
 * Subscribes to progress too, so the mini-player scrub bar follows the head.
 */
export interface ThreadTtsPlayback {
  readonly messageId: string;
  readonly title: string | null;
  readonly status: MessageTtsStatus;
  readonly isLoading: boolean;
  readonly isPlaying: boolean;
  readonly isPaused: boolean;
  readonly rate: number;
  readonly currentTime: number;
  readonly duration: number;
}

export function useThreadTtsPlayback(threadId: string): ThreadTtsPlayback | null {
  const snapshot = useSyncExternalStore(subscribe, getState, getState);
  const progressSnapshot = useSyncExternalStore(subscribeProgress, getProgress, getProgress);
  if (snapshot.threadId !== threadId || snapshot.status === "idle" || snapshot.messageId === null) {
    return null;
  }
  return {
    messageId: snapshot.messageId,
    title: snapshot.title,
    status: snapshot.status,
    isLoading: snapshot.status === "loading",
    isPlaying: snapshot.status === "playing",
    isPaused: snapshot.status === "paused",
    rate: snapshot.rate,
    currentTime: progressSnapshot.currentTime,
    duration: progressSnapshot.duration,
  };
}

/**
 * State-only narration view for the feed: which message is narrating and which
 * block is under the playback head. Excludes progress so the feed does not
 * re-render on every 250ms tick — only when the head crosses into a new block.
 */
export interface ThreadTtsNarration {
  readonly messageId: string;
  readonly activeBlock: number | null;
}

export function useThreadTtsNarration(threadId: string): ThreadTtsNarration | null {
  const snapshot = useSyncExternalStore(subscribe, getState, getState);
  if (snapshot.threadId !== threadId || snapshot.status === "idle" || snapshot.messageId === null) {
    return null;
  }
  return { messageId: snapshot.messageId, activeBlock: snapshot.activeBlock };
}
