import type { OrchestrationV2PlanStep } from "@t3tools/contracts";
import { CheckCircle2Icon, ChevronDownIcon, CircleIcon, ListTodoIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { ComposerBanner } from "./ComposerBanner";

/**
 * The run's task checklist above the composer. The composer redesign ships the same card as
 * `ComposerTaskStatus`; this fork copy goes away with it.
 */
export function ComposerTasksCard({
  steps,
}: {
  readonly steps: ReadonlyArray<OrchestrationV2PlanStep>;
}) {
  const [expanded, setExpanded] = useState(false);
  if (steps.length === 0) return null;
  const completed = steps.filter((step) => step.status === "completed").length;
  const current =
    steps.find((step) => step.status === "running") ??
    steps.find((step) => step.status === "pending");
  return (
    <ComposerBanner.Attachment data-chat-composer-tasks="true">
      <ComposerBanner.Root variant="info" density="comfortable">
        <ComposerBanner.Row>
          <ComposerBanner.Icon>
            <ListTodoIcon />
          </ComposerBanner.Icon>
          <ComposerBanner.Content>
            <span className="truncate font-medium">Tasks</span>
            {current === undefined ? null : (
              <span className="truncate text-muted-foreground">{current.text}</span>
            )}
          </ComposerBanner.Content>
          <ComposerBanner.Actions>
            <span className="pe-0.5 text-muted-foreground tabular-nums">
              {completed}/{steps.length}
            </span>
            <Button
              size="icon-xs"
              variant="ghost"
              aria-expanded={expanded}
              aria-label={expanded ? "Hide tasks" : "Show tasks"}
              onClick={() => setExpanded((open) => !open)}
            >
              <ChevronDownIcon className={cn("size-3.5", !expanded && "rotate-180")} />
            </Button>
          </ComposerBanner.Actions>
        </ComposerBanner.Row>
        {expanded ? (
          <ComposerBanner.Children>
            <ol className="grid gap-1.5 px-1 pb-1.5" data-chat-composer-task-steps="true">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className={cn(
                    "flex min-w-0 items-center gap-1.5",
                    step.status === "pending"
                      ? "text-muted-foreground/60"
                      : "text-muted-foreground",
                  )}
                >
                  {step.status === "completed" ? (
                    <CheckCircle2Icon className="size-3 shrink-0 text-success-foreground" />
                  ) : (
                    <CircleIcon className="size-3 shrink-0" />
                  )}
                  <span className="min-w-0 flex-1 truncate">{step.text}</span>
                </li>
              ))}
            </ol>
          </ComposerBanner.Children>
        ) : null}
      </ComposerBanner.Root>
    </ComposerBanner.Attachment>
  );
}
