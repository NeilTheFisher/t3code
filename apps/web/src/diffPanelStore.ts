import type { ThreadStructureVisibleTurnItem } from "@t3tools/client-runtime/state/shell";
import { turnItemDetailRevision } from "@t3tools/client-runtime/work-log/item-detail";
import { scopedThreadKey } from "@t3tools/client-runtime/environment";
import type { RunId, ScopedThreadRef, ThreadId, TurnItemId } from "@t3tools/contracts";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { resolveStorage } from "./lib/storage";

export interface ToolCallDiffTarget {
  readonly threadId: ThreadId;
  readonly itemId: TurnItemId;
  readonly revision: string;
}

export type DiffPanelSelection =
  | ({ kind: "tool-call" } & ToolCallDiffTarget)
  | { kind: "branch"; baseRef: string | null }
  | { kind: "unstaged" }
  | { kind: "commit-range"; from: string; to: string; label: string }
  | { kind: "submodule"; path: string; from: string; to: string; label: string }
  | { kind: "turn"; turnId: RunId; filePath: string | null; revealRequestId: number };

const DEFAULT_SELECTION: DiffPanelSelection = { kind: "branch", baseRef: null };
const DEFAULT_WORKING_TREE_SELECTION: DiffPanelSelection = { kind: "unstaged" };

/**
 * The scopes visited for a thread, so the panel can step back and forth. Held in
 * memory only: a reload starts a fresh trail rather than replaying old scopes.
 */
interface DiffPanelHistory {
  readonly entries: ReadonlyArray<DiffPanelSelection>;
  readonly index: number;
}

interface DiffPanelStoreState {
  byThreadKey: Record<string, DiffPanelSelection>;
  branchBaseRefByThreadKey: Record<string, string | null>;
  historyByThreadKey: Record<string, DiffPanelHistory>;
  selectGitScope: (ref: ScopedThreadRef, scope: "branch" | "unstaged") => void;
  selectBranchBaseRef: (ref: ScopedThreadRef, baseRef: string | null) => void;
  selectToolCall: (ref: ScopedThreadRef, target: ToolCallDiffTarget) => void;
  selectCommitRange: (
    ref: ScopedThreadRef,
    range: { from: string; to: string; label: string },
  ) => void;
  selectSubmodule: (
    ref: ScopedThreadRef,
    range: { path: string; from: string; to: string; label: string },
  ) => void;
  selectTurn: (ref: ScopedThreadRef, turnId: RunId, filePath?: string) => void;
  reconcileTurnSelection: (ref: ScopedThreadRef, availableTurnIds: ReadonlyArray<RunId>) => void;
  goBack: (ref: ScopedThreadRef) => void;
  goForward: (ref: ScopedThreadRef) => void;
  removeThread: (ref: ScopedThreadRef) => void;
}

function selectionKey(selection: DiffPanelSelection): string {
  return JSON.stringify(selection);
}

/** Records a newly chosen scope, dropping any forward trail it replaces. */
function pushHistory(
  history: Record<string, DiffPanelHistory>,
  threadKey: string,
  selection: DiffPanelSelection,
): Record<string, DiffPanelHistory> {
  const current = history[threadKey];
  const entries = current?.entries.slice(0, (current?.index ?? -1) + 1) ?? [];
  const last = entries[entries.length - 1];
  if (last !== undefined && selectionKey(last) === selectionKey(selection)) return history;
  return {
    ...history,
    [threadKey]: { entries: [...entries, selection], index: entries.length },
  };
}

/** Moves the history cursor and follows it with the thread's selection. */
function stepHistory(
  state: DiffPanelStoreState,
  ref: ScopedThreadRef,
  direction: -1 | 1,
): Partial<DiffPanelStoreState> {
  const threadKey = scopedThreadKey(ref);
  const history = state.historyByThreadKey[threadKey];
  if (history === undefined) return {};
  const index = history.index + direction;
  const selection = history.entries[index];
  if (selection === undefined) return {};
  return {
    byThreadKey: { ...state.byThreadKey, [threadKey]: selection },
    historyByThreadKey: { ...state.historyByThreadKey, [threadKey]: { ...history, index } },
  };
}

function normalizeBaseRef(baseRef: string | null): string | null {
  const normalized = baseRef?.trim();
  return normalized ? normalized : null;
}

export const useDiffPanelStore = create<DiffPanelStoreState>()(
  persist(
    (set) => ({
      byThreadKey: {},
      branchBaseRefByThreadKey: {},
      historyByThreadKey: {},
      selectGitScope: (ref, scope) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          const previous = state.byThreadKey[threadKey];
          const previousBaseRef =
            previous?.kind === "branch"
              ? previous.baseRef
              : (state.branchBaseRefByThreadKey[threadKey] ?? null);
          const selection: DiffPanelSelection =
            scope === "branch"
              ? { kind: "branch", baseRef: previousBaseRef }
              : { kind: "unstaged" };
          return {
            byThreadKey: { ...state.byThreadKey, [threadKey]: selection },
            historyByThreadKey: pushHistory(state.historyByThreadKey, threadKey, selection),
            branchBaseRefByThreadKey:
              previous?.kind === "branch"
                ? { ...state.branchBaseRefByThreadKey, [threadKey]: previous.baseRef }
                : state.branchBaseRefByThreadKey,
          };
        }),
      selectBranchBaseRef: (ref, baseRef) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          const normalizedBaseRef = normalizeBaseRef(baseRef);
          const selection: DiffPanelSelection = { kind: "branch", baseRef: normalizedBaseRef };
          return {
            byThreadKey: { ...state.byThreadKey, [threadKey]: selection },
            historyByThreadKey: pushHistory(state.historyByThreadKey, threadKey, selection),
            branchBaseRefByThreadKey: {
              ...state.branchBaseRefByThreadKey,
              [threadKey]: normalizedBaseRef,
            },
          };
        }),
      selectToolCall: (ref, target) =>
        set((state) => ({
          byThreadKey: {
            ...state.byThreadKey,
            [scopedThreadKey(ref)]: { kind: "tool-call", ...target },
          },
        })),
      selectCommitRange: (ref, range) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          const previous = state.byThreadKey[threadKey];
          const selection: DiffPanelSelection = {
            kind: "commit-range",
            from: range.from,
            to: range.to,
            label: range.label,
          };
          return {
            byThreadKey: { ...state.byThreadKey, [threadKey]: selection },
            historyByThreadKey: pushHistory(state.historyByThreadKey, threadKey, selection),
            // A commit range replaces the branch base ref, so the branch scope
            // keeps the base the user last chose once they leave the range.
            branchBaseRefByThreadKey:
              previous?.kind === "branch"
                ? { ...state.branchBaseRefByThreadKey, [threadKey]: previous.baseRef }
                : state.branchBaseRefByThreadKey,
          };
        }),
      selectSubmodule: (ref, range) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          const selection: DiffPanelSelection = {
            kind: "submodule",
            path: range.path,
            from: range.from,
            to: range.to,
            label: range.label,
          };
          return {
            byThreadKey: { ...state.byThreadKey, [threadKey]: selection },
            historyByThreadKey: pushHistory(state.historyByThreadKey, threadKey, selection),
          };
        }),
      selectTurn: (ref, turnId, filePath) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          const previous = state.byThreadKey[threadKey];
          const selection: DiffPanelSelection = {
            kind: "turn",
            turnId,
            filePath: filePath?.trim() || null,
            revealRequestId: previous?.kind === "turn" ? previous.revealRequestId + 1 : 1,
          };
          return {
            byThreadKey: { ...state.byThreadKey, [threadKey]: selection },
            historyByThreadKey: pushHistory(state.historyByThreadKey, threadKey, selection),
          };
        }),
      goBack: (ref) => set((state) => stepHistory(state, ref, -1)),
      goForward: (ref) => set((state) => stepHistory(state, ref, 1)),
      reconcileTurnSelection: (ref, availableTurnIds) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          const previous = state.byThreadKey[threadKey];
          const latestTurnId = availableTurnIds[0];
          if (
            previous?.kind !== "turn" ||
            latestTurnId === undefined ||
            availableTurnIds.includes(previous.turnId)
          ) {
            return state;
          }
          return {
            byThreadKey: {
              ...state.byThreadKey,
              [threadKey]: { ...previous, turnId: latestTurnId },
            },
          };
        }),
      removeThread: (ref) =>
        set((state) => {
          const threadKey = scopedThreadKey(ref);
          if (!(threadKey in state.byThreadKey) && !(threadKey in state.branchBaseRefByThreadKey)) {
            return state;
          }
          const { [threadKey]: _removed, ...byThreadKey } = state.byThreadKey;
          const { [threadKey]: _removedHistory, ...historyByThreadKey } = state.historyByThreadKey;
          const { [threadKey]: _removedBaseRef, ...branchBaseRefByThreadKey } =
            state.branchBaseRefByThreadKey;
          return { byThreadKey, branchBaseRefByThreadKey, historyByThreadKey };
        }),
    }),
    {
      name: "t3code:diff-panel-state:v1",
      version: 2,
      storage: createJSONStorage(() =>
        resolveStorage(typeof window !== "undefined" ? window.localStorage : undefined),
      ),
      partialize: (state) => ({
        byThreadKey: state.byThreadKey,
        branchBaseRefByThreadKey: state.branchBaseRefByThreadKey,
      }),
    },
  ),
);

interface DiffPanelSessionStoreState {
  collapsedFileKeysByScopeKey: Record<string, ReadonlySet<string>>;
  updateCollapsedFileKeys: (
    scopeKey: string,
    defaults: ReadonlySet<string>,
    update: (current: ReadonlySet<string>) => ReadonlySet<string>,
  ) => void;
}

// Session-only so folds survive right-panel switches without changing reload defaults.
export const useDiffPanelSessionStore = create<DiffPanelSessionStoreState>()((set) => ({
  collapsedFileKeysByScopeKey: {},
  updateCollapsedFileKeys: (scopeKey, defaults, update) =>
    set((state) => {
      const current = state.collapsedFileKeysByScopeKey[scopeKey] ?? defaults;
      const next = update(current);
      if (next === current) return state;
      return {
        collapsedFileKeysByScopeKey: { ...state.collapsedFileKeysByScopeKey, [scopeKey]: next },
      };
    }),
}));

export function selectThreadDiffPanelSelection(
  byThreadKey: Record<string, DiffPanelSelection>,
  ref: ScopedThreadRef | null | undefined,
  hasWorkingTreeChanges = false,
): DiffPanelSelection {
  if (!ref) return DEFAULT_SELECTION;
  return (
    byThreadKey[scopedThreadKey(ref)] ??
    (hasWorkingTreeChanges ? DEFAULT_WORKING_TREE_SELECTION : DEFAULT_SELECTION)
  );
}

export function resolveToolCallDiffTarget(
  target: ToolCallDiffTarget,
  items: ReadonlyArray<ThreadStructureVisibleTurnItem>,
): ToolCallDiffTarget {
  const row = items.find(
    (row) => row.sourceThreadId === target.threadId && row.sourceItemId === target.itemId,
  );
  if (row?.item.type !== "file_change") return target;
  const revision = turnItemDetailRevision(row.item);
  return revision === target.revision ? target : { ...target, revision };
}
