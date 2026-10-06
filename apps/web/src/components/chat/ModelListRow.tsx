import { type ProviderDriverKind, type ProviderInstanceId } from "@t3tools/contracts";
import { memo } from "react";
import { CheckIcon, StarIcon } from "lucide-react";
import {
  getDisplayModelName,
  getTriggerDisplayModelLabel,
  type ModelEsque,
} from "./providerIconUtils";
import { ComboboxItem } from "../ui/combobox";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Kbd } from "../ui/kbd";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { cn } from "~/lib/utils";
import { modelPickerModelKey } from "./modelPickerKeys";
import { ProviderInstanceIcon } from "./ProviderInstanceIcon";
import { formatModelContextWindowTokens, getModelCapabilityLabels } from "../modelMetadata";

export const ModelListRow = memo(function ModelListRow(props: {
  index: number;
  model: ModelEsque;
  /** Instance the model belongs to — the routing key used in combobox values. */
  instanceId: ProviderInstanceId;
  /** Driver kind of the instance — used for the provider icon glyph. */
  driverKind: ProviderDriverKind;
  /**
   * Display name to show in the secondary line (provider footer). Usually
   * the instance's configured `displayName` so custom instances like
   * "Codex Personal" render with their user-authored label.
   */
  providerDisplayName: string;
  providerAccentColor?: string | undefined;
  acpRegistryAgentId?: string | undefined;
  acpRegistryIconUrl?: string | undefined;
  isFavorite: boolean;
  isSelected: boolean;
  showSelection?: boolean;
  showProvider: boolean;
  preferShortName?: boolean;
  useTriggerLabel?: boolean;
  showNewBadge?: boolean;
  unavailable?: boolean;
  jumpLabel?: string | null;
  disabledReason?: string | null;
  onToggleFavorite: () => void;
}) {
  const providerLabel = props.model.subProvider
    ? `${props.providerDisplayName} · ${props.model.subProvider}`
    : props.providerDisplayName;

  const modelLabel = (
    <>
      <div className="flex min-w-0 items-center gap-2">
        <div className="min-w-0 truncate text-xs font-medium leading-snug">
          {props.useTriggerLabel
            ? getTriggerDisplayModelLabel(props.model)
            : getDisplayModelName(
                props.model,
                props.preferShortName ? { preferShortName: true } : undefined,
              )}
        </div>
        {props.showNewBadge ? (
          <span
            className="shrink-0 rounded border border-update/35 bg-update/15 px-0.5 py-px text-3xs font-bold uppercase leading-none tracking-wide text-update-foreground"
            aria-label="New model"
          >
            New
          </span>
        ) : null}
        {props.unavailable ? (
          <Badge variant="outline" size="sm">
            Unavailable
          </Badge>
        ) : null}
      </div>
      {props.showProvider && (
        <div className="mt-1 flex items-center gap-1.5">
          <ProviderInstanceIcon
            driverKind={props.driverKind}
            displayName={props.providerDisplayName}
            acpRegistryAgentId={props.acpRegistryAgentId}
            acpRegistryIconUrl={props.acpRegistryIconUrl}
            className="size-3"
            iconClassName="size-3"
          />
          <span className="truncate text-xs font-normal leading-snug text-muted-foreground/70">
            {providerLabel}
          </span>
        </div>
      )}
    </>
  );

  const contextWindowTokens = props.model.contextWindowTokens;
  const capabilityLabels = getModelCapabilityLabels(props.model.capabilities ?? null);
  const hasMetadata = contextWindowTokens !== undefined || capabilityLabels.length > 0;
  const row = (
    <ComboboxItem
      hideIndicator
      index={props.index}
      value={modelPickerModelKey(props.instanceId, props.model.slug)}
      disabled={Boolean(props.disabledReason)}
      className={cn(
        "group relative w-full !min-w-0 max-w-full cursor-pointer",
        props.disabledReason &&
          "data-disabled:pointer-events-auto data-disabled:cursor-not-allowed",
      )}
    >
      {!hasMetadata ? (
        <div className="min-w-0 flex-1 text-left">{modelLabel}</div>
      ) : (
        <Tooltip>
          <TooltipTrigger
            render={<div className="min-w-0 flex-1 text-left" data-model-context-trigger />}
          >
            {modelLabel}
          </TooltipTrigger>
          <TooltipPopup side="left" align="center" className="max-w-64">
            <div className="space-y-1.5">
              {contextWindowTokens !== undefined ? (
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground">Context window</span>
                  <span className="ml-auto font-medium">
                    {formatModelContextWindowTokens(contextWindowTokens)} tokens
                  </span>
                </div>
              ) : null}
              {capabilityLabels.length > 0 ? (
                <div className="border-t border-border/60 pt-1.5">
                  <div className="mb-1 text-3xs font-medium uppercase tracking-wide text-muted-foreground/70">
                    Capabilities
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {capabilityLabels.map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 whitespace-nowrap text-muted-foreground"
                      >
                        <span className="size-1 rounded-full bg-muted-foreground/70" />
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </TooltipPopup>
        </Tooltip>
      )}
      <div className="flex shrink-0 items-center gap-1.5">
        {props.showSelection && props.isSelected ? (
          <CheckIcon className="size-3.5" aria-hidden="true" />
        ) : null}
        {props.jumpLabel ? <Kbd>{props.jumpLabel}</Kbd> : null}
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                size="icon-xs"
                variant="ghost-muted"
                className="-mr-1 shrink-0"
                onClick={(event) => {
                  event.stopPropagation();
                  props.onToggleFavorite();
                }}
                onKeyDown={(event) => {
                  event.stopPropagation();
                }}
                disabled={Boolean(props.disabledReason)}
                aria-label={props.isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <StarIcon
                  className={cn(
                    "size-3.5 sm:size-3",
                    props.isFavorite && "fill-current text-warning",
                  )}
                />
              </Button>
            }
          />
          <TooltipPopup side="top" align="center">
            {props.isFavorite ? "Remove from favorites" : "Add to favorites"}
          </TooltipPopup>
        </Tooltip>
      </div>
    </ComboboxItem>
  );

  if (!props.disabledReason) {
    return row;
  }

  return (
    <Tooltip>
      <TooltipTrigger render={row} />
      <TooltipPopup side="left" align="center">
        {props.disabledReason}
      </TooltipPopup>
    </Tooltip>
  );
});
