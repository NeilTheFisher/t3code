import { describe, expect, it } from "vite-plus/test";

import { isSidebarRowMarkUnreadGesture } from "../Sidebar.logic";
import sidebarSource from "../Sidebar.tsx?raw";
import rowSource from "./SidebarThreadRow.tsx?raw";

const rowChrome = {} as EventTarget;
const nestedLink = {
  closest: (selector: string) => (selector === "a[href]" ? {} : null),
} as unknown as EventTarget;

// Middle-clicking a sidebar row marks it unread. Upstream keeps moving the row
// into new files, and the fork's handlers have been dropped by clean merges
// before, so both the gesture and its wiring are guarded here.
describe("middle-click mark-unread", () => {
  it("marks unread on the row's own chrome", () => {
    expect(isSidebarRowMarkUnreadGesture(1, rowChrome)).toBe(true);
  });

  it("leaves other buttons and nested links alone", () => {
    expect(isSidebarRowMarkUnreadGesture(0, rowChrome)).toBe(false);
    expect(isSidebarRowMarkUnreadGesture(2, rowChrome)).toBe(false);
    expect(isSidebarRowMarkUnreadGesture(1, nestedLink)).toBe(false);
  });

  it("stays wired into both row variants and the sidebar's action", () => {
    expect(rowSource.match(/onAuxClick=\{handleRowAuxClick\}/g)).toHaveLength(2);
    expect(rowSource.match(/onMouseDown=\{handleRowMouseDown\}/g)).toHaveLength(2);
    expect(rowSource).toContain("onMarkUnread(threadRef)");
    expect(sidebarSource).toContain("onMarkUnread={markThreadUnread}");
  });
});
