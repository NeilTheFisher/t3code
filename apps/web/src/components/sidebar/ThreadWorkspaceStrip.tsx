import {
  BriefcaseIcon,
  Building2Icon,
  CodeIcon,
  FlaskConicalIcon,
  GraduationCapIcon,
  HouseIcon,
  LayoutGridIcon,
  NotebookPenIcon,
  PaletteIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import type { ComponentType } from "react";
import { useRef, useState } from "react";
import type { SidebarThreadWorkspace } from "@t3tools/contracts";

import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Popover, PopoverPopup } from "../ui/popover";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import {
  DEFAULT_THREAD_WORKSPACE_ICON,
  DEFAULT_THREAD_WORKSPACE_TINT,
  formatThreadWorkspaceAttentionCount,
  isThreadWorkspaceIconKey,
  isThreadWorkspaceTint,
  THREAD_WORKSPACE_ICON_KEYS,
  THREAD_WORKSPACE_TINTS,
  type ThreadWorkspaceIconKey,
  type ThreadWorkspaceTint,
} from "./threadWorkspaces";

const ICONS: Record<ThreadWorkspaceIconKey, ComponentType<{ className?: string }>> = {
  briefcase: BriefcaseIcon,
  "building-2": Building2Icon,
  house: HouseIcon,
  "flask-conical": FlaskConicalIcon,
  "notebook-pen": NotebookPenIcon,
  code: CodeIcon,
  "graduation-cap": GraduationCapIcon,
  palette: PaletteIcon,
};

/**
 * Identity colors for workspaces, drawn from the semantic theme tokens so light
 * and dark both keep contrast. A tint is this feature's idea of a look, not a
 * generic control style, so it stays here rather than in `components/ui`.
 */
const TINTS: Record<
  ThreadWorkspaceTint,
  { readonly resting: string; readonly active: string; readonly swatch: string }
> = {
  info: {
    resting: "text-info hover:bg-info/12",
    active: "bg-info/15 text-info ring-info/45",
    swatch: "bg-info",
  },
  warning: {
    resting: "text-warning hover:bg-warning/12",
    active: "bg-warning/15 text-warning ring-warning/45",
    swatch: "bg-warning",
  },
  success: {
    resting: "text-success hover:bg-success/12",
    active: "bg-success/15 text-success ring-success/45",
    swatch: "bg-success",
  },
  error: {
    resting: "text-error hover:bg-error/12",
    active: "bg-error/15 text-error ring-error/45",
    swatch: "bg-error",
  },
  update: {
    resting: "text-update hover:bg-update/12",
    active: "bg-update/15 text-update ring-update/45",
    swatch: "bg-update",
  },
  primary: {
    resting: "text-primary hover:bg-primary/12",
    active: "bg-primary/15 text-primary ring-primary/45",
    swatch: "bg-primary",
  },
};

const ICON_BUTTON_CLASS =
  "relative flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full ring-1 ring-transparent outline-hidden transition-[transform,box-shadow,background-color] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring motion-reduce:transition-none";

function WorkspaceGlyph({ icon, className }: { icon: string; className?: string }) {
  const Icon = ICONS[isThreadWorkspaceIconKey(icon) ? icon : DEFAULT_THREAD_WORKSPACE_ICON];
  return <Icon className={cn("size-3.5", className)} />;
}

function AttentionBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span
      aria-hidden="true"
      className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-error px-1 text-3xs leading-none font-semibold text-error-foreground tabular-nums"
    >
      {formatThreadWorkspaceAttentionCount(count)}
    </span>
  );
}

export type ThreadWorkspaceStripProps = {
  readonly workspaces: readonly SidebarThreadWorkspace[];
  readonly activeWorkspaceId: string | null;
  readonly attentionByWorkspace: ReadonlyMap<string, number>;
  readonly attentionTotal: number;
  readonly dragOverWorkspaceId: string | null;
  readonly registerIconElement: (workspaceId: string, element: HTMLButtonElement | null) => void;
  readonly onSelect: (workspaceId: string | null) => void;
  readonly onCreate: () => string;
  readonly onUpdate: (
    workspaceId: string,
    patch: Partial<Pick<SidebarThreadWorkspace, "name" | "icon" | "tint">>,
  ) => void;
  readonly onDelete: (workspaceId: string) => void;
};

export function ThreadWorkspaceStrip(props: ThreadWorkspaceStripProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftName, setDraftName] = useState("");
  const [draftIcon, setDraftIcon] = useState<ThreadWorkspaceIconKey>(DEFAULT_THREAD_WORKSPACE_ICON);
  const [draftTint, setDraftTint] = useState<ThreadWorkspaceTint>(DEFAULT_THREAD_WORKSPACE_TINT);
  const anchorRef = useRef<HTMLElement | null>(null);
  const elements = useRef(new Map<string, HTMLButtonElement>());

  const editingWorkspace = props.workspaces.find((workspace) => workspace.id === editingId) ?? null;

  const openEditor = (workspace: SidebarThreadWorkspace) => {
    anchorRef.current = elements.current.get(workspace.id) ?? null;
    setDraftName(workspace.name);
    setDraftIcon(
      isThreadWorkspaceIconKey(workspace.icon) ? workspace.icon : DEFAULT_THREAD_WORKSPACE_ICON,
    );
    setDraftTint(
      isThreadWorkspaceTint(workspace.tint) ? workspace.tint : DEFAULT_THREAD_WORKSPACE_TINT,
    );
    setEditingId(workspace.id);
  };

  const commitEditor = () => {
    if (editingId === null) return;
    props.onUpdate(editingId, {
      name: draftName.trim() || "Workspace",
      icon: draftIcon,
      tint: draftTint,
    });
    setEditingId(null);
  };

  return (
    <TooltipProvider delay={200} closeDelay={0} timeout={400}>
      <div
        aria-label="Workspaces"
        className="flex items-center gap-1 px-1"
        data-slot="sidebar-thread-workspaces"
        role="group"
      >
        <Tooltip>
          <TooltipTrigger
            render={
              <button
                aria-label="All workspaces"
                aria-pressed={props.activeWorkspaceId === null}
                className={cn(
                  ICON_BUTTON_CLASS,
                  props.activeWorkspaceId === null
                    ? "bg-foreground/10 text-foreground ring-foreground/20"
                    : "text-sidebar-muted-foreground hover:bg-sidebar-row-hover hover:text-sidebar-foreground",
                )}
                onClick={() => props.onSelect(null)}
                type="button"
              >
                <LayoutGridIcon className="size-3.5" />
                <AttentionBadge count={props.attentionTotal} />
              </button>
            }
          />
          <TooltipPopup side="top">All workspaces</TooltipPopup>
        </Tooltip>

        {props.workspaces.map((workspace) => {
          const tint = isThreadWorkspaceTint(workspace.tint)
            ? TINTS[workspace.tint]
            : TINTS[DEFAULT_THREAD_WORKSPACE_TINT];
          const isActive = props.activeWorkspaceId === workspace.id;
          return (
            <Tooltip key={workspace.id}>
              <TooltipTrigger
                render={
                  <button
                    aria-label={`${workspace.name} workspace`}
                    aria-pressed={isActive}
                    className={cn(
                      ICON_BUTTON_CLASS,
                      isActive ? tint.active : cn(tint.resting, "ring-transparent"),
                      props.dragOverWorkspaceId === workspace.id && "scale-110 ring-2 ring-ring",
                    )}
                    onClick={() => props.onSelect(workspace.id)}
                    onContextMenu={(event) => {
                      event.preventDefault();
                      openEditor(workspace);
                    }}
                    ref={(element) => {
                      if (element === null) elements.current.delete(workspace.id);
                      else elements.current.set(workspace.id, element);
                      props.registerIconElement(workspace.id, element);
                    }}
                    type="button"
                  >
                    <WorkspaceGlyph icon={workspace.icon} />
                    <AttentionBadge count={props.attentionByWorkspace.get(workspace.id) ?? 0} />
                  </button>
                }
              />
              <TooltipPopup side="top">{workspace.name} — right-click to edit</TooltipPopup>
            </Tooltip>
          );
        })}

        <Tooltip>
          <TooltipTrigger
            render={
              <button
                aria-label="New workspace"
                className={cn(
                  ICON_BUTTON_CLASS,
                  "text-sidebar-muted-foreground hover:bg-sidebar-row-hover hover:text-sidebar-foreground",
                )}
                onClick={() => {
                  const id = props.onCreate();
                  const created = { id, name: "Workspace" };
                  anchorRef.current = elements.current.get(id) ?? null;
                  setDraftName(created.name);
                  setDraftIcon(DEFAULT_THREAD_WORKSPACE_ICON);
                  setDraftTint(DEFAULT_THREAD_WORKSPACE_TINT);
                  setEditingId(id);
                }}
                type="button"
              >
                <PlusIcon className="size-3.5" />
              </button>
            }
          />
          <TooltipPopup side="top">New workspace</TooltipPopup>
        </Tooltip>
      </div>

      <Popover
        open={editingWorkspace !== null}
        onOpenChange={(open) => {
          if (!open) setEditingId(null);
        }}
      >
        <PopoverPopup
          align="start"
          anchor={anchorRef}
          data-slot="thread-workspace-editor"
          padding="compact"
          side="top"
          sideOffset={8}
          width="sm"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium">
                {editingWorkspace ? `Editing “${editingWorkspace.name}”` : "Editing workspace"}
              </span>
              <span className="text-xs text-muted-foreground">Update name and icon</span>
            </div>

            <div className="flex items-center gap-2">
              <div
                aria-hidden="true"
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-md border border-border",
                  TINTS[draftTint].resting,
                )}
              >
                <WorkspaceGlyph className="size-4" icon={draftIcon} />
              </div>
              <Input
                aria-label="Workspace name"
                autoFocus
                onChange={(event) => setDraftName(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    commitEditor();
                  }
                }}
                value={draftName}
              />
            </div>

            <div aria-label="Workspace icon" className="flex flex-wrap gap-1" role="group">
              {THREAD_WORKSPACE_ICON_KEYS.map((icon) => (
                <button
                  aria-label={icon}
                  aria-pressed={draftIcon === icon}
                  className={cn(
                    "flex size-7 cursor-pointer items-center justify-center rounded-md outline-hidden transition-colors duration-150 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring motion-reduce:transition-none",
                    draftIcon === icon
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                  )}
                  key={icon}
                  onClick={() => setDraftIcon(icon)}
                  type="button"
                >
                  <WorkspaceGlyph icon={icon} />
                </button>
              ))}
            </div>

            <div aria-label="Workspace color" className="flex gap-1.5" role="group">
              {THREAD_WORKSPACE_TINTS.map((tint) => (
                <button
                  aria-label={tint}
                  aria-pressed={draftTint === tint}
                  className={cn(
                    "size-5 cursor-pointer rounded-full outline-hidden transition-transform duration-150 ease-out focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring motion-reduce:transition-none",
                    TINTS[tint].swatch,
                    draftTint === tint
                      ? "scale-105 ring-2 ring-foreground/40 ring-inset"
                      : "hover:scale-105",
                  )}
                  key={tint}
                  onClick={() => setDraftTint(tint)}
                  type="button"
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button className="flex-1" onClick={commitEditor} size="sm" variant="default">
                Save
              </Button>
              {editingWorkspace ? (
                <Button
                  aria-label={`Delete ${editingWorkspace.name}`}
                  onClick={() => {
                    props.onDelete(editingWorkspace.id);
                    setEditingId(null);
                  }}
                  size="icon-sm"
                  variant="ghost-destructive"
                >
                  <Trash2Icon />
                </Button>
              ) : null}
            </div>
          </div>
        </PopoverPopup>
      </Popover>
    </TooltipProvider>
  );
}
