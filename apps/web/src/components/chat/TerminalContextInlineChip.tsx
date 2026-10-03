import { TerminalIcon } from "lucide-react";

import { cn } from "~/lib/utils";
import {
  COMPOSER_INLINE_CHIP_CLASS_NAME,
  COMPOSER_INLINE_CHIP_ICON_CLASS_NAME,
  COMPOSER_INLINE_CHIP_LABEL_CLASS_NAME,
} from "../composerInlineChip";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import type { ContextPresentationCapability } from "../contextPresentationRegistry";
import { ContextChipPopover } from "../contextChipParts";

interface TerminalContextInlineChipProps {
  label: string;
  /** Plain-text tooltip for the compact inline chip (legacy composer rendering). */
  tooltipText?: string;
  terminalLabel?: string;
  lineStart?: number;
  lineEnd?: number;
  text?: string;
  detailsMode?: ContextPresentationCapability["details"];
  expired?: boolean;
}

export function TerminalContextInlineChip(props: TerminalContextInlineChipProps) {
  const {
    label,
    tooltipText,
    terminalLabel,
    lineStart,
    lineEnd,
    text,
    detailsMode,
    expired = false,
  } = props;

  if (
    !expired &&
    text !== undefined &&
    text.length > 0 &&
    terminalLabel !== undefined &&
    lineStart !== undefined &&
    lineEnd !== undefined &&
    detailsMode === "popover"
  ) {
    return (
      <ContextChipPopover
        kind="terminal"
        icon={<TerminalIcon />}
        label={label}
        accessibleLabel={`Terminal excerpt, ${label}`}
      >
        <div className="overflow-hidden rounded-md border border-border/70 bg-background/80">
          <div className="flex items-center gap-2 border-b border-border/70 px-3 py-2">
            <TerminalIcon className="size-4 shrink-0 text-success" aria-hidden />
            <span className="min-w-0 truncate text-sm font-medium text-foreground">
              {terminalLabel}
            </span>
            <span className="ml-auto shrink-0 text-secondary-label text-xs">
              {lineStart === lineEnd ? `Line ${lineStart}` : `Lines ${lineStart}–${lineEnd}`}
            </span>
          </div>
          <pre
            className="max-h-80 overflow-auto whitespace-pre bg-muted p-3 font-mono text-foreground text-xs leading-relaxed outline-none [tab-size:4] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
            aria-label="Captured terminal output"
            tabIndex={0}
          >
            {text}
          </pre>
        </div>
      </ContextChipPopover>
    );
  }

  const resolvedTooltip = tooltipText ?? text ?? "";

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <span
            className={cn(
              COMPOSER_INLINE_CHIP_CLASS_NAME,
              expired && "border-destructive/35 bg-destructive/8 text-destructive",
            )}
            data-terminal-context-expired={expired ? "true" : undefined}
          >
            <TerminalIcon
              className={cn(
                COMPOSER_INLINE_CHIP_ICON_CLASS_NAME,
                "size-3.5",
                expired && "opacity-100",
              )}
            />
            <span className={COMPOSER_INLINE_CHIP_LABEL_CLASS_NAME}>{label}</span>
          </span>
        }
      />
      <TooltipPopup side="top" className="max-w-80 whitespace-pre-wrap">
        {resolvedTooltip}
      </TooltipPopup>
    </Tooltip>
  );
}
