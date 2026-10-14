import { AuthOrchestrationReadScope, EnvironmentHttpApi } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as HttpApiBuilder from "effect/http-api/HttpApiBuilder";
import { HttpClient, HttpClientRequest } from "effect/http";

import {
  annotateEnvironmentRequest,
  failEnvironmentInternal,
  requireEnvironmentScope,
} from "../auth/http.ts";
import { TTS_UPSTREAM_MODEL, ttsUpstreamPath } from "./upstream.ts";

/**
 * Synthesizes assistant-message speech through the environment's own origin so
 * remote and mobile clients never need the host's loopback port. Compressed
 * Ogg Opus keeps the response small over a relay.
 */
export const layer = HttpApiBuilder.group(
  EnvironmentHttpApi,
  "tts",
  Effect.fnUntraced(function* (handlers) {
    return handlers.handle(
      "speech",
      Effect.fn("environment.tts.speech")(function* (args) {
        yield* annotateEnvironmentRequest(args.endpoint.name);
        yield* requireEnvironmentScope(AuthOrchestrationReadScope);

        return yield* Effect.gen(function* () {
          const httpClient = HttpClient.withScope(yield* HttpClient.HttpClient);
          const upstream = yield* HttpClientRequest.post(ttsUpstreamPath("/v1/audio/speech")).pipe(
            // Stream the audio straight through; never let an encoding layer buffer it.
            HttpClientRequest.setHeaders({ "accept-encoding": "identity" }),
            HttpClientRequest.bodyJson({
              model: TTS_UPSTREAM_MODEL,
              input: args.payload.text,
              response_format: "opus",
              ...(args.payload.voice === undefined ? {} : { voice: args.payload.voice }),
              ...(args.payload.speed === undefined ? {} : { speed: args.payload.speed }),
            }),
          );
          const response = yield* httpClient.execute(upstream);
          if (response.status !== 200) {
            return yield* failEnvironmentInternal(
              "tts_synthesis_failed",
              new Error(`TTS upstream returned ${response.status}.`),
            );
          }
          return new Uint8Array(yield* response.arrayBuffer);
        }).pipe(
          Effect.catchTags({
            HttpClientError: (cause) => failEnvironmentInternal("tts_synthesis_failed", cause),
            HttpBodyError: (cause) => failEnvironmentInternal("tts_synthesis_failed", cause),
          }),
        );
      }),
    );
  }),
);
