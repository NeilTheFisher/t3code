import * as Effect from "effect/Effect";

import * as McpToolAccess from "../../McpToolAccess.ts";
import { SpeakToolkit } from "./tools.ts";

const handlers = {
  t3_speak: McpToolAccess.readsAsCaller((input) =>
    Effect.succeed({
      speak: {
        text: input.text,
        ...(input.speed === undefined ? {} : { speed: input.speed }),
        ...(input.interrupt === undefined ? {} : { interrupt: input.interrupt }),
      },
      message: "Queued for playback on the reader's connected clients.",
    }),
  ),
} satisfies McpToolAccess.Handlers<typeof SpeakToolkit.tools>;

export const layer = McpToolAccess.toLayer(SpeakToolkit, {
  t3_speak: handlers.t3_speak,
});
