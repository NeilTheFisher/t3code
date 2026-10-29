import { useAtomValue } from "@effect/atom-react";
import { useMemo } from "react";
import {
  effectiveThreadWorkspaces,
  type EnvironmentId,
  type SidebarThreadWorkspace,
} from "@t3tools/contracts";

import { environmentServerConfigsAtom } from "../../state/server";
import type { ThreadWorkspaceSettings } from "../../state/threadWorkspaces";

export type HomeWorkspaces = {
  readonly byEnvironment: ReadonlyMap<EnvironmentId, ThreadWorkspaceSettings>;
  /** Every workspace across the connected environments, by id. */
  readonly workspaces: readonly SidebarThreadWorkspace[];
};

export function useHomeWorkspaces(): HomeWorkspaces {
  const configs = useAtomValue(environmentServerConfigsAtom);
  return useMemo(() => {
    const byEnvironment = new Map<EnvironmentId, ThreadWorkspaceSettings>();
    const workspacesById = new Map<string, SidebarThreadWorkspace>();
    for (const [environmentId, config] of configs) {
      const settings = config.settings;
      if (!settings.sidebarThreadWorkspacesEnabled) continue;
      const workspaces = effectiveThreadWorkspaces(settings);
      byEnvironment.set(environmentId, {
        workspaces,
        assignments: settings.sidebarThreadWorkspaceAssignments,
      });
      for (const workspace of workspaces) {
        if (!workspacesById.has(workspace.id)) workspacesById.set(workspace.id, workspace);
      }
    }
    return { byEnvironment, workspaces: [...workspacesById.values()] };
  }, [configs]);
}
