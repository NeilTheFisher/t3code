/**
 * dnd-kit's autoscroll keeps running once started, so a boolean alone cannot stop
 * the sidebar from scrolling under a drag that sits over the footer or the
 * workspace strip. This pins every scrollable box in the sidebar subtree to the
 * offset it had when the drag got there, and restores it on the way out.
 */
export type SidebarListScrollGuard = {
  /** True when the point is below the visible list: footer and strip territory. */
  isBelowList(point: { readonly x: number; readonly y: number }): boolean;
  start(): void;
  stop(): void;
};

type Scroller = { readonly element: HTMLElement; readonly scrollTop: number };

const SCROLLABLE_OVERFLOW = /(auto|scroll)/;

export function createSidebarListScrollGuard(
  getList: () => HTMLElement | null,
): SidebarListScrollGuard {
  let viewport: HTMLElement | null = null;
  let pinned: {
    readonly entries: ReadonlyArray<Scroller>;
    raf: number;
    release: () => void;
  } | null = null;

  const isScroller = (element: HTMLElement) =>
    SCROLLABLE_OVERFLOW.test(getComputedStyle(element).overflowY) &&
    element.scrollHeight > element.clientHeight + 4;

  /**
   * The sidebar subtree is scanned, not just the list's ancestors, because which
   * element dnd-kit autoscrolls depends on the layout.
   */
  const scrollers = (): ReadonlyArray<Scroller> => {
    const found: Scroller[] = [];
    const seen = new Set<HTMLElement>();
    const add = (candidate: Element | null | undefined) => {
      if (!(candidate instanceof HTMLElement) || seen.has(candidate) || !isScroller(candidate)) {
        return;
      }
      seen.add(candidate);
      found.push({ element: candidate, scrollTop: candidate.scrollTop });
    };
    const list = getList();
    for (let node = list?.parentElement ?? null; node !== null; node = node.parentElement) {
      add(node);
    }
    const root = list?.closest('[data-sidebar="sidebar"]') ?? null;
    if (root !== null) for (const candidate of root.querySelectorAll("*")) add(candidate);
    add(list?.ownerDocument.scrollingElement);
    return found;
  };

  const stop = () => {
    const guard = pinned;
    if (guard === null) return;
    pinned = null;
    cancelAnimationFrame(guard.raf);
    window.removeEventListener("pointerup", guard.release);
    window.removeEventListener("pointercancel", guard.release);
    for (const entry of guard.entries) entry.element.scrollTop = entry.scrollTop;
  };

  const start = () => {
    if (pinned !== null) return;
    const entries = scrollers();
    if (entries.length === 0) return;
    const guard = {
      entries,
      raf: 0,
      // A drag that ends without its sensor reporting still has to release the
      // pin, or the list would stay frozen.
      release: () => stop(),
    };
    const pin = () => {
      if (pinned !== guard) return;
      for (const entry of entries) {
        if (entry.element.scrollTop !== entry.scrollTop) entry.element.scrollTop = entry.scrollTop;
      }
      guard.raf = requestAnimationFrame(pin);
    };
    guard.raf = requestAnimationFrame(pin);
    pinned = guard;
    window.addEventListener("pointerup", guard.release, { once: true });
    window.addEventListener("pointercancel", guard.release, { once: true });
  };

  /**
   * The list's scroll viewport, cached: the <ul> is as tall as its content, so
   * its own rect reaches far below the visible list and cannot stand in for it.
   */
  const listViewport = (): HTMLElement | null => {
    if (viewport !== null && viewport.isConnected) return viewport;
    for (let node = getList()?.parentElement ?? null; node !== null; node = node.parentElement) {
      if (isScroller(node)) {
        viewport = node;
        return node;
      }
    }
    return null;
  };

  return {
    isBelowList: (point) => {
      const bounds = (listViewport() ?? getList())?.getBoundingClientRect();
      return bounds !== undefined && point.y > bounds.bottom;
    },
    start,
    stop,
  };
}
