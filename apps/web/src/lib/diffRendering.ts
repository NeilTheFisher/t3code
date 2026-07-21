import { parseDiffFromFile } from "@pierre/diffs";
import { parsePatchFiles } from "@pierre/diffs/utils/parsePatchFiles";
import type { FileDiffMetadata } from "@pierre/diffs/types";

export const DIFF_THEME_NAMES = {
  light: "pierre-light",
  dark: "pierre-dark",
} as const;

export type DiffThemeName = (typeof DIFF_THEME_NAMES)[keyof typeof DIFF_THEME_NAMES];

export function resolveDiffThemeName(theme: "light" | "dark"): DiffThemeName {
  return theme === "dark" ? DIFF_THEME_NAMES.dark : DIFF_THEME_NAMES.light;
}

const FNV_OFFSET_BASIS_32 = 0x811c9dc5;
const FNV_PRIME_32 = 0x01000193;
const SECONDARY_HASH_SEED = 0x9e3779b9;
const SECONDARY_HASH_MULTIPLIER = 0x85ebca6b;

export function fnv1a32(
  input: string,
  seed = FNV_OFFSET_BASIS_32,
  multiplier = FNV_PRIME_32,
): number {
  let hash = seed >>> 0;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, multiplier) >>> 0;
  }
  return hash >>> 0;
}

export function buildPatchCacheKey(patch: string, scope = "diff-panel"): string {
  const normalizedPatch = patch.trim();
  const primary = fnv1a32(normalizedPatch, FNV_OFFSET_BASIS_32, FNV_PRIME_32).toString(36);
  const secondary = fnv1a32(
    normalizedPatch,
    SECONDARY_HASH_SEED,
    SECONDARY_HASH_MULTIPLIER,
  ).toString(36);
  return `${scope}:${normalizedPatch.length}:${primary}:${secondary}`;
}

export type RenderablePatch =
  | {
      kind: "files";
      files: FileDiffMetadata[];
      /** Binary file entries stripped from `files` — render as static rows, never as text diffs. */
      binaryFiles: FileDiffMetadata[];
    }
  | {
      kind: "raw";
      text: string;
      reason: string;
    };

export interface DiffLineStat {
  additions: number;
  deletions: number;
}

export function getDiffLineStat(files: ReadonlyArray<FileDiffMetadata>): DiffLineStat {
  return files.reduce<DiffLineStat>(
    (total, file) => {
      for (const hunk of file.hunks) {
        total.additions += hunk.additionLines;
        total.deletions += hunk.deletionLines;
      }

      return total;
    },
    { additions: 0, deletions: 0 },
  );
}

interface RenderablePatchOptions {
  /**
   * Pierre's partial-patch parser keeps hunk render starts in source-file
   * coordinates. Its virtualizer iterates partial patches as compact rows, so
   * review diffs need compact render starts while retaining collapsedBefore
   * for the "N unmodified lines" separator.
   */
  compactPartialHunkOffsets?: boolean;
  /**
   * Pierre only allows expanding unmodified regions when a diff carries full
   * file contents (isPartial=false); patch-parsed diffs never do. When a
   * patch was generated with full context (git diff -U999999), its single
   * hunk holds the whole file, so rebuild the diff from those contents to
   * make unmodified regions expandable.
   */
  upgradeFullContextFiles?: boolean;
}

function upgradeFullContextFile(file: FileDiffMetadata): FileDiffMetadata {
  if (!file.isPartial || file.hunks.length !== 1) return file;
  const [hunk] = file.hunks;
  if (!hunk || hunk.deletionStart > 1 || hunk.additionStart > 1) return file;
  try {
    const oldName = file.prevName ?? file.name ?? "";
    const newName = file.name ?? oldName;
    if (!newName) return file;
    const upgraded = parseDiffFromFile(
      {
        // Parsed partial lines keep their trailing newlines, so plain concat
        // reconstructs the exact file contents.
        name: oldName || newName,
        contents: file.deletionLines.join(""),
        ...(file.cacheKey ? { cacheKey: `${file.cacheKey}:full-old` } : {}),
      },
      {
        name: newName,
        contents: file.additionLines.join(""),
        ...(file.cacheKey ? { cacheKey: `${file.cacheKey}:full-new` } : {}),
      },
    );
    return upgraded.hunks.length > 0 ? upgraded : file;
  } catch {
    return file;
  }
}

export function compactPartialHunkOffsets(file: FileDiffMetadata): FileDiffMetadata {
  if (!file.isPartial) return file;

  let splitLineStart = 0;
  let unifiedLineStart = 0;
  const hunks = file.hunks.map((hunk) => {
    const compactHunk = {
      ...hunk,
      splitLineStart,
      unifiedLineStart,
    };
    splitLineStart += hunk.splitLineCount;
    unifiedLineStart += hunk.unifiedLineCount;
    return compactHunk;
  });

  return {
    ...file,
    hunks,
    splitLineCount: splitLineStart,
    unifiedLineCount: unifiedLineStart,
    ...(file.cacheKey ? { cacheKey: `${file.cacheKey}:compact-partial` } : {}),
  };
}

/**
 * Collect the paths of files that git reported as binary in a unified patch
 * ("Binary files a/x and b/x differ" or a "GIT binary patch" section).
 *
 * @pierre/diffs' parser silently drops these markers, leaving a hunk-less
 * FileDiffMetadata whose virtualized rendering can crash the app. We detect
 * them from the raw patch text so they can be rendered as static rows instead.
 */
export function extractBinaryPatchPaths(patch: string): Set<string> {
  const binaryPaths = new Set<string>();
  const lines = patch.split("\n");
  let currentPaths: string[] = [];
  for (const rawLine of lines) {
    const line = rawLine.endsWith("\r") ? rawLine.slice(0, -1) : rawLine;
    if (line.startsWith("diff --git ")) {
      currentPaths = [];
      const match = /^diff --git (?:"?a\/(.+?)"?) (?:"?b\/(.+?)"?)$/.exec(line);
      if (match) {
        for (const path of [match[1], match[2]]) {
          if (path) currentPaths.push(path);
        }
      }
      continue;
    }
    if (line.startsWith("Binary files ") || line === "GIT binary patch") {
      if (line.startsWith("Binary files ")) {
        const match =
          /^Binary files (?:"?a\/(.+?)"?|\/dev\/null) and (?:"?b\/(.+?)"?|\/dev\/null) differ$/.exec(
            line,
          );
        if (match) {
          for (const path of [match[1], match[2]]) {
            if (path) binaryPaths.add(path);
          }
          continue;
        }
      }
      for (const path of currentPaths) {
        binaryPaths.add(path);
      }
    }
  }
  return binaryPaths;
}

function isBinaryFileDiff(file: FileDiffMetadata, binaryPaths: Set<string>): boolean {
  if (file.hunks.length !== 0) return false;
  const candidates = [file.name, file.prevName]
    .filter((name): name is string => typeof name === "string" && name.length > 0)
    .map((name) => (name.startsWith("a/") || name.startsWith("b/") ? name.slice(2) : name));
  return candidates.some((path) => binaryPaths.has(path));
}

export function getRenderablePatch(
  patch: string | undefined,
  cacheScope = "diff-panel",
  options: RenderablePatchOptions = {},
): RenderablePatch | null {
  if (!patch) return null;
  const normalizedPatch = patch.trim();
  if (normalizedPatch.length === 0) return null;

  try {
    const parsedPatches = parsePatchFiles(
      normalizedPatch,
      buildPatchCacheKey(normalizedPatch, cacheScope),
    );
    const parsedFiles = parsedPatches.flatMap((parsedPatch) => {
      let patchFiles = parsedPatch.files;
      if (options.upgradeFullContextFiles) {
        patchFiles = patchFiles.map(upgradeFullContextFile);
      }
      if (options.compactPartialHunkOffsets) {
        patchFiles = patchFiles.map(compactPartialHunkOffsets);
      }
      return patchFiles;
    });
    const binaryPaths = extractBinaryPatchPaths(normalizedPatch);
    const files: FileDiffMetadata[] = [];
    const binaryFiles: FileDiffMetadata[] = [];
    for (const file of parsedFiles) {
      if (isBinaryFileDiff(file, binaryPaths)) {
        binaryFiles.push(file);
      } else {
        files.push(file);
      }
    }
    if (files.length > 0 || binaryFiles.length > 0) {
      return { kind: "files", files, binaryFiles };
    }

    return {
      kind: "raw",
      text: normalizedPatch,
      reason: "Unsupported diff format. Showing raw patch.",
    };
  } catch {
    return {
      kind: "raw",
      text: normalizedPatch,
      reason: "Failed to parse patch. Showing raw patch.",
    };
  }
}

/**
 * Synthesize a renderable diff from before/after text (e.g. Claude Edit
 * old_string/new_string, which carry no provider patch). Line numbers are
 * relative to the snippet, not the source file.
 */
export function getRenderablePatchFromContents(
  oldContents: string,
  newContents: string,
  name: string,
  cacheScope = "inline-edit",
): RenderablePatch | null {
  if (oldContents === newContents) return null;
  try {
    const cacheKey = buildPatchCacheKey(`${name} ${oldContents}  ${newContents}`, cacheScope);
    const fileDiff = parseDiffFromFile(
      { name, contents: oldContents, cacheKey: `${cacheKey}:old` },
      { name, contents: newContents, cacheKey: `${cacheKey}:new` },
    );
    if (fileDiff.hunks.length === 0) return null;
    return { kind: "files", files: [fileDiff], binaryFiles: [] };
  } catch {
    return null;
  }
}

export function resolveFileDiffPath(fileDiff: FileDiffMetadata): string {
  const raw = fileDiff.name ?? fileDiff.prevName ?? "";
  if (raw.startsWith("a/") || raw.startsWith("b/")) {
    return raw.slice(2);
  }
  return raw;
}

export function buildFileDiffRenderKey(fileDiff: FileDiffMetadata): string {
  return fileDiff.cacheKey ?? `${fileDiff.prevName ?? "none"}:${fileDiff.name}`;
}

export function getDiffCollapseIconClassName(fileDiff: FileDiffMetadata): string {
  switch (fileDiff.type) {
    case "new":
      return "text-[var(--diffs-addition-base)]";
    case "deleted":
      return "text-[var(--diffs-deletion-base)]";
    case "change":
    case "rename-pure":
    case "rename-changed":
      return "text-[var(--diffs-modified-base)]";
    default:
      return "text-muted-foreground/80";
  }
}
