import type { ScopedThreadRef } from "@t3tools/contracts";
import { beforeEach, describe, expect, it } from "vite-plus/test";

import { useDiffPanelStore } from "./diffPanelStore";

const REF = {
  environmentId: "env-1",
  threadId: "thread-1",
} as unknown as ScopedThreadRef;

const selection = () => useDiffPanelStore.getState().byThreadKey["env-1:thread-1"];
const history = () => useDiffPanelStore.getState().historyByThreadKey["env-1:thread-1"];

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

  it("does not record the same scope twice in a row", () => {
    useDiffPanelStore.getState().selectGitScope(REF, "branch");
    useDiffPanelStore.getState().selectGitScope(REF, "branch");

    expect(history()?.entries).toHaveLength(1);
  });
});
