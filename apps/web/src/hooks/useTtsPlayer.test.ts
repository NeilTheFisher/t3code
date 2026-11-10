import { describe, expect, it, onTestFinished, vi } from "vite-plus/test";

const SAMPLE_RATE = 24_000;

interface Pending {
  at: number;
  run: () => void;
}

const synth = vi.hoisted(() => ({
  clock: 0,
  pending: [] as Pending[],
  frames: [] as Array<() => void>,
}));

vi.mock(import("~/lib/phononSpeech"), () => ({
  TTS_PCM_SAMPLE_RATE: 24_000 as const,
  localSpeechAvailable: () => true,
  // One 4s chunk per spoken unit, so paragraph boundaries are easy to reason about.
  streamPhononChunks: async (request: { text: string; onChunk: (chunk: ArrayBuffer) => void }) => {
    await new Promise<void>((resolve) => {
      synth.pending.push({ at: synth.clock, run: resolve });
    });
    request.onChunk(new ArrayBuffer(4 * SAMPLE_RATE * 2));
  },
}));

vi.mock(import("~/lib/ttsEnvironmentBase"), () => ({
  resolveTtsEnvironmentBase: () => "http://speech.test",
}));

class FakeBuffer {
  constructor(
    readonly duration: number,
    private readonly samples: number,
  ) {}
  getChannelData() {
    return new Float32Array(this.samples);
  }
}

class FakeSource {
  buffer: FakeBuffer | null = null;
  connect() {}
  start() {}
  stop() {}
}

class FakeGain {
  gain = { value: 1 };
  connect() {}
}

/** Audio clock under the test's control; `suspend` freezes it like a real one. */
class FakeAudioContext {
  state = "running";
  sampleRate = SAMPLE_RATE;
  get currentTime() {
    return synth.clock;
  }
  createGain() {
    return new FakeGain() as unknown as GainNode;
  }
  createBuffer(_channels: number, samples: number, rate: number) {
    return new FakeBuffer(samples / rate, samples) as unknown as AudioBuffer;
  }
  createBufferSource() {
    return new FakeSource() as unknown as AudioBufferSourceNode;
  }
  async resume() {}
  async suspend() {}
  async close() {}
}

vi.stubGlobal("AudioContext", FakeAudioContext);
vi.stubGlobal("requestAnimationFrame", (callback: () => void) => {
  synth.frames.push(callback);
  return synth.frames.length;
});
vi.stubGlobal("cancelAnimationFrame", () => {});

const { useAudioPlayerStore } = await import("~/audioPlayerStore");
const { startPlayback, skipPlayback, togglePausePlayback, __resetTtsPlayerForTests } =
  await import("~/hooks/useTtsPlayer");

async function flush() {
  for (let i = 0; i < 30; i++) await Promise.resolve();
}

/** Let synthesis deliver what it owes, advance the clock, and run one frame. */
async function step(seconds: number) {
  await flush();
  synth.clock += seconds;
  const due = synth.pending.filter((entry) => entry.at <= synth.clock);
  synth.pending = synth.pending.filter((entry) => entry.at > synth.clock);
  for (const entry of due) entry.run();
  await flush();
  const frames = synth.frames;
  synth.frames = [];
  for (const frame of frames) frame();
  await flush();
}

const paragraphNow = () => useAudioPlayerStore.getState().activeParagraph;
const headNow = () => useAudioPlayerStore.getState().currentTime;

describe("useTtsPlayer paragraph highlight", () => {
  it("follows the audible paragraph across skip, pause and resume", async () => {
    onTestFinished(() => {
      __resetTtsPlayerForTests();
      useAudioPlayerStore.getState().setIdle();
    });
    const text = ["One.", "Two.", "Three.", "Four."].join("\n\n");
    void startPlayback("msg-1" as never, text, null, { voice: "Delia" }).catch(() => {});

    // Let every unit synthesize; they are scheduled ahead of the clock.
    for (let i = 0; i < 9; i++) await step(0.05);
    expect(paragraphNow()).toBe(0);

    await step(4.5);
    expect(paragraphNow()).toBe(1);

    const beforeSkip = headNow();
    skipPlayback(8);
    expect(paragraphNow()).toBe(3);
    expect(headNow()).toBeCloseTo(beforeSkip + 8, 1);

    // The frame loop is stopped while paused; the reschedule still moves both.
    togglePausePlayback();
    skipPlayback(-8);
    expect(paragraphNow()).toBe(1);
    expect(headNow()).toBeCloseTo(beforeSkip, 1);

    togglePausePlayback();
    await step(4.5);
    expect(paragraphNow()).toBe(2);
  });
});
