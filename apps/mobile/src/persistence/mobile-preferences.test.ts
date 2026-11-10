import { describe, expect, it } from "@effect/vitest";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { beforeEach, vi } from "vite-plus/test";

const { values, getItemAsync, setItemAsync, deleteItemAsync, openDatabaseAsync } = vi.hoisted(
  () => {
    const values = new Map<string, string>();
    return {
      values,
      getItemAsync: vi.fn(async (key: string) => values.get(key) ?? null),
      setItemAsync: vi.fn(async (key: string, value: string) => {
        values.set(key, value);
      }),
      deleteItemAsync: vi.fn(async (key: string) => {
        values.delete(key);
      }),
      openDatabaseAsync: vi.fn(),
    };
  },
);

vi.mock("expo-secure-store", () => ({ getItemAsync, setItemAsync, deleteItemAsync }));
vi.mock("expo-sqlite", () => ({ openDatabaseAsync }));

import * as MobileDatabase from "./mobile-database";
import * as MobilePreferences from "./mobile-preferences";
import * as MobileSecureStorage from "./mobile-secure-storage";

/** Preferences written before the database existed, migrated on the next load. */
const LEGACY_KEY = "t3code.preferences";

async function sqliteDatabase() {
  const { DatabaseSync } = await import("node:sqlite");
  const sqlite = new DatabaseSync(":memory:");
  const database = {
    execAsync: async (sql: string) => {
      sqlite.exec(sql);
    },
    runAsync: async (sql: string, ...args: Array<string | number>) =>
      sqlite.prepare(sql).run(...args),
    getFirstAsync: async (sql: string, ...args: Array<string | number>) =>
      sqlite.prepare(sql).get(...args),
    getAllAsync: async (sql: string, ...args: Array<string | number>) =>
      sqlite.prepare(sql).all(...args),
    withExclusiveTransactionAsync: async (run: (transaction: unknown) => Promise<void>) => {
      await run(database);
    },
    closeAsync: async () => {
      sqlite.close();
    },
  };
  openDatabaseAsync.mockResolvedValueOnce(database);
  return sqlite;
}

const preferencesLayer = MobilePreferences.layer.pipe(
  Layer.provide(Layer.merge(MobileDatabase.layer, MobileSecureStorage.layer)),
);

const loadPreferences = Effect.gen(function* () {
  const store = yield* MobilePreferences.MobilePreferencesStore;
  return yield* store.load;
}).pipe(Effect.provide(preferencesLayer));

function load() {
  return Effect.scoped(loadPreferences);
}

beforeEach(() => {
  values.clear();
  getItemAsync.mockClear();
  setItemAsync.mockClear();
  deleteItemAsync.mockClear();
  openDatabaseAsync.mockReset();
});

describe("mobile narration voice", () => {
  it.effect("starts on the model's default voice", () =>
    Effect.gen(function* () {
      yield* Effect.promise(sqliteDatabase);

      expect(yield* load()).toEqual({ speakVoice: "Delia" });
    }),
  );

  it.effect("gives a legacy payload without a voice the default", () =>
    Effect.gen(function* () {
      yield* Effect.promise(sqliteDatabase);
      values.set(LEGACY_KEY, JSON.stringify({ speakAutoplay: false }));

      expect(yield* load()).toEqual({ speakAutoplay: false, speakVoice: "Delia" });
      expect(values.has(LEGACY_KEY)).toBe(false);
    }),
  );

  it.effect("keeps a stored catalog voice", () =>
    Effect.gen(function* () {
      yield* Effect.promise(sqliteDatabase);
      values.set(LEGACY_KEY, JSON.stringify({ speakVoice: "Trevor" }));

      expect((yield* load()).speakVoice).toBe("Trevor");
    }),
  );

  it.effect("ignores a stored Kokoro id", () =>
    Effect.gen(function* () {
      yield* Effect.promise(sqliteDatabase);
      values.set(LEGACY_KEY, JSON.stringify({ speakVoice: "af_heart" }));

      expect((yield* load()).speakVoice).toBe("Delia");
    }),
  );
});
