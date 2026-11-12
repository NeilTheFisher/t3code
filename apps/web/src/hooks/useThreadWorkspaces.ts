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
import { toastManager } from "../components/ui/toast";
import { stackedThreadToast } from "../components/ui/toastHelpers";
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
  // Missing means on, exactly as the strip reads it: a settings snapshot that
  // predates the key must not turn a drag into a no-op.
  if (settings === null || settings.sidebarThreadWorkspacesEnabled === false) return;
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
 * Files a new thread into its project's default workspace, falling back to the
 * workspace selected on this device. Call sites pass the project default so a
 * project's choice wins over the per-device view. Reads the live atoms, so a
 * workspace switch mid-creation wins.
 */
export function fileNewThreadInWorkspace(
  threadRef: {
    readonly environmentId: string;
    readonly threadId: string;
  },
  projectWorkspaceId: string | null,
): void {
  const environmentId = appAtomRegistry.get(primaryEnvironmentIdAtom);
  if (environmentId === null) return;
  const settings = appAtomRegistry.get(serverEnvironment.settingsValueAtom(environmentId));
  if (settings === null || settings.sidebarThreadWorkspacesEnabled === false) return;
  const workspaces = effectiveThreadWorkspaces(settings);
  const projectTarget =
    projectWorkspaceId !== null &&
    workspaces.some((workspace) => workspace.id === projectWorkspaceId)
      ? projectWorkspaceId
      : null;
  const target = projectTarget ?? getClientSettings().sidebarActiveThreadWorkspaceId;
  if (target === null || !workspaces.some((workspace) => workspace.id === target)) return;
  assignThreadsNow(
    [threadWorkspaceAssignmentKey(threadRef.environmentId, threadRef.threadId)],
    target,
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
  const selectedWorkspaceId = useClientSettings(
    (current) => current.sidebarActiveThreadWorkspaceId,
  );
  const updateSettings = useAtomCommand(
    serverEnvironment.updateSettings,
    "thread workspaces update",
  );

  // Missing means on: workspaces are default-on, and a client that has not loaded
  // the server settings yet must still render the strip rather than hide a feature.
  const enabled = serverSettings?.sidebarThreadWorkspacesEnabled ?? true;
  const assignments = serverSettings?.sidebarThreadWorkspaceAssignments ?? {};
  const workspaces = effectiveThreadWorkspaces({
    sidebarThreadWorkspacesEnabled: enabled,
    sidebarThreadWorkspaces: serverSettings?.sidebarThreadWorkspaces ?? [],
  });
  const activeWorkspaceId =
    selectedWorkspaceId !== null &&
    (isUnsortedWorkspaceSelection(selectedWorkspaceId, workspaces) ||
      workspaces.some((workspace) => workspace.id === selectedWorkspaceId))
      ? selectedWorkspaceId
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
        ...workspaces,
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
      sidebarThreadWorkspaces: workspaces.map((workspace) =>
        workspace.id === workspaceId ? { ...workspace, ...patch } : workspace,
      ),
    });
  };

  const deleteWorkspace = (workspaceId: string) => {
    writeServer({
      sidebarThreadWorkspaces: workspaces.filter((workspace) => workspace.id !== workspaceId),
      sidebarThreadWorkspaceAssignments: removeThreadWorkspaceAssignments(assignments, workspaceId),
    });
    if (selectedWorkspaceId === workspaceId) setActiveWorkspaceId(null);
  };

  const assignThreads = (threadKeys: readonly string[], workspaceId: string | null) => {
    if (threadKeys.length === 0) return;
    // Undo has to restore each thread's own previous slot, not one shared value.
    const previous = new Map<string, string | null>();
    for (const key of threadKeys) previous.set(key, assignments[key] ?? null);
    assignThreadsNow(threadKeys, workspaceId, { label: "thread workspaces update" });
    // The unfiltered list does not move a row, so the move is only visible here.
    const target = workspaces.find((workspace) => workspace.id === workspaceId) ?? null;
    const count = threadKeys.length;
    const subject = count === 1 ? "Thread" : `${count} threads`;
    toastManager.add(
      stackedThreadToast({
        type: "success",
        title:
          target === null
            ? `Removed ${subject.toLowerCase()} from its workspace`
            : `Moved ${subject.toLowerCase()} to ${target.name}`,
        actionProps: {
          children: "Undo",
          onClick: () => {
            for (const [key, previousWorkspaceId] of previous) {
              assignThreadsNow([key], previousWorkspaceId, {
                label: "thread workspaces undo",
                reportFailure: false,
              });
            }
          },
        },
      }),
    );
  };

  return {
    enabled,
    workspaces,
    activeWorkspaceId,
    assignments,
    filter: enabled ? { assignments, workspaces, activeWorkspaceId } : null,
    activeWorkspace: workspaces.find((workspace) => workspace.id === activeWorkspaceId) ?? null,
    setActiveWorkspaceId,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace,
    assignThreads,
  };
}
