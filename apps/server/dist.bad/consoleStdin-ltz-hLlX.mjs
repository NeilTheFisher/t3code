#!/usr/bin/env node

import {
  Ct as map,
  Tn as tryPromise,
  ct as gen,
  fs as Reference,
  zt as orElseSucceed,
} from "./Effect-JLyBLa-C.mjs";
import * as NodeFS from "node:fs";
import * as NodeOS from "node:os";
import * as NodeDns from "node:dns";
import * as NodeSea from "node:sea";
import * as NodeTty from "node:tty";
// ../../packages/shared/src/HostProcess.ts
const Platform = Reference("@t3tools/shared/HostProcess/Platform", {
  defaultValue: () => process.platform,
});
const Architecture = Reference("@t3tools/shared/HostProcess/Architecture", {
  defaultValue: () => process.arch,
});
const Hostname = Reference("@t3tools/shared/HostProcess/Hostname", {
  defaultValue: () => NodeOS.hostname(),
});
const Username = Reference("@t3tools/shared/HostProcess/Username", {
  defaultValue: () => {
    try {
      return NodeOS.userInfo().username.trim() || null;
    } catch {
      return null;
    }
  },
});
const HomeDirectory = Reference("@t3tools/shared/HostProcess/HomeDirectory", {
  defaultValue: () => NodeOS.homedir(),
});
const Environment = Reference("@t3tools/shared/HostProcess/Environment", {
  defaultValue: () => process.env,
});
const WorkingDirectory = Reference("@t3tools/shared/HostProcess/WorkingDirectory", {
  defaultValue: () => process.cwd(),
});
const ExecutablePath = Reference("@t3tools/shared/HostProcess/ExecutablePath", {
  defaultValue: () => process.execPath,
});
const Arguments = Reference("@t3tools/shared/HostProcess/Arguments", {
  defaultValue: () => process.argv,
});
/** Original shell command spelling; argv[0] and execPath instead identify the resolved binary. */
const InvokedAs = Reference("@t3tools/shared/HostProcess/InvokedAs", {
  defaultValue: () => process.argv0,
});
const IsExecutable = Reference("@t3tools/shared/HostProcess/IsExecutable", {
  defaultValue: () => NodeSea.isSea(),
});
Reference("@t3tools/shared/HostProcess/Addresses", {
  defaultValue: () =>
    gen(function* () {
      const interfaces = Object.values(NodeOS.networkInterfaces())
        .flat()
        .flatMap((entry) => (entry ? [entry.address] : []));
      const resolved = yield* tryPromise(() =>
        NodeDns.promises.lookup(NodeOS.hostname(), { all: true }),
      ).pipe(
        map((entries) => entries.map((entry) => entry.address)),
        orElseSucceed(() => []),
      );
      return /* @__PURE__ */ new Set([...interfaces, ...resolved]);
    }),
});
const UserId = Reference("@t3tools/shared/HostProcess/UserId", {
  defaultValue: () => process.getuid?.(),
});
const isWindows = map(Platform, (platform) => platform === "win32");
// src/cli/consoleStdin.ts
/**
 * Electron's Windows executable is a GUI program, so `t3.cmd` under
 * `ELECTRON_RUN_AS_NODE` gets the console for stdout and stderr but no stdin.
 * Piped or redirected input and runs whose output is not a console are left alone.
 */
function needsConsoleStdin(input) {
  return (
    input.platform === "win32" &&
    input.env.T3CODE_DESKTOP_CLI_LAUNCHER === "1" &&
    !input.stdinOpen &&
    input.stdoutIsConsole
  );
}
const isOpen = (fd) => {
  try {
    NodeFS.fstatSync(fd);
    return true;
  } catch {
    return false;
  }
};
/** Call before reading process.stdin. Returns the reopened fd for children, or undefined without changing stdin. */
function attachConsoleStdin() {
  const needed = needsConsoleStdin({
    platform: Platform.defaultValue(),
    env: process.env,
    stdinOpen: isOpen(0),
    stdoutIsConsole: NodeTty.isatty(1),
  });
  delete process.env.T3CODE_DESKTOP_CLI_LAUNCHER;
  if (!needed) return void 0;
  let fd;
  try {
    fd = NodeFS.openSync("\\\\.\\CONIN$", "r+");
  } catch {
    return;
  }
  if (!NodeTty.isatty(fd)) {
    NodeFS.closeSync(fd);
    return;
  }
  const stdin = new NodeTty.ReadStream(fd);
  Object.defineProperty(process, "stdin", {
    value: stdin,
    configurable: true,
    enumerable: true,
  });
  consoleStdinFd = fd;
  return fd;
}
let consoleStdinFd;
const interactiveStdin = () => consoleStdinFd ?? "inherit";
export {
  Environment as a,
  Hostname as c,
  Platform as d,
  UserId as f,
  isWindows as h,
  Arguments as i,
  InvokedAs as l,
  WorkingDirectory as m,
  interactiveStdin as n,
  ExecutablePath as o,
  Username as p,
  Architecture as r,
  HomeDirectory as s,
  attachConsoleStdin as t,
  IsExecutable as u,
};

//# sourceMappingURL=consoleStdin-ltz-hLlX.mjs.map
