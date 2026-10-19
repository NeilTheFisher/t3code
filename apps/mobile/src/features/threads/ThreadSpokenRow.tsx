import type { EnvironmentId } from "@t3tools/contracts";
import type { SpeakReference } from "@t3tools/shared/speak";
import { useAtomValue } from "@effect/atom-react";
import { memo, useEffect, useState } from "react";
import { ActivityIndicator, Pressable, View, type ColorValue } from "react-native";
import { AsyncResult } from "effect/reactivity";

import { SymbolView } from "../../components/AppSymbol";
import { AppText as Text } from "../../components/AppText";
import { mobilePreferencesAtom } from "../../state/preferences";
import { playMessageTts, stopMessageTts, useMessageTtsStatus } from "./messageTtsPlayback";

/**
 * Autoplayed utterance ids, so revisiting a thread never replays speech the
 * reader already heard. Session-scoped (web persists this in localStorage;
 * mobile has no client-settings sync, so this resets on relaunch).
 */
const playedSpokenIds = new Set<string>();

/**
 * In-thread rendering of a completed `t3_speak` call: the utterance text with
 * a play/stop control, matching web's SpokenTimelineRow. Playback runs through
 * the shared message-TTS engine, so it also drives the mini-player.
 */
export const ThreadSpokenRow = memo(function ThreadSpokenRow(props: {
  readonly entryId: string;
  readonly threadId: string;
  readonly environmentId: EnvironmentId;
  readonly speak: SpeakReference;
  readonly tintColor?: ColorValue;
}) {
  const { entryId, threadId, environmentId, speak } = props;
  const [expanded, setExpanded] = useState(false);
  const { isLoading, isPlaying } = useMessageTtsStatus(entryId);
  const preferences = useAtomValue(mobilePreferencesAtom);
  const autoplay = !AsyncResult.isSuccess(preferences) || preferences.value.speakAutoplay !== false;

  // Autoplay once per utterance when the agent sends one, gated on the
  // device-local autoplay setting.
  useEffect(() => {
    if (!autoplay || playedSpokenIds.has(entryId)) return;
    playedSpokenIds.add(entryId);
    void playMessageTts(entryId, threadId, environmentId, [speak.text]);
  }, [autoplay, entryId, threadId, environmentId, speak.text]);

  return (
    <View className="mb-1.5 flex-row items-start gap-2 rounded-2xl border border-border bg-card px-3 py-2">
      <SymbolView name="speaker.wave.2" size={14} tintColor={props.tintColor} />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={expanded ? "Collapse spoken message" : "Expand spoken message"}
        onPress={() => setExpanded((value) => !value)}
        className="min-w-0 flex-1"
      >
        <Text
          className="min-w-0 flex-1 text-xs text-muted-foreground"
          numberOfLines={expanded ? undefined : 1}
        >
          {speak.text}
        </Text>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={isPlaying ? "Stop playback" : "Play aloud"}
        accessibilityState={{ busy: isLoading, selected: isPlaying }}
        hitSlop={8}
        onPress={() => {
          if (isPlaying) stopMessageTts();
          else {
            playedSpokenIds.add(entryId);
            void playMessageTts(entryId, threadId, environmentId, [speak.text]);
          }
        }}
        className="size-7 items-center justify-center"
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={props.tintColor} />
        ) : (
          <SymbolView
            name={isPlaying ? "stop.fill" : "play"}
            size={13}
            tintColor={props.tintColor}
          />
        )}
      </Pressable>
    </View>
  );
});
