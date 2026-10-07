import type { EnvironmentId, GerritSettings } from "@t3tools/contracts";
import { useState } from "react";

import { useEnvironmentSettings } from "../../hooks/useSettings";
import { serverEnvironment } from "../../state/server";
import { useAtomCommand } from "../../state/use-atom-command";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

/**
 * Gerrit's HTTP token for one environment. Reads and writes go over SSH and need none of it; this
 * is only for a comment's id (replies), thread resolution and the reviewer picker. The host and
 * username come from the project's git remote, so the token is the only thing to store, and it is
 * write-only: the server keeps it in its secret store and only reports whether it is set.
 */
export function GerritCredentialsSettings({
  environmentId,
  onSaved,
}: {
  readonly environmentId: EnvironmentId;
  readonly onSaved: () => void;
}) {
  const saved = useEnvironmentSettings(environmentId, (settings) => settings.gerrit);
  const updateSettings = useAtomCommand(serverEnvironment.updateSettings, {
    label: "save Gerrit token",
  });
  const [token, setToken] = useState("");
  const [saving, setSaving] = useState(false);
  const newToken = token.trim();
  const patch: GerritSettings | null = newToken ? { token: newToken } : null;
  const canSave = patch !== null;

  const save = async (next: GerritSettings) => {
    setSaving(true);
    try {
      const result = await updateSettings({ environmentId, input: { patch: { gerrit: next } } });
      if (result._tag === "Success") {
        setToken("");
        onSaved();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (canSave && patch) void save(patch);
      }}
    >
      <p className="text-xs leading-normal text-muted-foreground">
        Only needed for replies, thread resolution and the reviewer picker; reads, writes and the
        diff use SSH. Host and username come from the project's git remote. Generate a token in
        Gerrit → Settings → HTTP Credentials.
      </p>
      <div className="grid gap-2">
        <Label htmlFor="gerrit-token">HTTP token</Label>
        <Input
          id="gerrit-token"
          type="password"
          size="sm"
          autoComplete="off"
          placeholder={
            saved.token.length > 0 ? "Stored token, enter a new value to replace" : "Not set"
          }
          value={token}
          onChange={(event) => setToken(event.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" size="sm" disabled={!canSave || saving}>
          Save
        </Button>
      </div>
    </form>
  );
}
