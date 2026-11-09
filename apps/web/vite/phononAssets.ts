// Phonon ships a prebuilt ESM bundle whose CPU tier loads a worker and a
// WebAssembly module by paths relative to the chunk that imports them. Vite
// would rewrite those paths, so the files are served verbatim instead: same
// origin, under `<base>phonon/`, in dev and in the build.
// @effect-diagnostics nodeBuiltinImport:off - a Vite plugin has no Effect runtime.
import * as NodeFS from "node:fs";
import * as NodeModule from "node:module";
import * as NodePath from "node:path";
import type { Plugin } from "vite-plus";

/** URL prefix the browser imports the engine from, relative to the app base. */
const PHONON_ASSET_DIR = "phonon";

const CONTENT_TYPES: Record<string, string> = {
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".wasm": "application/wasm",
  ".json": "application/json",
  ".map": "application/json",
};

function resolveDistDir(): string {
  const require = NodeModule.createRequire(import.meta.url);
  return NodePath.dirname(require.resolve("phonon-webgpu"));
}

function readAsset(distDir: string, pathname: string): { body: Buffer; type: string } | null {
  const relative = pathname.replace(/^\/+/, "");
  if (relative.length === 0) return null;
  const file = NodePath.resolve(distDir, relative);
  // Resolve-then-check: a request cannot climb out of the package's dist.
  if (!file.startsWith(`${distDir}${NodePath.sep}`)) return null;
  try {
    const body = NodeFS.readFileSync(file, { flag: "r" });
    return { body, type: CONTENT_TYPES[NodePath.extname(file)] ?? "application/octet-stream" };
  } catch {
    // A missing file is not this middleware's request.
    return null;
  }
}

export function phononAssetsPlugin(): Plugin {
  const distDir = resolveDistDir();
  const prefix = `/${PHONON_ASSET_DIR}/`;
  let outDir = "dist";
  let base = "/";
  return {
    name: "t3:phonon-assets",
    configResolved(config) {
      outDir = NodePath.resolve(config.root, config.build.outDir);
      base = config.base;
    },
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const url = request.url ?? "";
        if (!url.startsWith(prefix) || request.method !== "GET") {
          next();
          return;
        }
        const asset = readAsset(distDir, url.slice(prefix.length).split("?")[0] ?? "");
        if (asset === null) {
          next();
          return;
        }
        response.setHeader("content-type", asset.type);
        response.setHeader("cache-control", "no-cache");
        response.end(asset.body);
      });
    },
    writeBundle() {
      const target = NodePath.join(outDir, base.replace(/^\/+|\/+$/g, ""), PHONON_ASSET_DIR);
      NodeFS.rmSync(target, { recursive: true, force: true });
      NodeFS.cpSync(distDir, target, { recursive: true });
    },
  };
}
