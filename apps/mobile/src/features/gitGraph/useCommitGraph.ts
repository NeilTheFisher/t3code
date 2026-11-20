import { errorDisplayMessage } from "@t3tools/client-runtime/errors";
import { squashAtomCommandFailure } from "@t3tools/client-runtime/state/runtime";
import type { EnvironmentId, VcsLogGraphResult } from "@t3tools/contracts";
import { AsyncResult } from "effect/reactivity";
import { msg } from "gt-react-native";
import { useCallback, useEffect, useEffectEvent, useRef, useState } from "react";

import { m } from "../../i18n/messages";
import { useAtomCommand } from "../../state/use-atom-command";
import { vcsEnvironment } from "../../state/vcs";
import {
  commitGraphCacheKey,
  commitGraphScopeKey,
  isFreshCommitGraph,
  readCachedCommitGraph,
  rememberCommitGraph,
} from "./commitGraphCache";

interface CommitGraphState {
  /** The query without its window size, so growing the window keeps the rows on screen. */
  readonly scope: string | null;
  readonly graph: VcsLogGraphResult | null;
  readonly error: string | null;
  readonly loading: boolean;
  readonly loadingMore: boolean;
}

interface CommitGraphRead {
  readonly graph: VcsLogGraphResult | null;
  readonly error: string | null;
  /** Nothing to paint yet. */
  readonly loading: boolean;
  /** Rows are on screen and a read is replacing them. */
  readonly loadingMore: boolean;
  readonly refresh: () => void;
}

function readFailureMessage(cause: unknown): string {
  return errorDisplayMessage(cause, m) ?? m(msg("Could not read this repository's history."));
}

export function useCommitGraph(input: {
  readonly environmentId: EnvironmentId;
  readonly cwd: string;
  readonly includeRemotes: boolean;
  readonly limit: number;
}): CommitGraphRead {
  const { environmentId, cwd, includeRemotes, limit } = input;
  const cacheKey = commitGraphCacheKey({ environmentId, cwd, includeRemotes, limit });
  const scopeKey = commitGraphScopeKey({ environmentId, cwd, includeRemotes });
  const [reloadToken, setReloadToken] = useState(0);
  const [state, setState] = useState<CommitGraphState>(() => {
    // A remount paints the read it left behind instead of flashing an empty screen.
    const cached = readCachedCommitGraph(cacheKey);
    return {
      scope: scopeKey,
      graph: cached?.result ?? null,
      error: null,
      loading: cached === undefined,
      loadingMore: false,
    };
  });
  const loadGraph = useAtomCommand(vcsEnvironment.logGraph, { reportFailure: false });
  const loadGraphEvent = useEffectEvent(loadGraph);
  const handledReloadToken = useRef(reloadToken);

  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- The graph is read from the environment over RPC.
  useEffect(() => {
    const cached = readCachedCommitGraph(cacheKey);
    const manual = handledReloadToken.current !== reloadToken;
    handledReloadToken.current = reloadToken;
    const shouldFetch = cached === undefined || manual || !isFreshCommitGraph(cached);
    setState((current) => {
      const sameQuery = current.scope === scopeKey && current.graph !== null;
      const graph = cached?.result ?? (sameQuery ? current.graph : null);
      return {
        scope: scopeKey,
        graph,
        error: null,
        loading: shouldFetch && graph === null,
        loadingMore: shouldFetch && graph !== null,
      };
    });
    if (!shouldFetch) return;
    let cancelled = false;
    void loadGraphEvent({
      environmentId,
      input: { cwd, limit, includeRemotes },
    }).then((result) => {
      if (cancelled) return;
      if (AsyncResult.isFailure(result)) {
        const message = readFailureMessage(squashAtomCommandFailure(result));
        setState((current) => ({
          ...current,
          scope: scopeKey,
          error: message,
          loading: false,
          loadingMore: false,
        }));
        return;
      }
      rememberCommitGraph(cacheKey, result.value);
      setState({
        scope: scopeKey,
        graph: result.value,
        error: null,
        loading: false,
        loadingMore: false,
      });
    });
    return () => {
      cancelled = true;
    };
  }, [cacheKey, scopeKey, environmentId, cwd, includeRemotes, limit, reloadToken]);

  const refresh = useCallback(() => setReloadToken((token) => token + 1), []);

  return {
    graph: state.graph,
    error: state.error,
    loading: state.loading,
    loadingMore: state.loadingMore,
    refresh,
  };
}
