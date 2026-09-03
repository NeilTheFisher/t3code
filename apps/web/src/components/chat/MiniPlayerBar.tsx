/**
 * Global TTS mini-player: fixed bottom-right, rendered from the shared audio
 * player store so playback (and its controls) survive thread navigation.
 * Auto-hides when idle; scrub/volume/speed act on the singleton audio element.
 */
import { useCallback } from "react";
import { Loader2Icon, PauseIcon, PlayIcon, Volume2Icon, VolumeXIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "../ui/tooltip";
import { cn } from "~/lib/utils";
import { useAudioPlayerStore } from "~/audioPlayerStore";
import {
  seekPlayback,
  setPlaybackRate,
  setPlaybackVolume,
  stopPlayback,
  togglePausePlayback,
} from "~/hooks/useTtsPlayer";

const RATE_OPTIONS = [0.75, 1, 1.25, 1.5, 2] as const;
const TITLE_MAX_CHARS = 80;

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
export function MiniPlayerBar() {
  const status = useAudioPlayerStore((s) => s.status);
  const playingMessageId = useAudioPlayerStore((s) => s.playingMessageId);
  const currentTime = useAudioPlayerStore((s) => s.currentTime);
  const duration = useAudioPlayerStore((s) => s.duration);
  const volume = useAudioPlayerStore((s) => s.volume);
  const rate = useAudioPlayerStore((s) => s.rate);
  const title = useAudioPlayerStore((s) => s.title);

  const visible = status !== "idle";
  const isPlaying = status === "playing";
  const isLoading = status === "loading" || status === "waking";

  const handleScrub = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    seekPlayback(Number(event.target.value));
  }, []);

  const handleVolume = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaybackVolume(Number(event.target.value));
  }, []);

  const cycleRate = useCallback(() => {
    const next =
      RATE_OPTIONS[
        (RATE_OPTIONS.indexOf(rate as (typeof RATE_OPTIONS)[number]) + 1) % RATE_OPTIONS.length
      ];
    setPlaybackRate(next);
  }, [rate]);

  if (!visible) return null;

  return (
    <div
      role="complementary"
      aria-label="Audio playback"
      className={cn(
        "fixed right-3 bottom-3 z-50 w-80 rounded-lg border border-border/60 bg-popover/95 p-3",
        "shadow-lg backdrop-blur-sm select-none",
      )}
    >
      <div className="flex items-center gap-2">
        <Button
          aria-label={isPlaying ? "Pause" : "Play"}
          size="icon-xs"
          variant="outline"
          disabled={isLoading}
          onClick={togglePausePlayback}
        >
          {isLoading ? (
            <Loader2Icon className="size-3.5 animate-spin" />
          ) : isPlaying ? (
            <PauseIcon className="size-3.5" />
          ) : (
            <PlayIcon className="size-3.5" />
          )}
        </Button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-foreground/80" title={title ?? undefined}>
            {isLoading
              ? status === "waking"
                ? "Starting TTS server…"
                : "Loading…"
              : (title ?? "Audio")}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-8 text-right text-[10px] tabular-nums text-muted-foreground">
              {formatTime(currentTime)}
            </span>
            <input
              aria-label="Seek"
              className="h-1 w-full accent-primary"
              disabled={isLoading}
              max={Math.max(duration, 0.1)}
              min={0}
              onChange={handleScrub}
              step={0.1}
              type="range"
              value={Math.min(currentTime, duration || currentTime)}
            />
            <span className="w-8 text-[10px] tabular-nums text-muted-foreground">
              {formatTime(duration)}
            </span>
          </div>
        </div>
        <Button aria-label="Stop and close" size="icon-xs" variant="ghost" onClick={stopPlayback}>
          <XIcon className="size-3.5" />
        </Button>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="flex w-32 items-center gap-1.5">
          <Button
            aria-label={volume === 0 ? "Unmute" : "Mute"}
            size="icon-xs"
            variant="ghost"
            onClick={() => setPlaybackVolume(volume === 0 ? 1 : 0)}
          >
            {volume === 0 ? (
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
            onChange={handleVolume}
            step={0.05}
            type="range"
            value={volume}
          />
        </div>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                aria-label="Playback speed"
                size="icon-xs"
                variant="ghost"
                onClick={cycleRate}
              />
            }
          >
            <span className="text-[10px] tabular-nums">{rate}×</span>
          </TooltipTrigger>
          <TooltipPopup>
            <p>Playback speed</p>
          </TooltipPopup>
        </Tooltip>
      </div>
    </div>
  );
}
