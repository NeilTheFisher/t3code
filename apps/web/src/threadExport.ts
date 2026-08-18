import { ManagedRelay } from "@t3tools/client-runtime/relay";
import { fetchEnvironmentThreadSnapshot } from "@t3tools/client-runtime/state/threads";
import type {
  OrchestrationMessage,
  OrchestrationThread,
  ScopedThreadRef,
} from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";

import { runtime } from "./lib/runtime";
import { readPreparedConnection } from "./state/session";

const ROLE_LABEL: Record<OrchestrationMessage["role"], string> = {
  user: "User",
  assistant: "Assistant",
  system: "System",
};

function sanitizeFileSegment(input: string): string {
  const sanitized = input
    .trim()
    .toLowerCase()
    .replace(/[`'".,!?()[\]{}]+/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return sanitized.length > 0 ? sanitized : "thread";
}

export function buildThreadMarkdownFilename(thread: OrchestrationThread): string {
  return `${sanitizeFileSegment(thread.title)}.md`;
}

function messageToMarkdown(message: OrchestrationMessage): string {
  const label = ROLE_LABEL[message.role] ?? message.role;
  const attachmentNotes = (message.attachments ?? [])
    .map((attachment) => `> attachment: ${attachment.name}`)
    .join("\n");
  const body = message.text.trimEnd();
  const lines = [`### ${label}`, ""];
  if (body.length > 0) {
    lines.push(body, "");
  }
  if (attachmentNotes.length > 0) {
    lines.push(attachmentNotes, "");
  }
  return lines.join("\n").trimEnd();
}

/**
 * Render a thread's full message history as a readable markdown transcript
 * (headings per message plus metadata), suitable for handoff or external
 * sharing. Empty/system-only chatter is omitted so the file stays readable.
 */
export function renderThreadToMarkdown(thread: OrchestrationThread): string {
  const messages = thread.messages.filter((message) => message.text.trim().length > 0);
  const sections = messages.map(messageToMarkdown);
  const lines = [
    `# ${thread.title}`,
    "",
    `- Thread ID: \`${thread.id}\``,
    ...(thread.branch ? [`- Branch: \`${thread.branch}\``] : []),
    ...(thread.worktreePath ? [`- Path: \`${thread.worktreePath}\``] : []),
    "",
    "---",
    "",
    ...sections,
  ];
  return lines.join("\n").trimEnd() + "\n";
}

function downloadTextFile(filename: string, contents: string): void {
  const blob = new Blob([contents], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 0);
}

export class ThreadExportError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ThreadExportError";
  }
}

/**
 * Fetch a thread's full detail snapshot over HTTP and download it as a
 * markdown file. Client-only: no server RPC is involved, so this works for any
 * thread (even one not currently open) and requires no server restart.
 */
export function exportThreadAsMarkdown(threadRef: ScopedThreadRef): Promise<void> {
  const prepared = readPreparedConnection(threadRef.environmentId);
  if (prepared === null) {
    return Promise.reject(
      new ThreadExportError(
        "The environment is not connected, so the thread could not be exported.",
      ),
    );
  }

  return runtime
    .runPromise(
      Effect.gen(function* () {
        const signer = yield* Effect.serviceOption(ManagedRelay.ManagedRelayDpopSigner);
        const snapshot = yield* fetchEnvironmentThreadSnapshot({
          prepared,
          threadId: threadRef.threadId,
          signer,
        });
        return snapshot.thread;
      }),
    )
    .then(
      (thread) => {
        downloadTextFile(buildThreadMarkdownFilename(thread), renderThreadToMarkdown(thread));
      },
      (cause: unknown) => {
        const error =
          cause instanceof Error ? cause : new ThreadExportError("Could not export the thread.");
        throw new ThreadExportError(error.message);
      },
    );
}
