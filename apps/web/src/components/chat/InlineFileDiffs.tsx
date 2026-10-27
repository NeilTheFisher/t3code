import type { EnvironmentId } from "@t3tools/contracts";
import { FileDiff } from "@pierre/diffs/react";
import { memo, useEffect, useState } from "react";

import {
  expandPartialPatchWithCurrentFile,
  getDiffLineStat,
  getRenderablePatch,
  resolveDiffThemeName,
  resolveFileDiffPath,
} from "../../lib/diffRendering";
import { PREFERRED_HIGHLIGHTER } from "../../lib/syntaxHighlighting";
import { useClientSettings } from "../../hooks/useSettings";
import { readProjectFileFresh } from "../files/projectFilesQueryState";
import { DiffWorkerPoolProvider } from "../DiffWorkerPoolProvider";
import type { FileChange } from "../../session-logic";

function toWorkspaceRelativePath(filePath: string, workspaceRoot: string): string {
  const normalizedRoot = workspaceRoot.replaceAll("\\", "/").replace(/\/+$/, "");
  const normalizedPath = filePath.replaceAll("\\", "/");
  return normalizedPath.toLowerCase().startsWith(`${normalizedRoot.toLowerCase()}/`)
    ? normalizedPath.slice(normalizedRoot.length + 1)
    : normalizedPath.replace(/^\.?\//, "");
}

const InlineFileDiff = memo(function InlineFileDiff(props: {
  change: FileChange;
  environmentId: EnvironmentId;
  workspaceRoot: string | undefined;
  theme: "light" | "dark";
  wordWrap: boolean;
}) {
  const { change } = props;
  const renderable = getRenderablePatch(change.patch, `inline-file-change:${change.filePath}`, {
    upgradeFullContextFiles: true,
  });
  const parsedFile = renderable?.kind === "files" ? renderable.files[0] : undefined;
  const [expandedFile, setExpandedFile] = useState(parsedFile);

  // oxlint-disable-next-line t3code/react-effect-budget -- A partial patch expands by reading the current file from the workspace.
  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect -- A new patch resets the expanded copy before the async file read.
    setExpandedFile(parsedFile);
    if (!parsedFile?.isPartial || !props.workspaceRoot || !change.patch) return;
    let cancelled = false;
    void (async () => {
      try {
        const relativePath = toWorkspaceRelativePath(change.filePath, props.workspaceRoot!);
        const file = await readProjectFileFresh(
          props.environmentId,
          props.workspaceRoot!,
          relativePath,
        );
        if (!file) return;
        const fullPatch = expandPartialPatchWithCurrentFile(
          change.patch!,
          relativePath,
          file.contents,
        );
        if (!fullPatch) return;
        const expanded = getRenderablePatch(
          fullPatch,
          `inline-file-change-expanded:${change.filePath}`,
        );
        const next = expanded?.kind === "files" ? expanded.files[0] : undefined;
        if (!cancelled && next) setExpandedFile(next);
      } catch {
        // Keep the partial patch; expansion is best-effort.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [change.filePath, change.patch, parsedFile, props.environmentId, props.workspaceRoot]);

  const fileDiff = expandedFile ?? parsedFile;
  if (!fileDiff) return null;
  const stat = getDiffLineStat([fileDiff]);
  return (
    <div className="overflow-hidden rounded-md border border-border/60">
      <div className="flex h-9 items-center gap-2 border-b border-border/60 bg-muted/30 px-3 text-xs">
        <span className="min-w-0 flex-1 truncate">{resolveFileDiffPath(fileDiff)}</span>
        <span className="shrink-0 font-mono text-muted-foreground">
          {stat.additions > 0 ? `+${stat.additions}` : ""}
          {stat.deletions > 0 ? ` -${stat.deletions}` : ""}
        </span>
      </div>
      <FileDiff
        fileDiff={fileDiff}
        options={{
          collapsed: false,
          diffStyle: "unified",
          lineDiffType: "none",
          overflow: props.wordWrap ? "wrap" : "scroll",
          theme: resolveDiffThemeName(props.theme),
          preferredHighlighter: PREFERRED_HIGHLIGHTER,
        }}
      />
    </div>
  );
});

/**
 * The per-file diffs a file-change item carried, so a turn's edits can be read where the tool
 * call sits instead of only in the diff panel.
 */
export const InlineFileChangeDiffs = memo(function InlineFileChangeDiffs(props: {
  changes: ReadonlyArray<FileChange>;
  environmentId: EnvironmentId;
  workspaceRoot: string | undefined;
  theme: "light" | "dark";
}) {
  const wordWrap = useClientSettings((settings) => settings.wordWrap);
  const patched = props.changes.filter(
    (change) => change.patch !== undefined && change.patch.trim().length > 0,
  );
  if (patched.length === 0) return null;
  return (
    <DiffWorkerPoolProvider>
      <div className="space-y-2">
        {patched.map((change) => (
          <InlineFileDiff
            key={change.filePath}
            change={change}
            environmentId={props.environmentId}
            workspaceRoot={props.workspaceRoot}
            theme={props.theme}
            wordWrap={wordWrap}
          />
        ))}
      </div>
    </DiffWorkerPoolProvider>
  );
});
