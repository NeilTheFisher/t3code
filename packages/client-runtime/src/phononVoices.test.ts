import { describe, expect, it } from "vite-plus/test";

import {
  PHONON_DEFAULT_VOICE,
  PHONON_FALLBACK_VOICES,
  parseVoiceCatalog,
  phononVoiceFor,
  voiceCatalogUrl,
} from "./phononVoices.ts";

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

describe("phononVoiceFor", () => {
  it("passes a catalog voice through verbatim", () => {
    expect(phononVoiceFor("Trevor")).toBe("Trevor");
    expect(phononVoiceFor("  Delia ")).toBe("Delia");
  });

  it("uses the default for an empty or legacy Kokoro name", () => {
    expect(phononVoiceFor("  ")).toBe(PHONON_DEFAULT_VOICE);
    expect(phononVoiceFor("af_heart")).toBe(PHONON_DEFAULT_VOICE);
    expect(phononVoiceFor("am_michael")).toBe(PHONON_DEFAULT_VOICE);
  });
});

describe("voice catalog URL", () => {
  it("resolves the pinned catalog through the environment's proxy", () => {
    const url = voiceCatalogUrl("http://127.0.0.1:1338/");
    expect(url).toBe(
      "http://127.0.0.1:1338/v1/audio/model/gradium/phonon-voices/resolve/0ee17205f254b5abc43b266c8a0f215565c352f7/voices.jsonl",
    );
  });

  it("offers the default in the offline fallback and no Kokoro aliases", () => {
    expect(PHONON_FALLBACK_VOICES).toContain(PHONON_DEFAULT_VOICE);
    expect(PHONON_FALLBACK_VOICES.some((voice) => /^(?:af|am|bf|bm)_/.test(voice))).toBe(false);
  });
});
