import { describe, expect, it } from "vite-plus/test";

import {
  modelAssetBase,
  nativeSpeedFor,
  parseVoiceCatalog,
  phononVoiceFor,
  resampleFactorFor,
  rewriteModelUrl,
  splitPauseDirective,
  voiceCatalogUrl,
} from "./phononModel";

describe("voice mapping", () => {
  it("passes a catalog voice through verbatim", () => {
    expect(phononVoiceFor("Trevor")).toBe("Trevor");
    expect(phononVoiceFor("  Delia ")).toBe("Delia");
  });

  it("uses the default for an empty or legacy Kokoro name", () => {
    expect(phononVoiceFor("  ")).toBe("Delia");
    expect(phononVoiceFor("af_heart")).toBe("Delia");
    expect(phononVoiceFor("am_michael")).toBe("Delia");
  });
});

describe("speed", () => {
  it("clamps the model's native range", () => {
    expect(nativeSpeedFor(1)).toBe(1);
    expect(nativeSpeedFor(1.5)).toBe(1.3);
    expect(nativeSpeedFor(0.75)).toBe(0.77);
    expect(nativeSpeedFor(Number.NaN)).toBe(1);
  });

  it("resamples only outside that range", () => {
    expect(resampleFactorFor(0.8)).toBe(1);
    expect(resampleFactorFor(1.3)).toBe(1);
    expect(resampleFactorFor(2)).toBeCloseTo(2 / 1.3);
    expect(resampleFactorFor(1.5)).toBeCloseTo(1.5 / 1.3);
    expect(resampleFactorFor(0.75)).toBeCloseTo(0.75 / 0.77);
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
