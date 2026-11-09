import type { EnvironmentId } from "@t3tools/contracts";

import type { AppBarMenuItem } from "../../components/ui/AppBar.types";

export interface HomeListFilterMenuEnvironment {
  readonly environmentId: EnvironmentId;
  readonly label: string;
}

export interface HomeListFilterMenuProject {
  readonly key: string;
  readonly label: string;
}

export interface HomeListFilterMenuWorkspace {
  readonly id: string;
  readonly name: string;
}

export function buildHomeListFilterMenuItems(props: {
  readonly environments: ReadonlyArray<HomeListFilterMenuEnvironment>;
  readonly projects: ReadonlyArray<HomeListFilterMenuProject>;
  readonly workspaces?: ReadonlyArray<HomeListFilterMenuWorkspace>;
  readonly selectedEnvironmentId: EnvironmentId | null;
  readonly selectedProjectKey: string | null;
  readonly selectedWorkspaceId?: string | null;
  readonly onEnvironmentChange: (environmentId: EnvironmentId | null) => void;
  readonly onProjectChange: (projectKey: string | null) => void;
  readonly onWorkspaceChange?: (workspaceId: string | null) => void;
}): AppBarMenuItem[] {
  const items: AppBarMenuItem[] = [
    {
      id: "environment",
      title: "Environment",
      items: [
        {
          id: "environment:all",
          title: "All environments",
          subtitle: "Show threads from every environment",
          selected: props.selectedEnvironmentId === null,
          onPress: () => props.onEnvironmentChange(null),
        },
        ...props.environments.map((environment) => ({
          id: `environment:${environment.environmentId}`,
          title: environment.label,
          selected: props.selectedEnvironmentId === environment.environmentId,
          onPress: () => props.onEnvironmentChange(environment.environmentId),
        })),
      ],
    },
  ];

  if (props.projects.length > 0) {
    items.push({
      id: "project",
      title: "Project",
      items: [
        {
          id: "project:all",
          title: "All projects",
          subtitle: "Show threads from every project",
          selected: props.selectedProjectKey === null,
          onPress: () => props.onProjectChange(null),
        },
        ...props.projects.map((project) => ({
          id: `project:${project.key}`,
          title: project.label,
          selected: props.selectedProjectKey === project.key,
          onPress: () => props.onProjectChange(project.key),
        })),
      ],
    });
  }

  const workspaces = props.workspaces ?? [];
  if (workspaces.length > 0 && props.onWorkspaceChange !== undefined) {
    items.push({
      id: "workspace",
      title: "Workspace",
      items: [
        {
          id: "workspace:all",
          title: "All workspaces",
          subtitle: "Show threads from every workspace",
          selected: (props.selectedWorkspaceId ?? null) === null,
          onPress: () => props.onWorkspaceChange?.(null),
        },
        ...workspaces.map((workspace) => ({
          id: `workspace:${workspace.id}`,
          title: workspace.name,
          selected: props.selectedWorkspaceId === workspace.id,
          onPress: () => props.onWorkspaceChange?.(workspace.id),
        })),
      ],
    });
  }

  return items;
}
