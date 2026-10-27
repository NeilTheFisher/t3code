import {
  DEFAULT_THREAD_WORKSPACE_ICON,
  DEFAULT_THREAD_WORKSPACE_TINT,
  effectiveThreadWorkspaces,
  type ServerSettings,
  type ServerSettingsPatch,
  type SidebarThreadWorkspace,
  type ThreadWorkspaceRef,
} from "@t3tools/contracts";

type WorkspaceSettings = Pick<
  ServerSettings,
  "sidebarThreadWorkspacesEnabled" | "sidebarThreadWorkspaces" | "sidebarThreadWorkspaceAssignments"
>;

export type ThreadWorkspaceTarget =
  | { readonly kind: "found"; readonly workspace: SidebarThreadWorkspace }
  | { readonly kind: "ambiguous"; readonly ids: readonly string[] }
  | { readonly kind: "missing" };

/**
 * Agents name a workspace the way the user says it; the strip stores ids. An id
 * always wins, and a name shared by two workspaces fails rather than picking one.
 */
export function resolveThreadWorkspaceTarget(
  workspaces: readonly SidebarThreadWorkspace[],
  query: string,
): ThreadWorkspaceTarget {
  const byId = workspaces.find((workspace) => workspace.id === query);
  if (byId !== undefined) return { kind: "found", workspace: byId };
  const lowered = query.toLocaleLowerCase();
  const byName = workspaces.filter((workspace) => workspace.name.toLocaleLowerCase() === lowered);
  if (byName.length > 1) return { kind: "ambiguous", ids: byName.map((workspace) => workspace.id) };
  const match = byName[0];
  return match === undefined ? { kind: "missing" } : { kind: "found", workspace: match };
}

export type ThreadWorkspaceFilePlan =
  | {
      readonly kind: "ok";
      readonly patch: ServerSettingsPatch;
      readonly workspace: ThreadWorkspaceRef;
    }
  | { readonly kind: "ambiguous"; readonly ids: readonly string[] }
  | { readonly kind: "missing"; readonly names: readonly string[] };

/**
 * The assignments map is replaced whole on write, so every move starts from the
 * current map and changes one key.
 */
export function planThreadWorkspaceFile(input: {
  readonly settings: WorkspaceSettings;
  readonly threadKey: string;
  readonly workspace: string;
  readonly createWorkspace: boolean;
  readonly newWorkspaceId: string;
}): ThreadWorkspaceFilePlan {
  const workspaces = effectiveThreadWorkspaces(input.settings);
  const resolved = resolveThreadWorkspaceTarget(workspaces, input.workspace);
  if (resolved.kind === "ambiguous") return resolved;

  let target: SidebarThreadWorkspace;
  let created = false;
  if (resolved.kind === "found") {
    target = resolved.workspace;
  } else if (input.createWorkspace) {
    target = {
      id: input.newWorkspaceId,
      name: input.workspace,
      icon: DEFAULT_THREAD_WORKSPACE_ICON,
      tint: DEFAULT_THREAD_WORKSPACE_TINT,
    };
    created = true;
  } else {
    return { kind: "missing", names: workspaces.map((workspace) => workspace.name) };
  }

  return {
    kind: "ok",
    patch: {
      sidebarThreadWorkspaceAssignments: {
        ...input.settings.sidebarThreadWorkspaceAssignments,
        [input.threadKey]: target.id,
      },
      ...(created
        ? {
            sidebarThreadWorkspaces: [...workspaces, target],
            // A workspace nobody can see is not a workspace the user asked for.
            sidebarThreadWorkspacesEnabled: true,
          }
        : {}),
    },
    workspace: { id: target.id, name: target.name },
  };
}

export function planThreadWorkspaceUnfile(input: {
  readonly settings: WorkspaceSettings;
  readonly threadKey: string;
}): ServerSettingsPatch {
  const assignments = { ...input.settings.sidebarThreadWorkspaceAssignments };
  delete assignments[input.threadKey];
  return { sidebarThreadWorkspaceAssignments: assignments };
}
