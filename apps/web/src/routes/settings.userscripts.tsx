import { createFileRoute } from "@tanstack/react-router";

import { UserscriptsSettingsPanel } from "../components/settings/UserscriptsSettingsPanel";

function SettingsUserscriptsRoute() {
  return <UserscriptsSettingsPanel />;
}

export const Route = createFileRoute("/settings/userscripts")({
  component: SettingsUserscriptsRoute,
});
