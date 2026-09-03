import { afterEach, describe, expect, it, vi } from "vite-plus/test";

import {
  synthesizeSpeech,
  streamSpeechChunks,
  TTS_WAKE_TIMEOUT_MS,
  TtsServerError,
} from "./ttsClient";

const okResponse = () =>
  new Response(new Blob(["audio"]), { status: 200, headers: { "Content-Type": "audio/wav" } });

const serviceUnavailable = () =>
  new Response('{"detail":"TTS server is starting up or unavailable"}', {
    status: 503,
    statusText: "Service Unavailable",
  });

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("synthesizeSpeech", () => {
  it("returns the blob on a healthy server without retrying", async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse());
    vi.stubGlobal("fetch", fetchMock);

    const blob = await synthesizeSpeech({
      text: "hi",
      voice: "af_heart",
      serverUrl: "http://127.0.0.1:8880",
    });

    expect(blob.size).toBeGreaterThan(0);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe("http://127.0.0.1:8880/v1/audio/speech");
  });

  it("retries while the on-demand server returns 503, then succeeds", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(serviceUnavailable())
      .mockResolvedValueOnce(okResponse());
    vi.stubGlobal("fetch", fetchMock);
    vi.useFakeTimers();

    const onWakingUp = vi.fn();
    const promise = synthesizeSpeech({
      text: "hi",
      voice: "af_heart",
      serverUrl: "http://127.0.0.1:8880",
      onWakingUp,
    });
    await vi.advanceTimersByTimeAsync(2_500);
    const blob = await promise;

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(onWakingUp).toHaveBeenCalledTimes(1);
    expect(blob.size).toBeGreaterThan(0);
    vi.useRealTimers();
  });

  it("gives up after the wake timeout and throws a TtsServerError", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(serviceUnavailable()));
    vi.useFakeTimers();

    const promise = synthesizeSpeech({
      text: "hi",
      voice: "af_heart",
      serverUrl: "http://127.0.0.1:8880",
    });
    const assertion = expect(promise).rejects.toBeInstanceOf(TtsServerError);
    // Skip the client just past the deadline; the in-flight sleep resolves after it.
    await vi.advanceTimersByTimeAsync(TTS_WAKE_TIMEOUT_MS + 3_000);
    await assertion;
    vi.useRealTimers();
  });

  it("fails fast on non-503 errors like a missing server", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response("nope", { status: 404, statusText: "Not Found" })),
    );

    await expect(
      synthesizeSpeech({ text: "hi", voice: "af_heart", serverUrl: "http://127.0.0.1:8880" }),
    ).rejects.toThrow("TTS server returned 404");
  });

  it("does not call onWakingUp when the server is healthy immediately", async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse());
    vi.stubGlobal("fetch", fetchMock);
    const onWakingUp = vi.fn();

    await synthesizeSpeech({
      text: "hi",
      voice: "af_heart",
      serverUrl: "http://127.0.0.1:8880",
      onWakingUp,
    });

    expect(onWakingUp).not.toHaveBeenCalled();
  });

  it("streams PCM chunks progressively as they arrive", async () => {
    const chunks = [new Uint8Array([1, 0]), new Uint8Array([2, 0, 3, 0])];
    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        for (const chunk of chunks) controller.enqueue(chunk);
        controller.close();
      },
    });
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(stream, { status: 200, headers: { "Content-Type": "audio/pcm" } }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const received: number[] = [];
    await streamSpeechChunks(
      { text: "hi", voice: "af_heart", serverUrl: "http://127.0.0.1:8880" },
      (chunk) => received.push(chunk.byteLength),
    );

    expect(received).toEqual([2, 4]);
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.stream).toBe(true);
    expect(body.response_format).toBe("pcm");
  });

  it("throws when the streaming response has no body", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      streamSpeechChunks(
        { text: "hi", voice: "af_heart", serverUrl: "http://127.0.0.1:8880" },
        () => {},
      ),
    ).rejects.toThrow("no stream body");
  });
});
