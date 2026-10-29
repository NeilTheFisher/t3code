import {
  effectiveThreadWorkspaces,
  resolveAssignedWorkspaceId,
  threadWorkspaceAssignmentKey,
  type ServerSettings,
  type ServerSettingsPatch,
  type SidebarThreadWorkspace,
} from "@t3tools/contracts";
import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";

export type ThreadWorkspaceSettings = {
  readonly workspaces: readonly SidebarThreadWorkspace[];
  readonly assignments: Readonly<Record<string, string>>;
};

export function threadWorkspaceSettings(
  settings: ServerSettings | null | undefined,
): ThreadWorkspaceSettings | null {
  if (settings?.sidebarThreadWorkspacesEnabled !== true) return null;
  return {
    workspaces: effectiveThreadWorkspaces(settings),
    assignments: settings.sidebarThreadWorkspaceAssignments,
  };
}

export function threadWorkspaceIdForThread(
  thread: Pick<EnvironmentThreadShell, "environmentId" | "id">,
  settings: ThreadWorkspaceSettings | null | undefined,
): string | null {
  if (settings === null || settings === undefined) return null;
  return resolveAssignedWorkspaceId(
    settings.assignments,
    threadWorkspaceAssignmentKey(thread.environmentId, thread.id),
    settings.workspaces,
  );
}

export function planThreadWorkspaceAssignment(input: {
  readonly settings: ServerSettings;
  readonly threadKey: string;
  readonly workspaceId: string | null;
}): ServerSettingsPatch | null {
  const current = threadWorkspaceSettings(input.settings);
  if (current === null) return null;
  if (
    input.workspaceId !== null &&
    !current.workspaces.some((workspace) => workspace.id === input.workspaceId)
  ) {
    return null;
  }
  const assignments = { ...current.assignments };
  if (input.workspaceId === null) delete assignments[input.threadKey];
  else assignments[input.threadKey] = input.workspaceId;
  return { sidebarThreadWorkspaceAssignments: assignments };
}
