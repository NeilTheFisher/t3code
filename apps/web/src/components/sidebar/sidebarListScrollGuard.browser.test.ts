import { describe, expect, it } from "vite-plus/test";

import { createSidebarListScrollGuard } from "./sidebarListScrollGuard";

// A 600px list clipped by a 120px scroller, the way the sidebar clips a long list.
function mountScrollableSidebar() {
  const sidebar = document.createElement("div");
  sidebar.dataset.sidebar = "sidebar";
  const viewport = document.createElement("div");
  viewport.style.cssText = "height:120px;overflow-y:auto";
  const content = document.createElement("div");
  content.style.cssText = "height:600px";
  const list = document.createElement("ul");
  content.append(list);
  viewport.append(content);
  sidebar.append(viewport);
  document.body.append(sidebar);
  return { viewport, list, [Symbol.dispose]: () => sidebar.remove() };
}

describe("the sidebar list scroll guard", () => {
  it("puts every scroller back where the drag found it", () => {
    using fixture = mountScrollableSidebar();
    const guard = createSidebarListScrollGuard(() => fixture.list);

    fixture.viewport.scrollTop = 40;
    guard.start();
    // What dnd-kit's autoscroll would do while the pointer sits on the footer.
    fixture.viewport.scrollTop = 90;
    guard.stop();

    expect(fixture.viewport.scrollTop).toBe(40);
  });

  it("treats everything below the visible list as footer territory", () => {
    using fixture = mountScrollableSidebar();
    const guard = createSidebarListScrollGuard(() => fixture.list);
    const bounds = fixture.viewport.getBoundingClientRect();

    expect(guard.isBelowList({ x: bounds.left, y: bounds.bottom - 1 })).toBe(false);
    expect(guard.isBelowList({ x: bounds.left, y: bounds.bottom + 1 })).toBe(true);
  });
});
