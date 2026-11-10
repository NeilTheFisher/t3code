import { useAtomSet, useAtomValue } from "@effect/atom-react";
import { useNavigation, type StaticScreenProps } from "@react-navigation/native";
import { PHONON_DEFAULT_VOICE, phononVoiceFor } from "@t3tools/client-runtime/phonon-voices";
import type { EnvironmentId } from "@t3tools/contracts";
import { AsyncResult } from "effect/reactivity";
import { useState } from "react";
import { FlatList, View } from "react-native";

import { AppText as Text } from "../../components/ui/AppText";
import { EmptyState } from "../../components/ui/EmptyState";
import { ListChoiceRow } from "../../components/ui/ListChoiceRow";
import { cn } from "../../lib/cn";
import { mobilePreferencesAtom, updateMobilePreferencesAtom } from "../../state/preferences";
import { PullRequestSearchSheet } from "../pull-requests/PullRequestSearchSheet";
import { useTtsVoices } from "../threads/ttsVoices";

/**
 * The speech model's own voice names. The environment serves the pinned
 * catalog; offline the bundled names stand in, so choosing a voice never waits.
 */
export function SettingsTtsVoicesRouteScreen({
  route,
}: StaticScreenProps<{ readonly environmentId: EnvironmentId | null }>) {
  const navigation = useNavigation();
  const savePreferences = useAtomSet(updateMobilePreferencesAtom);
  const voices = useTtsVoices(route.params.environmentId);
  const preferences = useAtomValue(mobilePreferencesAtom);
  const [query, setQuery] = useState("");
  const stored = AsyncResult.isSuccess(preferences) ? preferences.value.speakVoice : undefined;
  const selected = stored === undefined ? PHONON_DEFAULT_VOICE : phononVoiceFor(stored);
  // A stored name the catalog no longer lists still needs a row to be seen in.
  const options = voices.includes(selected) ? voices : [selected, ...voices];
  const needle = query.trim().toLowerCase();
  const filtered = options.filter((voice) => voice.toLowerCase().includes(needle));
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
        <FlatList
          data={filtered}
          keyExtractor={(voice) => voice}
          className="flex-1"
          contentInsetAdjustmentBehavior="automatic"
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom }}
          ListFooterComponent={
            <Text textRole="footnote" className="px-1 pt-3 text-foreground-muted">
              Names come from the speech model’s catalog. The next message you play uses this voice.
            </Text>
          }
          renderItem={({ item, index }) => (
            <View
              className={cn(
                "overflow-hidden",
                index === 0 && "rounded-t-2xl",
                index === filtered.length - 1 && "rounded-b-2xl",
              )}
            >
              <ListChoiceRow
                label={item}
                selected={item === selected}
                separated={index > 0}
                onPress={() => {
                  savePreferences({ speakVoice: item });
                  navigation.goBack();
                }}
              />
            </View>
          )}
          ListEmptyComponent={
            <EmptyState title="No voices match" detail="Try another name." variant="plain" />
          }
        />
      )}
    </PullRequestSearchSheet>
  );
}
