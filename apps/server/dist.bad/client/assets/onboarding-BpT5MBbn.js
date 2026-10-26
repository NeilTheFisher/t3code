import { Jl as e, Vl as t, ox as n } from "./utils-CPoejuy5.js";
import { Vt as r, t as i } from "./runtime-CY2dlMEg.js";
var a = t(),
  o = e(i, {
    label: `web:connection:connect-pairing`,
    scheduler: a,
    concurrency: { mode: `singleFlight`, key: (e) => JSON.stringify(e) },
    execute: (e) => r.pipe(n((t) => t.registerPairing(e))),
  }),
  s = e(i, {
    label: `web:connection:connect-ssh`,
    scheduler: a,
    concurrency: { mode: `serial`, key: (e) => JSON.stringify(e.target) },
    execute: (e) => r.pipe(n((t) => t.registerSsh(e))),
  });
export { s as n, o as t };
//# sourceMappingURL=onboarding-BpT5MBbn.js.map
