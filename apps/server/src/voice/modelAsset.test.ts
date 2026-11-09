import { describe, expect, it } from "vite-plus/test";

import { resolveTtsModelAsset } from "./modelAsset.ts";

describe("resolveTtsModelAsset", () => {
  it("maps the upstream path shape to the pinned Hub file", () => {
    expect(
      resolveTtsModelAsset("blixt/phonon-31m-en-webgpu/resolve/abc123/phonon-31m-en.int8.bin"),
    ).toEqual({
      segments: ["blixt", "phonon-31m-en-webgpu", "resolve", "abc123", "phonon-31m-en.int8.bin"],
      upstreamUrl:
        "https://huggingface.co/blixt/phonon-31m-en-webgpu/resolve/abc123/phonon-31m-en.int8.bin",
      contentType: "application/octet-stream",
    });
  });

  it("serves the catalog and the tokenizer as JSON", () => {
    expect(
      resolveTtsModelAsset("gradium/phonon-voices/resolve/abc/voices.jsonl")?.contentType,
    ).toBe("application/json");
    expect(resolveTtsModelAsset("gradium/x/resolve/abc/tokenizer.5.0.0.json")?.contentType).toBe(
      "application/json",
    );
  });

  it("refuses to climb out of the cache or to change the upstream host", () => {
    expect(resolveTtsModelAsset("../secrets")).toBeNull();
    expect(resolveTtsModelAsset("blixt/../../etc/passwd")).toBeNull();
    expect(resolveTtsModelAsset("")).toBeNull();
    expect(resolveTtsModelAsset("/")).toBeNull();
    expect(resolveTtsModelAsset("blixt/honon//x")).not.toBeNull();
    expect(resolveTtsModelAsset("blixt/some repo/file")).toBeNull();
  });
});
