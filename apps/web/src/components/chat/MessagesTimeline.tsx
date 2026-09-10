import { ArrowUpIcon, ClockIcon } from "lucide-react";
import { ReadOnlySourcePreview } from "../files/AttachmentFilePreview";
import { useRightPanelStore } from "~/rightPanelStore";
import {
  deriveTimelineMinimapItems,
  resolveTimelineMinimapPreview,
  type TimelineMinimapItem,
} from "./timelineMinimapItems";
import {
  COMPOSER_CONTEXT_KINDS,
  type AssistantCitation,
  type ComposerContextId,
  type EnvironmentId,
  type KnownComposerContextRecord,
  type MessageId,
  type ScopedThreadRef,
  type ServerProviderSkill,
  type ToolActivityIcon,
  type TurnId,
  type WorktreeSetupSnapshot,
} from "@t3tools/contracts";
import { toolActivityFaviconUrl } from "@t3tools/shared/favicon";
import { formatAttachmentSize } from "@t3tools/client-runtime/state/attachments";
import { parseScopedThreadKey } from "@t3tools/client-runtime/environment";
import { observeVisibleAnimation } from "../../lib/visibleAnimation";
import type { CodexArtifactTemplate } from "@t3tools/client-runtime/codex-artifact-templates";
import { commandProgramName } from "@t3tools/client-runtime/work-log/command-label";
import {
  resolveViewedImageAsset,
  workEntryViewedImagePath,
  summarizeToolGroup,
  omitSupersededLifecycleMarkers,
} from "@t3tools/client-runtime/work-log/presentation";
import type { AgentPanelModel } from "@t3tools/client-runtime/state/subagentRuntime";
import {
  emptyAgentPanelModel,
  formatSubagentTokenCount,
} from "@t3tools/client-runtime/state/subagentRuntime";

const EMPTY_AGENT_PANEL_MODEL = emptyAgentPanelModel();
const NOOP_OPEN_AGENTS = () => {};
const EMPTY_QUEUED_MESSAGES: ReadonlyArray<QueuedComposerMessage> = [];
const NOOP_QUEUED_MESSAGE_ACTION = (_id: string) => {};
const NOOP_USE_ARTIFACT_TEMPLATE = () => {};
const NOOP_OPEN_ATTACHMENT = (_attachment: ChatFileAttachment) => {};
import { resolveChatListAnchoredEndSpace } from "@t3tools/shared/chatList";
import {
  createContext,
  Fragment,
  memo,
  use,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  LegendList,
  type LegendListRef,
  type MaintainScrollAtEndOptions,
} from "@legendapp/list/react";
import { FileDiff, type FileDiffMetadata } from "@pierre/diffs/react";
import { DiffStatLabel } from "./DiffStatLabel";
import {
  deriveTimelineEntries,
  type FileChange,
  workEntryDisplayIndicatesToolFailure,
  workEntrySignalsSevereFailure,
  workLogEntryIsToolLike,
} from "../../session-logic";
import {
  type ChatMessage,
  type ChatFileAttachment,
  type ChatImageAttachment,
  isFileAttachment,
  isImageAttachment,
  isVideoAttachment,
  type TurnDiffSummary,
} from "../../types";
import {
  expandPartialPatchWithCurrentFile,
  getDiffLineStat,
  getRenderablePatch,
  resolveDiffThemeName,
  resolveFileDiffPath,
} from "../../lib/diffRendering";
import ChatMarkdown, { ChatMarkdownAssetImage } from "../ChatMarkdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Root, RootContent } from "mdast";
import { T3Wordmark } from "../T3Wordmark";
import {
  ArrowRightLeftIcon,
  BotIcon,
  BrainIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleAlertIcon,
  DownloadIcon,
  EyeIcon,
  FileIcon,
  GlobeIcon,
  HammerIcon,
  MessageCircleIcon,
  Minimize2Icon,
  MousePointerClickIcon,
  PaintbrushIcon,
  PlayIcon,
  SearchIcon,
  SmartphoneIcon,
  SquarePenIcon,
  TerminalIcon,
  TextWrapIcon,
  Undo2Icon,
  WrenchIcon,
  XIcon,
  ZapIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import type { QueuedComposerMessage } from "../../queuedMessageStore";
import { useAssetUrlRefresh, useAssetUrls, useAssetUrlState } from "../../assets/assetUrls";
import { MediaVideoPlayer } from "../media/MediaVideoPlayer";
import { getVirtualizedScrollFadeClassName } from "../ui/scroll-area";
import {
  buildAttachmentVideoAsset,
  buildAttachmentVideoPreview,
  buildExpandedImagePreview,
  ExpandedImagePreview,
} from "./ExpandedImagePreview";
import {
  SNAP_SHOT_ATTACHMENT_FRAME_CLASS,
  SnapShotAttachmentDetails,
} from "./SnapShotAttachmentDetails";
import { ProposedPlanCard } from "./ProposedPlanCard";
import { PierreEntryIcon } from "./PierreEntryIcon";
import { inferEntryKindFromPath } from "../../pierre-icons";
import { ChangedFilesCard } from "./ChangedFilesTree";
import { shouldAutoExpandChangedFiles } from "./changedFilesPresentation";
import { useAtomValue } from "@effect/atom-react";
import { useFileContextMenuHandler } from "../../fileContextMenu";
import { useProject, useThread } from "../../state/entities";
import { serverEnvironment } from "../../state/server";
import {
  CHAT_TIMELINE_ANCHOR_OFFSET,
  keepTimelineEndVisibleAfterOverlayGrowth,
  readTimelinePosition,
  rememberTimelinePosition,
  timelineContentOverflowsViewport,
} from "./timelineScrollAnchoring";
import type { CitationHistoryPage } from "./useAssistantCitationTarget";
import { MessageCopyButton } from "./MessageCopyButton";
import { MessageForkButton, type ForkMessageConfig } from "./MessageForkButton";
import { AssistantSelectionToolbar } from "./AssistantSelectionToolbar";
import type { AssistantCitationSourceAnchor } from "~/lib/assistantTextSelection";
import type { AssistantCitationRequest } from "./AssistantCitationSource";
import { MessagePlayButton } from "./MessagePlayButton";
import { TtsParagraphHighlight } from "./TtsParagraphHighlight";
import {
  computeStableMessagesTimelineRows,
  deriveMessagesTimelineRows,
  deriveMessagesTimelineRowsWithState,
  deriveUnsettledTurnId,
  normalizeCompactToolLabel,
  type MessagesTimelineRowsProjection,
  workEntryIsActiveTurnActivity,
  resolveAssistantMessageCopyState,
  resolveAssistantMessagePlayState,
  resolveTimelineIsAtEnd,
  resolveTimelineMinimapHasPersistentGutter,
  resolveTimelineMinimapHeightStyle,
  resolveTimelineMinimapHitStripWidth,
  resolveTimelineMinimapIndexFromPointer,
  resolveTimelineMinimapInteractiveWidth,
  resolveTimelineMinimapNavigationInteractive,
  resolveTimelineMinimapTopPercent,
  shouldPreserveAssistantLineBreaks,
  toolGroupAction,
  workEntryIsVisibleInGroup,
  worktreeSetupAgentStarted,
  type StableMessagesTimelineRowsState,
  type MessagesTimelineRow,
  type WorkGroupScrollAnchor,
  TIMELINE_MINIMAP_MIN_ITEMS,
  type TimelineLatestTurn,
} from "./MessagesTimeline.logic";
import { TerminalContextInlineChip } from "./TerminalContextInlineChip";
import { Popover, PopoverPopup, PopoverTrigger } from "../ui/popover";
import { Spinner } from "../ui/spinner";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { WorktreeSetupCard } from "./WorktreeSetupCard";
import {
  buildTerminalContextBlock,
  deriveDisplayedUserMessageState,
  extractTrailingTerminalContexts,
  type ParsedTerminalContextEntry,
} from "~/lib/terminalContext";
import {
  ContextChipPopover as UserMessageContextPopover,
  ContextChipShell,
  FileChip,
  ImageChipButton,
  PULL_REQUEST_CHIP_KINDS,
  PullRequestChip,
  UnresolvedChip,
} from "../contextChipParts";
import {
  extractTrailingElementContexts,
  type ParsedElementContextEntry,
} from "~/lib/elementContext";
import {
  extractTrailingPreviewAnnotation,
  type ParsedPreviewAnnotation,
} from "~/lib/previewAnnotation";
import {
  collectComposerContextReferences,
  formatComposerContextReference,
} from "@t3tools/shared/composerContextReferences";
import {
  isPullRequestSummaryContext,
  pullRequestContextDisplayState,
  pullRequestContextKindLabel,
  reviewCommentContextLabel,
} from "~/lib/composerContextRecords";
import {
  COMPOSER_CONTEXT_CLIPBOARD_MIME,
  encodeComposerContextClipboardHtml,
  encodeComposerContextFragment,
} from "@t3tools/shared/composerContextClipboard";
import { chatMarkdownClipboardPayload } from "../../markdown-clipboard";
import { ContextChip, ContextChipLabel, type ContextChipKind } from "../ContextChip";
import { createContextPresentationRegistry } from "../contextPresentationRegistry";
import { useOpenPrLink } from "~/lib/openPullRequestLink";
import { useClientSettings } from "~/hooks/useSettings";
import type { ChatMarkdownContextReference } from "../ChatMarkdown";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { cn } from "~/lib/utils";
import { useUiStateStore } from "~/uiStateStore";
import { type TimestampFormat } from "@t3tools/contracts/settings";
import { formatChatTimestampTooltip, formatDayAwareTimestamp } from "../../timestampFormat";
import { useClientSettings } from "../../hooks/useSettings";
import { readProjectFileFresh } from "../files/projectFilesQueryState";
import { toastManager } from "../ui/toast";
import { Toggle } from "../ui/toggle";

import {
  buildInlineTerminalContextText,
  formatInlineTerminalContextLabel,
  textContainsInlineTerminalContextLabels,
} from "./userMessageTerminalContexts";
import { SkillChipIcon, SkillInlineText } from "./SkillInlineText";
import { deriveAgentSpawnSummary } from "./agentSpawnSummary";
import { formatWorkspaceRelativePath } from "../../filePathDisplay";
import {
  buildReviewCommentRenderablePatch,
  formatReviewCommentFence,
  parseReviewCommentMessageSegments,
  type ReviewCommentContext,
} from "../../reviewCommentContext";
import { PullRequestGlyph } from "~/components/pullRequest/pullRequestIcons";
import { ComputerUseAppIcon } from "~/components/Icons";

// ---------------------------------------------------------------------------
// Context — shared state consumed by every row component via Context.
// Propagates through LegendList's memo boundaries for shared callbacks and
// non-row-scoped state. `nowIso` is intentionally excluded — self-ticking
// components (WorkingTimer, LiveElapsed) handle it.
// ---------------------------------------------------------------------------

interface TimelineRowSharedState {
  timestampFormat: TimestampFormat;
  routeThreadKey: string;
  threadRef: ScopedThreadRef | null;
  markdownCwd: string | undefined;
  resolvedTheme: "light" | "dark";
  workspaceRoot: string | undefined;
  skills: ReadonlyArray<Pick<ServerProviderSkill, "name" | "displayName">>;
  activeThreadEnvironmentId: EnvironmentId;
  ttsEnabled: boolean;
  onUseArtifactTemplate: (template: CodexArtifactTemplate) => void;
  onRunShellCommand: ((command: string) => void) | undefined;
  onRevertUserMessage: (messageId: MessageId) => void;
  forkMessage: ForkMessageConfig | null;
  onImageExpand: (preview: ExpandedImagePreview) => void;
  onFileOpen: (attachment: ChatFileAttachment) => void;
  openingVideoAttachmentId: string | null;
  openPullRequest: (event: MouseEvent<HTMLElement>, url: string) => void;
  onOpenTurnDiff: (turnId: TurnId, filePath?: string) => void;
  onToggleTurnFold: (turnId: TurnId) => void;
  onToggleWorkGroup: (groupId: string, anchorKey: string) => void;
  onToggleWorkEntry: (anchorKey: string, collapsed: boolean) => void;
  onToggleSpawnRow: (entryId: string, expanded: boolean) => void;
  onToggleReasoning: (messageId: string, expanded: boolean, anchorKey: string) => void;
  expandedReasoningMessageIds: ReadonlySet<string>;
  workGroupViewState: WorkGroupViewState;
  agentPanelModel: AgentPanelModel;
  onOpenAgents: () => void;
  onCancelWorktreeSetup: (() => void) | null;
  onWorktreeSetupWorkLocally: (() => void) | null;
  onOpenWorktreeSetupTerminal: ((terminalId: string) => void) | null;
  onSteerQueuedMessage: (id: string) => void;
  steerQueuedMessageShortcutLabel: string | null;
  onRemoveQueuedMessage: (id: string) => void;
}

interface TimelineRowActivityState {
  isWorking: boolean;
  isPreparingWorktree: boolean;
  isRevertingCheckpoint: boolean;
  latestTurnId: TurnId | null;
  unsettledTurnId: TurnId | null;
  /**
   * A worktree setup whose script is still running after the agent took
   * over. The working header shows it as a chip with a popover; the stage
   * list itself has already left the timeline.
   */
  backgroundWorktreeSetup: WorktreeSetupSnapshot | null;
}

interface WorkGroupViewState {
  scrollPositions: Map<string, WorkGroupScrollAnchor>;
  expandedEntries: Set<string>;
}

const TimelineRowCtx = createContext<TimelineRowSharedState>(null!);
const TimelineRowActivityCtx = createContext<TimelineRowActivityState>(null!);
const TIMELINE_LIST_HEADER = <div className="h-3 sm:h-4" />;
const TIMELINE_LIST_FADE_HEADER = (
  <div className="h-[var(--workspace-titlebar-scroll-fade-height)]" />
);

// Header row shown when older turns exist beyond the loaded window. Plain
// button, no spinner animation; the label change is the loading indicator.
function TimelineLoadEarlierHeader({
  loading,
  onLoadEarlier,
  fade,
}: {
  loading: boolean;
  onLoadEarlier: () => void;
  fade: boolean;
}) {
  return (
    <div className={fade ? "pt-(--workspace-titlebar-scroll-fade-height)" : "pt-3 sm:pt-4"}>
      <div className="mx-auto w-full max-w-(--chat-max-width) pb-2">
        <button
          type="button"
          onClick={onLoadEarlier}
          disabled={loading}
          className="w-full py-1.5 text-xs text-muted-foreground/60 hover:text-foreground disabled:cursor-default"
        >
          {loading ? "Loading earlier turns…" : "Load earlier turns"}
        </button>
      </div>
    </div>
  );
}
const TIMELINE_LIST_FOOTER = <div className="h-3 sm:h-4" />;
const EMPTY_TIMELINE_SKILLS: ReadonlyArray<Pick<ServerProviderSkill, "name" | "displayName">> = [];
const TIMELINE_MAINTAIN_SCROLL_AT_END = {
  animated: false,
  on: {
    dataChange: true,
    itemLayout: true,
    layout: true,
  },
} as const satisfies MaintainScrollAtEndOptions;
// Streamed text lands a paragraph at a time. A smooth scroll to the end
// turns each landing into a short glide instead of a jump. Thread switches
// and layout settles keep the instant variant so nothing visibly travels.
const TIMELINE_MAINTAIN_SCROLL_AT_END_SMOOTH = {
  ...TIMELINE_MAINTAIN_SCROLL_AT_END,
  animated: true,
} as const satisfies MaintainScrollAtEndOptions;

// ---------------------------------------------------------------------------
// Props (public API)
// ---------------------------------------------------------------------------

interface MessagesTimelineProps {
  agentPanelModel?: AgentPanelModel;
  onOpenAgents?: (() => void) | undefined;
  isWorking: boolean;
  isCompacting?: boolean | undefined;
  isPreparingWorktree?: boolean | undefined;
  activeTurnStartedAt: string | null;
  /** Live bootstrap progress for this thread, or null when none is tracked. */
  worktreeSetup?: WorktreeSetupSnapshot | null | undefined;
  onCancelWorktreeSetup?: (() => void) | undefined;
  onWorktreeSetupWorkLocally?: (() => void) | undefined;
  onOpenWorktreeSetupTerminal?: ((terminalId: string) => void) | undefined;
  listRef: React.RefObject<LegendListRef | null>;
  timelineEntries: ReturnType<typeof deriveTimelineEntries>;
  latestTurn: TimelineLatestTurn | null;
  runningTurnId: TurnId | null;
  turnDiffSummaryByAssistantMessageId: Map<MessageId, TurnDiffSummary>;
  routeThreadKey: string;
  displayThreadKey?: string | null | undefined;
  onOpenTurnDiff: (turnId: TurnId, filePath?: string) => void;
  revertTurnCountByUserMessageId: Map<MessageId, number>;
  onRevertUserMessage: (messageId: MessageId) => void;
  onUseArtifactTemplate?: (template: CodexArtifactTemplate) => void;
  onRunShellCommand?: (command: string) => void;
  isRevertingCheckpoint: boolean;
  forkMessage?: ForkMessageConfig | null | undefined;
  onImageExpand: (preview: ExpandedImagePreview) => void;
  onFileOpen?: ((attachment: ChatFileAttachment) => void) | undefined;
  openingVideoAttachmentId: string | null;
  activeThreadEnvironmentId: EnvironmentId;
  markdownCwd: string | undefined;
  resolvedTheme: "light" | "dark";
  timestampFormat: TimestampFormat;
  workspaceRoot: string | undefined;
  skills?: ReadonlyArray<Pick<ServerProviderSkill, "name" | "displayName">> | undefined;
  ttsEnabled: boolean;
  anchorMessageId: MessageId | null;
  onAnchorReady: (messageId: MessageId, anchorIndex: number) => void;
  contentInsetEndAdjustment: number;
  /**
   * Whether the timeline should keep pinning to the live edge as content
   * grows. Off while the user is reading history; LegendList's own
   * maintainScrollAtEnd would otherwise re-pin regardless of ChatView's
   * scroll-mode refs whenever the user drifts near the bottom.
   */
  liveFollowEnabled: boolean;
  onIsAtEndChange: (isAtEnd: boolean) => void;
  /** Whether the timeline's rows extend past the viewport above the composer. */
  onContentOverflowChange?: ((overflows: boolean) => void) | undefined;
  onManualNavigation: () => void;
  onToolOutputCollapsedAtEnd?: (() => void) | undefined;
  cancelPositionRestoreRef?: React.RefObject<(() => void) | null> | undefined;
  hideEmptyPlaceholder?: boolean | undefined;
  topFadeEnabled?: boolean | undefined;
  /** Non-null when older turns exist beyond the loaded window. */
  loadEarlier?: CitationHistoryPage | null | undefined;
  citationRequest?: AssistantCitationRequest | null | undefined;
  citationHistoryLoading?: boolean | undefined;
  onCiteAssistantText?:
    | ((citation: AssistantCitation, sourceAnchor: AssistantCitationSourceAnchor) => boolean)
    | undefined;
  /** Messages sent during the running turn. They render as ghost bubbles after the live rows. */
  queuedMessages?: ReadonlyArray<QueuedComposerMessage> | undefined;
  onSteerQueuedMessage?: ((id: string) => void) | undefined;
  steerQueuedMessageShortcutLabel?: string | null | undefined;
  onRemoveQueuedMessage?: ((id: string) => void) | undefined;
}

// ---------------------------------------------------------------------------
// MessagesTimeline — list owner
// ---------------------------------------------------------------------------

export const MessagesTimeline = memo(function MessagesTimeline({
  isWorking,
  worktreeSetup = null,
  onCancelWorktreeSetup,
  onWorktreeSetupWorkLocally,
  onOpenWorktreeSetupTerminal,
  isPreparingWorktree = false,
  activeTurnStartedAt,
  agentPanelModel = EMPTY_AGENT_PANEL_MODEL,
  onOpenAgents = NOOP_OPEN_AGENTS,
  listRef,
  timelineEntries,
  latestTurn,
  runningTurnId,
  turnDiffSummaryByAssistantMessageId,
  routeThreadKey,
  displayThreadKey = null,
  onOpenTurnDiff,
  revertTurnCountByUserMessageId,
  onRevertUserMessage,
  onUseArtifactTemplate = NOOP_USE_ARTIFACT_TEMPLATE,
  onRunShellCommand,
  isRevertingCheckpoint,
  forkMessage = null,
  onImageExpand,
  onFileOpen = NOOP_OPEN_ATTACHMENT,
  openingVideoAttachmentId,
  activeThreadEnvironmentId,
  markdownCwd,
  resolvedTheme,
  timestampFormat,
  workspaceRoot,
  skills = EMPTY_TIMELINE_SKILLS,
  ttsEnabled,
  anchorMessageId,
  onAnchorReady,
  contentInsetEndAdjustment,
  liveFollowEnabled,
  onIsAtEndChange,
  onContentOverflowChange,
  onManualNavigation,
  onToolOutputCollapsedAtEnd,
  cancelPositionRestoreRef,
  hideEmptyPlaceholder = false,
  topFadeEnabled = false,
  loadEarlier = null,
  onCiteAssistantText,
  queuedMessages = EMPTY_QUEUED_MESSAGES,
  onSteerQueuedMessage = NOOP_QUEUED_MESSAGE_ACTION,
  steerQueuedMessageShortcutLabel = null,
  onRemoveQueuedMessage = NOOP_QUEUED_MESSAGE_ACTION,
}: MessagesTimelineProps) {
  const listIdentityKey = displayThreadKey ?? routeThreadKey;
  const rememberedPosition = useMemo(
    () => readTimelinePosition(listIdentityKey),
    [listIdentityKey],
  );
  const [expandedTurnIds, setExpandedTurnIds] = useState<ReadonlySet<TurnId>>(
    () => rememberedPosition?.disclosures?.turns ?? new Set(),
  );
  const [expandedWorkGroupIds, setExpandedWorkGroupIds] = useState<ReadonlySet<string>>(
    () => rememberedPosition?.disclosures?.workGroups ?? new Set(),
  );
  const [expandedSpawnEntryIds, setExpandedSpawnEntryIds] = useState<ReadonlySet<string>>(
    () => rememberedPosition?.disclosures?.spawnEntries ?? new Set(),
  );
  const [expandedReasoningMessageIds, setExpandedReasoningMessageIds] = useState<
    ReadonlySet<string>
  >(() => rememberedPosition?.disclosures?.reasoningMessages ?? new Set());
  const [positionedThreadKey, setPositionedThreadKey] = useState<string | null>(() =>
    rememberedPosition?.atEnd === false ? null : listIdentityKey,
  );
  const restoringThreadPosition = positionedThreadKey !== listIdentityKey;
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const listIdentityRef = useRef(listIdentityKey);
  const previousLatestTurnRef = useRef(latestTurn);
  // The list stays mounted across thread switches. Its first end pins on the
  // new thread must snap, not glide, even if that thread is mid-turn.
  const [settlingListIdentity, setSettlingListIdentity] = useState<string | null>(null);
  let paintedExpandedTurnIds = expandedTurnIds;
  let paintedExpandedWorkGroupIds = expandedWorkGroupIds;
  let paintedExpandedSpawnEntryIds = expandedSpawnEntryIds;
  let paintedExpandedReasoningMessageIds = expandedReasoningMessageIds;
  if (listIdentityRef.current !== listIdentityKey) {
    listIdentityRef.current = listIdentityKey;
    setPositionedThreadKey(null);
    previousLatestTurnRef.current = latestTurn;
    setSettlingListIdentity(listIdentityKey);
    paintedExpandedTurnIds = rememberedPosition?.disclosures?.turns ?? new Set();
    paintedExpandedWorkGroupIds = rememberedPosition?.disclosures?.workGroups ?? new Set();
    paintedExpandedSpawnEntryIds = rememberedPosition?.disclosures?.spawnEntries ?? new Set();
    paintedExpandedReasoningMessageIds =
      rememberedPosition?.disclosures?.reasoningMessages ?? new Set();
    setExpandedTurnIds(paintedExpandedTurnIds);
    setExpandedWorkGroupIds(paintedExpandedWorkGroupIds);
    setExpandedSpawnEntryIds(paintedExpandedSpawnEntryIds);
    setExpandedReasoningMessageIds(paintedExpandedReasoningMessageIds);
  }
  const onToggleSpawnRow = useCallback((entryId: string, expanded: boolean) => {
    setExpandedSpawnEntryIds((current) => {
      if (current.has(entryId) === expanded) return current;
      const next = new Set(current);
      if (expanded) next.add(entryId);
      else next.delete(entryId);
      return next;
    });
  }, []);
  const citationThreadRef = useMemo(() => parseScopedThreadKey(routeThreadKey), [routeThreadKey]);
  const openPullRequest = useOpenPrLink(citationThreadRef ?? undefined);
  const expandCitedTurn = useCallback((turnId: TurnId) => {
    setExpandedTurnIds((current) =>
      current.has(turnId) ? current : new Set([...current, turnId]),
    );
  }, []);
  // Nested tool state shares the bounded thread-position cache.
  const workGroupViewState = useMemo<WorkGroupViewState>(
    () =>
      rememberedPosition?.disclosures?.workGroupState ?? {
        scrollPositions: new Map(),
        expandedEntries: new Set(),
      },
    [listIdentityKey, rememberedPosition],
  );
  const [disclosureToggleSettling, setDisclosureToggleSettling] = useState(false);
  const [minimapStripMap] = useState(() => new Map<string, HTMLSpanElement>());
  const disclosureAnchorKeyRef = useRef<string | null>(null);
  const disclosureSettleFrameRef = useRef<number | null>(null);
  const disclosureSettleSecondFrameRef = useRef<number | null>(null);
  const previousContentInsetEndAdjustmentRef = useRef(contentInsetEndAdjustment);

  useLayoutEffect(() => {
    keepTimelineEndVisibleAfterOverlayGrowth({
      timeline: listRef.current,
      previousOverlayHeight: previousContentInsetEndAdjustmentRef.current,
      overlayHeight: contentInsetEndAdjustment,
      followingEnd: liveFollowEnabled && anchorMessageId === null,
    });
    previousContentInsetEndAdjustmentRef.current = contentInsetEndAdjustment;
  }, [anchorMessageId, contentInsetEndAdjustment, listRef, liveFollowEnabled]);

  useEffect(() => {
    return () => {
      if (disclosureSettleFrameRef.current !== null) {
        cancelAnimationFrame(disclosureSettleFrameRef.current);
      }
      if (disclosureSettleSecondFrameRef.current !== null) {
        cancelAnimationFrame(disclosureSettleSecondFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (settlingListIdentity === null) return;
    // Two frames covers the fresh-data layout pass and the initial end pin.
    let second: number | null = null;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        setSettlingListIdentity((current) => (current === settlingListIdentity ? null : current));
      });
    });
    return () => {
      cancelAnimationFrame(first);
      if (second !== null) cancelAnimationFrame(second);
    };
  }, [settlingListIdentity]);

  const suspendEndScrollMaintenanceForDisclosure = useCallback(
    (anchorKey: string, collapsed = false) => {
      disclosureAnchorKeyRef.current = anchorKey;
      setDisclosureToggleSettling(true);
      if (disclosureSettleFrameRef.current !== null) {
        cancelAnimationFrame(disclosureSettleFrameRef.current);
      }
      if (disclosureSettleSecondFrameRef.current !== null) {
        cancelAnimationFrame(disclosureSettleSecondFrameRef.current);
      }
      disclosureSettleFrameRef.current = requestAnimationFrame(() => {
        disclosureSettleSecondFrameRef.current = requestAnimationFrame(() => {
          disclosureAnchorKeyRef.current = null;
          setDisclosureToggleSettling(false);
          disclosureSettleFrameRef.current = null;
          disclosureSettleSecondFrameRef.current = null;
          // Wait for row measurement and the disclosure click's blur check.
          // Closing output can reveal the end without a scroll event.
          if (collapsed && resolveTimelineIsAtEnd(listRef.current?.getState()) === true) {
            onToolOutputCollapsedAtEnd?.();
          }
        });
      });
    },
    [],
  );

  const shouldRestoreVisibleContentPosition = useCallback((row: MessagesTimelineRow) => {
    const disclosureAnchorKey = disclosureAnchorKeyRef.current;
    return disclosureAnchorKey === null || row.id === disclosureAnchorKey;
  }, []);

  const maintainVisibleContentPosition = useMemo(
    () => ({
      data: true,
      size: true,
      shouldRestorePosition: shouldRestoreVisibleContentPosition,
    }),
    [shouldRestoreVisibleContentPosition],
  );

  const onToggleTurnFold = useCallback(
    (turnId: TurnId) => {
      suspendEndScrollMaintenanceForDisclosure(`turn-fold:${turnId}`);
      setExpandedTurnIds((existing) => {
        const next = new Set(existing);
        if (next.has(turnId)) {
          next.delete(turnId);
        } else {
          next.add(turnId);
        }
        return next;
      });
    },
    [suspendEndScrollMaintenanceForDisclosure],
  );
  const onToggleWorkGroup = useCallback(
    (groupId: string, anchorKey: string) => {
      suspendEndScrollMaintenanceForDisclosure(anchorKey);
      setExpandedWorkGroupIds((existing) => {
        const next = new Set(existing);
        if (next.has(groupId)) {
          next.delete(groupId);
        } else {
          next.add(groupId);
        }
        return next;
      });
    },
    [suspendEndScrollMaintenanceForDisclosure],
  );
  const onToggleReasoning = useCallback(
    (messageId: string, expanded: boolean, anchorKey: string) => {
      suspendEndScrollMaintenanceForDisclosure(anchorKey, !expanded);
      setExpandedReasoningMessageIds((current) => {
        if (current.has(messageId) === expanded) return current;
        const next = new Set(current);
        if (expanded) next.add(messageId);
        else next.delete(messageId);
        return next;
      });
    },
    [suspendEndScrollMaintenanceForDisclosure],
  );

  // An in-session interrupt leaves its turn expanded so the user keeps their
  // place; the next turn (or a reload, since this is local state) folds it.
  useEffect(() => {
    const previous = previousLatestTurnRef.current;
    previousLatestTurnRef.current = latestTurn;
    if (!latestTurn || previous?.turnId === undefined) {
      return;
    }
    if (latestTurn.turnId === previous.turnId) {
      if (previous.state === "running" && latestTurn.state === "interrupted") {
        setExpandedTurnIds((existing) => {
          const next = new Set(existing);
          next.add(latestTurn.turnId);
          return next;
        });
      }
      return;
    }
    setExpandedTurnIds((existing) => {
      if (!existing.has(previous.turnId)) {
        return existing;
      }
      const next = new Set(existing);
      next.delete(previous.turnId);
      return next;
    });
  }, [latestTurn]);

  const rawRows = useMemo(
    () =>
      deriveMessagesTimelineRows({
        timelineEntries,
        latestTurn,
        runningTurnId,
        expandedTurnIds,
        expandedWorkGroupIds,
        isWorking,
        activeTurnStartedAt,
        queuedMessages,
        turnDiffSummaryByAssistantMessageId,
        revertTurnCountByUserMessageId,
      }),
    [
      timelineEntries,
      latestTurn,
      runningTurnId,
      expandedTurnIds,
      expandedWorkGroupIds,
      isWorking,
      activeTurnStartedAt,
      queuedMessages,
      turnDiffSummaryByAssistantMessageId,
      revertTurnCountByUserMessageId,
    ],
  );
  const rows = useStableRows(rawRows);
  const minimapItems = useMemo(() => deriveTimelineMinimapItems(rows), [rows]);
  const restoreRowIndex =
    restoringThreadPosition && rememberedPosition?.atEnd === false
      ? rows.findIndex((row) => row.id === rememberedPosition.rowId)
      : -1;
  const restoringAlwaysRender = useMemo(
    () =>
      restoringThreadPosition && restoreRowIndex >= 0 ? { indices: [restoreRowIndex] } : undefined,
    [restoreRowIndex, restoringThreadPosition],
  );
  useLayoutEffect(() => {
    if (!restoringThreadPosition || rows.length === 0) return;
    const list = listRef.current;
    if (!list) return;
    let cancelled = false;
    let settleFrame: number | null = null;
    const viewport: HTMLElement | null = list.getScrollableNode();
    const cancelRestoration = () => {
      if (cancelled) return;
      cancelled = true;
      if (settleFrame !== null) cancelAnimationFrame(settleFrame);
      // Supersede any pending estimated-index scroll before the browser applies the gesture.
      if (viewport) void list.scrollToOffset({ offset: viewport.scrollTop, animated: false });
      setPositionedThreadKey(listIdentityKey);
    };
    const cancelForNavigation = () => {
      cancelRestoration();
      onManualNavigation();
    };
    const onScrollKey = (event: globalThis.KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key) &&
        !(
          event.target instanceof Element &&
          event.target.closest("input, textarea, [contenteditable=true]")
        )
      )
        cancelForNavigation();
    };
    viewport?.addEventListener("wheel", cancelForNavigation, { passive: true });
    viewport?.addEventListener("touchmove", cancelForNavigation, { passive: true });
    viewport?.addEventListener("pointerdown", cancelForNavigation, { passive: true });
    viewport?.ownerDocument.addEventListener("keydown", onScrollKey);
    const position = rememberedPosition;
    const index = position ? rows.findIndex((row) => row.id === position.rowId) : -1;
    if (position?.atEnd === false) onManualNavigation();
    if (cancelPositionRestoreRef) cancelPositionRestoreRef.current = cancelRestoration;
    const scrolling =
      position?.atEnd === false
        ? index >= 0
          ? list.scrollToIndex({
              index,
              animated: false,
              viewPosition: 0,
              viewOffset: -position.offsetWithinRow,
            })
          : list.scrollToOffset({ offset: position.scrollOffset, animated: false })
        : list.scrollToEnd({ animated: false });
    void Promise.resolve(scrolling).then(() => {
      if (cancelled) return;
      if (position?.atEnd !== false || index < 0) {
        setPositionedThreadKey(listIdentityKey);
        return;
      }
      // Index scrolling starts from estimates. Keep the saved row mounted
      // until its measured position and the DOM agree for two layout frames.
      let stableFrames = 0;
      const reconcile = () => {
        if (cancelled) return;
        const state = list.getState();
        const rowIndex = state.indexByKey(position.rowId);
        const row = rowIndex === undefined ? undefined : state.elementAtIndex(rowIndex);
        const element = list.getScrollableNode();
        if (!row || !element) return;
        const offset = Math.max(
          0,
          Math.min(
            element.scrollTop +
              row.getBoundingClientRect().top -
              element.getBoundingClientRect().top +
              position.offsetWithinRow,
            element.scrollHeight - element.clientHeight,
          ),
        );
        if (Math.abs(element.scrollTop - offset) > 1) {
          stableFrames = 0;
          void list.scrollToOffset({ offset, animated: false }).then(() => {
            if (!cancelled) settleFrame = requestAnimationFrame(reconcile);
          });
          return;
        }
        if (++stableFrames >= 2) {
          setPositionedThreadKey(listIdentityKey);
        } else {
          settleFrame = requestAnimationFrame(reconcile);
        }
      };
      settleFrame = requestAnimationFrame(reconcile);
    });
    return () => {
      cancelled = true;
      if (cancelPositionRestoreRef?.current === cancelRestoration) {
        cancelPositionRestoreRef.current = null;
      }
      if (settleFrame !== null) cancelAnimationFrame(settleFrame);
      viewport?.removeEventListener("wheel", cancelForNavigation);
      viewport?.removeEventListener("touchmove", cancelForNavigation);
      viewport?.removeEventListener("pointerdown", cancelForNavigation);
      viewport?.ownerDocument.removeEventListener("keydown", onScrollKey);
    };
  }, [
    cancelPositionRestoreRef,
    listIdentityKey,
    listRef,
    onManualNavigation,
    rememberedPosition,
    restoringThreadPosition,
    rows,
  ]);

  const [timelineViewportElement, setTimelineViewportElement] = useState<HTMLDivElement | null>(
    null,
  );
  // Re-measure the minimap gutter when the chat column changes width without a viewport resize.
  const chatWidth = useClientSettings((settings) => settings.chatWidth);
  const {
    target: readyCitationRequest,
    positioning: citationPositioning,
    onListLoad: onCitationListLoad,
    alwaysRender: citationAlwaysRender,
  } = useAssistantCitationTarget({
    request: citationRequest,
    entries: timelineEntries,
    rows,
    listRef,
    viewport: timelineViewportElement,
    historyLoading: citationHistoryLoading,
    loadEarlier,
    onExpandTurn: expandCitedTurn,
    onManualNavigation,
  });
  const [minimapHasPersistentGutter, setMinimapHasPersistentGutter] = useState(false);
  const alwaysRender = restoringAlwaysRender;
  const [minimapHitStripWidth, setMinimapHitStripWidth] = useState(0);
  const handleAnchorReady = useCallback(
    (info: { anchorIndex: number | undefined }) => {
      if (anchorMessageId !== null && info.anchorIndex !== undefined) {
        onAnchorReady(anchorMessageId, info.anchorIndex);
      }
    },
    [anchorMessageId, onAnchorReady],
  );
  const anchoredEndSpace = useMemo(() => {
    const config = resolveChatListAnchoredEndSpace(
      rows,
      anchorMessageId,
      (row) => (row.kind === "message" && row.message.role === "user" ? row.message.id : null),
      { anchorOffset: CHAT_TIMELINE_ANCHOR_OFFSET },
    );
    return config ? { ...config, onReady: handleAnchorReady } : undefined;
  }, [anchorMessageId, handleAnchorReady, rows]);

  const measureContentOverflow = useCallback(
    () =>
      timelineContentOverflowsViewport(listRef.current?.getState?.(), {
        composerInset: contentInsetEndAdjustment,
        anchorOffset: CHAT_TIMELINE_ANCHOR_OFFSET,
      }),
    [contentInsetEndAdjustment, listRef],
  );
  // LegendList lays rows out from layout effects, so a read on the next frame
  // sees the settled positions. One frame is shared across bursts of size
  // changes.
  const contentOverflowFrameRef = useRef<number | null>(null);
  const cancelContentOverflowFrame = useCallback(() => {
    if (contentOverflowFrameRef.current !== null) {
      cancelAnimationFrame(contentOverflowFrameRef.current);
      contentOverflowFrameRef.current = null;
    }
  }, []);
  const reportContentOverflow = useCallback(() => {
    if (!onContentOverflowChange || contentOverflowFrameRef.current !== null) return;
    contentOverflowFrameRef.current = requestAnimationFrame(() => {
      contentOverflowFrameRef.current = null;
      onContentOverflowChange(measureContentOverflow());
    });
  }, [measureContentOverflow, onContentOverflowChange]);
  useEffect(() => cancelContentOverflowFrame, [cancelContentOverflowFrame]);
  // The list's own layout effects have already run here, so estimated row
  // positions are in place. Reporting before the first paint lets a thread
  // open in its final composer layout instead of correcting it a frame later.
  // A frame scheduled with the previous inset would overwrite this read, so
  // it is dropped first.
  useLayoutEffect(() => {
    cancelContentOverflowFrame();
    onContentOverflowChange?.(measureContentOverflow());
  }, [cancelContentOverflowFrame, measureContentOverflow, onContentOverflowChange, rows.length]);

  const handleScroll = useCallback(() => {
    const state = listRef.current?.getState?.();
    const isAtEnd = resolveTimelineIsAtEnd(state, contentInsetEndAdjustment);
    if (isAtEnd !== undefined) {
      onIsAtEndChange(isAtEnd);
    }
    reportContentOverflow();
    if (!state || minimapItems.length === 0) {
      return;
    }

    const scrollTop = state.scroll ?? 0;
    const scrollBottom = scrollTop + (state.scrollLength ?? 0);

    for (const item of minimapItems) {
      const strip = minimapStripMap.get(item.id);
      if (!strip) {
        continue;
      }

      const rowTop = resolveTimelineRowTop(state, item.rowIndex);
      const rowHeight = resolveTimelineRowHeight(state, item.rowIndex);
      const inView =
        rowTop !== null &&
        rowTop < scrollBottom &&
        rowTop + Math.max(1, rowHeight ?? 1) > scrollTop;

      strip.dataset.inView = inView ? "true" : "false";
    }
  }, [
    contentInsetEndAdjustment,
    listRef,
    minimapItems,
    minimapStripMap,
    onIsAtEndChange,
    reportContentOverflow,
  ]);

  useEffect(() => {
    const frame = requestAnimationFrame(handleScroll);
    return () => cancelAnimationFrame(frame);
  }, [handleScroll, rows.length]);

  useEffect(() => {
    if (!timelineViewportElement) {
      return;
    }

    const measure = () => {
      const viewportWidth = timelineViewportElement.getBoundingClientRect().width;
      // Without a mounted row, treat the column as full width so the strip stays inert.
      const contentWidth =
        timelineViewportElement
          .querySelector<HTMLElement>("[data-timeline-root]")
          ?.getBoundingClientRect().width ?? viewportWidth;
      const nextHasPersistentGutter = resolveTimelineMinimapHasPersistentGutter(
        viewportWidth,
        contentWidth,
      );
      setMinimapHasPersistentGutter((current) =>
        current === nextHasPersistentGutter ? current : nextHasPersistentGutter,
      );
      setMinimapHitStripWidth(resolveTimelineMinimapHitStripWidth(viewportWidth, contentWidth));
      reportContentOverflow();
    };

    const frame = requestAnimationFrame(measure);

    const observer = new ResizeObserver(measure);
    observer.observe(timelineViewportElement);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [timelineViewportElement, rows.length, reportContentOverflow, chatWidth]);

  const sharedState = useMemo<TimelineRowSharedState>(
    () => ({
      timestampFormat,
      routeThreadKey,
      threadRef: parseScopedThreadKey(routeThreadKey),
      markdownCwd,
      resolvedTheme,
      workspaceRoot,
      skills,
      activeThreadEnvironmentId,
      ttsEnabled,
      onUseArtifactTemplate,
      onRunShellCommand,
      onRevertUserMessage,
      forkMessage,
      onImageExpand,
      onFileOpen,
      openingVideoAttachmentId,
      openPullRequest,
      onOpenTurnDiff,
      onToggleTurnFold,
      onToggleWorkGroup,
      onToggleWorkEntry: suspendEndScrollMaintenanceForDisclosure,
      onToggleSpawnRow,
      onToggleReasoning,
      expandedReasoningMessageIds: paintedExpandedReasoningMessageIds,
      workGroupViewState,
      agentPanelModel: agentPanelModel ?? EMPTY_AGENT_PANEL_MODEL,
      expandedSpawnEntryIds: paintedExpandedSpawnEntryIds,
      onOpenAgents,
      onCancelWorktreeSetup: onCancelWorktreeSetup ?? null,
      onWorktreeSetupWorkLocally: onWorktreeSetupWorkLocally ?? null,
      onOpenWorktreeSetupTerminal: onOpenWorktreeSetupTerminal ?? null,
      onSteerQueuedMessage,
      steerQueuedMessageShortcutLabel,
      onRemoveQueuedMessage,
    }),
    [
      timestampFormat,
      routeThreadKey,
      markdownCwd,
      resolvedTheme,
      workspaceRoot,
      skills,
      activeThreadEnvironmentId,
      ttsEnabled,
      onUseArtifactTemplate,
      onRunShellCommand,
      onRevertUserMessage,
      forkMessage,
      onImageExpand,
      onFileOpen,
      openingVideoAttachmentId,
      onOpenTurnDiff,
      onToggleTurnFold,
      onToggleWorkGroup,
      suspendEndScrollMaintenanceForDisclosure,
      onToggleSpawnRow,
      onToggleReasoning,
      paintedExpandedReasoningMessageIds,
      workGroupViewState,
      agentPanelModel,
      onOpenAgents,
      onCancelWorktreeSetup,
      onWorktreeSetupWorkLocally,
      onOpenWorktreeSetupTerminal,
      onSteerQueuedMessage,
      steerQueuedMessageShortcutLabel,
      onRemoveQueuedMessage,
    ],
  );
  const backgroundWorktreeSetup =
    worktreeSetup !== null &&
    worktreeSetup.phase === "running" &&
    worktreeSetupAgentStarted(worktreeSetup) &&
    latestTurn?.startedAt != null
      ? worktreeSetup
      : null;
  const activityState = useMemo<TimelineRowActivityState>(
    () => ({
      isWorking,
      isPreparingWorktree,
      isRevertingCheckpoint,
      latestTurnId: latestTurn?.turnId ?? null,
      // The same value the row-derivation uses, so a block and the placeholder
      // beside it can never disagree about whether a turn is still live.
      unsettledTurnId: deriveUnsettledTurnId(latestTurn ?? null, runningTurnId),
      backgroundWorktreeSetup,
    }),
    [
      backgroundWorktreeSetup,
      isRevertingCheckpoint,
      isWorking,
      isPreparingWorktree,
      // Deliberately the fields `deriveUnsettledTurnId` reads, not the object:
      // its identity changes on every thread-shell patch.
      latestTurn?.turnId,
      latestTurn?.state,
      latestTurn?.completedAt,
      runningTurnId,
    ],
  );

  // Stable renderItem — no closure deps. Row components read shared state
  // from TimelineRowCtx, which propagates through LegendList's memo.
  const renderItem = useCallback(
    ({ item }: { item: MessagesTimelineRow }) => (
      <div
        className="mx-auto w-full min-w-0 max-w-(--chat-max-width) overflow-x-clip"
        data-timeline-root="true"
      >
        <TimelineRowContent row={item} />
      </div>
    ),
    [],
  );

  if (rows.length === 0 && !isWorking) {
    if (hideEmptyPlaceholder) {
      return null;
    }
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-placeholder text-sm">Send a message to start the conversation.</p>
      </div>
    );
  }

  return (
    <TimelineRowCtx value={sharedState}>
      <TimelineRowActivityCtx value={activityState}>
        <div
          ref={setTimelineViewportElement}
          className="relative h-full min-h-0"
          data-assistant-citation-viewport="true"
        >
          {onCiteAssistantText && citationThreadRef ? (
            <AssistantSelectionToolbar
              viewport={timelineViewportElement}
              threadRef={citationThreadRef}
              onCite={onCiteAssistantText}
            />
          ) : null}
          <LegendList<MessagesTimelineRow>
            ref={listRef}
            data={rows}
            keyExtractor={keyExtractor}
            getItemType={getItemType}
            renderItem={renderItem}
            estimatedItemSize={90}
            initialScrollAtEnd
            {...(anchoredEndSpace ? { anchoredEndSpace } : {})}
            contentInsetEndAdjustment={contentInsetEndAdjustment}
            maintainScrollAtEnd={
              anchoredEndSpace || !liveFollowEnabled || disclosureToggleSettling
                ? false
                : isWorking && !prefersReducedMotion && settlingListIdentity === null
                  ? TIMELINE_MAINTAIN_SCROLL_AT_END_SMOOTH
                  : TIMELINE_MAINTAIN_SCROLL_AT_END
            }
            maintainVisibleContentPosition={maintainVisibleContentPosition}
            onScroll={handleScroll}
            onItemSizeChanged={reportContentOverflow}
            className={cn(
              "scrollbar-gutter-both h-full min-h-0 overflow-x-hidden overscroll-y-contain px-3 [overflow-anchor:none] sm:px-5",
              topFadeEnabled && "topbar-scroll-fade",
            )}
            ListHeaderComponent={
              loadEarlier !== null ? (
                <TimelineLoadEarlierHeader
                  loading={loadEarlier.loading}
                  onLoadEarlier={loadEarlier.onLoadEarlier}
                  fade={topFadeEnabled}
                />
              ) : topFadeEnabled ? (
                TIMELINE_LIST_FADE_HEADER
              ) : (
                TIMELINE_LIST_HEADER
              )
            }
            ListFooterComponent={TIMELINE_LIST_FOOTER}
          />
          <TimelineMinimap
            items={minimapItems}
            hasPersistentGutter={minimapHasPersistentGutter}
            hitStripWidth={minimapHitStripWidth}
            stripMap={minimapStripMap}
            onSelect={(item) => {
              onManualNavigation();
              void listRef.current?.scrollToIndex({
                index: item.rowIndex,
                animated: true,
                viewOffset: 24,
              });
            }}
          />
        </div>
      </TimelineRowActivityCtx>
    </TimelineRowCtx>
  );
});

function keyExtractor(item: MessagesTimelineRow) {
  return item.id;
}

function getItemType(item: MessagesTimelineRow) {
  return item.kind === "message" ? `message:${item.message.role}` : item.kind;
}

interface TimelinePositionState {
  readonly contentLength?: number;
  readonly scroll?: number;
  readonly scrollLength?: number;
  readonly positionAtIndex?: (index: number) => number | undefined;
  readonly sizeAtIndex?: (index: number) => number | undefined;
}

function resolveTimelineRowTop(state: TimelinePositionState, rowIndex: number) {
  const top = state.positionAtIndex?.(rowIndex);
  return typeof top === "number" && Number.isFinite(top) ? top : null;
}

function resolveTimelineRowHeight(state: TimelinePositionState, rowIndex: number) {
  const height = state.sizeAtIndex?.(rowIndex);
  return typeof height === "number" && Number.isFinite(height) ? height : null;
}

function timelineMinimapEventTargetsPreview(target: EventTarget): boolean {
  return target instanceof Element && target.closest("[data-minimap-preview]") !== null;
}

function TimelineMinimap({
  hasPersistentGutter,
  hitStripWidth,
  currentIndex,
  items,
  stripMap,
  onSelect,
}: {
  hasPersistentGutter: boolean;
  hitStripWidth: number;
  currentIndex: number | null;
  items: ReadonlyArray<TimelineMinimapItem>;
  stripMap: Map<string, HTMLSpanElement>;
  onSelect: (item: TimelineMinimapItem) => void;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const resolvedActiveIndex =
    activeIndex !== null && activeIndex < items.length ? activeIndex : null;
  const activeItem = useMemo(
    () =>
      resolveTimelineMinimapPreview(
        resolvedActiveIndex === null ? null : (items[resolvedActiveIndex] ?? null),
      ),
    [items, resolvedActiveIndex],
  );
  const navigationInteractive = resolveTimelineMinimapNavigationInteractive(hitStripWidth);
  const activeTopPercent =
    resolvedActiveIndex === null
      ? 0
      : resolveTimelineMinimapTopPercent(resolvedActiveIndex, items.length);
  const activeTooltipTranslate =
    resolvedActiveIndex === null
      ? "-50%"
      : resolvedActiveIndex === 0
        ? "0%"
        : resolvedActiveIndex === items.length - 1
          ? "-100%"
          : "-50%";
  const resolvedCurrentIndex =
    currentIndex !== null && currentIndex >= 0 && currentIndex < items.length ? currentIndex : null;
  const previousItem =
    resolvedCurrentIndex === null ? null : (items[resolvedCurrentIndex - 1] ?? null);
  const nextItem = resolvedCurrentIndex === null ? null : (items[resolvedCurrentIndex + 1] ?? null);

  const resolveActiveIndexFromPointer = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      return resolveTimelineMinimapIndexFromPointer({
        itemCount: items.length,
        railTop: rect.top,
        railHeight: rect.height,
        pointerY: event.clientY,
      });
    },
    [items.length],
  );

  const updateActiveIndexFromPointer = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const nextIndex = resolveActiveIndexFromPointer(event);
      setActiveIndex(nextIndex);
    },
    [resolveActiveIndexFromPointer],
  );

  const moveActiveIndex = useCallback(
    (delta: number) => {
      setActiveIndex((current) => {
        const base = current ?? 0;
        return Math.max(0, Math.min(items.length - 1, base + delta));
      });
    },
    [items.length],
  );

  if (items.length < TIMELINE_MINIMAP_MIN_ITEMS) {
    return null;
  }

  return (
    <div
      className={cn(
        "group/minimap pointer-events-none absolute inset-y-0 left-0 z-40 hidden w-18 [@media(pointer:fine)]:block",
        hasPersistentGutter
          ? "opacity-100"
          : "opacity-0 transition-opacity duration-150 hover:opacity-100 focus-within:opacity-100",
      )}
      data-testid="timeline-minimap"
      data-persistent-gutter={hasPersistentGutter ? "true" : "false"}
    >
      <div className="relative h-full w-full select-none">
        <div
          className={cn(
            "absolute top-1/2 left-3 -translate-y-1/2",
            // The strip is width-capped to the side gutter so it never overlays
            // the centered content column; with no usable gutter it goes inert.
            hitStripWidth > 0 ? "pointer-events-auto" : "pointer-events-none",
          )}
          style={{
            height: resolveTimelineMinimapHeightStyle(items.length),
            width: resolveTimelineMinimapInteractiveWidth(hitStripWidth, activeItem !== null),
          }}
        >
          <TimelineMinimapNavigationButton
            direction="previous"
            disabled={previousItem === null}
            interactive={navigationInteractive}
            onClick={() => {
              if (previousItem) onSelect(previousItem);
            }}
          />
          <button
            aria-label={`Jump to message: ${activeItem?.userText ?? "User message"}`}
            className="absolute inset-y-0 left-0 w-full cursor-pointer bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70"
            onBlur={() => setActiveIndex(null)}
            onClick={(event) => {
              if (timelineMinimapEventTargetsPreview(event.target)) {
                return;
              }
              const nextIndex = resolveActiveIndexFromPointer(event);
              const selectedItem = nextIndex === null ? null : (items[nextIndex] ?? null);
              if (selectedItem) {
                onSelect(selectedItem);
              }
              event.currentTarget.blur();
            }}
            onFocus={() => setActiveIndex((current) => current ?? resolvedCurrentIndex ?? 0)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                moveActiveIndex(1);
              } else if (event.key === "ArrowUp") {
                event.preventDefault();
                moveActiveIndex(-1);
              } else if (event.key === "Home") {
                event.preventDefault();
                setActiveIndex(0);
              } else if (event.key === "End") {
                event.preventDefault();
                setActiveIndex(items.length - 1);
              } else if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                if (activeItem) {
                  onSelect(activeItem);
                }
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
            onMouseMove={updateActiveIndexFromPointer}
            onMouseDown={(event) => {
              if (timelineMinimapEventTargetsPreview(event.target)) {
                return;
              }
              event.preventDefault();
            }}
            type="button"
          >
            <div className="absolute top-0 left-3 h-full w-px bg-border/15" />
            {items.map((item, index) => {
              const top = `${resolveTimelineMinimapTopPercent(index, items.length)}%`;
              const activeDistance =
                resolvedActiveIndex === null ? null : Math.abs(index - resolvedActiveIndex);
              return (
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute left-0 h-0.5 -translate-y-1/2 rounded-full bg-muted-foreground/35 transition-[width,background-color] duration-150 data-[in-view=true]:bg-foreground/90",
                    activeDistance === 0
                      ? "w-6 bg-muted-foreground/75"
                      : activeDistance === 1
                        ? "w-4"
                        : activeDistance === 2
                          ? "w-2.5"
                          : "w-2",
                  )}
                  data-in-view="false"
                  data-minimap-strip
                  key={item.id}
                  ref={(node) => {
                    if (node) {
                      stripMap.set(item.id, node);
                    } else {
                      stripMap.delete(item.id);
                    }
                  }}
                  style={{ top }}
                />
              );
            })}
            {activeItem ? (
              <span
                className="pointer-events-auto absolute left-8 w-80 cursor-text select-text"
                data-minimap-preview
                onMouseMove={(event) => event.stopPropagation()}
                style={{
                  top: `${activeTopPercent}%`,
                  transform: `translateY(${activeTooltipTranslate})`,
                }}
              >
                <span className="dropdown-glass block rounded-xl p-3 text-left text-popover-foreground shadow-xl shadow-black/25">
                  <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-5">
                    {activeItem.userText ?? "User message"}
                  </span>
                  {activeItem.assistantText ? (
                    <span
                      className="mt-1 max-h-[3.75rem] overflow-hidden text-muted-foreground text-sm leading-5"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {activeItem.assistantText}
                    </span>
                  ) : null}
                </span>
              </span>
            ) : null}
          </button>
          <TimelineMinimapNavigationButton
            direction="next"
            disabled={nextItem === null}
            interactive={navigationInteractive}
            onClick={() => {
              if (nextItem) onSelect(nextItem);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function TimelineMinimapNavigationButton({
  direction,
  disabled,
  interactive,
  onClick,
}: {
  direction: "previous" | "next";
  disabled: boolean;
  interactive: boolean;
  onClick: () => void;
}) {
  const previous = direction === "previous";
  const label = previous ? "Previous turn" : "Next turn";
  const Icon = previous ? ChevronUpIcon : ChevronDownIcon;

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            className={cn(
              "absolute left-1 z-10 inline-flex -translate-x-1/2 opacity-0 transition-opacity duration-150 hover:opacity-100 focus-within:opacity-100",
              interactive ? "pointer-events-auto" : "pointer-events-none",
              previous ? "bottom-[calc(100%+2px)]" : "top-[calc(100%+2px)]",
            )}
          />
        }
      >
        <Button
          aria-label={label}
          disabled={disabled}
          onClick={onClick}
          size="icon-micro"
          type="button"
          variant="ghost-muted"
        >
          <Icon className="size-4 text-foreground/90" />
        </Button>
      </TooltipTrigger>
      <TooltipPopup side={previous ? "top" : "bottom"}>{label}</TooltipPopup>
    </Tooltip>
  );
}

// ---------------------------------------------------------------------------
// TimelineRowContent — the actual row component
// ---------------------------------------------------------------------------

type TimelineWorkEntry = Extract<MessagesTimelineRow, { kind: "work" }>["groupedEntries"][number];
type TimelineRow = MessagesTimelineRow;

const TimelineRowContent = memo(function TimelineRowContent({ row }: { row: TimelineRow }) {
  const isExpandedToolGroupEntry = row.kind === "work" && row.isExpandedToolGroupEntry;
  const isLastExpandedToolGroupEntry = row.kind === "work" && row.isLastExpandedToolGroupEntry;
  const isExpandedToolGroupHeader =
    (row.kind === "work-toggle" && row.expanded) || (row.kind === "work-live" && row.expanded);

  return (
    <div
      className={cn(
        // Commentary (non-terminal assistant) rows carry no metadata row, so
        // they sit closer to the work that follows them.
        isExpandedToolGroupEntry
          ? isLastExpandedToolGroupEntry
            ? "pb-1"
            : "pb-0"
          : isExpandedToolGroupHeader
            ? "pb-0"
            : row.kind === "turn-fold" || row.kind === "working" || row.kind === "thinking"
              ? "pb-1.5"
              : (row.kind === "message" &&
                    row.message.role === "assistant" &&
                    !row.showAssistantMeta) ||
                  (row.kind === "message" && row.message.role === "reasoning") ||
                  row.kind === "work" ||
                  row.kind === "work-live" ||
                  row.kind === "work-toggle" ||
                  row.kind === "activity-group" ||
                  row.kind === "worktree-setup"
                ? "pb-2"
                : "pb-4",
        row.kind === "message" && row.message.role === "assistant" ? "group/assistant" : null,
      )}
      data-timeline-row-id={row.id}
      data-timeline-row-kind={row.kind}
      data-message-id={row.kind === "message" ? row.message.id : undefined}
      data-message-role={row.kind === "message" ? row.message.role : undefined}
    >
      {row.kind === "work" ? (
        <WorkGroupSection
          anchorKey={row.id}
          groupedEntries={row.groupedEntries}
          isExpandedToolGroupEntry={row.isExpandedToolGroupEntry}
        />
      ) : null}
      {row.kind === "work-live" ? <LiveWorkEntryTimelineRow row={row} /> : null}
      {row.kind === "activity-group" ? <ActivityGroupTimelineRow row={row} /> : null}
      {row.kind === "work-toggle" ? <WorkGroupToggleTimelineRow row={row} /> : null}
      {row.kind === "turn-fold" ? <TurnFoldTimelineRow row={row} /> : null}
      {row.kind === "message" && row.message.role === "user" ? <UserTimelineRow row={row} /> : null}
      {row.kind === "message" && row.message.role === "assistant" ? (
        <AssistantTimelineRow row={row} />
      ) : null}
      {row.kind === "message" && row.message.role === "reasoning" ? (
        <ReasoningTimelineRow row={row} />
      ) : null}
      {row.kind === "assistant-meta" ? <AssistantMetaTimelineRow row={row} /> : null}
      {row.kind === "proposed-plan" ? <ProposedPlanTimelineRow row={row} /> : null}
      {row.kind === "turn-plan" ? <TurnPlanTimelineRow row={row} /> : null}
      {row.kind === "notice" ? <NoticeTimelineRow row={row} /> : null}
      {row.kind === "working" ? <WorkingTimelineRow row={row} /> : null}
      {row.kind === "thinking" ? <ThinkingTimelineRow /> : null}
      {row.kind === "worktree-setup" ? <WorktreeSetupTimelineRow row={row} /> : null}
      {row.kind === "queued-message" ? <QueuedMessageTimelineRow row={row} /> : null}
    </div>
  );
});

function WorktreeSetupTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "worktree-setup" }>;
}) {
  const ctx = use(TimelineRowCtx);
  const terminalId = row.snapshot.setupScript?.terminalId ?? null;
  const openTerminal = ctx.onOpenWorktreeSetupTerminal;
  const onOpenTerminal = useMemo(
    () => (openTerminal && terminalId ? () => openTerminal(terminalId) : null),
    [openTerminal, terminalId],
  );
  return (
    <WorktreeSetupCard
      snapshot={row.snapshot}
      embedded={row.embedded}
      onCancel={row.embedded ? null : ctx.onCancelWorktreeSetup}
      onWorkLocally={
        !row.embedded && row.snapshot.phase === "running" ? ctx.onWorktreeSetupWorkLocally : null
      }
      onOpenTerminal={onOpenTerminal}
    />
  );
}

/** A message waiting for the running turn: a dashed user bubble with icon actions inside it. */
function QueuedMessageTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "queued-message" }>;
}) {
  const ctx = use(TimelineRowCtx);
  const { queuedMessage } = row;
  const attachmentCount = queuedMessage.images.length + queuedMessage.files.length;
  const contextCount =
    queuedMessage.terminalContexts.length +
    queuedMessage.previewAnnotations.length +
    queuedMessage.reviewComments.length;
  const text = queuedMessage.prompt.trim();
  const sending = queuedMessage.sending !== undefined;
  const statusLabel = sending
    ? "Sending to the agent"
    : queuedMessage.holdUntilUserAction
      ? "Waits for Send now"
      : row.isNext
        ? "Sends after the next tool call or when the turn ends"
        : "Sends after the messages above it";
  return (
    <div className="flex flex-col items-end" data-queued-message-id={queuedMessage.id}>
      <div className="max-w-[80%] rounded-2xl border border-dashed border-border p-3 text-message-foreground/80">
        {text.length > 0 ? (
          <UserMessageBody
            text={text}
            terminalContexts={terminalContexts}
            skills={ctx.skills}
            markdownCwd={ctx.markdownCwd}
          />
        ) : null}
        {attachmentCount > 0 || contextCount > 0 ? (
          <div className={cn("text-secondary-label text-xs", text.length > 0 && "mt-1.5")}>
            {[
              attachmentCount > 0
                ? `${attachmentCount} attachment${attachmentCount === 1 ? "" : "s"}`
                : null,
              contextCount > 0
                ? `${contextCount} context item${contextCount === 1 ? "" : "s"}`
                : null,
            ]
              .filter(Boolean)
              .join(", ")}
          </div>
        ) : null}
        <div
          className="mt-2 flex items-center gap-4 text-secondary-label text-xs"
          data-scroll-anchor-ignore
        >
          <Tooltip>
            <TooltipTrigger
              render={<span className="inline-flex h-6 items-center gap-1" />}
              aria-label={`${sending ? "Sending" : "Queued"}. ${statusLabel}.`}
            >
              <ClockIcon className="size-3.5" aria-hidden />
              {sending ? "Sending" : "Queued"}
            </TooltipTrigger>
            <TooltipPopup side="bottom">{statusLabel}</TooltipPopup>
          </Tooltip>
          <div className={cn("ml-auto flex items-center gap-0.5", sending && "invisible")}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    type="button"
                    size="icon-xs"
                    variant="ghost-muted"
                    onPointerDown={(event) => event.preventDefault()}
                    onClick={() => ctx.onSteerQueuedMessage(queuedMessage.id)}
                    aria-label="Send now"
                  />
                }
              >
                <ArrowUpIcon className="size-3.5" aria-hidden />
              </TooltipTrigger>
              <TooltipPopup side="bottom">
                Send now
                {row.isNext && ctx.steerQueuedMessageShortcutLabel
                  ? ` (${ctx.steerQueuedMessageShortcutLabel})`
                  : null}
              </TooltipPopup>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    type="button"
                    size="icon-xs"
                    variant="ghost-muted"
                    onPointerDown={(event) => event.preventDefault()}
                    onClick={() => ctx.onRemoveQueuedMessage(queuedMessage.id)}
                    aria-label="Cancel and return to the composer"
                  />
                }
              >
                <XIcon className="size-3.5" aria-hidden />
              </TooltipTrigger>
              <TooltipPopup side="bottom">Cancel and return to the composer</TooltipPopup>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContextCompactionTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "context-compaction" }>;
}) {
  return (
    <div
      role="separator"
      aria-label={row.label}
      className="mx-auto flex w-full max-w-(--chat-max-width) items-center gap-3 py-1 text-muted-foreground text-xs"
    >
      <span className="h-px flex-1 bg-border/70" />
      <span className="flex shrink-0 items-center gap-1.5">
        <Minimize2Icon aria-hidden="true" className="size-3" />
        {row.label}
      </span>
      <span className="h-px flex-1 bg-border/70" />
    </div>
  );
}

function UserVideoAttachment({ file }: { readonly file: ChatFileAttachment }) {
  const ctx = use(TimelineRowCtx);
  const asset = useMemo(
    () =>
      file.downloadable === false
        ? null
        : buildAttachmentVideoAsset(ctx.activeThreadEnvironmentId, file),
    [ctx.activeThreadEnvironmentId, file.downloadable, file.id, file.mimeType, file.name],
  );
  const resource = asset?.resource ?? null;
  const assetUrl = useAssetUrlState(ctx.activeThreadEnvironmentId, resource);
  const refreshAssetUrl = useAssetUrlRefresh(ctx.activeThreadEnvironmentId, resource);
  const src = assetUrl._tag === "Success" ? assetUrl.url : (file.previewUrl ?? null);

  if (asset === null && src === null) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-border/80 bg-black px-2 py-3 text-center text-2xs text-white/70">
        {file.name}
      </div>
    );
  }

  return (
    <MediaVideoPlayer
      src={src}
      sourceFailed={
        file.previewUrl === undefined && resource !== null && assetUrl._tag === "Failure"
      }
      label={file.name}
      preload="visible"
      onOpen={() => {
        const preview = buildAttachmentVideoPreview(ctx.activeThreadEnvironmentId, file);
        if (preview) ctx.onImageExpand(preview);
      }}
      className="block aspect-[4/3] w-full"
      videoClassName="aspect-auto size-full rounded-lg border border-border/80"
      stateClassName="aspect-auto min-h-full rounded-lg border border-border/80 bg-black text-white"
      onRetry={asset ? refreshAssetUrl : undefined}
      actionsSource={asset ? { kind: "video", name: file.name, src, asset } : undefined}
    />
  );
}

// Screen readers skim a transcript by heading, so every message announces its
// author as one. The thread title in ChatHeader is an <h2>; headings written
// inside a message are exposed below this level. Visually hidden and excluded
// from selection so sighted users and copied text are unaffected.
const MESSAGE_HEADING_LEVEL = 3;

function MessageAuthorHeading({ children }: { children: string }) {
  return <h3 className="sr-only select-none">{children}</h3>;
}

function UserTimelineRow({ row }: { row: Extract<TimelineRow, { kind: "message" }> }) {
  const ctx = use(TimelineRowCtx);
  // The attachment union has an open member, so guards (not literal type
  // comparisons) split it. Unknown types render as inert rows below the files.
  const userImages = (row.message.attachments ?? []).filter(isImageAttachment);
  const userFiles = (row.message.attachments ?? []).filter(isFileAttachment);
  const userVideos = userFiles.filter(isVideoAttachment);
  const otherUserFiles = userFiles.filter((file) => !isVideoAttachment(file));
  const unknownAttachments = (row.message.attachments ?? []).filter(
    (attachment) => !isImageAttachment(attachment) && !isFileAttachment(attachment),
  );
  const displayedUserMessage = deriveDisplayedUserMessageState(row.message.text);
  const terminalContexts = displayedUserMessage.contexts;
  const previewAnnotations: ParsedPreviewAnnotation[] = [];
  let visibleText = displayedUserMessage.visibleText;
  while (true) {
    const extracted = extractTrailingPreviewAnnotation(visibleText);
    if (!extracted.annotation) break;
    previewAnnotations.unshift(extracted.annotation);
    visibleText = extracted.promptText;
  }
  const elementContextState = extractTrailingElementContexts(visibleText);
  const elementContexts = [
    ...displayedUserMessage.elementContexts,
    ...elementContextState.contexts,
  ];
  const previewImages = userImages.filter((image) => image.name.startsWith("preview-annotation-"));
  const regularImages = userImages.filter((image) => !image.name.startsWith("preview-annotation-"));
  const canRevertAgentWork = typeof row.revertTurnCount === "number";

  return (
    <div className="group flex flex-col items-end gap-1">
      <div className="relative max-w-[80%] rounded-2xl bg-message p-3 text-message-foreground">
        {(regularImages.length > 0 || userVideos.length > 0) && (
          <div className="mb-2 grid max-w-[420px] grid-cols-2 gap-2">
            {regularImages.map((image) => (
              <div
                key={image.id}
                className="overflow-hidden rounded-lg border border-border/80 bg-background/70"
              >
                {image.previewUrl ? (
                  <button
                    type="button"
                    className="h-full w-full cursor-zoom-in"
                    aria-label={`Preview ${image.name}`}
                    onClick={() => {
                      const preview = buildExpandedImagePreview(regularImages, image.id);
                      if (!preview) return;
                      ctx.onImageExpand(preview);
                    }}
                  >
                    <img
                      src={image.previewUrl}
                      alt={image.name}
                      className="block h-auto max-h-[220px] w-full object-cover"
                    />
                  </button>
                ) : (
                  <div className="flex min-h-[72px] items-center justify-center px-2 py-3 text-center text-secondary-label text-2xs">
                    {image.name}
                  </div>
                )}
              </div>
            ))}
            {userVideos.map((file) => {
              const isOpening = ctx.openingVideoAttachmentId === file.id;
              return (
                <div
                  key={file.id}
                  className="overflow-hidden rounded-lg border border-border/80 bg-black"
                >
                  <button
                    type="button"
                    disabled={file.downloadable === false}
                    className="flex min-h-[72px] w-full cursor-zoom-in flex-col items-center justify-center gap-1 px-2 py-2 text-white disabled:cursor-default disabled:opacity-50 aria-disabled:cursor-default aria-disabled:opacity-50"
                    aria-busy={isOpening || undefined}
                    aria-disabled={isOpening || undefined}
                    aria-label={`${isOpening ? "Loading" : "Play"} ${file.name}`}
                    onClick={() => {
                      if (isOpening) return;
                      ctx.onFileOpen(file);
                    }}
                  >
                    {isOpening ? (
                      <span className="text-[11px]">Loading…</span>
                    ) : (
                      <PlayIcon className="size-8 fill-current" />
                    )}
                    <span className="max-w-full truncate text-[11px]">{file.name}</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}
        {previewAnnotations.map((annotation, index) => (
          <UserMessagePreviewAnnotationCard
            key={annotation.id}
            annotation={annotation}
            image={previewImages[index] ?? null}
          />
        ))}
        {otherUserFiles.length > 0 || unknownAttachments.length > 0 ? (
          <div className="mb-2 flex flex-col gap-1">
            {otherUserFiles.map((file) => {
              const content = (
                <>
                  <FileIcon className="size-4 shrink-0 text-secondary-label" />
                  <span className="min-w-0 flex-1 truncate">{file.name}</span>
                  {file.downloadable === false ? null : (
                    <DownloadIcon className="size-4 shrink-0" />
                  )}
                </>
              );
              return file.previewUrl ? (
                <a
                  key={file.id}
                  href={file.previewUrl}
                  download={file.name}
                  className="flex min-w-0 items-center gap-2 rounded-md py-1 text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
                >
                  {content}
                </a>
              ) : file.downloadable === false ? (
                <div key={file.id} className="flex min-w-0 items-center gap-2 py-1 text-sm">
                  {content}
                </div>
              ) : (
                <button
                  key={file.id}
                  type="button"
                  aria-label={`Download ${file.name}`}
                  onClick={() => ctx.onFileOpen(file)}
                  className="flex min-w-0 cursor-pointer items-center gap-2 rounded-md py-1 text-left text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
                >
                  {content}
                </button>
              );
            })}
            {unknownAttachments.map((attachment) => (
              <div key={attachment.id} className="flex min-w-0 items-center gap-2 py-1 text-sm">
                <FileIcon className="size-4 shrink-0 text-secondary-label" />
                <span className="min-w-0 flex-1 truncate">{attachment.name}</span>
              </div>
            ))}
          </div>
        ) : null}
        {elementContexts.length > 0 ? (
          <div className="mb-2 flex flex-wrap gap-1.5">
            {elementContexts.map((context) => (
              <UserMessageElementContextChip
                key={`${context.header}:${context.body}`}
                context={context}
              />
            ))}
          </div>
        ) : null}
        <CollapsibleUserMessageBody
          text={elementContextState.promptText}
          terminalContexts={terminalContexts}
          skills={ctx.skills}
          markdownCwd={ctx.markdownCwd}
        />
      </div>
      <div className="flex w-full max-w-[80%] items-center justify-end pe-1 text-xs tabular-nums opacity-0 transition-opacity duration-200 pointer-coarse:opacity-100 focus-within:opacity-100 group-hover:opacity-100">
        <div className="flex shrink-0 items-center gap-2">
          <Tooltip>
            <TooltipTrigger render={<p className="text-muted-foreground text-xs tabular-nums" />}>
              {formatDayAwareTimestamp(row.message.createdAt, ctx.timestampFormat)}
            </TooltipTrigger>
            <TooltipPopup>
              {formatChatTimestampTooltip(row.message.createdAt, ctx.timestampFormat)}
            </TooltipPopup>
          </Tooltip>
          <div className="flex items-center gap-0.5">
            {canRevertAgentWork && <RevertUserMessageButton messageId={row.message.id} />}
            {displayedUserMessage.copyText && (
              <MessageCopyButton text={displayedUserMessage.copyText} variant="ghost" />
            )}
            {ctx.forkMessage ? (
              <MessageForkButton messageId={row.message.id} config={ctx.forkMessage} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function RevertUserMessageButton({ messageId }: { messageId: MessageId }) {
  const ctx = use(TimelineRowCtx);
  const activity = use(TimelineRowActivityCtx);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            type="button"
            size="xs"
            variant="ghost"
            disabled={activity.isRevertingCheckpoint || activity.isWorking}
            onClick={() => ctx.onRevertUserMessage(messageId)}
            aria-label="Revert to this message"
          />
        }
      >
        <Undo2Icon className="size-3" />
      </TooltipTrigger>
      <TooltipPopup side="top">Revert to this message</TooltipPopup>
    </Tooltip>
  );
}

/**
 * Hover-revealed wall-clock time with a full-date tooltip — the same metadata
 * presentation as message rows, for work entries and turn folds. The parent
 * carries `group/timeline-row`; hover or focus on an existing control reveals
 * the time without adding a tab stop. Hidden timestamps stay outside the row
 * layout. Visibility changes immediately so leaving flow cannot overlap text
 * during a fade-out. Place it before any trailing disclosure control so
 * revealing the time does not move the chevron.
 */
function TimelineRowTimestamp({
  createdAt,
  timestampFormat,
  className,
}: {
  createdAt: string;
  timestampFormat: TimestampFormat;
  className?: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            className={cn(
              "pointer-events-none absolute me-1 shrink-0 whitespace-nowrap rounded-md text-muted-foreground text-xs tabular-nums opacity-0 group-hover/timeline-row:pointer-events-auto group-hover/timeline-row:static group-hover/timeline-row:opacity-100 group-focus-within/timeline-row:pointer-events-auto group-focus-within/timeline-row:static group-focus-within/timeline-row:opacity-100",
              className,
            )}
          />
        }
      >
        {formatDayAwareTimestamp(createdAt, timestampFormat)}
      </TooltipTrigger>
      <TooltipPopup>{formatChatTimestampTooltip(createdAt, timestampFormat)}</TooltipPopup>
    </Tooltip>
  );
}

function TurnFoldTimelineRow({ row }: { row: Extract<TimelineRow, { kind: "turn-fold" }> }) {
  const ctx = use(TimelineRowCtx);
  const Icon = row.expanded ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div className="group/timeline-row relative flex items-center gap-1 border-b border-border/60 pb-2 pe-0.5 pt-1">
      <button
        type="button"
        aria-expanded={row.expanded}
        data-scroll-anchor-ignore
        onClick={() => ctx.onToggleTurnFold(row.turnId)}
        className="flex cursor-pointer select-none items-center gap-1 rounded-md px-1 text-sm leading-relaxed text-muted-foreground tabular-nums transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
      >
        <span>{row.label}</span>
        <Icon className="size-3.5" />
      </button>
      <TimelineRowTimestamp
        createdAt={row.createdAt}
        timestampFormat={ctx.timestampFormat}
        className="ms-auto"
      />
    </div>
  );
}

function AssistantTimelineRow({ row }: { row: Extract<TimelineRow, { kind: "message" }> }) {
  const ctx = use(TimelineRowCtx);
  const messageText = row.message.text || (row.message.streaming ? "" : "(empty response)");

  return (
    <>
      <div className="relative min-w-0 px-1 py-0.5">
        <MessageAuthorHeading>T3 Code</MessageAuthorHeading>
        <AssistantCitationSource
          messageId={row.message.id}
          {...(ctx.threadRef ? { threadRef: ctx.threadRef } : {})}
          itemKey={row.id}
          request={ctx.citationRequest}
          listRef={ctx.listRef}
        >
          <ChatMarkdown
            text={messageText}
            cwd={ctx.markdownCwd}
            threadRef={ctx.threadRef ?? undefined}
            isStreaming={Boolean(row.message.streaming)}
            lineBreaks={shouldPreserveAssistantLineBreaks(messageText)}
            skills={ctx.skills}
            headingLevelOffset={MESSAGE_HEADING_LEVEL}
            onUseArtifactTemplate={ctx.onUseArtifactTemplate}
            onRunShellCommand={ctx.onRunShellCommand}
            onImageExpand={ctx.onImageExpand}
          />
        </AssistantCitationSource>
        <AssistantChangedFilesSection
          turnSummary={row.assistantTurnDiffSummary}
          routeThreadKey={ctx.routeThreadKey}
          resolvedTheme={ctx.resolvedTheme}
          onOpenTurnDiff={ctx.onOpenTurnDiff}
        />
        {row.showAssistantMeta ? (
          <div className="mt-1.5 flex items-center gap-2 text-xs tabular-nums opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover/assistant:opacity-100">
            <AssistantMessageActions row={row} />
            {!row.message.streaming && (
              <Tooltip>
                <TooltipTrigger
                  render={<p className="text-muted-foreground text-xs tabular-nums" />}
                >
                  {formatDayAwareTimestamp(row.message.updatedAt, ctx.timestampFormat)}
                </TooltipTrigger>
                <TooltipPopup>
                  {formatChatTimestampTooltip(row.message.updatedAt, ctx.timestampFormat)}
                </TooltipPopup>
              </Tooltip>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}

function AssistantMessageActions({ row }: { row: Extract<TimelineRow, { kind: "message" }> }) {
  const ctx = use(TimelineRowCtx);
  const source = {
    text: row.message.text ?? null,
    showCopyButton: row.showAssistantCopyButton,
    streaming: row.assistantCopyStreaming,
  };
  const copyState = resolveAssistantMessageCopyState(source);
  const playState = resolveAssistantMessagePlayState({ ...source, ttsEnabled: ctx.ttsEnabled });
  const showFork = ctx.forkMessage !== null && !row.message.streaming;

  if (!copyState.visible && !playState.visible && !showFork) {
    return null;
  }

  return (
    <div className="flex items-center gap-1">
      {playState.visible ? (
        <MessagePlayButton messageId={row.message.id} text={playState.text ?? ""} variant="ghost" />
      ) : null}
      {copyState.visible ? <MessageCopyButton text={copyState.text ?? ""} variant="ghost" /> : null}
      {showFork ? <MessageForkButton messageId={row.message.id} config={ctx.forkMessage!} /> : null}
    </div>
  );
}

function AssistantMetaTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "assistant-meta" }>;
}) {
  const ctx = use(TimelineRowCtx);
  const source = {
    text: row.message.text ?? null,
    showCopyButton: row.showAssistantCopyButton,
    streaming: row.assistantCopyStreaming,
  };
  const copyState = resolveAssistantMessageCopyState(source);
  const playState = resolveAssistantMessagePlayState({ ...source, ttsEnabled: ctx.ttsEnabled });
  const showFork = ctx.forkMessage !== null && !row.message.streaming;

  return (
    <div className="px-1">
      <div className="mt-0.5 flex items-center gap-2 text-xs tabular-nums">
        {playState.visible ? (
          <MessagePlayButton
            messageId={row.message.id}
            text={playState.text ?? ""}
            variant="ghost"
          />
        ) : null}
        {copyState.visible ? (
          <MessageCopyButton text={copyState.text ?? ""} variant="ghost" />
        ) : null}
        {showFork ? (
          <MessageForkButton messageId={row.message.id} config={ctx.forkMessage!} />
        ) : null}
        {!row.message.streaming && (
          <Tooltip>
            <TooltipTrigger render={<p className="text-muted-foreground text-xs tabular-nums" />}>
              {formatDayAwareTimestamp(row.message.updatedAt, ctx.timestampFormat)}
            </TooltipTrigger>
            <TooltipPopup>
              {formatChatTimestampTooltip(row.message.updatedAt, ctx.timestampFormat)}
            </TooltipPopup>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

function ProposedPlanTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "proposed-plan" }>;
}) {
  const ctx = use(TimelineRowCtx);

  return (
    <div className="min-w-0 px-1 py-0.5">
      <ProposedPlanCard
        planMarkdown={row.proposedPlan.planMarkdown}
        environmentId={ctx.activeThreadEnvironmentId}
        threadRef={ctx.threadRef ?? undefined}
        cwd={ctx.markdownCwd}
        workspaceRoot={ctx.workspaceRoot}
      />
    </div>
  );
}

/**
 * Inline folded plan chip: one row per turn that produced plan/todo steps.
 * Collapsed by default — a segment bar plus the in-progress step label —
 * and expands in place to the full step list. Replaces the old plan sidebar.
 */
const TurnPlanTimelineRow = memo(function TurnPlanTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "turn-plan" }>;
}) {
  const [expanded, setExpanded] = useState(false);
  const { steps } = row.turnPlan.plan;
  const completedCount = steps.filter((step) => step.status === "completed").length;
  const allDone = completedCount === steps.length;
  // Label priority: the in-progress step, else the next pending step (plan
  // just created), else the last step (plan finished, rendered muted).
  const label =
    steps.find((step) => step.status === "inProgress")?.step ??
    steps.find((step) => step.status === "pending")?.step ??
    steps.at(-1)?.step ??
    "Plan";
  const Chevron = expanded ? ChevronDownIcon : ChevronRightIcon;

  return (
    <div className="min-w-0 px-1 py-0.5">
      <button
        type="button"
        className="flex w-full min-w-0 cursor-pointer items-center gap-2 rounded-md px-0.5 py-0.5 text-left text-[12px] leading-5 transition-colors duration-150 hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <Chevron className="size-3.5 shrink-0 text-muted-foreground/65" />
        {steps.length > 1 ? (
          <span aria-hidden className="flex shrink-0 items-center gap-0.5">
            {steps.map((step) => (
              <span
                key={step.step}
                className={cn(
                  "h-[3px] w-2.5 rounded-full",
                  step.status === "completed"
                    ? "bg-success"
                    : step.status === "inProgress"
                      ? "bg-primary"
                      : "bg-muted-foreground/25",
                )}
              />
            ))}
          </span>
        ) : null}
        <span
          className={cn(
            "min-w-0 truncate",
            allDone ? "text-muted-foreground/65" : "font-medium text-foreground/85",
          )}
        >
          {label}
        </span>
        {steps.length > 1 ? (
          <span className="shrink-0 text-muted-foreground/50 tabular-nums">
            {completedCount}/{steps.length}
          </span>
        ) : null}
      </button>
      {expanded ? (
        <div className="mt-0.5 space-y-px pl-6">
          {steps.map((step) => (
            <div key={step.step} className="flex items-baseline gap-2 text-[12px] leading-5">
              <span
                className={cn(
                  "w-3 shrink-0 text-center font-mono text-[10px]",
                  step.status === "completed"
                    ? "text-success"
                    : step.status === "inProgress"
                      ? "text-primary"
                      : "text-muted-foreground/40",
                )}
                aria-hidden
              >
                {step.status === "completed" ? "✓" : step.status === "inProgress" ? "●" : "○"}
              </span>
              <span
                className={cn(
                  "min-w-0",
                  step.status === "completed"
                    ? "text-muted-foreground/55"
                    : step.status === "inProgress"
                      ? "text-foreground/90"
                      : "text-muted-foreground/70",
                )}
              >
                {step.step}
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
});

function NoticeTimelineRow({ row }: { row: Extract<TimelineRow, { kind: "notice" }> }) {
  return (
    <div className="flex items-center justify-center py-1">
      <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-muted-foreground text-xs">
        <ArrowRightLeftIcon className="size-3 shrink-0" />
        <span>{row.notice.summary}</span>
      </div>
    </div>
  );
}

function WorkingTimelineRow({ row }: { row: Extract<TimelineRow, { kind: "working" }> }) {
  const { isPreparingWorktree, backgroundWorktreeSetup } = use(TimelineRowActivityCtx);
  return (
    <div className="border-b border-border/60 pb-2 pt-1">
      <div className="flex h-6 min-w-0 items-baseline gap-2 px-1 text-sm leading-relaxed text-muted-foreground tabular-nums">
        <span
          key={isPreparingWorktree ? "setup" : "working"}
          className="relative shrink-0 overflow-hidden whitespace-nowrap transition-opacity duration-150 starting:opacity-0 motion-reduce:transition-none"
        >
          {isPreparingWorktree ? (
            <>
              Setting up worktree…
              <ActivityShimmerOverlay>Setting up worktree…</ActivityShimmerOverlay>
            </>
          ) : row.createdAt ? (
            <>
              Working for <WorkingTimer createdAt={row.createdAt} />
            </>
          ) : (
            "Working..."
          )}
        </span>
        {backgroundWorktreeSetup ? (
          <BackgroundWorktreeSetupChip snapshot={backgroundWorktreeSetup} />
        ) : null}
      </div>
    </div>
  );
}

/**
 * Trailing chip in the working header while a setup script still runs after
 * the agent started. Opens the stage list and live output in a popover; the
 * chip leaves with the script, so nothing lingers in the timeline.
 */
function BackgroundWorktreeSetupChip({ snapshot }: { snapshot: WorktreeSetupSnapshot }) {
  const ctx = use(TimelineRowCtx);
  const terminalId = snapshot.setupScript?.terminalId ?? null;
  const openTerminal = ctx.onOpenWorktreeSetupTerminal;
  const onOpenTerminal = useMemo(
    () => (openTerminal && terminalId ? () => openTerminal(terminalId) : null),
    [openTerminal, terminalId],
  );
  const scriptName = snapshot.setupScript?.name ?? "Setup script";
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="ghost-muted"
            size="micro"
            className="ml-auto min-w-0 shrink-0"
            aria-label={`${scriptName} is still running. Show setup progress.`}
          />
        }
      >
        <Spinner size="xs" className="shrink-0" />
        <span className="truncate">{scriptName}</span>
      </PopoverTrigger>
      <PopoverPopup side="bottom" align="end" width="lg" padding="compact">
        <WorktreeSetupCard
          snapshot={snapshot}
          embedded
          onCancel={null}
          onWorkLocally={null}
          onOpenTerminal={onOpenTerminal}
        />
      </PopoverPopup>
    </Popover>
  );
}

function ActivityGroupTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "activity-group" }>;
}) {
  const ctx = use(TimelineRowCtx);
  const work = omitSupersededLifecycleMarkers(
    row.entries.flatMap((entry) =>
      entry.kind === "work" && workEntryIsVisibleInGroup(entry.entry, row.active)
        ? [entry.entry]
        : [],
    ),
    (entry) => entry,
  );
  const thoughtCount = row.entries.filter((entry) => entry.kind === "message").length;
  const lastThoughtIndex = row.entries.findLastIndex((entry) => entry.kind === "message");
  const trailingWork = omitSupersededLifecycleMarkers(
    row.entries
      .slice(lastThoughtIndex + 1)
      .flatMap((entry) =>
        entry.kind === "work" && workEntryIsVisibleInGroup(entry.entry, row.active)
          ? [entry.entry]
          : [],
      ),
    (entry) => entry,
  );
  const liveWork = trailingWork.findLast(workEntryIsActiveTurnActivity) ?? trailingWork.at(-1);
  const thinking = row.active && liveWork === undefined;
  const iconWork = row.active ? liveWork : work.at(-1);
  const failed = iconWork !== undefined && workEntryDisplayIndicatesToolFailure(iconWork);
  const label = row.active
    ? liveWork
      ? liveWorkEntryLabel(liveWork, ctx.workspaceRoot, true)
      : "Thinking"
    : work.length > 0
      ? summarizeToolGroup(work)
      : `Thought${thoughtCount > 1 ? ` (×${thoughtCount})` : ""}`;
  const details: ReactNode[] = [];
  if (row.expanded) {
    for (let index = 0; index < row.entries.length; index += 1) {
      const entry = row.entries[index]!;
      if (entry.kind === "work") {
        const entries = [entry.entry];
        while (row.entries[index + 1]?.kind === "work") {
          const next = row.entries[++index]!;
          if (next.kind === "work") entries.push(next.entry);
        }
        details.push(
          <WorkGroupSection
            key={entry.id}
            anchorKey={entry.id}
            disclosureAnchorKey={row.id}
            groupedEntries={omitSupersededLifecycleMarkers(entries, (entry) => entry)}
            isExpandedToolGroupEntry
          />,
        );
      } else {
        const messages = [entry.message];
        while (row.entries[index + 1]?.kind === "message") {
          const next = row.entries[++index]!;
          if (next.kind === "message") messages.push(next.message);
        }
        details.push(
          <ReasoningTraceBlock
            key={entry.id}
            anchorKey={row.id}
            messages={messages}
            live={row.active && index === row.entries.length - 1}
            showHeader={work.length > 0}
          />,
        );
      }
    }
  }
  return (
    <div>
      <button
        type="button"
        className="group/live-work flex min-h-6 w-full max-w-full cursor-pointer items-center rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
        aria-label={failed ? `${label}, tool call failed` : undefined}
        aria-expanded={row.expanded}
        onClick={() => ctx.onToggleWorkGroup(row.groupId, row.id)}
      >
        <LiveActivityRow
          label={label}
          iconName={iconWork ? workEntryIconName(iconWork) : "brain"}
          toolIcon={iconWork?.toolIcon ?? iconWork?.toolSource?.icon}
          failed={failed}
          active={row.active}
          shimmer={thinking}
        />
      </button>
      {row.expanded ? <div className="mt-2">{details}</div> : null}
    </div>
  );
}

function ThinkingTimelineRow() {
  const { isPreparingWorktree } = use(TimelineRowActivityCtx);
  // Reserve the activity row during setup so the handoff keeps the same height.
  return (
    <div className="min-h-7">
      {isPreparingWorktree ? null : (
        <LiveActivityRow label="Thinking" iconName="brain" active shimmer />
      )}
    </div>
  );
}

function remarkThoughtPreview(fallback: string) {
  return (tree: Root) => {
    const plainText = (node: Root | RootContent): string => {
      if (node.type === "html" || node.type === "definition") return "";
      if ("alt" in node) return node.alt ?? "";
      if ("value" in node) return node.value;
      if ("children" in node) {
        const separator = ["root", "blockquote", "list", "listItem", "table", "tableRow"].includes(
          node.type,
        )
          ? " "
          : "";
        return node.children.map(plainText).join(separator);
      }
      return node.type === "break" ? " " : "";
    };
    tree.children = [
      { type: "text", value: plainText(tree).replace(/\s+/g, " ").trim() || fallback },
    ];
  };
}

/**
 * Thinking inside a tool group has its own disclosure, preserved across recycling.
 * A group whose row already reads "Thought" (no visible tool) skips the header.
 */
function ReasoningTraceBlock({
  anchorKey,
  messages,
  live,
  showHeader,
}: {
  anchorKey: string;
  messages: ReadonlyArray<ChatMessage>;
  live: boolean;
  showHeader: boolean;
}) {
  const ctx = use(TimelineRowCtx);
  const { isWorking, unsettledTurnId } = use(TimelineRowActivityCtx);
  const first = messages[0]!;
  const expanded = !showHeader || ctx.expandedReasoningMessageIds.has(first.id);
  const streaming =
    live &&
    messages.some((reasoningMessage) => reasoningMessage.streaming) &&
    isWorking &&
    first.turnId !== null &&
    first.turnId === unsettledTurnId;
  if (
    messages.every((reasoningMessage) => reasoningMessage.text.trim().length === 0) &&
    !streaming
  ) {
    return null;
  }
  const label = streaming ? "Thinking" : "Thought";
  const collapsedPreview = messages.find((message) => message.text.trim().length > 0)?.text.trim();
  const headerText = expanded ? (
    label
  ) : (
    <ReactMarkdown remarkPlugins={[remarkGfm, [remarkThoughtPreview, label]]}>
      {collapsedPreview ?? label}
    </ReactMarkdown>
  );
  return (
    <div className="flex flex-col">
      {showHeader ? (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => ctx.onToggleReasoning(first.id, !expanded, anchorKey)}
          className="flex min-h-6 cursor-pointer select-none items-center gap-1.5 rounded-md ps-0.5 pe-2 text-start text-sm leading-relaxed transition-colors hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
        >
          <span className="flex size-6 shrink-0 items-center justify-center text-icon-muted">
            <BrainIcon aria-hidden className="block size-4 shrink-0 stroke-2 opacity-70" />
          </span>
          <span
            ref={streaming ? observeVisibleAnimation : undefined}
            className="relative min-w-0 flex-1 truncate text-secondary-label"
          >
            {headerText}
            {streaming ? <ActivityShimmerOverlay>{headerText}</ActivityShimmerOverlay> : null}
          </span>
          <span className="flex size-4 shrink-0 items-center justify-center" aria-hidden>
            <ChevronRightIcon
              className={cn(
                "size-3 shrink-0 text-icon-muted opacity-70 transition-transform duration-200",
                expanded && "rotate-90",
              )}
            />
          </span>
        </button>
      ) : null}
      {expanded ? (
        <div className="ms-7 flex max-h-96 flex-col gap-3 overflow-auto px-0.5 py-1 select-text">
          {messages.map((reasoningMessage) => (
            <ChatMarkdown
              key={reasoningMessage.id}
              className="text-foreground"
              text={reasoningMessage.text}
              cwd={ctx.markdownCwd}
              threadRef={ctx.threadRef ?? undefined}
              isStreaming={streaming && reasoningMessage.streaming}
              lineBreaks
              skills={ctx.skills}
              headingLevelOffset={MESSAGE_HEADING_LEVEL}
              onUseArtifactTemplate={ctx.onUseArtifactTemplate}
              onImageExpand={ctx.onImageExpand}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

/**
 * A provider's thinking trace. Collapsed by default: reasoning is context for
 * the answer, not the answer. The open/closed flag lives on the list so it
 * survives row recycling in the virtualizer.
 */
const ReasoningTimelineRow = memo(function ReasoningTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "message" }>;
}) {
  const ctx = use(TimelineRowCtx);
  const { message } = row;
  const expanded = ctx.expandedReasoningMessageIds.has(message.id);
  const { onToggleReasoning } = ctx;
  const toggle = useCallback(() => {
    onToggleReasoning(message.id, !expanded, row.id);
  }, [expanded, message.id, row.id, onToggleReasoning]);

  if (message.text.trim().length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col", expanded && "mb-1")}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={toggle}
        className="flex cursor-pointer select-none items-center gap-1.5 rounded-md px-0.5 py-0.5 text-start transition-colors hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
      >
        <span className="flex size-6 shrink-0 items-center justify-center text-icon-muted">
          <BrainIcon aria-hidden className="block size-4 shrink-0 stroke-2 opacity-70" />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-1.5">
          <span className="relative min-w-0 flex-1 truncate text-secondary-label text-sm leading-relaxed">
            Thought
          </span>
          <span className="flex size-4 shrink-0 items-center justify-center" aria-hidden>
            <ChevronRightIcon
              className={cn(
                "size-3 shrink-0 text-icon-muted opacity-70 transition-transform duration-200",
                expanded && "rotate-90",
              )}
            />
          </span>
        </span>
      </button>
      {expanded ? (
        <div className="mt-1 ms-7 flex max-h-96 flex-col gap-3 overflow-auto px-0.5 py-1 select-text">
          <ChatMarkdown
            className="text-foreground"
            text={message.text}
            cwd={ctx.markdownCwd}
            threadRef={ctx.threadRef ?? undefined}
            lineBreaks
            skills={ctx.skills}
            headingLevelOffset={MESSAGE_HEADING_LEVEL}
            onUseArtifactTemplate={ctx.onUseArtifactTemplate}
            onImageExpand={ctx.onImageExpand}
          />
        </div>
      ) : null}
    </div>
  );
});

function CompactingLabel() {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Minimize2Icon aria-hidden="true" className="size-3" />
      Compacting…
    </span>
  );
}

// ---------------------------------------------------------------------------
// Self-ticking labels — update their own text nodes so elapsed-time display
// does not create a React commit every second while a response is streaming.
// ---------------------------------------------------------------------------

/** Live "Working for Xs" label. */
function WorkingTimer({ createdAt }: { createdAt: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const initialText = formatWorkingTimerNow(createdAt);

  useEffect(() => {
    const updateText = () => {
      if (textRef.current) {
        textRef.current.textContent = formatWorkingTimerNow(createdAt);
      }
    };
    updateText();
    const id = setInterval(updateText, 1000);
    return () => clearInterval(id);
  }, [createdAt]);

  return (
    <span ref={textRef} className="tabular-nums">
      {initialText}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Extracted row sections — own their state / store subscriptions so changes
// re-render only the affected row, not the entire list.
// ---------------------------------------------------------------------------

/** Renders one or more already-derived work log rows. Overflow expansion is modeled as LegendList data. */
const WorkGroupSection = memo(function WorkGroupSection({
  anchorKey,
  disclosureAnchorKey = anchorKey,
  groupedEntries,
  isExpandedToolGroupEntry,
}: {
  anchorKey: string;
  disclosureAnchorKey?: string;
  groupedEntries: Extract<MessagesTimelineRow, { kind: "work" }>["groupedEntries"];
  isExpandedToolGroupEntry: boolean;
}) {
  const { workspaceRoot, routeThreadKey, onToggleWorkEntry } = use(TimelineRowCtx);
  const onToggleStandaloneEntry = useCallback(
    (collapsed: boolean) => onToggleWorkEntry(disclosureAnchorKey, collapsed),
    [disclosureAnchorKey, onToggleWorkEntry],
  );
  const nonEmptyEntries = useMemo(
    () =>
      groupedEntries.filter((entry) => workEntryIsVisibleInGroup(entry, isExpandedToolGroupEntry)),
    [groupedEntries, isExpandedToolGroupEntry],
  );
  const GroupContainer = isExpandedToolGroupEntry ? "div" : "section";

  if (nonEmptyEntries.length === 0) return null;

  return (
    <GroupContainer
      className={cn("-mx-1 px-1", isExpandedToolGroupEntry ? "py-0" : "space-y-0.5 py-0.5")}
      aria-label={isExpandedToolGroupEntry ? undefined : "Activity"}
    >
      <div className="space-y-px">
        {nonEmptyEntries.map((workEntry) => (
          <SimpleWorkEntryRow
            key={workEntry.id}
            workEntry={workEntry}
            workspaceRoot={workspaceRoot}
            isExpandedToolGroupEntry={isExpandedToolGroupEntry}
          />
        ))}
      </div>
    </GroupContainer>
  );
});

function ActivityShimmerOverlay({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden
      className="live-activity-focus pointer-events-none absolute inset-y-0 select-none"
    >
      <span className="live-activity-focus-counter block">
        <span className="live-activity-focus-aligned block text-foreground">{children}</span>
      </span>
    </span>
  );
}

function LiveActivityRow({
  label,
  iconName,
  toolIcon,
  failed = false,
  active = true,
  shimmer = true,
}: {
  label: string;
  iconName?: WorkEntryIconName;
  toolIcon?: ToolActivityIcon | undefined;
  failed?: boolean;
  active?: boolean;
  shimmer?: boolean;
}) {
  const showShimmer = active && shimmer && !failed;
  return (
    <div className="relative min-h-6 w-fit max-w-full min-w-0 overflow-hidden rounded-md text-sm leading-relaxed">
      <LiveActivityContent
        label={label}
        iconName={iconName}
        toolIcon={toolIcon}
        failed={failed}
        announceFailure={failed}
      />
      {showShimmer ? (
        <ActivityShimmerOverlay>
          <LiveActivityContent
            label={label}
            iconName={iconName}
            toolIcon={toolIcon}
            failed={failed}
            highlighted
          />
        </ActivityShimmerOverlay>
      ) : null}
    </div>
  );
}

function LiveActivityIcon({
  name,
  toolIcon,
  className,
}: {
  name: WorkEntryIconName;
  toolIcon: ToolActivityIcon | undefined;
  className: string;
}) {
  const { resolvedTheme } = use(TimelineRowCtx);
  if (toolIcon?._tag === "website") {
    const src = toolActivityFaviconUrl(toolIcon, resolvedTheme, 32);
    if (src) return <img src={src} alt="" className={cn(className, "object-contain")} />;
  }
  if (toolIcon?._tag === "themed-logo") {
    const src =
      resolvedTheme === "dark" ? (toolIcon.logoUrlDark ?? toolIcon.logoUrl) : toolIcon.logoUrl;
    if (src) return <img src={src} alt="" className={cn(className, "object-contain")} />;
  }
  return <WorkEntryIconSvg name={name} className={className} />;
}

function LiveActivityContent({
  label,
  iconName,
  toolIcon,
  failed = false,
  announceFailure = false,
  highlighted = false,
}: {
  label: string;
  iconName: WorkEntryIconName | undefined;
  toolIcon?: ToolActivityIcon | undefined;
  failed?: boolean;
  announceFailure?: boolean;
  highlighted?: boolean;
}) {
  const resolvedIconName = failed ? "circle-alert" : iconName;

  return (
    <span
      className={cn(
        "flex min-h-6 min-w-0 items-center gap-1.5 py-0.5",
        resolvedIconName ? "px-0.5" : "px-1",
        highlighted ? "text-foreground" : "text-secondary-label",
      )}
    >
      {resolvedIconName ? (
        <span
          className={cn(
            "flex size-6 shrink-0 items-center justify-center",
            highlighted ? "text-foreground" : "text-icon-muted",
          )}
          role={announceFailure ? "img" : undefined}
          aria-label={announceFailure ? "Tool call failed" : undefined}
        >
          <LiveActivityIcon
            name={resolvedIconName}
            toolIcon={toolIcon}
            className={cn("block size-4 shrink-0 stroke-[1.8]", !highlighted && "opacity-70")}          />
        </span>
      ) : null}
      <span className="min-w-0 flex-1 truncate">{label}</span>
    </span>
  );
}

function LiveWorkEntryTimelineRow({ row }: { row: Extract<TimelineRow, { kind: "work-live" }> }) {
  const ctx = use(TimelineRowCtx);
  const label = liveWorkEntryLabel(row.entry, ctx.workspaceRoot, row.active);
  const failed = workEntryDisplayIndicatesToolFailure(row.entry);

  return (
    <button
      type="button"
      className="group/live-work flex min-h-6 w-full max-w-full cursor-pointer items-center rounded-md text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
      aria-label={failed ? `${label}, tool call failed` : undefined}
      aria-expanded={row.expanded}
      onClick={() => ctx.onToggleWorkGroup(row.groupId, row.id)}
    >
      {row.active ? (
        <LiveActivityRow label={label} iconName={workEntryIconName(row.entry)} failed={failed} />
      ) : (
        <div className="min-h-6 w-fit max-w-full min-w-0 overflow-hidden rounded-md text-sm leading-relaxed">
          <LiveActivityContent
            label={label}
            iconName={workEntryIconName(row.entry)}
            failed={failed}
            announceFailure={failed}
          />
        </div>
      )}
    </button>
  );
}

function toolGroupSummaryIconName(
  kind: Extract<TimelineRow, { kind: "work-toggle" }>["summaryKind"],
): WorkEntryIconName {
  switch (kind) {
    case "pull-request":
    case "link-pr":
    case "unlink-pr":
    case "list-prs":
      return "pull-request";
    case "read":
      return "eye";
    case "edit":
      return "square-pen";
    case "command":
      return "terminal";
    case "browser":
      return "browser";
    case "device":
      return "device";
    case "search":
      return "globe";
    case "code-search":
      return "search";
    case "other":
      return "wrench";
    case "dynamic-tool":
      return "hammer";
    case "agent-tool":
      return "bot";
    case "tone-tool":
      return "zap";
    case "update":
    case "mixed":
      return "hammer";
  }
}

function WorkGroupToggleTimelineRow({
  row,
}: {
  row: Extract<TimelineRow, { kind: "work-toggle" }>;
}) {
  const ctx = use(TimelineRowCtx);
  return (
    <button
      type="button"
      className="group/tool-group group/timeline-row relative flex min-h-6 w-full cursor-pointer items-center gap-1.5 rounded-md px-0.5 py-0.5 text-left text-sm leading-relaxed transition-colors duration-150 hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
      aria-label={row.hasFailure ? `${row.summary}, tool call failed` : undefined}
      aria-expanded={row.expanded}
      onClick={() => ctx.onToggleWorkGroup(row.groupId, row.id)}
    >
      <span className="flex size-6 shrink-0 items-center justify-center text-icon-muted">
        <WorkEntryIconSvg
          name={toolGroupSummaryIconName(row.summaryKind)}
          className="size-4 shrink-0 stroke-[1.8] opacity-70"        />
      </span>
      <span className="min-w-0 flex-1 truncate text-secondary-label">{row.summary}</span>
      <TimelineRowTimestamp createdAt={row.createdAt} timestampFormat={ctx.timestampFormat} />
    </button>
  );
}

/** Subscribes directly to the UI state store for expand/collapse state,
 *  so toggling re-renders only this component — not the entire list. */
const AssistantChangedFilesSection = memo(function AssistantChangedFilesSection({
  turnSummary,
  routeThreadKey,
  resolvedTheme,
  onOpenTurnDiff,
}: {
  turnSummary: TurnDiffSummary | undefined;
  routeThreadKey: string;
  resolvedTheme: "light" | "dark";
  onOpenTurnDiff: (turnId: TurnId, filePath?: string) => void;
}) {
  if (!turnSummary) return null;
  const checkpointFiles = turnSummary.files;
  if (checkpointFiles.length === 0) return null;

  return (
    <AssistantChangedFilesSectionInner
      turnSummary={turnSummary}
      checkpointFiles={checkpointFiles}
      routeThreadKey={routeThreadKey}
      resolvedTheme={resolvedTheme}
      onOpenTurnDiff={onOpenTurnDiff}
    />
  );
});

/** Inner component that only mounts when there are actual changed files,
 *  so the store subscription is unconditional (no hooks after early return). */
function AssistantChangedFilesSectionInner({
  turnSummary,
  checkpointFiles,
  routeThreadKey,
  resolvedTheme,
  onOpenTurnDiff,
}: {
  turnSummary: TurnDiffSummary;
  checkpointFiles: TurnDiffSummary["files"];
  routeThreadKey: string;
  resolvedTheme: "light" | "dark";
  onOpenTurnDiff: (turnId: TurnId, filePath?: string) => void;
}) {
  const activity = use(TimelineRowActivityCtx);
  const ctx = use(TimelineRowCtx);
  const isLatestTurn = activity.latestTurnId === turnSummary.turnId;
  const persistedExpanded = useUiStateStore(
    (store) => store.threadChangedFilesExpandedById[routeThreadKey]?.[turnSummary.turnId],
  );
  const setExpanded = useUiStateStore((store) => store.setThreadChangedFilesExpanded);
  const [autoExpanded] = useState(() =>
    shouldAutoExpandChangedFiles(checkpointFiles, isLatestTurn),
  );
  const [allDirectoriesExpanded, setAllDirectoriesExpanded] = useState(autoExpanded);
  const expanded = persistedExpanded ?? (isLatestTurn && autoExpanded);

  const thread = useThread(ctx.threadRef);
  const activeProject = useProject(
    thread && thread.projectId
      ? { environmentId: thread.environmentId, projectId: thread.projectId }
      : null,
  );
  const serverConfig = useAtomValue(
    serverEnvironment.configValueAtom(ctx.activeThreadEnvironmentId),
  );
  const onFileContextMenu = useFileContextMenuHandler(ctx.activeThreadEnvironmentId);

  return (
    <ChangedFilesCard
      turnId={turnSummary.turnId}
      files={checkpointFiles}
      expanded={expanded}
      showCompactPreview={isLatestTurn}
      allDirectoriesExpanded={allDirectoriesExpanded}
      resolvedTheme={resolvedTheme}
      onExpandedChange={(nextExpanded) =>
        setExpanded(routeThreadKey, turnSummary.turnId, nextExpanded)
      }
      onToggleAllDirectories={() => setAllDirectoriesExpanded((current) => !current)}
      onOpenTurnDiff={onOpenTurnDiff}
      onFileContextMenu={(filePath, event) =>
        onFileContextMenu(
          {
            environmentId: ctx.activeThreadEnvironmentId,
            filePath,
            workspaceRoot: ctx.workspaceRoot,
            repositoryRoot:
              thread?.worktreePath == null
                ? activeProject?.repositoryIdentity?.rootPath
                : undefined,
          },
          event,
        )
      }
    />
  );
}

// ---------------------------------------------------------------------------
// Leaf components
// ---------------------------------------------------------------------------

const UserMessageTerminalContextInlineLabel = memo(
  function UserMessageTerminalContextInlineLabel(props: { context: ParsedTerminalContextEntry }) {
    const tooltipText =
      props.context.body.length > 0
        ? `${props.context.header}\n${props.context.body}`
        : props.context.header;

    return <TerminalContextInlineChip label={props.context.header} tooltipText={tooltipText} />;
  },
);

const UserMessageElementContextChip = memo(function UserMessageElementContextChip(props: {
  context: ParsedElementContextEntry;
}) {
  const tooltipText = props.context.body
    ? `${props.context.header}\n${props.context.body}`
    : props.context.header;
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span className="inline-flex max-w-full items-center gap-1 rounded-md border border-border/70 bg-background/70 px-1.5 py-0.5 text-foreground/85 text-xs">
            <MousePointerClickIcon className="size-3 shrink-0" />
            <span className="truncate">{props.context.header}</span>
          </span>
        }
      />
      <TooltipPopup side="top" className="max-w-96 whitespace-pre-wrap">
        {tooltipText}
      </TooltipPopup>
    </Tooltip>
  );
});

function UserMessageContextChip(props: {
  icon: ReactNode;
  label: string;
  kindLabel?: string;
  copyMarkdown: string;
  tooltip?: string;
  kind: ContextChipKind;
}) {
  return (
    <ContextChipShell
      kind={props.kind}
      icon={props.icon}
      label={props.label}
      aria-label={props.kindLabel ? `${props.kindLabel}, ${props.label}` : undefined}
      data-markdown-copy={props.copyMarkdown}
      tooltip={props.tooltip}
    />
  );
}

function UserMessagePullRequestContextChip(props: {
  record: Extract<KnownComposerContextRecord, { kind: "review-comment" }>;
  copyMarkdown: string;
  kind: ContextChipKind;
}) {
  const { activeThreadEnvironmentId, openPullRequest } = use(TimelineRowCtx);
  const metadata = props.record.pullRequest;
  if (metadata === undefined) return null;
  return (
    <PullRequestChip
      metadata={metadata}
      environmentId={activeThreadEnvironmentId}
      label={reviewCommentContextLabel(props.record)}
      kindLabel={pullRequestContextKindLabel(props.record)}
      kind={props.kind}
      copyMarkdown={props.copyMarkdown}
      onOpen={openPullRequest}
    />
  );
}

function UserMessagePreviewAnnotationCard(props: {
  annotation: ParsedPreviewAnnotation;
  image: ChatImageAttachment | null;
}) {
  const ctx = use(TimelineRowCtx);
  return (
    <div className="mb-2 flex max-w-full items-center overflow-hidden rounded-lg border border-border/70 bg-background/70">
      {props.image?.previewUrl ? (
        <button
          type="button"
          className="size-14 shrink-0 cursor-zoom-in overflow-hidden border-r border-border/70 bg-muted"
          aria-label={`Preview ${props.image.name}`}
          onClick={() => {
            if (!props.image) return;
            const preview = buildExpandedImagePreview([props.image], props.image.id);
            if (preview) ctx.onImageExpand(preview);
          }}
        >
          <img
            src={props.image.previewUrl}
            alt="Annotated preview crop"
            className="size-full object-cover"
          />
        </button>
      ) : null}
      <div className="min-w-0 px-2.5 py-2">
        {props.annotation.comment ? (
          <div className="max-w-80 truncate text-foreground text-xs font-medium">
            {props.annotation.comment}
          </div>
        ) : null}
        <div
          className={cn(
            "flex items-center gap-2 text-secondary-label text-[10px]",
            props.annotation.comment && "mt-1",
          )}
        >
          {props.annotation.targetSummary ? (
            <span className="truncate">{props.annotation.targetSummary}</span>          ) : null}
          {props.annotation.styleChanges.length > 0 ? (
            <span className="inline-flex shrink-0 items-center gap-1">
              <PaintbrushIcon className="size-3" />
              {props.annotation.styleChanges.length}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function UserMessagePreviewAnnotationDetails({
  record,
  image,
}: {
  record: Extract<KnownComposerContextRecord, { kind: "preview-annotation" }>;
  image: ChatImageAttachment | null;
}) {
  return (
    <UserMessagePreviewAnnotationCard
      annotation={{
        id: record.annotationId,
        title: record.pageTitle?.trim() || record.pageUrl.trim() || "Preview",
        comment: record.comment,
        targetSummary: record.targetSummary,
        styleChanges: [...record.styleChanges],
        hasScreenshot: image !== null,
      }}
      image={image}
    />
  );
}

function UserMessageElementDetails({
  record,
}: {
  record: Extract<KnownComposerContextRecord, { kind: "element" }>;
}) {
  const sourceLabel = record.source?.fileName
    ? `${record.source.fileName}${record.source.lineNumber === null ? "" : `:${record.source.lineNumber}`}`
    : null;
  return (
    <div className="max-w-full overflow-hidden rounded-lg border border-border/70 bg-background/70">
      <div className="border-b border-border/70 px-3 py-2.5">
        <div className="truncate text-message-foreground text-xs font-medium">
          {record.pageTitle?.trim() || record.pageUrl}
        </div>
        <div className="mt-0.5 truncate text-secondary-label text-3xs">{record.pageUrl}</div>
      </div>
      <div className="space-y-2 px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2 text-xs">
          <code className="truncate text-message-foreground">
            {record.selector || `<${record.tagName}>`}
          </code>
          {sourceLabel ? (
            <span className="ml-auto shrink-0 text-secondary-label">{sourceLabel}</span>
          ) : null}
        </div>
        {record.htmlPreview?.trim() ? (
          <div className="flex h-40 flex-col overflow-hidden rounded border border-border">
            <ReadOnlySourcePreview name="element.html" text={record.htmlPreview} />
          </div>
        ) : null}
        {record.styles?.trim() ? (
          <div className="flex h-32 flex-col overflow-hidden rounded border border-border">
            <ReadOnlySourcePreview name="styles.css" text={record.styles} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

interface UserMessageContextRenderContext {
  reference: ChatMarkdownContextReference;
  annotationImage: ChatImageAttachment | null;
  attachment: ChatImageAttachment | ChatFileAttachment | null;
  resolvedTheme: "light" | "dark";
  copyMarkdown: string;
  onExpandImage: (image: ChatImageAttachment) => void;
  onExpandVideo: (file: ChatFileAttachment) => void;
  onOpenFile: (file: ChatFileAttachment) => void;
}

function UnavailableUserMessageContextChip(props: UserMessageContextRenderContext) {
  return (
    <UnresolvedChip
      label={props.reference.label}
      copyMarkdown={props.copyMarkdown}
      tooltip="This context is no longer available."
    />
  );
}

function UserMessageMentionChip(props: {
  record: Extract<KnownComposerContextRecord, { kind: "mention" }>;
  copyMarkdown: string;
}) {
  const ctx = use(TimelineRowCtx);
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <ContextChip
            kind="mention"
            render={<button type="button" />}
            aria-label={`Preview ${props.record.path}`}
            data-markdown-copy={props.copyMarkdown}
            onClick={() => {
              if (ctx.threadRef)
                useRightPanelStore.getState().openFile(ctx.threadRef, props.record.path);
            }}
          >
            <PierreEntryIcon
              pathValue={props.record.path}
              kind={inferEntryKindFromPath(props.record.path)}
              theme={ctx.resolvedTheme}
            />
            <ContextChipLabel>{props.record.label}</ContextChipLabel>
          </ContextChip>
        }
      />
      <TooltipPopup>{props.record.path}</TooltipPopup>
    </Tooltip>
  );
}

const userMessageContextPresentationRegistry = createContextPresentationRegistry<
  KnownComposerContextRecord,
  UserMessageContextRenderContext,
  ReactNode
>({
  requiredKinds: COMPOSER_CONTEXT_KINDS,
  handlers: [
    {
      kind: "mention",
      canRender: (record) => record.kind === "mention",
      render: (record, context) =>
        record.kind === "mention" ? (
          <UserMessageMentionChip record={record} copyMarkdown={context.copyMarkdown} />
        ) : (
          <UnavailableUserMessageContextChip {...context} />
        ),
    },
    {
      kind: "skill",
      canRender: (record) => record.kind === "skill",
      render: (record, context) =>
        record.kind === "skill" ? (
          <UserMessageContextChip
            icon={<SkillChipIcon />}
            label={record.label || record.name}
            kindLabel="Skill"
            tooltip={`$${record.name}`}
            copyMarkdown={context.copyMarkdown}
            kind="skill"
          />
        ) : (
          <UnavailableUserMessageContextChip {...context} />
        ),
    },
    {
      kind: "image",
      canRender: (record, context) =>
        record.kind === "image" &&
        context.attachment !== null &&
        isImageAttachment(context.attachment),
      render: (record, context) => {
        if (
          record.kind !== "image" ||
          context.attachment === null ||
          !isImageAttachment(context.attachment)
        ) {
          return <UnavailableUserMessageContextChip {...context} />;
        }
        const attachment = context.attachment;
        return (
          <ImageChipButton
            name={record.name}
            previewUrl={attachment.previewUrl}
            size={formatAttachmentSize(record.sizeBytes)}
            data-markdown-copy={context.copyMarkdown}
            onClick={() => context.onExpandImage(attachment)}
          />
        );
      },
    },
    {
      kind: "file",
      // A file chip names its attachment by id, so it renders whatever came back under that id.
      // `isFileAttachment` excludes pictures, which a legacy `file` attachment may still be.
      canRender: (record, context) =>
        record.kind === "file" && context.attachment !== null && context.attachment.type === "file",
      render: (record, context) => {
        if (
          record.kind !== "file" ||
          context.attachment === null ||
          context.attachment.type !== "file"
        ) {
          return <UnavailableUserMessageContextChip {...context} />;
        }
        const attachment = context.attachment;
        const isVideo = isVideoAttachment(attachment);
        const disabled =
          attachment.downloadable === false && (!isVideo || attachment.previewUrl === undefined);
        const size = formatAttachmentSize(record.sizeBytes);
        return (
          <FileChip
            name={record.name}
            size={size}
            isVideo={isVideo}
            theme={context.resolvedTheme}
            disabled={disabled}
            accessibleLabel={`${isVideo ? "Video" : "File"} attachment, ${record.name}, ${size}`}
            copyMarkdown={context.copyMarkdown}
            onOpen={() =>
              isVideo ? context.onExpandVideo(attachment) : context.onOpenFile(attachment)
            }
            tooltip={`${record.name}\n${size}`}
          />
        );
      },
    },
    {
      kind: "terminal",
      canRender: (record) => record.kind === "terminal",
      render: (record, context, definition) =>
        record.kind === "terminal" ? (
          <span data-markdown-copy={context.copyMarkdown}>
            <TerminalContextInlineChip
              label={record.label}
              terminalLabel={record.terminalLabel}
              lineStart={record.lineStart}
              lineEnd={record.lineEnd}
              text={record.text}
              detailsMode={definition.capabilities.details}
            />
          </span>
        ) : (
          <UnavailableUserMessageContextChip {...context} />
        ),
    },
    {
      kind: "element",
      canRender: (record) => record.kind === "element",
      render: (record, context) =>
        record.kind === "element" ? (
          <UserMessageContextPopover
            copyMarkdown={context.copyMarkdown}
            accessibleLabel={`Browser element, ${record.label}`}
            kind="element"
            icon={<MousePointerClickIcon />}
            label={record.label}
          >
            <UserMessageElementDetails record={record} />
          </UserMessageContextPopover>
        ) : (
          <UnavailableUserMessageContextChip {...context} />
        ),
    },
    {
      kind: "review-comment",
      canRender: (record) => record.kind === "review-comment",
      render: (record, context) => {
        if (record.kind !== "review-comment") {
          return <UnavailableUserMessageContextChip {...context} />;
        }
        const isPullRequest = isPullRequestSummaryContext(record);
        const label = reviewCommentContextLabel(record);
        const kindLabel = isPullRequest ? pullRequestContextKindLabel(record) : "Review comment";
        const pullRequestState = pullRequestContextDisplayState(record) ?? "unknown";
        if (isPullRequest && record.pullRequest !== undefined) {
          return (
            <UserMessagePullRequestContextChip
              record={record}
              copyMarkdown={context.copyMarkdown}
              kind={PULL_REQUEST_CHIP_KINDS[pullRequestState]}
            />
          );
        }
        return (
          <UserMessageContextPopover
            copyMarkdown={context.copyMarkdown}
            accessibleLabel={`${kindLabel}, ${label}${record.pullRequest ? `, ${record.pullRequest.title}` : ""}`}
            kind={isPullRequest ? PULL_REQUEST_CHIP_KINDS[pullRequestState] : "review-comment"}
            icon={isPullRequest ? <PullRequestGlyph.pullRequest /> : <MessageCircleIcon />}
            label={label}
          >
            <UserMessageReviewCommentCard
              comment={{
                id: record.contextId,
                sectionId: record.sectionId,
                sectionTitle: record.sectionTitle,
                filePath: record.filePath,
                startIndex: record.startIndex,
                endIndex: record.endIndex,
                rangeLabel: record.rangeLabel,
                text: record.text,
                diff: record.diff,
                ...(record.fenceLanguage !== undefined
                  ? { fenceLanguage: record.fenceLanguage }
                  : {}),
                ...(record.pullRequest !== undefined ? { pullRequest: record.pullRequest } : {}),
              }}
            />
          </UserMessageContextPopover>
        );
      },
    },
    {
      kind: "preview-annotation",
      canRender: (record) => record.kind === "preview-annotation",
      render: (record, context) =>
        record.kind === "preview-annotation" ? (
          <UserMessageContextPopover
            copyMarkdown={context.copyMarkdown}
            accessibleLabel={`Preview annotation, ${record.label}`}
            kind="preview-annotation"
            icon={<MousePointerClickIcon />}
            label={record.label}
          >
            <UserMessagePreviewAnnotationDetails record={record} image={context.annotationImage} />
          </UserMessageContextPopover>
        ) : (
          <UnavailableUserMessageContextChip {...context} />
        ),
    },
  ],
  fallback: (_kind, _record, context) => <UnavailableUserMessageContextChip {...context} />,
});

/** One inline context chip in a sent message, dispatched by the shared presentation registry. */
function UserMessageContextReferenceChip(props: {
  reference: ChatMarkdownContextReference;
  record: KnownComposerContextRecord | undefined;
  annotationImage: ChatImageAttachment | null;
  attachment: ChatImageAttachment | ChatFileAttachment | null;
  onExpandImage: (image: ChatImageAttachment) => void;
  onExpandVideo: (file: ChatFileAttachment) => void;
  onOpenFile: (file: ChatFileAttachment) => void;
}) {
  const { resolvedTheme } = use(TimelineRowCtx);
  const copyMarkdown = formatComposerContextReference({
    kind: props.reference.kind,
    contextId: props.reference.contextId as ComposerContextId,
    label: props.reference.label,
  });
  return userMessageContextPresentationRegistry.render(props.reference.kind, props.record, {
    reference: props.reference,
    annotationImage: props.annotationImage,
    attachment: props.attachment,
    resolvedTheme,
    copyMarkdown,
    onExpandImage: props.onExpandImage,
    onExpandVideo: props.onExpandVideo,
    onOpenFile: props.onOpenFile,
  });
}

const MAX_COLLAPSED_USER_MESSAGE_LINES = 8;
const MAX_COLLAPSED_USER_MESSAGE_LENGTH = 600;
const COLLAPSED_USER_MESSAGE_FADE_HEIGHT_REM = 1.75;
const COLLAPSED_USER_MESSAGE_FADE_MASK = `linear-gradient(to bottom, black calc(100% - ${COLLAPSED_USER_MESSAGE_FADE_HEIGHT_REM}rem), transparent)`;

function shouldCollapseUserMessage(text: string): boolean {
  if (text.trim().length === 0) {
    return false;
  }

  return (
    text.length > MAX_COLLAPSED_USER_MESSAGE_LENGTH ||
    text.split("\n").length > MAX_COLLAPSED_USER_MESSAGE_LINES
  );
}

const CollapsibleUserMessageBody = memo(function CollapsibleUserMessageBody(props: {
  text: string;
  terminalContexts: ParsedTerminalContextEntry[];
  skills: ReadonlyArray<Pick<ServerProviderSkill, "name" | "displayName">>;
  markdownCwd: string | undefined;
  footer?: ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasVisibleBody = props.text.trim().length > 0 || props.terminalContexts.length > 0;
  const canCollapse = hasVisibleBody && shouldCollapseUserMessage(props.text);
  const isCollapsed = canCollapse && !expanded;

  return (
    <div>
      {hasVisibleBody ? (
        <div
          className={cn("relative", isCollapsed && "max-h-44 overflow-hidden")}
          data-user-message-body="true"
          data-user-message-collapsed={isCollapsed ? "true" : "false"}
          data-user-message-collapsible={canCollapse ? "true" : "false"}
          data-user-message-fade={isCollapsed ? "true" : "false"}
          style={
            isCollapsed
              ? {
                  WebkitMaskImage: COLLAPSED_USER_MESSAGE_FADE_MASK,
                  maskImage: COLLAPSED_USER_MESSAGE_FADE_MASK,
                }
              : undefined
          }
        >
          <UserMessageBody
            text={props.text}
            terminalContexts={props.terminalContexts}
            skills={props.skills}
            markdownCwd={props.markdownCwd}
          />
        </div>
      ) : null}
      {canCollapse || props.footer ? (
        <div
          className={cn(
            "mt-1.5 flex items-center gap-2",
            canCollapse && props.footer ? "justify-between" : "justify-end",
          )}
          data-user-message-footer="true"
        >
          {canCollapse ? (
            <Button
              type="button"
              size="xs"
              variant="ghost-muted"
              aria-expanded={expanded}
              data-scroll-anchor-ignore
              onClick={() => setExpanded((value) => !value)}
              className="-ml-1"
            >
              {expanded ? "Show less" : "Show full message"}
            </Button>
          ) : null}
          {props.footer ? (
            <div className="ml-auto flex items-center gap-2">{props.footer}</div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
});

const UserMessageBody = memo(function UserMessageBody(props: {
  text: string;
  terminalContexts: ParsedTerminalContextEntry[];
  renderContextReference?: (reference: ChatMarkdownContextReference) => ReactNode;
  skills: ReadonlyArray<Pick<ServerProviderSkill, "name" | "displayName">>;
  markdownCwd: string | undefined;
}) {
  const ctx = use(TimelineRowCtx);
  const renderInlineMarkdownSegment = (text: string, key: string) => {
    const leadingWhitespace = /^\s+/.exec(text)?.[0] ?? "";
    const textWithoutLeadingWhitespace = text.slice(leadingWhitespace.length);
    const trailingWhitespace = /\s+$/.exec(textWithoutLeadingWhitespace)?.[0] ?? "";
    const content = textWithoutLeadingWhitespace.slice(
      0,
      textWithoutLeadingWhitespace.length - trailingWhitespace.length,
    );

    return (
      <Fragment key={key}>
        {leadingWhitespace ? <span aria-hidden="true">{leadingWhitespace}</span> : null}
        {content ? (
          <ChatMarkdown
            text={content}
            cwd={props.markdownCwd}
            threadRef={ctx.threadRef ?? undefined}
            skills={props.skills}
            className="text-message-foreground"
            lineBreaks
            parseRawHtml={false}
          />
        ) : null}
        {trailingWhitespace ? <span aria-hidden="true">{trailingWhitespace}</span> : null}
      </Fragment>
    );
  };

  const reviewCommentSegments = parseReviewCommentMessageSegments(props.text);
  if (reviewCommentSegments.some((segment) => segment.kind === "review-comment")) {
    return (
      <div className="space-y-3 text-message-foreground text-sm leading-relaxed">
        {reviewCommentSegments.map((segment) =>
          segment.kind === "text" ? (
            segment.text.trim().length > 0 ? (
              <div key={segment.id} className="wrap-break-word">
                <ChatMarkdown
                  text={segment.text.trim()}
                  cwd={props.markdownCwd}
                  threadRef={ctx.threadRef ?? undefined}
                  skills={props.skills}
                  className="text-message-foreground"
                  lineBreaks
                  parseRawHtml={false}
                />
              </div>
            ) : null
          ) : (
            <UserMessageReviewCommentCard key={segment.comment.id} comment={segment.comment} />
          ),
        )}
      </div>
    );
  }

  if (props.terminalContexts.length > 0) {
    const hasEmbeddedInlineLabels = textContainsInlineTerminalContextLabels(
      props.text,
      props.terminalContexts,
    );
    const inlinePrefix = buildInlineTerminalContextText(props.terminalContexts);
    const inlineNodes: ReactNode[] = [];

    if (hasEmbeddedInlineLabels) {
      let cursor = 0;

      for (const context of props.terminalContexts) {
        const label = formatInlineTerminalContextLabel(context.header);
        const matchIndex = props.text.indexOf(label, cursor);
        if (matchIndex === -1) {
          inlineNodes.length = 0;
          break;
        }
        if (matchIndex > cursor) {
          inlineNodes.push(
            renderInlineMarkdownSegment(
              props.text.slice(cursor, matchIndex),
              `user-terminal-context-inline-before:${context.header}:${cursor}`,
            ),
          );
        }
        inlineNodes.push(
          <UserMessageTerminalContextInlineLabel
            key={`user-terminal-context-inline:${context.header}`}
            context={context}
          />,
        );
        cursor = matchIndex + label.length;
      }

      if (inlineNodes.length > 0) {
        if (cursor < props.text.length) {
          inlineNodes.push(
            renderInlineMarkdownSegment(
              props.text.slice(cursor),
              `user-message-terminal-context-inline-rest:${cursor}`,
            ),
          );
        }

        return (
          <div className="whitespace-pre-wrap wrap-break-word text-message-foreground text-sm leading-relaxed">
            {inlineNodes}
          </div>
        );
      }
    }

    for (const context of props.terminalContexts) {
      inlineNodes.push(
        <UserMessageTerminalContextInlineLabel
          key={`user-terminal-context-inline:${context.header}`}
          context={context}
        />,
      );
      inlineNodes.push(
        <span key={`user-terminal-context-inline-space:${context.header}`} aria-hidden="true">
          {" "}
        </span>,
      );
    }

    if (props.text.length > 0) {
      inlineNodes.push(
        <ChatMarkdown
          key="user-message-terminal-context-inline-text"
          text={props.text}
          cwd={props.markdownCwd}
          threadRef={ctx.threadRef ?? undefined}
          skills={props.skills}
          className="text-message-foreground"
          lineBreaks
          parseRawHtml={false}
        />,
      );
    } else if (inlinePrefix.length === 0) {
      return null;
    }

    return (
      <div className="whitespace-pre-wrap wrap-break-word text-message-foreground text-sm leading-relaxed">
        {inlineNodes}
      </div>
    );
  }

  if (props.text.length === 0) {
    return null;
  }

  return (
    <ChatMarkdown
      text={props.text}
      cwd={props.markdownCwd}
      threadRef={ctx.threadRef ?? undefined}
      skills={props.skills}
      className="text-message-foreground"
      lineBreaks
      parseRawHtml={false}
    />
  );
});

function UserMessageReviewCommentCard({ comment }: { comment: ReviewCommentContext }) {
  const ctx = use(TimelineRowCtx);
  const fenceLanguage = comment.fenceLanguage ?? "diff";
  const renderablePatch = getRenderablePatch(
    buildReviewCommentRenderablePatch(comment),
    `review-comment:${comment.id}`,
  );

  return (
    <div className="space-y-2 rounded-lg border border-border/70 bg-background/70 p-3">
      <div className="space-y-1">
        <div className="text-message-foreground text-xs font-medium">
          {formatWorkspaceRelativePath(comment.filePath, ctx.workspaceRoot)}
        </div>
        <div className="text-secondary-label text-2xs">
          {comment.sectionTitle} · {comment.rangeLabel}
        </div>
      </div>
      {comment.text.length > 0 && (
        <div className="whitespace-pre-wrap wrap-break-word text-sm">
          <SkillInlineText text={comment.text} skills={ctx.skills} />
        </div>
      )}
      {fenceLanguage !== "diff" && comment.diff.trim().length > 0 && (
        <ChatMarkdown
          text={formatReviewCommentFence(fenceLanguage, comment.diff)}
          cwd={ctx.markdownCwd}
          threadRef={ctx.threadRef ?? undefined}
          skills={ctx.skills}
          className="text-message-foreground"
        />
      )}
      {renderablePatch?.kind === "files" &&
        renderablePatch.files.map((fileDiff) => (
          <FileDiff
            key={resolveFileDiffPath(fileDiff)}
            fileDiff={fileDiff}
            options={{
              collapsed: false,
              diffStyle: "unified",
              theme: resolveDiffThemeName(ctx.resolvedTheme),
            }}
          />
        ))}
      {renderablePatch?.kind === "raw" && (
        <pre className="overflow-x-auto rounded-md bg-muted/40 p-2 text-xs">
          {renderablePatch.text}
        </pre>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Structural sharing — reuse old row references when data hasn't changed
// so LegendList (and React) can skip re-rendering unchanged items.
// ---------------------------------------------------------------------------

/** Returns a structurally-shared copy of `rows`: for each row whose content
 *  hasn't changed since last call, the previous object reference is reused. */
function useStableRows(rows: MessagesTimelineRow[]): MessagesTimelineRow[] {
  const prevState = useRef<StableMessagesTimelineRowsState>({
    byId: new Map<string, MessagesTimelineRow>(),
    result: [],
  });

  return useMemo(() => {
    const nextState = computeStableMessagesTimelineRows(rows, prevState.current);
    prevState.current = nextState;
    return nextState.result;
  }, [rows]);
}

// ---------------------------------------------------------------------------
// Pure helpers
// ---------------------------------------------------------------------------

function formatWorkingTimer(startIso: string, endIso: string): string | null {
  const startedAtMs = Date.parse(startIso);
  const endedAtMs = Date.parse(endIso);
  if (!Number.isFinite(startedAtMs) || !Number.isFinite(endedAtMs)) {
    return null;
  }

  const elapsedSeconds = Math.max(0, Math.floor((endedAtMs - startedAtMs) / 1000));
  if (elapsedSeconds < 60) {
    return `${elapsedSeconds}s`;
  }

  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  if (hours > 0) {
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }

  return seconds > 0 ? `${minutes}m ${seconds}s` : `${minutes}m`;
}

function formatWorkingTimerNow(startIso: string): string {
  return formatWorkingTimer(startIso, new Date().toISOString()) ?? "0s";
}

type WorkEntryIconName =
  | "bot"
  | "brain"
  | "browser"
  | "check"
  | "circle-alert"
  | "computer"
  | "device"
  | "eye"
  | "globe"
  | "hammer"
  | "message-circle"
  | "search"
  | "square-pen"
  | "terminal"
  | "pull-request"
  | "t3-code"
  | "wrench"
  | "x"
  | "zap";

function BrowserAppIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8.5 19H7.2C4.4 19 3 17.5 3 14.6V7.4C3 4.5 4.5 3 7.4 3h8.2C18.5 3 20 4.5 20 7.4v2.4" />
      <circle cx="7.4" cy="7.2" r="0.75" fill="currentColor" stroke="none" />
      <path d="M11.2 7.2h4.3" />
      <path d="m12.4 11.4 7.5 2.6-3.4 1.6-1.5 3.6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ComputerUseAppIcon({ className }: { className: string }) {
  const gradientId = `${useId().replaceAll(":", "")}-computer-use-app-gradient`;
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="2" y1="2" x2="22" y2="22">
          <stop offset="0" stopColor="#00dff0" />
          <stop offset="0.42" stopColor="#3b9cff" />
          <stop offset="0.72" stopColor="#b044f5" />
          <stop offset="1" stopColor="#ff78b6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="22" height="22" rx="5" fill={`url(#${gradientId})`} />
      <path
        d="m7.2 6.2 10.5 4.1-4.2 2.1-2 4.7z"
        fill="white"
        stroke="#315cff"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkEntryIconSvg({ name, className }: { name: WorkEntryIconName; className: string }) {  switch (name) {
    case "pull-request":
      return <PullRequestGlyph.pullRequest className={className} aria-hidden />;
    case "bot":
      return <BotIcon className={className} aria-hidden />;
    case "brain":
      return <BrainIcon className={className} aria-hidden />;
    case "browser":
      return <BrowserAppIcon className={className} />;
    case "computer":
      return <ComputerUseAppIcon className={className} />;
    case "device":
      return <SmartphoneIcon className={className} aria-hidden />;
    case "t3-code":
      return <T3Wordmark className={className} aria-hidden />;
    case "check":
      return <CheckIcon className={className} aria-hidden />;
    case "circle-alert":
      return <CircleAlertIcon className={className} aria-hidden />;
    case "eye":
      return <EyeIcon className={className} aria-hidden />;
    case "globe":
      return <GlobeIcon className={className} aria-hidden />;
    case "hammer":
      return <HammerIcon className={className} aria-hidden />;
    case "message-circle":
      return <MessageCircleIcon className={className} aria-hidden />;
    case "search":
      return <SearchIcon className={className} aria-hidden />;
    case "square-pen":
      return <SquarePenIcon className={className} aria-hidden />;
    case "terminal":
      return <TerminalIcon className={className} aria-hidden />;
    case "wrench":
      return <WrenchIcon className={className} aria-hidden />;
    case "x":
      return <XIcon className={className} aria-hidden />;
    case "zap":
      return <ZapIcon className={className} aria-hidden />;
  }
}

function workToneIcon(tone: TimelineWorkEntry["tone"]): {
  iconName: WorkEntryIconName;
  className: string;
} {
  if (tone === "error") {
    return {
      iconName: "circle-alert",
      className: "text-foreground",
    };
  }
  if (tone === "thinking") {
    return {
      iconName: "brain",
      className: "text-icon-muted",
    };
  }
  if (tone === "info") {
    return {
      iconName: "check",
      className: "text-icon-muted",
    };
  }
  return {
    iconName: "zap",
    className: "text-foreground",
  };
}

function workEntryPreview(
  workEntry: Pick<TimelineWorkEntry, "detail" | "command" | "changedFiles">,
  workspaceRoot: string | undefined,
) {
  if (workEntry.command) return workEntry.command;
  if (workEntry.detail) return workEntry.detail;
  if ((workEntry.changedFiles?.length ?? 0) === 0) return null;
  const [firstPath] = workEntry.changedFiles ?? [];
  if (!firstPath) return null;
  const displayPath = formatWorkspaceRelativePath(firstPath, workspaceRoot);
  return workEntry.changedFiles!.length === 1
    ? displayPath
    : `${displayPath} +${workEntry.changedFiles!.length - 1} more`;
}

function workEntryRawCommand(
  workEntry: Pick<TimelineWorkEntry, "command" | "rawCommand">,
): string | null {
  const rawCommand = workEntry.rawCommand?.trim();
  if (!rawCommand || !workEntry.command) {
    return null;
  }
  return rawCommand === workEntry.command.trim() ? null : rawCommand;
}

function liveWorkEntryLabel(
  workEntry: TimelineWorkEntry,
  workspaceRoot: string | undefined,
  active: boolean,
): string {
  const command = workEntry.command?.trim();
  if (command) {
    const program = commandProgramName(command);
    const verb = active
      ? "Running"
      : workEntry.toolLifecycleStatus === "declined"
        ? "Declined"
        : "Ran";
    if (program) return `${verb} ${program}`;
    return `${verb} command`;
  }

  return workEntryPreview(workEntry, workspaceRoot) ?? toolWorkEntryHeading(workEntry);
}

function buildToolCallExpandedBody(
  workEntry: TimelineWorkEntry,
  workspaceRoot: string | undefined,
): string | null {
  const blocks: string[] = [];
  if (workEntry.itemType === "mcp_tool_call" && workEntry.toolData !== undefined) {
    blocks.push(`MCP call\n${JSON.stringify(workEntry.toolData, null, 2)}`);
  }
  const raw = workEntryRawCommand(workEntry);
  if (raw?.trim()) {
    blocks.push(raw.trim());
  } else if (workEntry.command?.trim()) {
    blocks.push(workEntry.command.trim());
  }
  if (workEntry.detail?.trim()) {
    blocks.push(workEntry.detail.trim());
  }
  const changedFiles = workEntry.changedFiles ?? [];
  if (changedFiles.length > 0) {
    blocks.push(
      changedFiles
        .map((filePath) => formatWorkspaceRelativePath(filePath, workspaceRoot))
        .join("\n"),
    );
  }
  return blocks.length > 0 ? blocks.join("\n\n") : null;
}

const toolCallExpandedBodyClassName =
  "max-h-64 cursor-text overflow-auto whitespace-pre-wrap break-words font-mono text-secondary-label text-(length:--font-size-code,var(--text-2xs)) leading-relaxed select-text";

function buildInlineFileChangePatch(change: FileChange): string | null {
  const patch = change.patch?.trim();
  if (!patch) return null;
  if (patch.startsWith("diff --git ") || /^--- .*\r?\n\+\+\+ /.test(patch)) {
    return patch;
  }
  const path = change.filePath;
  return [`diff --git a/${path} b/${path}`, `--- a/${path}`, `+++ b/${path}`, patch].join("\n");
}

function workEntryIconName(workEntry: TimelineWorkEntry): WorkEntryIconName {
  if (
    workEntry.sourceActivityKind === "user-input.requested" ||
    workEntry.sourceActivityKind === "user-input.resolved"
  ) {
    return "message-circle";
  }
  const action = toolGroupAction(workEntry);
  if (action !== "other") return toolGroupSummaryIconName(action);

  switch (workEntry.itemType) {
    case "mcp_tool_call":
      return "wrench";
    case "dynamic_tool_call":
      return "hammer";
    case "collab_agent_tool_call":
      return "bot";
  }

  // Subagent lifecycle rows (grouped by taskId) get agent identity chrome.
  if (workEntry.taskId) {
    return "bot";
  }

  return workToneIcon(workEntry.tone).iconName;
}

function capitalizePhrase(value: string): string {
  const trimmed = value.trim();
  if (trimmed.length === 0) {
    return value;
  }
  return `${trimmed.charAt(0).toUpperCase()}${trimmed.slice(1)}`;
}

function toolWorkEntryHeading(workEntry: TimelineWorkEntry): string {
  if (!workEntry.toolTitle) {
    return capitalizePhrase(normalizeCompactToolLabel(workEntry.label));
  }
  return capitalizePhrase(normalizeCompactToolLabel(workEntry.toolTitle));
}

const stopRowToggle = (e: { stopPropagation: () => void }) => e.stopPropagation();

/**
 * Click handler for expanded row labels, which turn text selection back on.
 * Only a click that ends a real selection is withheld from the row toggle, so
 * an ordinary click on the label still bubbles and collapses the row it opened.
 */
const stopRowToggleWhileSelectingText = (e: MouseEvent<HTMLElement>) => {
  const selection = e.currentTarget.ownerDocument.getSelection();
  if (selection && !selection.isCollapsed) {
    e.stopPropagation();
  }
};

/**
 * A1 spawn CTA: one anchored row per workflow run (or per-turn direct-spawn
 * batch). Live status is derived from the shared agent panel model at render
 * time — the row itself never re-renders a roster; the Agents panel is the
 * only roster. Freezes to past tense when every member settles. Static dot,
 * no animation.
 */
const AgentSpawnCtaRow = memo(function AgentSpawnCtaRow(props: { workEntry: TimelineWorkEntry }) {
  const { workEntry } = props;
  const { agentPanelModel, onOpenAgents } = use(TimelineRowCtx);
  const spawn = workEntry.agentSpawn;
  if (!spawn) {
    return null;
  }

  const memberIds = new Set(spawn.agentTaskIds);
  const workflowGroup = spawn.workflowId
    ? agentPanelModel.workflows.find((group) => group.workflow.id === spawn.workflowId)
    : undefined;
  const agents = workflowGroup
    ? [...workflowGroup.phases.flatMap((phase) => phase.members), ...workflowGroup.unphasedMembers]
    : agentPanelModel.directAgents.filter((agent) => memberIds.has(agent.id));
  const agentCount = Math.max(
    agents.length,
    Math.max(memberIds.size - (spawn.workflowId ? 1 : 0), 0),
  );

  const running = agents.filter(
    (agent) => agent.status === "running" || agent.status === "pending",
  ).length;
  const waiting = agents.filter((agent) => agent.status === "waiting").length;
  const failed = agents.filter((agent) => agent.status === "failed").length;
  // The coordinator's own status is authoritative for workflows: dynamic
  // spawns mean the member list can be momentarily all-settled while the
  // run is still mid-flight (the "completed" lie from live testing). A
  // workflow is live until the coordinator itself reaches a terminal state.
  const coordinatorStatus = workflowGroup?.workflow.status;
  const coordinatorSettled =
    coordinatorStatus === "completed" ||
    coordinatorStatus === "failed" ||
    coordinatorStatus === "cancelled" ||
    coordinatorStatus === "interrupted";
  const live = workflowGroup !== undefined ? !coordinatorSettled : running + waiting > 0;
  // Same rule as the panel footer: providers may aggregate member usage into
  // the coordinator, so count the coordinator only when no members exist.
  const totalTokens = agents.reduce(
    (sum, agent) => sum + (agent.usage?.totalTokens ?? 0),
    spawn.workflowId && agents.length === 0 ? (workflowGroup?.workflow.usage?.totalTokens ?? 0) : 0,
  );

  const livePhase = workflowGroup?.phases.find((phase) => phase.state === "running");
  const workflowName =
    workflowGroup?.workflow.workflowName ?? workflowGroup?.workflow.title ?? null;

  // One steady in-flight presentation (monitoring-pill rule): waiting and
  // stalled agents read as working; only settled states differentiate.
  const working = running + waiting;
  const dotClass = live ? "bg-info" : failed > 0 ? "bg-destructive" : "bg-success";
  const lead = live
    ? `Kicked off ${agentCount} subagent${agentCount === 1 ? "" : "s"}`
    : `Ran ${agentCount} subagent${agentCount === 1 ? "" : "s"}`;
  const status = live
    ? livePhase
      ? `${livePhase.title} · ${livePhase.activeCount} working`
      : working > 0
        ? `${working} working`
        : "working"
    : failed > 0
      ? `${failed} failed`
      : "✓ completed";

  return (
    <button
      type="button"
      onClick={onOpenAgents}
      className="flex w-full items-center gap-2 rounded-md border border-border/60 bg-card/50 px-2.5 py-1.5 text-left text-[13px] transition hover:bg-accent/50"
    >
      <span aria-hidden className={cn("size-1.5 shrink-0 rounded-full", dotClass)} />
      <WorkEntryIconSvg name="bot" className="size-3.5 shrink-0 text-muted-foreground" />
      <span className="min-w-0 truncate">
        <span className="font-medium">{lead}</span>
        {workflowName ? <span className="text-muted-foreground"> · {workflowName}</span> : null}
      </span>
      <span className="ml-auto flex shrink-0 items-center gap-2 font-mono text-[.7rem] text-muted-foreground">
        <span>{status}</span>
        {totalTokens > 0 ? (
          <span className="tabular-nums">Σ {formatSubagentTokenCount(totalTokens)}</span>
        ) : null}
        <span className="text-info-foreground">{live ? "Open Agents ▸" : "View ▸"}</span>
      </span>
    </button>
  );
});

function InlineFileDiff(props: {
  change: FileChange;
  fileDiff: FileDiffMetadata;
  environmentId: EnvironmentId;
  workspaceRoot: string | undefined;
  theme: "light" | "dark";
  wordWrap: boolean;
  onToggleWordWrap: () => void;
}) {
  const { change, environmentId, workspaceRoot } = props;
  const [expandedFileDiff, setExpandedFileDiff] = useState(props.fileDiff);
  const [expansionError, setExpansionError] = useState<string | null>(null);

  useEffect(() => {
    setExpandedFileDiff(props.fileDiff);
    setExpansionError(null);
    if (!props.fileDiff.isPartial) return;
    if (!workspaceRoot || !change.postFileHash) {
      setExpansionError(
        workspaceRoot
          ? "This edit predates unchanged-line tracking."
          : "The workspace is unavailable.",
      );
      return;
    }

    let cancelled = false;
    void (async () => {
      try {
        const normalizedRoot = workspaceRoot.replaceAll("\\", "/").replace(/\/+$/, "");
        const normalizedPath = change.filePath.replaceAll("\\", "/");
        const relativePath = normalizedPath
          .toLowerCase()
          .startsWith(`${normalizedRoot.toLowerCase()}/`)
          ? normalizedPath.slice(normalizedRoot.length + 1)
          : normalizedPath.replace(/^\.?\//, "");
        const file = await readProjectFileFresh(environmentId, workspaceRoot, relativePath);
        if (!file) throw new Error("read");
        const digest = await crypto.subtle.digest(
          "SHA-256",
          new TextEncoder().encode(file.contents),
        );
        const currentHash = [...new Uint8Array(digest)]
          .map((byte) => byte.toString(16).padStart(2, "0"))
          .join("");
        if (currentHash !== change.postFileHash) throw new Error("changed");
        const fullPatch = expandPartialPatchWithCurrentFile(
          change.patch ?? "",
          relativePath,
          file.contents,
        );
        const renderable = getRenderablePatch(fullPatch ?? undefined, `expanded:${currentHash}`, {
          upgradeFullContextFiles: true,
        });
        const [nextFileDiff] = renderable?.kind === "files" ? renderable.files : [];
        if (!nextFileDiff) throw new Error("patch");
        if (!cancelled) setExpandedFileDiff(nextFileDiff);
      } catch (error) {
        const reason = error instanceof Error ? error.message : "";
        if (!cancelled) {
          setExpansionError(
            reason === "changed"
              ? "The file changed after this edit."
              : reason === "patch"
                ? "The stored edit no longer applies to this file."
                : "The file could not be read.",
          );
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [
    change.filePath,
    change.patch,
    change.postFileHash,
    environmentId,
    props.fileDiff,
    workspaceRoot,
  ]);

  const stat = getDiffLineStat([expandedFileDiff]);
  return (
    <div>
      <FileDiff
        fileDiff={expandedFileDiff}
        renderCustomHeader={(headerFileDiff) => (
          <div className="flex h-10 items-center gap-2 px-3 text-xs">
            <span className="min-w-0 flex-1 truncate">{resolveFileDiffPath(headerFileDiff)}</span>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Toggle
                    aria-label={
                      props.wordWrap ? "Disable diff line wrapping" : "Enable diff line wrapping"
                    }
                    variant="ghost"
                    size="xs"
                    pressed={props.wordWrap}
                    onPressedChange={props.onToggleWordWrap}
                  />
                }
              >
                <TextWrapIcon className="size-3" />
              </TooltipTrigger>
              <TooltipPopup side="top">
                {props.wordWrap ? "Disable line wrapping" : "Enable line wrapping"}
              </TooltipPopup>
            </Tooltip>
            <DiffStatLabel additions={stat.additions} deletions={stat.deletions} layout="inline" />
          </div>
        )}
        options={{
          collapsed: false,
          diffStyle: "unified",
          expansionLineCount: 10,
          overflow: props.wordWrap ? "wrap" : "scroll",
          theme: resolveDiffThemeName(props.theme),
        }}
      />    </div>
  );
}

const SimpleWorkEntryRow = memo(function SimpleWorkEntryRow(props: {
  workEntry: TimelineWorkEntry;
  workspaceRoot: string | undefined;
  isExpandedToolGroupEntry: boolean;
}) {
  const { workEntry, workspaceRoot, isExpandedToolGroupEntry } = props;
  // Before any hooks: spawn CTA rows render their own component.
  if (workEntry.agentSpawn) {
    return <AgentSpawnCtaRow workEntry={workEntry} />;
  }
  return (
    <PlainWorkEntryRow
      workEntry={workEntry}
      workspaceRoot={workspaceRoot}
      isExpandedToolGroupEntry={isExpandedToolGroupEntry}
    />
  );
});

const PlainWorkEntryRow = memo(function PlainWorkEntryRow(props: {
  workEntry: TimelineWorkEntry;
  workspaceRoot: string | undefined;
  isExpandedToolGroupEntry: boolean;
}) {
  const { workEntry, workspaceRoot, isExpandedToolGroupEntry } = props;
  const timelineRow = use(TimelineRowCtx);
  const { threadRef, onImageExpand } = timelineRow;
  const [wordWrap, setWordWrap] = useState(() => {
    // Initialize from client settings but don't write back to it
    return false; // default, will be overridden by settings read below
  });
  const clientWordWrap = useClientSettings((settings) => settings.wordWrap);
  const [wordWrapInitialized, setWordWrapInitialized] = useState(false);
  if (!wordWrapInitialized) {
    setWordWrap(clientWordWrap);
    setWordWrapInitialized(true);
  }
  const [expanded, setExpanded] = useState(false);
  const iconConfig = workToneIcon(workEntry.tone);
  const showWarningIndicator = workEntry.sourceActivityKind === "runtime.warning";
  const showFailedIndicator = workEntryDisplayIndicatesToolFailure(workEntry);
  const entryIconName =
    showWarningIndicator || showFailedIndicator ? "circle-alert" : workEntryIconName(workEntry);
  const heading = toolWorkEntryHeading(workEntry);
  const rawPreview = workEntryPreview(workEntry, workspaceRoot);
  const preview =
    rawPreview &&
    normalizeCompactToolLabel(rawPreview).toLowerCase() ===
      normalizeCompactToolLabel(heading).toLowerCase()
      ? null
      : rawPreview;
  const displayText = preview ? `${heading} - ${preview}` : heading;
  const viewedImagePath = workEntryViewedImagePath(workEntry);
  const viewedImage =
    viewedImagePath && threadRef
      ? resolveViewedImageAsset(viewedImagePath, {
          threadId: threadRef.threadId,
          workspaceRoot,
        })
      : null;
  const inlineFileChanges =
    workEntry.fileChanges ?? (workEntry.fileChange ? [workEntry.fileChange] : []);
  const inlineFilePatches = inlineFileChanges.flatMap((change) => {
    const patch = buildInlineFileChangePatch(change);
    const renderablePatch = patch
      ? getRenderablePatch(patch, `work-log:${workEntry.id}:${change.filePath}`, {
          upgradeFullContextFiles: true,
        })
      : null;
    return renderablePatch?.kind === "files"
      ? renderablePatch.files.map((fileDiff) => ({ change, fileDiff }))
      : [];
  });
  const expandedBody =
    inlineFilePatches.length > 0 ? null : buildToolCallExpandedBody(workEntry, workspaceRoot);
  const canExpand =
    inlineFilePatches.length > 0 ||
    viewedImage !== null ||
    (showFailedIndicator && displayText.trim().length > 0) ||
    (workEntry.itemType === "mcp_tool_call" && workEntry.toolData !== undefined) ||
    Boolean(
      workEntryRawCommand(workEntry) ||
      workEntry.command?.trim() ||
      workEntry.detail?.trim() ||
      workEntry.changedFiles?.length,
    );
  const showDestructiveRowStyle =
    showFailedIndicator &&
    (workEntrySignalsSevereFailure(workEntry) || !workLogEntryIsToolLike(workEntry));
  // Ordinary tool failures stay muted; only runtime errors and warnings get
  // color. The red treatment is reserved for severe failures.
  const iconWrapperClass = cn(
    "flex size-6 shrink-0 items-center justify-center",
    showWarningIndicator
      ? "text-warning"
      : showDestructiveRowStyle
        ? "text-destructive"
        : workEntry.tone === "tool" || showFailedIndicator
          ? "text-icon-muted"
          : iconConfig.className,
  );
  const headingClass = showWarningIndicator
    ? "font-medium text-warning"
    : showDestructiveRowStyle
      ? "font-medium text-destructive"
      : workLogEntryIsToolLike(workEntry)
        ? "text-secondary-label"
        : "text-foreground/80";
  const showEntryIcon = !isExpandedToolGroupEntry || showWarningIndicator || showFailedIndicator;
  const accessibleDisplayText = showFailedIndicator
    ? `${displayText}, tool call failed`
    : displayText;
  const rowToggleProps = canExpand
    ? {
        role: "button" as const,
        tabIndex: 0 as const,
        "aria-label": accessibleDisplayText,
        "aria-expanded": expanded,
        onClick: () => setExpanded((v) => !v),
        onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded((v) => !v);
          }
        },
      }
    : {};

  return (
    <div
      className={cn(
        "group/timeline-row relative flex flex-col rounded-md px-0.5 transition-colors",
        isExpandedToolGroupEntry ? "py-0" : "py-0.5",
        expanded && "mb-1",
        canExpand &&
          "cursor-pointer hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70",
      )}
      {...rowToggleProps}
    >
      <div className="flex select-none items-center gap-1.5 transition-[opacity,translate] duration-200">
        <span
          className={cn(iconWrapperClass, !showEntryIcon && "invisible")}
          role={showFailedIndicator ? "img" : undefined}
          aria-label={showFailedIndicator ? "Tool call failed" : undefined}
          aria-hidden={!showEntryIcon}
        >
          <WorkEntryIconSvg
            name={entryIconName}
            className="block size-4 shrink-0 stroke-[1.8] opacity-70"          />
        </span>
        <div className="flex min-w-0 flex-1 items-center gap-1.5">
          <div className="min-w-0 flex-1 overflow-hidden">
            <p className="flex min-w-0 w-full items-baseline gap-1.5 text-sm leading-relaxed">
              <span
                className={cn(
                  "min-w-0 flex-1",
                  expanded ? "whitespace-pre-wrap break-words select-text" : "truncate",
                  headingClass,
                )}
                onClick={expanded ? stopRowToggleWhileSelectingText : undefined}
                onPointerDown={expanded ? stopRowToggle : undefined}
              >
                {displayText}
              </span>
            </p>
          </div>
          <span
            className={cn(
              "flex size-4 shrink-0 items-center justify-center",
              !canExpand && "invisible",
            )}
            aria-hidden
          >
            <ChevronDownIcon
              className={cn(
                "size-3 shrink-0 text-icon-muted opacity-70 transition-transform duration-200",
                expanded && "rotate-180",
              )}
            />
          </span>
        </div>
      </div>
      {expanded && canExpand ? (
        <div
          className="mt-1 ms-7 cursor-default border-s border-border/45 ps-3 pt-0.5"
          onClick={stopRowToggle}
          onPointerDown={stopRowToggle}
        >
          {viewedImage && threadRef ? (
            <div className="mb-1.5">
              <ChatMarkdownAssetImage
                environmentId={threadRef.environmentId}
                resource={viewedImage.resource}
                alt={viewedImage.alt}
                srcFragment={viewedImage.srcFragment}
                style={{ maxHeight: "16rem" }}
                onImageExpand={onImageExpand}
              />
            </div>
          ) : null}
          {inlineFilePatches.map(({ change, fileDiff }) => (
            <InlineFileDiff
              key={`${workEntry.id}:${resolveFileDiffPath(fileDiff)}`}
              change={change}
              fileDiff={fileDiff}
              environmentId={timelineRow.activeThreadEnvironmentId}
              workspaceRoot={workspaceRoot}
              theme={timelineRow.resolvedTheme}
              wordWrap={wordWrap}
              onToggleWordWrap={() => setWordWrap((w) => !w)}
            />
          ))}
          {expandedBody ? (
            <pre className={toolCallExpandedBodyClassName}>{expandedBody}</pre>
          ) : null}
        </div>
      ) : null}
    </div>
  );
});
