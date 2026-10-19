import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import { managedTtsBackoffMs, resolveManagedTtsConfig } from "./managedTts.ts";

it.effect("resolves managed TTS defaults from the working directory", () =>
  Effect.succeed(
    assert.deepStrictEqual(resolveManagedTtsConfig({}, "/srv/t3"), {
      enabled: true,
      directory: "/srv/t3/paradee-tts",
      python: "/srv/t3/paradee-tts/.venv/bin/python",
      host: "127.0.0.1",
      port: 8880,
    }),
  ),
);

it.effect("honors the managed TTS env overrides", () =>
  Effect.succeed(
    assert.deepStrictEqual(
      resolveManagedTtsConfig(
        {
          T3CODE_MANAGED_TTS: "0",
          T3CODE_MANAGED_TTS_DIR: "/opt/tts",
          TTS_HOST: "0.0.0.0",
          TTS_PORT: "9999",
        },
        "/srv/t3",
      ),
      {
        enabled: false,
        directory: "/opt/tts",
        python: "/opt/tts/.venv/bin/python",
        host: "0.0.0.0",
        port: 9999,
      },
    ),
  ),
);

it.effect("falls back to the default port on garbage input", () =>
  Effect.succeed(
    assert.strictEqual(resolveManagedTtsConfig({ TTS_PORT: "nope" }, "/srv/t3").port, 8880),
  ),
);

it.effect("backs off exponentially, capped at thirty seconds", () =>
  Effect.succeed(
    assert.deepStrictEqual(
      [1, 2, 3, 6, 10].map(managedTtsBackoffMs),
      [1_000, 2_000, 4_000, 30_000, 30_000],
    ),
  ),
);
