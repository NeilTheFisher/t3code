import { describe, expect, it } from "@effect/vitest";
import {
  DEFAULT_SERVER_SETTINGS,
  type ServerSettings,
  type SidebarThreadWorkspace,
} from "@t3tools/contracts";

import {
  planThreadWorkspaceFile,
  planThreadWorkspaceUnfile,
  resolveThreadWorkspaceTarget,
} from "./threadWorkspaceTarget.ts";

const workspaces: readonly SidebarThreadWorkspace[] = [
  { id: "work", name: "Work", icon: "building-2", tint: "info" },
  { id: "personal", name: "Personal", icon: "house", tint: "success" },
];

const settings = (overrides: Partial<ServerSettings> = {}): ServerSettings => ({
  ...DEFAULT_SERVER_SETTINGS,
  sidebarThreadWorkspacesEnabled: true,
  sidebarThreadWorkspaces: [...workspaces],
  sidebarThreadWorkspaceAssignments: { "env-a:other": "personal" },
  ...overrides,
});

describe("resolving a workspace by what the user said", () => {
  it("prefers an id over a name", () => {
    expect(resolveThreadWorkspaceTarget(workspaces, "personal")).toEqual({
      kind: "found",
      workspace: workspaces[1],
    });
  });

  it("matches a name regardless of case", () => {
    expect(resolveThreadWorkspaceTarget(workspaces, "work")).toEqual({
      kind: "found",
      workspace: workspaces[0],
    });
  });

  it("refuses to guess between duplicate names", () => {
    const duplicates: readonly SidebarThreadWorkspace[] = [
      { id: "a", name: "Same", icon: "code", tint: "info" },
      { id: "b", name: "Same", icon: "code", tint: "info" },
    ];
    expect(resolveThreadWorkspaceTarget(duplicates, "same")).toEqual({
      kind: "ambiguous",
      ids: ["a", "b"],
    });
  });

  it("reports a name nobody uses", () => {
    expect(resolveThreadWorkspaceTarget(workspaces, "Errands")).toEqual({ kind: "missing" });
  });
});

describe("planning a workspace move", () => {
  it("changes one assignment and keeps the rest", () => {
    const plan = planThreadWorkspaceFile({
      settings: settings(),
      threadKey: "env-a:thread-1",
      workspace: "Work",
      createWorkspace: false,
      newWorkspaceId: "ws-new",
    });

    expect(plan).toEqual({
      kind: "ok",
      workspace: { id: "work", name: "Work" },
      patch: {
        sidebarThreadWorkspaceAssignments: {
          "env-a:other": "personal",
          "env-a:thread-1": "work",
        },
      },
    });
  });

  it("creates a missing workspace only when asked, and makes it visible", () => {
    const plan = planThreadWorkspaceFile({
      settings: settings({ sidebarThreadWorkspaces: [], sidebarThreadWorkspacesEnabled: false }),
      threadKey: "env-a:thread-1",
      workspace: "Errands",
      createWorkspace: true,
      newWorkspaceId: "ws-new",
    });

    expect(plan).toEqual({
      kind: "ok",
      workspace: { id: "ws-new", name: "Errands" },
      patch: {
        sidebarThreadWorkspaces: [
          { id: "ws-new", name: "Errands", icon: "briefcase", tint: "info" },
        ],
        sidebarThreadWorkspacesEnabled: true,
        sidebarThreadWorkspaceAssignments: {
          "env-a:other": "personal",
          "env-a:thread-1": "ws-new",
        },
      },
    });
  });

  it("files into the seeded defaults before anything has been saved", () => {
    const plan = planThreadWorkspaceFile({
      settings: settings({ sidebarThreadWorkspaces: [] }),
      threadKey: "env-a:thread-1",
      workspace: "Personal",
      createWorkspace: false,
      newWorkspaceId: "ws-new",
    });

    expect(plan.kind).toBe("ok");
    if (plan.kind !== "ok") return;
    expect(plan.workspace).toEqual({ id: "personal", name: "Personal" });
    expect(plan.patch.sidebarThreadWorkspaces).toBeUndefined();
  });

  it("lists the available names when the workspace does not exist", () => {
    const plan = planThreadWorkspaceFile({
      settings: settings(),
      threadKey: "env-a:thread-1",
      workspace: "Errands",
      createWorkspace: false,
      newWorkspaceId: "ws-new",
    });

    expect(plan).toEqual({ kind: "missing", names: ["Work", "Personal"] });
  });

  it("unfiles only the thread being moved", () => {
    expect(
      planThreadWorkspaceUnfile({ settings: settings(), threadKey: "env-a:thread-1" }),
    ).toEqual({ sidebarThreadWorkspaceAssignments: { "env-a:other": "personal" } });
  });
});
