import "~/index.css";

import { expect, it, vi } from "vite-plus/test";
import { userEvent } from "vite-plus/test/browser";

import type { SidebarThreadWorkspace } from "@t3tools/contracts";

import { render } from "../../../test/render";
import { ThreadWorkspaceStrip } from "./ThreadWorkspaceStrip";

const workspaces: readonly SidebarThreadWorkspace[] = [
  { id: "work", name: "Work", icon: "building-2", tint: "info" },
  { id: "personal", name: "Personal", icon: "house", tint: "success" },
];

// The strip only talks to its props, so it needs no router.
const baseProps = {
  workspaces,
  activeWorkspaceId: null,
  attentionByWorkspace: new Map<string, number>(),
  attentionTotal: 0,
  dragOverWorkspaceId: null,
  registerIconElement: () => {},
  onCreate: () => "new-workspace",
  onUpdate: () => {},
  onDelete: () => {},
} as const;

it("badges a workspace that needs the user and caps the count", async () => {
  await using screen = await render(
    <ThreadWorkspaceStrip
      {...baseProps}
      attentionByWorkspace={
        new Map([
          ["work", 12],
          ["personal", 3],
        ])
      }
      attentionTotal={15}
      onSelect={() => {}}
    />,
    { router: false },
  );

  await expect
    .element(screen.getByRole("button", { name: "Work workspace" }))
    .toHaveTextContent("9+");
  await expect
    .element(screen.getByRole("button", { name: "Personal workspace" }))
    .toHaveTextContent("3");
  // The overall badge counts every thread that needs the user, assigned or not.
  await expect
    .element(screen.getByRole("button", { name: "All workspaces" }))
    .toHaveTextContent("9+");
});

it("leaves a workspace silent when nothing needs the user", async () => {
  await using screen = await render(<ThreadWorkspaceStrip {...baseProps} onSelect={() => {}} />, {
    router: false,
  });

  const work = screen.getByRole("button", { name: "Work workspace" });
  await expect.element(work).toBeVisible();
  // Only the glyph renders, so any badge count would show up here.
  expect(work.element().textContent).toBe("");
});

it("marks the active workspace and switches on click, with All clearing the filter", async () => {
  const onSelect = vi.fn();
  await using screen = await render(
    <ThreadWorkspaceStrip {...baseProps} activeWorkspaceId="personal" onSelect={onSelect} />,
    { router: false },
  );

  await expect
    .element(screen.getByRole("button", { name: "Personal workspace" }))
    .toHaveAttribute("aria-pressed", "true");
  await expect
    .element(screen.getByRole("button", { name: "Work workspace" }))
    .toHaveAttribute("aria-pressed", "false");

  await userEvent.click(screen.getByRole("button", { name: "Work workspace" }));
  expect(onSelect).toHaveBeenCalledWith("work");

  await userEvent.click(screen.getByRole("button", { name: "All workspaces" }));
  expect(onSelect).toHaveBeenCalledWith(null);
});
