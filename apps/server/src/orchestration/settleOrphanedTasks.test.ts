import * as NodeServices from "@effect/platform-node/NodeServices";
import { EventId, type OrchestrationCommand, ThreadId } from "@t3tools/contracts";
import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import * as Stream from "effect/Stream";

import {
  ProjectionThreadActivityRepository,
  type ProjectionThreadActivity,
} from "../persistence/Services/ProjectionThreadActivities.ts";
import * as OrchestrationEngine from "./Services/OrchestrationEngine.ts";
import { settleOrphanedBackgroundTasks } from "./settleOrphanedTasks.ts";

const NOW = "2026-07-17T18:54:00.000Z";

const makeRow = (input: {
  readonly threadId: string;
  readonly kind: string;
  readonly taskId: string;
  readonly status?: string;
  readonly agentKind?: string;
}): ProjectionThreadActivity => ({
  activityId: EventId.make(`${input.threadId}-${input.taskId}-${input.kind}`),
  threadId: ThreadId.make(input.threadId),
  turnId: null,
  tone: "info",
  kind: input.kind,
  summary: "row",
  payload: {
    taskId: input.taskId,
    ...(input.status !== undefined ? { status: input.status } : {}),
    ...(input.agentKind !== undefined ? { agentKind: input.agentKind } : {}),
    taskType: "local_agent",
    title: "Backend migration",
    role: "general",
    toolUseId: "call_parent",
  },
  createdAt: NOW,
});

const provideStubs =
  (input: {
    readonly rows: ReadonlyArray<ProjectionThreadActivity>;
    readonly dispatched: Ref.Ref<ReadonlyArray<OrchestrationCommand>>;
    readonly failDispatchForTaskId?: string;
  }) =>
  <A, E, R>(effect: Effect.Effect<A, E, R>) =>
    effect.pipe(
      Effect.provideService(ProjectionThreadActivityRepository, {
        upsert: () => Effect.die("unused"),
        listByThreadId: () => Effect.die("unused"),
        listUserInputLifecycleByThreadId: () => Effect.die("unused"),
        getLatestTaskActivity: () => Effect.die("unused"),
        listLatestTaskActivities: () => Effect.succeed(input.rows),
        deleteByThreadId: () => Effect.die("unused"),
      } as never),
      Effect.provideService(OrchestrationEngine.OrchestrationEngineService, {
        readEvents: () => Stream.empty,
        readThreadEvents: () => Stream.empty,
        getThreadReplayStats: () => Effect.die("unused thread replay stats"),
        dispatch: (command) => {
          const taskId =
            command.type === "thread.activity.append"
              ? (command.activity.payload as { taskId?: string }).taskId
              : undefined;
          return taskId !== undefined && taskId === input.failDispatchForTaskId
            ? Effect.die("dispatch failed")
            : Ref.update(input.dispatched, (calls) => [...calls, command]).pipe(
                Effect.as({ sequence: 1 }),
              );
        },
        streamDomainEvents: Stream.empty,
        subscribeDomainEvents: Effect.succeed(Stream.empty),
        latestSequence: Effect.succeed(0),
      } satisfies OrchestrationEngine.OrchestrationEngineService["Service"]),
      Effect.provide(NodeServices.layer),
    );

it.effect("settles open tasks and leaves settled, idle, and terminal ones alone", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const rows = [
      makeRow({
        threadId: "thread-a",
        kind: "task.progress",
        taskId: "task-open",
        agentKind: "agent",
      }),
      makeRow({
        threadId: "thread-a",
        kind: "task.updated",
        taskId: "task-running",
        status: "running",
        agentKind: "agent",
      }),
      makeRow({
        threadId: "thread-a",
        kind: "task.updated",
        taskId: "task-idle",
        status: "idle",
      }),
      makeRow({
        threadId: "thread-b",
        kind: "task.updated",
        taskId: "task-completed-status",
        status: "completed",
      }),
      makeRow({
        threadId: "thread-b",
        kind: "task.completed",
        taskId: "task-terminal-row",
        status: "completed",
      }),
    ];

    const settledCount = yield* settleOrphanedBackgroundTasks.pipe(
      provideStubs({ rows, dispatched }),
    );

    assert.equal(settledCount, 2);
    const commands = yield* Ref.get(dispatched);
    assert.deepStrictEqual(
      commands.map((command) =>
        command.type === "thread.activity.append"
          ? (command.activity.payload as { taskId: string }).taskId
          : null,
      ),
      ["task-open", "task-running"],
    );

    const first = commands[0];
    assert.ok(first !== undefined && first.type === "thread.activity.append");
    if (first !== undefined && first.type === "thread.activity.append") {
      assert.equal(first.activity.kind, "task.completed");
      assert.equal(first.activity.summary, "Task stopped");
      assert.equal(first.activity.id, "task-settle:thread-a:task-open");
      const payload = first.activity.payload as Record<string, unknown>;
      assert.equal(payload.status, "stopped");
      // The task's own payload is preserved so classification survives.
      assert.equal(payload.agentKind, "agent");
      assert.equal(payload.taskType, "local_agent");
      assert.equal(payload.toolUseId, "call_parent");
    }
  }),
);

it.effect("keeps going when one task fails to settle", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const rows = [
      makeRow({
        threadId: "thread-a",
        kind: "task.progress",
        taskId: "task-fails",
      }),
      makeRow({
        threadId: "thread-a",
        kind: "task.progress",
        taskId: "task-succeeds",
      }),
    ];

    const settledCount = yield* settleOrphanedBackgroundTasks.pipe(
      provideStubs({ rows, dispatched, failDispatchForTaskId: "task-fails" }),
    );

    assert.equal(settledCount, 1);
    const commands = yield* Ref.get(dispatched);
    assert.equal(commands.length, 1);
    const command = commands[0];
    assert.ok(command !== undefined && command.type === "thread.activity.append");
    if (command !== undefined && command.type === "thread.activity.append") {
      assert.equal((command.activity.payload as { taskId: string }).taskId, "task-succeeds");
    }
  }),
);

it.effect("ignores rows without a usable task id", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const rows = [
      {
        activityId: EventId.make("no-task"),
        threadId: ThreadId.make("thread-a"),
        turnId: null,
        tone: "info" as const,
        kind: "task.progress",
        summary: "row",
        payload: { status: "running" },
        createdAt: NOW,
      },
    ];

    const settledCount = yield* settleOrphanedBackgroundTasks.pipe(
      provideStubs({ rows, dispatched }),
    );

    assert.equal(settledCount, 0);
    assert.equal((yield* Ref.get(dispatched)).length, 0);
  }),
);

it.effect("derives a stable per-task activity id", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const row = makeRow({ threadId: "thread-a", kind: "task.progress", taskId: "task-open" });
    yield* settleOrphanedBackgroundTasks.pipe(provideStubs({ rows: [row], dispatched }));
    const commands = yield* Ref.get(dispatched);
    const id =
      commands[0] !== undefined && commands[0].type === "thread.activity.append"
        ? commands[0].activity.id
        : null;
    assert.equal(id, "task-settle:thread-a:task-open");
  }),
);
