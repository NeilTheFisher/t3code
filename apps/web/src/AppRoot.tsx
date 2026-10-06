import { RouterProvider } from "@tanstack/react-router";

import { ElectronBrowserHost } from "./browser/ElectronBrowserHost";
import { MiniPlayerBar } from "./components/chat/MiniPlayerBar";
import { QuitHoldOverlay } from "./components/QuitHoldOverlay";
import { VoiceSessionProvider } from "./components/voice/VoiceSession";
import { AppAtomRegistryProvider } from "./rpc/atomRegistry";
import type { AppRouter } from "./router";

// Keep webviews outside the router but inside its atom registry so route changes preserve them.
export function AppRoot({ router }: { readonly router: AppRouter }) {
  return (
    <AppAtomRegistryProvider>
      <VoiceSessionProvider>
        <RouterProvider router={router} />
        <ElectronBrowserHost />
        <QuitHoldOverlay />
        <MiniPlayerBar router={router} />
      </VoiceSessionProvider>
    </AppAtomRegistryProvider>
  );
}
