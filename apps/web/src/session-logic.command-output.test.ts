import { EventId, TurnId, type OrchestrationThreadActivity } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import { deriveWorkLogEntries } from "./session-logic";

function makeCommandActivity(
  id: string,
  payload: Record<string, unknown>,
): OrchestrationThreadActivity {
  return {
    id: EventId.make(id),
    createdAt: "2026-07-17T10:00:00.000Z",
    kind: "tool.completed",
    summary: "Ran command",
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
        detail: "printf hello",
        data: {
          item: {
            type: "commandExecution",
            command: "printf hello",
            aggregatedOutput: "hello\n<exited with exit code 0>",
            status: "completed",
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      command: "printf hello",
      detail: "hello",
    });
  });

  it("uses Claude ACP stdout instead of repeating the command", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("claude-command", {
        itemType: "command_execution",
        title: "Ran command",
        detail: "printf hello",
        data: {
          kind: "execute",
          command: "printf hello",
          rawOutput: {
            stdout: "hello from claude\n",
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      command: "printf hello",
      detail: "hello from claude",
    });
  });

  it("drops duplicated command detail when the command has no output", () => {
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("empty-command", {
        itemType: "command_execution",
        title: "Ran command",
        detail: "true",
        data: {
          kind: "execute",
          command: "true",
        },
      }),
    ]);

    expect(entry?.command).toBe("true");
    expect(entry?.detail).toBeUndefined();
  });

  it("shows Claude tool_result output instead of repeating the labeled command", () => {
    const command = "git status --short | grep -c '^UU'; git log --oneline -2";
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("claude-command", {
        itemType: "command_execution",
        detail: `Bash: ${command}`,
        data: {
          toolName: "Bash",
          input: { command, description: "Inspect state" },
          result: {
            tool_use_id: "toolu_123",
            type: "tool_result",
            content: "5\n443f07c2 fix(web): show command output in work log",
            is_error: false,
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({
      command,
      detail: "5\n443f07c2 fix(web): show command output in work log",
    });
  });

  it("extracts Claude tool_result text block arrays", () => {
    const command = "printf hi";
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("claude-command-blocks", {
        itemType: "command_execution",
        detail: `Bash: ${command}`,
        data: {
          toolName: "Bash",
          input: { command },
          result: {
            tool_use_id: "toolu_456",
            type: "tool_result",
            content: [{ type: "text", text: "hi" }],
            is_error: false,
          },
        },
      }),
    ]);

    expect(entry).toMatchObject({ command, detail: "hi" });
  });

  it("drops an ellipsis-truncated labeled command restated as detail", () => {
    const command = `cd ~/repos/t3code && ${"x".repeat(200)} && git rev-parse --show-toplevel`;
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("claude-ellipsis", {
        itemType: "command_execution",
        detail: `Bash: ${command.slice(0, 177)}...`,
        data: {
          toolName: "Bash",
          input: { command },
        },
      }),
    ]);

    expect(entry?.command).toBe(command);
    expect(entry?.detail).toBeUndefined();
  });

  it("drops a server-truncated labeled command restated as detail", () => {
    const command = `long ${"x".repeat(500)} end`;
    const [entry] = deriveWorkLogEntries([
      makeCommandActivity("claude-truncated", {
        itemType: "command_execution",
        detail: `Bash: ${command.slice(0, 400)}`,
        data: {
          toolName: "Bash",
          input: { command },
        },
      }),
    ]);

    expect(entry?.command).toBe(command);
    expect(entry?.detail).toBeUndefined();
  });
});
