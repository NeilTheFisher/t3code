import type { EnvironmentId } from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import type { WorkspaceEnvironment } from "../../state/workspaceModel";
import { buildHomeListFilterMenuItems, homeListFilterEnvironments } from "./home-list-filter-menu";

function environment(
  environmentId: string,
  environmentLabel: string,
  isEnabled: boolean,
): WorkspaceEnvironment {
  return {
    environmentId: environmentId as EnvironmentId,
    environmentLabel,
    displayUrl: "",
    isRelayManaged: false,
    isEnabled,
    connectionState: isEnabled ? "connected" : "available",
    connectionError: null,
    connectionErrorTraceId: null,
  };
}

it("offers only switched-on environments, sorted by label", () => {
  expect(
    homeListFilterEnvironments([
      environment("env-studio", "Studio", true),
      environment("env-laptop", "Laptop", false),
      environment("env-desk", "Desk", true),
    ]),
  ).toEqual([
    { environmentId: "env-desk", label: "Desk", connectionState: "connected" },
    { environmentId: "env-studio", label: "Studio", connectionState: "connected" },
  ]);

const selectedOf = (item: unknown): boolean =>
  typeof item === "object" &&
  item !== null &&
  "selected" in item &&
  (item as { readonly selected?: boolean }).selected === true;

const workspaceItem = (selectedWorkspaceId: string | null) =>
  buildHomeListFilterMenuItems({
    environments: [],
    projects: [],
    workspaces: [
      { id: "work", name: "Work" },
      { id: "personal", name: "Personal" },
    ],
    selectedEnvironmentId: null,
    selectedProjectKey: null,
    selectedWorkspaceId,
    onEnvironmentChange: () => undefined,
    onProjectChange: () => undefined,
    onWorkspaceChange: () => undefined,
  }).find((item) => item.id === "workspace");

describe("buildHomeListFilterMenuItems workspaces", () => {
  it("lists every workspace with the selected one on", () => {
    const item = workspaceItem("work");
    if (item === undefined || !("items" in item)) throw new Error("no workspace submenu");

    expect(item.title).toBe("Workspace");
    expect(item.items.map((entry) => [entry.title, selectedOf(entry)])).toEqual([
      ["All workspaces", false],
      ["Work", true],
      ["Personal", false],
    ]);
  });

  it("selects all workspaces when none is chosen", () => {
    const item = workspaceItem(null);
    if (item === undefined || !("items" in item)) throw new Error("no workspace submenu");

    expect(selectedOf(item.items[0])).toBe(true);
  });

  it("omits the submenu when no environment defines a workspace", () => {
    const items = buildHomeListFilterMenuItems({
      environments: [],
      projects: [],
      selectedEnvironmentId: null,
      selectedProjectKey: null,
      onEnvironmentChange: () => undefined,
      onProjectChange: () => undefined,
    });

    expect(items.some((item) => item.id === "workspace")).toBe(false);
  });});
