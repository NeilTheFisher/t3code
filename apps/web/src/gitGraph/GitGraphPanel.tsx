import {
  CloudIcon,
  FolderGit2Icon,
  GitBranchIcon,
  GitCommitHorizontalIcon,
  InfoIcon,
  RefreshCwIcon,
  TagIcon,
  Trash2Icon,
  TriangleAlertIcon,
} from "lucide-react";
import {
  Fragment,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";

import {
  AuthSourceControlWriteScope,
  type ContextMenuItem,
  type EnvironmentId,
  type VcsGraphWorkingTree,
  type VcsGraphWorktree,
  type VcsLogGraphResult,
} from "@t3tools/contracts";
import {
  isAtomCommandInterrupted,
  squashAtomCommandFailure,
} from "@t3tools/client-runtime/state/runtime";
import * as DateTime from "effect/DateTime";
import { readLocalApi } from "~/localApi";
import { cn } from "~/lib/utils";
import { useEnvironmentScope } from "~/state/session";
import { useThreadShells } from "~/state/entities";
import { useAtomCommand } from "~/state/use-atom-command";
import { vcsEnvironment } from "~/state/vcs";

import {
  COMPOSER_COMMIT_DRAG_TYPE,
  COMPOSER_MENTION_DRAG_TYPE,
  encodeCommitDragPayload,
} from "../components/chat/composerMentionDrag";
import { PullRequestGlyph } from "../components/pullRequest/pullRequestIcons";
import { Button } from "../components/ui/button";
import { stackedThreadToast, toastManager } from "../components/ui/toast";
import { commitDragText } from "./commitDrag";
import { graphWorktrees, type WorktreeThreadLink } from "./graphWorktrees";
import { layoutGraph, type GraphRow } from "./graphLayout";
import { Link } from "@tanstack/react-router";
import {
  partitionCommitRuns,
  resolveGraphSelection,
  selectionDiffRange,
  shortSha,
} from "./graphSelection";
import type { MockCommit, MockGraphData, MockThread, MockWorktree } from "./mockGraph";

// Two lines plus 20px ref badges come to 44px; leave a couple of pixels of
// slack so a badge can never bleed into the row above.
const ROW_HEIGHT = 46;
const LANE_WIDTH = 14;
const LANE_INSET = 9;

// The selected run is outlined as one block. An outline never affects layout, so
// selecting a row cannot shift the graph sideways.
const EMPTY_CHECKOUTS: ReadonlyArray<VcsGraphWorktree> = [];

const SELECTION_OUTLINE = "2px solid color-mix(in oklab, var(--primary) 60%, transparent)";

const LANE_COLORS = [
  "oklch(0.63 0.09 250)",
  "oklch(0.66 0.09 165)",
  "oklch(0.71 0.09 80)",
  "oklch(0.64 0.10 20)",
  "oklch(0.63 0.09 300)",
] as const;

const THREAD_COLORS = [
  "oklch(0.68 0.13 250)",
  "oklch(0.70 0.13 155)",
  "oklch(0.74 0.13 80)",
  "oklch(0.68 0.14 25)",
] as const;

type PanelView = "graph" | "worktrees";

function toGraphData(
  result: VcsLogGraphResult,
  repository: string,
  threads: ReadonlyArray<MockThread>,
  threadLinks: ReadonlyArray<WorktreeThreadLink>,
  projectId: string | null,
): MockGraphData {
  return {
    repository,
    currentBranch: result.currentBranch ?? "HEAD",
    ahead: 0,
    behind: 0,
    commits: result.commits.map((commit) => ({
      sha: commit.sha,
      subject: commit.subject,
      parents: [...commit.parents],
      author: commit.authorName,
      authoredAt: DateTime.toDateUtc(commit.authoredAt),
      refs: commit.refs.map((ref) => ({ kind: ref.kind, name: ref.name })),
      threadIds: [],
      turn: null,
      pullRequest: null,
    })),
    threads,
    worktrees: graphWorktrees(result.worktrees, threadLinks, projectId),
    observedAt: new Date(),
  };
}

function PanelMessage(props: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
      <p className="text-xs font-medium text-foreground">{props.title}</p>
      <p className="max-w-[28ch] text-2xs text-muted-foreground">{props.body}</p>
      {props.action}
    </div>
  );
}

function GitGraphSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading commit graph"
      className="min-h-0 flex-1 overflow-hidden"
    >
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="flex items-stretch gap-1 pr-2" style={{ height: ROW_HEIGHT }}>
          <div className="w-[80px] shrink-0 border-r border-border/40">
            <div className="mt-3 ml-3 h-8 w-px bg-border/50" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
            <div className="h-3 w-[62%] rounded-sm bg-muted/70" />
            <div className="h-2.5 w-[40%] rounded-sm bg-muted/50" />
          </div>
        </div>
      ))}
    </div>
  );
}

function formatCommitDate(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function LaneGraph(props: { row: GraphRow; laneCount: number; isTip: boolean }) {
  const { row, laneCount, isTip } = props;
  const width = LANE_INSET * 2 + Math.max(1, laneCount) * LANE_WIDTH;
  const mid = ROW_HEIGHT / 2;
  const x = (lane: number) => LANE_INSET + lane * LANE_WIDTH;
  const color = (lane: number) => LANE_COLORS[lane % LANE_COLORS.length]!;

  return (
    <svg
      aria-hidden
      className="pointer-events-none block shrink-0"
      width={width}
      height={ROW_HEIGHT}
      viewBox={`0 0 ${width} ${ROW_HEIGHT}`}
    >
      {row.hasIncoming ? (
        <line
          x1={x(row.lane)}
          y1={0}
          x2={x(row.lane)}
          y2={mid}
          stroke={color(row.lane)}
          strokeWidth={1.75}
          strokeLinecap="round"
          opacity={0.85}
        />
      ) : null}
      {row.through.map((lane) => (
        <line
          key={`through-${lane}`}
          x1={x(lane)}
          y1={0}
          x2={x(lane)}
          y2={ROW_HEIGHT}
          stroke={color(lane)}
          strokeWidth={1.75}
          strokeLinecap="round"
          opacity={0.6}
        />
      ))}
      {row.parentLanes.map((parent) => {
        const fromX = x(row.lane);
        const toX = x(parent.lane);
        return (
          <path
            key={`parent-${parent.sha}`}
            d={
              fromX === toX
                ? `M ${fromX} ${mid} V ${ROW_HEIGHT}`
                : `M ${fromX} ${mid} C ${fromX} ${mid + 9}, ${toX} ${ROW_HEIGHT - 9}, ${toX} ${ROW_HEIGHT}`
            }
            fill="none"
            stroke={color(parent.lane)}
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.85}
          />
        );
      })}
      <circle
        cx={x(row.lane)}
        cy={mid}
        r={isTip ? 4.5 : 3.5}
        fill={isTip ? color(row.lane) : "var(--background)"}
        stroke={color(row.lane)}
        strokeWidth={2}
      />
    </svg>
  );
}

function RefBadge(props: {
  kind: "branch" | "remote" | "tag" | "head";
  name: string;
  current: boolean;
  className?: string;
}) {
  const { kind, name, current } = props;
  const Icon = kind === "tag" ? TagIcon : kind === "remote" ? CloudIcon : GitBranchIcon;
  return (
    <span
      className={cn(
        "inline-flex max-w-32 items-center gap-1 rounded-sm border px-1 py-px align-middle text-3xs leading-4 font-medium",
        kind === "tag"
          ? "border-warning/25 bg-warning/10 text-warning-foreground"
          : current
            ? "border-primary/25 bg-primary/10 text-primary"
            : kind === "remote"
              ? "border-dashed border-border text-muted-foreground"
              : "border-border/70 bg-muted/60 text-muted-foreground",
      )}
    >
      {kind === "head" ? (
        <GitCommitHorizontalIcon className="size-2.5 shrink-0" />
      ) : (
        <Icon className="size-2.5 shrink-0" />
      )}
      <span className="truncate">{name}</span>
    </span>
  );
}

function ThreadChip(props: {
  thread: MockThread;
  color: string;
  turn: number | null;
  active: boolean;
  onClick?: () => void;
}) {
  const { thread, color, turn, active, onClick } = props;
  const label = turn === null ? thread.title : `${thread.title}, turn ${turn}`;
  const running = thread.state === "running";
  const content = (
    <>
      {/* One dot carries both identity and activity: filled with a slow halo
          while the thread runs, hollow once it is idle. */}
      <span aria-hidden className="relative flex size-2 shrink-0 items-center justify-center">
        {running ? (
          <span
            className="absolute -inset-0.5 rounded-full opacity-35"
            style={{ backgroundColor: color }}
          />
        ) : null}
        <span
          className={cn("relative size-2 rounded-full", !running && "border bg-transparent")}
          style={running ? { backgroundColor: color } : { borderColor: color }}
        />
      </span>
      <span className="max-w-28 truncate @max-[20rem]/graph:hidden">{thread.title}</span>
      {turn === null ? null : <span className="shrink-0 tabular-nums opacity-65">·{turn}</span>}
      {running ? <span className="sr-only">(running)</span> : null}
    </>
  );
  const className = cn(
    "inline-flex items-center gap-1 rounded-full border px-1.5 py-px text-3xs leading-4",
    active
      ? "border-primary/35 bg-primary/10 text-foreground"
      : "border-transparent bg-muted/70 text-muted-foreground",
    onClick !== undefined && "cursor-pointer hover:bg-accent hover:text-foreground",
  );
  return onClick ? (
    <button type="button" aria-label={label} className={className} onClick={onClick}>
      {content}
    </button>
  ) : (
    <span aria-label={label} className={className}>
      {content}
    </span>
  );
}

function PullRequestChip(props: {
  pullRequest: NonNullable<MockCommit["pullRequest"]>;
  className?: string;
}) {
  const { pullRequest, className } = props;
  const merged = pullRequest.state === "merged";
  const draft = pullRequest.state === "draft";
  const Icon = merged
    ? PullRequestGlyph.merged
    : draft
      ? PullRequestGlyph.draft
      : PullRequestGlyph.pullRequest;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-1.5 py-px text-3xs leading-4",
        merged
          ? "border-primary/25 bg-primary/10 text-primary"
          : draft
            ? "border-border bg-muted/60 text-muted-foreground"
            : "border-success/25 bg-success/10 text-success-foreground",
        className,
      )}
    >
      <Icon className="size-2.5 shrink-0" />#{pullRequest.number}
      <span className="sr-only">{merged ? "merged" : draft ? "draft" : "open"} pull request</span>
    </span>
  );
}

function CommitRow(props: {
  commit: MockCommit;
  row: GraphRow;
  laneCount: number;
  isTip: boolean;
  isSelected: boolean;
  isDimmed: boolean;
  threadsById: ReadonlyMap<string, MockThread>;
  threadColor: (id: string) => string;
  onSelect: (event: ReactMouseEvent) => void;
  onOpenDiff: () => void;
  /** The checkout's uncommitted state, shown on the checked-out commit. */
  uncommitted: VcsGraphWorkingTree | null;
  /** Every checkout of this repository sitting on this commit. */
  checkouts: ReadonlyArray<VcsGraphWorktree>;
  onOpenWorkingTreeDiff: () => void;
  /** Null when the panel has no resolved checkout, which a commit chip requires. */
  repositoryPath: string | null;
  onFilterThread: (id: string) => void;
  onOpenMenu: (commit: MockCommit, position: { x: number; y: number }) => void;
}) {
  const {
    commit,
    row,
    laneCount,
    isTip,
    isSelected,
    isDimmed,
    threadsById,
    threadColor,
    onSelect,
    onOpenDiff,
    uncommitted,
    checkouts,
    onOpenWorkingTreeDiff,
    repositoryPath,
    onFilterThread,
    onOpenMenu,
  } = props;
  const threads = commit.threadIds
    .map((id) => threadsById.get(id))
    .filter((thread): thread is MockThread => thread !== undefined);
  const visibleThreads = threads.slice(0, 2);
  const overflow = threads.length - visibleThreads.length;
  const isHead = commit.refs.some((ref) => ref.kind === "head");

  return (
    <div
      role="option"
      aria-selected={isSelected}
      tabIndex={-1}
      data-sha={commit.sha}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", commitDragText({ ...commit, threads }));
        // Without a repository the commit chip would carry nothing the agent
        // could act on, so the drag falls back to its text form.
        if (repositoryPath !== null && repositoryPath.trim().length > 0) {
          event.dataTransfer.setData(
            COMPOSER_COMMIT_DRAG_TYPE,
            encodeCommitDragPayload({
              sha: commit.sha,
              subject: commit.subject,
              repositoryPath: repositoryPath.trim(),
              threadIds: threads.map((thread) => thread.id),
            }),
          );
        }
        event.dataTransfer.setData(
          COMPOSER_MENTION_DRAG_TYPE,
          commitDragText({
            sha: commit.sha,
            threads: threads.map((thread) => ({ id: thread.id, title: thread.title })),
          }),
        );
        // A native drag image reads as a real object being moved instead of the
        // browser's default row snapshot, matching the sidebar's thread ghost.
        const ghost = document.createElement("div");
        ghost.textContent = `${shortSha(commit.sha)}  ${commit.subject}`;
        Object.assign(ghost.style, {
          position: "fixed",
          top: "-1000px",
          left: "-1000px",
          maxWidth: "300px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          padding: "6px 10px",
          borderRadius: "8px",
          border: "1px solid var(--border)",
          background: "var(--popover)",
          color: "var(--foreground)",
          font: "500 12px/1.4 system-ui, sans-serif",
          boxShadow: "0 8px 24px rgb(0 0 0 / 18%)",
        });
        document.body.append(ghost);
        event.dataTransfer.setDragImage(ghost, 14, 14);
        window.setTimeout(() => ghost.remove(), 0);
      }}
      onClick={onSelect}
      onDoubleClick={() => onOpenDiff()}
      onContextMenu={(event: ReactMouseEvent) => {
        event.preventDefault();
        onOpenMenu(commit, { x: event.clientX, y: event.clientY });
      }}
      className={cn(
        "group relative flex cursor-default select-none items-stretch gap-1 pr-2",
        isSelected ? "bg-primary/10" : "hover:bg-accent/35",
        isDimmed && "opacity-35",
      )}
      style={{ height: ROW_HEIGHT }}
    >
      <div className="shrink-0 border-r border-border/40">
        <LaneGraph row={row} laneCount={laneCount} isTip={isTip} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
        <div className="flex min-w-0 items-center gap-1.5">
          {isHead ? (
            <RefBadge kind="head" name="HEAD" current className="@max-[26rem]/graph:hidden" />
          ) : null}
          {isHead && uncommitted !== null ? (
            <button
              type="button"
              aria-label={`Open ${uncommitted.changedFiles} uncommitted changes, +${uncommitted.additions} -${uncommitted.deletions}`}
              onClick={(event) => {
                event.stopPropagation();
                onOpenWorkingTreeDiff();
              }}
              className="inline-flex shrink-0 items-center gap-1 rounded-sm border border-warning/25 bg-warning/10 px-1 py-px text-3xs leading-4 font-medium text-warning-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-warning" />
              {uncommitted.changedFiles} uncommitted
            </button>
          ) : null}
          {commit.refs
            .filter((ref) => ref.kind !== "head")
            .slice(0, 2)
            .map((ref) => (
              <RefBadge
                key={`${ref.kind}-${ref.name}`}
                kind={ref.kind}
                name={ref.name}
                current={ref.kind === "branch" && ref.name === "main"}
              />
            ))}
          {commit.refs.filter((ref) => ref.kind !== "head").length > 2 ? (
            <span className="shrink-0 rounded-sm border border-border/70 bg-muted/60 px-1 text-3xs leading-4 text-muted-foreground">
              +{commit.refs.filter((ref) => ref.kind !== "head").length - 2}
            </span>
          ) : null}
          {/* A commit can be checked out in several worktrees at once, and the one
              the graph was opened from is only one of them. Naming each checkout
              here is what explains why two threads' graphs differ. */}
          {checkouts.map((checkout) => (
            <span
              key={checkout.path}
              aria-label={`${checkout.path}${checkout.dirty ? " (uncommitted changes)" : ""}${
                checkout.isCurrent ? ", this graph's checkout" : ""
              }`}
              className={cn(
                "inline-flex max-w-32 shrink-0 items-center gap-1 rounded-sm border px-1 py-px align-middle text-3xs leading-4 font-medium",
                checkout.isCurrent
                  ? "border-primary/25 bg-primary/10 text-primary"
                  : "border-border/70 bg-muted/60 text-muted-foreground",
              )}
            >
              <FolderGit2Icon className="size-2.5 shrink-0" />
              <span className="truncate">{checkout.branch ?? "detached"}</span>
              {checkout.dirty ? (
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-warning" />
              ) : null}
              <span className="sr-only">
                {checkout.isMain ? " (main checkout)" : " (worktree)"}
                {checkout.isCurrent ? " (this graph's checkout)" : ""}
              </span>
            </span>
          ))}
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-xs leading-4",
              isSelected ? "text-foreground" : "text-foreground/90",
            )}
          >
            {commit.subject}
          </span>
          {commit.pullRequest ? (
            <PullRequestChip
              pullRequest={commit.pullRequest}
              className="@max-[26rem]/graph:hidden"
            />
          ) : null}
        </div>
        <div className="mt-0.5 flex min-w-0 items-center gap-1.5 text-3xs leading-3.5 text-muted-foreground">
          <span className="shrink-0 font-mono text-3xs text-muted-foreground/80">
            {commit.sha.slice(0, 8)}
          </span>
          <span className="hidden shrink-0 @[26rem]/graph:inline">
            {commit.author.split(" ")[0]}
          </span>
          <span className="shrink-0 tabular-nums">{formatCommitDate(commit.authoredAt)}</span>
          {threads.length > 0 ? (
            <>
              <span aria-hidden>·</span>
              {commit.turn === null ? (
                <span
                  className="flex shrink-0 items-center -space-x-0.5"
                  aria-label={`Touched by ${threads.map((thread) => thread.title).join(", ")}`}
                >
                  {threads.slice(0, 3).map((thread) => (
                    <span
                      key={thread.id}
                      className="size-2 rounded-full ring-2 ring-background"
                      style={{ backgroundColor: threadColor(thread.id) }}
                    />
                  ))}
                  {threads.length > 3 ? (
                    <span className="pl-1 text-3xs tabular-nums">+{threads.length - 3}</span>
                  ) : null}
                </span>
              ) : (
                <>
                  {visibleThreads.map((thread) => (
                    <ThreadChip
                      key={thread.id}
                      thread={thread}
                      color={threadColor(thread.id)}
                      turn={thread.id === commit.threadIds[0] ? commit.turn : null}
                      active={false}
                      onClick={() => onFilterThread(thread.id)}
                    />
                  ))}
                  {overflow > 0 ? (
                    <span className="shrink-0 rounded-full bg-muted/70 px-1.5 py-px text-3xs">
                      +{overflow}
                    </span>
                  ) : null}
                </>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function WorktreeRow(props: {
  worktree: MockWorktree;
  threads: ReadonlyArray<MockThread>;
  threadColor: (id: string) => string;
  environmentId: string;
  confirming: boolean;
  removing: boolean;
  onAskRemove: () => void;
  onConfirmRemove: () => void;
  onCancelRemove: () => void;
  onStartThread: () => void;
  onRevealHead: () => void;
}) {
  const {
    worktree,
    threads,
    threadColor,
    environmentId,
    confirming,
    removing,
    onAskRemove,
    onConfirmRemove,
    onCancelRemove,
    onStartThread,
    onRevealHead,
  } = props;
  // The repository's own checkout has no branch of its own to recreate, so it is
  // never removable from this list; a checkout with a live run is unsafe.
  const blockedByRunningThread =
    worktree.main || threads.some((thread) => thread.state === "running");
  return (
    <div className="group border-b border-border/40 px-3 py-2.5 last:border-b-0 hover:bg-accent/25">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm border border-border/60 bg-muted/40 text-muted-foreground">
          <FolderGit2Icon className="size-3.5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="truncate text-xs font-medium text-foreground">{worktree.branch}</span>
            <span className="shrink-0 rounded-sm border border-border/60 px-1 text-4xs leading-4 text-muted-foreground">
              {worktree.main ? "main checkout" : "worktree"}
            </span>
            {worktree.current ? (
              <span className="shrink-0 rounded-sm border border-primary/25 bg-primary/10 px-1 text-4xs leading-4 text-primary">
                current
              </span>
            ) : null}
            {worktree.dirty ? (
              <span className="inline-flex shrink-0 items-center gap-1 text-3xs text-warning-foreground">
                <span className="size-1.5 rounded-full bg-warning" /> dirty
              </span>
            ) : null}
            {worktree.stale ? (
              <span className="shrink-0 text-3xs text-muted-foreground">no thread</span>
            ) : null}
          </div>
          <div className="mt-0.5 truncate font-mono text-3xs text-muted-foreground/80">
            {worktree.path}
          </div>
          {threads.length > 0 ? (
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              {threads.slice(0, 2).map((thread) => (
                <Link
                  key={thread.id}
                  to="/$environmentId/$threadId"
                  params={{ environmentId, threadId: thread.id }}
                  className="no-underline"
                >
                  <ThreadChip
                    thread={thread}
                    color={threadColor(thread.id)}
                    turn={null}
                    active={false}
                  />
                </Link>
              ))}
              {threads.length > 2 ? (
                <span className="rounded-full bg-muted/70 px-1.5 py-px text-3xs tabular-nums text-muted-foreground">
                  +{threads.length - 2}
                </span>
              ) : null}
            </div>
          ) : (
            <div className="mt-1 flex items-center gap-2">
              <span className="text-3xs text-muted-foreground">No thread in this checkout</span>
              <Button size="micro" variant="secondary" onClick={onStartThread}>
                Start thread here
              </Button>
            </div>
          )}
        </div>
        {confirming ? (
          <div className="flex shrink-0 items-center gap-1">
            <Button variant="destructive" size="xs" disabled={removing} onClick={onConfirmRemove}>
              <Trash2Icon /> {removing ? "Removing…" : "Remove"}
            </Button>
            <Button variant="ghost-muted" size="xs" onClick={onCancelRemove}>
              Cancel
            </Button>
          </div>
        ) : (
          <span className="flex shrink-0 items-center gap-0.5">
            <Button
              variant="ghost-muted"
              size="icon-xs"
              aria-label={`Show ${worktree.branch} in the graph`}
              onClick={onRevealHead}
            >
              <GitCommitHorizontalIcon />
            </Button>
            <span
              className={cn(
                !blockedByRunningThread &&
                  "opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100",
              )}
            >
              <Button
                variant="ghost-destructive"
                size="icon-xs"
                aria-label={`Remove ${worktree.branch}`}
                disabled={blockedByRunningThread}
                onClick={onAskRemove}
              >
                <Trash2Icon />
              </Button>
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export function GitGraphPanel(props: {
  readonly repositoryLabel?: string | null;
  readonly environmentId: EnvironmentId;
  readonly cwd: string | null;
  readonly onOpenCommitDiff: (range: { from: string; to: string; label: string }) => void;
  readonly onOpenWorkingTreeDiff: () => void;
  /** The project this repository belongs to, so root-checkout threads can match. */
  readonly projectId: string | null;
  /** Starts a thread bound to an existing checkout. */
  readonly onStartThreadInWorktree: (input: { path: string; branch: string | null }) => void;
}) {
  const [graph, setGraph] = useState<VcsLogGraphResult | null>(null);
  const [workingTree, setWorkingTree] = useState<VcsGraphWorkingTree | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);
  const [limit, setLimit] = useState(120);
  const [loadingMore, setLoadingMore] = useState(false);
  const [view, setView] = useState<PanelView>("graph");
  const [showRemotes, setShowRemotes] = useState(true);
  const [selectedSha, setSelectedSha] = useState<string | null>(null);
  // The selection is always contiguous, so only its two ends are stored; every
  // commit between them is selected even when it was never clicked.
  const [selectionHeadSha, setSelectionHeadSha] = useState<string | null>(null);
  const [filterThreadId, setFilterThreadId] = useState<string | null>(null);
  const [confirmPath, setConfirmPath] = useState<string | null>(null);
  const [confirmingRemoval, setConfirmingRemoval] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const noticeTimer = useRef<number | null>(null);
  const loadGraph = useAtomCommand(vcsEnvironment.logGraph, { reportFailure: false });
  const switchRef = useAtomCommand(vcsEnvironment.switchRef, { reportFailure: false });
  const removeWorktree = useAtomCommand(vcsEnvironment.removeWorktree, { reportFailure: false });
  const canCheckout = useEnvironmentScope(props.environmentId, AuthSourceControlWriteScope);
  const loadGraphEvent = useEffectEvent(loadGraph);

  // oxlint-disable-next-line t3code/react-effect-budget -- The graph is read from the repository over RPC.
  useEffect(() => {
    const cwd = props.cwd;
    if (cwd === null) {
      // oxlint-disable-next-line react/set-state-in-effect -- Clearing the selection resets the graph and its loading flag.
      setLoading(false);
      setGraph(null);
      return;
    }
    let cancelled = false;
    let retryTimer: number | null = null;
    // The first read of a fresh panel can race the environment's repository
    // detection and fail transiently, so retry before showing an error.
    const LOAD_ATTEMPTS = 3;
    const load = (attempt: number) => {
      setLoadingMore(true);
      setLoadError(null);
      void loadGraphEvent({
        environmentId: props.environmentId,
        input: { cwd, limit, includeRemotes: showRemotes },
      }).then((result) => {
        if (cancelled) return;
        if (result._tag === "Success") {
          setGraph(result.value);
          setWorkingTree(result.value.workingTree ?? null);
          setLoading(false);
          setLoadingMore(false);
          return;
        }
        if (attempt < LOAD_ATTEMPTS) {
          retryTimer = window.setTimeout(() => load(attempt + 1), 350 * attempt);
          return;
        }
        setGraph(null);
        setLoadError("Could not read this repository's history.");
        setLoading(false);
        setLoadingMore(false);
      });
    };
    load(1);
    return () => {
      cancelled = true;
      if (retryTimer !== null) window.clearTimeout(retryTimer);
    };
  }, [
    props.cwd,
    props.environmentId,
    limit,
    // oxlint-disable-next-line react/exhaustive-effect-dependencies -- A reload request bumps the token without changing the query inputs.
    reloadToken,
    showRemotes,
  ]);

  // Threads in this environment, so a checkout can name the thread that lives in
  // it (and a checkout without one can offer to start it).
  const environmentThreads = useThreadShells().filter(
    (thread) => thread.environmentId === props.environmentId && thread.archivedAt === null,
  );
  const graphThreads: MockThread[] = environmentThreads.map((thread) => ({
    id: thread.id,
    title: thread.title,
    branch: thread.branch ?? "",
    turns: 0,
    state: thread.latestRun?.status === "running" ? "running" : "idle",
    isSubagent: false,
  }));
  const threadLinks: WorktreeThreadLink[] = environmentThreads.map((thread) => ({
    id: thread.id,
    projectId: thread.projectId,
    worktreePath: thread.worktreePath,
  }));
  const data =
    graph === null
      ? null
      : toGraphData(graph, props.repositoryLabel ?? "", graphThreads, threadLinks, props.projectId);
  const commits = data?.commits ?? [];
  const threads = data?.threads ?? [];
  const worktrees = data?.worktrees ?? [];
  const currentBranch = data?.currentBranch ?? "HEAD";
  const showWorktrees = worktrees.length > 0;

  // oxlint-disable-next-line t3code/react-effect-budget -- A notice timer is cleared on unmount.
  useEffect(
    () => () => {
      if (noticeTimer.current !== null) window.clearTimeout(noticeTimer.current);
    },
    [],
  );

  const showNotice = (message: string) => {
    setNotice(message);
    if (noticeTimer.current !== null) window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setNotice(null), 3000);
  };

  const threadsById = new Map(threads.map((thread) => [thread.id, thread]));
  const threadColor = (id: string) => {
    const index = threads.findIndex((thread) => thread.id === id);
    return THREAD_COLORS[(index < 0 ? 0 : index) % THREAD_COLORS.length]!;
  };

  const checkoutsByHead = new Map<string, VcsGraphWorktree[]>();
  for (const worktree of graph?.worktrees ?? []) {
    const list = checkoutsByHead.get(worktree.head) ?? [];
    list.push(worktree);
    checkoutsByHead.set(worktree.head, list);
  }

  const visibleCommits = commits;
  const layout = layoutGraph(visibleCommits.map(({ sha, parents }) => ({ sha, parents })));
  const rowBySha = new Map(layout.rows.map((row) => [row.sha, row]));
  const selection = resolveGraphSelection(visibleCommits, selectedSha, selectionHeadSha);

  const selectCommit = (sha: string, extend: boolean) => {
    if (!extend || selectedSha === null) {
      setSelectedSha(sha);
      setSelectionHeadSha(sha);
      return;
    }
    setSelectionHeadSha(sha);
  };

  const openSelectedDiff = (commit: MockCommit) => {
    const inSelection = selection?.shas.has(commit.sha) ?? false;
    const target =
      inSelection && selection !== null
        ? selection
        : { top: commit, bottom: commit, shas: new Set([commit.sha]) };
    props.onOpenCommitDiff(selectionDiffRange(target));
  };
  const tipShas = new Set(
    visibleCommits.filter((commit) => commit.refs.length > 0).map((commit) => commit.sha),
  );

  const applyFilter = (next: string | null) => {
    setFilterThreadId(next);
    clearSelection();
  };

  const runningThreads = threads.filter((thread) => thread.state === "running").length;

  type CommitMenuAction =
    | "open-diff"
    | "copy-sha"
    | "copy-subject"
    | "checkout"
    | "create-branch"
    | "rename-branch"
    | "cherry-pick"
    | "filter-thread";

  const copyText = async (text: string, label: string) => {
    try {
      await Promise.race([
        navigator.clipboard.writeText(text),
        new Promise((_, reject) => window.setTimeout(() => reject(new Error("timeout")), 1500)),
      ]);
      showNotice(`${label} copied`);
      return;
    } catch {
      // Permission prompts can leave writeText pending forever; fall back so the
      // action still completes when the browser blocks the async clipboard.
    }
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    showNotice(copied ? `${label} copied` : "Could not copy to the clipboard");
  };

  const checkoutBranch = async (refName: string) => {
    const cwd = props.cwd;
    if (cwd === null) return;
    const result = await switchRef({
      environmentId: props.environmentId,
      input: { cwd, refName },
    });
    if (result._tag === "Success") {
      // The graph's HEAD mark and branch labels are read, not subscribed, so a
      // successful checkout only becomes visible after an explicit reload.
      showNotice(`Checked out ${result.value.refName ?? refName}`);
      setReloadToken((token) => token + 1);
      return;
    }
    if (isAtomCommandInterrupted(result)) return;
    const failure = squashAtomCommandFailure(result);
    toastManager.add(
      stackedThreadToast({
        type: "error",
        title: `Could not check out ${refName}.`,
        description: failure instanceof Error ? failure.message : "An error occurred.",
      }),
    );
  };

  const removingWorktree =
    confirmPath === null
      ? null
      : (data?.worktrees.find((entry) => entry.path === confirmPath) ?? null);

  // Removing a checkout keeps its branch and commits; a thread that still uses
  // it recreates it on its next turn. The repository's own checkout has no branch
  // to recreate, so the row never offers this for it.
  const confirmRemoveWorktree = async () => {
    const cwd = props.cwd;
    const target = removingWorktree;
    if (cwd === null || target === null || target.main) return;
    if (!canCheckout) {
      showNotice("Removing a checkout needs source-control write access");
      return;
    }
    setConfirmingRemoval(true);
    const result = await removeWorktree({
      environmentId: props.environmentId,
      input: { cwd, path: target.path },
    });
    setConfirmingRemoval(false);
    if (isAtomCommandInterrupted(result)) return;
    if (result._tag !== "Success") {
      const failure = squashAtomCommandFailure(result);
      toastManager.add(
        stackedThreadToast({
          type: "error",
          title: `Could not remove ${target.branch}.`,
          description: failure instanceof Error ? failure.message : "An error occurred.",
        }),
      );
      return;
    }
    setConfirmPath(null);
    showNotice(`Removed ${target.branch}`);
    setReloadToken((token) => token + 1);
  };

  // Jumps to the commit a checkout has checked out, which is the fastest way to
  // answer "what is this worktree on?".
  const revealCheckoutHead = (worktree: MockWorktree) => {
    setView("graph");
    setSelectedSha(worktree.head);
    setSelectionHeadSha(worktree.head);
    window.setTimeout(() => {
      document
        .querySelector<HTMLElement>(`[data-sha="${worktree.head}"]`)
        ?.scrollIntoView({ block: "center" });
    }, 0);
  };

  const openCommitMenu = async (commit: MockCommit, position: { x: number; y: number }) => {
    const inSelection = selection?.shas.has(commit.sha) ?? false;
    if (!inSelection) {
      setSelectedSha(commit.sha);
      setSelectionHeadSha(commit.sha);
    }
    const api = readLocalApi();
    if (!api) return;
    const diffTarget =
      inSelection && selection !== null
        ? selection
        : { top: commit, bottom: commit, shas: new Set([commit.sha]) };
    const diffRange = selectionDiffRange(diffTarget);
    const diffLabel =
      diffTarget.top.sha === diffTarget.bottom.sha
        ? `Open diff ${diffRange.label}`
        : `Open diff ${diffRange.label} (${diffTarget.shas.size} commits)`;
    const thread = commit.threadIds[0] ? threadsById.get(commit.threadIds[0]) : undefined;
    const branchRef = commit.refs.find((ref) => ref.kind === "branch");
    // A remote tip checks out through its own ref; the server derives the local
    // tracking branch, the same way the branch toolbar does.
    const checkoutRef = branchRef ?? commit.refs.find((ref) => ref.kind === "remote");
    const alreadyCheckedOut = checkoutRef !== undefined && checkoutRef.name === currentBranch;
    const items: ContextMenuItem<CommitMenuAction>[] = [
      { id: "open-diff", label: diffLabel },
      { id: "copy-sha", label: "Copy SHA" },
      { id: "copy-subject", label: "Copy subject" },
      {
        id: "filter-thread",
        disabled: thread === undefined,
        label: "Filter by thread",
        separatorBefore: true,
      },
      {
        id: "checkout",
        disabled: checkoutRef === undefined || alreadyCheckedOut || !canCheckout,
        label:
          checkoutRef === undefined
            ? "Checkout"
            : alreadyCheckedOut
              ? `${checkoutRef.name} is checked out`
              : `Checkout ${checkoutRef.name}`,
        separatorBefore: true,
      },
      { id: "create-branch", label: "Create branch here" },
    ];
    if (branchRef) {
      items.push({ id: "rename-branch", label: `Rename ${branchRef.name}…` });
    }
    items.push({ id: "cherry-pick", label: "Cherry-pick onto current branch" });
    const action = await api.contextMenu.show(items, position);
    switch (action) {
      case "open-diff":
        openSelectedDiff(commit);
        break;
      case "copy-sha":
        await copyText(commit.sha, "SHA");
        break;
      case "copy-subject":
        await copyText(commit.subject, "Subject");
        break;
      case "filter-thread":
        if (thread) applyFilter(filterThreadId === thread.id ? null : thread.id);
        break;
      case "checkout":
        if (checkoutRef) await checkoutBranch(checkoutRef.name);
        break;
      case "create-branch":
        showNotice("Create branch is not wired yet");
        break;
      case "rename-branch":
        showNotice("Rename branch is not wired yet");
        break;
      case "cherry-pick":
        showNotice("Cherry-pick is not wired yet");
        break;
      default:
        break;
    }
  };

  const moveSelection = (direction: 1 | -1) => {
    const currentIndex = visibleCommits.findIndex((commit) => commit.sha === selectionHeadSha);
    const nextIndex =
      currentIndex === -1
        ? direction === 1
          ? 0
          : visibleCommits.length - 1
        : Math.min(visibleCommits.length - 1, Math.max(0, currentIndex + direction));
    const next = visibleCommits[nextIndex];
    if (!next) return;
    setSelectedSha(next.sha);
    setSelectionHeadSha(next.sha);
    document
      .querySelector<HTMLElement>(`[data-sha="${next.sha}"]`)
      ?.scrollIntoView({ block: "nearest" });
  };

  const clearSelection = () => {
    setSelectedSha(null);
    setSelectionHeadSha(null);
  };

  return (
    <div className="@container/graph flex h-full min-w-0 flex-col overflow-x-hidden bg-background">
      <div className="flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border/60 px-2">
        {showWorktrees ? (
          <div
            role="tablist"
            aria-label="Repository view"
            className="inline-flex items-center gap-0.5 rounded-(--control-radius) bg-muted/60 p-0.5"
          >
            {(
              [
                { id: "graph", label: "Graph", count: visibleCommits.length },
                { id: "worktrees", label: "Worktrees", count: worktrees.length },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={view === tab.id}
                onClick={() => setView(tab.id)}
                className={cn(
                  "inline-flex h-6 items-center gap-1.5 rounded-sm px-2 text-2xs font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:outline-none",
                  view === tab.id
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab.label}
                <span className="text-3xs tabular-nums opacity-60 @max-[26rem]/graph:hidden">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <span className="px-1 text-2xs font-medium text-foreground">Graph</span>
        )}
        <div className="flex items-center gap-0.5">
          <Button
            variant={showRemotes ? "secondary" : "ghost-muted"}
            size="icon-sm"
            aria-pressed={showRemotes}
            aria-label={showRemotes ? "Hide remote branches" : "Show remote branches"}
            onClick={() => setShowRemotes((value) => !value)}
          >
            <CloudIcon />
          </Button>
          <Button variant="ghost-muted" size="icon-sm" aria-label="Refresh graph">
            <RefreshCwIcon />
          </Button>
        </div>
      </div>

      <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-border/40 px-2 text-2xs text-muted-foreground">
        <GitBranchIcon className="size-3 shrink-0" />
        <span className="font-medium text-foreground">{currentBranch}</span>
        <span className="min-w-0 shrink truncate opacity-70 @max-[26rem]/graph:hidden">
          {props.repositoryLabel ?? ""}
        </span>
      </div>

      {props.cwd === null ? (
        <PanelMessage title="No repository" body="Open a project to browse its commit history." />
      ) : loading ? (
        <GitGraphSkeleton />
      ) : loadError !== null ? (
        <PanelMessage
          title="Could not load the graph"
          body={loadError}
          action={
            <Button
              size="sm"
              variant="outline"
              onClick={() => setReloadToken((value) => value + 1)}
            >
              Retry
            </Button>
          }
        />
      ) : graph !== null && !graph.isRepo ? (
        <PanelMessage
          title="Not a Git repository"
          body="This project has no Git history to show."
        />
      ) : view === "graph" || !showWorktrees ? (
        <>
          {threads.length > 0 ? (
            <div className="flex h-9 shrink-0 items-center gap-1 overflow-x-auto border-b border-border/40 px-2 [mask-image:linear-gradient(to_right,black_92%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <button
                type="button"
                aria-pressed={filterThreadId === null}
                onClick={() => applyFilter(null)}
                className={cn(
                  "inline-flex h-5 shrink-0 items-center rounded-full border px-2 text-3xs",
                  filterThreadId === null
                    ? "border-primary/35 bg-primary/10 text-foreground"
                    : "border-transparent bg-muted/60 text-muted-foreground hover:text-foreground",
                )}
              >
                All threads
              </button>
              {threads.map((thread) => (
                <ThreadChip
                  key={thread.id}
                  thread={thread}
                  color={threadColor(thread.id)}
                  turn={null}
                  active={filterThreadId === thread.id}
                  onClick={() => applyFilter(filterThreadId === thread.id ? null : thread.id)}
                />
              ))}
            </div>
          ) : null}

          <div
            role="listbox"
            aria-label="Commits"
            tabIndex={0}
            onScroll={(event) => {
              if (loadingMore || !graph?.truncated) return;
              const list = event.currentTarget;
              if (list.scrollTop + list.clientHeight < list.scrollHeight - 240) return;
              setLimit((value) => Math.min(value + 120, 1000));
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                moveSelection(1);
              } else if (event.key === "ArrowUp") {
                event.preventDefault();
                moveSelection(-1);
              } else if (event.key === "Escape") {
                clearSelection();
              } else if (
                selectedSha !== null &&
                (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10"))
              ) {
                const commit = visibleCommits.find((entry) => entry.sha === selectedSha);
                const row = document.querySelector<HTMLElement>(`[data-sha="${selectedSha}"]`);
                if (commit && row) {
                  event.preventDefault();
                  const rect = row.getBoundingClientRect();
                  void openCommitMenu(commit, {
                    x: rect.left + 32,
                    y: rect.top + rect.height / 2,
                  });
                }
              }
            }}
            className="min-h-0 flex-1 overflow-y-auto [scrollbar-gutter:stable] focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-inset focus-visible:outline-none"
          >
            {partitionCommitRuns(visibleCommits, selection).map((run) => {
              const rows = run.commits.map((commit) => {
                const row = rowBySha.get(commit.sha);
                if (!row) return null;
                const matchesFilter =
                  filterThreadId === null || commit.threadIds.includes(filterThreadId);
                return (
                  <CommitRow
                    key={commit.sha}
                    commit={commit}
                    row={row}
                    laneCount={layout.laneCount}
                    isTip={tipShas.has(commit.sha)}
                    isSelected={run.selected}
                    isDimmed={!matchesFilter}
                    threadsById={threadsById}
                    threadColor={threadColor}
                    onSelect={(event) =>
                      selectCommit(commit.sha, event.shiftKey || event.metaKey || event.ctrlKey)
                    }
                    onOpenDiff={() => openSelectedDiff(commit)}
                    uncommitted={workingTree}
                    checkouts={checkoutsByHead.get(commit.sha) ?? EMPTY_CHECKOUTS}
                    onOpenWorkingTreeDiff={props.onOpenWorkingTreeDiff}
                    repositoryPath={props.cwd}
                    onFilterThread={(id) => applyFilter(filterThreadId === id ? null : id)}
                    onOpenMenu={(commit, position) => {
                      void openCommitMenu(commit, position);
                    }}
                  />
                );
              });
              const first = run.commits[0];
              if (!run.selected || first === undefined) {
                return <Fragment key={`run:${first?.sha ?? "end"}`}>{rows}</Fragment>;
              }
              // One outline around the whole run, so it grows with the selection
              // instead of drawing a line between every selected row.
              return (
                <div
                  key={`selected:${first.sha}`}
                  className="bg-primary/10"
                  style={{ outline: SELECTION_OUTLINE, outlineOffset: -2 }}
                >
                  {rows}
                </div>
              );
            })}
            <div className="flex items-center gap-2 px-3 py-3 text-3xs text-muted-foreground/70">
              <GitCommitHorizontalIcon className="size-3" />
              {loadingMore
                ? "Loading more commits…"
                : graph?.truncated
                  ? "Scroll for more commits"
                  : "End of history"}
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="flex h-8 items-center justify-between border-b border-border/40 px-3 text-3xs text-muted-foreground">
            <span>
              {worktrees.length} checkouts · {worktrees.filter((worktree) => !worktree.main).length}{" "}
              worktrees
            </span>
            <span className="inline-flex items-center gap-1">
              <TriangleAlertIcon className="size-3 text-warning-foreground" />
              {runningThreads} running
            </span>
          </div>
          {worktrees.map((worktree) => {
            const worktreeThreads = worktree.threadIds
              .map((id) => threadsById.get(id))
              .filter((thread): thread is MockThread => thread !== undefined);
            return (
              <WorktreeRow
                key={worktree.path}
                worktree={worktree}
                threads={worktreeThreads}
                threadColor={threadColor}
                environmentId={props.environmentId}
                confirming={confirmPath === worktree.path}
                removing={confirmingRemoval}
                onAskRemove={() => setConfirmPath(worktree.path)}
                onConfirmRemove={() => {
                  void confirmRemoveWorktree();
                }}
                onCancelRemove={() => setConfirmPath(null)}
                onStartThread={() =>
                  props.onStartThreadInWorktree({
                    path: worktree.path,
                    branch: worktree.branch === "detached" ? null : worktree.branch,
                  })
                }
                onRevealHead={() => revealCheckoutHead(worktree)}
              />
            );
          })}
          <div className="m-3 flex items-start gap-2 rounded-(--control-radius) border border-border/60 bg-muted/30 p-2.5 text-2xs leading-4 text-muted-foreground">
            <InfoIcon className="mt-px size-3.5 shrink-0" />
            <span>
              Removing a checkout keeps its branch, commits, and thread history. A thread that still
              uses it recreates it on the next turn. Checkouts with a running thread cannot be
              removed.
            </span>
          </div>
        </div>
      )}

      <div className="flex h-7 shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap border-t border-border/50 px-2 text-3xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-success" />
          live
        </span>
        <span aria-hidden className="@max-[26rem]/graph:hidden">
          ·
        </span>
        <span className="@max-[26rem]/graph:hidden">{visibleCommits.length} commits</span>
        {threads.length > 0 ? (
          <>
            <span aria-hidden className="@max-[26rem]/graph:hidden">
              ·
            </span>
            <span className="@max-[26rem]/graph:hidden">{threads.length} threads</span>
          </>
        ) : null}
        <span
          className={cn(
            "ml-auto min-w-0 truncate",
            notice === null ? "opacity-70" : "font-medium text-foreground",
          )}
        >
          {notice ?? "git log --topo-order"}
        </span>
      </div>
    </div>
  );
}
