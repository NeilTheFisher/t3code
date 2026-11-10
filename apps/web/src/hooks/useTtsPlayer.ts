/**
 * Module-level TTS player on WebAudio: streaming PCM chunks are scheduled
 * back-to-back so playback starts before synthesis finishes. One AudioContext
 * survives unmounts and navigation; status mirrors into `useAudioPlayerStore`.
 */

import { type MessageId, type ScopedThreadRef } from "@t3tools/contracts";
import { useClientSettings } from "./useSettings";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { markdownToSpokenText, toSpokenUnits, type SpokenUnit } from "~/lib/markdownToSpokenText";
import {
  convergeEstimatedDuration,
  estimateSpokenDuration,
  playbackPosition,
  seekSchedule,
  TTS_CHARS_PER_SECOND,
  type ChunkSpan,
  type PlaybackPosition,
  type ScheduledChunk,
} from "~/lib/ttsPlaybackMath";
import { resolveTtsEnvironmentBase } from "~/lib/ttsEnvironmentBase";
import { localSpeechAvailable, streamPhononChunks, TTS_PCM_SAMPLE_RATE } from "~/lib/phononSpeech";

const TITLE_MAX_CHARS = 80;

/**
 * A live narration out of text waits this long, in audio-clock seconds, before
 * it settles. Covers a message that stopped streaming while its row was
 * unmounted, so the player cannot sit "playing" over silence forever.
 */
const LIVE_WAIT_LIMIT_SECONDS = 15;

/** A sentence that ends here is finished; a live narration may speak it. */
const SETTLED_UNIT_TEXT = /[.!?…]["'”’)\]]*(?:\s*\[pause:[\d.]+s\])?$/;

/** Display excerpt of the synthesized text, prepared once at play time. */
function excerptTitle(text: string): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  return trimmed.length > TITLE_MAX_CHARS ? `${trimmed.slice(0, TITLE_MAX_CHARS - 1)}…` : trimmed;
}

/**
 * Global-player title: the playing thread's title, or the spoken excerpt when
 * there is no thread (agent speech, the voice preview).
 */
function playerTitle(threadTitle: string | undefined, spoken: string): string {
  const trimmed = threadTitle?.trim();
  return trimmed === undefined || trimmed.length === 0 ? excerptTitle(spoken) : trimmed;
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

interface ScheduledSource extends ScheduledChunk {
  source: AudioBufferSourceNode;
}

interface PlayChunk {
  buffer: AudioBuffer;
  /** Message-time offset (seconds) where this chunk plays. */
  at: number;
  /** Index of the spoken paragraph this chunk belongs to. */
  paragraph: number;
}

interface EngineState {
  playingMessageId: MessageId;
  /** Decoded chunks in arrival order, with their message-time offsets. */
  chunks: PlayChunk[];
  /** Exact message-time extent of scheduled audio so far. */
  scheduledDuration: number;
  /**
   * Display duration: the text-length estimate until the stream completes,
   * then the exact scheduled extent. Stops the scrub bar growing chunk by
   * chunk during streaming.
   */
  duration: number;
  /** Whether the synthesis stream has finished. */
  streamDone: boolean;
  /** Ctx time mapped to message-time 0. */
  baseTime: number;
  /**
   * Ctx time the next arriving chunk should play at. Chunks from a server that
   * buffers a whole request arrive as a burst; without this they would all
   * clamp to "now" and overlap. Kept in sync with `baseTime`.
   */
  nextStartTime: number;
  paused: boolean;
  rate: number;
  /** Spoken-unit time spans [start, end) in message-time, by index. */
  paragraphSpans: Array<{ start: number; end: number }>;
  /** Character count of each spoken unit, for duration convergence. */
  spokenCharCounts: number[];
  /** Characters whose synthesis has completed (unit granularity). */
  synthesizedChars: number;
  /** First spoken-unit index not yet fully synthesized. */
  nextParagraphIndex: number;
  /**
   * A seek past the synthesized extent, applied once synthesis reaches it, so
   * "seek anywhere" works while synthesis catches up instead of clamping to the
   * live edge.
   */
  pendingSeekTime: number | null;
  /** A seek to a paragraph with no audio yet, applied when its audio arrives. */
  pendingSeekParagraph: number | null;
  /** The source text can keep growing (a message that is still streaming). */
  live: boolean;
  /** Live, and every settled paragraph is synthesized: waiting for more text. */
  awaitingText: boolean;
  /** Audio-clock time the session started waiting for text. */
  waitingSince: number | null;
  /** A unit to synthesize even though it is the tail still being written. */
  forceTailIndex: number | null;
  /** Unit to resume synthesis at after an out-of-order seek. */
  resumeIndex: number | null;
}

let audioContext: AudioContext | null = null;
let gainNode: GainNode | null = null;
let abortController: AbortController | null = null;
let scheduledSources: ScheduledSource[] = [];
let engine: EngineState | null = null;
let progressHandle: number | null = null;
/** Opening words of each spoken paragraph, for DOM highlight matching. */
let paragraphCues: string[] = [];
/**
 * Set by `startPlayback` while a narration is active: applies a speed change by
 * dropping the unplayed tail and re-synthesizing it at the new rate. Cleared on
 * teardown, so it is null whenever the engine is idle.
 */
let applyRateChange: ((rate: number) => void) | null = null;
/**
 * Set by `startPlayback` while a narration is active: seeks to a paragraph whose
 * audio doesn't exist yet by synthesizing it immediately (out of order) instead
 * of waiting for the sequential stream to reach it.
 */
let restartFromParagraph: ((index: number) => void) | null = null;
/** Set by `startPlayback` while a live narration can grow: appends new paragraphs. */
let appendNarrationText: ((text: string) => void) | null = null;
/** Set by `startPlayback` while a live narration waits: the text is now final. */
let finishNarrationText: (() => void) | null = null;
/** Normalized text for cue matching: lowercase, whitespace collapsed. */
function cueOf(paragraph: string): string {
  return paragraph
    .replace(/\[pause:[\d.]+s\]/g, " ")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .slice(0, 8)
    .join(" ");
}

function ensureAudioGraph(): { ctx: AudioContext; gain: GainNode } {
  if (audioContext === null) {
    audioContext = new AudioContext({ sampleRate: TTS_PCM_SAMPLE_RATE });
    gainNode = audioContext.createGain();
    gainNode.connect(audioContext.destination);
  }
  return { ctx: audioContext, gain: gainNode! };
}

/** Decode one s16le PCM chunk into an AudioBuffer. */
function pcmToAudioBuffer(ctx: AudioContext, chunk: ArrayBuffer): AudioBuffer {
  const view = new DataView(chunk);
  const samples = Math.floor(chunk.byteLength / 2);
  const buffer = ctx.createBuffer(1, samples, TTS_PCM_SAMPLE_RATE);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < samples; i++) {
    data[i] = view.getInt16(i * 2, true) / 32_768;
  }
  return buffer;
}

/** Message-time of the playback head: where in [0, duration) we are. */
function currentPosition(): PlaybackPosition {
  if (engine === null || audioContext === null) return { head: 0, paragraph: null };
  return playbackPosition(scheduledSources, audioContext.currentTime);
}

function currentHead(): number {
  return currentPosition().head;
}

function stopSources(): void {
  for (const { source } of scheduledSources) {
    try {
      source.stop();
    } catch {
      // Already stopped.
    }
  }
  scheduledSources = [];
}

function teardown(): void {
  if (abortController !== null) {
    abortController.abort();
    abortController = null;
  }
  if (progressHandle !== null) {
    cancelAnimationFrame(progressHandle);
    progressHandle = null;
  }
  stopSources();
  engine = null;
  paragraphCues = [];
  applyRateChange = null;
  restartFromParagraph = null;
  appendNarrationText = null;
  finishNarrationText = null;
  useAudioPlayerStore.getState().setActiveParagraph(null);
}

function finishPlayback(): void {
  teardown();
  useAudioPlayerStore.getState().setIdle();
}

/**
 * Highlight the paragraph being heard. A pending seek owns the highlight until
 * its audio arrives (see `seekToParagraph`), and a null paragraph holds the
 * previous one rather than blinking off between chunks.
 */
function syncActiveParagraph(paragraph: number | null): void {
  const e = engine;
  if (e === null || paragraph === null) return;
  if (e.pendingSeekParagraph !== null || e.pendingSeekTime !== null) return;
  const store = useAudioPlayerStore.getState();
  if (store.activeParagraph === paragraph) return;
  store.setActiveParagraph(paragraph);
}

function startProgressLoop(): void {
  const tick = () => {
    progressHandle = null;
    const e = engine;
    if (e === null || e.paused || audioContext === null) return;
    const position = currentPosition();
    useAudioPlayerStore.getState().setProgress(position.head, e.duration);
    syncActiveParagraph(position.paragraph);

    // Only settle when the stream is fully scheduled AND every source has
    // finished. During streaming, more sources may still arrive.
    const ctxNow = audioContext.currentTime;
    const allFinished = scheduledSources.every(
      ({ startedAt, duration }) => ctxNow >= startedAt + duration,
    );
    const allDone = e.streamDone && scheduledSources.length > 0 && allFinished;
    if (allDone) {
      finishPlayback();
      return;
    }
    // A live narration holds the player open for the rest of a streaming
    // message; settle when that text stops arriving instead of spinning.
    if (e.awaitingText && allFinished) {
      e.waitingSince ??= ctxNow;
      if (ctxNow - e.waitingSince > LIVE_WAIT_LIMIT_SECONDS) finishNarrationText?.();
    } else {
      e.waitingSince = null;
    }
    progressHandle = requestAnimationFrame(tick);
  };
  progressHandle = requestAnimationFrame(tick);
}

export function stopPlayback(): void {
  teardown();
  useAudioPlayerStore.getState().setIdle();
}

/** Toggle pause/resume; no-op when idle/loading. */
export function togglePausePlayback(): void {
  const e = engine;
  const s = useAudioPlayerStore.getState();
  if (e === null || (s.status !== "playing" && s.status !== "paused")) return;
  const { ctx } = ensureAudioGraph();

  if (!e.paused) {
    e.paused = true;
    if (progressHandle !== null) {
      cancelAnimationFrame(progressHandle);
      progressHandle = null;
    }
    void ctx.suspend();
    s.setPaused();
  } else {
    e.paused = false;
    void ctx.resume();
    s.setPlaying(e.playingMessageId);
    startProgressLoop();
  }
}

/**
 * Rebuild the schedule anchored so message-time `head` is "now". Shared by seek
 * and skip. Rate is synthesis-side, so buffers play at 1x and message-time
 * equals context-time.
 */
function rescheduleAt(head: number): number {
  const e = engine;
  const { ctx, gain } = ensureAudioGraph();
  if (e === null) return 0;
  const target = Math.min(Math.max(0, head), e.scheduledDuration);

  stopSources();
  e.baseTime = ctx.currentTime - target;

  const spans: ChunkSpan[] = e.chunks.map((chunk) => ({
    at: chunk.at,
    duration: chunk.buffer.duration,
  }));
  for (const { index, offset } of seekSchedule(spans, target)) {
    const chunk = e.chunks[index]!;
    const source = ctx.createBufferSource();
    source.buffer = chunk.buffer;
    source.connect(gain);
    const when = Math.max(0, e.baseTime + chunk.at);
    if (!Number.isFinite(when) || !Number.isFinite(offset)) continue;
    source.start(when, offset);
    scheduledSources.push({
      source,
      // A start time in the past (the chunk containing the seek target) begins
      // immediately at its offset, so the audible clock starts now, not then.
      startedAt: Math.max(when, ctx.currentTime),
      duration: chunk.buffer.duration - offset,
      at: chunk.at + offset,
      paragraph: chunk.paragraph,
    });
  }

  // The next streamed chunk must land after everything already scheduled here.
  e.nextStartTime = e.baseTime + e.scheduledDuration;

  useAudioPlayerStore.getState().setProgress(target, e.duration);
  syncActiveParagraph(currentPosition().paragraph);
  if (!e.paused && progressHandle === null) {
    startProgressLoop();
  }
  return target;
}

/**
 * Seek to a message-time position (seconds). The chunk timeline is immutable;
 * only the schedule is rebuilt: the clock is re-anchored so message-time
 * `target` is "now", the chunk containing the target resumes mid-buffer, and
 * later chunks play whole at their original offsets.
 */
export function seekPlayback(seconds: number): void {
  const e = engine;
  if (e === null || !Number.isFinite(seconds)) return;
  // Seeking while paused resumes playback, so a click always plays.
  if (useAudioPlayerStore.getState().status === "paused") togglePausePlayback();
  // Seeking past the synthesized extent can't schedule yet: remember the target
  // and jump to it once synthesis reaches it (rescheduleAt clamps to the live
  // edge for now). This is what makes "seek anywhere" work while it fills in.
  if (seconds > e.scheduledDuration) {
    e.pendingSeekTime = seconds;
    e.pendingSeekParagraph = null;
    rescheduleAt(e.scheduledDuration);
    return;
  }
  e.pendingSeekTime = null;
  rescheduleAt(seconds);
}

/** Skip forward/backward by a relative message-time delta (seconds). */
export function skipPlayback(delta: number): void {
  const e = engine;
  if (e === null) return;
  rescheduleAt(currentHead() + delta);
}

export function setPlaybackVolume(position: number): void {
  const { gain } = ensureAudioGraph();
  gain.gain.value = sliderToVolume(position);
  useAudioPlayerStore.getState().setVolume(position);
}

/**
 * Change synthesis speed. Speed is synthesis-side, so during playback the
 * current unit and unplayed tail are re-synthesized at the new rate.
 */
export function setPlaybackRate(rate: number): void {
  if (applyRateChange !== null) {
    applyRateChange(rate);
  } else if (engine !== null) {
    // Nothing is playing: remember the rate for the next narration.
    engine.rate = rate;
  }
  useAudioPlayerStore.getState().setRate(rate);
}

/** Normalized opening words of each spoken unit of the active narration. */
export function getActiveParagraphCues(): readonly string[] {
  return paragraphCues;
}

/** Whether spoken unit `index` of the active narration has seekable audio yet. */
export function canSeekToParagraph(index: number): boolean {
  // A paragraph being synthesized on demand counts as seekable right away, so
  // its cursor appears the moment it is clicked.
  return engine?.paragraphSpans[index] !== undefined || engine?.pendingSeekParagraph === index;
}

/**
 * Seek to the start of spoken unit `index` of the active narration. A unit with
 * no audio yet is remembered and jumped to when its audio arrives.
 */
export function seekToParagraph(index: number): void {
  const e = engine;
  if (e === null) return;
  if (useAudioPlayerStore.getState().status === "paused") togglePausePlayback();
  // Reflect the seek immediately: highlight the clicked paragraph now, before
  // its audio (and the progress loop) catches up.
  useAudioPlayerStore.getState().setActiveParagraph(index);
  const span = e.paragraphSpans[index];
  if (span !== undefined) {
    seekPlayback(span.start);
    return;
  }
  // No audio for this paragraph yet: synthesize it now (out of order) rather
  // than waiting for the sequential stream to reach it.
  if (restartFromParagraph !== null) {
    restartFromParagraph(index);
  } else {
    e.pendingSeekParagraph = index;
    e.pendingSeekTime = null;
  }
}

export interface PlayOptions {
  voice: string;
  /** Synthesis speed for this narration, overriding the shared slider. */
  speed?: number | undefined;
  /** Playing thread's title for the global player; the excerpt stands in when absent. */
  title?: string | undefined;
  /** Spoken-unit index to begin at, for narration started from a paragraph. */
  startParagraph?: number | undefined;
  /** The message is still streaming: keep the session open as paragraphs arrive. */
  live?: boolean | undefined;
}

/** Opening words of every spoken paragraph of `text`, for DOM cue matching. */
export function paragraphCuesFor(text: string): string[] {
  return toSpokenUnits(text).map((unit) => cueOf(unit.text));
}

/**
 * Grow a live narration with a message's latest text, so paragraphs that
 * arrived while it played join the same session.
 */
export function syncPlaybackText(id: MessageId, text: string): void {
  if (engine === null || engine.playingMessageId !== id || !engine.live) return;
  appendNarrationText?.(text);
}

/** The message stopped streaming: speak what is left and let the session end. */
export function completePlaybackText(id: MessageId): void {
  if (engine === null || engine.playingMessageId !== id || !engine.live) return;
  finishNarrationText?.();
}

export async function startPlayback(
  id: MessageId,
  text: string,
  threadRef: ScopedThreadRef | null,
  options: PlayOptions,
): Promise<void> {
  const store = useAudioPlayerStore.getState();
  if (store.playingMessageId === id && store.status !== "idle") {
    stopPlayback();
    return;
  }

  const units: SpokenUnit[] = toSpokenUnits(text);
  const spoken = markdownToSpokenText(text);
  // Playback is driven by `units`, so a message that flattens to a non-empty
  // string of nothing but pauses (a lone code block or rule) still has no unit
  // to synthesize. Guard on `units` or the player would spin on "loading"
  // forever with no chunk ever scheduled.
  if (units.length === 0) {
    useAudioPlayerStore.getState().setError("Nothing to read aloud.", id);
    return;
  }
  const startIndex = Math.min(Math.max(0, options.startParagraph ?? 0), units.length - 1);
  const speechServerUrl = resolveTtsEnvironmentBase(threadRef?.environmentId ?? null);
  // teardown() clears `paragraphCues`, so the new cues must be assigned after
  // it — assigning first left every cue null and suppressed all highlighting.
  teardown();
  paragraphCues = units.map((unit) => cueOf(unit.text));
  const controller = new AbortController();
  abortController = controller;
  const { volume } = store;
  // An agent utterance can carry its own speed; otherwise use the slider.
  const rate = options.speed ?? store.rate;
  store.setLoading(id, playerTitle(options.title, spoken), threadRef);
  setPlaybackVolume(volume);

  const { ctx, gain } = ensureAudioGraph();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }
  // Estimated up front from text length so the scrub bar is stable while
  // streaming; converges on the exact extent as units synthesize.
  const spokenCharCounts = units.map((unit) => unit.text.length);
  engine = {
    playingMessageId: id,
    chunks: [],
    scheduledDuration: 0,
    duration: estimateSpokenDuration(
      startIndex === 0
        ? spoken
        : units
            .slice(startIndex)
            .map((unit) => unit.text)
            .join(" "),
      rate,
    ),
    streamDone: false,
    baseTime: ctx.currentTime + 0.05,
    nextStartTime: ctx.currentTime + 0.05,
    paused: false,
    rate,
    paragraphSpans: [],
    spokenCharCounts,
    synthesizedChars: 0,
    nextParagraphIndex: startIndex,
    pendingSeekTime: null,
    pendingSeekParagraph: null,
    live: options.live === true,
    awaitingText: false,
    waitingSince: null,
    forceTailIndex: options.live === true && startIndex === units.length - 1 ? startIndex : null,
    resumeIndex: null,
  };
  const e = engine;
  // Reflect a start at a later paragraph straight away, before its audio lands.
  if (startIndex > 0) useAudioPlayerStore.getState().setActiveParagraph(startIndex);

  /** Recompute the display duration estimate from synthesized evidence. */
  const refreshEstimate = () => {
    // Let the highlight mark newly synthesized paragraphs clickable.
    useAudioPlayerStore.getState().setSynthesizedParagraphs(e.nextParagraphIndex);
    if (e.streamDone) return;
    const remaining = spokenCharCounts.slice(e.nextParagraphIndex).reduce((a, b) => a + b, 0);
    e.duration = convergeEstimatedDuration({
      scheduled: e.scheduledDuration,
      spokenCharsSynthesized: e.synthesizedChars,
      remainingChars: remaining,
      fallbackCharsPerSecond: TTS_CHARS_PER_SECOND,
      speed: e.rate,
    });
    useAudioPlayerStore.getState().setProgress(currentHead(), e.duration);
  };

  /** Schedule one PCM chunk for spoken unit `unit` for worker `owner`. */
  const scheduleArriving = (chunkPcm: ArrayBuffer, unit: number, owner: AbortController) => {
    // A restarted worker can still deliver one last chunk after its abort;
    // drop it so it cannot append old-speed audio behind the new timeline.
    if (engine !== e || owner.signal.aborted) return;
    const buffer = pcmToAudioBuffer(ctx, chunkPcm);
    const at = e.scheduledDuration;
    e.chunks.push({ buffer, at, paragraph: unit });

    const span = e.paragraphSpans[unit];
    if (span === undefined) {
      e.paragraphSpans[unit] = { start: at, end: at };
    }
    e.scheduledDuration += buffer.duration;
    const cur = e.paragraphSpans[unit]!;
    cur.end = e.scheduledDuration;

    // Chunks can arrive faster than they play (synthesis runs well ahead of
    // realtime), so schedule each at its real-time slot but never before "now"
    // or the previous chunk, then re-anchor the clock so later chunks keep that
    // spacing instead of piling up at the same instant.
    const when = e.baseTime + at;
    const now = ctx.currentTime;
    let start = Number.isFinite(when) ? Math.max(when, now) : now;
    if (start < e.nextStartTime) start = e.nextStartTime;
    if (!Number.isFinite(start)) start = now;
    if (start !== when && Number.isFinite(when)) e.baseTime = start - at;
    e.nextStartTime = start + buffer.duration;

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(gain);
    source.start(start);
    scheduledSources.push({
      source,
      startedAt: start,
      duration: buffer.duration,
      at,
      paragraph: unit,
    });

    // A seek that was waiting for its audio to exist: jump now that it does.
    if (e.pendingSeekParagraph !== null && unit >= e.pendingSeekParagraph) {
      const target = e.pendingSeekParagraph;
      e.pendingSeekParagraph = null;
      const targetSpan = e.paragraphSpans[target];
      if (targetSpan !== undefined) rescheduleAt(targetSpan.start);
    } else if (e.pendingSeekTime !== null && e.scheduledDuration >= e.pendingSeekTime) {
      const target = e.pendingSeekTime;
      e.pendingSeekTime = null;
      rescheduleAt(target);
    }

    const s = useAudioPlayerStore.getState();
    if (s.status === "loading" || s.status === "waking") {
      s.setPlaying(id);
      startProgressLoop();
    }
  };

  /**
   * One spoken unit's audio, always from this device. Anything the engine
   * cannot do (a plain-http page, a missing WebAssembly feature, a lost GPU)
   * fails the narration with a visible message rather than moving synthesis to
   * another machine.
   */
  const synthesizeUnit = async (
    unitText: string,
    index: number,
    owner: AbortController,
  ): Promise<void> => {
    if (!localSpeechAvailable()) {
      throw new Error(
        "Reading aloud needs a secure (https) page so the speech model can be cached on this device.",
      );
    }
    await streamPhononChunks({
      text: unitText,
      voice: options.voice,
      speed: e.rate,
      serverUrl: speechServerUrl,
      signal: owner.signal,
      onChunk: (chunkPcm) => scheduleArriving(chunkPcm, index, owner),
      onLoadingModel: () => useAudioPlayerStore.getState().setWaking(id),
    });
  };

  /** Whether a spoken unit ends a sentence, so a live narration may speak it. */
  const isSettledUnit = (unit: SpokenUnit): boolean => SETTLED_UNIT_TEXT.test(unit.text.trimEnd());

  /**
   * How far synthesis may run. While a message streams, its last sentence is
   * still being written, so it waits until it settles — or until the reader
   * started/seeks straight at it — instead of speaking a fragment twice.
   */
  const synthesisEnd = (): number => {
    if (!e.live) return units.length;
    const last = units.length - 1;
    if (last < 0) return 0;
    if (e.forceTailIndex === last || isSettledUnit(units[last]!)) return units.length;
    return last;
  };

  /** Snap the display duration to the exact extent and let the loop settle idle. */
  const settleStream = (): void => {
    abortController = null;
    e.streamDone = true;
    e.awaitingText = false;
    e.waitingSince = null;
    e.duration = e.scheduledDuration;
    useAudioPlayerStore.getState().setSynthesizedParagraphs(e.nextParagraphIndex);
    useAudioPlayerStore.getState().setProgress(currentHead(), e.duration);
  };

  let worker: AbortController | null = null;

  /**
   * Synthesize every settled unit, one request at a time. Each run owns its
   * AbortController, so a speed change or an out-of-order seek can replace it
   * without stale chunks. A live run stops when it catches up with the text and
   * waits for the next paragraph instead of ending the stream.
   */
  const pump = async (initial?: AbortController): Promise<void> => {
    if (worker !== null) return;
    const owner = initial ?? new AbortController();
    worker = owner;
    abortController = owner;
    try {
      e.awaitingText = false;
      e.waitingSince = null;
      let index = e.resumeIndex ?? e.nextParagraphIndex;
      e.resumeIndex = null;
      while (index < synthesisEnd()) {
        const unit = units[index]!;
        // The trailing pause is silence the server renders; drop it on the
        // last unit so playback does not end on dead air.
        const unitText =
          index === units.length - 1
            ? unit.text
            : unit.pauseAfter > 0
              ? `${unit.text} [pause:${unit.pauseAfter}s]`
              : unit.text;
        await synthesizeUnit(unitText, index, owner);
        if (engine !== e || owner.signal.aborted) return;
        e.synthesizedChars += spokenCharCounts[index] ?? 0;
        e.nextParagraphIndex = index + 1;
        index += 1;
        if (e.forceTailIndex !== null && index > e.forceTailIndex) e.forceTailIndex = null;
        refreshEstimate();
      }
      abortController = null; // all streams done; progress loop may now settle idle
      if (e.live) {
        e.awaitingText = true;
        return;
      }
      settleStream();
    } catch (error) {
      if (owner.signal.aborted) {
        // Superseded by a restart or stop; that path owns the state now.
        return;
      }
      abortController = null;
      if (engine !== e) return;
      const message = error instanceof Error ? error.message : "TTS request failed.";
      useAudioPlayerStore.getState().setError(message, id);
      teardown();
      throw error;
    } finally {
      if (worker === owner) worker = null;
    }
  };

  /** Drop the in-flight request and synthesize again from the queue. */
  const restartWorker = (): void => {
    const owner = worker;
    worker = null;
    owner?.abort();
    void pump().catch(() => {
      // The worker already reported the failure through the store.
    });
  };

  /**
   * Apply a speed change: keep fully played units, re-synthesize the unit under
   * the head and the unplayed tail at `rate` (speed is synthesis-side).
   */
  const handleRateChange = (rate: number): void => {
    e.rate = rate;
    const head = currentHead();
    // Last unit whose audio has finished playing before the head.
    let keepThrough = -1;
    for (let i = 0; i < e.paragraphSpans.length; i++) {
      const span = e.paragraphSpans[i];
      if (span === undefined) continue;
      if (span.end <= head) keepThrough = i;
      else break;
    }
    keepThrough = Math.min(keepThrough, e.nextParagraphIndex - 1);

    e.chunks = e.chunks.filter((chunk) => chunk.paragraph <= keepThrough);
    e.paragraphSpans = e.paragraphSpans.slice(0, keepThrough + 1);
    e.scheduledDuration = keepThrough >= 0 ? (e.paragraphSpans[keepThrough]?.end ?? 0) : 0;
    e.synthesizedChars = spokenCharCounts.slice(0, keepThrough + 1).reduce((a, b) => a + b, 0);
    e.nextParagraphIndex = keepThrough + 1;
    e.streamDone = false;

    // Re-anchor on the truncated timeline, then synthesize the rest anew.
    rescheduleAt(head);
    refreshEstimate();
    restartWorker();
  };
  applyRateChange = handleRateChange;

  /**
   * Seek to a paragraph with no audio yet: keep everything already synthesized,
   * drop nothing else, and synthesize from the target directly (skipping the
   * units in between), so it starts within one request. The pending-paragraph
   * jump in `scheduleArriving` then re-anchors the clock onto it.
   */
  const handleSeekToParagraph = (index: number): void => {
    const keepThrough = e.nextParagraphIndex - 1;
    e.chunks = e.chunks.filter((chunk) => chunk.paragraph <= keepThrough);
    e.paragraphSpans = e.paragraphSpans.slice(0, Math.max(0, keepThrough + 1));
    e.scheduledDuration = keepThrough >= 0 ? (e.paragraphSpans[keepThrough]?.end ?? 0) : 0;
    e.synthesizedChars = spokenCharCounts.slice(0, keepThrough + 1).reduce((a, b) => a + b, 0);
    e.nextParagraphIndex = Math.max(0, keepThrough + 1);
    e.streamDone = false;
    e.pendingSeekParagraph = index;
    e.pendingSeekTime = null;
    // The target may be the sentence the message is still writing.
    e.forceTailIndex = e.live && index === units.length - 1 ? index : null;
    e.resumeIndex = index;
    rescheduleAt(e.scheduledDuration);
    refreshEstimate();
    restartWorker();
  };
  restartFromParagraph = handleSeekToParagraph;

  /**
   * Grow the narration with a streaming message's latest text. Units past the
   * synthesized prefix were never spoken, so they are replaced by the new tail:
   * a partially written sentence changes as it fills in.
   */
  const growNarration = (latest: string): void => {
    const next = toSpokenUnits(latest);
    if (next.length <= e.nextParagraphIndex) return;
    const settled = e.nextParagraphIndex;
    units.length = settled;
    spokenCharCounts.length = settled;
    paragraphCues.length = settled;
    for (let index = settled; index < next.length; index++) {
      const unit = next[index]!;
      units.push(unit);
      spokenCharCounts.push(unit.text.length);
      paragraphCues.push(cueOf(unit.text));
    }
    refreshEstimate();
    void pump().catch(() => {
      // The worker already reported the failure through the store.
    });
  };
  appendNarrationText = growNarration;

  /** The message's text is final: speak the last sentence and let it settle. */
  const finishNarration = (): void => {
    if (!e.live) return;
    e.live = false;
    e.forceTailIndex = null;
    e.awaitingText = false;
    e.waitingSince = null;
    void pump().catch(() => {
      // The worker already reported the failure through the store.
    });
  };
  finishNarrationText = finishNarration;

  await pump(controller);
}

export interface PlaybackStart {
  /** Spoken-unit index to begin at (the paragraph that was clicked). */
  startParagraph?: number | undefined;
  /** The text can still grow: keep the session open for appended paragraphs. */
  live?: boolean | undefined;
}

export function useTtsPlayer() {
  const tts = useClientSettings((s) => s.tts);

  const play = (
    id: MessageId,
    text: string,
    threadRef: ScopedThreadRef | null,
    title?: string,
    start?: PlaybackStart,
  ) => startPlayback(id, text, threadRef, { voice: tts.voice, title, ...start });

  return {
    play,
    stop: stopPlayback,
  };
}

/** Test helper — resets the singleton between Vitest runs. */
export function __resetTtsPlayerForTests(): void {
  teardown();
  if (audioContext !== null) {
    void audioContext.close();
    audioContext = null;
    gainNode = null;
  }
}
