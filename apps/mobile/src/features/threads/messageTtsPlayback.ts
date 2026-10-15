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

import { markdownToSpokenText, splitSpokenUnits } from "../../lib/spokenText";
import { appAtomRegistry } from "../../state/atom-registry";
import { requestTtsSpeech } from "../../state/tts";

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

// Segment playback. The endpoint returns a whole request's audio at once, so
// the message is split into sentence-sized units that are fetched in order and
// appended to one playlist: the first unit starts playing while later ones are
// still being synthesized. Each unit remembers its markdown block, so the block
// under the playback head can be highlighted and tapped to seek.
let playlist: AudioPlaylist | null = null;
let units: SpokenUnit[] = [];
/** First unit index for each markdown block, or undefined when it has no speech. */
let blockStarts: number[] = [];
/** How many units have been fetched and added to the playlist, in order. */
let fetchedCount = 0;
let observedDurations: number[] = [];
/** Bumped on every stop/play so in-flight fetches are discarded. */
let generation = 0;
/** Generation of the fetch loop currently running, or -1 when none is. */
let activeFetchGeneration = -1;
/** The playlist ran out of queued tracks while more are still being fetched. */
let awaitingResume = false;
/** A seek to a unit not yet fetched, applied once its audio arrives. */
let pendingSeekUnit: number | null = null;
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

  const index = status.currentIndex ?? 0;
  if (Number.isFinite(status.duration) && status.duration > 0) {
    observedDurations[index] = status.duration;
  }
  setActiveBlockFor(index);
  updateProgress(index, status.currentTime ?? 0);

  if (status.didJustFinish) {
    // A skip emits a finish for the track being left; ignore it so seeking back
    // to an earlier paragraph doesn't end the narration.
    if (Date.now() >= ignoreFinishUntil) {
      // ExoPlayer reaches "ended" both at the true end and when it catches up to
      // the fetch head; only the former means the message is done.
      if (nextFetchIndex() >= units.length) stopMessageTts();
      else awaitingResume = true;
    }
  }
}

function nextFetchIndex(): number {
  return fetchedCount;
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
  awaitingResume = false;
  pendingSeekUnit = null;
  if (playlist !== null) {
    playlist.pause();
    playlist.clear();
  }
  units = [];
  blockStarts = [];
  fetchedCount = 0;
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

/** Move the playback head to unit `index`, or arm it if its audio is unfetched. */
function seekToUnit(index: number) {
  if (state.messageId === null || units.length === 0) return;
  const target = Math.max(0, Math.min(index, units.length - 1));
  if (target >= fetchedCount) {
    // Not fetched yet: arm the seek and reflect it immediately, so the bar and
    // highlight jump now and playback follows as the audio arrives.
    pendingSeekUnit = target;
    setActiveBlockFor(target);
    setProgress(elapsedBefore(target), totalDuration());
    return;
  }
  pendingSeekUnit = null;
  const audio = getPlaylist();
  ignoreFinishUntil = Date.now() + 600;
  audio.skipTo(target);
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

/** Stable short hash of a unit's text, so edited messages don't reuse stale audio. */
function hashText(text: string): string {
  let hash = 5381;
  for (let i = 0; i < text.length; i += 1) hash = ((hash << 5) + hash + text.charCodeAt(i)) | 0;
  return (hash >>> 0).toString(36);
}

async function fetchSegment(
  text: string,
  messageId: string,
  index: number,
  environmentId: EnvironmentId,
  forGeneration: number,
): Promise<string | null> {
  const file = new File(
    Paths.cache,
    `t3-tts-${messageId.replace(/[^a-zA-Z0-9._-]/g, "_")}-${index}-${hashText(text)}.ogg`,
  );
  // Reuse audio already synthesized for this unit (an earlier narration, or a
  // seek back and forth), so repeated seeking is instant.
  if (file.exists) return file.uri;

  const result = await runAtomCommand(
    appAtomRegistry,
    requestTtsSpeech,
    { environmentId, input: { text } },
    { reportFailure: false, reportDefect: false },
  );
  // A stop or a new message while this request was in flight wins.
  if (forGeneration !== generation) return null;
  if (result._tag === "Failure") throw squashAtomCommandFailure(result);

  if (file.exists) file.delete();
  file.create({ overwrite: true });
  await file.write(result.value);
  return file.uri;
}

/** Fetch and queue the remaining segments while the playlist plays. */
/** How many segments are synthesized concurrently, so the whole message becomes
    seekable quickly instead of one sentence at a time. */
const FETCH_WINDOW = 3;

type FetchedSegment =
  | { readonly ok: true; readonly uri: string | null }
  | { readonly ok: false; readonly error: unknown };

async function fetchRemaining(
  environmentId: EnvironmentId,
  messageId: string,
  forGeneration: number,
) {
  if (activeFetchGeneration === forGeneration) return;
  activeFetchGeneration = forGeneration;
  const inFlight = new Map<number, Promise<FetchedSegment>>();
  const start = (index: number) => {
    if (index >= units.length || inFlight.has(index)) return;
    inFlight.set(
      index,
      fetchSegment(units[index]!.text, messageId, index, environmentId, forGeneration).then(
        (uri): FetchedSegment => ({ ok: true, uri }),
        (error): FetchedSegment => ({ ok: false, error }),
      ),
    );
  };
  try {
    while (forGeneration === generation && fetchedCount < units.length) {
      for (let i = fetchedCount; i < fetchedCount + FETCH_WINDOW; i += 1) start(i);
      const index = fetchedCount;
      const settled = await inFlight.get(index)!;
      inFlight.delete(index);
      if (forGeneration !== generation) return;
      if (!settled.ok) throw settled.error;
      const uri = settled.uri;
      if (uri === null) return;

      const audio = getPlaylist();
      audio.add({ uri });
      fetchedCount = index + 1;

      // A seek that landed past the fetch head takes priority over resuming.
      if (pendingSeekUnit !== null && pendingSeekUnit < fetchedCount) {
        const target = pendingSeekUnit;
        pendingSeekUnit = null;
        ignoreFinishUntil = Date.now() + 600;
        audio.skipTo(target);
        setActiveBlockFor(target);
        setProgress(elapsedBefore(target), totalDuration());
        if (state.status === "playing") audio.play();
        else if (state.status === "paused") {
          audio.play();
          setState({ ...state, status: "playing" });
        }
        continue;
      }

      if (awaitingResume) {
        awaitingResume = false;
        if (state.status === "playing") {
          audio.skipTo(index);
          audio.play();
          setActiveBlockFor(index);
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
  blocks: readonly string[],
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

    // One retry: the first request after a reconnect can stall and time out, and
    // one retry makes that invisible rather than an apparent hang.
    let firstUri: string | null = null;
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        firstUri = await fetchSegment(units[0]!.text, messageId, 0, environmentId, forGeneration);
        break;
      } catch (error) {
        if (attempt === 1 || forGeneration !== generation) throw error;
      }
    }
    if (firstUri === null) return;

    const audio = getPlaylist();
    audio.playbackRate = currentRate;
    audio.add({ uri: firstUri });
    fetchedCount = 1;
    audio.play();
    setState({ ...state, status: "playing", activeBlock: units[0]!.block });
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
