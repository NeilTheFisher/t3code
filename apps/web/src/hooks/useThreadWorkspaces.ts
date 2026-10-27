import { useAtomValue } from "@effect/atom-react";
import { Atom } from "effect/reactivity";
import {
  DEFAULT_THREAD_WORKSPACE_ICON,
  effectiveThreadWorkspaces,
  threadWorkspaceAssignmentKey,
  type ServerSettings,
  type ServerSettingsPatch,
  type SidebarThreadWorkspace,
} from "@t3tools/contracts";
import { runAtomCommand } from "@t3tools/client-runtime/state/runtime";

import { appAtomRegistry } from "../rpc/atomRegistry";
import { primaryEnvironmentIdAtom } from "../state/primaryEnvironment";
import { usePrimaryEnvironmentId } from "../state/environments";
import { serverEnvironment } from "../state/server";
import { useAtomCommand } from "../state/use-atom-command";
import { getClientSettings, persistClientSettingsUpdate, useClientSettings } from "./useSettings";
import {
  assignThreadToWorkspace,
  createThreadWorkspaceId,
  isUnsortedWorkspaceSelection,
  removeThreadWorkspaceAssignments,
  type ThreadWorkspaceAssignments,
  type ThreadWorkspaceFilter,
} from "../components/sidebar/threadWorkspaces";

export type ThreadWorkspacesController = {
  readonly enabled: boolean;
  readonly workspaces: readonly SidebarThreadWorkspace[];
  readonly activeWorkspaceId: string | null;
  readonly assignments: ThreadWorkspaceAssignments;
  /** The list and search filter, or null while the strip is off. */
  readonly filter: ThreadWorkspaceFilter | null;
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

const noServerSettingsAtom = Atom.make<ServerSettings | null>(null);

/**
 * Merges assignments into the live settings rather than the ones captured at the
 * call site: a drag outlives its render, and thread creation runs outside React.
 */
function assignThreadsNow(
  threadKeys: readonly string[],
  workspaceId: string | null,
  command: { readonly label: string; readonly reportFailure?: boolean },
): void {
  // Workspaces belong to the primary environment, which is also the list the
  // strip renders, so a thread from another environment still files into it.
  const environmentId = appAtomRegistry.get(primaryEnvironmentIdAtom);
  if (environmentId === null) return;
  const settings = appAtomRegistry.get(serverEnvironment.settingsValueAtom(environmentId));
  if (!settings?.sidebarThreadWorkspacesEnabled) return;
  // A slot selection or a workspace deleted by another client is not a workspace
  // id; writing one would leave an assignment nothing can resolve.
  if (
    workspaceId !== null &&
    !effectiveThreadWorkspaces(settings).some((workspace) => workspace.id === workspaceId)
  ) {
    return;
  }
  const patch: ServerSettingsPatch = {
    sidebarThreadWorkspaceAssignments: assignThreadToWorkspace(
      settings.sidebarThreadWorkspaceAssignments,
      threadKeys,
      workspaceId,
    ),
  };
  void runAtomCommand(
    appAtomRegistry,
    serverEnvironment.updateSettings,
    { environmentId, input: { patch } },
    command,
  );
}

/**
 * Files a thread created while a workspace is active into that workspace. Call
 * sites pass this as `onThreadCreated`, so the sidebar, command palette,
 * keybinding and scratch project all agree on where the thread lands. Reads the
 * live atoms, so a workspace switch mid-creation wins.
 */
export function fileThreadInActiveWorkspace(threadRef: {
  readonly environmentId: string;
  readonly threadId: string;
}): void {
  const activeWorkspaceId = getClientSettings().sidebarActiveThreadWorkspaceId;
  if (activeWorkspaceId === null) return;
  assignThreadsNow(
    [threadWorkspaceAssignmentKey(threadRef.environmentId, threadRef.threadId)],
    activeWorkspaceId,
    { label: "File thread in workspace", reportFailure: false },
  );
}

/**
 * The workspaces strip's view of the server settings that back it, with the
 * active workspace from this device's own client settings. An enabled strip with
 * no saved workspaces falls back to the seeded defaults without writing them, so
 * re-enabling the beta never resurrects a deleted workspace.
 */
export function useThreadWorkspaces(): ThreadWorkspacesController {
  const environmentId = usePrimaryEnvironmentId();
  const serverSettings = useAtomValue(
    environmentId === null
      ? noServerSettingsAtom
      : serverEnvironment.settingsValueAtom(environmentId),
  );
  const client = useClientSettings((current) => ({
    activeWorkspaceId: current.sidebarActiveThreadWorkspaceId,
  }));
  const updateSettings = useAtomCommand(
    serverEnvironment.updateSettings,
    "thread workspaces update",
  );

  const source =
    serverSettings === null
      ? { enabled: false, workspaces: [], assignments: {} }
      : {
          enabled: serverSettings.sidebarThreadWorkspacesEnabled,
          workspaces: serverSettings.sidebarThreadWorkspaces,
          assignments: serverSettings.sidebarThreadWorkspaceAssignments,
        };
  const savedWorkspaces = () =>
    effectiveThreadWorkspaces({
      sidebarThreadWorkspacesEnabled: source.enabled,
      sidebarThreadWorkspaces: source.workspaces,
    });
  const workspaces = savedWorkspaces();
  const activeWorkspaceId =
    client.activeWorkspaceId !== null &&
    (isUnsortedWorkspaceSelection(client.activeWorkspaceId, workspaces) ||
      workspaces.some((workspace) => workspace.id === client.activeWorkspaceId))
      ? client.activeWorkspaceId
      : null;

  const writeServer = (patch: ServerSettingsPatch) => {
    if (environmentId === null) return;
    void updateSettings({ environmentId, input: { patch } });
  };

  const setActiveWorkspaceId = (workspaceId: string | null) => {
    void persistClientSettingsUpdate((current) => ({
      ...current,
      sidebarActiveThreadWorkspaceId: workspaceId,
    }));
  };

  const createWorkspace = (name: string) => {
    const id = createThreadWorkspaceId(workspaces);
    writeServer({
      sidebarThreadWorkspaces: [
        ...savedWorkspaces(),
        {
          id,
          name: name.trim() || "Workspace",
          icon: DEFAULT_THREAD_WORKSPACE_ICON,
          tint: "update",
        },
      ],
    });
    return id;
  };

  const updateWorkspace = (
    workspaceId: string,
    patch: Partial<Pick<SidebarThreadWorkspace, "name" | "icon" | "tint">>,
  ) => {
    writeServer({
      sidebarThreadWorkspaces: savedWorkspaces().map((workspace) =>
        workspace.id === workspaceId ? { ...workspace, ...patch } : workspace,
      ),
    });
  };

  const deleteWorkspace = (workspaceId: string) => {
    writeServer({
      sidebarThreadWorkspaces: savedWorkspaces().filter(
        (workspace) => workspace.id !== workspaceId,
      ),
      sidebarThreadWorkspaceAssignments: removeThreadWorkspaceAssignments(
        source.assignments,
        workspaceId,
      ),
    });
    if (client.activeWorkspaceId === workspaceId) setActiveWorkspaceId(null);
  };

  const assignThreads = (threadKeys: readonly string[], workspaceId: string | null) => {
    assignThreadsNow(threadKeys, workspaceId, { label: "thread workspaces update" });
  };

  return {
    enabled: source.enabled,
    workspaces,
    activeWorkspaceId,
    assignments: source.assignments,
    filter: source.enabled
      ? { assignments: source.assignments, workspaces, activeWorkspaceId }
      : null,
    activeWorkspace: workspaces.find((workspace) => workspace.id === activeWorkspaceId) ?? null,
    setActiveWorkspaceId,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace,
    assignThreads,
  };
}
