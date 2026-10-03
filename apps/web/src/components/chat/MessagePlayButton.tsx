/**
 * Play/stop button for assistant-message TTS playback. Reads shared status
 * from `useAudioPlayerStore` (audio itself lives in `useTtsPlayer`); progress
 * and failures surface as stacked toasts via `toastManager`.
 */
import { memo, useEffect, useRef } from "react";
import { Loader2Icon, Volume2Icon, VolumeXIcon } from "lucide-react";
import { type MessageId } from "@t3tools/contracts";
import { Button } from "../ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { cn } from "~/lib/utils";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import { useTtsPlayer } from "~/hooks/useTtsPlayer";
import { stackedThreadToast, toastManager, type ToastId } from "../ui/toast";

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
  const wakingToastRef = useRef<ToastId | null>(null);
  const { play, stop } = useTtsPlayer();
  const status = useAudioPlayerStore((s) => s.status);
  const playingId = useAudioPlayerStore((s) => s.playingMessageId);
  const error = useAudioPlayerStore((s) => s.error);
  const errorMessageId = useAudioPlayerStore((s) => s.errorMessageId);

  const isThis = playingId === messageId;
  const isLoading = isThis && (status === "loading" || status === "waking");
  const isWaking = isThis && status === "waking";
  const isPlaying = isThis && status === "playing";
  const isActive = isLoading || isPlaying;

  const closeWakingToast = () => {
    if (wakingToastRef.current !== null) {
      toastManager.close(wakingToastRef.current);
      wakingToastRef.current = null;
    }
  };

  // While the on-demand TTS server wakes, show a persistent toast; close it
  // once this message leaves the waking state (started, failed, or superseded).
  useEffect(() => {
    if (!isWaking) {
      closeWakingToast();
      return;
    }
    if (wakingToastRef.current === null) {
      wakingToastRef.current = toastManager.add(
        stackedThreadToast({
          type: "loading",
          title: "Starting TTS server",
          description: "Waking the local speech server — first playback can take up to a minute.",
          timeout: 0,
        }),
      );
    }
  }, [isWaking]);

  // Clean up on unmount so the toast never outlives the button that opened it.
  useEffect(() => closeWakingToast, []);

  // Surface a failure once per error transition as a plain stacked toast.
  useEffect(() => {
    if (error === null || errorMessageId !== messageId) return;
    toastManager.add(
      stackedThreadToast({
        type: "error",
        title: "TTS playback failed",
        description: error,
        timeout: 6000,
      }),
    );
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
