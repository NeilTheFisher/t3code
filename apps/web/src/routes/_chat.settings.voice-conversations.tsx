import { createFileRoute } from "@tanstack/react-router";

import { VoiceConversationSettingsPanel } from "../components/settings/VoiceConversationSettingsPanel";

export const Route = createFileRoute("/_chat/settings/voice-conversations")({
  component: VoiceConversationSettingsPanel,
});
