import type { CommitContextRecord } from "@t3tools/contracts";
import { GitCommitHorizontalIcon } from "lucide-react";

import { ContextChip, ContextChipLabel } from "./ContextChip";
import { Tooltip, TooltipPopup, TooltipTrigger } from "./ui/tooltip";

/**
 * What the agent receives is the full SHA plus the repository; the chip only has
 * room for the abbreviated one, so the tooltip carries the rest.
 */
export function CommitContextChip(props: {
  record: Pick<CommitContextRecord, "sha" | "subject" | "repositoryPath" | "threadIds"> & {
    label: string;
  };
  copyMarkdown?: string;
}) {
  const { record } = props;
  const threadCount = record.threadIds.length;
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <ContextChip
            kind="commit"
            aria-label={`Commit ${record.sha}: ${record.subject}`}
            data-markdown-copy={props.copyMarkdown}
          >
            <GitCommitHorizontalIcon />
            <ContextChipLabel>{record.label}</ContextChipLabel>
          </ContextChip>
        }
      />
      <TooltipPopup side="top" className="whitespace-pre-wrap">
        {[
          record.sha,
          record.subject,
          record.repositoryPath,
          threadCount > 0 ? `${threadCount} linked thread${threadCount === 1 ? "" : "s"}` : "",
        ]
          .filter((line) => line.length > 0)
          .join("\n")}
      </TooltipPopup>
    </Tooltip>
  );
}
