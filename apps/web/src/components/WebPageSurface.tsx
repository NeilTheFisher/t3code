import type { ScopedThreadRef } from "@t3tools/contracts";
import { ExternalLink, Globe2, RotateCw } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Tooltip, TooltipPopup, TooltipTrigger } from "~/components/ui/tooltip";
import { normalizeWebPageUrl } from "~/lib/webPageUrl";
import { useRightPanelStore } from "~/rightPanelStore";

/**
 * Iframe-based browser surface for the web client, used when the desktop
 * preview bridge is unavailable. Loads a user-entered URL in a sandboxed
 * iframe; the last URL is persisted per thread via the right-panel store.
 */
export function WebPageSurface(props: { threadRef: ScopedThreadRef; url: string | null }) {
  const [draft, setDraft] = useState(props.url ?? "");
  const [reloadKey, setReloadKey] = useState(0);

  const commit = (event: FormEvent) => {
    event.preventDefault();
    const normalized = normalizeWebPageUrl(draft);
    if (!normalized) return;
    setDraft(normalized);
    if (normalized === props.url) {
      setReloadKey((value) => value + 1);
    } else {
      useRightPanelStore.getState().setWebPageUrl(props.threadRef, normalized);
    }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-border px-2 py-1.5">
        <form className="flex items-center gap-1.5" onSubmit={commit}>
          <Input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Enter a URL, e.g. localhost:3000"
            spellCheck={false}
            autoComplete="off"
            className="h-7 flex-1 text-sm"
            aria-label="Page URL"
          />
          <Tooltip>
            <TooltipTrigger
              render={
                <Button type="submit" variant="ghost" size="icon" className="size-7 shrink-0">
                  <RotateCw className="size-3.5" />
                </Button>
              }
            />
            <TooltipPopup side="bottom">Go / reload</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="size-7 shrink-0"
                  disabled={!props.url}
                  onClick={() => {
                    if (props.url) window.open(props.url, "_blank", "noopener,noreferrer");
                  }}
                >
                  <ExternalLink className="size-3.5" />
                </Button>
              }
            />
            <TooltipPopup side="bottom">Open in new tab</TooltipPopup>
          </Tooltip>
        </form>
        <p className="mt-1 px-0.5 text-[11px] leading-snug text-muted-foreground">
          If the page stays blank, the site may block embedding; local dev servers usually work.
        </p>
      </div>
      {props.url ? (
        <iframe
          key={`${props.url}:${reloadKey}`}
          src={props.url}
          title="Browser surface"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className="min-h-0 flex-1 border-0 bg-white"
        />
      ) : (
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2 p-6 text-center">
          <Globe2 className="size-6 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">Open a page</p>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            Enter a URL above to load it here — for example a local dev server like{" "}
            <span className="font-mono">localhost:3000</span>.
          </p>
        </div>
      )}
    </div>
  );
}
