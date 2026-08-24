import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vite-plus/test";
import {
  ProviderDriverKind,
  ProviderInstanceId,
  type ServerProvider,
  type ServerProviderModel,
} from "@t3tools/contracts";

import { deriveProviderModelsForDisplay, ProviderInstanceCard } from "./ProviderInstanceCard";

describe("deriveProviderModelsForDisplay", () => {
  it("uses current config custom models instead of stale live custom rows", () => {
    const liveModels: ReadonlyArray<ServerProviderModel> = [
      {
        slug: "server-model",
        name: "Server Model",
        isCustom: false,
        capabilities: null,
      },
      {
        slug: "removed-custom",
        name: "Removed Custom",
        isCustom: true,
        capabilities: null,
      },
      {
        slug: "kept-custom",
        name: "Kept Custom",
        isCustom: true,
        capabilities: null,
      },
    ];

    expect(
      deriveProviderModelsForDisplay({
        liveModels,
        customModels: [{ slug: "kept-custom", name: "kept-custom", capabilities: null }],
      }).map((model) => model.slug),
    ).toEqual(["server-model", "kept-custom"]);
  });

  it("prefers the entry's name and capabilities over the stale live custom row", () => {
    const liveCapabilities = { optionDescriptors: [] };
    const customCapabilities = {
      optionDescriptors: [
        {
          id: "reasoningEffort",
          label: "Reasoning",
          type: "select" as const,
          options: [{ id: "high", label: "High", isDefault: true }],
          currentValue: "high",
        },
      ],
    };
    const liveModels: ReadonlyArray<ServerProviderModel> = [
      { slug: "bare", name: "bare", isCustom: true, capabilities: liveCapabilities },
      { slug: "named", name: "named", isCustom: true, capabilities: liveCapabilities },
    ];

    const display = deriveProviderModelsForDisplay({
      liveModels,
      customModels: [
        { slug: "bare", name: "bare", capabilities: null },
        { slug: "named", name: "My Model", capabilities: customCapabilities },
      ],
    });

    // A bare entry keeps the driver default the server filled in.
    expect(display[0]).toEqual({
      slug: "bare",
      name: "bare",
      isCustom: true,
      capabilities: liveCapabilities,
    });
    expect(display[1]).toEqual({
      slug: "named",
      name: "My Model",
      isCustom: true,
      capabilities: customCapabilities,
    });
  });

  it("shows a redacted provider email in the editor header status line", () => {
    const instanceId = ProviderInstanceId.make("codex");
    const driver = ProviderDriverKind.make("codex");
    const liveProvider: ServerProvider = {
      instanceId,
      driver,
      enabled: true,
      installed: true,
      version: "1.0.0",
      status: "ready",
      auth: { status: "authenticated", email: "developer@example.com" },
      checkedAt: "2026-08-27T12:00:00.000Z",
      models: [],
      slashCommands: [],
      skills: [],
    };

    const markup = renderToStaticMarkup(
      createElement(ProviderInstanceCard, {
        instanceId,
        instance: { driver },
        driverOption: undefined,
        liveProvider,
        mode: "editor",
        onUpdate: () => undefined,
        hiddenModels: [],
        favoriteModels: [],
        modelOrder: [],
        onHiddenModelsChange: () => undefined,
        onFavoriteModelsChange: () => undefined,
        onModelOrderChange: () => undefined,
      }),
    );

    expect(markup).toContain("Authenticated as");
    expect(markup).toContain('aria-label="Toggle account email visibility"');
    expect(markup).toContain("blur-xs");
    expect(markup).not.toContain("developer@example.com");
  });
  it("surfaces a failed probe message in both the list row and the editor", () => {
    const instanceId = ProviderInstanceId.make("codex_work");
    const driver = ProviderDriverKind.make("codex");
    const message =
      "Codex app-server provider probe failed: Cannot create Codex shadow home entry 'auth.json' because '/home/me/.codex-t3/work/auth.json' already exists and is not a symlink.";
    const liveProvider: ServerProvider = {
      instanceId,
      driver,
      enabled: true,
      installed: true,
      version: null,
      status: "error",
      auth: { status: "unknown" },
      checkedAt: "2026-08-28T12:00:00.000Z",
      models: [],
      slashCommands: [],
      skills: [],
      message,
    };
    const props = {
      instanceId,
      instance: { driver },
      driverOption: undefined,
      liveProvider,
      onUpdate: () => undefined,
      hiddenModels: [],
      favoriteModels: [],
      modelOrder: [],
      onHiddenModelsChange: () => undefined,
      onFavoriteModelsChange: () => undefined,
      onModelOrderChange: () => undefined,
    } as const;

    for (const mode of ["list", "editor"] as const) {
      const markup = renderToStaticMarkup(createElement(ProviderInstanceCard, { ...props, mode }));
      expect(markup).toContain("Unavailable");
      expect(markup).toContain("is not a symlink");
    }
  });

  it("shows provider usage limits in the list row and the editor", () => {
    const instanceId = ProviderInstanceId.make("claude");
    const driver = ProviderDriverKind.make("claude");
    const liveProvider: ServerProvider = {
      instanceId,
      driver,
      enabled: true,
      installed: true,
      version: null,
      status: "ready",
      auth: { status: "authenticated" },
      checkedAt: "2026-09-08T12:00:00.000Z",
      models: [],
      slashCommands: [],
      skills: [],
      usageLimits: {
        checkedAt: "2026-09-08T12:00:00.000Z",
        windows: [
          { id: "session", kind: "session", label: "Session", usedPercent: 30 },
          { id: "weekly-fable", kind: "weekly", label: "Weekly (Fable)", usedPercent: 26 },
        ],
      },
    };
    const props = {
      instanceId,
      instance: { driver, enabled: true },
      driverOption: undefined,
      liveProvider,
      timestampFormat: "24-hour" as const,
      onUpdate: () => undefined,
      hiddenModels: [],
      favoriteModels: [],
      modelOrder: [],
      onHiddenModelsChange: () => undefined,
      onFavoriteModelsChange: () => undefined,
      onModelOrderChange: () => undefined,
    } as const;

    const listMarkup = renderToStaticMarkup(
      createElement(ProviderInstanceCard, { ...props, mode: "list" }),
    );
    expect(listMarkup).toContain("Session");
    expect(listMarkup).toContain("70%");
    expect(listMarkup).toContain("Weekly (Fable)");

    const editorMarkup = renderToStaticMarkup(
      createElement(ProviderInstanceCard, { ...props, mode: "editor" }),
    );
    expect(editorMarkup).toContain("Provider limits");
    expect(editorMarkup).toContain("70% remaining");
    expect(editorMarkup).toContain("Weekly (Fable)");
  });

  it("hides provider usage limits without a snapshot or on a disabled instance", () => {
    const instanceId = ProviderInstanceId.make("claude");
    const driver = ProviderDriverKind.make("claude");
    const withLimits: ServerProvider = {
      instanceId,
      driver,
      enabled: true,
      installed: true,
      version: null,
      status: "ready",
      auth: { status: "unknown" },
      checkedAt: "2026-09-08T12:00:00.000Z",
      models: [],
      slashCommands: [],
      skills: [],
      usageLimits: {
        checkedAt: "2026-09-08T12:00:00.000Z",
        windows: [{ id: "session", kind: "session", label: "Session", usedPercent: 30 }],
      },
    };
    const baseProps = {
      instanceId,
      driverOption: undefined,
      timestampFormat: "24-hour" as const,
      onUpdate: () => undefined,
      hiddenModels: [],
      favoriteModels: [],
      modelOrder: [],
      onHiddenModelsChange: () => undefined,
      onFavoriteModelsChange: () => undefined,
      onModelOrderChange: () => undefined,
    } as const;

    const noSnapshot = renderToStaticMarkup(
      createElement(ProviderInstanceCard, {
        ...baseProps,
        instance: { driver, enabled: true },
        liveProvider: undefined,
        mode: "editor",
      }),
    );
    expect(noSnapshot).not.toContain("Provider limits");

    const disabled = renderToStaticMarkup(
      createElement(ProviderInstanceCard, {
        ...baseProps,
        instance: { driver, enabled: false },
        liveProvider: withLimits,
        mode: "editor",
      }),
    );
    expect(disabled).not.toContain("Provider limits");
    expect(disabled).not.toContain("Session");
  });
});
