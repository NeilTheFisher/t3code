import { describe, expect, it } from "vite-plus/test";

import { SETTINGS_SEARCH_ITEMS } from "./settingsSearch";

// Every searchable settings entry is supposed to point at a real control. Rebase
// merges can silently drop upstream's `{...searchableSetting(id)}` rows when the
// fork has rewritten the surrounding region, which is how the context window
// indicator toggle went missing. This test fails as soon as an entry loses its
// control.
const settingsSources = Object.entries(
  import.meta.glob("./**/*.{ts,tsx}", {
    query: "?raw",
    import: "default",
    eager: true,
  }) as Record<string, string>,
)
  .filter(([path]) => !path.includes(".test."))
  .map(([, source]) => source);

const renderedSettingIds = new Set<string>();
for (const source of settingsSources) {
  for (const match of source.matchAll(/searchableSetting\(\s*"([^"]+)"/g)) {
    if (match[1]) {
      renderedSettingIds.add(match[1]);
    }
  }
}

// Search entries that intentionally have no rendered control: upstream rows the
// fork has not ported yet, plus anchor ids rendered without searchableSetting.
const NON_CONTROL_SEARCH_IDS = new Set<string>([
  // Server-scoped setting; the fork's unified settings do not carry it yet.
  "continue-threads-after-server-update",
  // Anchor ids (rendered with a raw id, not a searchableSetting row).
  "device-hosts",
  "browser-default-profile",
]);

// Settings the fork relies on and must never lose to a merge. Kept separate from
// the general coverage check so a drop names the feature instead of an id list.
const FORK_CRITICAL_SETTING_IDS = [
  "legacy-context-window-indicator",
  "composer-collapse",
  "proactive-panels",
  "skills-in-slash-menu",
] as const;

describe("settings search coverage", () => {
  it("renders a control for every searchable settings entry", () => {
    const missing = SETTINGS_SEARCH_ITEMS.map((item) => item.id).filter(
      (id) => !renderedSettingIds.has(id) && !NON_CONTROL_SEARCH_IDS.has(id),
    );

    expect(missing).toEqual([]);
  });

  it("keeps the fork-critical settings wired so rebases cannot silently drop them", () => {
    const dropped = FORK_CRITICAL_SETTING_IDS.filter((id) => !renderedSettingIds.has(id));

    expect(dropped).toEqual([]);
  });

  it("does not allow a fork-critical setting to be excused as a non-control entry", () => {
    const excused = FORK_CRITICAL_SETTING_IDS.filter((id) => NON_CONTROL_SEARCH_IDS.has(id));

    expect(excused).toEqual([]);
  });
});
