/**
 * Phonon's prebuilt engine, served from the environment so a client WebView can
 * import it beside the model files. The bundle loads its CPU worker and
 * WebAssembly by paths relative to itself, so the files must stay together and
 * reach the browser under one prefix.
 */
// @effect-diagnostics nodeBuiltinImport:off - a static asset reader needs no Effect service.
import * as NodeFS from "node:fs";
import * as NodeModule from "node:module";
import * as NodePath from "node:path";

export const PHONON_ENGINE_PREFIX = "/v1/audio/engine";

const CONTENT_TYPES: Record<string, string> = {
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".wasm": "application/wasm",
  ".json": "application/json",
  ".map": "application/json",
};

let cachedDistDir: string | null | undefined;

function phononDistDir(): string | null {
  if (cachedDistDir !== undefined) return cachedDistDir;
  try {
    const require = NodeModule.createRequire(import.meta.url);
    cachedDistDir = NodePath.dirname(require.resolve("phonon-webgpu"));
  } catch {
    cachedDistDir = null;
  }
  return cachedDistDir;
}

export interface PhononEngineAsset {
  readonly body: Uint8Array;
  readonly contentType: string;
}

/** One engine file by its path below the prefix, or null for anything else. */
export function readPhononEngineAsset(pathname: string): PhononEngineAsset | null {
  const distDir = phononDistDir();
  if (distDir === null) return null;
  const relative = pathname.replace(/^\/+/, "");
  if (relative.length === 0) return null;
  const file = NodePath.resolve(distDir, relative);
  // Resolve-then-check: a request cannot climb out of the package's dist.
  if (!file.startsWith(`${distDir}${NodePath.sep}`)) return null;
  try {
    return {
      body: NodeFS.readFileSync(file),
      contentType: CONTENT_TYPES[NodePath.extname(file)] ?? "application/octet-stream",
    };
  } catch {
    return null;
  }
}
