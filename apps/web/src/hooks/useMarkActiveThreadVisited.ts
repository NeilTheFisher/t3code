import { useEffect } from "react";

import { useUiStateStore } from "../uiStateStore";

export function useMarkActiveThreadVisited(
  threadKey: string | null,
  latestTurnCompletedAt: string | null,
): void {
  const markThreadVisited = useUiStateStore((store) => store.markThreadVisited);

  // oxlint-disable-next-line t3code/react-effect-budget -- Marking a thread visited writes the server store once its latest turn settles.
  useEffect(() => {
    if (threadKey === null || latestTurnCompletedAt === null) {
      return;
    }
    markThreadVisited(threadKey, latestTurnCompletedAt);
  }, [latestTurnCompletedAt, markThreadVisited, threadKey]);
}
