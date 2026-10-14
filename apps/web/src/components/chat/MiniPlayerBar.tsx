/**
 * Mobile TTS mini-player: fixed bottom-right, rendered from the shared audio
 * player store so playback (and its controls) survive thread navigation.
 * Auto-hides when idle. On desktop the player lives in the sidebar instead
 * (see `SidebarTtsPlayer`).
 */
import {
  Loader2Icon,
  PauseIcon,
  PlayIcon,
  RotateCcwIcon,
  RotateCwIcon,
  Volume2Icon,
  VolumeXIcon,
  XIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { cn } from "~/lib/utils";
import { formatTime, useTtsControls } from "~/hooks/useTtsControls";
import type { AppRouter } from "~/router";

export function MiniPlayerBar({ router }: { router: AppRouter }) {
  const tts = useTtsControls(router);
  if (!tts.visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Audio playback"
      className={cn(
        "fixed right-3 bottom-3 z-50 w-80 rounded-lg border border-border/60 bg-popover/95 p-3 md:hidden",
        "shadow-lg backdrop-blur-sm select-none",
      )}
    >
      <div className="flex items-center gap-2">
        <Button
          aria-label={tts.isPlaying ? "Pause" : "Play"}
          size="icon-xs"
          variant="outline"
          disabled={tts.isLoading}
          onClick={tts.togglePausePlayback}
        >
          {tts.isLoading ? (
            <Loader2Icon className="size-3.5 animate-spin" />
          ) : tts.isPlaying ? (
            <PauseIcon className="size-3.5" />
          ) : (
            <PlayIcon className="size-3.5" />
          )}
        </Button>
        <div className="min-w-0 flex-1">
          {tts.threadRef !== null ? (
            <button
              className="block w-full cursor-pointer truncate text-left text-xs text-foreground/80 hover:text-foreground hover:underline"
              onClick={tts.revealThread}
              type="button"
            >
              {tts.displayTitle}
            </button>
          ) : (
            <p className="truncate text-xs text-foreground/80">{tts.displayTitle}</p>
          )}
          <div className="flex items-center gap-2">
            <Button
              aria-label="Back 10 seconds"
              disabled={tts.isLoading}
              size="icon-xs"
              variant="ghost"
              onClick={() => tts.skipPlayback(-10)}
            >
              <RotateCcwIcon className="size-3.5" />
              <span className="sr-only">Back 10 seconds</span>
            </Button>
            <span className="w-8 text-right text-3xs tabular-nums text-muted-foreground">
              {formatTime(tts.scrubValue ?? tts.currentTime)}
            </span>
            <input
              aria-label="Seek"
              className="h-1 w-full accent-primary"
              disabled={tts.isLoading}
              max={Math.max(tts.duration, 0.1)}
              min={0}
              onBlur={tts.cancelScrub}
              onChange={tts.handleScrubChange}
              onPointerDown={tts.handleScrubPointerDown}
              onPointerUp={tts.commitScrub}
              step="any"
              type="range"
              value={tts.scrubValue ?? Math.min(tts.currentTime, tts.duration || tts.currentTime)}
            />
            <span className="w-8 text-3xs tabular-nums text-muted-foreground">
              {formatTime(tts.duration)}
            </span>
            <Button
              aria-label="Forward 10 seconds"
              disabled={tts.isLoading}
              size="icon-xs"
              variant="ghost"
              onClick={() => tts.skipPlayback(10)}
            >
              <RotateCwIcon className="size-3.5" />
              <span className="sr-only">Forward 10 seconds</span>
            </Button>
          </div>
        </div>
        <Button
          aria-label="Stop and close"
          size="icon-xs"
          variant="ghost"
          onClick={tts.stopPlayback}
        >
          <XIcon className="size-3.5" />
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="flex w-32 items-center gap-1.5">
          <Button
            aria-label={tts.volume === 0 ? "Unmute" : "Mute"}
            size="icon-xs"
            variant="ghost"
            onClick={() => tts.setPlaybackVolume(tts.volume === 0 ? 1 : 0)}
          >
            {tts.volume === 0 ? (
              <VolumeXIcon className="size-3.5" />
            ) : (
              <Volume2Icon className="size-3.5" />
            )}
          </Button>
          <input
            aria-label="Volume"
            className="h-1 w-full accent-primary"
            max={1}
            min={0}
            onChange={tts.handleVolume}
            step={0.05}
            type="range"
            value={tts.volume}
          />
        </div>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="Playback speed"
                size="icon-xs"
                variant="ghost"
                onClick={tts.cycleRate}
              />
            }
          >
            <span className="text-3xs tabular-nums">{tts.rate}×</span>
          </TooltipTrigger>
          <TooltipPopup>
            <p>Playback speed</p>
          </TooltipPopup>
        </Tooltip>
      </div>
    </div>
  );
}
