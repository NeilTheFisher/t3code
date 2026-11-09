/**
 * Phonon's model files, fetched once from the upstream Hub and kept on disk so
 * every client of this environment downloads them from this server instead. A
 * browser asks for `/v1/audio/model/<repo>/resolve/<revision>/<file>`, the same
 * path shape the upstream uses, so the pinned revision still keys the cache.
 */
// @effect-diagnostics nodeBuiltinImport:off - a request-scoped cache key needs no Effect service.
import * as NodeCrypto from "node:crypto";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as FileSystem from "effect/FileSystem";
import { HttpClient, HttpClientRequest } from "effect/http";
import * as Path from "effect/Path";
import * as Stream from "effect/Stream";

const UPSTREAM_ORIGIN = "https://huggingface.co";

// A segment that cannot contain a separator, `..`, or an encoded byte.
const SEGMENT = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;

export interface TtsModelAsset {
  readonly segments: readonly string[];
  readonly upstreamUrl: string;
  readonly contentType: string;
}

function contentTypeFor(file: string): string {
  if (file.endsWith(".json") || file.endsWith(".jsonl")) return "application/json";
  if (file.endsWith(".wasm")) return "application/wasm";
  return "application/octet-stream";
}

/** Map a request path below the proxy to an upstream URL and its cache segments. */
export function resolveTtsModelAsset(requestPath: string): TtsModelAsset | null {
  const segments = requestPath.split("/").filter((segment) => segment.length > 0);
  const file = segments.at(-1);
  if (file === undefined || !segments.every((segment) => SEGMENT.test(segment))) return null;
  return {
    segments,
    upstreamUrl: `${UPSTREAM_ORIGIN}/${segments.join("/")}`,
    contentType: contentTypeFor(file),
  };
}

/** The cached file, downloading it first if this environment has not seen it. */
export const ensureTtsModelAsset = Effect.fn("TtsModelAsset.ensure")(function* (
  asset: TtsModelAsset,
  cacheDir: string,
) {
  const fs = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const http = yield* HttpClient.HttpClient;
  const file = path.join(cacheDir, ...asset.segments);

  const cached = yield* fs.stat(file).pipe(
    Effect.map((info) => info.type === "File" && Number(info.size) > 0),
    Effect.orElseSucceed(() => false),
  );
  if (cached) return file;

  yield* fs.makeDirectory(path.dirname(file), { recursive: true });
  // A unique partial name keeps two simultaneous readers from tearing each
  // other's file; the rename is what makes the asset visible.
  const partial = `${file}.${NodeCrypto.randomUUID()}.part`;
  return yield* Effect.gen(function* () {
    const response = yield* http.execute(HttpClientRequest.get(asset.upstreamUrl));
    if (response.status !== 200) return undefined;
    yield* response.stream.pipe(Stream.run(fs.sink(partial, { flag: "w" })));
    yield* fs.rename(partial, file);
    return file;
  }).pipe(
    Effect.onExit((exit) =>
      Exit.isSuccess(exit) ? Effect.void : fs.remove(partial, { force: true }).pipe(Effect.ignore),
    ),
    Effect.orElseSucceed(() => undefined),
  );
});
