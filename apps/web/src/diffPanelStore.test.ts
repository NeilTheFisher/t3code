import { EnvironmentId, RunId, ThreadId, TurnItemId } from "@t3tools/contracts";
import type { ScopedThreadRef } from "@t3tools/contracts";
import * as DateTime from "effect/DateTime";
import { scopedThreadKey } from "@t3tools/client-runtime/environment";
import { beforeEach, describe, expect, it } from "vite-plus/test";

import {
  resolveToolCallDiffTarget,
  useDiffPanelSessionStore,
  useDiffPanelStore,
} from "./diffPanelStore";

const REF = {
  environmentId: "env-1",
  threadId: "thread-1",
} as unknown as ScopedThreadRef;

const selection = () => useDiffPanelStore.getState().byThreadKey["env-1:thread-1"];
const history = () => useDiffPanelStore.getState().historyByThreadKey["env-1:thread-1"];

describe("diffPanelStore", () => {
  beforeEach(() => {
    useDiffPanelStore.setState({
      byThreadKey: {},
      branchBaseRefByThreadKey: {},
    });
    useDiffPanelSessionStore.setState({ collapsedFileKeysByScopeKey: {} });
  });

  it("keeps a tool call selection independent of checkpoints and allows returning to Git changes", () => {
    const ref = { environmentId: EnvironmentId.make("env"), threadId: ThreadId.make("thread") };
    const target = {
      threadId: ThreadId.make("child"),
      itemId: TurnItemId.make("edit"),
      revision: "1",
    };
    const store = useDiffPanelStore.getState();
    store.selectToolCall(ref, target);
    store.reconcileTurnSelection(ref, []);
    expect(useDiffPanelStore.getState().byThreadKey[scopedThreadKey(ref)]).toEqual({
      kind: "tool-call",
      ...target,
    });
    store.selectGitScope(ref, "branch");
    expect(useDiffPanelStore.getState().byThreadKey[scopedThreadKey(ref)]).toEqual({
      kind: "branch",
      baseRef: null,
    });
  });

  it("refreshes a live tool-call target when its source item completes", () => {
    const target = {
      threadId: ThreadId.make("child"),
      itemId: TurnItemId.make("edit"),
      revision: "live",
    };
    const now = DateTime.makeUnsafe("2026-10-28T00:00:00Z");
    const row = {
      position: 0,
      visibility: "local" as const,
      sourceThreadId: target.threadId,
      sourceItemId: target.itemId,
      item: {
        id: target.itemId,
        threadId: target.threadId,
        runId: null,
        nodeId: null,
        providerThreadId: null,
        providerTurnId: null,
        nativeItemRef: null,
        parentItemId: null,
        ordinal: 1,
        status: "running" as const,
        title: null,
        startedAt: now,
        completedAt: null,
        updatedAt: now,
        type: "file_change" as const,
        fileName: "a.ts",
      },
    };
    expect(resolveToolCallDiffTarget(target, [row])).toBe(target);
    const completed = {
      ...row,
      item: { ...row.item, status: "completed" as const, completedAt: now },
    };
    expect(resolveToolCallDiffTarget(target, [completed])).toEqual({
      ...target,
      revision: DateTime.formatIso(now),
    });
    expect(
      resolveToolCallDiffTarget(target, [{ ...completed, sourceThreadId: ThreadId.make("other") }]),
    ).toBe(target);
    expect(resolveToolCallDiffTarget(target, [])).toBe(target);
  });

  it("retains fold choices when a panel consumer returns with fresh defaults", () => {
    const scopeKey = "environment-1:thread-1:branch";
    const defaults = new Set(["src/app.ts", "src/index.ts"]);
    useDiffPanelSessionStore.getState().updateCollapsedFileKeys(scopeKey, defaults, (current) => {
      const next = new Set(current);
      next.delete("src/app.ts");
      return next;
    });

    expect(useDiffPanelSessionStore.getState().collapsedFileKeysByScopeKey[scopeKey]).toEqual(
      new Set(["src/index.ts"]),
    );

    useDiffPanelSessionStore.getState().updateCollapsedFileKeys(scopeKey, new Set(), (current) => {
      const next = new Set(current);
      next.delete("src/index.ts");
      return next;
    });
    expect(useDiffPanelSessionStore.getState().collapsedFileKeysByScopeKey[scopeKey]).toEqual(
      new Set(),
    );

    useDiffPanelSessionStore
      .getState()
      .updateCollapsedFileKeys(scopeKey, defaults, (current) => current);
    expect(useDiffPanelSessionStore.getState().collapsedFileKeysByScopeKey[scopeKey]).toEqual(
      new Set(),
    );
    expect(defaults).toEqual(new Set(["src/app.ts", "src/index.ts"]));
  });

  it("keeps the repository filter across turns and drops it for a requested file", () => {
    const ref = { environmentId: EnvironmentId.make("env"), threadId: ThreadId.make("thread") };
    const selection = () => useDiffPanelStore.getState().byThreadKey[scopedThreadKey(ref)];
    const store = useDiffPanelStore.getState();
    store.selectTurnRepository(ref, RunId.make("run-1"), "/work/api");
    store.selectTurn(ref, RunId.make("run-2"));
    expect(selection()).toMatchObject({ turnId: "run-2", repository: "/work/api" });
    store.selectTurn(ref, RunId.make("run-2"), "web/src/index.ts");
    expect(selection()).toEqual({
      kind: "turn",
      turnId: "run-2",
      filePath: "web/src/index.ts",
      revealRequestId: 2,
    });
    store.selectTurnRepository(ref, RunId.make("run-2"), "/work/api");
    store.selectTurnRepository(ref, RunId.make("run-2"), null);
    expect(selection()).not.toHaveProperty("repository");
  });

  it("persists selection while fold changes and no-op unfolds never write to storage", async () => {
    const { storage, name } = useDiffPanelStore.persist.getOptions();
    if (!storage || !name) throw new Error("Diff panel persistence storage is unavailable.");
    const setItem = vi.spyOn(storage, "setItem");
    try {
      useDiffPanelStore.getState().selectBranchBaseRef(THREAD_REF, "origin/release");
      expect(setItem).toHaveBeenCalledOnce();
      const beforeFolding = await storage.getItem(name);
      expect(beforeFolding).toMatchObject({
        state: { byThreadKey: useDiffPanelStore.getState().byThreadKey },
      });
      setItem.mockClear();

      const scopeKey = "environment-1:thread-1:branch";
      useDiffPanelSessionStore
        .getState()
        .updateCollapsedFileKeys(scopeKey, new Set(), () => new Set(["src/app.ts"]));
      useDiffPanelSessionStore
        .getState()
        .updateCollapsedFileKeys(scopeKey, new Set(), (current) => current);

      expect(setItem).not.toHaveBeenCalled();
      const persisted = await storage.getItem(name);
      expect(persisted).toEqual(beforeFolding);
      expect(persisted?.state).not.toHaveProperty("collapsedFileKeysByScopeKey");
    } finally {
      setItem.mockRestore();
    }
  });

  it("defaults each thread to branch changes when the working tree is clean", () => {
    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "branch", baseRef: null });
  });

  it("defaults each thread to working changes when the working tree is dirty", () => {
    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF, true),
    ).toEqual({ kind: "unstaged" });
  });

  it("defaults to Changes before a thread is selected", () => {
    expect(selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, null)).toEqual({
      kind: "branch",
      baseRef: null,
    });
  });

  it("keeps a custom base when a generic open selects Changes again", () => {
    const store = useDiffPanelStore.getState();
    store.selectBranchBaseRef(THREAD_REF, "origin/release");
    store.selectGitScope(THREAD_REF, "branch");
    store.selectTurn(THREAD_REF, RunId.make("turn-1"));
    store.selectGitScope(THREAD_REF, "branch");

    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "branch", baseRef: "origin/release" });
  });

  it("preserves an explicit branch selection", () => {
    useDiffPanelStore.getState().selectGitScope(THREAD_REF, "branch");

    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "branch", baseRef: null });
  });

  it("clears incompatible selection fields when changing scopes", () => {
    const store = useDiffPanelStore.getState();
    store.selectTurn(THREAD_REF, RunId.make("turn-1"), "src/app.ts");
    store.selectGitScope(THREAD_REF, "unstaged");

    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "unstaged" });

    useDiffPanelStore.getState().selectBranchBaseRef(THREAD_REF, " origin/main ");
    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "branch", baseRef: "origin/main" });
  });

  it("clears a thread's turn and file when selecting working tree without changing another thread's branch base", () => {
    const otherThreadRef = scopeThreadRef(
      EnvironmentId.make("environment-1"),
      ThreadId.make("thread-2"),
    );
    const store = useDiffPanelStore.getState();
    store.selectBranchBaseRef(THREAD_REF, "origin/release");
    store.selectTurn(THREAD_REF, RunId.make("turn-1"), "src/app.ts");
    store.selectBranchBaseRef(otherThreadRef, "origin/main");

    store.selectGitScope(THREAD_REF, "unstaged");

    const { byThreadKey } = useDiffPanelStore.getState();
    expect(selectThreadDiffPanelSelection(byThreadKey, THREAD_REF)).toEqual({ kind: "unstaged" });
    expect(selectThreadDiffPanelSelection(byThreadKey, otherThreadRef)).toEqual({
      kind: "branch",
      baseRef: "origin/main",
    });

    store.selectGitScope(THREAD_REF, "branch");
    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "branch", baseRef: "origin/release" });
  });

  it("increments the reveal request when opening the same turn file again", () => {
    const turnId = RunId.make("turn-1");
    useDiffPanelStore.getState().selectTurn(THREAD_REF, turnId, "src/app.ts");
    useDiffPanelStore.getState().selectTurn(THREAD_REF, turnId, "src/app.ts");

    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "turn", turnId, filePath: "src/app.ts", revealRequestId: 2 });
  });

  it("restores the selected branch base after visiting another scope", () => {
    useDiffPanelStore.getState().selectBranchBaseRef(THREAD_REF, "origin/main");
    useDiffPanelStore.getState().selectGitScope(THREAD_REF, "unstaged");
    useDiffPanelStore.getState().selectGitScope(THREAD_REF, "branch");

    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({ kind: "branch", baseRef: "origin/main" });
  });

  it("reconciles a missing turn selection to the latest available turn", () => {
    const missingTurnId = RunId.make("turn-missing");
    const latestTurnId = RunId.make("turn-latest");
    useDiffPanelStore.getState().selectTurn(THREAD_REF, missingTurnId, "src/app.ts");
    useDiffPanelStore.getState().reconcileTurnSelection(THREAD_REF, [latestTurnId]);

    expect(
      selectThreadDiffPanelSelection(useDiffPanelStore.getState().byThreadKey, THREAD_REF),
    ).toEqual({
      kind: "turn",
      turnId: latestTurnId,
      filePath: "src/app.ts",
      revealRequestId: 1,
    });
  });
});

describe("diff panel history", () => {
  beforeEach(() => {
    useDiffPanelStore.setState({
      byThreadKey: {},
      branchBaseRefByThreadKey: {},
      historyByThreadKey: {},
    });
  });

  it("walks back and forth through the scopes that were visited", () => {
    const store = useDiffPanelStore.getState();
    store.selectGitScope(REF, "branch");
    store.selectCommitRange(REF, { from: "a^", to: "a", label: "a" });
    store.selectGitScope(REF, "unstaged");

    expect(selection()).toEqual({ kind: "unstaged" });
    useDiffPanelStore.getState().goBack(REF);
    expect(selection()).toEqual({ kind: "commit-range", from: "a^", to: "a", label: "a" });
    useDiffPanelStore.getState().goBack(REF);
    expect(selection()).toEqual({ kind: "branch", baseRef: null });
    useDiffPanelStore.getState().goForward(REF);
    expect(selection()).toEqual({ kind: "commit-range", from: "a^", to: "a", label: "a" });
  });

  it("stops at the ends instead of wrapping", () => {
    useDiffPanelStore.getState().selectGitScope(REF, "branch");
    useDiffPanelStore.getState().goBack(REF);
    useDiffPanelStore.getState().goBack(REF);

    expect(selection()).toEqual({ kind: "branch", baseRef: null });
    expect(history()?.index).toBe(0);

    useDiffPanelStore.getState().goForward(REF);
    expect(history()?.index).toBe(0);
  });

  it("drops the forward trail once a new scope is chosen", () => {
    const store = useDiffPanelStore.getState();
    store.selectGitScope(REF, "branch");
    store.selectCommitRange(REF, { from: "a^", to: "a", label: "a" });
    store.selectGitScope(REF, "unstaged");
    useDiffPanelStore.getState().goBack(REF);
    useDiffPanelStore.getState().goBack(REF);

    // Choosing a scope while stepped back means the old forward entries are gone.
    useDiffPanelStore.getState().selectSubmodule(REF, {
      path: "t3code",
      from: "b",
      to: "c",
      label: "t3code b..c",
    });
    expect(history()?.entries).toHaveLength(2);
    useDiffPanelStore.getState().goBack(REF);
    expect(selection()).toEqual({ kind: "branch", baseRef: null });
  });

  it("treats every git-backed scope as a git selection", () => {
    // A git scope missing here renders an empty diff, because the panel never
    // asks the preview RPC for it.
    expect(
      [
        { kind: "branch", baseRef: null },
        { kind: "unstaged" },
        { kind: "commit", sha: "a", baseRef: null },
        { kind: "commit-range", from: "a", to: "b", label: "a..b" },
        { kind: "checkout-uncommitted", cwd: "/repo", label: "main" },
      ].map((selection) => isGitDiffSelection(selection as never)),
    ).toEqual([true, true, true, true, true]);
    expect(
      isGitDiffSelection({
        kind: "turn",
        turnId: "t" as never,
        filePath: null,
        revealRequestId: 0,
      }),
    ).toBe(false);
  });

  it("scopes the diff to another checkout's uncommitted work", () => {
    useDiffPanelStore.getState().selectGitScope(REF, "branch");
    useDiffPanelStore.getState().selectCheckoutUncommitted(REF, {
      cwd: "/home/me/.t3/worktrees/feature",
      label: "feat/feature",
    });

    expect(selection()).toEqual({
      kind: "checkout-uncommitted",
      cwd: "/home/me/.t3/worktrees/feature",
      label: "feat/feature",
    });
    useDiffPanelStore.getState().goBack(REF);
    expect(selection()).toEqual({ kind: "branch", baseRef: null });
  });

  it("does not record the same scope twice in a row", () => {
    useDiffPanelStore.getState().selectGitScope(REF, "branch");
    useDiffPanelStore.getState().selectGitScope(REF, "branch");

    expect(history()?.entries).toHaveLength(1);
  });
});
