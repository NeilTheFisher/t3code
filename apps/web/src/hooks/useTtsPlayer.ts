/**
 * Module-level singleton TTS player built on WebAudio: streaming PCM chunks
 * from the on-demand Kokoro endpoint are decoded and scheduled back-to-back,
 * so playback starts before the whole message is synthesized. One shared
 * AudioContext + gain node survive row unmounts and thread navigation, and a
 * new play supersedes the current one. Status mirrors into
 * `useAudioPlayerStore`, which the global mini-player also renders from.
 */
import { useCallback } from "react";
import { type MessageId, type ScopedThreadRef } from "@t3tools/contracts";
import { useClientSettings } from "./useSettings";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { markdownToSpokenText, toSpokenUnits } from "~/lib/markdownToSpokenText";
import {
  convergeEstimatedDuration,
  estimateSpokenDuration,
  seekSchedule,
  TTS_CHARS_PER_SECOND,
  type ChunkSpan,
} from "~/lib/ttsPlaybackMath";
import { streamSpeechChunks, TTS_PCM_SAMPLE_RATE } from "~/lib/ttsClient";

const TITLE_MAX_CHARS = 80;

/** Display excerpt of the synthesized text, prepared once at play time. */
function excerptTitle(text: string): string {
  const trimmed = text.trim().replace(/\s+/g, " ");
  return trimmed.length > TITLE_MAX_CHARS ? `${trimmed.slice(0, TITLE_MAX_CHARS - 1)}…` : trimmed;
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

interface ScheduledSource {
  source: AudioBufferSourceNode;
  /** Context time this source starts at. */
  startedAt: number;
  /** Playback duration in context-time seconds (chunk duration / rate). */
  duration: number;
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
  /** Ctx time when playback was suspended, if paused. */
  pausedAt: number | null;
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

/** Message-time of the playback head (where in [0, duration) we are). */
function currentHead(): number {
  const e = engine;
  if (e === null || audioContext === null) return 0;
  // The ctx clock freezes while suspended, so pausedAt needs no adjustment.
  const ctxNow = e.paused ? (e.pausedAt ?? 0) : audioContext.currentTime;
  return Math.max(0, Math.min(ctxNow - e.baseTime, e.duration));
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
  useAudioPlayerStore.getState().setActiveParagraph(null, null);
}

function finishPlayback(): void {
  teardown();
  useAudioPlayerStore.getState().setIdle();
}

function startProgressLoop(): void {
  const tick = () => {
    progressHandle = null;
    const e = engine;
    if (e === null || e.paused || audioContext === null) return;
    const store = useAudioPlayerStore.getState();
    const head = currentHead();
    store.setProgress(head, e.duration);

    // Paragraph highlighting: the span containing the playback head. Skipped
    // while a seek is pending so it can't overwrite the highlight that was set
    // optimistically on click, before the head reaches the target.
    if (e.pendingSeekParagraph === null && e.pendingSeekTime === null) {
      const active = e.paragraphSpans.findIndex((span) => head >= span.start && head < span.end);
      if ((store.activeParagraph ?? -1) !== active) {
        store.setActiveParagraph(
          active >= 0 ? active : null,
          active >= 0 ? (paragraphCues[active] ?? null) : null,
        );
      }
    }

    // Only settle when the stream is fully scheduled AND every source has
    // finished. During streaming, more sources may still arrive.
    const ctxNow = audioContext.currentTime;
    const allDone =
      e.streamDone &&
      scheduledSources.length > 0 &&
      scheduledSources.every(({ startedAt, duration }) => ctxNow >= startedAt + duration);
    if (allDone) {
      finishPlayback();
      return;
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
    e.pausedAt = ctx.currentTime;
    e.paused = true;
    if (progressHandle !== null) {
      cancelAnimationFrame(progressHandle);
      progressHandle = null;
    }
    void ctx.suspend();
    s.setPaused();
  } else {
    e.paused = false;
    e.pausedAt = null;
    void ctx.resume();
    s.setPlaying(e.playingMessageId);
    startProgressLoop();
  }
}

/**
 * Rebuild the schedule from the chunk timeline anchored so that message-time
 * `head` is "now". Shared by seek and skip. Playback rate is synthesis-side
 * (the server speeds the voice, pitch intact), so all buffers play at 1x and
 * message-time equals context-time.
 * Returns the message-time the reschedule started from (clamped to buffer).
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
      startedAt: when,
      duration: chunk.buffer.duration - offset,
    });
  }

  // The next streamed chunk must land after everything already scheduled here.
  e.nextStartTime = e.baseTime + e.scheduledDuration;

  const s = useAudioPlayerStore.getState();
  s.setProgress(target, e.duration);
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
 * Change synthesis speed. Pitch is preserved because speed is synthesis-side,
 * so a mid-playback change cannot ride on the already-generated audio: while a
 * narration is active it drops the current unit and the unplayed tail and
 * re-synthesizes them at the new rate (see `handleRateChange` in
 * `startPlayback`).
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
  // its audio (and the progress loop) catches up. Skip when the cue is unknown,
  // so we don't clear the store's cue and drop the highlight.
  const cue = paragraphCues[index];
  if (cue !== undefined) {
    useAudioPlayerStore.getState().setActiveParagraph(index, cue);
  }
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
  serverUrl: string;
  /** Synthesis speed for this narration, overriding the shared slider. */
  speed?: number | undefined;
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

  const units = toSpokenUnits(text);
  const spoken = markdownToSpokenText(text);
  // Playback is driven by `units`, so a message that flattens to a non-empty
  // string of nothing but pauses (a lone code block or rule) still has no unit
  // to synthesize. Guard on `units` or the player would spin on "loading"
  // forever with no chunk ever scheduled.
  if (units.length === 0) {
    useAudioPlayerStore.getState().setError("Nothing to read aloud.", id);
    return;
  }
  // teardown() clears `paragraphCues`, so the new cues must be assigned after
  // it — assigning first left every cue null and suppressed all highlighting.
  teardown();
  paragraphCues = units.map((unit) => cueOf(unit.text));
  const controller = new AbortController();
  abortController = controller;
  const { volume } = store;
  // An agent utterance can carry its own speed; otherwise use the slider.
  const rate = options.speed ?? store.rate;
  store.setLoading(id, excerptTitle(spoken), threadRef);
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
    duration: estimateSpokenDuration(spoken, rate),
    streamDone: false,
    baseTime: ctx.currentTime + 0.05,
    nextStartTime: ctx.currentTime + 0.05,
    paused: false,
    pausedAt: null,
    rate,
    paragraphSpans: [],
    spokenCharCounts,
    synthesizedChars: 0,
    nextParagraphIndex: 0,
    pendingSeekTime: null,
    pendingSeekParagraph: null,
  };
  const e = engine;

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
    scheduledSources.push({ source, startedAt: start, duration: buffer.duration });

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
   * Synthesize spoken units from `fromIndex` onward at the current rate, one
   * request at a time. Units are sentence-sized, so each request returns its
   * audio quickly and playback starts after the first one. Each call owns its
   * AbortController, so a speed change can abort the running worker and start a
   * fresh one without the old stream appending stale chunks. Synthesis runs
   * through the whole message eagerly so any paragraph is seekable.
   */
  const runSynthesis = (fromIndex: number, owner = new AbortController()): Promise<void> => {
    abortController = owner;
    return (async () => {
      try {
        for (let index = fromIndex; index < units.length; index++) {
          const unit = units[index]!;
          // The trailing pause is silence the server renders; drop it on the
          // last unit so playback does not end on dead air.
          const unitText =
            index === units.length - 1
              ? unit.text
              : unit.pauseAfter > 0
                ? `${unit.text} [pause:${unit.pauseAfter}s]`
                : unit.text;
          await streamSpeechChunks(
            {
              text: unitText,
              voice: options.voice,
              serverUrl: options.serverUrl,
              speed: e.rate,
              signal: owner.signal,
              onWakingUp: () => {
                useAudioPlayerStore.getState().setWaking(id);
              },
            },
            (chunkPcm) => scheduleArriving(chunkPcm, index, owner),
          );
          if (engine !== e || owner.signal.aborted) return;
          e.synthesizedChars += spokenCharCounts[index] ?? 0;
          e.nextParagraphIndex = index + 1;
          refreshEstimate();
        }
        if (engine !== e || owner.signal.aborted) return;
        abortController = null; // all streams done; progress loop may now settle idle
        // Snap the display duration to the exact synthesized extent.
        e.streamDone = true;
        e.duration = e.scheduledDuration;
        useAudioPlayerStore.getState().setSynthesizedParagraphs(e.nextParagraphIndex);
        useAudioPlayerStore.getState().setProgress(currentHead(), e.duration);
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
      }
    })();
  };

  /**
   * Apply a speed change to the active narration. Pitch is preserved by
   * synthesizing at the new speed, so already-generated audio cannot be reused:
   * keep every unit that has fully played, drop the unit under the head and the
   * unplayed tail, and re-synthesize them at `rate`. Units are sentence-sized,
   * so the change lands within about one request's latency.
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

    if (abortController !== null) abortController.abort();

    e.chunks = e.chunks.filter((chunk) => chunk.paragraph <= keepThrough);
    e.paragraphSpans = e.paragraphSpans.slice(0, keepThrough + 1);
    e.scheduledDuration = keepThrough >= 0 ? (e.paragraphSpans[keepThrough]?.end ?? 0) : 0;
    e.synthesizedChars = spokenCharCounts.slice(0, keepThrough + 1).reduce((a, b) => a + b, 0);
    e.nextParagraphIndex = keepThrough + 1;
    e.streamDone = false;

    // Re-anchor on the truncated timeline, then synthesize the rest anew.
    rescheduleAt(head);
    refreshEstimate();
    void runSynthesis(keepThrough + 1).catch(() => {
      // The worker already reported the failure through the store.
    });
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
    if (abortController !== null) abortController.abort();
    e.chunks = e.chunks.filter((chunk) => chunk.paragraph <= keepThrough);
    e.paragraphSpans = e.paragraphSpans.slice(0, Math.max(0, keepThrough + 1));
    e.scheduledDuration = keepThrough >= 0 ? (e.paragraphSpans[keepThrough]?.end ?? 0) : 0;
    e.synthesizedChars = spokenCharCounts.slice(0, keepThrough + 1).reduce((a, b) => a + b, 0);
    e.nextParagraphIndex = Math.max(0, keepThrough + 1);
    e.streamDone = false;
    e.pendingSeekParagraph = index;
    e.pendingSeekTime = null;
    rescheduleAt(e.scheduledDuration);
    refreshEstimate();
    void runSynthesis(index).catch(() => {
      // The worker already reported the failure through the store.
    });
  };
  restartFromParagraph = handleSeekToParagraph;

  await runSynthesis(0, controller);
}

export function useTtsPlayer() {
  const tts = useClientSettings((s) => s.tts);

  const play = useCallback(
    (id: MessageId, text: string, threadRef: ScopedThreadRef | null) =>
      startPlayback(id, text, threadRef, { voice: tts.voice, serverUrl: tts.serverUrl }),
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
  if (audioContext !== null) {
    void audioContext.close();
    audioContext = null;
    gainNode = null;
  }
}
