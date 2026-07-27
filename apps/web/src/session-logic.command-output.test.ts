import { EventId, TurnId, type OrchestrationThreadActivity } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { deriveWorkLogEntries } from "./session-logic";

function makeCommandActivity(
  id: string,
  payload: Record<string, unknown>,
  summary = "Ran command",
): OrchestrationThreadActivity {
  return {
    id: EventId.make(id),
    createdAt: "2026-07-17T10:00:00.000Z",
    kind: "tool.completed",
    summary,
    tone: "tool",
    payload,
    turnId: TurnId.make("turn-1"),
  };
}

describe("deriveWorkLogEntries command output", () => {
  it("uses Codex aggregated output instead of repeating the command", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("codex-command", {
        itemType: "command_execution",
        title: "Ran command",
        detail: "/bin/zsh -lc \"printf 'hello\\n'\"",
        data: {
          item: {
            type: "commandExecution",
            command: "/bin/zsh -lc \"printf 'hello\\n'\"",
            commandActions: [{ command: "printf 'hello\\n'", type: "unknown" }],
            aggregatedOutput: "hello\n<exited with exit code 0>",
            status: "completed",
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      command: "printf 'hello\\n'",
      rawCommand: "/bin/zsh -lc \"printf 'hello\\n'\"",
      detail: "hello",
    });
  });

  it("uses a projected Claude output summary instead of repeating the command", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("claude-command", {
        itemType: "command_execution",
        title: "Ran command",
        detail: "printf hello",
        data: {
          kind: "execute",
          command: "printf hello",
          rawOutput: {
            content: "hello from claude",
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      command: "printf hello",
      detail: "hello from claude",
    });
  });

  it("drops a shell-wrapped Codex command restated as detail", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity(
        "codex-shell-command",
        {
          itemType: "command_execution",
          detail: "/bin/bash -lc 'pwd && ls -la'",
          data: {
            item: {
              command: "/bin/bash -lc 'pwd && ls -la'",
              commandActions: [{ command: "pwd && ls -la", type: "unknown" }],
              type: "commandExecution",
            },
          },
        },
        "Bash",
      ),
    ]);

    expect(entry?.label).toBe("Bash");
    expect(entry?.command).toBe("pwd && ls -la");
    expect(entry?.rawCommand).toBe("/bin/bash -lc 'pwd && ls -la'");
    expect(entry?.detail).toBeUndefined();
  });

  it("uses output when Codex restates a shell-wrapped command as detail", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity(
        "codex-shell-output",
        {
          itemType: "command_execution",
          detail: "/bin/bash -lc 'pwd && ls -la'",
          data: {
            item: {
              aggregatedOutput: "file-a\nfile-b\n<exited with exit code 0>",
              command: "/bin/bash -lc 'pwd && ls -la'",
              type: "commandExecution",
            },
          },
        },
        "Bash",
      ),
    ]);

    expect(entry).toMatchObject({
      command: "pwd && ls -la",
      detail: "file-a\nfile-b",
    });
  });
});

describe("deriveWorkLogEntries collaboration tools", () => {
  it("uses the collaboration operation instead of the generic Tool label", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity(
        "collaboration-wait",
        {
          itemType: "collab_agent_tool_call",
          data: {
            item: {
              status: "completed",
              tool: "wait",
              type: "collabAgentToolCall",
            },
          },
        },
        "Tool",
      ),
    ]);

    expect(entry).toMatchObject({
      label: "Tool",
      toolTitle: "Wait for agents",
    });
  });
});
