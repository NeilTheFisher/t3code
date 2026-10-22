import type { ClientSettings, SidebarThreadWorkspace } from "@t3tools/contracts";

import { persistClientSettingsUpdate, useClientSettings } from "./useSettings";
import {
  assignThreadToWorkspace,
  createThreadWorkspaceId,
  DEFAULT_THREAD_WORKSPACE_ICON,
  DEFAULT_THREAD_WORKSPACES,
  removeThreadWorkspaceAssignments,
  threadWorkspaceKey,
  type ThreadWorkspaceAssignments,
} from "../components/sidebar/threadWorkspaces";

export type ThreadWorkspacesController = {
  readonly enabled: boolean;
  readonly workspaces: readonly SidebarThreadWorkspace[];
  readonly activeWorkspaceId: string | null;
  readonly assignments: ThreadWorkspaceAssignments;
  readonly activeWorkspace: SidebarThreadWorkspace | null;
  readonly setActiveWorkspaceId: (workspaceId: string | null) => void;
  readonly createWorkspace: (name: string) => string;
  readonly updateWorkspace: (
    workspaceId: string,
    patch: Partial<Pick<SidebarThreadWorkspace, "name" | "icon" | "tint">>,
  ) => void;
  readonly deleteWorkspace: (workspaceId: string) => void;
  readonly assignThreads: (threadKeys: readonly string[], workspaceId: string | null) => void;
};

/**
 * Files a thread created while a workspace is active into that workspace. Call
 * sites pass this as `onThreadCreated`, so every way of starting a thread —
 * sidebar, command palette, keybinding, scratch project — agrees on where the
 * thread lands. Assignments are read from the live snapshot, so a workspace
 * switch that happens mid-creation wins.
 */
export function fileThreadInActiveWorkspace(threadRef: {
  readonly environmentId: string;
  readonly threadId: string;
}): void {
  void persistClientSettingsUpdate((current) => {
    const activeWorkspaceId = current.sidebarActiveThreadWorkspaceId;
    if (!current.sidebarThreadWorkspacesEnabled || activeWorkspaceId === null) return current;
    return {
      ...current,
      sidebarThreadWorkspaceAssignments: assignThreadToWorkspace(
        current.sidebarThreadWorkspaceAssignments,
        [threadWorkspaceKey(threadRef.environmentId, threadRef.threadId)],
        activeWorkspaceId,
      ),
    };
  });
}

/**
 * Resolves the list a mutator should edit: saved workspaces, or the seeded
 * defaults. The defaults are never written until the user edits the strip.
 */
function resolveStoredWorkspaces(current: ClientSettings): readonly SidebarThreadWorkspace[] {
  return current.sidebarThreadWorkspaces.length === 0 && current.sidebarThreadWorkspacesEnabled
    ? DEFAULT_THREAD_WORKSPACES
    : current.sidebarThreadWorkspaces;
}

/**
 * The workspaces strip's view of the client settings that back it. An enabled
 * strip with no saved workspaces falls back to the seeded defaults without
 * writing them, so re-enabling the beta never resurrects a deleted workspace.
 */
export function useThreadWorkspaces(): ThreadWorkspacesController {
  const settings = useClientSettings((current: ClientSettings) => ({
    enabled: current.sidebarThreadWorkspacesEnabled,
    workspaces: current.sidebarThreadWorkspaces,
    activeWorkspaceId: current.sidebarActiveThreadWorkspaceId,
    assignments: current.sidebarThreadWorkspaceAssignments,
  }));

  const workspaces =
    settings.enabled && settings.workspaces.length === 0
      ? DEFAULT_THREAD_WORKSPACES
      : settings.workspaces;
  const activeWorkspaceId =
    settings.activeWorkspaceId !== null &&
    workspaces.some((workspace) => workspace.id === settings.activeWorkspaceId)
      ? settings.activeWorkspaceId
      : null;

  const write = (mutate: (current: ClientSettings) => Partial<ClientSettings>) => {
    void persistClientSettingsUpdate((current) => ({ ...current, ...mutate(current) }));
  };

  const setActiveWorkspaceId = (workspaceId: string | null) => {
    write(() => ({ sidebarActiveThreadWorkspaceId: workspaceId }));
  };

  const createWorkspace = (name: string) => {
    const id = createThreadWorkspaceId(workspaces);
    write((current) => {
      const existing = resolveStoredWorkspaces(current);
      return {
        sidebarThreadWorkspaces: [
          ...existing,
          {
            id,
            name: name.trim() || "Workspace",
            icon: DEFAULT_THREAD_WORKSPACE_ICON,
            tint: "update" as const,
          },
        ],
      };
    });
    return id;
  };

  const updateWorkspace = (
    workspaceId: string,
    patch: Partial<Pick<SidebarThreadWorkspace, "name" | "icon" | "tint">>,
  ) => {
    write((current) => ({
      sidebarThreadWorkspaces: resolveStoredWorkspaces(current).map((workspace) =>
        workspace.id === workspaceId ? { ...workspace, ...patch } : workspace,
      ),
    }));
  };

  const deleteWorkspace = (workspaceId: string) => {
    write((current) => ({
      sidebarThreadWorkspaces: resolveStoredWorkspaces(current).filter(
        (workspace) => workspace.id !== workspaceId,
      ),
      sidebarThreadWorkspaceAssignments: removeThreadWorkspaceAssignments(
        current.sidebarThreadWorkspaceAssignments,
        workspaceId,
      ),
      sidebarActiveThreadWorkspaceId:
        current.sidebarActiveThreadWorkspaceId === workspaceId
          ? null
          : current.sidebarActiveThreadWorkspaceId,
    }));
  };

  const assignThreads = (threadKeys: readonly string[], workspaceId: string | null) => {
    write((current) => ({
      sidebarThreadWorkspaceAssignments: assignThreadToWorkspace(
        current.sidebarThreadWorkspaceAssignments,
        threadKeys,
        workspaceId,
      ),
    }));
  };

  return {
    enabled: settings.enabled,
    workspaces,
    activeWorkspaceId,
    assignments: settings.assignments,
    activeWorkspace: workspaces.find((workspace) => workspace.id === activeWorkspaceId) ?? null,
    setActiveWorkspaceId,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace,
    assignThreads,
  };
}
