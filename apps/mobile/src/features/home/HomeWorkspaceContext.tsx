import type { EnvironmentThreadShell } from "@t3tools/client-runtime/state/shell";
import type { SidebarThreadWorkspace } from "@t3tools/contracts";
import { createContext, use, useMemo, type ReactNode } from "react";

import { threadWorkspaceIdForThread } from "../../state/threadWorkspaces";
import { useHomeWorkspaces } from "./useHomeWorkspaces";

type HomeWorkspaceValue = {
  readonly byEnvironment: ReturnType<typeof useHomeWorkspaces>["byEnvironment"];
  readonly onFileThreadInWorkspace: (
    thread: EnvironmentThreadShell,
    workspaceId: string | null,
  ) => Promise<boolean>;
};

const HomeWorkspaceContext = createContext<HomeWorkspaceValue | null>(null);

export function HomeWorkspaceRoot(props: {
  readonly onFileThreadInWorkspace: HomeWorkspaceValue["onFileThreadInWorkspace"];
  readonly children: ReactNode;
}) {
  const { byEnvironment } = useHomeWorkspaces();
  const value = useMemo(
    () => ({ byEnvironment, onFileThreadInWorkspace: props.onFileThreadInWorkspace }),
    [byEnvironment, props.onFileThreadInWorkspace],
  );
  return <HomeWorkspaceContext value={value}>{props.children}</HomeWorkspaceContext>;
}

export function useThreadWorkspaceMenu(thread: EnvironmentThreadShell): {
  readonly workspaces: readonly SidebarThreadWorkspace[];
  readonly assignedWorkspaceId: string | null;
  readonly onFile: (workspaceId: string | null) => void;
} | null {
  const value = use(HomeWorkspaceContext);
  return useMemo(() => {
    if (value === null) return null;
    const settings = value.byEnvironment.get(thread.environmentId);
    if (settings === undefined || settings.workspaces.length === 0) return null;
    return {
      workspaces: settings.workspaces,
      assignedWorkspaceId: threadWorkspaceIdForThread(thread, settings),
      onFile: (workspaceId) => {
        void value.onFileThreadInWorkspace(thread, workspaceId);
      },
    };
  }, [thread, value]);
}
