import { describe, expect, it } from "vite-plus/test";

import type { SidebarThreadWorkspace } from "@t3tools/contracts";

import {
  assignThreadToWorkspace,
  countThreadWorkspaceAttention,
  createThreadWorkspaceId,
  filterThreadsByWorkspace,
  formatThreadWorkspaceAttentionCount,
  isUnsortedWorkspaceSelection,
  orderThreadWorkspaceSearch,
  removeThreadWorkspaceAssignments,
  resolveAssignedWorkspaceId,
  threadNeedsWorkspaceAttention,
  threadWorkspaceKeyFor,
  threadWorkspaceSettledCount,
  UNSORTED_WORKSPACE_SELECTION,
  type ThreadAttentionInput,
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

  it("keeps the list it was given when there is no workspace filter", () => {
    const threads = [thread("env-a", "1")];

    expect(filterThreadsByWorkspace(threads, null)).toBe(threads);
  });

  it("filters Unsorted to threads with no usable assignment", () => {
    const threads = [
      thread("env-a", "1"),
      thread("env-a", "2"),
      thread("env-a", "3"),
      thread("env-a", "4"),
    ];
    const assignments = {
      "env-a:1": "work",
      "env-a:2": "deleted",
      "env-a:3": "personal",
    };

    expect(
      filterThreadsByWorkspace(threads, {
        assignments,
        workspaces,
        activeWorkspaceId: UNSORTED_WORKSPACE_SELECTION,
      }).map((entry) => entry.id),
    ).toEqual(["2", "4"]);
  });

  it("lets a real workspace win over the Unsorted selection id", () => {
    const shadowing: readonly SidebarThreadWorkspace[] = [
      { id: UNSORTED_WORKSPACE_SELECTION, name: "Shadow", icon: "code", tint: "info" },
    ];
    const threads = [thread("env-a", "1"), thread("env-a", "2")];
    const input = {
      assignments: { "env-a:1": UNSORTED_WORKSPACE_SELECTION },
      workspaces: shadowing,
      activeWorkspaceId: UNSORTED_WORKSPACE_SELECTION,
    };

    expect(isUnsortedWorkspaceSelection(input.activeWorkspaceId, shadowing)).toBe(false);
    expect(filterThreadsByWorkspace(threads, input).map((entry) => entry.id)).toEqual(["1"]);
  });

  it("counts only the threads a workspace needs attention for, plus an overall total", () => {
    const threads = [thread("env-a", "1"), thread("env-a", "2"), thread("env-a", "3")];
    const counts = countThreadWorkspaceAttention(
      threads,
      {
        assignments: { "env-a:1": "work", "env-a:2": "work" },
        workspaces,
        activeWorkspaceId: null,
      },
      // The third thread is unassigned: it counts toward Unsorted and the total.
      (entry) => entry.id !== "3",
    );

    expect(counts.byWorkspace.get("work")).toBe(2);
    expect(counts.byWorkspace.get("personal")).toBeUndefined();
    expect(counts.unsorted).toBe(0);
    expect(counts.total).toBe(2);
  });

  it("counts attention in Unsorted, including assignments to deleted workspaces", () => {
    const threads = [thread("env-a", "1"), thread("env-a", "2")];
    const counts = countThreadWorkspaceAttention(
      threads,
      { assignments: { "env-a:2": "deleted" }, workspaces, activeWorkspaceId: "work" },
      () => true,
    );

    expect(counts.unsorted).toBe(2);
    expect(counts.total).toBe(2);
    expect(counts.byWorkspace.size).toBe(0);
  });

  it("draws no badges while the strip is off", () => {
    const counts = countThreadWorkspaceAttention([thread("env-a", "1")], null, () => true);

    expect(counts).toEqual({ byWorkspace: new Map(), unsorted: 0, total: 0 });
  });

  it("adds older unloaded settled pages only while no workspace is selected", () => {
    const unfiltered = { heldCount: 3, unloadedCount: 40 };

    expect(threadWorkspaceSettledCount({ ...unfiltered, filter: null })).toBe(43);
    expect(
      threadWorkspaceSettledCount({
        ...unfiltered,
        filter: { assignments: {}, workspaces, activeWorkspaceId: null },
      }),
    ).toBe(43);
    expect(
      threadWorkspaceSettledCount({
        ...unfiltered,
        filter: { assignments: {}, workspaces, activeWorkspaceId: "work" },
      }),
    ).toBe(3);
    expect(
      threadWorkspaceSettledCount({
        ...unfiltered,
        filter: {
          assignments: {},
          workspaces,
          activeWorkspaceId: UNSORTED_WORKSPACE_SELECTION,
        },
      }),
    ).toBe(3);
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

  it("sorts unassigned matches first while Unsorted is the active view", () => {
    const results = [thread("env-a", "1"), thread("env-a", "2"), thread("env-a", "3")];
    const ordered = orderThreadWorkspaceSearch(results, {
      assignments: { "env-a:1": "work", "env-a:3": "deleted" },
      workspaces,
      activeWorkspaceId: UNSORTED_WORKSPACE_SELECTION,
    });

    expect(ordered.results.map((entry) => entry.id)).toEqual(["2", "3", "1"]);
    expect(ordered.otherWorkspacesStartIndex).toBe(2);
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

  it("leaves search alone when there is no workspace filter", () => {
    const results = [thread("env-a", "1"), thread("env-a", "2")];

    const ordered = orderThreadWorkspaceSearch(results, null);

    expect(ordered.results).toBe(results);
    expect(ordered.otherWorkspacesStartIndex).toBeNull();
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

describe("workspace attention", () => {
  const attentionThread = (overrides: Partial<ThreadAttentionInput> = {}): ThreadAttentionInput =>
    ({
      archivedAt: null,
      settledOverride: null,
      hasPendingApprovals: false,
      hasPendingUserInput: false,
      pendingSubagentRequest: null,
      runtime: null,
      blockedOnThreadWait: false,
      ...overrides,
    }) as ThreadAttentionInput;
  const runtime = (value: unknown) => value as ThreadAttentionInput["runtime"];

  it("counts a decision waiting on the user", () => {
    expect(threadNeedsWorkspaceAttention(attentionThread({ hasPendingApprovals: true }))).toBe(
      true,
    );
    expect(threadNeedsWorkspaceAttention(attentionThread({ hasPendingUserInput: true }))).toBe(
      true,
    );
  });

  it("counts a failed or limited run, but not a working one", () => {
    expect(
      threadNeedsWorkspaceAttention(attentionThread({ runtime: runtime({ status: "failed" }) })),
    ).toBe(true);
    expect(
      threadNeedsWorkspaceAttention(
        attentionThread({ runtime: runtime({ status: "failed", lastErrorClass: "usage_limit" }) }),
      ),
    ).toBe(true);
    // Working is deliberately not a "needs you" state.
    expect(
      threadNeedsWorkspaceAttention(attentionThread({ runtime: runtime({ status: "running" }) })),
    ).toBe(false);
  });

  it("ignores an idle thread, an archived one, and a settled one", () => {
    expect(threadNeedsWorkspaceAttention(attentionThread())).toBe(false);
    expect(
      threadNeedsWorkspaceAttention(
        attentionThread({ archivedAt: "2026-01-01T00:00:00.000Z", hasPendingApprovals: true }),
      ),
    ).toBe(false);
    expect(
      threadNeedsWorkspaceAttention(
        attentionThread({ settledOverride: "settled", hasPendingApprovals: true }),
      ),
    ).toBe(false);
  });
});
