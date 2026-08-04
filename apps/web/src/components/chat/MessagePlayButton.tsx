/**
 * Play/stop button for assistant-message TTS playback. Reads shared status
 * from `useAudioPlayerStore` (audio itself lives in `useTtsPlayer`); a failure
 * toasts at the button that triggered it.
 */
import { memo, useEffect, useRef } from "react";
import { Loader2Icon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { type MessageId } from "@t3tools/contracts";
import { Button } from "../ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { anchoredToastManager } from "../ui/toast";
import { cn } from "~/lib/utils";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { useTtsPlayer } from "~/hooks/useTtsPlayer";

const ERROR_TOAST_TIMEOUT_MS = 4000;

export const MessagePlayButton = memo(function MessagePlayButton({
  messageId,
  text,
  size = "xs",
  variant = "outline",
  className,
}: {
  messageId: MessageId;
  text: string;
  size?: "xs" | "icon-xs";
  variant?: "outline" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const { play, stop } = useTtsPlayer();
  const status = useAudioPlayerStore((s) => s.status);
  const playingId = useAudioPlayerStore((s) => s.playingMessageId);
  const error = useAudioPlayerStore((s) => s.error);
  const errorMessageId = useAudioPlayerStore((s) => s.errorMessageId);

  const isThis = playingId === messageId;
  const isLoading = isThis && status === "loading";
  const isPlaying = isThis && status === "playing";
  const isActive = isLoading || isPlaying;

  // Toast a playback failure at the button that triggered it, once per error.
  useEffect(() => {
    if (error === null || !ref.current || errorMessageId !== messageId) return;
    anchoredToastManager.add({
      data: { tooltipStyle: true },
      positionerProps: { anchor: ref.current },
      timeout: ERROR_TOAST_TIMEOUT_MS,
      title: "TTS playback failed",
      description: error,
    });
  }, [error, errorMessageId, messageId]);

  const Icon = isLoading ? Loader2Icon : isPlaying ? VolumeXIcon : Volume2Icon;
  const label = isActive ? "Stop playback" : "Play with TTS";
  const trimmed = text.trim();

  const handleClick = () => {
    if (isActive) {
      stop();
      return;
    }
    void play(messageId, trimmed).catch(() => {
      // Error already surfaced via the store + effect above.
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            aria-label={label}
            disabled={trimmed.length === 0}
            onClick={handleClick}
            ref={ref}
            type="button"
            size={size}
            variant={variant}
            className={cn(className)}
          />
        }
      >
        <Icon className={cn("size-3", isLoading && "animate-spin")} />
      </TooltipTrigger>
      <TooltipPopup>
        <p>{label}</p>
      </TooltipPopup>
    </Tooltip>
  );
});
