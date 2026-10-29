import { EnvironmentId, ThreadId, TurnItemId } from "@t3tools/contracts";
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
