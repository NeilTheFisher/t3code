#!/usr/bin/env node

import { t as runClaudeHistoryWorker } from "./claudeHistoryWorker-DWx7bf9u.mjs";
// src/claude-history-worker.ts
const [method, sessionId, rawOptions] = process.argv.slice(2);
await runClaudeHistoryWorker(method, sessionId, rawOptions);
export {};

//# sourceMappingURL=claude-history-worker.mjs.map
