import { OrchestratorMcpFailure, ThreadWorkspaceRef } from "@t3tools/contracts";
import * as Schema from "effect/Schema";
import { Tool, Toolkit } from "effect/ai";

import * as ServerSettings from "../../../serverSettings.ts";

const shared = {
  failure: OrchestratorMcpFailure,
  failureMode: "return" as const,
  dependencies: [ServerSettings.ServerSettingsService],
};

const WorkspaceListTool = Tool.make("t3_workspace_list", {
  ...shared,
  description:
    "List thread workspaces as id and name. Filing a thread takes either; check here before t3_thread_organize with action file.",
  success: Schema.Struct({ workspaces: Schema.Array(ThreadWorkspaceRef) }),
})
  .annotate(Tool.Title, "List thread workspaces")
  .annotate(Tool.Readonly, true)
  .annotate(Tool.Destructive, false);

export const WorkspaceToolkit = Toolkit.make(WorkspaceListTool);
