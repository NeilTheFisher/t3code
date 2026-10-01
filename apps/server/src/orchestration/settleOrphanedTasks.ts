/**
 * Startup pass that settles background tasks orphaned by a restart.
 *
 * A native background task (subagent, workflow member, monitor, shell) can
 * outlive the turn that launched it: the turn settles to "ready" while the
 * task keeps running, and the only row that would close it is the terminal
 * `task.completed` the provider emits when it finishes. A server restart
 * kills the provider process, so that row never arrives and the task's
 * projection row keeps its last status — the Agents surface shows it as
 * "Working" forever (upstream issue #13400).
 *
 * The graceful-stop path settles each provider's still-live child tasks
 * before the process exits. This pass is the crash-proof backstop: before
 * any provider reactor starts — so nothing can be genuinely live yet —
 * every task whose newest persisted row is still active is settled with a
 * terminal `task.completed` carrying status "stopped" (the client fold
 * maps that to "interrupted"). The row reuses the task's own payload, so
 * its classification (agentKind) and linkage are preserved.
 *
 * Idle tasks are deliberately left alone: the fold treats "idle" as a
 * resumable nonterminal state (a Codex child can be resumed), so settling
 * it would erase that.
 */
import { CommandId, EventId } from "@t3tools/contracts";
import * as Crypto from "effect/Crypto";
import * as DateTime from "effect/DateTime";
import * as Effect from "effect/Effect";

import { ProjectionThreadActivityRepository } from "../persistence/Services/ProjectionThreadActivities.ts";
import { OrchestrationEngineService } from "./Services/OrchestrationEngine.ts";

/** Statuses the client fold treats as live work. An absent status folds to
 * "running"; "idle" is excluded because it is resumable, not orphaned. */
const ACTIVE_TASK_STATUSES: ReadonlySet<string> = new Set(["pending", "running", "waiting"]);

const isOpenTaskActivity = (kind: string, payload: Record<string, unknown>): boolean => {
  if (kind === "task.completed") {
    return false;
  }
  const status = payload.status;
  if (status === undefined) {
    return true;
  }
  return typeof status === "string" && ACTIVE_TASK_STATUSES.has(status);
};

/**
 * Settle every background task left open by a restart.
 *
 * @returns the number of tasks that were settled.
 */
export const settleOrphanedBackgroundTasks = Effect.gen(function* () {
  const crypto = yield* Crypto.Crypto;
  const repository = yield* ProjectionThreadActivityRepository;
  const orchestrationEngine = yield* OrchestrationEngineService;

  const rows = yield* repository.listLatestTaskActivities();
  let settledCount = 0;

  for (const row of rows) {
    const payload = row.payload;
    if (typeof payload !== "object" || payload === null) {
      continue;
    }
    const record = payload as Record<string, unknown>;
    const taskId = record.taskId;
    if (typeof taskId !== "string" || taskId.length === 0) {
      continue;
    }
    if (!isOpenTaskActivity(row.kind, record)) {
      continue;
    }

    const now = DateTime.formatIso(yield* DateTime.now);
    const settled = yield* orchestrationEngine
      .dispatch({
        type: "thread.activity.append",
        commandId: CommandId.make(yield* crypto.randomUUIDv4),
        threadId: row.threadId,
        activity: {
          // Stable per (thread, task): re-running the pass upserts the same
          // row instead of stacking duplicates.
          id: EventId.make(`task-settle:${row.threadId}:${taskId}`),
          tone: "info",
          kind: "task.completed",
          summary: "Task stopped",
          payload: { ...record, status: "stopped" },
          turnId: null,
          createdAt: now,
        },
        createdAt: now,
      })
      .pipe(
        Effect.as(true),
        Effect.catchCause((cause) =>
          Effect.logWarning("orchestration.orphaned-task.settle-failed", {
            threadId: row.threadId,
            taskId,
            cause,
          }).pipe(Effect.as(false)),
        ),
      );
    if (settled) {
      settledCount += 1;
    }
  }

  if (settledCount > 0) {
    yield* Effect.logInfo("orchestration.orphaned-task.settled", {
      count: settledCount,
      reason: "server-restart",
    });
  }

  return settledCount;
});
