import { EnvironmentId } from "@t3tools/contracts";
import { describe, expect, it, vi } from "vite-plus/test";

import { buildHomeListFilterMenu } from "./home-list-filter-menu";

const environment = { environmentId: EnvironmentId.make("env-a"), label: "Local" };
const workspaces = [
  { id: "work", name: "Work" },
  { id: "personal", name: "Personal" },
];

describe("the mobile list filter menu", () => {
  it("adds a workspace submenu with All first", () => {
    const onWorkspaceChange = vi.fn();
    const menu = buildHomeListFilterMenu({
      environments: [environment],
      projects: [{ key: "env-a:project", label: "Project" }],
      workspaces,
      selectedEnvironmentId: null,
      selectedProjectKey: null,
      selectedWorkspaceId: "work",
      onEnvironmentChange: () => {},
      onProjectChange: () => {},
      onWorkspaceChange,
    });

    const submenu = menu.items.find(
      (item) => item.type === "submenu" && item.title === "Workspace",
    );
    expect(submenu?.type).toBe("submenu");
    if (submenu?.type !== "submenu") return;
    expect(submenu.items.map((item) => [item.title, item.state])).toEqual([
      ["All workspaces", "off"],
      ["Work", "on"],
      ["Personal", "off"],
    ]);

    submenu.items[0]?.onPress();
    expect(onWorkspaceChange).toHaveBeenCalledWith(null);
    submenu.items[2]?.onPress();
    expect(onWorkspaceChange).toHaveBeenCalledWith("personal");
  });

  it("omits the submenu when the environments have no workspaces", () => {
    const menu = buildHomeListFilterMenu({
      environments: [environment],
      projects: [],
      workspaces: [],
      selectedEnvironmentId: null,
      selectedProjectKey: null,
      selectedWorkspaceId: null,
      onEnvironmentChange: () => {},
      onProjectChange: () => {},
      onWorkspaceChange: () => {},
    });

    expect(menu.items.some((item) => item.type === "submenu" && item.title === "Workspace")).toBe(
      false,
    );
  });
});
