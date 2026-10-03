import { describe, expect, it } from "vite-plus/test";

import type { ExportableThread, ExportableThreadMessage } from "./threadExport";
import { buildThreadMarkdownFilename, renderThreadToMarkdown } from "./threadExport";

function message(overrides: Partial<ExportableThreadMessage>): ExportableThreadMessage {
  return {
    role: "user",
    text: "",
    attachments: [],
    ...overrides,
  };
}

function thread(overrides: Partial<ExportableThread> = {}): ExportableThread {
  return {
    id: "thread-1",
    title: "Fix the login bug",
    branch: "fix/login",
    worktreePath: "/tmp/t3/fix-login",
    messages: [
      message({ role: "user", text: "Please fix the login bug." }),
      message({ role: "assistant", text: "I'll investigate the auth flow." }),
      message({ role: "system", text: "" }),
    ],
    ...overrides,
  };
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

  it("notes attachments on their message", () => {
    const markdown = renderThreadToMarkdown(
      thread({
        messages: [
          message({
            role: "user",
            text: "See this.",
            attachments: [{ name: "screenshot.png" }],
          }),
        ],
      }),
    );
    expect(markdown).toContain("> attachment: screenshot.png");
  });
});
