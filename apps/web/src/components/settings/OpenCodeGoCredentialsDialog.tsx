"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

export interface OpenCodeGoCredentials {
  readonly goWorkspaceId: string;
  readonly goAuthCookie: string;
}

export function readOpenCodeGoCredentials(config: unknown): OpenCodeGoCredentials {
  if (config === null || typeof config !== "object") {
    return { goWorkspaceId: "", goAuthCookie: "" };
  }
  const record = config as Record<string, unknown>;
  return {
    goWorkspaceId: typeof record.goWorkspaceId === "string" ? record.goWorkspaceId : "",
    goAuthCookie: typeof record.goAuthCookie === "string" ? record.goAuthCookie : "",
  };
}

export function updateOpenCodeGoCredentials(
  config: unknown,
  input: OpenCodeGoCredentials,
): Record<string, unknown> {
  const next =
    config !== null && typeof config === "object" ? { ...(config as Record<string, unknown>) } : {};
  const workspaceId = input.goWorkspaceId.trim();
  const authCookie = input.goAuthCookie.trim();

  if (workspaceId) {
    next.goWorkspaceId = workspaceId;
  } else {
    delete next.goWorkspaceId;
  }
  if (authCookie) {
    next.goAuthCookie = authCookie;
  }
  return next;
}

interface OpenCodeGoCredentialsDialogProps {
  readonly open: boolean;
  readonly config: unknown;
  readonly onOpenChange: (open: boolean) => void;
  readonly onSave: (config: Record<string, unknown>) => void;
}

export function OpenCodeGoCredentialsDialog({
  open,
  config,
  onOpenChange,
  onSave,
}: OpenCodeGoCredentialsDialogProps) {
  const saved = readOpenCodeGoCredentials(config);
  const [workspaceId, setWorkspaceId] = useState(saved.goWorkspaceId);
  const [authCookie, setAuthCookie] = useState("");

  const handleSave = () => {
    onSave(
      updateOpenCodeGoCredentials(config, {
        goWorkspaceId: workspaceId,
        goAuthCookie: authCookie,
      }),
    );
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup className="max-w-md">
        <DialogHeader>
          <DialogTitle>OpenCode Go credentials</DialogTitle>
          <DialogDescription>
            Update the workspace used to retrieve OpenCode Go usage. Your saved cookie is never
            shown here.
          </DialogDescription>
        </DialogHeader>

        <div data-slot="dialog-panel" className="grid gap-4 px-6 pb-5">
          <label className="grid gap-1.5" htmlFor="opencode-go-workspace-id">
            <span className="text-xs font-medium text-foreground">Workspace ID</span>
            <Input
              id="opencode-go-workspace-id"
              value={workspaceId}
              onChange={(event) => setWorkspaceId(event.target.value)}
              placeholder="wrk_…"
              autoComplete="off"
              spellCheck={false}
            />
            <span className="text-[11px] text-muted-foreground">
              Found in your opencode.ai workspace URL.
            </span>
          </label>

          <label className="grid gap-1.5" htmlFor="opencode-go-auth-cookie">
            <span className="text-xs font-medium text-foreground">New auth cookie</span>
            <Input
              id="opencode-go-auth-cookie"
              type="password"
              value={authCookie}
              onChange={(event) => setAuthCookie(event.target.value)}
              placeholder={saved.goAuthCookie ? "Saved cookie (leave blank to keep)" : "auth=…"}
              autoComplete="new-password"
              spellCheck={false}
            />
            <span className="text-[11px] text-muted-foreground">
              {saved.goAuthCookie
                ? "A cookie is saved. Enter a new one only when it expires."
                : "Paste the auth cookie from opencode.ai."}
            </span>
          </label>
        </div>

        <DialogFooter>
          <Button variant="outline" size="sm" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button size="sm" onClick={handleSave} disabled={!workspaceId.trim()}>
            Save credentials
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
