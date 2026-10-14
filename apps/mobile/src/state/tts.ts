import { createTtsSpeechCommand } from "@t3tools/client-runtime/state/tts";

import { connectionAtomRuntime } from "../connection/runtime";

export const requestTtsSpeech = createTtsSpeechCommand(connectionAtomRuntime);
