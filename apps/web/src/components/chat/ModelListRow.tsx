import { type ProviderDriverKind, type ProviderInstanceId } from "@t3tools/contracts";
import { memo } from "react";
import { CheckIcon, StarIcon } from "lucide-react";
import { getDisplayModelName } from "./providerIconUtils";
import { ComboboxItem } from "../ui/combobox";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Kbd } from "../ui/kbd";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { cn } from "~/lib/utils";
import { modelPickerModelKey } from "./modelPickerKeys";
import { ProviderInstanceIcon } from "./ProviderInstanceIcon";
import { formatModelContextWindowTokens, getModelCapabilityLabels } from "../modelMetadata";
import type { ServerProviderModel } from "@t3tools/contracts";

export const ModelListRow = memo(function ModelListRow(props: {
  index: number;
  slug: string;
  name: string;
  subProvider?: string | undefined;
  instanceId: ProviderInstanceId;
  driverKind: ProviderDriverKind;
  providerDisplayName: string;
  providerAccentColor?: string | undefined;
  acpRegistryAgentId?: string | undefined;
  acpRegistryIconUrl?: string | undefined;
  isFavorite: boolean;
  /** In Favorites every row is starred, so the star shows only on hover. */
  favoriteStarOnHover?: boolean;
  isSelected: boolean;
  /** Marks this instance apart from another of the same provider. */
  showInstanceBadge: boolean;
  showNewBadge?: boolean;
  unavailable?: boolean;
  /** Tokens the model can hold, shown in the row's metadata tooltip when known. */
  contextWindowTokens?: number | undefined;
  capabilities?: ServerProviderModel["capabilities"] | undefined;
  jumpLabel?: string | null;
  disabledReason?: string | null;
  onToggleFavorite: (instanceId: ProviderInstanceId, slug: string) => void;
}) {
  const model = {
    slug: props.slug,
    name: props.name,
    subProvider: props.subProvider,
  };
  const hasMetadata =
    props.contextWindowTokens !== undefined ||
    getModelCapabilityLabels(props.capabilities ?? null).length > 0;

  const row = (
    <ComboboxItem
      hideIndicator
      selectedFill={false}
      index={props.index}
      value={modelPickerModelKey(props.instanceId, props.slug)}
      disabled={Boolean(props.disabledReason)}
      className={cn(
        "group relative w-full !min-w-0 max-w-full cursor-pointer",
        props.disabledReason &&
          "data-disabled:pointer-events-auto data-disabled:cursor-not-allowed",
      )}
    >
      {/* One row shape in every tab: the logo names the provider, so Favorites needs no second line. */}
      <ProviderInstanceIcon
        driverKind={props.driverKind}
        displayName={props.providerDisplayName}
        accentColor={props.providerAccentColor}
        acpRegistryAgentId={props.acpRegistryAgentId}
        acpRegistryIconUrl={props.acpRegistryIconUrl}
        showBadge={props.showInstanceBadge}
        className="size-4"
        iconClassName="size-4"
        indicatorBackground="var(--popover)"
        badgeClassName="right-[-0.125rem] bottom-[-0.125rem] h-3 min-w-3 px-0.5 text-5xs"
      />
      <div className="flex min-w-0 flex-1 items-center gap-2 text-left">
        {hasMetadata ? (
          <Tooltip>
            <TooltipTrigger
              render={
                <div
                  className="min-w-0 truncate text-sm font-normal leading-snug"
                  data-model-context-trigger=""
                />
              }
            >
              <ModelRowName
                name={getDisplayModelName(model)}
                provider={props.providerDisplayName}
              />
            </TooltipTrigger>
            <TooltipPopup side="left" align="center" className="max-w-64">
              <ModelMetadataDetails
                contextWindowTokens={props.contextWindowTokens}
                capabilities={props.capabilities}
              />
            </TooltipPopup>
          </Tooltip>
        ) : (
          <div className="min-w-0 truncate text-sm font-normal leading-snug">
            <ModelRowName name={getDisplayModelName(model)} provider={props.providerDisplayName} />
          </div>
        )}
        {props.isSelected ? <CheckIcon className="size-3.5 shrink-0" aria-hidden="true" /> : null}
        {props.subProvider ? (
          <span className="min-w-0 shrink truncate text-xs text-muted-foreground/70">
            {props.subProvider}
          </span>
        ) : null}
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

      <div className="flex shrink-0 items-center gap-1.5">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                size="icon-xs"
                variant="ghost-muted"
                onClick={(event) => {
                  event.stopPropagation();
                  props.onToggleFavorite(props.instanceId, props.slug);
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
                    (!props.isFavorite || props.favoriteStarOnHover) &&
                      "opacity-0 group-hover:opacity-100 group-data-highlighted:opacity-100 in-focus-visible:opacity-100 pointer-coarse:opacity-100",
                  )}
                />
              </Button>
            }
          />
          <TooltipPopup side="top" align="center">
            {props.isFavorite ? "Remove from favorites" : "Add to favorites"}
          </TooltipPopup>
        </Tooltip>
        {props.jumpLabel ? <Kbd>{props.jumpLabel}</Kbd> : null}
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

/** The row's model name; the logo is decorative, so the provider is named for screen readers. */
function ModelRowName(props: { readonly name: string; readonly provider: string }) {
  return (
    <>
      {props.name}
      <span className="sr-only">, {props.provider}</span>
    </>
  );
}

/** Tokens and capabilities the model advertises, shown beside the row's name. */
function ModelMetadataDetails(props: {
  readonly contextWindowTokens: number | undefined;
  readonly capabilities: ServerProviderModel["capabilities"] | undefined;
}) {
  const capabilityLabels = getModelCapabilityLabels(props.capabilities ?? null);
  return (
    <div className="space-y-1.5">
      {props.contextWindowTokens !== undefined ? (
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">Context window</span>
          <span className="ml-auto font-medium">
            {formatModelContextWindowTokens(props.contextWindowTokens)} tokens
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
  );
}
