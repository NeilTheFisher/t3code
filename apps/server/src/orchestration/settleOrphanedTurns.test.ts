import * as NodeServices from "@effect/platform-node/NodeServices";
import {
  DEFAULT_MODEL,
  DEFAULT_PROVIDER_INTERACTION_MODE,
  type OrchestrationCommand,
  type OrchestrationSession,
  type OrchestrationShellSnapshot,
  type OrchestrationThreadShell,
  ProjectId,
  ProviderInstanceId,
  ThreadId,
  TurnId,
} from "@t3tools/contracts";
import { assert, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as Ref from "effect/Ref";
import * as Stream from "effect/Stream";

import * as OrchestrationEngine from "./Services/OrchestrationEngine.ts";
import * as ProjectionSnapshotQuery from "./Services/ProjectionSnapshotQuery.ts";
import { isOrphanedRunningThreadShell, settleOrphanedRunningTurns } from "./settleOrphanedTurns.ts";

const NOW = "2026-07-17T18:54:00.000Z";

const makeShell = (input: {
  readonly id: string;
  readonly sessionStatus?: OrchestrationSession["status"];
  readonly activeTurnId?: string | null;
  readonly latestTurnState?: "running" | "interrupted" | "completed" | "error";
  readonly archivedAt?: string | null;
}): OrchestrationThreadShell => ({
  id: ThreadId.make(input.id),
  projectId: ProjectId.make("project-1"),
  title: `Thread ${input.id}`,
  modelSelection: { instanceId: ProviderInstanceId.make("codex"), model: DEFAULT_MODEL },
  runtimeMode: "full-access",
  interactionMode: DEFAULT_PROVIDER_INTERACTION_MODE,
  branch: null,
  worktreePath: null,
  latestTurn:
    input.latestTurnState === undefined
      ? null
      : {
          turnId: TurnId.make(`turn-${input.id}`),
          state: input.latestTurnState,
          requestedAt: NOW,
          startedAt: NOW,
          completedAt: input.latestTurnState === "running" ? null : NOW,
          assistantMessageId: null,
        },
  createdAt: NOW,
  updatedAt: NOW,
  archivedAt: input.archivedAt ?? null,
  session:
    input.sessionStatus === undefined
      ? null
      : {
          threadId: ThreadId.make(input.id),
          status: input.sessionStatus,
          providerName: "codex",
          providerInstanceId: ProviderInstanceId.make("codex"),
          runtimeMode: "full-access",
          activeTurnId:
            input.activeTurnId === undefined || input.activeTurnId === null
              ? null
              : TurnId.make(input.activeTurnId),
          lastError: null,
          updatedAt: NOW,
        },
  latestUserMessageAt: null,
  hasPendingApprovals: false,
  hasPendingUserInput: false,
  hasActionableProposedPlan: false,
});

const makeSnapshot = (
  threads: ReadonlyArray<OrchestrationThreadShell>,
): OrchestrationShellSnapshot => ({
  snapshotSequence: 0,
  projects: [],
  threads,
  updatedAt: NOW,
});

const provideStubs =
  (input: {
    readonly active: ReadonlyArray<OrchestrationThreadShell>;
    readonly archived?: ReadonlyArray<OrchestrationThreadShell>;
    readonly dispatched: Ref.Ref<ReadonlyArray<OrchestrationCommand>>;
    readonly failDispatchForThreadId?: string;
  }) =>
  <A, E, R>(effect: Effect.Effect<A, E, R>) =>
    effect.pipe(
      Effect.provideService(ProjectionSnapshotQuery.ProjectionSnapshotQuery, {
        getCommandReadModel: () => Effect.die("unused"),
        getSnapshot: () => Effect.die("unused"),
        getShellSnapshot: () => Effect.succeed(makeSnapshot(input.active)),
        getArchivedShellSnapshot: () => Effect.succeed(makeSnapshot(input.archived ?? [])),
        getSnapshotSequence: () => Effect.die("unused"),
        getCounts: () => Effect.die("unused"),
        getActiveProjectByWorkspaceRoot: () => Effect.succeed(Option.none()),
        getProjectShellById: () => Effect.die("unused"),
        getFirstActiveThreadIdByProjectId: () => Effect.succeed(Option.none()),
        getThreadCheckpointContext: () => Effect.succeed(Option.none()),
        getFullThreadDiffContext: () => Effect.succeed(Option.none()),
        getThreadShellById: () => Effect.die("unused"),
        getThreadDetailById: () => Effect.die("unused"),
        getThreadDetailSnapshot: () => Effect.die("unused"),
        getThreadActivitiesPage: () => Effect.die("unused"),
      } as never),
      Effect.provideService(OrchestrationEngine.OrchestrationEngineService, {
        readEvents: () => Stream.empty,
        dispatch: (command) =>
          "threadId" in command && command.threadId === input.failDispatchForThreadId
            ? Effect.die("dispatch failed")
            : Ref.update(input.dispatched, (calls) => [...calls, command]).pipe(
                Effect.as({ sequence: 1 }),
              ),
        streamDomainEvents: Stream.empty,
      } satisfies OrchestrationEngine.OrchestrationEngineService["Service"]),
      Effect.provide(NodeServices.layer),
    );

it.effect("settles running turns whose sessions died with the previous process", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const stuck = makeShell({
      id: "stuck-thread",
      sessionStatus: "running",
      activeTurnId: "turn-stuck-thread",
      latestTurnState: "running",
    });
    const idle = makeShell({
      id: "idle-thread",
      sessionStatus: "ready",
      latestTurnState: "completed",
    });
    const noSession = makeShell({ id: "no-session-thread" });

    const settledCount = yield* settleOrphanedRunningTurns.pipe(
      provideStubs({ active: [stuck, idle, noSession], dispatched }),
    );

    assert.equal(settledCount, 1);
    const commands = yield* Ref.get(dispatched);
    assert.equal(commands.length, 1);
    const command = commands[0];
    assert.ok(command !== undefined && command.type === "thread.session.set");
    if (command !== undefined && command.type === "thread.session.set") {
      assert.equal(command.threadId, "stuck-thread");
      assert.equal(command.session.status, "interrupted");
      assert.equal(command.session.activeTurnId, null);
      assert.equal(command.session.providerName, "codex");
      assert.equal(command.session.providerInstanceId, "codex");
      assert.equal(command.session.lastError, "Server restarted while the turn was running");
    }
  }),
);

it.effect("settles a starting session and a running latest turn without a session", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const starting = makeShell({ id: "starting-thread", sessionStatus: "starting" });
    const orphanTurnOnly = makeShell({ id: "orphan-turn-thread", latestTurnState: "running" });

    const settledCount = yield* settleOrphanedRunningTurns.pipe(
      provideStubs({ active: [starting, orphanTurnOnly], dispatched }),
    );

    assert.equal(settledCount, 2);
    const commands = yield* Ref.get(dispatched);
    assert.deepStrictEqual(
      commands.map((command) => ("threadId" in command ? String(command.threadId) : null)),
      ["starting-thread", "orphan-turn-thread"],
    );
    const orphanCommand = commands[1];
    if (orphanCommand !== undefined && orphanCommand.type === "thread.session.set") {
      // Threads without a persisted session fall back to the thread runtime mode.
      assert.equal(orphanCommand.session.providerName, null);
      assert.equal(orphanCommand.session.runtimeMode, "full-access");
    }
  }),
);

it.effect("includes archived threads and keeps going when one dispatch fails", () =>
  Effect.gen(function* () {
    const dispatched = yield* Ref.make<ReadonlyArray<OrchestrationCommand>>([]);
    const failing = makeShell({ id: "failing-thread", sessionStatus: "running" });
    const archivedStuck = makeShell({
      id: "archived-thread",
      sessionStatus: "running",
      archivedAt: NOW,
    });

    const settledCount = yield* settleOrphanedRunningTurns.pipe(
      provideStubs({
        active: [failing],
        archived: [archivedStuck],
        dispatched,
        failDispatchForThreadId: "failing-thread",
      }),
    );

    assert.equal(settledCount, 1);
    const commands = yield* Ref.get(dispatched);
    assert.equal(commands.length, 1);
    assert.ok(commands[0] !== undefined && "threadId" in commands[0]);
  }),
);

it("classifies orphaned running thread shells", () => {
  assert.isTrue(isOrphanedRunningThreadShell(makeShell({ id: "a", sessionStatus: "running" })));
  assert.isTrue(isOrphanedRunningThreadShell(makeShell({ id: "b", sessionStatus: "starting" })));
  assert.isTrue(isOrphanedRunningThreadShell(makeShell({ id: "c", latestTurnState: "running" })));
  assert.isFalse(
    isOrphanedRunningThreadShell(
      makeShell({ id: "d", sessionStatus: "ready", latestTurnState: "completed" }),
    ),
  );
  assert.isFalse(isOrphanedRunningThreadShell(makeShell({ id: "e" })));
});
