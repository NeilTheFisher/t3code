import {
  CommandId,
  EventId,
  MessageId,
  ProjectId,
  ProviderInstanceId,
  ThreadId,
  TurnId,
  type OrchestrationEvent,
  type OrchestrationReadModel,
} from "@t3tools/contracts";
import * as NodeServices from "@effect/platform-node/NodeServices";
import { expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";

import { decideOrchestrationCommand } from "./decider.ts";
import { createEmptyReadModel, projectEvent } from "./projector.ts";

const NOW = "2026-08-16T12:00:00.000Z";
const SOURCE_THREAD_ID = ThreadId.make("thread-source");
const FORK_THREAD_ID = ThreadId.make("thread-fork");
const FIRST_TURN_ID = TurnId.make("turn-1");
const SECOND_TURN_ID = TurnId.make("turn-2");
const SOURCE_MESSAGE_ID = MessageId.make("user-2");

type ForkedEvent = Omit<
  Extract<OrchestrationEvent, { readonly type: "thread.forked" }>,
  "sequence"
>;

function requireForkedEvent(value: unknown): ForkedEvent {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value) ||
    !("type" in value) ||
    value.type !== "thread.forked"
  ) {
    throw new Error("Expected one thread.forked event");
  }
  return value as ForkedEvent;
}

function seedReadModel(): OrchestrationReadModel {
  return {
    ...createEmptyReadModel(NOW),
    projects: [
      {
        id: ProjectId.make("project-1"),
        title: "Project",
        workspaceRoot: "/tmp/project",
        repositoryIdentity: null,
        defaultModelSelection: null,
        defaultThreadEnvMode: null,
        faviconPath: null,
        scripts: [],
        createdAt: NOW,
        updatedAt: NOW,
        deletedAt: null,
      },
    ],
    threads: [
      {
        id: SOURCE_THREAD_ID,
        projectId: ProjectId.make("project-1"),
        title: "Source thread",
        modelSelection: {
          instanceId: ProviderInstanceId.make("codex"),
          model: "gpt-5.4",
        },
        runtimeMode: "full-access",
        interactionMode: "default",
        branch: "main",
        worktreePath: "/tmp/project",
        latestTurn: {
          turnId: SECOND_TURN_ID,
          state: "completed",
          requestedAt: NOW,
          startedAt: NOW,
          completedAt: NOW,
          assistantMessageId: MessageId.make("assistant-2"),
        },
        createdAt: NOW,
        updatedAt: NOW,
        archivedAt: null,
        settledOverride: null,
        settledAt: null,
        snoozedUntil: null,
        snoozedAt: null,
        pinnedAt: null,
        pinOrderKey: null,
        titleRegeneration: null,
        deletedAt: null,
        messages: [
          {
            id: MessageId.make("user-1"),
            role: "user",
            text: "First question",
            attachments: [
              {
                type: "image",
                id: "thread-source-00000000-0000-4000-8000-000000000001",
                name: "context.png",
                mimeType: "image/png",
                sizeBytes: 5,
              },
            ],
            turnId: FIRST_TURN_ID,
            streaming: false,
            createdAt: NOW,
            updatedAt: NOW,
          },
          {
            id: MessageId.make("assistant-1"),
            role: "assistant",
            text: "First answer",
            attachments: [],
            turnId: FIRST_TURN_ID,
            streaming: false,
            createdAt: NOW,
            updatedAt: NOW,
          },
          {
            id: SOURCE_MESSAGE_ID,
            role: "user",
            text: "Try this with another model",
            attachments: [],
            turnId: SECOND_TURN_ID,
            streaming: false,
            createdAt: NOW,
            updatedAt: NOW,
          },
          {
            id: MessageId.make("assistant-2"),
            role: "assistant",
            text: "Original answer",
            attachments: [],
            turnId: SECOND_TURN_ID,
            streaming: false,
            createdAt: NOW,
            updatedAt: NOW,
          },
        ],
        proposedPlans: [],
        activities: [],
        hasMoreActivities: false,
        checkpoints: [],
        session: null,
      },
    ],
  };
}

it.layer(NodeServices.layer)("thread fork decider", (it) => {
  it.effect("forks before a user message with independent history and the selected model", () =>
    Effect.gen(function* () {
      const decided = yield* decideOrchestrationCommand({
        command: {
          type: "thread.fork",
          commandId: CommandId.make("command-fork"),
          threadId: FORK_THREAD_ID,
          sourceThreadId: SOURCE_THREAD_ID,
          sourceMessageId: SOURCE_MESSAGE_ID,
          title: "Source thread (fork)",
          modelSelection: {
            instanceId: ProviderInstanceId.make("claudeAgent"),
            model: "claude-opus-4-6",
          },
          createdAt: NOW,
        },
        readModel: seedReadModel(),
      });

      const forked = requireForkedEvent(decided);
      expect(forked.payload.modelSelection).toEqual({
        instanceId: "claudeAgent",
        model: "claude-opus-4-6",
      });
      expect(forked.payload.inheritedMessages.map((message) => message.text)).toEqual([
        "First question",
        "First answer",
      ]);
      expect(forked.payload.inheritedMessages[0]?.id).toBe("thread-fork:fork:0");
      expect(forked.payload.inheritedMessages[0]?.attachments?.[0]?.id).toBe(
        "thread-fork-00000000-0000-4000-8000-000000000001",
      );
    }),
  );

  it.effect("projects the fork as an independent thread with inherited history", () =>
    Effect.gen(function* () {
      const readModel = seedReadModel();
      const decided = yield* decideOrchestrationCommand({
        command: {
          type: "thread.fork",
          commandId: CommandId.make("command-project-fork"),
          threadId: FORK_THREAD_ID,
          sourceThreadId: SOURCE_THREAD_ID,
          sourceMessageId: SOURCE_MESSAGE_ID,
          title: "Source thread (fork)",
          modelSelection: {
            instanceId: ProviderInstanceId.make("claudeAgent"),
            model: "claude-opus-4-6",
          },
          createdAt: NOW,
        },
        readModel,
      });
      const forkedEvent = requireForkedEvent(decided);

      const projected = yield* projectEvent(readModel, {
        ...forkedEvent,
        eventId: EventId.make("event-fork"),
        sequence: 1,
      });
      const fork = projected.threads.find((thread) => thread.id === FORK_THREAD_ID);
      expect(fork?.messages.map((message) => message.text)).toEqual([
        "First question",
        "First answer",
      ]);
      expect(fork?.session).toBeNull();
      expect(
        projected.threads.find((thread) => thread.id === SOURCE_THREAD_ID)?.messages,
      ).toHaveLength(4);

      const reverted = yield* projectEvent(projected, {
        sequence: 2,
        eventId: EventId.make("event-fork-revert"),
        type: "thread.reverted",
        aggregateKind: "thread",
        aggregateId: FORK_THREAD_ID,
        occurredAt: NOW,
        commandId: CommandId.make("command-fork-revert"),
        causationEventId: null,
        correlationId: null,
        metadata: {},
        payload: {
          threadId: FORK_THREAD_ID,
          turnCount: 0,
        },
      });
      expect(
        reverted.threads
          .find((thread) => thread.id === FORK_THREAD_ID)
          ?.messages.map((message) => message.text),
      ).toEqual(["First question", "First answer"]);
    }),
  );
});
