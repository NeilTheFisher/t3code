import { describe, expect, it } from "vite-plus/test";

import type { SidebarThreadWorkspace } from "@t3tools/contracts";

import {
  assignThreadToWorkspace,
  countThreadWorkspaceAttention,
  createThreadWorkspaceId,
  filterThreadsByWorkspace,
  formatThreadWorkspaceAttentionCount,
  orderThreadWorkspaceSearch,
  removeThreadWorkspaceAssignments,
  resolveAssignedWorkspaceId,
  threadWorkspaceKeyFor,
} from "./threadWorkspaces";

const workspaces: readonly SidebarThreadWorkspace[] = [
  { id: "work", name: "Work", icon: "building-2", tint: "info" },
  { id: "personal", name: "Personal", icon: "house", tint: "success" },
];

const thread = (environmentId: string, id: string) => ({ environmentId, id });

describe("thread workspaces", () => {
  it("keys threads by environment and id, like the sidebar's scoped key", () => {
    expect(threadWorkspaceKeyFor(thread("env-a", "thread-1"))).toBe("env-a:thread-1");
  });

  it("treats an assignment to a deleted workspace as unassigned", () => {
    const assignments = { "env-a:thread-1": "deleted" };
    expect(resolveAssignedWorkspaceId(assignments, "env-a:thread-1", workspaces)).toBeNull();
  });

  it("filters to the active workspace and passes everything through on All", () => {
    const threads = [thread("env-a", "1"), thread("env-a", "2")];
    const assignments = { "env-a:1": "work", "env-a:2": "personal" };

    expect(
      filterThreadsByWorkspace(threads, {
        assignments,
        workspaces,
        activeWorkspaceId: null,
      }),
    ).toHaveLength(2);
    expect(
      filterThreadsByWorkspace(threads, {
        assignments,
        workspaces,
        activeWorkspaceId: "work",
      }).map((entry) => entry.id),
    ).toEqual(["1"]);
  });

  it("counts only the threads a workspace needs attention for, plus an overall total", () => {
    const threads = [thread("env-a", "1"), thread("env-a", "2"), thread("env-a", "3")];
    const counts = countThreadWorkspaceAttention(threads, {
      assignments: { "env-a:1": "work", "env-a:2": "work" },
      workspaces,
      // The third thread is unassigned: it counts toward the total only.
      needsAttention: (entry) => entry.id !== "3",
    });

    expect(counts.byWorkspace.get("work")).toBe(2);
    expect(counts.byWorkspace.get("personal")).toBeUndefined();
    expect(counts.total).toBe(2);
  });

  it("sorts the active workspace first in search without dropping other matches", () => {
    const results = [thread("env-a", "1"), thread("env-a", "2"), thread("env-a", "3")];
    const ordered = orderThreadWorkspaceSearch(results, {
      assignments: { "env-a:1": "personal", "env-a:3": "work" },
      workspaces,
      activeWorkspaceId: "work",
    });

    expect(ordered.results.map((entry) => entry.id)).toEqual(["3", "1", "2"]);
    expect(ordered.otherWorkspacesStartIndex).toBe(1);
  });

  it("leaves search alone when every match is in the active workspace", () => {
    const results = [thread("env-a", "1")];
    const ordered = orderThreadWorkspaceSearch(results, {
      assignments: { "env-a:1": "work" },
      workspaces,
      activeWorkspaceId: "work",
    });

    expect(ordered.otherWorkspacesStartIndex).toBeNull();
    expect(ordered.results).toEqual(results);
  });

  it("moves assignments without disturbing the rest of the map", () => {
    const assignments = { "env-a:1": "work", "env-a:2": "personal" };

    expect(assignThreadToWorkspace(assignments, ["env-a:2"], "work")).toEqual({
      "env-a:1": "work",
      "env-a:2": "work",
    });
    expect(assignThreadToWorkspace(assignments, ["env-a:1"], null)).toEqual({
      "env-a:2": "personal",
    });
    expect(removeThreadWorkspaceAssignments(assignments, "work")).toEqual({
      "env-a:2": "personal",
    });
  });

  it("keeps the badge narrow and ids unique", () => {
    expect(formatThreadWorkspaceAttentionCount(0)).toBe("0");
    expect(formatThreadWorkspaceAttentionCount(9)).toBe("9");
    expect(formatThreadWorkspaceAttentionCount(12)).toBe("9+");

    const taken: SidebarThreadWorkspace[] = [
      { id: "ws-abc", name: "One", icon: "code", tint: "error" },
    ];
    // First candidate collides, so the generator must retry.
    const random = (() => {
      const values = [0.5, 0.7];
      let index = 0;
      return () => values[index++] ?? 0.9;
    })();
    const id = createThreadWorkspaceId(taken, random);
    expect(id).not.toBe("ws-abc");
    expect(id.startsWith("ws-")).toBe(true);
  });
});
