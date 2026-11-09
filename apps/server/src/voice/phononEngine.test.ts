import { describe, expect, it } from "vite-plus/test";

import { readPhononEngineAsset } from "./phononEngine.ts";

describe("readPhononEngineAsset", () => {
  it("serves the engine bundle and its CPU worker with their real types", () => {
    const bundle = readPhononEngineAsset("phonon.js");
    expect(bundle?.contentType).toBe("text/javascript");
    expect(bundle?.body.byteLength).toBeGreaterThan(0);
    expect(readPhononEngineAsset("cpu/phonon-cpu-simd.wasm")?.contentType).toBe("application/wasm");
  });

  it("refuses to climb out of the package or to serve a missing file", () => {
    expect(readPhononEngineAsset("../package.json")).toBeNull();
    expect(readPhononEngineAsset("")).toBeNull();
    expect(readPhononEngineAsset("missing.js")).toBeNull();
  });
});
