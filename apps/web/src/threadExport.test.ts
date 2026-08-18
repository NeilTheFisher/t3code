import { describe, expect, it } from "vite-plus/test";

import type { OrchestrationThread } from "@t3tools/contracts";

import { buildThreadMarkdownFilename, renderThreadToMarkdown } from "./threadExport";

function thread(overrides: Partial<OrchestrationThread> = {}): OrchestrationThread {
  return {
    id: "thread-1",
    title: "Fix the login bug",
    branch: "fix/login",
    worktreePath: "/tmp/t3/fix-login",
    messages: [
      {
        id: "m1",
        role: "user",
        text: "Please fix the login bug.",
        turnId: "t1",
        streaming: false,
        createdAt: "2026-08-18T10:00:00.000Z",
        updatedAt: "2026-08-18T10:00:00.000Z",
      },
      {
        id: "m2",
        role: "assistant",
        text: "I'll investigate the auth flow.",
        turnId: "t1",
        streaming: false,
        createdAt: "2026-08-18T10:01:00.000Z",
        updatedAt: "2026-08-18T10:01:00.000Z",
      },
      {
        id: "m3",
        role: "system",
        text: "",
        turnId: null,
        streaming: false,
        createdAt: "2026-08-18T09:59:00.000Z",
        updatedAt: "2026-08-18T09:59:00.000Z",
      },
    ],
    ...overrides,
  } as unknown as OrchestrationThread;
}

describe("buildThreadMarkdownFilename", () => {
  it("sanitizes the title into a stable slug", () => {
    expect(buildThreadMarkdownFilename(thread({ title: "Fix / the (login) bug!" }))).toBe(
      "fix-the-login-bug.md",
    );
  });

  it("falls back when the title is empty", () => {
    expect(buildThreadMarkdownFilename(thread({ title: "" }))).toBe("thread.md");
  });
});

describe("renderThreadToMarkdown", () => {
  it("renders a heading, metadata, and each non-empty message", () => {
    const markdown = renderThreadToMarkdown(thread());
    expect(markdown).toContain("# Fix the login bug");
    expect(markdown).toContain("Thread ID: `thread-1`");
    expect(markdown).toContain("Branch: `fix/login`");
    expect(markdown).toContain("Path: `/tmp/t3/fix-login`");
    expect(markdown).toContain("### User");
    expect(markdown).toContain("Please fix the login bug.");
    expect(markdown).toContain("### Assistant");
    expect(markdown).toContain("I'll investigate the auth flow.");
  });

  it("drops empty system messages", () => {
    const markdown = renderThreadToMarkdown(thread());
    expect(markdown).not.toContain("### System");
  });
});
