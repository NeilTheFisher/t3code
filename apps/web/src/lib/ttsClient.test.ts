import { afterEach, describe, expect, it, vi } from "vite-plus/test";

import { synthesizeSpeech, TTS_WAKE_TIMEOUT_MS, TtsServerError } from "./ttsClient";

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
});
