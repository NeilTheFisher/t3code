import { memo } from "react";
import { ActivityIndicator, Pressable, View } from "react-native";

import { AppText as Text } from "../../components/AppText";
import { SymbolView } from "../../components/AppSymbol";
import {
  pauseMessageTts,
  resumeMessageTts,
  stopMessageTts,
  useThreadTtsPlayback,
} from "./messageTtsPlayback";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const wholeSeconds = Math.floor(seconds % 60);
  return `${minutes}:${wholeSeconds.toString().padStart(2, "0")}`;
}

/**
 * Compact narration bar that sits above this thread's composer while a message
 * in this thread is playing. Reads the module-level player, so it survives the
 * message rows recycling and shows playback started from any play button.
 */
export const ThreadTtsMiniPlayer = memo(function ThreadTtsMiniPlayer(props: {
  readonly threadId: string;
}) {
  const playback = useThreadTtsPlayback(props.threadId);

  if (playback === null) return null;

  const { isLoading, isPlaying, isPaused, currentTime, duration } = playback;
  const progressFraction = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;

  return (
    <View className="mb-1.5 rounded-2xl border border-border bg-card px-3 py-2">
      <View className="flex-row items-center gap-3">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? "Pause narration" : "Play narration"}
          accessibilityState={{ busy: isLoading, disabled: isLoading }}
          disabled={isLoading}
          hitSlop={8}
          onPress={() => {
            if (isPlaying) pauseMessageTts();
            else if (isPaused) resumeMessageTts();
          }}
          className="size-8 items-center justify-center rounded-full border border-border bg-subtle active:opacity-70"
        >
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <SymbolView
              name={isPlaying ? "pause.fill" : "play"}
              size={14}
              tintColorClassName="accent-foreground"
              type="monochrome"
            />
          )}
        </Pressable>

        <View className="min-w-0 flex-1 gap-1">
          <Text className="font-t3-medium text-xs text-foreground" numberOfLines={1}>
            {playback.title ?? "Narrating"}
          </Text>
          <View className="flex-row items-center gap-2">
            <View
              accessibilityRole="progressbar"
              accessibilityLabel="Narration progress"
              accessibilityValue={{
                min: 0,
                max: Math.max(1, Math.round(duration)),
                now: Math.round(currentTime),
              }}
              className="h-3 flex-1 justify-center"
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
              {duration > 0 ? ` / ${formatTime(duration)}` : ""}
            </Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Stop narration"
          hitSlop={8}
          onPress={stopMessageTts}
          className="size-7 items-center justify-center active:opacity-70"
        >
          <SymbolView
            name="xmark"
            size={13}
            tintColorClassName="accent-icon-muted"
            type="monochrome"
          />
        </Pressable>
      </View>
    </View>
  );
});
