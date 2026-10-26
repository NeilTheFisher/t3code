import { i as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./react-BP46yLMB.js";
import { n } from "./jsx-runtime-BQExFN_X.js";
import { $l as r, Dc as i, Md as a, Ql as o, nu as s, ox as c } from "./utils-CPoejuy5.js";
import { _ as l, l as u, r as d, v as f } from "./runtime-CSDWbn8h.js";
import { t as p } from "./catalog-BMZrLgnL.js";
import { c as m } from "./dist-BdqWmeee.js";
var h = n(),
  g = e(t(), 1);
function _() {
  l(i, null);
}
function v(e, t) {
  l(i, { accountId: e, readClerkToken: t });
}
function y(e) {
  return async () => (e.session ? await e.session.getToken(u()) : null);
}
var b = f({
  deactivate: _,
  detach: _,
  cleanUp: async () => {
    let e = await Promise.all([
      r(i, p.removeRelayEnvironments, void 0, { reportFailure: !1, reportDefect: !1 }),
      s(() => d.runPromiseExit(a.pipe(c((e) => e.resetTokenCache)))),
    ]);
    for (let t of e) o(t, { label: `cloud account cleanup` });
  },
  activate: ({ source: e, accountId: t }) => v(t, y(e)),
});
function x(e) {
  let t = (0, h.c)(3),
    { children: n } = e,
    r = m(),
    i,
    a;
  return (
    t[0] === r
      ? ((i = t[1]), (a = t[2]))
      : ((i = () => b.attach(r)), (a = [r]), (t[0] = r), (t[1] = i), (t[2] = a)),
    (0, g.useEffect)(i, a),
    n
  );
}
var S = {
  variables: {
    colorPrimary: `var(--update-foreground)`,
    colorPrimaryForeground: `var(--card)`,
    colorDanger: `var(--error)`,
    colorSuccess: `var(--success)`,
    colorWarning: `var(--warning)`,
    colorNeutral: `var(--contrast-foreground)`,
    colorForeground: `var(--contrast-foreground)`,
    colorMuted: `color-mix(in srgb, var(--card) 98%, var(--contrast-foreground))`,
    colorMutedForeground: `var(--contrast-muted-foreground)`,
    colorBackground: `var(--card)`,
    colorInputForeground: `var(--contrast-foreground)`,
    colorInput: `var(--secondary)`,
    colorRing: `var(--ring)`,
  },
  elements: {
    formFieldErrorText: { color: `var(--error-foreground)` },
    formFieldWarningText: { color: `var(--warning-foreground)` },
    formFieldSuccessText: { color: `var(--success-foreground)` },
    otpCodeFieldErrorText: { color: `var(--error-foreground)` },
    otpCodeFieldSuccessText: { color: `var(--success-foreground)` },
  },
};
export { x as n, S as t };
//# sourceMappingURL=clerkAppearance-I_R2uyNR.js.map
