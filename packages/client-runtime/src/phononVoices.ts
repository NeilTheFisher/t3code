/**
 * The local speech engine's vocabulary: where its pinned voice catalog comes
 * from and which voice names it speaks. Shared by the web and mobile clients so
 * both offer the same list; the engine itself lives with each client.
 */

/** The voice an engine uses when the stored name is unknown to the model. */
export const PHONON_DEFAULT_VOICE = "Delia";

/**
 * Every English voice the pinned catalog lists, so the picker exists before the
 * environment's catalog answers and still works offline. Order matches the catalog.
 */
export const PHONON_FALLBACK_VOICES: readonly string[] = [
  "Zoey",
  "Juniper",
  "Everly",
  "Harper",
  "Hadley",
  "Delia",
  "Easton",
  "Micah",
  "Trevor",
  "Russell",
  "Preston",
  "Miles",
  "Maeve",
  "Freya",
  "Pippa",
  "Elodie-Rose",
  "Imogen",
  "Lottie",
  "Alfie",
  "Hugh",
  "Edwin",
  "Spencer",
  "Toby",
  "Teddy",
  "Bryony",
  "Captain Silas Blackwater",
  "Morwenna of the Deep",
  "Old Mortlake",
  "Azgorath",
  "Fennick the Young Elf",
  "The Thing Under the Stairs",
  "Vyrmathrax the Ancient",
  "Grub the Ogre",
  "Master Aldric",
  "The Snow Queen",
  "Sir Bramwell",
  "Fairy Godmother",
];

const MODEL_ASSET_PREFIX = "/v1/audio/model/";

/** Root the client fetches model files from: this environment's own proxy. */
export function modelAssetBase(serverUrl: string): string {
  return `${serverUrl.replace(/\/+$/, "")}${MODEL_ASSET_PREFIX}`;
}

/** The pinned voice catalog, shaped exactly like the upstream path it replaces. */
const VOICE_CATALOG_PATH =
  "gradium/phonon-voices/resolve/0ee17205f254b5abc43b266c8a0f215565c352f7/voices.jsonl";

export function voiceCatalogUrl(serverUrl: string): string {
  return `${modelAssetBase(serverUrl)}${VOICE_CATALOG_PATH}`;
}

/** Voice names the catalog reports for English, in catalog order. */
export function parseVoiceCatalog(text: string): string[] {
  const names: string[] = [];
  for (const line of text.split("\n")) {
    if (line.trim().length === 0) continue;
    try {
      const voice: unknown = JSON.parse(line);
      if (typeof voice !== "object" || voice === null) continue;
      const { name, language } = voice as { name?: unknown; language?: unknown };
      if (language !== "en" || typeof name !== "string" || name.length === 0) continue;
      if (!names.includes(name)) names.push(name);
    } catch {
      // A truncated line is the server's problem, not a reason to lose the list.
    }
  }
  return names;
}

/** The Kokoro voice ids the fork stored before Phonon; they are not migrated. */
const LEGACY_KOKORO_VOICE = /^(?:af|am|bf|bm)_[a-z]+$/;

/**
 * Voice name for the engine. Only the model's own catalog is valid, so a
 * stored Kokoro id falls back to the default instead of being guessed into a
 * different character.
 */
export function phononVoiceFor(stored: string): string {
  const trimmed = stored.trim();
  if (trimmed.length === 0 || LEGACY_KOKORO_VOICE.test(trimmed)) return PHONON_DEFAULT_VOICE;
  return trimmed;
}
