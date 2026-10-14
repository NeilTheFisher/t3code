import { type EnvironmentId, type MessageId } from "@t3tools/contracts";
import { memo } from "react";
import { ActivityIndicator, Pressable, type ColorValue } from "react-native";

import { SymbolView } from "../../components/AppSymbol";
import { playMessageTts, stopMessageTts, useMessageTtsStatus } from "./messageTtsPlayback";

/**
 * Play/stop control for an assistant message. One module-level player drives
 * every button, so starting a second message stops the first.
 */
export const MessageTtsButton = memo(function MessageTtsButton(props: {
  readonly messageId: MessageId;
  readonly threadId: string;
  readonly environmentId: EnvironmentId;
  readonly text: string;
  readonly tintColor?: ColorValue;
}) {
  const { isLoading, isPlaying } = useMessageTtsStatus(props.messageId);
  const disabled = props.text.trim().length === 0;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={isPlaying ? "Stop playback" : "Play message aloud"}
      accessibilityState={{ busy: isLoading, selected: isPlaying }}
      disabled={disabled}
      hitSlop={8}
      onPress={() => {
        if (isPlaying) stopMessageTts();
        else void playMessageTts(props.messageId, props.threadId, props.environmentId, props.text);
      }}
      className="size-7 items-center justify-center"
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={props.tintColor} />
      ) : (
        <SymbolView name={isPlaying ? "stop.fill" : "play"} size={13} tintColor={props.tintColor} />
      )}
    </Pressable>
  );
});
