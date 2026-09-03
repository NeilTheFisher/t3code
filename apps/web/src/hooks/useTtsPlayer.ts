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
  /** Total message duration scheduled so far. */
  duration: number;
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

    const ctxNow = audioContext.currentTime;
    const allDone = scheduledSources.every(
      ({ startedAt, duration }) => ctxNow >= startedAt + duration,
    );
    if (allDone && scheduledSources.length > 0 && abortController === null) {
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
    void ctx.suspend();
    s.setPaused();
  } else {
    // Shift baseTime across the suspension so the head does not jump.
    const pausedFor = (e.pausedAt ?? 0) - ctx.currentTime;
    e.baseTime += pausedFor;
    e.paused = false;
    e.pausedAt = null;
    void ctx.resume();
    s.setPlaying(e.playingMessageId);
  }
}

/**
 * Seek to a message-time position (seconds) by rebuilding the schedule from
 * the kept decoded chunks: chunks before the position are dropped, the rest
 * play back-to-back from now.
 */
export function seekPlayback(seconds: number): void {
  const e = engine;
  const { ctx, gain } = ensureAudioGraph();
  if (e === null || !Number.isFinite(seconds)) return;
  const target = Math.min(Math.max(0, seconds), e.duration);

  stopSources();
  const keep = e.chunks.filter((chunk) => chunk.at >= target);
  e.chunks = keep;
  e.duration =
    keep.length > 0 ? keep[keep.length - 1].at + keep[0]!.duration - keep[0]!.at : target;
  // Recompute offsets so the kept audio starts at message-time `target`.
  const firstAt = keep[0]?.at ?? target;
  for (const chunk of keep) {
    chunk.at = target + (chunk.at - firstAt);
  }
  e.baseTime = ctx.currentTime - target;

  let cursor = ctx.currentTime;
  for (const chunk of keep) {
    const source = ctx.createBufferSource();
    source.buffer = chunk.buffer;
    source.playbackRate.value = e.rate;
    source.connect(gain);
    const when = Math.max(cursor, chunk.at + e.baseTime);
    source.start(when);
    const dur = chunk.buffer.duration / e.rate;
    scheduledSources.push({ source, startedAt: when, duration: dur });
    cursor = when + dur;
  }
  if (!e.paused) {
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
    duration: 0,
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
        const at = e.duration;
        e.chunks.push({ buffer, at });
        e.duration += buffer.duration / e.rate;

        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = e.rate;
        source.connect(gain);
        const when = e.baseTime + at;
        source.start(when);
        scheduledSources.push({ source, startedAt: when, duration: buffer.duration / e.rate });

        const s = useAudioPlayerStore.getState();
        if (s.status === "loading" || s.status === "waking") {
          s.setPlaying(id);
          startProgressLoop();
        }
      },
    );
    abortController = null; // stream ended; progress loop may now settle idle
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
