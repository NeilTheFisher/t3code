import {
  DEFAULT_SERVER_SETTINGS,
  EnvironmentId,
  ThreadId,
  type ServerSettings,
} from "@t3tools/contracts";
import { describe, expect, it } from "vite-plus/test";

import {
  planThreadWorkspaceAssignment,
  threadWorkspaceIdForThread,
  threadWorkspaceSettings,
} from "./threadWorkspaceLogic";

const workspaces = [
  { id: "work", name: "Work", icon: "briefcase", tint: "info" },
  { id: "personal", name: "Personal", icon: "house", tint: "success" },
];

const settings = (overrides: Partial<ServerSettings> = {}): ServerSettings => ({
  ...DEFAULT_SERVER_SETTINGS,
  sidebarThreadWorkspacesEnabled: true,
  sidebarThreadWorkspaces: workspaces,
  sidebarThreadWorkspaceAssignments: { "env-a:other": "personal" },
  ...overrides,
});

const thread = {
  environmentId: EnvironmentId.make("env-a"),
  id: ThreadId.make("thread-1"),
};

describe("mobile thread workspaces", () => {
  it("resolves an assignment only while workspaces are enabled", () => {
    expect(threadWorkspaceSettings(settings())).not.toBeNull();
    expect(threadWorkspaceSettings(settings({ sidebarThreadWorkspacesEnabled: false }))).toBeNull();
  });

  it("treats an assignment to a deleted workspace as unassigned", () => {
    expect(
      threadWorkspaceIdForThread(
        thread,
        threadWorkspaceSettings(
          settings({ sidebarThreadWorkspaceAssignments: { "env-a:thread-1": "deleted" } }),
        ),
      ),
    ).toBeNull();
  });

  it("files and unfiles one thread without dropping other assignments", () => {
    const assign = planThreadWorkspaceAssignment({
      settings: settings(),
      threadKey: "env-a:thread-1",
      workspaceId: "work",
    });
    expect(assign).toEqual({
      sidebarThreadWorkspaceAssignments: {
        "env-a:other": "personal",
        "env-a:thread-1": "work",
      },
    });

    const unfile = planThreadWorkspaceAssignment({
      settings: settings(),
      threadKey: "env-a:thread-1",
      workspaceId: null,
    });
    expect(unfile).toEqual({
      sidebarThreadWorkspaceAssignments: { "env-a:other": "personal" },
    });
  });

  it("refuses a workspace that no longer exists or a disabled strip", () => {
    expect(
      planThreadWorkspaceAssignment({
        settings: settings(),
        threadKey: "env-a:thread-1",
        workspaceId: "deleted",
      }),
    ).toBeNull();
    expect(
      planThreadWorkspaceAssignment({
        settings: settings({ sidebarThreadWorkspacesEnabled: false }),
        threadKey: "env-a:thread-1",
        workspaceId: "work",
      }),
    ).toBeNull();
  });
});
