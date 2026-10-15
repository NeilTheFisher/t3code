import { memo, useState } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";

import { AppText as Text } from "../../components/AppText";
import { SymbolView } from "../../components/AppSymbol";
import {
  NARRATION_RATES,
  pauseMessageTts,
  resumeMessageTts,
  seekToRatio,
  setNarrationRate,
  skipNarration,
  stopMessageTts,
  useThreadTtsPlayback,
} from "./messageTtsPlayback";

/** Seconds a skip button moves the narration. */
const SKIP_SECONDS = 15;

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const wholeSeconds = Math.floor(seconds % 60);
  return `${minutes}:${wholeSeconds.toString().padStart(2, "0")}`;
}

/**
 * Compact narration bar docked above this thread's composer while a message in
 * this thread is playing. Reads the module-level player, so it survives message
 * rows recycling and shows playback started from any play button.
 *
 * Play/pause, 15s skip back/forward, a speed pill, and stop. No volume control —
 * the device's own volume handles that.
 */
export const ThreadTtsMiniPlayer = memo(function ThreadTtsMiniPlayer(props: {
  readonly threadId: string;
}) {
  const playback = useThreadTtsPlayback(props.threadId);
  const [barWidth, setBarWidth] = useState(0);
  if (playback === null) return null;

  const { isLoading, isPlaying, isPaused, currentTime, duration, rate } = playback;
  const progressFraction = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;

  const cycleRate = () => {
    const index = NARRATION_RATES.indexOf(rate as (typeof NARRATION_RATES)[number]);
    setNarrationRate(NARRATION_RATES[(index + 1) % NARRATION_RATES.length]!);
  };

  return (
    <View className="mb-1.5 rounded-2xl border border-border bg-card px-3 py-1.5">
      <View className="flex-row items-center gap-1.5">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Skip narration back 15 seconds"
          hitSlop={8}
          onPress={() => skipNarration(-SKIP_SECONDS)}
          className="size-8 items-center justify-center rounded-full active:opacity-60"
        >
          <SymbolView
            name="chevron.left"
            size={16}
            tintColorClassName="accent-icon-muted"
            type="monochrome"
          />
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause narration" : "Play narration"}
          accessibilityState={{ busy: isLoading, disabled: isLoading }}
          disabled={isLoading}
          hitSlop={6}
          onPress={() => {
            if (isPlaying) pauseMessageTts();
            else if (isPaused) resumeMessageTts();
          }}
          className="size-9 items-center justify-center rounded-full border border-border bg-subtle active:opacity-70"
        >
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <SymbolView
              name={isPlaying ? "pause.fill" : "play"}
              size={16}
              tintColorClassName="accent-foreground"
              type="monochrome"
            />
          )}
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Skip narration forward 15 seconds"
          hitSlop={8}
          onPress={() => skipNarration(SKIP_SECONDS)}
          className="size-8 items-center justify-center rounded-full active:opacity-60"
        >
          <SymbolView
            name="chevron.right"
            size={16}
            tintColorClassName="accent-icon-muted"
            type="monochrome"
          />
        </Pressable>

        <View className="min-w-0 flex-1 gap-1">
          <Text className="font-t3-medium text-xs text-foreground" numberOfLines={1}>
            {playback.title ?? "Narrating"}
          </Text>
          <View className="flex-row items-center gap-1.5">
            <View
              onLayout={(event) => setBarWidth(event.nativeEvent.layout.width)}
              onStartShouldSetResponderCapture={() => true}
              onMoveShouldSetResponderCapture={() => true}
              onResponderGrant={(event) => {
                const x = event.nativeEvent.locationX;
                if (barWidth > 0 && Number.isFinite(x)) seekToRatio(x / barWidth);
              }}
              onResponderMove={(event) => {
                const x = event.nativeEvent.locationX;
                if (barWidth > 0 && Number.isFinite(x)) seekToRatio(x / barWidth);
              }}
              accessibilityRole="adjustable"
              accessibilityLabel="Narration position"
              accessibilityHint="Drag to seek"
              accessibilityValue={{
                min: 0,
                max: Math.max(1, Math.round(duration)),
                now: Math.round(currentTime),
              }}
              className="h-9 flex-1 justify-center"
            >
              <View className="h-1 overflow-hidden rounded-full bg-subtle-strong">
                <View
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${Math.round(progressFraction * 100)}%` }}
                />
              </View>
            </View>
            <Text className="text-2xs tabular-nums text-foreground-muted">
              {formatTime(currentTime)}
            </Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Playback speed ${rate} times`}
          accessibilityHint="Cycles through narration speeds"
          hitSlop={6}
          onPress={cycleRate}
          className="h-8 w-12 items-center justify-center rounded-full border border-border bg-subtle active:opacity-70"
        >
          <Text className="font-t3-medium text-xs tabular-nums text-foreground">{rate}×</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Stop narration"
          hitSlop={8}
          onPress={stopMessageTts}
          className="size-8 items-center justify-center active:opacity-70"
        >
          <SymbolView
            name="xmark"
            size={14}
            tintColorClassName="accent-icon-muted"
            type="monochrome"
          />
        </Pressable>
      </View>
    </View>
  );
});
