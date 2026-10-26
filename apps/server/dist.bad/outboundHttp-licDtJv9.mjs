#!/usr/bin/env node

import * as NodeModule from "node:module";
import * as NodeNet from "node:net";
// src/outboundHttp.ts
const requireUndici = NodeModule.createRequire(import.meta.url);
/** Node 26 bundles h2-capable undici 8; Node 22/24 and Electron stay on HTTP/1.1 with 6/7. */
const builtinFetchUsesHttp2 = (bundledUndiciVersion) =>
  Number.parseInt(bundledUndiciVersion ?? "", 10) >= 8;
/** Preserves the EnvHttpProxyAgent installed by --use-env-proxy / NODE_USE_ENV_PROXY. */
function installHttp1FetchDispatcher() {
  const undici = requireUndici("undici");
  const usesEnvProxy = undici.getGlobalDispatcher().constructor.name === "EnvHttpProxyAgent";
  undici.setGlobalDispatcher(
    usesEnvProxy
      ? new undici.EnvHttpProxyAgent({
          allowH2: false,
          clientFactory: (origin) => new undici.Pool(origin, { allowH2: false }),
        })
      : new undici.Agent({ allowH2: false }),
  );
}
/** Avoids uncaught idle-timeout errors on h2 streams (https://github.com/nodejs/undici/issues/5936). */
function keepOutboundFetchOnHttp1() {
  if (builtinFetchUsesHttp2(process.versions.undici)) installHttp1FetchDispatcher();
}
function ignoreMacosTypeOfServiceEinval(
  platform = process.platform,
  socketPrototype = NodeNet.Socket.prototype,
) {
  if (platform !== "darwin") return;
  const setTypeOfService = socketPrototype.setTypeOfService;
  if (typeof setTypeOfService !== "function") return;
  socketPrototype.setTypeOfService = function (...args) {
    try {
      return setTypeOfService.apply(this, args);
    } catch (error) {
      if (error instanceof Error && "code" in error && error.code === "EINVAL") return this;
      throw error;
    }
  };
}
/**
 * Node's 250 ms Happy Eyeballs attempt timeout abandons a working-but-slow IPv4
 * connect when IPv6 is advertised but unroutable, which broke the ACP registry
 * fetch. A larger `--network-family-autoselection-attempt-timeout` still wins.
 */
function extendConnectionAttemptTimeout() {
  NodeNet.setDefaultAutoSelectFamilyAttemptTimeout(
    Math.max(NodeNet.getDefaultAutoSelectFamilyAttemptTimeout(), 1e3),
  );
}
export {
  keepOutboundFetchOnHttp1 as a,
  installHttp1FetchDispatcher as i,
  extendConnectionAttemptTimeout as n,
  ignoreMacosTypeOfServiceEinval as r,
  builtinFetchUsesHttp2 as t,
};

//# sourceMappingURL=outboundHttp-licDtJv9.mjs.map
