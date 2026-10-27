import { effectiveThreadWorkspaces } from "@t3tools/contracts";
import * as Effect from "effect/Effect";

import * as ServerSettings from "../../../serverSettings.ts";
import * as McpToolAccess from "../../McpToolAccess.ts";
import { unavailable } from "../../threadAccess.ts";
import { WorkspaceToolkit } from "./tools.ts";

export const layer = McpToolAccess.toLayer(WorkspaceToolkit, {
  t3_workspace_list: McpToolAccess.reads(() =>
    Effect.gen(function* () {
      const settings = yield* ServerSettings.ServerSettingsService;
      const current = yield* settings.getSettings.pipe(Effect.mapError(unavailable));
      return {
        workspaces: effectiveThreadWorkspaces(current).map(({ id, name }) => ({ id, name })),
      };
    }),
  ),
});
