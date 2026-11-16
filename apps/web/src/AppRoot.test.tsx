import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import { RouterProvider } from "@tanstack/react-router";
import { describe, expect, it, vi } from "vite-plus/test";

import { ElectronBrowserHost } from "./browser/ElectronBrowserHost";
import { MiniPlayerBar } from "./components/chat/MiniPlayerBar";
import { QuitHoldOverlay } from "./components/QuitHoldOverlay";
import { VoiceSessionProvider } from "./components/voice/VoiceSession";
import { I18nProvider } from "./i18n/I18nProvider";
import { AppAtomRegistryProvider } from "./rpc/atomRegistry";
import type { AppRouter } from "./router";
import { AppRoot } from "./AppRoot";

vi.mock("react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react")>();
  return { ...actual, useEffect: () => {} };
});

describe("AppRoot", () => {
  it("shares the application atom registry with routed UI and renderer-wide desktop hosts", () => {
    const root = AppRoot({ router: {} as AppRouter });

    // I18nProvider wraps the registry so translated strings exist before any route renders.
    expect(root.type).toBe(I18nProvider);
    const i18nChildren = Children.toArray(
      (root as ReactElement<{ readonly children: ReactNode }>).props.children,
    );
    expect(i18nChildren).toHaveLength(1);
    const registry = i18nChildren[0] as ReactElement<{ readonly children: ReactNode }>;
    expect(registry.type).toBe(AppAtomRegistryProvider);
    const providerChildren = Children.toArray(registry.props.children);
    expect(providerChildren).toHaveLength(1);
    expect(isValidElement(providerChildren[0]) && providerChildren[0].type).toBe(
      VoiceSessionProvider,
    );

    const children = Children.toArray(
      (
        providerChildren[0] as ReactElement<{
          readonly children: ReactNode;
        }>
      ).props.children,
    );
    expect(children).toHaveLength(4);
    expect(isValidElement(children[0]) && children[0].type).toBe(RouterProvider);
    expect(isValidElement(children[1]) && children[1].type).toBe(ElectronBrowserHost);
    expect(isValidElement(children[2]) && children[2].type).toBe(QuitHoldOverlay);
    expect(isValidElement(children[3]) && children[3].type).toBe(MiniPlayerBar);
  });
});
