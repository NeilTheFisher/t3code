/**
 * Module-level singleton TTS player built on WebAudio: streaming PCM chunks
 * from the on-demand Kokoro endpoint are decoded and scheduled back-to-back,
 * so playback starts before the whole message is synthesized. One shared
 * AudioContext + gain node survive row unmounts and thread navigation, and a
 * new play supersedes the current one. Status mirrors into
 * `useAudioPlayerStore`, which the global mini-player also renders from.
 */
import { useCallback } from "react";
import { type MessageId } from "@t3tools/contracts";
import { useClientSettings } from "./useSettings";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { markdownToSpokenText } from "~/lib/markdownToSpokenText";
import { estimateSpokenDuration, seekSchedule, type ChunkSpan } from "~/lib/ttsPlaybackMath";
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
  paused: boolean;
  /** Ctx time when playback was suspended, if paused. */
  pausedAt: number | null;
  rate: number;
}

let audioContext: AudioContext | null = null;
let gainNode: GainNode | null = null;
let abortController: AbortController | null = null;
let scheduledSources: ScheduledSource[] = [];
let engine: EngineState | null = null;
let progressHandle: number | null = null;

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
    store.setProgress(currentHead(), e.duration);

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
 * Seek to a message-time position (seconds). The chunk timeline is immutable;
 * only the schedule is rebuilt: the clock is re-anchored so message-time
 * `target` is "now", the chunk containing the target resumes mid-buffer, and
 * later chunks play whole at their original offsets.
 */
export function seekPlayback(seconds: number): void {
  const e = engine;
  const { ctx, gain } = ensureAudioGraph();
  if (e === null || !Number.isFinite(seconds)) return;
  // The scrub bar is driven by the text-length estimate, which can exceed
  // the synthesized-so-far extent while the stream is still filling. Seeking
  // past the buffer would anchor the clock ahead of the arrival timeline
  // and schedule later chunks at negative context times (which start()
  // throws on), so clamp to the live edge.
  const target = Math.min(Math.max(0, seconds), e.scheduledDuration);

  stopSources();
  e.baseTime = ctx.currentTime - target;

  const spans: ChunkSpan[] = e.chunks.map((chunk) => ({
    at: chunk.at,
    duration: chunk.buffer.duration / e.rate,
  }));
  for (const { index, offset } of seekSchedule(spans, target)) {
    const chunk = e.chunks[index]!;
    const source = ctx.createBufferSource();
    source.buffer = chunk.buffer;
    source.playbackRate.value = e.rate;
    source.connect(gain);
    const when = Math.max(0, e.baseTime + chunk.at);
    if (!Number.isFinite(when) || !Number.isFinite(offset)) continue;
    source.start(when, offset);
    scheduledSources.push({
      source,
      startedAt: when,
      duration: chunk.buffer.duration / e.rate - offset,
    });
  }

  const s = useAudioPlayerStore.getState();
  s.setProgress(target, e.duration);
  if (!e.paused && progressHandle === null) {
    startProgressLoop();
  }
}

export function setPlaybackVolume(position: number): void {
  const { gain } = ensureAudioGraph();
  gain.gain.value = sliderToVolume(position);
  useAudioPlayerStore.getState().setVolume(position);
}

export function setPlaybackRate(rate: number): void {
  // Rate applies at schedule time; a live change would break position math, so
  // this takes effect on the next playback.
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

  const spoken = markdownToSpokenText(text);
  if (spoken.length === 0) {
    useAudioPlayerStore.getState().setError("Nothing to read aloud.", id);
    return;
  }

  teardown();
  const controller = new AbortController();
  abortController = controller;
  const { volume, rate } = store;
  store.setLoading(id, excerptTitle(spoken));
  setPlaybackVolume(volume);

  const { ctx, gain } = ensureAudioGraph();
  if (ctx.state === "suspended") {
    await ctx.resume();
  }
  engine = {
    playingMessageId: id,
    chunks: [],
    scheduledDuration: 0,
    // Estimated up front from text length so the scrub bar is stable while
    // streaming; replaced by the exact extent when the stream completes.
    duration: estimateSpokenDuration(spoken, rate),
    streamDone: false,
    baseTime: ctx.currentTime + 0.05,
    paused: false,
    pausedAt: null,
    rate,
  };
  const e = engine;

  try {
    await streamSpeechChunks(
      {
        text: spoken,
        voice: options.voice,
        serverUrl: options.serverUrl,
        signal: controller.signal,
        onWakingUp: () => {
          useAudioPlayerStore.getState().setWaking(id);
        },
      },
      (chunkPcm) => {
        if (engine !== e) return;
        const buffer = pcmToAudioBuffer(ctx, chunkPcm);
        const at = e.scheduledDuration;
        e.chunks.push({ buffer, at });
        e.scheduledDuration += buffer.duration / e.rate;

        const when = e.baseTime + at;
        // After a seek to the live edge, `when` can land slightly in the
        // past; clamp to now. Never hand start() a non-finite time.
        const safeWhen = Number.isFinite(when) ? Math.max(ctx.currentTime, when) : ctx.currentTime;
        if (!Number.isFinite(safeWhen)) return;
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = e.rate;
        source.connect(gain);
        source.start(safeWhen);
        scheduledSources.push({ source, startedAt: safeWhen, duration: buffer.duration / e.rate });

        const s = useAudioPlayerStore.getState();
        if (s.status === "loading" || s.status === "waking") {
          s.setPlaying(id);
          startProgressLoop();
        }
      },
    );
    abortController = null; // stream ended; progress loop may now settle idle
    // Snap the display duration to the exact synthesized extent.
    if (engine === e) {
      e.streamDone = true;
      e.duration = e.scheduledDuration;
      useAudioPlayerStore.getState().setProgress(currentHead(), e.duration);
    }
  } catch (error) {
    abortController = null;
    if (controller.signal.aborted) {
      // A subsequent play/stop already cleaned up; don't clobber its state.
      return;
    }
    const message = error instanceof Error ? error.message : "TTS request failed.";
    useAudioPlayerStore.getState().setError(message, id);
    teardown();
    throw error;
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
  if (audioContext !== null) {
    void audioContext.close();
    audioContext = null;
    gainNode = null;
  }
}
