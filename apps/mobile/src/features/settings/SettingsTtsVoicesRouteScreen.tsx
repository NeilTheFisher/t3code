import { useAtomSet, useAtomValue } from "@effect/atom-react";
import { useNavigation, type StaticScreenProps } from "@react-navigation/native";
import { PHONON_DEFAULT_VOICE, phononVoiceFor } from "@t3tools/client-runtime/phonon-voices";
import { type EnvironmentId, MessageId } from "@t3tools/contracts";
import { AsyncResult } from "effect/reactivity";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { FlatList, View } from "react-native";

import { AppText as Text } from "../../components/ui/AppText";
import { Button } from "../../components/ui/Button";
import { EmptyState } from "../../components/ui/EmptyState";
import { ListChoiceRow } from "../../components/ui/ListChoiceRow";
import { cn } from "../../lib/cn";
import { mobilePreferencesAtom, updateMobilePreferencesAtom } from "../../state/preferences";
import { PullRequestSearchSheet } from "../pull-requests/PullRequestSearchSheet";
import { playMessageTts, stopMessageTts, useMessageTtsStatus } from "../threads/messageTtsPlayback";
import { hasPhononHost } from "../threads/phononEngine";
import { PhononEngineHost } from "../threads/PhononEngineHost";
import { useTtsVoices } from "../threads/ttsVoices";

const PREVIEW_MESSAGE_ID = MessageId.make("__tts_voice_preview__");
const PREVIEW_THREAD_ID = "__tts_voice_preview__";

/** Same sentence as web's Test button, so both clients audition a voice alike. */
const previewText = (voice: string) =>
  `This is the ${voice} voice. The quick brown fox jumps over the lazy dog.`;

/**
 * The speech model's own voice names. The environment serves the pinned
 * catalog; offline the bundled names stand in, so choosing a voice never waits.
 * The sheet stays open on selection so several voices can be compared, and the
 * last choice is saved when it closes.
 */
export function SettingsTtsVoicesRouteScreen({
  route,
}: StaticScreenProps<{ readonly environmentId: EnvironmentId | null }>) {
  const navigation = useNavigation();
  const savePreferences = useAtomSet(updateMobilePreferencesAtom);
  const environmentId = route.params.environmentId;
  const voices = useTtsVoices(environmentId);
  const preferences = useAtomValue(mobilePreferencesAtom);
  const [query, setQuery] = useState("");
  // Null until the reader picks one, so a late preference load still wins.
  const [draftOverride, setDraftOverride] = useState<string | null>(null);
  const [previewVoice, setPreviewVoice] = useState<string | null>(null);
  const preview = useMessageTtsStatus(PREVIEW_MESSAGE_ID);
  const stored = AsyncResult.isSuccess(preferences) ? preferences.value.speakVoice : undefined;
  const selected = stored === undefined ? PHONON_DEFAULT_VOICE : phononVoiceFor(stored);
  const draft = draftOverride ?? selected;
  // A stored name the catalog no longer lists still needs a row to be seen in.
  const options = voices.includes(draft) ? voices : [draft, ...voices];
  const needle = query.trim().toLowerCase();
  const filtered = options.filter((voice) => voice.toLowerCase().includes(needle));
  const preferencesLoaded = AsyncResult.isSuccess(preferences) && !preferences.waiting;
  // A host behind the sheet (the open thread) serves previews; from Settings
  // there is none, so the sheet brings its own engine page.
  const [ownsEngine] = useState(() => environmentId !== null && !hasPhononHost(environmentId));

  const committedRef = useRef(false);
  const previewingRef = useRef(false);

  const commitDraft = (draftValue: string, selectedValue: string, loaded: boolean) => {
    if (committedRef.current) return;
    committedRef.current = true;
    if (!loaded || draftValue === selectedValue) return;
    savePreferences({ speakVoice: draftValue });
  };

  const closeOut = useEffectEvent(() => {
    commitDraft(draft, selected, preferencesLoaded);
    if (previewingRef.current) stopMessageTts();
  });

  // Closing by swipe or back applies the last choice too.
  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- commits the draft and stops an audition when the sheet unmounts
  useEffect(() => () => closeOut(), []);

  const audition = (voice: string) => {
    if (environmentId === null) return;
    const playingThis = previewVoice === voice && (preview.isPlaying || preview.isLoading);
    if (playingThis) {
      stopMessageTts();
      previewingRef.current = false;
      setPreviewVoice(null);
      return;
    }
    if (previewVoice !== null) stopMessageTts();
    previewingRef.current = true;
    setPreviewVoice(voice);
    void playMessageTts(
      PREVIEW_MESSAGE_ID,
      PREVIEW_THREAD_ID,
      environmentId,
      [previewText(voice)],
      voice,
    );
  };

  return (
    <PullRequestSearchSheet
      title="Voice"
      placeholder="Find a voice"
      closeAccessibilityLabel="Close voice picker"
      clearAccessibilityLabel="Clear voice search"
      query={query}
      onQueryChange={setQuery}
    >
      {({ paddingBottom }) => (
        <>
          {ownsEngine && environmentId !== null ? (
            <PhononEngineHost environmentId={environmentId} />
          ) : null}
          <FlatList
            data={filtered}
            keyExtractor={(voice) => voice}
            className="flex-1"
            contentInsetAdjustmentBehavior="automatic"
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom }}
            ListHeaderComponent={
              preview.detail !== null ? (
                <Text textRole="footnote" className="px-1 pb-3 text-foreground-muted">
                  {preview.detail}
                </Text>
              ) : undefined
            }
            ListFooterComponent={
              <View className="gap-3 pt-3">
                <Button
                  label="Done"
                  tone="primary"
                  fullWidth
                  onPress={() => {
                    commitDraft(draft, selected, preferencesLoaded);
                    navigation.goBack();
                  }}
                />
                <Text textRole="footnote" className="px-1 text-foreground-muted">
                  Names come from the speech model’s catalog. Play a voice to hear it here; the last
                  one you choose is used for narration.
                </Text>
              </View>
            }
            renderItem={({ item, index }) => (
              <View
                className={cn(
                  "overflow-hidden",
                  index === 0 && "rounded-t-2xl",
                  index === filtered.length - 1 && "rounded-b-2xl",
                )}
              >
                <VoiceRow
                  voice={item}
                  selected={item === draft}
                  separated={index > 0}
                  canAudition={environmentId !== null}
                  auditioning={previewVoice === item && (preview.isPlaying || preview.isLoading)}
                  loading={previewVoice === item && preview.isLoading}
                  onSelect={() => setDraftOverride(item)}
                  onAudition={() => audition(item)}
                />
              </View>
            )}
            ListEmptyComponent={
              <EmptyState title="No voices match" detail="Try another name." variant="plain" />
            }
          />
        </>
      )}
    </PullRequestSearchSheet>
  );
}

function VoiceRow(props: {
  readonly voice: string;
  readonly selected: boolean;
  readonly separated: boolean;
  readonly canAudition: boolean;
  readonly auditioning: boolean;
  readonly loading: boolean;
  readonly onSelect: () => void;
  readonly onAudition: () => void;
}) {
  return (
    <View
      className={cn(
        "flex-row items-center bg-grouped-card",
        props.separated && "border-t border-border-subtle",
      )}
    >
      <View className="min-w-0 flex-1">
        <ListChoiceRow label={props.voice} selected={props.selected} onPress={props.onSelect} />
      </View>
      <View className="pr-3">
        <Button
          label={props.auditioning ? "Stop" : "Test"}
          accessibilityLabel={
            props.auditioning ? `Stop ${props.voice} preview` : `Test ${props.voice} voice`
          }
          accessibilityHint="Plays a short phrase in this voice without closing the picker."
          tone="text"
          size="compact"
          loading={props.loading}
          disabled={!props.canAudition}
          onPress={props.onAudition}
        />
      </View>
    </View>
  );
}
