import { EventId, TurnId, type OrchestrationThreadActivity } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { deriveWorkLogEntries } from "./session-logic";

function makeActivity(
  id: string,
  overrides: Partial<OrchestrationThreadActivity> & { payload: unknown },
): OrchestrationThreadActivity {
  return {
    id: EventId.make(id),
    createdAt: "2026-07-17T10:00:00.000Z",
    kind: "tool.completed",
    summary: "Subagent task",
    tone: "tool",
    turnId: TurnId.make("turn-1"),
    ...overrides,
  } as OrchestrationThreadActivity;
}

describe("deriveWorkLogEntries subagent support", () => {
  it("exposes the subagent prompt and final report from a collab_agent_tool_call", () => {
    const [entry] = deriveWorkLogEntries([
      makeActivity("task-1", {
        payload: {
          itemType: "collab_agent_tool_call",
          detail: "Task: research the bug",
          data: {
            toolName: "Task",
            input: {
              prompt: "Find the root cause of the flaky test",
              description: "research the bug",
              subagent_type: "Explore",
            },
            result: {
              tool_use_id: "toolu_task_1",
              type: "tool_result",
              content: [{ type: "text", text: "Root cause: stale cache in setup." }],
              is_error: false,
            },
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      itemType: "collab_agent_tool_call",
      subagentPrompt: "[Explore] Find the root cause of the flaky test",
      subagentReport: "Root cause: stale cache in setup.",
    });
  });

  it("extracts a plain-string result content as the final report", () => {
    const [entry] = deriveWorkLogEntries([
      makeActivity("task-str", {
        payload: {
          itemType: "collab_agent_tool_call",
          data: {
            toolName: "Task",
            input: { description: "quick check" },
            result: { tool_use_id: "toolu_x", content: "All good." },
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      subagentPrompt: "quick check",
      subagentReport: "All good.",
    });
  });

  it("groups subagent.item activities under the parent entry and hides them top-level", () => {
    const entries = deriveWorkLogEntries([
      makeActivity("sub-1", {
        kind: "subagent.item",
        summary: "Subagent message",
        payload: {
          itemType: "agent_message",
          itemId: "sub-item-1",
          parentItemId: "toolu_task_1",
          role: "assistant",
          detail: "Looking at the test setup",
        },
      }),
      makeActivity("sub-2", {
        kind: "subagent.item",
        summary: "Subagent tool call",
        payload: {
          itemId: "sub-item-2",
          parentItemId: "toolu_task_1",
          role: "tool",
          detail: "grep -rn cache src/",
          data: { toolName: "Bash", input: { command: "grep -rn cache src/" } },
        },
      }),
      makeActivity("task-1", {
        payload: {
          itemType: "collab_agent_tool_call",
          itemId: "toolu_task_1",
          data: {
            toolName: "Task",
            input: { prompt: "Investigate" },
            result: {
              tool_use_id: "toolu_task_1",
              content: "Done.",
            },
          },
        },
      }),
    ]);

    expect(entries).toHaveLength(1);
    expect(entries[0]).toMatchObject({
      subagentPrompt: "Investigate",
      subagentReport: "Done.",
      subagentTranscript: [
        { role: "assistant", text: "Looking at the test setup" },
        { role: "tool", text: "grep -rn cache src/", toolName: "Bash" },
      ],
    });
  });

  it("groups by toolCallId / result tool_use_id when payload.itemId is absent", () => {
    const entries = deriveWorkLogEntries([
      makeActivity("sub-1", {
        kind: "subagent.item",
        summary: "Subagent message",
        payload: {
          parentItemId: "toolu_task_2",
          role: "assistant",
          detail: "Working on it",
        },
      }),
      makeActivity("task-2", {
        payload: {
          itemType: "collab_agent_tool_call",
          data: {
            toolName: "Task",
            input: { prompt: "Do a thing" },
            result: { tool_use_id: "toolu_task_2", content: "Finished." },
          },
        },
      }),
    ]);

    expect(entries).toHaveLength(1);
    expect(entries[0]?.subagentTranscript).toEqual([{ role: "assistant", text: "Working on it" }]);
  });

  it("drops orphan subagent.item activities without crashing", () => {
    const entries = deriveWorkLogEntries([
      makeActivity("orphan", {
        kind: "subagent.item",
        summary: "Subagent message",
        payload: {
          parentItemId: "toolu_missing",
          role: "assistant",
          detail: "Nobody claims me",
        },
      }),
      makeActivity("other", {
        payload: {
          itemType: "command_execution",
          detail: "Bash: true",
          data: { toolName: "Bash", input: { command: "true" } },
        },
      }),
    ]);

    expect(entries).toHaveLength(1);
    expect(entries[0]?.subagentTranscript).toBeUndefined();
    expect(entries.some((entry) => entry.detail === "Nobody claims me")).toBe(false);
  });

  it("ignores malformed subagent.item payloads", () => {
    const entries = deriveWorkLogEntries([
      makeActivity("bad-1", {
        kind: "subagent.item",
        summary: "Subagent message",
        payload: { role: "assistant", detail: "no parent id" },
      }),
      makeActivity("bad-2", {
        kind: "subagent.item",
        summary: "Subagent message",
        payload: null,
      }),
    ]);

    expect(entries).toHaveLength(0);
  });
});
