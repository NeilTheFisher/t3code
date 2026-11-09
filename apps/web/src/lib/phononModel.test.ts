import { describe, expect, it } from "vite-plus/test";

import {
  canSynthesizeLocally,
  modelAssetBase,
  parseVoiceCatalog,
  phononVoiceFor,
  rewriteModelUrl,
  serverVoiceFor,
  splitPauseDirective,
  voiceCatalogUrl,
} from "./phononModel";

describe("voice mapping", () => {
  it("keeps an existing Kokoro voice on its Phonon counterpart", () => {
    expect(phononVoiceFor("af_heart")).toBe("Delia");
    expect(phononVoiceFor("bf_emma")).toBe("Maeve");
  });

  it("passes a Phonon voice through and defaults an empty one", () => {
    expect(phononVoiceFor("Trevor")).toBe("Trevor");
    expect(phononVoiceFor("  ")).toBe("Delia");
  });

  it("maps back to the server voice the environment can synthesize", () => {
    expect(serverVoiceFor("Delia")).toBe("af_heart");
    expect(serverVoiceFor("Trevor")).toBe("am_adam");
    expect(serverVoiceFor("Zoey")).toBe("af_bella");
  });

  it("leaves a name neither engine knows alone for the server to judge", () => {
    expect(serverVoiceFor("am_onyx")).toBe("am_onyx");
  });
});

describe("canSynthesizeLocally", () => {
  it("accepts the model's native range and rejects the ends", () => {
    expect(canSynthesizeLocally(1)).toBe(true);
    expect(canSynthesizeLocally(1.3)).toBe(true);
    expect(canSynthesizeLocally(0.77)).toBe(true);
    expect(canSynthesizeLocally(1.5)).toBe(false);
    expect(canSynthesizeLocally(2)).toBe(false);
    expect(canSynthesizeLocally(Number.NaN)).toBe(false);
  });
});

describe("splitPauseDirective", () => {
  it("splits the player's trailing silence into seconds", () => {
    expect(splitPauseDirective("A heading [pause:0.4s]")).toEqual({
      text: "A heading",
      pauseSeconds: 0.4,
    });
  });

  it("leaves text without a directive untouched", () => {
    expect(splitPauseDirective(" Plain text ")).toEqual({ text: "Plain text", pauseSeconds: 0 });
  });

  it("ignores a malformed value rather than speaking it", () => {
    expect(splitPauseDirective("Wait [pause:soon]")).toEqual({
      text: "Wait [pause:soon]",
      pauseSeconds: 0,
    });
  });
});

describe("parseVoiceCatalog", () => {
  it("keeps distinct English voices in catalog order", () => {
    const catalog = [
      '{"name":"Delia","language":"en"}',
      '{"name":"Coralie","language":"fr"}',
      '{"name":"Trevor","language":"en"}',
      '{"name":"Delia","language":"en"}',
    ].join("\n");
    expect(parseVoiceCatalog(catalog)).toEqual(["Delia", "Trevor"]);
  });

  it("skips a truncated line", () => {
    expect(parseVoiceCatalog('{"name":"Delia","language":"en"}\n{"name":')).toEqual(["Delia"]);
  });
});

describe("model asset URLs", () => {
  it("puts the proxy root under the environment that serves it", () => {
    expect(modelAssetBase("http://127.0.0.1:1338/")).toBe("http://127.0.0.1:1338/v1/audio/model/");
  });

  it("resolves the catalog through the same proxy", () => {
    expect(voiceCatalogUrl("")).toMatch(/^\/v1\/audio\/model\/gradium\/phonon-voices\/resolve\//);
  });

  it("sends a pinned Hub file to the environment and leaves other URLs alone", () => {
    expect(
      rewriteModelUrl(
        "https://huggingface.co/blixt/phonon-31m-en-webgpu/resolve/abc/phonon-31m-en.int8.bin",
        "http://127.0.0.1:1338/v1/audio/model/",
      ),
    ).toBe(
      "http://127.0.0.1:1338/v1/audio/model/blixt/phonon-31m-en-webgpu/resolve/abc/phonon-31m-en.int8.bin",
    );
    expect(rewriteModelUrl("https://example.com/model.bin", "/v1/audio/model/")).toBeNull();
  });
});
