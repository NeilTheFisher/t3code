/**
 * RecoveredThreadTranscript - Builds a compact context preamble from persisted
 * thread messages.
 *
 * When a thread has to be recovered with a *fresh* provider session (no resume
 * cursor was persisted before a server restart), the provider-side session
 * starts with zero conversation history even though the t3 projection store
 * still holds the full thread transcript. This module renders that persisted
 * history into a clearly delimited text preamble that `ProviderService`
 * prepends to the next turn's input so the model regains conversational
 * context.
 *
 * @module RecoveredThreadTranscript
 */

/** Minimal shape of a persisted thread message needed to render a transcript. */
export interface TranscriptSourceMessage {
  readonly role: "user" | "assistant" | "system";
  readonly text: string;
  readonly isStreaming?: boolean;
}

/**
 * Default character budget for the rendered message body (excluding the fixed
 * header/footer). Roughly ~7.5k tokens — enough to restore working context
 * without blowing up the next turn.
 */
export const DEFAULT_MAX_TRANSCRIPT_CHARS = 30_000;

const HEADER =
  "[Recovered conversation history follows. The provider session backing this " +
  "thread was restarted and lost its in-memory context; the transcript below " +
  "was restored from persisted thread history so you can continue seamlessly. " +
  "Do not mention this recovery unless asked.]";

const FOOTER = "[End of recovered conversation history. The user's new message follows.]";

const TRUNCATION_NOTICE = "[...earlier messages omitted to fit the context budget...]";

const ROLE_LABELS: Record<TranscriptSourceMessage["role"], string> = {
  user: "User",
  assistant: "Assistant",
  system: "System",
};

function renderMessage(message: TranscriptSourceMessage): string {
  return `${ROLE_LABELS[message.role]}:\n${message.text.trim()}`;
}

/**
 * Render persisted thread messages into a delimited context preamble.
 *
 * - Preserves chronological (input) order in the output.
 * - Skips messages with empty/whitespace-only text and still-streaming rows.
 * - Enforces `maxChars` over the rendered message body by dropping the OLDEST
 *   messages first; a truncation notice is inserted when anything is dropped.
 *   An oversized single message is tail-clamped rather than dropped entirely.
 * - Returns `undefined` when there is nothing worth injecting.
 */
export function buildRecoveredTranscript(
  messages: ReadonlyArray<TranscriptSourceMessage>,
  options?: { readonly maxChars?: number },
): string | undefined {
  const maxChars = options?.maxChars ?? DEFAULT_MAX_TRANSCRIPT_CHARS;
  const renderable = messages.filter(
    (message) => message.isStreaming !== true && message.text.trim().length > 0,
  );
  if (renderable.length === 0) return undefined;

  // Walk newest-first, accumulating rendered messages until the budget is
  // exhausted, then emit in chronological order.
  const kept: string[] = [];
  let used = 0;
  let truncated = false;
  for (let i = renderable.length - 1; i >= 0; i--) {
    const rendered = renderMessage(renderable[i]!);
    const cost = rendered.length + (kept.length > 0 ? 2 : 0); // "\n\n" separator
    if (used + cost > maxChars) {
      if (kept.length === 0) {
        // Even the newest message alone exceeds the budget: keep its tail so
        // the most recent context survives.
        kept.push(`${TRUNCATION_NOTICE}\n${rendered.slice(rendered.length - maxChars)}`);
        truncated = true;
      } else {
        truncated = true;
      }
      break;
    }
    kept.push(rendered);
    used += cost;
  }
  if (!truncated && kept.length < renderable.length) truncated = true;
  kept.reverse();

  const body = kept.join("\n\n");
  const parts = [
    HEADER,
    ...(truncated && !body.startsWith(TRUNCATION_NOTICE) ? [TRUNCATION_NOTICE] : []),
    body,
    FOOTER,
  ];
  return parts.join("\n\n");
}
