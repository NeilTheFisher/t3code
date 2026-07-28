/**
 * OpenCodeSkills — filesystem discovery of OpenCode skills for the `$` picker.
 *
 * OpenCode loads skills from `<config dir>/skills` (user scope) and
 * `<cwd>/.opencode/skills` (project scope), one directory per skill with a
 * `SKILL.md` carrying YAML frontmatter.
 *
 * @module provider/Drivers/OpenCodeSkills
 */
import * as NodeOS from "node:os";

import type { ServerProviderSkill } from "@t3tools/contracts";
import * as Effect from "effect/Effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { parse as parseYamlDocument } from "yaml";

import { expandHomePath } from "../../pathExpansion.ts";

type OpenCodeSkillScope = "user" | "project";
type OpenCodeSkillsConfig = { readonly homePath?: string | null };

const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;

type SkillFrontmatter =
  | { readonly kind: "missing" }
  | { readonly kind: "malformed" }
  | { readonly kind: "parsed"; readonly name?: string; readonly description?: string };

function parseSkillFrontmatter(contents: string): SkillFrontmatter {
  const match = FRONTMATTER_PATTERN.exec(contents);
  if (!match) {
    return { kind: "missing" };
  }

  let parsed: unknown;
  try {
    parsed = parseYamlDocument(match[1] ?? "");
  } catch {
    return { kind: "malformed" };
  }
  if (typeof parsed !== "object" || parsed === null) {
    return { kind: "malformed" };
  }

  const record = parsed as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const description = typeof record.description === "string" ? record.description.trim() : "";
  return {
    kind: "parsed",
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
  };
}

/**
 * Resolve the OpenCode config directory the CLI would use, matching the
 * precedence the spawned CLI sees: the instance's `homePath`, then
 * `OPENCODE_HOME` environment variable, then `~/.config/opencode`.
 */
const resolveOpenCodeConfigDirPath = Effect.fn("resolveOpenCodeConfigDirPath")(function* (
  config: OpenCodeSkillsConfig,
  environment: NodeJS.ProcessEnv,
  cwd?: string,
): Effect.fn.Return<string, never, Path.Path> {
  const path = yield* Path.Path;
  const homePath = (config.homePath ?? "").trim();
  if (homePath.length > 0) {
    return path.resolve(expandHomePath(homePath));
  }
  const environmentConfigDir = environment.OPENCODE_HOME?.trim() ?? "";
  if (environmentConfigDir.length > 0) {
    return cwd ? path.resolve(cwd, environmentConfigDir) : path.resolve(environmentConfigDir);
  }
  return path.join(NodeOS.homedir(), ".config", "opencode");
});

/**
 * Enumerate OpenCode skills from the user config dir and the workspace.
 * Discovery is best-effort: unreadable roots and malformed skill entries are
 * skipped so a broken skill never degrades the provider snapshot. On name
 * collisions the project-scoped skill wins, matching OpenCode's
 * most-specific-wins resolution.
 */
export const discoverOpenCodeSkills = Effect.fn("discoverOpenCodeSkills")(function* (
  config: OpenCodeSkillsConfig,
  cwd?: string,
  environment?: NodeJS.ProcessEnv,
): Effect.fn.Return<ReadonlyArray<ServerProviderSkill>, never, FileSystem.FileSystem | Path.Path> {
  const fileSystem = yield* FileSystem.FileSystem;
  const path = yield* Path.Path;
  const configDirPath = yield* resolveOpenCodeConfigDirPath(
    config,
    environment ?? process.env,
    cwd,
  );

  const roots: ReadonlyArray<{ directory: string; scope: OpenCodeSkillScope }> = [
    { directory: path.join(configDirPath, "skills"), scope: "user" },
    ...(cwd
      ? [{ directory: path.join(cwd, ".opencode", "skills"), scope: "project" as const }]
      : []),
  ];

  const skillsByName = new Map<string, ServerProviderSkill>();
  for (const root of roots) {
    const entries = yield* fileSystem
      .readDirectory(root.directory)
      .pipe(Effect.orElseSucceed((): ReadonlyArray<string> => []));

    for (const entry of [...entries].sort()) {
      const skillPath = path.join(root.directory, entry, "SKILL.md");
      const contents = yield* fileSystem
        .readFileString(skillPath)
        .pipe(Effect.orElseSucceed(() => undefined));
      if (contents === undefined) {
        continue;
      }

      const frontmatter = parseSkillFrontmatter(contents);
      if (frontmatter.kind === "malformed") {
        continue;
      }

      const name = (frontmatter.kind === "parsed" ? frontmatter.name : undefined) ?? entry.trim();
      if (!name) {
        continue;
      }

      skillsByName.set(name, {
        name,
        path: skillPath,
        enabled: true,
        scope: root.scope,
        ...(frontmatter.kind === "parsed" && frontmatter.description
          ? { description: frontmatter.description }
          : {}),
      });
    }
  }

  return [...skillsByName.values()].sort((left, right) => left.name.localeCompare(right.name));
});
