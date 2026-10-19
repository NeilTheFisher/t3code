import { Trash2Icon } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Spinner } from "~/components/ui/spinner";
import { Tooltip, TooltipPopup, TooltipTrigger } from "~/components/ui/tooltip";
import { useTtsModels } from "~/hooks/useTtsModels";
import type { TtsModel } from "~/lib/ttsModels";
import { SettingsRow } from "./settingsLayout";

function formatProgress(progress: number): string {
  return `${Math.round(Math.min(100, Math.max(0, progress)))}%`;
}

function TtsModelControl({
  model,
  onInstall,
  onRemove,
  onActivate,
}: {
  model: TtsModel;
  onInstall: (id: string) => void;
  onRemove: (id: string) => void;
  onActivate: (id: string) => void;
}) {
  if (model.state === "downloading") {
    return (
      <Button size="xs" variant="outline" disabled>
        <Spinner size="xs" />
        {formatProgress(model.progress)}
      </Button>
    );
  }
  if (model.installed && model.active) {
    return (
      <div className="flex items-center gap-1.5">
        <Badge variant="success" size="sm">
          Active
        </Badge>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                size="icon-xs"
                variant="ghost-destructive"
                aria-label={`Delete ${model.name}`}
                onClick={() => onRemove(model.id)}
              >
                <Trash2Icon />
              </Button>
            }
          />
          <TooltipPopup side="top">Delete model</TooltipPopup>
        </Tooltip>
      </div>
    );
  }
  if (model.installed) {
    return (
      <Button size="xs" variant="outline" onClick={() => onActivate(model.id)}>
        Activate
      </Button>
    );
  }
  return (
    <Button size="xs" variant="outline" onClick={() => onInstall(model.id)}>
      Download
    </Button>
  );
}

/**
 * The TTS service's installable models, as settings rows. Renders nothing when
 * the service is unreachable or reports no registry, so the panel never breaks.
 */
export function TtsModelPicker({ serverUrl }: { serverUrl: string }) {
  const { models, install, remove, activate } = useTtsModels(serverUrl);
  if (models.length === 0) return null;

  return (
    <>
      {models.map((model) => (
        <SettingsRow
          key={model.id}
          title={
            <span className="flex flex-wrap items-baseline gap-1.5">
              {model.name}
              {model.sizeLabel ? (
                <span className="text-xs font-normal text-muted-foreground">{model.sizeLabel}</span>
              ) : null}
            </span>
          }
          description={
            model.state === "error" && model.detail ? (
              <span className="text-destructive">{model.detail}</span>
            ) : (
              model.license
            )
          }
          control={
            <TtsModelControl
              model={model}
              onInstall={(id) => void install(id)}
              onRemove={(id) => void remove(id)}
              onActivate={(id) => void activate(id)}
            />
          }
        />
      ))}
    </>
  );
}
