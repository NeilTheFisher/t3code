import { EventId, TurnId, type OrchestrationThreadActivity } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { projectActivityPayload } from "./ActivityPayloadProjection.ts";

function makeActivity(payload: Record<string, unknown>): OrchestrationThreadActivity {
  return {
    id: EventId.make("activity-1"),
    createdAt: "2026-07-27T18:07:02.217Z",
    kind: "tool.completed",
    summary: "Bash",
    tone: "tool",
    payload,
    turnId: TurnId.make("turn-1"),
  };
}

describe("projectActivityPayload", () => {
  it("keeps bounded command output for the work log", () => {
    const projected = projectActivityPayload(
      makeActivity({
        itemType: "command_execution",
        data: {
          item: {
            command: "/bin/bash -lc 'printf hello'",
            aggregatedOutput: "hello\n<exited with exit code 0>",
            type: "commandExecution",
          },
        },
      }),
    );

    expect(projected.payload).toMatchObject({
      data: {
        item: {
          command: "/bin/bash -lc 'printf hello'",
          aggregatedOutput: "hello\n<exited with exit code 0>",
        },
      },
    });

    const projectedLargeOutput = projectActivityPayload(
      makeActivity({
        itemType: "command_execution",
        data: {
          item: {
            command: "generate-output",
            aggregatedOutput: "x".repeat(20_000),
          },
        },
      }),
    );
    const projectedItem = (
      projectedLargeOutput.payload as {
        data: { item: { aggregatedOutput: string } };
      }
    ).data.item;
    expect(projectedItem.aggregatedOutput).toHaveLength(16_000);
    expect(projectedItem.aggregatedOutput.endsWith("\n\n[truncated]")).toBe(true);
  });

  it("keeps the collaboration operation name", () => {
    const projected = projectActivityPayload(
      makeActivity({
        itemType: "collab_agent_tool_call",
        data: {
          item: {
            status: "completed",
            tool: "wait",
            type: "collabAgentToolCall",
          },
        },
      }),
    );

    expect(projected.payload).toMatchObject({
      data: {
        item: {
          tool: "wait",
        },
      },
    });
  });
});
