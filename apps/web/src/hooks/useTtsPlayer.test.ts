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
  /** Text of every synthesis request, in order. */
  requests: [] as string[],
}));

vi.mock(import("~/lib/phononSpeech"), () => ({
  TTS_PCM_SAMPLE_RATE: 24_000 as const,
  localSpeechAvailable: () => true,
  // One 4s chunk per spoken unit, so paragraph boundaries are easy to reason about.
  streamPhononChunks: async (request: { text: string; onChunk: (chunk: ArrayBuffer) => void }) => {
    synth.requests.push(request.text);
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
const {
  completePlaybackText,
  startPlayback,
  skipPlayback,
  syncPlaybackText,
  togglePausePlayback,
  __resetTtsPlayerForTests,
} = await import("~/hooks/useTtsPlayer");

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
const statusNow = () => useAudioPlayerStore.getState().status;

/** Fresh singleton and synth clock for one test. */
function beginTest() {
  synth.clock = 0;
  synth.pending = [];
  synth.frames = [];
  synth.requests.length = 0;
  onTestFinished(() => {
    __resetTtsPlayerForTests();
    useAudioPlayerStore.getState().setIdle();
    synth.pending = [];
    synth.frames = [];
    synth.requests.length = 0;
  });
}

describe("useTtsPlayer paragraph highlight", () => {
  it("follows the audible paragraph across skip, pause and resume", async () => {
    beginTest();
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

describe("useTtsPlayer narration start", () => {
  it("begins at the clicked paragraph and speaks the rest", async () => {
    beginTest();
    const text = ["One.", "Two.", "Three."].join("\n\n");
    void startPlayback("msg-start" as never, text, null, {
      voice: "Delia",
      startParagraph: 2,
    }).catch(() => {});

    await step(0.05);
    expect(synth.requests).toEqual(["Three."]);
    // The highlight sits on the clicked paragraph before its audio arrives.
    expect(paragraphNow()).toBe(2);

    await step(4.5);
    expect(headNow()).toBeCloseTo(4, 1);
    expect(statusNow()).toBe("idle");
  });

  it("appends paragraphs that arrive while a live narration plays", async () => {
    beginTest();
    const id = "msg-live" as never;
    // "Two" is still being written, so only the finished sentence is spoken.
    void startPlayback(id, "One.\n\nTwo", null, { voice: "Delia", live: true }).catch(() => {});
    await step(0.05);
    expect(synth.requests).toEqual(["One. [pause:0.6s]"]);

    // Out of audio, but the message is not over: the player keeps playing.
    await step(4.5);
    expect(statusNow()).toBe("playing");

    syncPlaybackText(id, "One.\n\nTwo.\n\nThree");
    await step(0.05);
    expect(synth.requests).toEqual(["One. [pause:0.6s]", "Two. [pause:0.6s]"]);

    completePlaybackText(id);
    await step(0.05);
    expect(synth.requests).toEqual(["One. [pause:0.6s]", "Two. [pause:0.6s]", "Three"]);

    // After the last sentence plays out, the session settles.
    await step(12);
    expect(statusNow()).toBe("idle");
  });

  it("speaks the clicked paragraph even while it is still being written", async () => {
    beginTest();
    const id = "msg-live-tail" as never;
    void startPlayback(id, "One.\n\nTwo", null, {
      voice: "Delia",
      live: true,
      startParagraph: 1,
    }).catch(() => {});

    await step(0.05);
    expect(synth.requests).toEqual(["Two"]);
    expect(paragraphNow()).toBe(1);
  });

  it("settles a live narration when the message stops sending text", async () => {
    beginTest();
    const id = "msg-stall" as never;
    void startPlayback(id, "One.", null, { voice: "Delia", live: true }).catch(() => {});
    await step(0.05);
    expect(synth.requests).toEqual(["One."]);

    await step(4.5);
    expect(statusNow()).toBe("playing");

    // Nothing arrives: the session gives up waiting rather than holding a
    // silent player open forever.
    await step(16);
    await step(0.05);
    expect(statusNow()).toBe("idle");
  });
});
