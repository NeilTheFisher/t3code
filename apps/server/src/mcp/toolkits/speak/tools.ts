import { OrchestratorMcpFailure } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import { Tool, Toolkit } from "effect/ai";

import * as McpInvocationContext from "../../McpInvocationContext.ts";

export const SPEAK_TOOL_NAME = "t3_speak";

const SpeakText = Schema.String.check(Schema.isMinLength(1), Schema.isMaxLength(4_000)).annotate({
  description:
    "The text to say aloud. Plain prose only — no markdown, code blocks, bullet lists, tables, URLs, or file paths; write it the way you would say it.",
});

// Read-only in the MCP sense: it touches no workspace and publishes nothing on
// the server. The reader's clients pick the utterance up from this tool result
// and play it. Not idempotent, since speaking the same text twice is two
// utterances.
export const SpeakTool = Tool.make(SPEAK_TOOL_NAME, {
  description:
    "Say something aloud to the reader through their T3 Code clients' text-to-speech. Use it for a short spoken answer, a summary, or a heads-up you want read out, not for anything the reader must read carefully. Pass plain prose. Only one voice plays at a time: by default the utterance queues behind whatever is speaking; set interrupt only to correct something you said that was wrong (rare). It plays on the reader's connected clients, once, only when text-to-speech is enabled.",
  parameters: Schema.Struct({
    text: SpeakText,
    speed: Schema.optional(
      Schema.Number.check(Schema.isGreaterThan(0)).annotate({
        description: "Speaking speed; 1 is normal. Optional.",
      }),
    ),
    interrupt: Schema.optional(
      Schema.Boolean.annotate({
        description:
          "Cut off the current utterance and speak this immediately. Use sparingly — only to correct something already said.",
      }),
    ),
  }),
  success: Schema.Struct({
    speak: Schema.Struct({
      text: Schema.String,
      speed: Schema.optional(Schema.Number),
      interrupt: Schema.optional(Schema.Boolean),
    }),
    message: Schema.String,
  }),
  failure: OrchestratorMcpFailure,
  failureMode: "return",
  dependencies: [McpInvocationContext.McpInvocationContext],
})
  .annotate(Tool.Title, "Speak aloud")
  .annotate(Tool.Readonly, true)
  .annotate(Tool.Destructive, false)
  .annotate(Tool.Idempotent, false)
  .annotate(Tool.OpenWorld, false);

export const SpeakToolkit = Toolkit.make(SpeakTool);
