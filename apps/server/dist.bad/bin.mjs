#!/usr/bin/env node

import * as NodeFS from "node:fs";
import * as NodeURL from "node:url";
// src/entrypoint.ts
/** Fallback for supported Node 22.16, 22.17 and 23.11, where import.meta.main is undefined. */
const isEntrypoint = (input) => {
  if (input.runtimeMain !== void 0) return input.runtimeMain;
  if (input.entryPath === void 0 || input.entryPath === "") return false;
  if (input.moduleUrl === NodeURL.pathToFileURL(input.entryPath).href) return true;
  try {
    return input.moduleUrl === NodeURL.pathToFileURL(NodeFS.realpathSync(input.entryPath)).href;
  } catch {
    return false;
  }
};
// src/bin.ts
/**
 * Every ACP agent spawns `t3 acp-mcp-bridge` while opening its session, and terminal-fallback
 * agents run `t3 acp-mcp-call` per tool call, so their startup sits on first-message latency.
 * They and Codex's managed-token helper dispatch before the full CLI module graph (seconds
 * of evaluation) loads; everything else defers to the real CLI in ./binCli.ts.
 */
if (
  isEntrypoint({
    moduleUrl: import.meta.url,
    entryPath: process.argv[1],
    runtimeMain: import.meta.main,
  })
) {
  const command = process.argv[2];
  const { ignoreMacosTypeOfServiceEinval } = await import("./outboundHttp-BsOM_gO4.mjs");
  ignoreMacosTypeOfServiceEinval();
  if (command === "__document-text") {
    const { extractDocumentText } = await import("./documentTextWorker-DmAc3Cj9.mjs");
    try {
      process.stdout.write(await extractDocumentText(process.argv[3], process.argv[4]));
    } catch (error) {
      if (error instanceof Error && "code" in error && /^E[A-Z0-9]+$/.test(String(error.code)))
        throw error;
      process.exitCode = 2;
    }
  } else if (command === "__managed-chatgpt-token") {
    const { runManagedChatGptTokenCli } = await import("./managedChatGptToken-DJxIGuBF.mjs");
    await runManagedChatGptTokenCli(process.argv.slice(3));
  } else if (command === "acp-mcp-bridge" || command === "acp-mcp-call") {
    const { runAcpMcpCliFastPath } = await import("./AcpMcpStdioBridge-QsmECBIz.mjs");
    await runAcpMcpCliFastPath(command, process.argv.slice(3));
  } else {
    const { attachConsoleStdin } = await import("./consoleStdin-CpY10o_f.mjs");
    attachConsoleStdin();
    const { runCli } = await import("./binCli-Bo8s7hN4.mjs");
    runCli();
  }
}
export {};

//# sourceMappingURL=bin.mjs.map
