/**
 * Desktop TTS player, docked at the right of the sidebar's utility row (next to
 * the Usage button). Collapsed it shows only play/pause and a progress line; on
 * hover (or keyboard focus) it pops the full controls up in a panel with an
 * iOS-style spring, so it never covers other UI while idle.
 */
import type { CSSProperties } from "react";
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
import { cn } from "~/lib/utils";
import { formatTime, useTtsControls } from "~/hooks/useTtsControls";
import { useRouter } from "@tanstack/react-router";

// iOS-like spring: overshoots slightly before settling.
const SPRING = "ease-spring";

/** Drives the shared `.settings-slider` fill. */
const sliderStyle = (percent: number): CSSProperties =>
  ({ "--settings-slider-progress": `${Math.min(100, Math.max(0, percent))}%` }) as CSSProperties;

export function SidebarTtsPlayer() {
  const tts = useTtsControls(useRouter());
  if (!tts.visible) return null;

  const seekValue = tts.scrubValue ?? Math.min(tts.currentTime, tts.duration || tts.currentTime);
  const seekPercent = tts.duration > 0 ? (seekValue / tts.duration) * 100 : 0;

  return (
    <div className="group/tts relative flex shrink-0 items-center gap-2">
      <button
        type="button"
        aria-label={tts.isPlaying ? "Pause narration" : "Play narration"}
        className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-full border border-border/60 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
        disabled={tts.isLoading}
        onClick={tts.togglePausePlayback}
      >
        {tts.isLoading ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : tts.isPlaying ? (
          <PauseIcon className="size-4" />
        ) : (
          <PlayIcon className="size-4" />
        )}
      </button>
      <div className="h-1 w-14 shrink-0 overflow-hidden rounded-full bg-border/60">
        <div className="h-full rounded-full bg-primary" style={{ width: `${seekPercent}%` }} />
      </div>

      {/* Full controls, popped up on hover/focus. */}
      <div
        className={cn(
          "pointer-events-none absolute right-0 bottom-full z-50 w-64 origin-bottom-right pb-2",
          "translate-y-2 scale-90 opacity-0 transition-[transform,opacity] duration-300",
          SPRING,
          "group-hover/tts:pointer-events-auto group-hover/tts:translate-y-0 group-hover/tts:scale-100 group-hover/tts:opacity-100",
          "group-focus-within/tts:pointer-events-auto group-focus-within/tts:translate-y-0 group-focus-within/tts:scale-100 group-focus-within/tts:opacity-100",
        )}
      >
        <div
          role="complementary"
          aria-label="Audio playback"
          className="rounded-lg border border-border/60 bg-popover/95 p-3 shadow-lg backdrop-blur-sm select-none"
        >
          <div className="flex items-center gap-2">
            <Button
              aria-label={tts.isPlaying ? "Pause" : "Play"}
              size="icon-sm"
              variant="outline"
              disabled={tts.isLoading}
              onClick={tts.togglePausePlayback}
            >
              {tts.isLoading ? (
                <Loader2Icon className="animate-spin" />
              ) : tts.isPlaying ? (
                <PauseIcon />
              ) : (
                <PlayIcon />
              )}
            </Button>
            {tts.threadRef !== null ? (
              <button
                className="min-w-0 flex-1 cursor-pointer truncate text-left text-xs text-foreground/80 hover:text-foreground hover:underline"
                onClick={tts.revealThread}
                type="button"
              >
                {tts.displayTitle}
              </button>
            ) : (
              <p className="min-w-0 flex-1 truncate text-xs text-foreground/80">
                {tts.displayTitle}
              </p>
            )}
            <Button
              aria-label="Stop and close"
              size="icon-sm"
              variant="ghost"
              onClick={tts.stopPlayback}
            >
              <XIcon />
            </Button>
          </div>

          {/* Seek gets a full-width row so it is easy to grab. */}
          <div className="mt-1.5">
            <input
              aria-label="Seek"
              className="settings-slider w-full"
              disabled={tts.isLoading}
              max={Math.max(tts.duration, 0.1)}
              min={0}
              onBlur={tts.cancelScrub}
              onChange={tts.handleScrubChange}
              onPointerDown={tts.handleScrubPointerDown}
              onPointerUp={tts.commitScrub}
              step="any"
              style={sliderStyle(seekPercent)}
              type="range"
              value={seekValue}
            />
            <div className="mt-0.5 flex items-center justify-between text-3xs tabular-nums text-muted-foreground">
              <span>{formatTime(seekValue)}</span>
              <span>{formatTime(tts.duration)}</span>
            </div>
          </div>

          <div className="mt-1 flex items-center gap-0.5">
            <Button
              aria-label="Back 10 seconds"
              disabled={tts.isLoading}
              size="icon-sm"
              variant="ghost"
              onClick={() => tts.skipPlayback(-10)}
            >
              <RotateCcwIcon />
            </Button>
            <Button
              aria-label="Forward 10 seconds"
              disabled={tts.isLoading}
              size="icon-sm"
              variant="ghost"
              onClick={() => tts.skipPlayback(10)}
            >
              <RotateCwIcon />
            </Button>
            <div className="ml-auto flex items-center gap-1.5">
              <Button
                aria-label={tts.volume === 0 ? "Unmute" : "Mute"}
                size="icon-sm"
                variant="ghost"
                onClick={() => tts.setPlaybackVolume(tts.volume === 0 ? 1 : 0)}
              >
                {tts.volume === 0 ? <VolumeXIcon /> : <Volume2Icon />}
              </Button>
              <input
                aria-label="Volume"
                className="settings-slider w-20"
                max={1}
                min={0}
                onChange={tts.handleVolume}
                step={0.05}
                style={sliderStyle(tts.volume * 100)}
                type="range"
                value={tts.volume}
              />
            </div>
            <Button
              aria-label="Playback speed"
              size="icon-sm"
              variant="ghost"
              onClick={tts.cycleRate}
            >
              <span className="text-3xs tabular-nums">{tts.rate}×</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
