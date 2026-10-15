import { type TtsSpeechInput } from "@t3tools/contracts";
import * as Context from "effect/Context";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as SubscriptionRef from "effect/SubscriptionRef";
import { HttpClient } from "effect/http";
import { Atom } from "effect/reactivity";

import * as RemoteEnvironmentAuthorization from "../authorization/service.ts";
import type { PreparedConnection } from "../connection/model.ts";
import * as EnvironmentRegistry from "../connection/registry.ts";
import * as EnvironmentSupervisor from "../connection/supervisor.ts";
import * as ManagedRelay from "../relay/managedRelay.ts";
import { type RemoteEnvironmentRequestError } from "../rpc/http.ts";
import { executeAuthenticatedEnvironmentHttpRequest } from "./environmentHttpAuth.ts";
import { createEnvironmentCommand } from "./runtime.ts";

// A synthesis request is one sentence and the server is normally warm, so a long
// wait only turns a stalled request into an apparent infinite spinner.
const DEFAULT_TTS_TIMEOUT_MS = 30_000;

export const fetchEnvironmentTtsSpeech = Effect.fn("clientRuntime.state.fetchEnvironmentTtsSpeech")(
  function* (input: {
    readonly prepared: PreparedConnection;
    readonly speech: TtsSpeechInput;
    readonly signer: Option.Option<ManagedRelay.ManagedRelayDpopSigner["Service"]>;
    readonly remoteAuthorization?: Option.Option<
      RemoteEnvironmentAuthorization.RemoteEnvironmentAuthorization["Service"]
    >;
    readonly timeoutMs?: number;
  }) {
    return yield* executeAuthenticatedEnvironmentHttpRequest({
      ...input,
      group: "tts",
      method: "POST",
      url: (urls) => urls.speech(),
      timeoutMs: input.timeoutMs ?? DEFAULT_TTS_TIMEOUT_MS,
      request: ({ client, headers }) => client.speech({ payload: input.speech, headers }),
    });
  },
);

/**
 * Synthesizes speech through the environment's HTTP origin, decoupling callers
 * from the underlying HTTP + DPoP details and from test contexts.
 */
export class TtsSpeechLoader extends Context.Service<
  TtsSpeechLoader,
  {
    readonly load: (
      prepared: PreparedConnection,
      speech: TtsSpeechInput,
    ) => Effect.Effect<Uint8Array, RemoteEnvironmentRequestError>;
  }
>()("@t3tools/client-runtime/state/ttsSpeech/TtsSpeechLoader") {}

export const layer: Layer.Layer<TtsSpeechLoader, never, HttpClient.HttpClient> = Layer.effect(
  TtsSpeechLoader,
  Effect.gen(function* () {
    const httpClient = yield* HttpClient.HttpClient;
    const signer = yield* Effect.serviceOption(ManagedRelay.ManagedRelayDpopSigner);
    const remoteAuthorization = yield* Effect.serviceOption(
      RemoteEnvironmentAuthorization.RemoteEnvironmentAuthorization,
    );
    return TtsSpeechLoader.of({
      load: (prepared, speech) =>
        fetchEnvironmentTtsSpeech({ prepared, speech, signer, remoteAuthorization }).pipe(
          Effect.provideService(HttpClient.HttpClient, httpClient),
        ),
    });
  }),
);

export class TtsSpeechConnectionNotReadyError extends Data.TaggedError(
  "TtsSpeechConnectionNotReadyError",
)<{ readonly message: string }> {}

/** A press-to-play command: fetch one assistant message's Ogg Opus audio. */
export function createTtsSpeechCommand<R, ER>(
  runtime: Atom.AtomRuntime<EnvironmentRegistry.EnvironmentRegistry | TtsSpeechLoader | R, ER>,
) {
  return createEnvironmentCommand(runtime, {
    label: "tts:speech",
    execute: (speech: TtsSpeechInput) =>
      Effect.gen(function* () {
        const supervisor = yield* EnvironmentSupervisor.EnvironmentSupervisor;
        const loader = yield* TtsSpeechLoader;
        const prepared = yield* SubscriptionRef.get(supervisor.prepared);
        if (Option.isNone(prepared)) {
          return yield* new TtsSpeechConnectionNotReadyError({
            message: "The environment HTTP connection is not ready.",
          });
        }
        return yield* loader.load(prepared.value, speech);
      }),
  });
}
