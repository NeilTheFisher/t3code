import {
  Ko as e,
  Ob as t,
  Rs as n,
  Sg as r,
  Xo as i,
  bg as a,
  cw as o,
  ec as s,
  fy as c,
  ly as l,
  q as u,
  tc as d,
  uw as f,
  yl as p,
} from "./utils-CPoejuy5.js";
import { d as m } from "./runtime-CY2dlMEg.js";
import { n as ee, t as te } from "./mediaSource-DrjifeMJ.js";
import { h as ne } from "./htmlRender-CPzSv8Q7.js";
import { l as re } from "./usageFormat-CcA7exMN.js";
function h(e) {
  return typeof e == `object` && e && !Array.isArray(e) ? e : void 0;
}
function g(e) {
  if (typeof e != `string`) return;
  let t = e.trim();
  return t.length > 0 ? t : void 0;
}
function ie(e, t) {
  if (e !== `Skill`) return;
  let n = h(t),
    r = g(n?.skill);
  return r === void 0 ? void 0 : { name: r, args: g(n?.args) };
}
function _(e) {
  return e === `js` || e === `cua_repl.js` || e === `node_repl.js`;
}
var ae = { key: `computer-use`, name: `Computer Use`, kind: `computer` };
function oe(e, t) {
  if (e === `cua_repl.js`) return `computer`;
  let n = h(t)?.code;
  return _(e) && typeof n == `string` && (/\bsky\s*\./u.test(n) || /["']@oai\/sky["']/u.test(n))
    ? `computer`
    : void 0;
}
function se(e, t, n) {
  if (_(e)) {
    let r = g(n),
      i = r && r.toLowerCase() !== `js` && r.toLowerCase() !== e?.toLowerCase() ? r : void 0;
    return g(h(t)?.title) ?? i ?? (oe(e, t) === `computer` ? `Computer use` : `Run JavaScript`);
  }
  let r = ie(e, t);
  return r === void 0 ? void 0 : `Skill: ${r.name}`;
}
function ce(e) {
  return e !== void 0 && Object.keys(e).length > 0;
}
var le = [
  `path`,
  `filePath`,
  `file_path`,
  `relativePath`,
  `filename`,
  `fileName`,
  `newPath`,
  `oldPath`,
];
function v(e, t, n, r) {
  if (r > 4 || t.length >= 8) return;
  if (Array.isArray(e)) {
    for (let i of e) if ((v(i, t, n, r + 1), t.length >= 8)) return;
    return;
  }
  let i = h(e);
  if (i) {
    for (let e of le) {
      let r = g(i[e]);
      if (r && !n.has(r) && (n.add(r), t.push(r), t.length >= 8)) return;
    }
    for (let e of [`locations`, `item`, `input`, `result`, `rawInput`, `data`, `changes`])
      if (e in i && (v(i[e], t, n, r + 1), t.length >= 8)) return;
  }
}
function ue(e) {
  let t = [];
  return (v(e, t, new Set(), 0), t);
}
function de(e) {
  let t = g(e);
  if (t && !/__|[./]/u.test(t)) return t.replace(/[_\s-]/gu, ``).toLowerCase();
}
function y(e) {
  let t = e.itemType ?? void 0,
    n = g(e.requestKind)?.toLowerCase(),
    r = g(e.data?.kind)?.toLowerCase(),
    i = de(g(e.data?.toolName) ?? g(h(e.data?.item)?.tool));
  return t === `command_execution`
    ? `command`
    : t === `image_view`
      ? `read`
      : t === `file_change`
        ? `file_change`
        : t === `web_search`
          ? `search`
          : n === `command` || r === `execute`
            ? `command`
            : n === `file-change` || r === `edit` || r === `move` || r === `delete` || r === `write`
              ? `file_change`
              : r === `search` ||
                  i === `find` ||
                  i === `grep` ||
                  i === `glob` ||
                  i === `rg` ||
                  i === `ls`
                ? `search`
                : n === `file-read` || r === `read`
                  ? `read`
                  : i === `terminal` || i === `bash` || i === `shell`
                    ? `command`
                    : i === `read` || i === `readfile`
                      ? `read`
                      : `other`;
}
var fe = [`pattern`, `query`, `searchTerm`, `regex`, `grep`, `needle`],
  pe = [`glob`, `globPattern`, `glob_pattern`, `include`, `filePattern`, `file_pattern`],
  me = [`path`, `target_directory`, `targetDirectory`, `directory`, `cwd`, `root`];
function b(e, t) {
  if (e)
    for (let n of t) {
      let t = g(e[n]);
      if (t) return t;
    }
}
function he(e) {
  return [e?.rawInput, e?.input, h(e?.item)?.input].map(h).find((e) => ce(e ?? void 0)) ?? e;
}
function ge(e) {
  if (e) return e.split(/[\\/]/u).findLast((e) => e.length > 0 && e !== `.`);
}
function x(e) {
  let t = he(e),
    n = b(t, fe),
    r = b(t, pe),
    i = ge(b(t, me));
  if (n && i) return `Searched ${n} in ${i}`;
  if (r && i) return `Searched files ${r} in ${i}`;
  if (r) return `Searched files ${r}`;
  if (n) return `Searched ${n}`;
  if (i) return `Searched in ${i}`;
}
function _e(e, t = 0) {
  let n = e.trim(),
    r = t > 0 ? ` +${t} more` : ``;
  return n ? `Read ${n}${r}` : `Read file${r}`;
}
function S(e) {
  return typeof e == `object` && e && !Array.isArray(e) ? e : void 0;
}
function C(e, t) {
  if (typeof e != `string`) return;
  let n = e.trim();
  return n && n.length <= t ? n : void 0;
}
function w(e) {
  let t = C(e, 4096);
  if (t)
    try {
      let e = new URL(t);
      return e.protocol === `http:` || e.protocol === `https:` || e.protocol === `data:`
        ? e.href
        : void 0;
    } catch {
      return;
    }
}
function ve(e) {
  let t = C(e, 4096);
  if (t)
    try {
      let e = new URL(t);
      return e.protocol === `http:` || e.protocol === `https:` ? e.href : void 0;
    } catch {
      return;
    }
}
function ye(e) {
  let t = S(e),
    n = C(t?.appId, 512);
  if (t?._tag === `app-id` && n && /^[A-Za-z0-9._-]+$/u.test(n))
    return { _tag: `app-id`, appId: n };
  let r = C(t?.displayName, 160);
  if (t?._tag === `display-name` && r) return { _tag: `display-name`, displayName: r };
}
function be(e) {
  let t = S(e);
  if (t?._tag === `website`) {
    let e = ve(t.pageUrl),
      n = w(t.faviconUrl),
      r = w(t.faviconUrlDark);
    if (e)
      return {
        _tag: `website`,
        pageUrl: e,
        ...(n ? { faviconUrl: n } : {}),
        ...(r ? { faviconUrlDark: r } : {}),
      };
  }
  if (t?._tag === `native-app`) {
    let e = ye(t.app);
    if (e) return { _tag: `native-app`, app: e };
  }
  if (t?._tag === `themed-logo`) {
    let e = w(t.logoUrl),
      n = w(t.logoUrlDark);
    if (e) return { _tag: `themed-logo`, logoUrl: e, ...(n ? { logoUrlDark: n } : {}) };
  }
}
function xe(e) {
  let t = S(e),
    n = C(t?.key, 512),
    r = C(t?.name, 160),
    i = t?.kind;
  if (!n || !r || (i !== `browser` && i !== `computer` && i !== `integration`)) return;
  let a = be(t?.icon);
  return { key: n, name: r, kind: i, ...(a ? { icon: a } : {}) };
}
function Se(e) {
  let t = S(e),
    n = xe(t?.toolSource),
    r =
      t?.toolSurface === `browser` || t?.toolSurface === `computer`
        ? t.toolSurface
        : n?.kind === `computer` || n?.kind === `browser`
          ? n.kind
          : t?.type === `dynamic_tool`
            ? oe(typeof t.toolName == `string` ? t.toolName : void 0, t.input)
            : void 0,
    i = r === `computer` && n?.kind !== `computer` ? ae : n,
    a = be(t?.toolIcon),
    o = C(t?.viewedImagePath, 4096);
  return {
    ...(r ? { toolSurface: r } : {}),
    ...(a ? { toolIcon: a } : {}),
    ...(i ? { toolSource: i } : {}),
    ...(o && !/[\r\n]/.test(o) && m(o) ? { viewedImagePath: o } : {}),
  };
}
var Ce = `2026-01-26`,
  T = `t3McpApp`,
  we = 80,
  Te = 2e3,
  Ee = 32,
  De = 256,
  Oe = 256,
  ke = 4096,
  Ae = /^(?:https?|wss?):\/\/(?:\*\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)*(?::\d{1,5})?$/i;
function je(e) {
  if (!Array.isArray(e)) return;
  let t = e.filter((e) => typeof e == `string` && e.length <= De && Ae.test(e)).slice(0, Ee);
  return t.length === 0 ? void 0 : t;
}
function Me(e) {
  if (!f(e)) return;
  let t = {};
  for (let n of [`connectDomains`, `resourceDomains`, `frameDomains`, `baseUriDomains`]) {
    let r = je(e[n]);
    r !== void 0 && (t[n] = r);
  }
  return Object.keys(t).length === 0 ? void 0 : t;
}
var Ne = [`camera`, `microphone`, `geolocation`, `clipboardWrite`];
function Pe(e) {
  if (!f(e)) return;
  let t = {};
  for (let n of Ne) f(e[n]) && (t[n] = {});
  return Object.keys(t).length === 0 ? void 0 : t;
}
var E = (e) => (typeof e == `string` && e.trim() !== `` && e.length <= Oe ? e : void 0);
function Fe(e) {
  if (!f(e)) return;
  let t = E(e.attachmentId),
    n = E(e.server),
    r = E(e.tool),
    i = typeof e.resourceUri == `string` && e.resourceUri.length <= ke ? e.resourceUri : void 0;
  if (t === void 0 || n === void 0 || r === void 0 || i === void 0 || !i.startsWith(`ui://`))
    return;
  let a = Me(e.csp),
    o = Pe(e.permissions);
  return {
    attachmentId: t,
    server: n,
    tool: r,
    resourceUri: i,
    ...(a === void 0 ? {} : { csp: a }),
    ...(o === void 0 ? {} : { permissions: o }),
    ...(typeof e.prefersBorder == `boolean` ? { prefersBorder: e.prefersBorder } : {}),
  };
}
function Ie(e, t) {
  return (
    e.attachmentId === t.attachmentId &&
    e.server === t.server &&
    e.tool === t.tool &&
    e.resourceUri === t.resourceUri
  );
}
function Le(e) {
  let t = [];
  return (
    e?.camera && t.push(`camera`),
    e?.microphone && t.push(`microphone`),
    e?.geolocation && t.push(`geolocation`),
    e?.clipboardWrite && t.push(`clipboard-write`),
    t.join(`; `)
  );
}
function Re(e) {
  return Number.isFinite(e) ? Math.round(Math.min(Te, Math.max(we, e))) : 320;
}
function ze(e) {
  return `${e.tool.replace(/[^\w.-]+/g, `-`).slice(0, 80) || `app`}.html`;
}
var Be = 4e3;
function Ve(e) {
  if (typeof e != `object` || !e) return;
  let { text: t, speed: n, interrupt: r } = e;
  if (typeof t != `string`) return;
  let i = t.trim();
  if (!(i.length === 0 || i.length > Be))
    return {
      text: i,
      ...(typeof n == `number` && Number.isFinite(n) && n > 0 ? { speed: n } : {}),
      ...(r === !0 ? { interrupt: !0 } : {}),
    };
}
var He = 16384,
  Ue = 8192,
  We = 256,
  Ge = 100,
  Ke = 32,
  qe = 4,
  Je = 128,
  Ye = new TextEncoder();
function D(e, t, n = 0) {
  if (n > qe || t.remainingNodes-- <= 0) return ((t.exceeded = !0), { failed: !1 });
  if (typeof e == `string`) {
    if (e.length > t.remainingBytes) return ((t.exceeded = !0), { failed: !1 });
    let r = Ye.encode(e).byteLength;
    if (r > t.remainingBytes) return ((t.exceeded = !0), { failed: !1 });
    t.remainingBytes -= r;
    try {
      return D(JSON.parse(e), t, n + 1);
    } catch {
      return { failed: !1 };
    }
  }
  if (Array.isArray(e)) {
    if (e.length > Ke) return ((t.exceeded = !0), { failed: !1 });
    let r,
      i = !1;
    for (let a of e) {
      let e = f(a) ? a.text : void 0,
        o = D(f(e) ? (e.text ?? e) : e, t, n + 1);
      if (((r ??= o.data), (i ||= o.failed), t.exceeded)) break;
    }
    return { ...(r === void 0 ? {} : { data: r }), failed: i };
  }
  if (!f(e)) return { failed: !1 };
  let r =
      e.isError === !0 ||
      e.is_error === !0 ||
      e._tag === `OrchestratorMcpFailure` ||
      e.error != null,
    i = e.structuredContent ?? e.content;
  if (i !== void 0) {
    let e = D(i, t, n + 1);
    return { ...e, failed: r || e.failed };
  }
  return { data: e, failed: r };
}
function O(e) {
  if (!(typeof e != `string` || e.length > We || e.trim() === ``)) return Array.from(e).join(``);
}
function k(e) {
  let t = { remainingBytes: He, remainingNodes: Je, exceeded: !1 },
    n = D(e, t),
    r = n.failed ? { isError: !0 } : {},
    i = t.exceeded ? void 0 : n.data;
  if (i !== void 0) {
    for (let e of [`threadId`, `messageId`, `taskId`, `scheduledTaskId`]) {
      let t = O(i[e]);
      t !== void 0 && (r[e] = t);
    }
    i.status === `rolled_back` && (r.status = `rolled_back`);
    let e = ne(i.htmlRender);
    e !== void 0 && (r.htmlRender = e);
    let t = Ve(i.speak);
    t !== void 0 && (r.speak = t);
    let n = Fe(i[T]);
    n !== void 0 && (r[T] = n);
    let a = f(i.thread) ? O(i.thread.threadId) : void 0;
    if ((a !== void 0 && (r.thread = { threadId: a }), Array.isArray(i.threads))) {
      let e = i.threads.length <= Ge,
        t = [];
      if (e)
        for (let n of i.threads) {
          if (!f(n)) {
            e = !1;
            break;
          }
          let r = O(n.threadId),
            i = n.status === `rolled_back`;
          if (r === void 0 && !i) {
            e = !1;
            break;
          }
          t.push({
            ...(r === void 0 ? {} : { threadId: r }),
            ...(i ? { status: `rolled_back` } : {}),
          });
        }
      e ? (r.threads = t) : (delete r.threadId, delete r.status);
    }
  }
  let a = () => Ye.encode(JSON.stringify(r)).byteLength > Ue;
  a() && (delete r.threads, delete r.threadId, delete r.status);
  let o = r[T];
  if (o?.csp !== void 0 && a()) {
    let { csp: e, ...t } = o;
    r[T] = t;
  }
  return (a() && delete r[T], Object.keys(r).length === 0 ? void 0 : r);
}
function Xe(e) {
  if (d(e.toolName) !== `html_render`) return;
  let t = k(e.output);
  return t?.isError ? void 0 : t?.htmlRender;
}
function Ze(e) {
  if (d(e.toolName) !== `t3_speak`) return;
  let t = k(e.output);
  return t?.isError ? void 0 : t?.speak;
}
function Qe(e) {
  let t = k(e.output)?.[T];
  return t !== void 0 && e.toolName === `${t.server}.${t.tool}` ? t : void 0;
}
function A(e) {
  return (
    /file not found|no files found|enoent|no such file|commandnotfoundexception|command not found|is not recognized as the name of a cmdlet|a parameter cannot be found that matches parameter name/i.test(
      e,
    ) ||
    (/cannot find path/i.test(e) && /because it does not exist/i.test(e)) ||
    (/is not recognized/i.test(e) && /the term '/i.test(e)) ||
    /<exited with exit code\s+[1-9]\d*\s*>/i.test(e) ||
    /exit(?:ed)? with exit code\s+[1-9]\d*/i.test(e) ||
    /exit code\s*[:\s]\s*[1-9]\d*\b/i.test(e)
  );
}
function j(e) {
  if (!f(e) || e.type !== `image`) return null;
  let t = f(e.source) ? e.source : void 0;
  if (t !== void 0 && t.type !== `base64`) return null;
  let n = t === void 0 ? e.mimeType : t.media_type,
    r = t === void 0 ? e.data : t.data;
  if (typeof n != `string` || !c(n)) return null;
  let i = { mimeType: n.toLowerCase() };
  return typeof r == `string` ? { ...i, data: r } : i;
}
function $e(e) {
  return Array.isArray(e) ? e : f(e) && Array.isArray(e.content) ? e.content : [e];
}
Math.ceil(l / 3) * 4;
function et(e) {
  let t = [];
  for (let n of $e(e)) if (j(n) !== null && (t.push(n), t.length === 8)) break;
  return t;
}
function tt(e) {
  return et(e).flatMap((e) => j(e) ?? []);
}
var nt = 4;
function M(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function rt(e) {
  return M(e) && e.truncated === !0 && typeof e.summary == `string`;
}
function N(e, t, n) {
  if (t > nt) return null;
  if (typeof e == `string`) return e;
  if (Array.isArray(e)) {
    let r = e.map((e) => N(e, t + 1, n));
    return r.every((e) => e !== null)
      ? r.filter((e) => e !== ``).join(`
`)
      : null;
  }
  if (!M(e)) return null;
  if (e.type === `text` && typeof e.text == `string`) return e.text;
  if (e.type === `image`) return n.includes(e) ? `` : `[image]`;
  if (e.type === `resource_link` && typeof e.uri == `string`) return e.uri;
  if (e.type === `resource` && M(e.resource)) {
    let t = e.resource;
    if (typeof t.text == `string`) return t.text;
    if (typeof t.uri == `string`) return t.uri;
  }
  let r = Object.keys(e).filter((e) => e !== `isError` && e !== `is_error`);
  if (r.length === 1 && r[0] === `content`) return N(e.content, t + 1, n);
  if (r.length === 2 && r.includes(`content`) && r.includes(`structuredContent`)) {
    let r = N(e.content, t + 1, n);
    return r?.trim() ? r : null;
  }
  return null;
}
function P(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
function it(e) {
  let t = e.trim();
  if (!/^[[{]/.test(t)) return e;
  let n = P(t);
  if (n !== void 0) return JSON.stringify(n, null, 2);
  let r = t
    .split(`
`)
    .filter((e) => e.trim())
    .map((e) => P(e.trim()));
  return r.some((e) => e === void 0)
    ? e
    : r.map((e) => JSON.stringify(e, null, 2)).join(`

`);
}
function at(e, t = !1) {
  if (e == null || (t && M(e) && e.type === `image`)) return null;
  let n = N(e, 0, et(e));
  if (n !== null) return n.trim() ? it(n) : null;
  let r;
  try {
    r = JSON.stringify(e, null, 2);
  } catch {
    return String(e);
  }
  return r === void 0 || r === `{}` || r === `[]` ? null : r;
}
function F(e) {
  if (e.command !== void 0)
    return { command: e.command.trim() || null, args: null, argsText: null };
  let t = e.args;
  if (M(t) && !rt(t)) {
    let e = Object.entries(t).flatMap(([e, t]) =>
      t === void 0
        ? []
        : [[e, typeof t == `string` && t !== `` ? t : (JSON.stringify(t) ?? String(t))]],
    );
    return { command: null, args: e.length > 0 ? e : null, argsText: null };
  }
  return { command: null, args: null, argsText: at(t) };
}
function ot(e) {
  return e.command !== null || e.args !== null || e.argsText !== null;
}
var st = new Set([`idle`, `pending`, `running`, `waiting`]);
function ct(e) {
  return st.has(e.status) ? `live` : t(e.updatedAt);
}
function lt(e) {
  switch (e.type) {
    case `command_execution`:
      return e.outputOmitted === !0;
    case `dynamic_tool`:
      return e.outputOmitted === !0 || rt(e.input);
    default:
      return !1;
  }
}
function ut(e) {
  if (!e.trimStart().startsWith(`{"stdout"`)) return e;
  let t = P(e.trim());
  return !M(t) ||
    typeof t.stdout != `string` ||
    typeof t.stderr != `string` ||
    typeof t.interrupted != `boolean`
    ? e
    : [t.stdout, t.stderr].filter((e) => typeof e == `string` && e.trim().length > 0).join(`
`);
}
function dt(e) {
  switch (e.type) {
    case `command_execution`:
      return (e.output?.trim() && ut(e.output)) || null;
    case `dynamic_tool`:
      return e.outputOmitted === !0 ? null : at(e.output, e.viewedImagePath !== void 0);
    case `file_search`:
      return e.results?.length
        ? e.results.map((e) =>
            [`${e.fileName}${e.line === void 0 ? `` : `:${e.line}`}`, e.preview?.trim()].filter(
              Boolean,
            ).join(`
`),
          ).join(`
`)
        : null;
    case `web_search`:
      return e.results?.length
        ? e.results.map((e) =>
            [e.title?.trim() || e.url, e.title ? e.url : void 0, e.snippet?.trim()].filter(Boolean)
              .join(`
`),
          ).join(`

`)
        : null;
    default:
      return null;
  }
}
function ft(e) {
  return e.type !== `dynamic_tool` || e.outputOmitted === !0
    ? []
    : tt(e.output).map((t, n) => ({
        _tag: `tool-output-image`,
        threadId: e.threadId,
        itemId: e.id,
        index: n,
      }));
}
function pt(e) {
  switch (e.type) {
    case `reasoning`:
      return e.text.trim().length > 0;
    case `command_execution`:
      return (
        F({ command: e.input }).command !== null ||
        e.outputOmitted === !0 ||
        !!e.output?.trim() ||
        (e.exitCode !== void 0 && e.exitCode !== 0)
      );
    case `file_change`:
    case `checkpoint`:
    case `fork`:
    case `handoff`:
      return !0;
    case `file_search`:
      return (e.results?.length ?? 0) > 0 || !!e.pattern?.trim();
    case `web_search`:
      return (e.results?.length ?? 0) > 0 || (e.patterns?.length ?? 0) > 0;
    case `dynamic_tool`:
      return e.outputOmitted === !0 || ot(F({ args: e.input }));
    case `approval_request`:
      return !!e.prompt?.trim();
    case `user_input_request`:
      return e.questions.length > 0;
    case `notification`:
      return !!e.detail?.trim();
    case `system_notice`:
      return e.message.trim().length > 0;
    case `error`:
      return e.failure.message.trim().length > 0;
    case `proposed_plan`:
      return e.markdown.trim().length > 0;
    case `todo_list`:
      return e.steps.length > 0;
    case `subagent`:
      return e.childThreadId !== null;
    default:
      return !1;
  }
}
function I(e) {
  return typeof e == `object` && e && !Array.isArray(e) ? e : void 0;
}
function L(e) {
  return typeof e == `string` && e.trim() !== `` ? e : void 0;
}
function R(e, t = 0) {
  if (t > 4) return { failed: !1 };
  if (typeof e == `string`)
    try {
      return R(JSON.parse(e), t + 1);
    } catch {
      return { failed: !1 };
    }
  if (Array.isArray(e)) {
    let n,
      r = !1;
    for (let i of e) {
      let e = I(i),
        a = e?.text ?? I(e?.content)?.text,
        o = R(I(a)?.text ?? a, t + 1);
      ((n ??= o.data), (r ||= o.failed));
    }
    return { ...(n ? { data: n } : {}), failed: r };
  }
  let n = I(e);
  if (!n) return { failed: !1 };
  let r =
      n.isError === !0 ||
      n.is_error === !0 ||
      (typeof n._tag == `string` && /(?:Error|Failure)$/.test(n._tag)) ||
      n.error != null,
    i = n.structuredContent ?? n.content;
  if (i !== void 0) {
    let e = R(i, t + 1);
    return { ...(e.data ? { data: e.data } : {}), failed: r || e.failed };
  }
  return { data: n, failed: r };
}
function mt(e) {
  let t = R(e).data;
  return t && typeof t.toolName == `string` ? I(t.args) : t;
}
function z(e) {
  return R(e).failed;
}
function B(e) {
  return new Set(e.filter((e) => e !== void 0)).size + e.filter((e) => e === void 0).length;
}
function V(e, t, n = `${t}s`) {
  return `${e} ${e === 1 ? t : n}`;
}
function ht(e, t) {
  let n = t.map((e) => {
      let t = R(e.output);
      return { input: mt(e.input), output: t.data, outcome: t.failed ? `failed` : e.outcome };
    }),
    r = n.filter((e) => e.outcome === `completed`),
    i = n.filter((e) => e.outcome === `failed`).length,
    a = r.length > 0 ? r : n,
    o = V(a.length, `time`),
    s = (e, t, n) => `${r.length > 0 ? e : `Tried to ${t}`} ${n}`,
    c = (e) => a.map((t) => L(t.output?.[e]) ?? L(t.input?.[e])),
    l = a.map((e) => L(e.output?.id) ?? L(e.output?.projectId) ?? L(e.input?.projectId)),
    u = a.map(
      (e) => L(e.output?.threadId) ?? L(I(e.output?.thread)?.threadId) ?? L(e.input?.threadId),
    ),
    d;
  switch (e) {
    case `thread-send`: {
      let e = B(a.map((e) => L(e.output?.messageId))),
        t = u.every((e) => e !== void 0),
        n = new Set(u).size;
      d = s(
        `Sent`,
        `send`,
        t
          ? e === n && e > 1
            ? `messages to ${V(n, `thread`)}`
            : `${V(e, `message`)} to ${V(n, `thread`)}`
          : V(e, `message`),
      );
      break;
    }
    case `thread-create`: {
      let e = [];
      d =
        r.length > 0 &&
        r.every((t) =>
          (Array.isArray(t.output?.threads) ? t.output.threads : [t.output]).every((t) => {
            let n = I(t);
            if (n?.status === `rolled_back`) return !0;
            let r = L(n?.threadId);
            return r ? (e.push(r), !0) : !1;
          }),
        )
          ? `Created ${V(new Set(e).size, `thread`)}`
          : `Requested thread creation ${o}`;
      break;
    }
    case `delegate`:
      d = s(`Delegated`, `delegate`, V(B(c(`taskId`)), `task`));
      break;
    case `thread-read`:
    case `thread-wait`: {
      let t = u.every((e) => e !== void 0) ? V(new Set(u).size, `thread`) : `threads ${o}`;
      d = e === `thread-read` ? s(`Read`, `read`, t) : s(`Waited on`, `wait on`, t);
      break;
    }
    case `thread-list`:
      d = s(`Listed`, `list`, `threads ${o}`);
      break;
    case `thread-interrupt`:
      d = s(`Requested interrupts for`, `interrupt`, V(B(u), `thread`));
      break;
    case `workflow-stop`:
      d = s(`Requested stops for`, `stop`, V(B(c(`subagentId`)), `workflow`));
      break;
    case `task-status`:
      d = s(`Checked`, `check`, `task status ${o}`);
      break;
    case `background-wait`:
      d = s(`Updated`, `update`, `background waits ${o}`);
      break;
    case `task-cancel`:
      d = s(`Requested cancellation of`, `cancel`, V(B(c(`taskId`)), `task`));
      break;
    case `schedule-create`:
      d = s(`Scheduled`, `schedule`, V(B(c(`scheduledTaskId`)), `task`));
      break;
    case `schedule-list`:
      d = s(`Listed`, `list`, `scheduled tasks ${o}`);
      break;
    case `schedule-update`:
      d = s(`Updated`, `update`, V(B(c(`scheduledTaskId`)), `scheduled task`));
      break;
    case `schedule-delete`:
      d = s(`Requested deletion of`, `delete`, V(B(c(`scheduledTaskId`)), `scheduled task`));
      break;
    case `schedule-run`:
      d = s(`Requested`, `request`, V(a.length, `scheduled task run`));
      break;
    case `thread-configuration`:
      d = s(`Checked`, `check`, `thread configuration ${o}`);
      break;
    case `thread-configure`:
      d = s(`Set`, `set`, `thread model ${o}`);
      break;
    case `thread-fork`:
      d = s(`Requested`, `request`, V(a.length, `thread fork`));
      break;
    case `thread-merge`:
      d = s(`Requested`, `request`, V(a.length, `context merge`));
      break;
    case `thread-search`:
      d = s(`Searched`, `search`, `threads ${o}`);
      break;
    case `thread-transfers`:
      d = s(`Checked`, `check`, `thread transfers ${o}`);
      break;
    case `thread-organize`:
      d = s(`Organized`, `organize`, `threads ${o}`);
      break;
    case `thread-update`:
      d = s(`Updated`, `update`, V(B(u), `thread`));
      break;
    case `queue-list`:
      d = s(`Listed`, `list`, `queued messages ${o}`);
      break;
    case `queue-read`:
      d = s(`Read`, `read`, V(B(c(`queuedRunId`)), `queued message`));
      break;
    case `queue-edit`:
      d = s(`Edited`, `edit`, V(B(c(`queuedRunId`)), `queued message`));
      break;
    case `queue-cancel`:
      d = s(`Requested cancellation of`, `cancel`, V(B(c(`queuedRunId`)), `queued run`));
      break;
    case `queue-reorder`:
      d = s(`Reordered`, `reorder`, V(B(c(`queuedRunId`)), `queued run`));
      break;
    case `queue-steer`:
      d = s(`Requested steering with`, `steer with`, V(B(c(`queuedRunId`)), `queued message`));
      break;
    case `question-list`:
      d = s(`Listed`, `list`, `pending questions ${o}`);
      break;
    case `question-read`:
      d = s(`Read`, `read`, V(B(c(`requestId`)), `pending question request`));
      break;
    case `question-respond`:
      d = s(`Answered`, `answer`, V(B(c(`requestId`)), `pending question request`));
      break;
    case `secret-request`:
      d = s(`Asked for`, `ask for`, V(a.length, `secret`));
      break;
    case `worktree-handoff`:
      d = s(`Handed off to`, `hand off to`, V(B(c(`worktreePath`)), `worktree`));
      break;
    case `worktree-list`:
      d = s(`Listed`, `list`, `workspace branches ${o}`);
      break;
    case `worktree-status`:
      d = s(`Checked`, `check`, `worktree status ${o}`);
      break;
    case `project-list`:
      d = s(`Listed`, `list`, `projects ${o}`);
      break;
    case `project-read`:
      d = s(`Read`, `read`, V(B(l), `project`));
      break;
    case `project-create`:
      d = s(`Registered`, `register`, V(B(l), `project`));
      break;
    case `project-update`:
      d = s(`Updated`, `update`, V(B(l), `project`));
      break;
    case `project-delete`:
      d = s(`Deleted`, `delete`, V(B(l), `project`));
      break;
    case `project-clone`:
      d = s(`Cloned`, `clone`, V(B(c(`cwd`)), `repository`, `repositories`));
      break;
    case `environment-read`:
      d = s(`Checked`, `check`, `environment preferences ${o}`);
      break;
    case `environment-update`:
      d = s(`Updated`, `update`, `environment preferences ${o}`);
      break;
    case `attachment-prepare`:
      d = s(`Prepared`, `prepare`, V(B(c(`attachmentId`)), `attachment upload`));
      break;
    case `attachment-discard`:
      d = s(`Discarded`, `discard`, V(B(c(`attachmentId`)), `pending attachment`));
      break;
    case `attachment-send`: {
      let e = new Map();
      a.forEach((t, n) => e.set(L(t.output?.messageId) ?? `call-${n}`, t));
      let t = [...e.values()].reduce(
          (e, t) => e + (Array.isArray(t.input?.attachments) ? t.input.attachments.length : 0),
          0,
        ),
        n = [...e.values()].every(
          (e) => Array.isArray(e.input?.attachments) && e.input.attachments.length > 0,
        ),
        r = u.every((e) => e !== void 0) ? ` to ${V(new Set(u).size, `thread`)}` : ``;
      d = s(`Sent`, `send`, n ? `${V(t, `attachment`)}${r}` : `attachments${r} ${o}`);
      break;
    }
    case `link-pr`:
      d = s(`Linked`, `link`, V(a.length, `pull request`));
      break;
    case `unlink-pr`:
      d = s(`Unlinked`, `unlink`, V(a.length, `pull request`));
      break;
    case `watch-pr`:
      d = s(`Watching`, `watch`, V(a.length, `pull request`));
      break;
    case `unwatch-pr`:
      d = s(`Stopped watching`, `stop watching`, V(a.length, `pull request`));
      break;
    case `list-prs`:
      d = s(`Checked`, `check`, `linked pull requests${a.length === 1 ? `` : ` ${o}`}`);
      break;
    case `write-pr-guides`: {
      let e = a.flatMap((e) =>
          Array.isArray(e.output?.guides) ? e.output.guides.map((e) => I(e)?.outcome) : [],
        ),
        t = e.filter((e) => e !== `failed`).length,
        n = e.length - t;
      ((i += n),
        (d =
          e.length === 0
            ? s(`Started writing`, `start writing`, `review guides${a.length === 1 ? `` : ` ${o}`}`)
            : t === 0
              ? `Could not start ${V(n, `review guide`)}`
              : s(`Started`, `start`, `${V(t, `review guide`)}${n > 0 ? `, ${n} failed` : ``}`)));
      break;
    }
    case `read-pr-guide`:
      d = s(`Read`, `read`, V(a.length, `review guide`));
      break;
    case `browser`:
      d = s(`Used`, `use`, `browser ${o}`);
      break;
    case `device`:
      d = s(`Used`, `use`, `device controls ${o}`);
      break;
    case `html-preview`:
      d = s(`Previewed`, `preview`, V(a.length, `HTML page`));
      break;
    case `html-render`:
      d = s(`Rendered`, `render`, V(a.length, `HTML page`));
      break;
    case `speak`:
      d = s(`Spoke`, `speak`, V(a.length, `utterance`));
      break;
    case `capabilities`:
      d = s(`Checked`, `check`, `orchestration capabilities ${o}`);
  }
  return { label: d, failedCount: i };
}
function H(e) {
  return e.status === `running` || e.beforeTokenCount === void 0 || e.afterTokenCount === void 0
    ? null
    : { before: re(e.beforeTokenCount), after: re(e.afterTokenCount) };
}
function gt(e) {
  if (e.status === `failed`) return `Context compaction failed`;
  if (e.status === `cancelled` || e.status === `interrupted`) return `Context compaction stopped`;
  if (a(e.status)) return `Compacting context`;
  let t = H(e);
  return t ? `Context compacted ${t.before} → ${t.after} tokens` : `Context compacted`;
}
function _t(e) {
  return e.replace(/\s+(?:complete|completed)\s*$/i, ``).trim();
}
function U(e) {
  let t = e.structuredPayload;
  if (t?.type === `dynamic_tool` && t.toolName) return t.toolName;
  let n = K(e.toolData);
  return typeof n?.server == `string` && typeof n.tool == `string`
    ? `${n.server}.${n.tool}`
    : typeof n?.toolName == `string`
      ? n.toolName
      : s(e.toolTitle)
        ? e.toolTitle
        : e.label;
}
function W(e) {
  let t = e.structuredPayload,
    n = K(e.toolData);
  return t?.type === `dynamic_tool`
    ? t.output
    : (n?.output ?? n?.result ?? n?.rawOutput ?? n?.content);
}
function vt(e, t, r) {
  if (!e) return null;
  let [i, a, o, s] = e.labels,
    c =
      t === `inProgress`
        ? a
        : t === `completed`
          ? o
          : t === `failed`
            ? `Failed to ${i.toLowerCase()}`
            : t === `declined`
              ? `Declined to ${i.toLowerCase()}`
              : t === `stopped`
                ? `Stopped ${a.toLowerCase()}`
                : a,
    l =
      e.summaryAction === `link-pr` ||
      e.summaryAction === `unlink-pr` ||
      e.summaryAction === `list-prs` ||
      e.summaryAction === `watch-pr` ||
      e.summaryAction === `unwatch-pr`
        ? e.summaryAction
        : void 0,
    u = K(r),
    d = K(u?.arguments) ?? K(u?.input) ?? K(u?.rawInput),
    f = typeof d?.url == `string` ? n.parseChangeRequestUrl(d.url) : null,
    p = f?.link.number ?? d?.number,
    { shortLabel: m } = (f?.definition ?? n.get(void 0)).changeRequest;
  return {
    displayName: `${c} ${l !== void 0 && l !== `list-prs` && typeof p == `number` && Number.isSafeInteger(p) && p > 0 ? `${m} #${p}` : s}`,
    icon: e.icon,
    ...(l === void 0 ? {} : { action: l }),
  };
}
function yt(e, t) {
  return e === `failed` || e === `declined` || e === `stopped` || e === `idle`
    ? e
    : t || e === `inProgress`
      ? `inProgress`
      : `completed`;
}
function G(e, t) {
  let n = s(U(e)),
    r = e.toolLifecycleStatus ?? t;
  return vt(n, n && z(W(e)) ? `failed` : r, e.toolData);
}
function K(e) {
  return typeof e == `object` && e && !Array.isArray(e) ? e : null;
}
function q(e) {
  return (
    e.tone === `tool` ||
    e.tone === `thinking` ||
    e.tone === `error` ||
    (e.command !== void 0 && e.command.trim().length > 0) ||
    e.requestKind !== void 0 ||
    (e.itemType !== void 0 && r(e.itemType))
  );
}
function bt(e, t) {
  if (
    e.tone === `error` ||
    e.toolLifecycleStatus === `failed` ||
    e.toolLifecycleStatus === `declined`
  )
    return !0;
  if (!q(e) || e.itemType === `reasoning`) return !1;
  if (s(U(e)) && z(W(e))) return !0;
  let n = e.structuredPayload;
  if (
    n?.type === `command_execution` &&
    (n.outputIndicatesFailure ||
      (n.exitCode !== void 0 && n.exitCode !== 0) ||
      (n.output && A(n.output.slice(0, 32768))))
  )
    return !0;
  let r = t
    ? [e.detail, e.command].filter(Boolean).join(`
`)
    : (e.detail ?? ``);
  return r.length > 0 && A(r);
}
function xt(e) {
  return bt(e, !0);
}
function St(e) {
  return bt(e, !1);
}
function Ct(e) {
  return (
    e.itemType === `file_search` ||
    (e.itemType === `web_search` && /\bgrep\b/i.test(_t(e.toolTitle ?? e.label)))
  );
}
function J(e) {
  if (e.itemType === `thread_created`) return `thread-create`;
  let t = G(e);
  if (t?.action !== void 0) return t.action;
  if (t?.icon === `browser`) return `browser`;
  if (t?.icon === `device`) return `device`;
  if (e.requestKind === `file-read` || e.viewedImagePath !== void 0) return `read`;
  if (e.itemType === `approval_request` || e.itemType === `user_input_request`)
    return q(e) ? `other` : `update`;
  let n = K(e.toolData) ?? {},
    r =
      e.structuredPayload?.type === `dynamic_tool`
        ? e.structuredPayload.toolName
        : typeof n.toolName == `string`
          ? n.toolName
          : e.toolTitle,
    i = y({
      itemType:
        e.itemType === `command_execution` ||
        e.itemType === `file_change` ||
        e.itemType === `web_search`
          ? e.itemType
          : e.itemType === `dynamic_tool`
            ? `dynamic_tool_call`
            : void 0,
      title: e.toolTitle ?? e.label,
      data: { ...n, ...(r ? { toolName: r } : {}) },
    });
  return i === `read`
    ? `read`
    : i === `file_change` || e.itemType === `file_change`
      ? `edit`
      : i === `command` || e.itemType === `command_execution` || e.command
        ? `command`
        : i === `search`
          ? e.itemType === `web_search` && !Ct(e)
            ? `search`
            : `code-search`
          : Ct(e)
            ? `code-search`
            : e.itemType === `web_search`
              ? `search`
              : (e.changedFiles?.length ?? 0) > 0
                ? `edit`
                : q(e)
                  ? `other`
                  : `update`;
}
function wt(e) {
  let t = e.viewedImagePath?.trim();
  if (t !== void 0 && !/[\r\n]/.test(t) && m(t)) return t;
  let n = e.detail?.trim();
  return J(e) === `read` && n !== void 0 && !/[\r\n]/.test(n) && m(n) ? n : null;
}
function Tt(e, t) {
  let n = ee(e, t.workspaceRoot ?? `.`);
  if (n._tag !== `WorkspaceFile`) return null;
  let r = t.workspaceRoot == null && n.path.startsWith(`./`) ? n.path.slice(2) : n.path,
    i = te(e, { threadId: t.threadId, workspaceRoot: t.workspaceRoot, resolvedFilePath: r });
  return i === null || i.access !== `environment`
    ? null
    : { resource: i.resource, alt: i.name, srcFragment: i.srcFragment };
}
function Et(e, t) {
  if (e !== `edit`) return t.length;
  let n = new Set(),
    r = 0;
  for (let e of t)
    if (!e.changedFiles || e.changedFiles.length === 0) r += 1;
    else for (let t of e.changedFiles) n.add(t);
  return n.size + r;
}
function Dt(e, t) {
  switch (e) {
    case `link-pr`:
      return `Linked ${t} ${t === 1 ? `pull request` : `pull requests`}`;
    case `unlink-pr`:
      return `Unlinked ${t} ${t === 1 ? `pull request` : `pull requests`}`;
    case `watch-pr`:
      return `Watching ${t} ${t === 1 ? `pull request` : `pull requests`}`;
    case `unwatch-pr`:
      return `Stopped watching ${t} ${t === 1 ? `pull request` : `pull requests`}`;
    case `list-prs`:
      return t === 1 ? `Checked linked pull requests` : `Checked linked pull requests ${t} times`;
    case `read`:
      return `Read ${t} ${t === 1 ? `file` : `files`}`;
    case `edit`:
      return `Changed ${t} ${t === 1 ? `file` : `files`}`;
    case `command`:
      return `Ran ${t} ${t === 1 ? `command` : `commands`}`;
    case `thread-create`:
      return `Created ${t} ${t === 1 ? `thread` : `threads`}`;
    case `device`:
      return `Used device controls ${t} ${t === 1 ? `time` : `times`}`;
    case `browser`:
      return `Used browser ${t} ${t === 1 ? `time` : `times`}`;
    case `search`:
      return `Searched the web ${t} ${t === 1 ? `time` : `times`}`;
    case `code-search`:
      return `Searched code ${t} ${t === 1 ? `time` : `times`}`;
    case `other`:
      return `Used ${t} ${t === 1 ? `tool` : `tools`}`;
    case `update`:
      return `Received ${t} ${t === 1 ? `update` : `updates`}`;
  }
}
function Ot(e) {
  let t = e.structuredPayload,
    n = e.toolData !== null && typeof e.toolData == `object` ? e.toolData : void 0;
  return {
    input: t?.type === `dynamic_tool` ? t.input : (n?.arguments ?? n?.input ?? n?.rawInput),
    output: W(e),
    outcome:
      e.toolLifecycleStatus === `failed` ||
      e.toolLifecycleStatus === `declined` ||
      e.tone === `error`
        ? `failed`
        : e.toolLifecycleStatus === `completed`
          ? `completed`
          : `unfinished`,
  };
}
function kt(e) {
  switch (e) {
    case `command`:
    case `edit`:
    case `delegate`:
    case `task-cancel`:
    case `thread-create`:
    case `thread-send`:
    case `thread-interrupt`:
    case `workflow-stop`:
    case `background-wait`:
    case `schedule-create`:
    case `schedule-update`:
    case `schedule-delete`:
    case `schedule-run`:
    case `thread-configure`:
    case `thread-fork`:
    case `thread-merge`:
    case `thread-organize`:
    case `thread-update`:
    case `queue-edit`:
    case `queue-cancel`:
    case `queue-reorder`:
    case `queue-steer`:
    case `question-respond`:
    case `worktree-handoff`:
    case `project-create`:
    case `project-update`:
    case `project-delete`:
    case `project-clone`:
    case `environment-update`:
    case `attachment-prepare`:
    case `attachment-discard`:
    case `attachment-send`:
      return 0;
    case `other`:
    case `update`:
      return 2;
    default:
      return 1;
  }
}
function At(e) {
  let t = e.filter((e) => e.itemType !== `reasoning`);
  if (e.length > 0 && t.length === 0)
    return { summary: e.length === 1 ? `Thought` : `Thought (×${e.length})`, hasFailure: !1 };
  e = t;
  let n = new Map(),
    r = new Map();
  for (let t of e) {
    let e = s(U(t))?.summaryAction ?? null;
    if (t.toolSource && e === null) {
      r.set(t.toolSource.key, t.toolSource);
      continue;
    }
    let i = J(t),
      a = e ?? i,
      o = n.get(a);
    o ? o.entries.push(t) : n.set(a, { action: i, t3Action: e, entries: [t] });
  }
  let i = [...n].map(([e, t], n) => ({
      index: n,
      count: t.entries.length,
      priority: kt(e),
      ...(t.t3Action
        ? ht(t.t3Action, t.entries.map(Ot))
        : {
            label: Dt(t.action, Et(t.action, t.entries)),
            failedCount: t.entries.filter(St).length,
          }),
    })),
    a = [...i]
      .sort((e, t) => e.priority - t.priority || e.index - t.index)
      .slice(0, 2)
      .sort((e, t) => e.index - t.index),
    o = a.map(({ label: e }) => e);
  if (r.size > 0) {
    let e = [...r.values()],
      t = [...new Set(e.map((e) => e.name))],
      n =
        t.length < 2
          ? t[0]
          : t.length === 2
            ? t.join(` and `)
            : `${t.slice(0, -1).join(`, `)}, and ${t.at(-1)}`,
      i = e.every((e) => e.kind === `integration`);
    o.unshift(`Used ${n}${i ? ` ${t.length === 1 ? `integration` : `integrations`}` : ``}`);
  }
  let c = e.filter((e) => e.toolSource !== void 0 && s(U(e)) === null).length,
    l = e.length - c - a.reduce((e, t) => e + t.count, 0);
  l > 0 && o.push(`Performed ${l} other ${l === 1 ? `action` : `actions`}`);
  let u = o.map((e, t) => (t === 0 ? e : e.charAt(0).toLowerCase() + e.slice(1)));
  return {
    summary: u.length < 3 ? u.join(` and `) : `${u.slice(0, -1).join(`, `)}, and ${u.at(-1)}`,
    hasFailure: i.some((e) => e.failedCount > 0),
  };
}
function jt(e) {
  let t = e.filter((e) => e.itemType !== `reasoning`);
  if (e.length > 0 && t.length === 0) return `reasoning`;
  if (((e = t), e.length > 0 && e.every((e) => G(e)?.icon === `pull-request`)))
    return `pull-request`;
  let n = new Set(e.map(J));
  if (n.size !== 1) return `mixed`;
  let r = n.values().next().value;
  if (r !== `other`) return r;
  let i = new Set(
    e.map((e) =>
      e.itemType === `dynamic_tool`
        ? `dynamic-tool`
        : e.itemType === `subagent` || e.tone === `thinking`
          ? `agent-tool`
          : e.tone === `tool`
            ? `tone-tool`
            : `other`,
    ),
  );
  return i.size === 1 ? i.values().next().value : `mixed`;
}
function Mt(e) {
  let t = /^\s*\*\*([^*\r\n]+)\*\*[ \t]*\r?(?:\n|$)/.exec(e)?.[1],
    n = (t ?? e)
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, `$1`)
      .replace(/^[ \t]*(?:#{1,6}|[-*+]|\d+\.)[ \t]+/gm, ``)
      .replace(/`+|\*\*|~~/g, ``)
      .replace(/(^|[^\w*])[*_]([^*_\n]+)[*_](?![\w*])/g, `$1$2`)
      .replace(/\s+/g, ` `)
      .trim();
  if (t !== void 0) return n;
  let r = /[.?!]["'”’)]?(?=\s)/.exec(n);
  return r ? n.slice(0, r.index + r[0].length) : n;
}
var Nt = `Preparing workspace`;
function Pt(e) {
  return (
    (e.type === `command_execution` && e.input === Nt) ||
    (e.type === `error` &&
      e.status === `cancelled` &&
      e.failure.code === `workspace_preparation_failed`)
  );
}
function Ft(e, t) {
  let n = new Set(
      e.flatMap((e) => (e.status === `failed` && e.workspacePreparation !== void 0 ? [e.id] : [])),
    ),
    r = new Set();
  if (n.size === 0) return r;
  for (let e of t)
    e.type === `error` &&
      e.status === `failed` &&
      e.failure.code === `workspace_preparation_failed` &&
      e.runId !== null &&
      n.has(e.runId) &&
      r.add(e.runId);
  return r;
}
function Y(e) {
  return (
    e.tone === `tool` ||
    e.tone === `thinking` ||
    e.tone === `error` ||
    e.command !== void 0 ||
    e.requestKind !== void 0
  );
}
function It(e) {
  return e.itemType === `error`;
}
function Lt(e) {
  if (!Y(e) || xt(e) || (e.tone === `thinking` && e.itemType !== `reasoning`)) return !1;
  let t = e.toolLifecycleStatus;
  return (
    t !== `failed` && t !== `declined` && t !== `inProgress` && t !== `stopped` && t !== `idle`
  );
}
function Rt(e) {
  return Y(e) && !xt(e) && !Lt(e);
}
function zt(e, t) {
  return e === null ||
    e.status === `preparing` ||
    e.status === `queued` ||
    e.status === `starting` ||
    e.status === `running` ||
    e.status === `waiting`
    ? !1
    : t?.activeRunId !== e.runId;
}
function Bt(e, t, n) {
  return i({ latestRun: e, runtime: t }) ?? (t?.activeRunId == null ? n : null);
}
function Vt(e) {
  return [...e].toSorted((e, t) => e.createdAt.localeCompare(t.createdAt));
}
function Ht(e) {
  return [...e].toSorted((e, t) => e.createdAt.localeCompare(t.createdAt));
}
function Ut(e, t) {
  if (e === null) return null;
  let n = e.plans.filter((e) => e.kind === `todo_list`).filter((e) => e.status !== `superseded`),
    r = new Map(e.runs.map((e) => [e.id, e.ordinal])),
    i =
      n.findLast((e) => e.runId === t) ??
      n.reduce(
        (e, t) => (e === null || (r.get(t.runId) ?? -1) >= (r.get(e.runId) ?? -1) ? t : e),
        null,
      );
  return i === null || i.steps.length === 0
    ? null
    : {
        createdAt: X(e, i),
        runId: i.runId,
        explanation: i.explanation ?? null,
        steps: i.steps.map(({ text: e, status: t, durationMs: n }) => ({
          step: e,
          status: t === `running` ? `inProgress` : t,
          ...(n === void 0 ? {} : { durationMs: n }),
        })),
      };
}
function Wt(e, t, n, r) {
  if (e === null || t === null) return null;
  if (n !== null && !r && t.runId === n) return t;
  if (t.steps.every((e) => e.status === `completed`)) return null;
  let i = e.runs.find((e) => e.id === t.runId)?.providerThreadId;
  if (i == null || e.providerThreads.find((e) => e.id === i)?.driver !== `claudeAgent`) return null;
  let a = null;
  for (let t of e.runs)
    t.startedAt !== null &&
      t.providerThreadId !== null &&
      (a === null || t.ordinal > a.ordinal) &&
      (a = t);
  return a?.providerThreadId === i ? t : null;
}
function X(e, n) {
  let r = e.turnItems.findLast(
    (e) => (e.type === `proposed_plan` || e.type === `todo_list`) && e.planId === n.id,
  );
  if (r?.type === `proposed_plan` || r?.type === `todo_list`) return t(r.updatedAt);
  let i = e.runs.find((e) => e.id === n.runId);
  return t(i?.completedAt ?? i?.startedAt ?? i?.requestedAt ?? e.thread.createdAt);
}
function Gt(e, t) {
  let n = X(e, t);
  return {
    id: t.id,
    createdAt: n,
    updatedAt: n,
    runId: t.runId,
    planMarkdown: t.markdown,
    status: t.status,
  };
}
function Kt(e, t) {
  if (e === null) return null;
  let n = e.plans.filter((e) => e.kind === `proposed_plan`),
    r = t ? n.filter((e) => e.runId === t) : n,
    i = [...(r.length > 0 ? r : n)]
      .toSorted((t, n) => X(e, t).localeCompare(X(e, n)) || t.id.localeCompare(n.id))
      .at(-1);
  return i === void 0 ? null : Gt(e, i);
}
function qt(e) {
  return e?.status === `active`;
}
var Jt = new Set([
    `fork`,
    `handoff`,
    `run_interrupt_request`,
    `run_interrupt_result`,
    `secret_request`,
    `subagent`,
  ]),
  Yt = new Set([`fork`, `thread_created`, `secret_request`]);
function Xt(e) {
  return e.kind === `event` && Yt.has(e.projectedItem.item.type);
}
function Z(e) {
  return t(e.item.startedAt ?? e.item.updatedAt);
}
function Zt(e) {
  switch (e.status) {
    case `pending`:
    case `running`:
    case `waiting`:
      return `inProgress`;
    case `completed`:
      return `completed`;
    case `idle`:
      return `idle`;
    case `failed`:
      return `failed`;
    case `cancelled`:
    case `interrupted`:
      return `stopped`;
  }
}
function Qt(e) {
  if (e.type === `error`) return `info`;
  if (e.type === `reasoning`) return `thinking`;
  switch (e.type) {
    case `command_execution`:
    case `file_change`:
    case `file_search`:
    case `web_search`:
    case `dynamic_tool`:
    case `subagent`:
    case `thread_created`:
    case `user_input_request`:
    case `approval_request`:
      return `tool`;
    default:
      return `info`;
  }
}
function Q(e) {
  if (e.retry === void 0)
    return {
      label:
        e.failure.class === `usage_limit`
          ? `Usage limit reached`
          : e.title?.trim() || `Provider error`,
      detail: e.failure.message,
    };
  let t =
      e.retry.maxAttempts === null
        ? `${e.retry.attempt}`
        : `${e.retry.attempt}/${e.retry.maxAttempts}`,
    n =
      e.status === `running`
        ? `Retrying provider (${t})`
        : e.status === `completed`
          ? `Provider recovered (${t} retries)`
          : e.status === `failed`
            ? `${e.failure.class === `usage_limit` ? `Usage limit reached` : `Provider error`} after ${t} retries`
            : `Provider retry stopped (${t})`,
    r =
      e.status === `running` && e.retry.retryDelayMs !== null && e.retry.retryDelayMs > 0
        ? e.retry.retryDelayMs < 1e3
          ? ` Retrying in ${e.retry.retryDelayMs}ms.`
          : ` Retrying in ${(e.retry.retryDelayMs / 1e3).toFixed(1).replace(/\.0$/u, ``)}s.`
        : ``;
  return { label: n, detail: `${e.failure.message}${r}` };
}
function $t(e) {
  let { item: t } = e,
    n = t.title?.trim() || null,
    r = {
      id: t.id,
      createdAt: Z(e),
      runId: t.runId,
      tone: Qt(t),
      itemType: t.type,
      toolLifecycleStatus: Zt(t),
      structuredPayload: t,
      projectedItem: e,
      ...Se(t),
    };
  switch (t.type) {
    case `thread_created`:
      return { ...r, label: `Created thread` };
    case `compaction`:
      return {
        ...r,
        label: gt(t),
        sourceActivityKind: `context-compaction`,
        ...(t.summary ? { detail: t.summary } : {}),
      };
    case `reasoning`:
      return { ...r, label: n ?? `Thinking`, ...(t.text ? { detail: t.text } : {}) };
    case `command_execution`:
      return {
        ...r,
        label: n ?? `Ran command`,
        command: t.input,
        rawCommand: t.input,
        toolTitle: n ?? `Command`,
        toolData: t,
      };
    case `file_change`: {
      let e = (t.changes ?? []).map((e) => ({
        filePath: e.path,
        ...(e.patch === void 0 || e.patch.length === 0 ? {} : { patch: e.patch }),
      }));
      return {
        ...r,
        label:
          n ??
          (t.changes !== void 0 && t.changes.length > 1
            ? `Changed ${t.changes.length} files`
            : `Changed ${t.fileName}`),
        changedFiles: t.changes?.map((e) => e.path) ?? [t.fileName],
        ...(e.length === 0
          ? {}
          : { fileChanges: e, ...(e.length === 1 ? { fileChange: e[0] } : {}) }),
        toolTitle: n ?? `File change`,
        toolData: t,
      };
    }
    case `file_search`:
      return {
        ...r,
        label: n ?? x(t) ?? `Searched files`,
        ...(t.pattern ? { detail: t.pattern } : {}),
        toolTitle: n ?? `File search`,
        toolData: t,
      };
    case `web_search`:
      return {
        ...r,
        label: n ?? `Searched the web`,
        ...(t.patterns?.length ? { detail: t.patterns.join(`, `) } : {}),
        toolTitle: n ?? `Web search`,
        toolData: t,
      };
    case `checkpoint`:
      return {
        ...r,
        label: n ?? `Checkpoint captured`,
        changedFiles: t.files.map((e) => e.path),
        toolData: t,
      };
    case `system_notice`:
      return { ...r, label: t.message, sourceActivityKind: `runtime.warning` };
    case `error`: {
      let e = Q(t);
      return {
        ...r,
        ...e,
        ...(t.failure.class === `usage_limit` && t.status !== `completed`
          ? { sourceActivityKind: `runtime.warning` }
          : t.retry === void 0
            ? { sourceActivityKind: `runtime.error` }
            : {}),
        toolData: t,
      };
    }
    case `dynamic_tool`: {
      let e = y({
          itemType: `dynamic_tool_call`,
          data: { toolName: t.toolName ?? void 0, input: t.input },
        }),
        [i] = ue({ input: t.input });
      return {
        ...r,
        label:
          n ??
          (e === `read`
            ? _e(i ?? ``)
            : e === `search`
              ? (x({ input: t.input }) ?? t.toolName ?? `Tool call`)
              : (t.toolName ?? `Tool call`)),
        toolTitle: n ?? t.toolName ?? `Tool`,
        toolData: { input: t.input, output: t.output },
      };
    }
    case `approval_request`:
      return {
        ...r,
        label: n ?? `Approval requested`,
        detail: t.prompt ?? t.requestKind,
        toolData: t,
      };
    case `user_input_request`:
      return {
        ...r,
        label: n ?? (t.questionAnswer ? `Answered questions` : `Input requested`),
        ...(t.questionAnswer ? { questionAnswer: t.questionAnswer } : {}),
        toolData: t,
      };
    default:
      return { ...r, label: n ?? t.type.replaceAll(`_`, ` `), toolData: t };
  }
}
function en(e) {
  let n = new Set(),
    r = [],
    i = new Map((e.attempts ?? []).map((e) => [e.rootNodeId, e])),
    a = new Map((e.nodes ?? []).map((e) => [e.id, e])),
    o = new Map((e.plans ?? []).map((e) => [e.id, e])),
    s = (e) => {
      if (e.nodeId === null || e.runId === null) return;
      let t = e.nodeId,
        n = new Set();
      for (; t !== null && !n.has(t);) {
        n.add(t);
        let r = i.get(t);
        if (r?.runId === e.runId) return r;
        let o = a.get(t);
        if (o === void 0) return;
        let s = i.get(o.rootNodeId);
        if (s?.runId === e.runId) return s;
        t = o.parentNodeId;
      }
    },
    c = new Set(
      e.visibleTurnItems.flatMap(({ item: e }) =>
        e.type === `user_input_request` && e.questionAnswer
          ? [`async-answer:${e.questionAnswer.requestId}`]
          : [],
      ),
    );
  for (let i of e.visibleTurnItems) {
    let { item: a } = i;
    if (
      Pt(a) ||
      a.type === `todo_list` ||
      a.type === `checkpoint` ||
      (a.type === `user_message` && c.has(a.messageId))
    )
      continue;
    let l = Z(i),
      u = s(a),
      d = u === void 0 ? {} : { attempt: u };
    if (a.type === `notification`) {
      r.push({
        id: a.id,
        kind: `work`,
        createdAt: l,
        entry: {
          id: a.id,
          createdAt: l,
          runId: a.runId,
          label: a.summary,
          tone: `info`,
          itemType: a.type,
          structuredPayload: a,
          projectedItem: i,
        },
        ...d,
      });
      continue;
    }
    if (a.type === `user_message` || a.type === `assistant_message`) {
      let o = {
        id: a.messageId,
        role: a.type === `user_message` ? `user` : `assistant`,
        text: a.text,
        ...(a.type === `user_message` && a.context ? { context: a.context } : {}),
        ...((a.attachments?.length ?? 0) > 0
          ? {
              attachments: (a.attachments ?? []).map((t) => {
                let n = e.attachmentUrlById?.get(t.id);
                return n ? { ...t, previewUrl: n } : t;
              }),
            }
          : {}),
        runId: a.runId,
        streaming: a.type === `assistant_message` && a.streaming,
        ...(a.type === `user_message`
          ? {
              createdBy: a.createdBy,
              creationSource: a.creationSource,
              ...(a.senderThreadId === void 0 ? {} : { senderThreadId: a.senderThreadId }),
              ...(a.idleCompaction === void 0 ? {} : { idleCompaction: a.idleCompaction }),
              ...(a.scheduledTaskId === void 0 ? {} : { scheduledTaskId: a.scheduledTaskId }),
            }
          : {}),
        createdAt: l,
        updatedAt: t(a.updatedAt),
        ...(a.type === `user_message` ? { inputIntent: a.inputIntent } : {}),
      };
      (n.add(o.id),
        r.push({ id: o.id, kind: `message`, createdAt: l, message: o, projectedItem: i, ...d }));
      continue;
    }
    if (a.type === `proposed_plan`) {
      let e = o.get(a.planId),
        n = {
          id: a.planId,
          runId: a.runId,
          planMarkdown: a.markdown,
          status: e?.kind === `proposed_plan` ? e.status : `active`,
          createdAt: l,
          updatedAt: t(a.updatedAt),
        };
      r.push({ id: a.id, kind: `proposed-plan`, createdAt: l, proposedPlan: n, ...d });
      continue;
    }
    let f = a.type === `dynamic_tool` && a.status === `completed` ? Xe(a) : void 0;
    if (f !== void 0) {
      r.push({ id: a.id, kind: `html-render`, createdAt: l, runId: a.runId, htmlRender: f, ...d });
      continue;
    }
    let p = a.type === `dynamic_tool` && a.status === `completed` ? Ze(a) : void 0;
    if (p !== void 0) {
      r.push({ id: a.id, kind: `spoken`, createdAt: l, runId: a.runId, speak: p, ...d });
      continue;
    }
    let m = a.type === `dynamic_tool` && a.status === `completed` ? Qe(a) : void 0;
    m === void 0
      ? Jt.has(a.type)
        ? r.push({ id: a.id, kind: `event`, createdAt: l, projectedItem: i, ...d })
        : r.push({ id: a.id, kind: `work`, createdAt: l, entry: $t(i), ...d })
      : r.push({
          id: a.id,
          kind: `mcp-app`,
          createdAt: l,
          runId: a.runId,
          sourceThreadId: i.sourceThreadId,
          itemId: i.sourceItemId,
          revision: ct(a),
          mcpApp: m,
          ...d,
        });
  }
  let l = new Set([...n, ...c]);
  for (let t of e.anchoredMessages ?? []) {
    if (l.has(t.id)) continue;
    l.add(t.id);
    let e = { id: t.id, kind: `message`, createdAt: t.createdAt, message: t },
      n = r.findIndex((e) => e.createdAt > t.createdAt);
    n === -1 ? r.push(e) : r.splice(n, 0, e);
  }
  for (let t of e.optimisticMessages)
    t.inputIntent !== `queued_turn` &&
      !l.has(t.id) &&
      (l.add(t.id), r.push({ id: t.id, kind: `message`, createdAt: t.createdAt, message: t }));
  return r;
}
function tn(e, n) {
  let r = [...e].toSorted(
      (e, n) =>
        e.ordinal - n.ordinal ||
        t(e.requestedAt).localeCompare(t(n.requestedAt)) ||
        e.id.localeCompare(n.id),
    ),
    i = [];
  for (let e = 1; e < r.length; e += 1) {
    let a = r[e - 1],
      o = r[e],
      s = a.modelSelection,
      c = o.modelSelection;
    if (s.instanceId === c.instanceId && s.model === c.model) continue;
    let l = n?.(s.instanceId, s.model) ?? s.model,
      u = n?.(c.instanceId, c.model) ?? c.model;
    i.push({
      id: `model-change:${o.id}`,
      createdAt: t(o.requestedAt),
      runId: o.id,
      userMessageId: o.userMessageId,
      fromInstanceId: s.instanceId,
      fromModel: s.model,
      toInstanceId: c.instanceId,
      toModel: c.model,
      summary:
        l.length > 0 && u.length > 0 && l !== u ? `Switched from ${l} to ${u}` : `Switched to ${u}`,
    });
  }
  return i;
}
function nn(e, t) {
  if (t.length === 0) return [...e];
  let n = new Map(t.map((e) => [e.userMessageId, e])),
    r = [];
  for (let t of e) {
    if (t.kind === `message` && t.message.role === `user`) {
      let e = n.get(t.message.id);
      e !== void 0 && r.push(rn(e));
    }
    r.push(t);
  }
  return r;
}
function rn(e) {
  return {
    id: e.id,
    kind: `work`,
    createdAt: e.createdAt,
    entry: {
      id: e.id,
      createdAt: e.createdAt,
      runId: e.runId,
      label: e.summary,
      tone: `info`,
      itemType: `system_notice`,
    },
  };
}
var $ = Object.freeze([]);
function an(e) {
  let t = new Set();
  for (let n of e ?? []) {
    if (!p(n)) continue;
    let e = n.previewUrl;
    e?.startsWith(`blob:`) || e?.startsWith(`data:`) || t.add(n.id);
  }
  return t.size === 0 ? $ : Array.from(t, (e) => ({ _tag: `attachment`, attachmentId: e }));
}
function on(e, t) {
  if (Object.keys(t).length === 0) return $;
  let n = new Set();
  for (let r of e ?? [])
    if (r.role === `user` && t[r.id]?.length)
      for (let e of r.attachments ?? []) p(e) && n.add(e.id);
  return n.size === 0 ? $ : Array.from(n, (e) => ({ _tag: `attachment`, attachmentId: e }));
}
function sn() {
  let e = new WeakMap(),
    t = new WeakMap();
  return (n, r) => {
    let i = n.attachments;
    if (!i || i.length === 0) return n;
    let a = e.get(i) ?? i,
      o,
      s = !1;
    for (let [e, t] of i.entries()) {
      let n = r(t),
        i = `previewUrl` in t ? t.previewUrl : void 0,
        c = a[e],
        l = `previewUrl` in c ? c.previewUrl : void 0,
        u = !n || n === i ? t : n === l ? c : { ...t, previewUrl: n };
      ((s ||= u !== t), u !== c && ((o ??= a.slice()), (o[e] = u)));
    }
    let c = s ? (o ?? a) : i;
    if ((e.set(i, c), c === i)) return (t.delete(n), n);
    let l = t.get(n);
    if (l?.attachments === c) return l;
    let u = { ...n, attachments: c };
    return (t.set(n, u), u);
  };
}
function cn(e, t) {
  if (e.role !== `assistant` || t.role !== `assistant` || !e.streaming || !t.streaming) return !1;
  let { text: n, updatedAt: r, ...i } = e,
    { text: a, updatedAt: o, ...s } = t;
  return u(i, s);
}
function ln(e, t) {
  let { item: n, ...r } = e,
    { item: i, ...a } = t;
  if (
    n.type !== `assistant_message` ||
    i.type !== `assistant_message` ||
    !n.streaming ||
    !i.streaming ||
    !u(r, a) ||
    Z(e) !== Z(t)
  )
    return !1;
  let { text: s, updatedAt: c, ...l } = n,
    { text: d, updatedAt: f, ...p } = i;
  return o(l, p);
}
function un(e, n) {
  let r = n.input;
  if (
    e.visibleTurnItems.length < r.visibleTurnItems.length ||
    !u(e.optimisticMessages, r.optimisticMessages) ||
    !u(e.anchoredMessages, r.anchoredMessages) ||
    !u(e.attachmentUrlById, r.attachmentUrlById) ||
    !u(e.attempts, r.attempts) ||
    !u(e.nodes, r.nodes) ||
    !u(e.plans, r.plans)
  )
    return null;
  let i = e.visibleTurnItems.length > r.visibleTurnItems.length;
  if (
    (i && (e.optimisticMessages.length > 0 || (e.anchoredMessages?.length ?? 0) > 0)) ||
    (i &&
      e.visibleTurnItems
        .slice(r.visibleTurnItems.length)
        .some(
          ({ item: e }) =>
            (e.type === `user_input_request` && e.questionAnswer !== void 0) ||
            (e.type === `user_message` && e.messageId.startsWith(`async-answer:`)),
        ))
  )
    return null;
  let a = new Map();
  for (let t = 0; t < r.visibleTurnItems.length; t += 1) {
    let n = r.visibleTurnItems[t],
      i = e.visibleTurnItems[t];
    if (i !== n) {
      if (!ln(n, i)) return null;
      a.set(n, i);
    }
  }
  if (a.size === 0 && !i) return n.entries;
  let o = n.entries.map((e) => {
    let n = e.kind === `message` && e.projectedItem !== void 0 ? a.get(e.projectedItem) : void 0;
    return e.kind !== `message` || n?.item.type !== `assistant_message`
      ? e
      : {
          ...e,
          projectedItem: n,
          message: { ...e.message, text: n.item.text, updatedAt: t(n.item.updatedAt) },
        };
  });
  return (
    i &&
      o.push(
        ...en({ ...e, visibleTurnItems: e.visibleTurnItems.slice(r.visibleTurnItems.length) }),
      ),
    o
  );
}
function dn(e, t = null) {
  let n = t === null ? null : un(e, t);
  if (n !== null) return { input: e, entries: n };
  let r = en(e);
  if (t === null || !u(e.attachmentUrlById, t.input.attachmentUrlById))
    return { input: e, entries: r };
  let i = new Map(t.entries.flatMap((e) => (e.kind === `message` ? [[e.id, e]] : [])));
  return {
    input: e,
    entries: r.map((e) => {
      if (e.kind !== `message` || e.projectedItem === void 0) return e;
      let t = i.get(e.id);
      return t?.projectedItem === e.projectedItem
        ? t.attempt === e.attempt
          ? t
          : { ...e, message: t.message }
        : e;
    }),
  };
}
function fn(e) {
  let t = new Map();
  for (let n of e.checkpoints) n.status === `ready` && t.set(n.runId, n.checkpointTurnCount);
  let n = new Map(),
    r = new Map(),
    i = null;
  for (let a of e.timelineEntries) {
    if (
      (a.kind !== `message` && a.kind !== `work`) ||
      (a.kind === `message` ? a.projectedItem : a.entry.projectedItem)?.visibility === `inherited`
    )
      continue;
    let o =
      a.kind === `message`
        ? a.message.runId
        : a.entry.itemType === `notification`
          ? a.entry.runId
          : null;
    if (
      o == null ||
      (n.has(o) ||
        (n.set(o, i === null ? (e.threadStartCheckpointReady ? 0 : void 0) : t.get(i)), (i = o)),
      a.kind !== `message`)
    )
      continue;
    let { message: s } = a;
    if (
      s.role !== `user` ||
      s.runId === e.unsettledRunId ||
      (s.inputIntent !== `turn_start` && s.inputIntent !== `queued_turn`)
    )
      continue;
    let c = n.get(o);
    c !== void 0 &&
      (e.availableRevertTurnCounts === void 0 || e.availableRevertTurnCounts.has(c)) &&
      r.set(s.id, c);
  }
  return r;
}
function pn(e, t) {
  return e.findLast(
    (e) =>
      e.status === `ready` &&
      (t === 0 ? e.ordinalWithinScope === 0 && e.appRunOrdinal === null : e.appRunOrdinal === t),
  );
}
function mn(e) {
  return e === null
    ? `disconnected`
    : e.status === `preparing` || e.status === `starting` || e.status === `queued`
      ? `connecting`
      : e.status === `running` || e.status === `waiting`
        ? `running`
        : `ready`;
}
function hn(t, n) {
  return t && (mn(n) === `running` || e(n));
}
export {
  ue as $,
  Mt as A,
  ct as B,
  Rt as C,
  Ft as D,
  Y as E,
  J as F,
  k as G,
  lt as H,
  jt as I,
  Re as J,
  Te as K,
  St as L,
  Tt as M,
  G as N,
  H as O,
  At as P,
  ie as Q,
  wt as R,
  Xt as S,
  It as T,
  ft as U,
  pt as V,
  dt as W,
  ze as X,
  Le as Y,
  Ie as Z,
  nn as _,
  tn as a,
  on as b,
  mn as c,
  Kt as d,
  se as et,
  pn as f,
  ln as g,
  cn as h,
  hn as i,
  _t as j,
  yt as k,
  fn as l,
  zt as m,
  Ut as n,
  x as nt,
  Vt as o,
  qt as p,
  Ce as q,
  Bt as r,
  _ as rt,
  Ht as s,
  sn as t,
  _e as tt,
  dn as u,
  Q as v,
  Lt as w,
  an as x,
  Wt as y,
  F as z,
};
//# sourceMappingURL=session-logic-BpDG__2x.js.map
