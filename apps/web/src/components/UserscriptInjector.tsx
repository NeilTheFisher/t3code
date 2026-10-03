import { useEffect, useMemo, useRef } from "react";
import type { Userscript } from "@t3tools/contracts";
import { usePrimarySettings } from "../hooks/useSettings";
import { getDeviceId } from "../lib/deviceId";

const STYLE_ID = "t3code-userscript-injected-css";

function getDeviceScripts(
  userscripts: Record<string, readonly Userscript[]>,
): readonly Userscript[] {
  const deviceId = getDeviceId();
  const all = userscripts[deviceId];
  if (!all) return [];
  return all.filter((s) => s.enabled);
}

export function UserscriptInjector() {
  const settings = usePrimarySettings();
  const scripts = useMemo(
    () => getDeviceScripts(settings.userscripts ?? {}),
    [settings.userscripts],
  );
  const prevJsRef = useRef<string[]>([]);

  useEffect(() => {
    let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement | null;
    const cssCode = scripts
      .filter((s) => s.type === "css")
      .map((s) => s.code)
      .join("\n");
    if (cssCode) {
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = STYLE_ID;
        document.head.appendChild(styleEl);
      }
      styleEl.textContent = cssCode;
    } else {
      if (styleEl) {
        styleEl.remove();
      }
    }
  }, [scripts]);

  useEffect(() => {
    const jsCode = scripts.filter((s) => s.type === "javascript").map((s) => s.code);
    for (const code of jsCode) {
      if (!prevJsRef.current.includes(code)) {
        try {
          const fn = new Function(code);
          fn();
        } catch (e) {
          console.error("Userscript (js) failed:", e);
        }
      }
    }
    prevJsRef.current = jsCode;
  }, [scripts]);

  return null;
}
