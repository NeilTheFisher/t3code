import {
  threadWorkspaceAssignmentKey,
  type EnvironmentId,
  type ServerSettings,
} from "@t3tools/contracts";
import { runAtomCommand } from "@t3tools/client-runtime/state/runtime";
import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import { resolveProjectDefaultThreadWorkspaceId } from "@t3tools/shared/projectSettings";

import { appAtomRegistry } from "./atom-registry";
import { serverEnvironment } from "./server";
import { planThreadWorkspaceAssignment } from "./threadWorkspaceLogic";

export {
  planThreadWorkspaceAssignment,
  threadWorkspaceIdForThread,
  threadWorkspaceSettings,
  type ThreadWorkspaceSettings,
} from "./threadWorkspaceLogic";

export function assignThreadWorkspaceNow(
  environmentId: EnvironmentId,
  threadId: EnvironmentThreadShell["id"],
  workspaceId: string | null,
): void {
  const settings: ServerSettings | null = appAtomRegistry.get(
    serverEnvironment.settingsValueAtom(environmentId),
  );
  if (settings === null || settings === undefined) return;
  const patch = planThreadWorkspaceAssignment({
    settings,
    threadKey: threadWorkspaceAssignmentKey(environmentId, threadId),
    workspaceId,
  });
  if (patch === null) return;
  void runAtomCommand(
    appAtomRegistry,
    serverEnvironment.updateSettings,
    { environmentId, input: { patch } },
    { label: "Move thread to workspace", reportFailure: false },
  );
}

/** Mobile's new-turn delivery files into the project default, when it has one. */
export function fileThreadInProjectDefaultWorkspace(input: {
  readonly environmentId: EnvironmentId;
  readonly projectId: EnvironmentThreadShell["projectId"];
  readonly threadId: EnvironmentThreadShell["id"];
}): void {
  const settings: ServerSettings | null = appAtomRegistry.get(
    serverEnvironment.settingsValueAtom(input.environmentId),
  );
  if (settings === null || settings === undefined) return;
  const workspaceId = resolveProjectDefaultThreadWorkspaceId(settings, input.projectId);
  if (workspaceId === null) return;
  assignThreadWorkspaceNow(input.environmentId, input.threadId, workspaceId);
}
