/**
 * Startup pass that settles orphaned running turns.
 *
 * When the server restarts while a turn is running, the provider session dies
 * with the process, so the event that would have settled the turn
 * (`thread.session-set` leaving the "running" status) is never emitted. The
 * projections then keep the turn/session in a "running" state forever and the
 * web UI shows a perpetual "Working" pill (upstream issue #917).
 *
 * On boot — before the provider reactors start — every thread whose persisted
 * session status is still "starting"/"running", or whose latest turn is still
 * "running", gets a `thread.session.set` command with status "interrupted"
 * dispatched through the normal engine pipeline. The projector and projection
 * pipeline both treat a session leaving "running" as the authoritative
 * turn-end signal, so projections and connected clients settle the turn as
 * "interrupted".
 *
 * This deliberately does NOT touch provider resume state
 * (`ProviderSessionDirectory` bindings / resume cursors), so a thread can
 * still be recovered via `recoverSessionForThread` and continue with a new
 * turn afterwards.
 */
import { CommandId, type OrchestrationThreadShell } from "@t3tools/contracts";
import * as Crypto from "effect/Crypto";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";

import { OrchestrationEngineService } from "./Services/OrchestrationEngine.ts";
import { ProjectionSnapshotQuery } from "./Services/ProjectionSnapshotQuery.ts";

const ORPHANED_TURN_LAST_ERROR = "Server restarted while the turn was running";

export const isOrphanedRunningThreadShell = (thread: OrchestrationThreadShell): boolean => {
  const sessionRunning =
    thread.session !== null &&
    (thread.session.status === "starting" || thread.session.status === "running");
  const turnRunning = thread.latestTurn !== null && thread.latestTurn.state === "running";
  return sessionRunning || turnRunning;
};

/**
 * Settle every orphaned running turn found in the projection snapshot.
 *
 * @returns the number of threads that were settled.
 */
export const settleOrphanedRunningTurns = Effect.gen(function* () {
  const crypto = yield* Crypto.Crypto;
  const projectionSnapshotQuery = yield* ProjectionSnapshotQuery;
  const orchestrationEngine = yield* OrchestrationEngineService;

  const activeSnapshot = yield* projectionSnapshotQuery.getShellSnapshot();
  const archivedSnapshot = yield* projectionSnapshotQuery.getArchivedShellSnapshot();
  const orphanedThreads = [...activeSnapshot.threads, ...archivedSnapshot.threads].filter(
    isOrphanedRunningThreadShell,
  );

  let settledCount = 0;
  for (const thread of orphanedThreads) {
    const now = DateTime.formatIso(yield* DateTime.now);
    const settled = yield* orchestrationEngine
      .dispatch({
        type: "thread.session.set",
        commandId: CommandId.make(yield* crypto.randomUUIDv4),
        threadId: thread.id,
        session: {
          threadId: thread.id,
          status: "interrupted",
          providerName: thread.session?.providerName ?? null,
          ...(thread.session?.providerInstanceId !== undefined
            ? { providerInstanceId: thread.session.providerInstanceId }
            : {}),
          runtimeMode: thread.session?.runtimeMode ?? thread.runtimeMode,
          activeTurnId: null,
          lastError: ORPHANED_TURN_LAST_ERROR,
          updatedAt: now,
        },
        createdAt: now,
      })
      .pipe(
        Effect.as(true),
        Effect.catchCause((cause) =>
          Effect.logWarning("orchestration.orphaned-turn.settle-failed", {
            threadId: thread.id,
            cause,
          }).pipe(Effect.as(false)),
        ),
      );
    if (settled) {
      settledCount += 1;
      yield* Effect.logInfo("orchestration.orphaned-turn.settled", {
        threadId: thread.id,
        turnId: thread.latestTurn?.turnId ?? thread.session?.activeTurnId ?? null,
        reason: "server-restart",
      });
    }
  }

  return settledCount;
});
