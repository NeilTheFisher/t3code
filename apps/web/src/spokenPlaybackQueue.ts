/**
 * Queue for agent `t3_speak` utterances. They play one at a time through the
 * shared TTS player, with a short silence between them.
 *
 * The queue is global, so an utterance is tagged by its timeline entry id. An
 * `interrupt` utterance replaces whatever is playing right now, but never drops
 * another thread's queued speech. A user-initiated play clears the queue.
 */
import { MessageId } from "@t3tools/contracts";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { startPlayback, stopPlayback } from "~/hooks/useTtsPlayer";

export interface SpeakJob {
  readonly id: string;
  readonly text: string;
}

export interface SpeakContext {
  readonly voice: string;
  readonly serverUrl: string;
  /** Per-utterance synthesis speed from the tool call, if any. */
  readonly speed?: number | undefined;
}

const GAP_MS = 1_500;
const IDLE_POLL_MS = 100;

// Remembered per browser so a refresh (or a second tab) never re-speaks an
// utterance the reader has already heard. Kept bounded.
const STORAGE_KEY = "t3-spoken-played";
const MAX_REMEMBERED = 200;

function loadPlayed(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return new Set();
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed)
      ? new Set(parsed.filter((id): id is string => typeof id === "string"))
      : new Set();
  } catch {
    return new Set();
  }
}

function persistPlayed(ids: Set<string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids].slice(-MAX_REMEMBERED)));
  } catch {
    // Storage unavailable; the in-memory set still dedupes this session.
  }
}

let queue: SpeakJob[] = [];
let running = false;
let context: SpeakContext = { voice: "af_heart", serverUrl: "" };
const played = loadPlayed();

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

async function waitForIdle(): Promise<void> {
  for (;;) {
    if (useAudioPlayerStore.getState().status === "idle") return;
    await sleep(IDLE_POLL_MS);
  }
}

async function run(): Promise<void> {
  if (running) return;
  running = true;
  try {
    while (queue.length > 0) {
      const job = queue.shift()!;
      try {
        await startPlayback(MessageId.make(`spoken:${job.id}`), job.text, null, {
          voice: context.voice,
          serverUrl: context.serverUrl,
          speed: context.speed,
        });
        await waitForIdle();
      } catch {
        // Playback failed (server unreachable, etc.); move on to the next.
      }
      if (queue.length > 0) await sleep(GAP_MS);
    }
  } finally {
    running = false;
  }
}

/** Enqueue an utterance once per id. `interrupt` stops the current one now. */
export function enqueueSpoken(job: SpeakJob, ctx: SpeakContext, interrupt = false): void {
  context = ctx;
  if (played.has(job.id)) return;
  played.add(job.id);
  persistPlayed(played);
  if (interrupt) {
    queue.unshift(job);
    stopPlayback();
  } else {
    queue.push(job);
  }
  void run();
}

/** Drop everything queued; a user-initiated play takes over. */
export function clearSpokenQueue(): void {
  queue = [];
}
