import { useCallback, useId, useMemo, useState } from "react";
import { PlusIcon, Trash2Icon } from "lucide-react";
import type { Userscript } from "@t3tools/contracts";
import { usePrimarySettings, useUpdatePrimarySettings } from "../../hooks/useSettings";
import { getDeviceId } from "../../lib/deviceId";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { SettingsPageContainer, SettingsRow, SettingsSection } from "./settingsLayout";

function generateId(): string {
  return crypto.randomUUID();
}

function getDeviceScripts(userscripts: Record<string, readonly Userscript[]>): Userscript[] {
  return (userscripts[getDeviceId()] ?? []) as Userscript[];
}

export function UserscriptsSettingsPanel() {
  const settings = usePrimarySettings();
  const updateSettings = useUpdatePrimarySettings();
  const formId = useId();
  const [editingId, setEditingId] = useState<string | null>(null);

  const deviceId = useMemo(() => getDeviceId(), []);

  const deviceScripts = useMemo(
    () => getDeviceScripts(settings.userscripts ?? {}),
    [settings.userscripts],
  );

  const allScripts = useMemo(() => settings.userscripts ?? {}, [settings.userscripts]);

  const writeScripts = useCallback(
    (scripts: Userscript[]) => {
      updateSettings({
        userscripts: {
          ...allScripts,
          [deviceId]: scripts,
        },
      });
    },
    [allScripts, deviceId, updateSettings],
  );

  const addScript = useCallback(() => {
    const newScript: Userscript = {
      id: generateId(),
      name: "New script",
      code: "",
      type: "javascript",
      enabled: true,
      deviceId,
    };
    writeScripts([...deviceScripts, newScript]);
    setEditingId(newScript.id);
  }, [deviceScripts, deviceId, writeScripts]);

  const deleteScript = useCallback(
    (id: string) => {
      writeScripts(deviceScripts.filter((s) => s.id !== id));
      if (editingId === id) setEditingId(null);
    },
    [deviceScripts, editingId, writeScripts],
  );

  const toggleEnabled = useCallback(
    (id: string) => {
      writeScripts(deviceScripts.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)));
    },
    [deviceScripts, writeScripts],
  );

  const updateScript = useCallback(
    (id: string, patch: Partial<Userscript>) => {
      writeScripts(deviceScripts.map((s) => (s.id === id ? { ...s, ...patch } : s)));
    },
    [deviceScripts, writeScripts],
  );

  return (
    <SettingsPageContainer>
      <SettingsSection
        title="Userscripts"
        headerAction={
          <Button size="xs" onClick={addScript}>
            <PlusIcon className="mr-1 size-3.5" />
            Add script
          </Button>
        }
      >
        <p className="px-3 text-[13px] leading-[1.45] text-muted-foreground/80 sm:px-4">
          Custom JavaScript and CSS injected into this app, per device. Scripts tagged with this
          device&apos;s fingerprint are shown below.
        </p>

        {deviceScripts.length === 0 ? (
          <p className="px-3 pt-2 text-sm text-muted-foreground/60 sm:px-4">
            No scripts for this device. Click &ldquo;Add script&rdquo; to create one.
          </p>
        ) : (
          <div className="space-y-2 px-3 sm:px-4">
            {deviceScripts.map((script) => {
              const isEditing = editingId === script.id;
              return (
                <div key={script.id} className="rounded-xl border border-border/60 bg-card/40">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <Switch
                      checked={script.enabled}
                      onCheckedChange={() => toggleEnabled(script.id)}
                      aria-label={`Toggle ${script.name}`}
                    />
                    <input
                      className="min-w-0 flex-1 bg-transparent text-sm font-medium text-foreground outline-none"
                      value={script.name}
                      onChange={(e) => updateScript(script.id, { name: e.target.value })}
                      onFocus={() => setEditingId(script.id)}
                      placeholder="Script name"
                    />
                    <select
                      className="rounded-md border border-border/40 bg-muted px-2 py-1 text-xs text-foreground"
                      value={script.type}
                      onChange={(e) =>
                        updateScript(script.id, {
                          type: e.target.value as Userscript["type"],
                        })
                      }
                      aria-label="Script type"
                    >
                      <option value="javascript">JS</option>
                      <option value="css">CSS</option>
                    </select>
                    <Button
                      size="icon-xs"
                      variant="ghost"
                      onClick={() => deleteScript(script.id)}
                      aria-label={`Delete ${script.name}`}
                    >
                      <Trash2Icon className="size-3.5 text-muted-foreground hover:text-destructive" />
                    </Button>
                  </div>
                  {isEditing && (
                    <div className="border-t border-border/40 px-3 pb-3 pt-2">
                      <textarea
                        className="min-h-[120px] w-full resize-y rounded-lg border border-border/40 bg-[#1e1e1e] p-3 font-mono text-[13px] leading-relaxed text-[#d4d4d4] outline-none ring-0 focus:ring-1 focus:ring-primary/40"
                        value={script.code}
                        onChange={(e) => updateScript(script.id, { code: e.target.value })}
                        placeholder={script.type === "css" ? "/* CSS here */" : "// JS here"}
                        spellCheck={false}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </SettingsSection>
    </SettingsPageContainer>
  );
}
