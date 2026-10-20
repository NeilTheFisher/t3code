import * as NodeNet from "node:net";

import * as Clock from "effect/Clock";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Layer from "effect/Layer";
import * as Path from "effect/Path";
import * as Ref from "effect/Ref";
import * as Schema from "effect/Schema";
import { ChildProcess, ChildProcessSpawner } from "effect/process";

/**
 * The `paradee-tts` speech service, supervised by this server. `T3CODE_MANAGED_TTS=0`
 * disables it, `T3CODE_MANAGED_TTS_DIR` selects the checkout, `TTS_HOST`/`TTS_PORT`
 * the bind. An already-answering bind is adopted; otherwise it spawns, waits, and
 * respawns with backoff. Shutdown kills the child.
 */

export interface ManagedTtsConfig {
  readonly enabled: boolean;
  readonly directory: string;
  readonly python: string;
  readonly host: string;
  readonly port: number;
}

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 8880;
const HEALTH_POLL_MS = 500;
const HEALTH_TIMEOUT_MS = 120_000;
const MAX_BACKOFF_MS = 30_000;

/** Pure resolution so the env/dir layout is unit-testable without spawning. */
export function resolveManagedTtsConfig(env: NodeJS.ProcessEnv, cwd: string): ManagedTtsConfig {
  const directory = env.T3CODE_MANAGED_TTS_DIR ?? `${cwd}/paradee-tts`;
  const port = Number.parseInt(env.TTS_PORT ?? "", 10);
  return {
    enabled: env.T3CODE_MANAGED_TTS !== "0",
    directory,
    python: `${directory}/.venv/bin/python`,
    host: env.TTS_HOST ?? DEFAULT_HOST,
    port: Number.isFinite(port) && port > 0 ? port : DEFAULT_PORT,
  };
}

/** Milliseconds to wait before respawn attempt `attempt` (1-based). */
export function managedTtsBackoffMs(attempt: number): number {
  return Math.min(MAX_BACKOFF_MS, 1_000 * 2 ** Math.max(0, attempt - 1));
}

export class ManagedTtsSpawnError extends Schema.TaggedError<ManagedTtsSpawnError>()(
  "ManagedTtsSpawnError",
  {
    command: Schema.String,
    cause: Schema.Defect(),
  },
) {
  override get message(): string {
    return "Failed to spawn the managed TTS service process.";
  }
}

export class ManagedTtsHealthTimeoutError extends Schema.TaggedError<ManagedTtsHealthTimeoutError>()(
  "ManagedTtsHealthTimeoutError",
  {
    host: Schema.String,
    port: Schema.Number,
  },
) {
  override get message(): string {
    return "The managed TTS service did not accept connections in time.";
  }
}

const tcpProbe = (host: string, port: number): Effect.Effect<boolean> =>
  Effect.callback<boolean>((resume) => {
    const socket = NodeNet.connect(port, host);
    const done = (open: boolean) => {
      socket.destroy();
      resume(Effect.succeed(open));
    };
    socket.once("connect", () => done(true));
    socket.once("error", () => done(false));
    socket.setTimeout(1_000, () => done(false));
  });

const waitHealthy = Effect.fn("ManagedTts.waitHealthy")(function* (
  config: ManagedTtsConfig,
): Effect.fn.Return<void, ManagedTtsHealthTimeoutError> {
    const startedAt = yield* Clock.currentTimeMillis;
    const deadline = startedAt + HEALTH_TIMEOUT_MS;
    for (;;) {
      if (yield* tcpProbe(config.host, config.port)) return;
      if ((yield* Clock.currentTimeMillis) > deadline) {
        return yield* new ManagedTtsHealthTimeoutError({
          host: config.host,
          port: config.port,
        });
      }
      yield* Effect.sleep(`${HEALTH_POLL_MS} millis`);
    }
  });

const superviseOnce = (
  config: ManagedTtsConfig,
  spawner: ChildProcessSpawner.ChildProcessSpawner["Service"],
  attempt: number,
): Effect.Effect<void> =>
  Effect.scoped(
    Effect.acquireRelease(
      spawner
        .spawn(
          ChildProcess.make(config.python, ["server.py"], {
            cwd: config.directory,
            env: {
              ...process.env,
              TTS_HOST: config.host,
              TTS_PORT: String(config.port),
            },
            stdin: "ignore",
            stdout: "ignore",
            stderr: "inherit",
          }),
        )
        .pipe(
          Effect.mapError((cause) => new ManagedTtsSpawnError({ command: config.python, cause })),
        ),
      (child) =>
        child.kill({ killSignal: "SIGTERM", forceKillAfter: "5 seconds" }).pipe(Effect.ignore),
    ).pipe(
      Effect.flatMap((child) =>
        Effect.gen(function* () {
          yield* waitHealthy(config);
          yield* Effect.logInfo(
            `Managed TTS ready on ${config.host}:${config.port} (attempt ${attempt}).`,
          );
          yield* child.exitCode;
        }),
      ),
      Effect.catch((cause) =>
        Effect.logWarning("Managed TTS supervised process ended; backing off.", cause),
      ),
      Effect.asVoid,
    ),
  );

const supervise = Effect.fn("ManagedTts.supervise")(function* (
  config: ManagedTtsConfig,
  spawner: ChildProcessSpawner.ChildProcessSpawner["Service"],
): Effect.fn.Return<void> {
    if (yield* tcpProbe(config.host, config.port)) {
      yield* Effect.logInfo(
        `Managed TTS adopted an already-healthy service on ${config.host}:${config.port}.`,
      );
      return yield* Effect.void;
    }
    const attempts = yield* Ref.make(0);
    return yield* Effect.forever(
      Effect.flatMap(
        Ref.updateAndGet(attempts, (count) => count + 1),
        (attempt) =>
          Effect.andThen(
            superviseOnce(config, spawner, attempt),
            Effect.sleep(`${managedTtsBackoffMs(attempt)} millis`),
          ),
      ),
    );
  });

const make = Effect.gen(function* () {
  const config = resolveManagedTtsConfig(process.env, process.cwd());
  if (!config.enabled) {
    yield* Effect.logInfo("Managed TTS disabled by T3CODE_MANAGED_TTS=0.");
    return;
  }
  const fileSystem = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const serverScript = path.join(config.directory, "server.py");
  const [hasServer, hasPython] = yield* Effect.all(
    [serverScript, config.python].map((candidate) =>
      fileSystem.exists(candidate).pipe(Effect.orElseSucceed(() => false)),
    ),
  );
  if (!hasServer || !hasPython) {
    yield* Effect.logInfo(
      "Managed TTS skipped: no paradee-tts checkout with a venv python at the managed directory.",
    );
    return;
  }
  const spawner = yield* ChildProcessSpawner.ChildProcessSpawner;
  yield* Effect.forkScoped(supervise(config, spawner));
});

export const layerManagedTts = Layer.effectDiscard(make);
