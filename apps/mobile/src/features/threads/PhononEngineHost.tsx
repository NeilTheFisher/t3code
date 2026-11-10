/**
 * Keeps a hidden WebView running the Phonon engine for the open thread. It is
 * mounted beside the thread, not the player: synthesis must finish before
 * playback starts, and the WebView may then be suspended without affecting the
 * native audio that is already on disk.
 */
import type { EnvironmentId } from "@t3tools/contracts";
import * as Option from "effect/Option";
import { useEffect, useRef } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

import { usePreparedConnection } from "../../state/session";
import {
  handlePhononMessage,
  PHONON_ENGINE_HTML,
  PHONON_ENGINE_PATH,
  registerPhononHost,
  setPhononHostVoice,
} from "./phononEngine";
import { useSpeakVoice } from "./ttsVoices";

export function PhononEngineHost({ environmentId }: { environmentId: EnvironmentId }) {
  const prepared = usePreparedConnection(environmentId);
  const base = Option.match(prepared, { onNone: () => null, onSome: (value) => value.httpBaseUrl });
  const view = useRef<WebView<object>>(null);
  const voice = useSpeakVoice();
  // Read by the re-registration below without making the voice its own trigger:
  // changing voices must not tear down an in-flight synthesis.
  const voiceRef = useRef(voice);

  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- hands the selected voice to the hidden page
  useEffect(() => {
    voiceRef.current = voice;
    setPhononHostVoice(voice);
  }, [voice]);

  // oxlint-disable-next-line t3code/no-unreasoned-state-sync -- registers the native bridge for an external WebView
  useEffect(() => {
    const current = view.current;
    if (base === null || current === null) return;
    return registerPhononHost(environmentId, current, voiceRef.current);
  }, [base, environmentId]);

  if (base === null) return null;
  const engineBase = `${base.replace(/\/+$/, "")}${PHONON_ENGINE_PATH}`;
  return (
    <View
      pointerEvents="none"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={{ position: "absolute", left: 0, bottom: 0, width: 1, height: 1, opacity: 0 }}
    >
      <WebView<object>
        key={engineBase}
        ref={view}
        source={{ html: PHONON_ENGINE_HTML, baseUrl: engineBase }}
        originWhitelist={["*"]}
        javaScriptEnabled
        domStorageEnabled
        cacheEnabled
        allowFileAccess={false}
        allowsLinkPreview={false}
        mixedContentMode="compatibility"
        onMessage={handlePhononMessage}
        style={{ width: 1, height: 1, backgroundColor: "transparent" }}
      />
    </View>
  );
}
