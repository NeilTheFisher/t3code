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
import { Alert, AppState } from "react-native";

import { markdownToSpokenText, splitSpokenUnits } from "../../lib/spokenText";
import { synthesizePhononWav } from "./phononEngine";

export type MessageTtsStatus = "idle" | "loading" | "playing" | "paused";

/** Display excerpt of the synthesized text, prepared once at play time. */
const TITLE_MAX_CHARS = 80;
/** Kokoro's rough speaking rate, used only to estimate durations up front. */
const ESTIMATED_CHARS_PER_SECOND = 15;
/** Selectable narration speeds; 1x is the default. */
export const NARRATION_RATES = [1, 1.25, 1.5, 2] as const;
/**
 * Paragraphs synthesized ahead of the playback head. Each one costs a WAV and
 * a bridge message, so a small window keeps memory and RN-thread work bounded
 * while still hiding synthesis latency behind playback.
 */
const LOOKAHEAD_UNITS = 2;
/** Shown while a cold engine downloads its model; never passed to synthesis. */
const MODEL_LOADING_DETAIL = "Downloading the voice model…";

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
  /** Transient engine status (model download); display only. */
  readonly detail: string | null;
}

const IDLE: MessageTtsState = {
  messageId: null,
  threadId: null,
  title: null,
  status: "idle",
  error: null,
  activeBlock: null,
  rate: 1,
  detail: null,
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

let playlist: AudioPlaylist | null = null;
let units: SpokenUnit[] = [];
/** First unit index for each markdown block, or undefined when it has no speech. */
let blockStarts: number[] = [];
let observedDurations: number[] = [];
/** WAV uri per unit, once synthesized. Kept across seeks so disk cache is reused. */
let files: (string | null)[] = [];
/** Unit index of the first track in the native playlist. */
let playlistStartUnit = 0;
/** Unit indices in the playlist, in track order. */
let playlistUnits: number[] = [];
/** Next unit the sequential synthesizer will request. */
let synthCursor = 0;
/** Unit under the playback head, for the look-ahead window. */
let headUnit = 0;
/** In-flight synthesis count; the engine itself runs one at a time. */
let synthBusy = 0;
/** Bumped on every stop, play, or restart so in-flight synthesis is discarded. */
let generation = 0;
let synthesisController: AbortController | null = null;
/** True while the app is backgrounded: queued audio plays, synthesis pauses. */
let synthesisSuspended = false;
let modelLoading = false;
/** Whether the first track has started playing. */
let started = false;
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
    next.rate === state.rate &&
    next.detail === state.detail
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

function failPlayback(error: unknown) {
  const message = error instanceof Error ? error.message : "Playback failed.";
  stopMessageTts();
  setState({ ...IDLE, rate: currentRate, error: message });
  Alert.alert("Playback failed", message);
}

function onPlaylistStatus(status: PlaylistStatusEvent) {
  if (state.messageId === null) return;
  const errorMessage = readPlaybackError(status.error);
  if (errorMessage !== null) {
    failPlayback(errorMessage);
    return;
  }

  const track = status.currentIndex ?? 0;
  const unit = playlistUnits[track];
  if (unit === undefined) return;
  headUnit = unit;
  if (Number.isFinite(status.duration) && status.duration > 0) {
    observedDurations[unit] = status.duration;
  }
  setActiveBlockFor(unit);
  updateProgress(unit, status.currentTime ?? 0);

  if (status.didJustFinish && Date.now() >= ignoreFinishUntil) {
    const appendedThrough = playlistStartUnit + playlistUnits.length;
    // Each track reports its own finish. Only the last track of a fully
    // synthesized narration ends it; otherwise the player waits for the next
    // paragraph (a backgrounded WebView can leave it waiting).
    if (appendedThrough >= units.length && synthBusy === 0) stopMessageTts();
  }
  // A newly allowed paragraph may start synthesizing as the head advances.
  pumpSynthesis();
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
  synthBusy = 0;
  if (playlist !== null) {
    playlist.pause();
    playlist.clear();
  }
  units = [];
  blockStarts = [];
  observedDurations = [];
  files = [];
  playlistStartUnit = 0;
  playlistUnits = [];
  synthCursor = 0;
  headUnit = 0;
  started = false;
  modelLoading = false;
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
  pumpSynthesis();
}

/** Change the narration speed. Applies to the current and later segments. */
export function setNarrationRate(rate: number) {
  currentRate = rate;
  if (playlist !== null) playlist.playbackRate = rate;
  if (state.messageId !== null) setState({ ...state, rate });
}

function ensureSynthesisController(): AbortController | null {
  if (state.messageId === null) return null;
  if (synthesisController === null || synthesisController.signal.aborted) {
    synthesisController = new AbortController();
  }
  return synthesisController;
}

/** File for one unit's WAV; the name carries the text hash so edits never reuse audio. */
function segmentFile(messageId: string, index: number, text: string, voice: string): File {
  return new File(
    Paths.cache,
    `t3-tts-${messageId.replace(/[^a-zA-Z0-9._-]/g, "_")}-${index}-${hashSpeech(text, voice)}.wav`,
  );
}

async function writeSegment(
  base64: string,
  file: File,
  forGeneration: number,
): Promise<string | null> {
  if (file.exists) return file.uri;
  file.create({ overwrite: true });
  await file.write(base64, { encoding: "base64" });
  // A stop, seek, or new message while the write was in flight wins.
  return forGeneration === generation ? file.uri : null;
}

/**
 * Synthesize one unit. The engine serializes model work; the WAV write runs
 * natively and overlaps the next unit's synthesis.
 */
async function synthesizeUnit(
  messageId: string,
  index: number,
  environmentId: EnvironmentId,
  voice: string,
  forGeneration: number,
  signal: AbortSignal,
) {
  synthBusy += 1;
  try {
    const unit = units[index];
    if (unit === undefined) return;
    const file = segmentFile(messageId, index, unit.text, voice);
    let uri: string | null = file.exists ? file.uri : null;
    if (uri === null) {
      const base64 = await synthesizePhononWav({
        environmentId,
        text: unit.text,
        voice,
        fallbackVoice: PHONON_DEFAULT_VOICE,
        signal,
        onLoadingModel: () => {
          if (forGeneration !== generation || modelLoading) return;
          modelLoading = true;
          setState({ ...state, detail: MODEL_LOADING_DETAIL });
        },
      });
      if (forGeneration !== generation) return;
      uri = await writeSegment(base64, file, forGeneration);
    }
    if (uri === null || forGeneration !== generation) return;
    files[index] = uri;
    modelLoading = false;
    if (state.detail === MODEL_LOADING_DETAIL) setState({ ...state, detail: null });
    flushAppendable();
  } catch (error) {
    if (
      forGeneration !== generation ||
      (error instanceof Error && error.name === "AbortError") ||
      signal.aborted
    ) {
      return;
    }
    failPlayback(error);
  } finally {
    if (forGeneration === generation) synthBusy = Math.max(0, synthBusy - 1);
  }
}

/**
 * Ask for paragraphs up to `LOOKAHEAD_UNITS` past the head. The engine queues
 * them one at a time, so the cap bounds memory and bridge traffic rather than
 * model parallelism (the model shares one KV cache).
 */
function pumpSynthesis() {
  if (synthesisSuspended || state.messageId === null || activeEnvironment === null) return;
  const controller = ensureSynthesisController();
  if (controller === null) return;
  const messageId = state.messageId;
  const environmentId = activeEnvironment;
  const voice = activeVoice;
  while (synthCursor < units.length && synthCursor - headUnit <= LOOKAHEAD_UNITS) {
    const index = synthCursor;
    synthCursor += 1;
    if (files[index] !== null) continue;
    void synthesizeUnit(messageId, index, environmentId, voice, generation, controller.signal);
  }
  flushAppendable();
}

/** Environment and voice of the active narration. */
let activeEnvironment: EnvironmentId | null = null;
let activeVoice = PHONON_DEFAULT_VOICE;

/** Add every synthesized unit that is contiguous with the playlist, in order. */
function flushAppendable() {
  for (;;) {
    const index = playlistStartUnit + playlistUnits.length;
    if (index >= units.length) return;
    const uri = files[index];
    if (uri === null || uri === undefined) return;
    appendTrack(index, uri);
  }
}

function appendTrack(index: number, uri: string) {
  if (index !== playlistStartUnit + playlistUnits.length) return;
  const audio = getPlaylist();
  playlistUnits.push(index);
  audio.add({ uri });
  if (!started) {
    started = true;
    audio.playbackRate = currentRate;
    audio.play();
    setState({ ...state, status: "playing", activeBlock: units[index]?.block ?? null });
    return;
  }
  // The playlist ran dry while this paragraph was being synthesized (slow
  // engine, or a suspended WebView). Continue at the new track.
  if (state.status === "playing" && !audio.playing) {
    audio.skipTo(playlistUnits.length - 1);
    audio.play();
  }
}

/** Re-request from the first unit that has no audio, after a suspension. */
function resetCursorToFirstMissing() {
  let index = playlistStartUnit;
  while (index < units.length && files[index] !== null) index += 1;
  synthCursor = index;
}

/** Seek to unit `index` when it is already in the playlist. */
function seekWithinPlaylist(track: number, unit: number) {
  const audio = getPlaylist();
  ignoreFinishUntil = Date.now() + 600;
  if (audio.currentIndex === track) {
    // Already on this track, so skipTo would no-op; rewind it to restart. This
    // is what makes tapping the paragraph you started on seek back to its start.
    void audio.seekTo(0).catch(() => undefined);
  } else {
    audio.skipTo(track);
  }
  headUnit = unit;
  setActiveBlockFor(unit);
  setProgress(elapsedBefore(unit), totalDuration());
  // Seeking while paused resumes, so a tap always plays.
  if (state.status === "playing") audio.play();
  else if (state.status === "paused") {
    audio.play();
    setState({ ...state, status: "playing" });
  }
  pumpSynthesis();
}

/**
 * Seek to a paragraph with no audio in the playlist yet: cancel in-flight
 * synthesis, drop queued-but-unplayed tracks, and restart the stream there.
 * Files already on disk are reused, so a repeated seek is instant.
 */
function restartFromUnit(target: number) {
  generation += 1;
  synthesisController?.abort();
  synthesisController = new AbortController();
  synthBusy = 0;
  const audio = getPlaylist();
  ignoreFinishUntil = Date.now() + 600;
  audio.pause();
  audio.clear();
  playlistStartUnit = target;
  playlistUnits = [];
  headUnit = target;
  synthCursor = target;
  started = false;
  setState({ ...state, status: "loading", activeBlock: units[target]?.block ?? null });
  setProgress(elapsedBefore(target), totalDuration());
  flushAppendable();
  pumpSynthesis();
}

/** Move the playback head to unit `index`. */
function seekToUnit(index: number) {
  if (state.messageId === null || units.length === 0) return;
  const target = Math.max(0, Math.min(index, units.length - 1));
  if (!started) {
    restartFromUnit(target);
    return;
  }
  const track = target - playlistStartUnit;
  if (track >= 0 && track < playlistUnits.length) {
    seekWithinPlaylist(track, target);
    return;
  }
  restartFromUnit(target);
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
  units = built.units;
  blockStarts = built.blockStarts;
  files = new Array(units.length).fill(null);
  observedDurations = new Array(units.length).fill(undefined);
  playlistStartUnit = 0;
  playlistUnits = [];
  synthCursor = 0;
  headUnit = 0;
  started = false;
  activeEnvironment = environmentId;
  activeVoice = voice;
  synthesisController = new AbortController();
  setState({
    messageId,
    threadId,
    title: excerptTitle(built.spoken),
    status: "loading",
    error: null,
    activeBlock: null,
    rate: currentRate,
    detail: null,
  });
  setProgress(0, totalDuration());

  if (!audioModeConfigured) {
    audioModeConfigured = true;
    await setAudioModeAsync({ playsInSilentMode: true, interruptionMode: "mixWithOthers" }).catch(
      () => undefined,
    );
  }
  // Playback starts as soon as the first paragraph is on disk; later paragraphs
  // are synthesized ahead of the head while audio plays.
  pumpSynthesis();
}

// A backgrounded WebView is suspended by iOS/Android. Stop asking it for audio
// and let the tracks already on disk keep playing; resume where synthesis left
// off when the app returns.
AppState.addEventListener("change", (next) => {
  if (next === "active") {
    if (!synthesisSuspended) return;
    synthesisSuspended = false;
    if (state.messageId === null) return;
    resetCursorToFirstMissing();
    pumpSynthesis();
    return;
  }
  if (next !== "background" && next !== "inactive") return;
  synthesisSuspended = true;
  synthesisController?.abort();
  synthesisController = null;
});

export function useMessageTtsStatus(messageId: string) {
  const snapshot = useSyncExternalStore(subscribe, getState, getState);
  const isThis = snapshot.messageId === messageId;
  return {
    isLoading: isThis && snapshot.status === "loading",
    isPlaying: isThis && snapshot.status === "playing",
    isPaused: isThis && snapshot.status === "paused",
    detail: isThis ? snapshot.detail : null,
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
  readonly detail: string | null;
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
    detail: snapshot.detail,
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
