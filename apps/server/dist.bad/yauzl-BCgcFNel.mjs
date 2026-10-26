#!/usr/bin/env node

import { createRequire } from "node:module";
// \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (
  mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), (cb = null)),
  mod.exports
);
var __exportAll = (all, no_symbols) => {
  let target = {};
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
    });
  if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: ((k) => from[k]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
    }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default")
      ? __defProp(target, "default", {
          value: mod,
          enumerable: true,
        })
      : target,
    mod,
  )
);
var __require = /* #__PURE__ */ (() => createRequire(import.meta.url))();
// ../../node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js
/**
 * Map of named character references.
 *
 * @type {Record<string, string>}
 */
const characterEntities = {
  AElig: "Æ",
  AMP: "&",
  Aacute: "Á",
  Abreve: "Ă",
  Acirc: "Â",
  Acy: "А",
  Afr: "𝔄",
  Agrave: "À",
  Alpha: "Α",
  Amacr: "Ā",
  And: "⩓",
  Aogon: "Ą",
  Aopf: "𝔸",
  ApplyFunction: "⁡",
  Aring: "Å",
  Ascr: "𝒜",
  Assign: "≔",
  Atilde: "Ã",
  Auml: "Ä",
  Backslash: "∖",
  Barv: "⫧",
  Barwed: "⌆",
  Bcy: "Б",
  Because: "∵",
  Bernoullis: "ℬ",
  Beta: "Β",
  Bfr: "𝔅",
  Bopf: "𝔹",
  Breve: "˘",
  Bscr: "ℬ",
  Bumpeq: "≎",
  CHcy: "Ч",
  COPY: "©",
  Cacute: "Ć",
  Cap: "⋒",
  CapitalDifferentialD: "ⅅ",
  Cayleys: "ℭ",
  Ccaron: "Č",
  Ccedil: "Ç",
  Ccirc: "Ĉ",
  Cconint: "∰",
  Cdot: "Ċ",
  Cedilla: "¸",
  CenterDot: "·",
  Cfr: "ℭ",
  Chi: "Χ",
  CircleDot: "⊙",
  CircleMinus: "⊖",
  CirclePlus: "⊕",
  CircleTimes: "⊗",
  ClockwiseContourIntegral: "∲",
  CloseCurlyDoubleQuote: "”",
  CloseCurlyQuote: "’",
  Colon: "∷",
  Colone: "⩴",
  Congruent: "≡",
  Conint: "∯",
  ContourIntegral: "∮",
  Copf: "ℂ",
  Coproduct: "∐",
  CounterClockwiseContourIntegral: "∳",
  Cross: "⨯",
  Cscr: "𝒞",
  Cup: "⋓",
  CupCap: "≍",
  DD: "ⅅ",
  DDotrahd: "⤑",
  DJcy: "Ђ",
  DScy: "Ѕ",
  DZcy: "Џ",
  Dagger: "‡",
  Darr: "↡",
  Dashv: "⫤",
  Dcaron: "Ď",
  Dcy: "Д",
  Del: "∇",
  Delta: "Δ",
  Dfr: "𝔇",
  DiacriticalAcute: "´",
  DiacriticalDot: "˙",
  DiacriticalDoubleAcute: "˝",
  DiacriticalGrave: "`",
  DiacriticalTilde: "˜",
  Diamond: "⋄",
  DifferentialD: "ⅆ",
  Dopf: "𝔻",
  Dot: "¨",
  DotDot: "⃜",
  DotEqual: "≐",
  DoubleContourIntegral: "∯",
  DoubleDot: "¨",
  DoubleDownArrow: "⇓",
  DoubleLeftArrow: "⇐",
  DoubleLeftRightArrow: "⇔",
  DoubleLeftTee: "⫤",
  DoubleLongLeftArrow: "⟸",
  DoubleLongLeftRightArrow: "⟺",
  DoubleLongRightArrow: "⟹",
  DoubleRightArrow: "⇒",
  DoubleRightTee: "⊨",
  DoubleUpArrow: "⇑",
  DoubleUpDownArrow: "⇕",
  DoubleVerticalBar: "∥",
  DownArrow: "↓",
  DownArrowBar: "⤓",
  DownArrowUpArrow: "⇵",
  DownBreve: "̑",
  DownLeftRightVector: "⥐",
  DownLeftTeeVector: "⥞",
  DownLeftVector: "↽",
  DownLeftVectorBar: "⥖",
  DownRightTeeVector: "⥟",
  DownRightVector: "⇁",
  DownRightVectorBar: "⥗",
  DownTee: "⊤",
  DownTeeArrow: "↧",
  Downarrow: "⇓",
  Dscr: "𝒟",
  Dstrok: "Đ",
  ENG: "Ŋ",
  ETH: "Ð",
  Eacute: "É",
  Ecaron: "Ě",
  Ecirc: "Ê",
  Ecy: "Э",
  Edot: "Ė",
  Efr: "𝔈",
  Egrave: "È",
  Element: "∈",
  Emacr: "Ē",
  EmptySmallSquare: "◻",
  EmptyVerySmallSquare: "▫",
  Eogon: "Ę",
  Eopf: "𝔼",
  Epsilon: "Ε",
  Equal: "⩵",
  EqualTilde: "≂",
  Equilibrium: "⇌",
  Escr: "ℰ",
  Esim: "⩳",
  Eta: "Η",
  Euml: "Ë",
  Exists: "∃",
  ExponentialE: "ⅇ",
  Fcy: "Ф",
  Ffr: "𝔉",
  FilledSmallSquare: "◼",
  FilledVerySmallSquare: "▪",
  Fopf: "𝔽",
  ForAll: "∀",
  Fouriertrf: "ℱ",
  Fscr: "ℱ",
  GJcy: "Ѓ",
  GT: ">",
  Gamma: "Γ",
  Gammad: "Ϝ",
  Gbreve: "Ğ",
  Gcedil: "Ģ",
  Gcirc: "Ĝ",
  Gcy: "Г",
  Gdot: "Ġ",
  Gfr: "𝔊",
  Gg: "⋙",
  Gopf: "𝔾",
  GreaterEqual: "≥",
  GreaterEqualLess: "⋛",
  GreaterFullEqual: "≧",
  GreaterGreater: "⪢",
  GreaterLess: "≷",
  GreaterSlantEqual: "⩾",
  GreaterTilde: "≳",
  Gscr: "𝒢",
  Gt: "≫",
  HARDcy: "Ъ",
  Hacek: "ˇ",
  Hat: "^",
  Hcirc: "Ĥ",
  Hfr: "ℌ",
  HilbertSpace: "ℋ",
  Hopf: "ℍ",
  HorizontalLine: "─",
  Hscr: "ℋ",
  Hstrok: "Ħ",
  HumpDownHump: "≎",
  HumpEqual: "≏",
  IEcy: "Е",
  IJlig: "Ĳ",
  IOcy: "Ё",
  Iacute: "Í",
  Icirc: "Î",
  Icy: "И",
  Idot: "İ",
  Ifr: "ℑ",
  Igrave: "Ì",
  Im: "ℑ",
  Imacr: "Ī",
  ImaginaryI: "ⅈ",
  Implies: "⇒",
  Int: "∬",
  Integral: "∫",
  Intersection: "⋂",
  InvisibleComma: "⁣",
  InvisibleTimes: "⁢",
  Iogon: "Į",
  Iopf: "𝕀",
  Iota: "Ι",
  Iscr: "ℐ",
  Itilde: "Ĩ",
  Iukcy: "І",
  Iuml: "Ï",
  Jcirc: "Ĵ",
  Jcy: "Й",
  Jfr: "𝔍",
  Jopf: "𝕁",
  Jscr: "𝒥",
  Jsercy: "Ј",
  Jukcy: "Є",
  KHcy: "Х",
  KJcy: "Ќ",
  Kappa: "Κ",
  Kcedil: "Ķ",
  Kcy: "К",
  Kfr: "𝔎",
  Kopf: "𝕂",
  Kscr: "𝒦",
  LJcy: "Љ",
  LT: "<",
  Lacute: "Ĺ",
  Lambda: "Λ",
  Lang: "⟪",
  Laplacetrf: "ℒ",
  Larr: "↞",
  Lcaron: "Ľ",
  Lcedil: "Ļ",
  Lcy: "Л",
  LeftAngleBracket: "⟨",
  LeftArrow: "←",
  LeftArrowBar: "⇤",
  LeftArrowRightArrow: "⇆",
  LeftCeiling: "⌈",
  LeftDoubleBracket: "⟦",
  LeftDownTeeVector: "⥡",
  LeftDownVector: "⇃",
  LeftDownVectorBar: "⥙",
  LeftFloor: "⌊",
  LeftRightArrow: "↔",
  LeftRightVector: "⥎",
  LeftTee: "⊣",
  LeftTeeArrow: "↤",
  LeftTeeVector: "⥚",
  LeftTriangle: "⊲",
  LeftTriangleBar: "⧏",
  LeftTriangleEqual: "⊴",
  LeftUpDownVector: "⥑",
  LeftUpTeeVector: "⥠",
  LeftUpVector: "↿",
  LeftUpVectorBar: "⥘",
  LeftVector: "↼",
  LeftVectorBar: "⥒",
  Leftarrow: "⇐",
  Leftrightarrow: "⇔",
  LessEqualGreater: "⋚",
  LessFullEqual: "≦",
  LessGreater: "≶",
  LessLess: "⪡",
  LessSlantEqual: "⩽",
  LessTilde: "≲",
  Lfr: "𝔏",
  Ll: "⋘",
  Lleftarrow: "⇚",
  Lmidot: "Ŀ",
  LongLeftArrow: "⟵",
  LongLeftRightArrow: "⟷",
  LongRightArrow: "⟶",
  Longleftarrow: "⟸",
  Longleftrightarrow: "⟺",
  Longrightarrow: "⟹",
  Lopf: "𝕃",
  LowerLeftArrow: "↙",
  LowerRightArrow: "↘",
  Lscr: "ℒ",
  Lsh: "↰",
  Lstrok: "Ł",
  Lt: "≪",
  Map: "⤅",
  Mcy: "М",
  MediumSpace: " ",
  Mellintrf: "ℳ",
  Mfr: "𝔐",
  MinusPlus: "∓",
  Mopf: "𝕄",
  Mscr: "ℳ",
  Mu: "Μ",
  NJcy: "Њ",
  Nacute: "Ń",
  Ncaron: "Ň",
  Ncedil: "Ņ",
  Ncy: "Н",
  NegativeMediumSpace: "​",
  NegativeThickSpace: "​",
  NegativeThinSpace: "​",
  NegativeVeryThinSpace: "​",
  NestedGreaterGreater: "≫",
  NestedLessLess: "≪",
  NewLine: "\n",
  Nfr: "𝔑",
  NoBreak: "⁠",
  NonBreakingSpace: "\xA0",
  Nopf: "ℕ",
  Not: "⫬",
  NotCongruent: "≢",
  NotCupCap: "≭",
  NotDoubleVerticalBar: "∦",
  NotElement: "∉",
  NotEqual: "≠",
  NotEqualTilde: "≂̸",
  NotExists: "∄",
  NotGreater: "≯",
  NotGreaterEqual: "≱",
  NotGreaterFullEqual: "≧̸",
  NotGreaterGreater: "≫̸",
  NotGreaterLess: "≹",
  NotGreaterSlantEqual: "⩾̸",
  NotGreaterTilde: "≵",
  NotHumpDownHump: "≎̸",
  NotHumpEqual: "≏̸",
  NotLeftTriangle: "⋪",
  NotLeftTriangleBar: "⧏̸",
  NotLeftTriangleEqual: "⋬",
  NotLess: "≮",
  NotLessEqual: "≰",
  NotLessGreater: "≸",
  NotLessLess: "≪̸",
  NotLessSlantEqual: "⩽̸",
  NotLessTilde: "≴",
  NotNestedGreaterGreater: "⪢̸",
  NotNestedLessLess: "⪡̸",
  NotPrecedes: "⊀",
  NotPrecedesEqual: "⪯̸",
  NotPrecedesSlantEqual: "⋠",
  NotReverseElement: "∌",
  NotRightTriangle: "⋫",
  NotRightTriangleBar: "⧐̸",
  NotRightTriangleEqual: "⋭",
  NotSquareSubset: "⊏̸",
  NotSquareSubsetEqual: "⋢",
  NotSquareSuperset: "⊐̸",
  NotSquareSupersetEqual: "⋣",
  NotSubset: "⊂⃒",
  NotSubsetEqual: "⊈",
  NotSucceeds: "⊁",
  NotSucceedsEqual: "⪰̸",
  NotSucceedsSlantEqual: "⋡",
  NotSucceedsTilde: "≿̸",
  NotSuperset: "⊃⃒",
  NotSupersetEqual: "⊉",
  NotTilde: "≁",
  NotTildeEqual: "≄",
  NotTildeFullEqual: "≇",
  NotTildeTilde: "≉",
  NotVerticalBar: "∤",
  Nscr: "𝒩",
  Ntilde: "Ñ",
  Nu: "Ν",
  OElig: "Œ",
  Oacute: "Ó",
  Ocirc: "Ô",
  Ocy: "О",
  Odblac: "Ő",
  Ofr: "𝔒",
  Ograve: "Ò",
  Omacr: "Ō",
  Omega: "Ω",
  Omicron: "Ο",
  Oopf: "𝕆",
  OpenCurlyDoubleQuote: "“",
  OpenCurlyQuote: "‘",
  Or: "⩔",
  Oscr: "𝒪",
  Oslash: "Ø",
  Otilde: "Õ",
  Otimes: "⨷",
  Ouml: "Ö",
  OverBar: "‾",
  OverBrace: "⏞",
  OverBracket: "⎴",
  OverParenthesis: "⏜",
  PartialD: "∂",
  Pcy: "П",
  Pfr: "𝔓",
  Phi: "Φ",
  Pi: "Π",
  PlusMinus: "±",
  Poincareplane: "ℌ",
  Popf: "ℙ",
  Pr: "⪻",
  Precedes: "≺",
  PrecedesEqual: "⪯",
  PrecedesSlantEqual: "≼",
  PrecedesTilde: "≾",
  Prime: "″",
  Product: "∏",
  Proportion: "∷",
  Proportional: "∝",
  Pscr: "𝒫",
  Psi: "Ψ",
  QUOT: '"',
  Qfr: "𝔔",
  Qopf: "ℚ",
  Qscr: "𝒬",
  RBarr: "⤐",
  REG: "®",
  Racute: "Ŕ",
  Rang: "⟫",
  Rarr: "↠",
  Rarrtl: "⤖",
  Rcaron: "Ř",
  Rcedil: "Ŗ",
  Rcy: "Р",
  Re: "ℜ",
  ReverseElement: "∋",
  ReverseEquilibrium: "⇋",
  ReverseUpEquilibrium: "⥯",
  Rfr: "ℜ",
  Rho: "Ρ",
  RightAngleBracket: "⟩",
  RightArrow: "→",
  RightArrowBar: "⇥",
  RightArrowLeftArrow: "⇄",
  RightCeiling: "⌉",
  RightDoubleBracket: "⟧",
  RightDownTeeVector: "⥝",
  RightDownVector: "⇂",
  RightDownVectorBar: "⥕",
  RightFloor: "⌋",
  RightTee: "⊢",
  RightTeeArrow: "↦",
  RightTeeVector: "⥛",
  RightTriangle: "⊳",
  RightTriangleBar: "⧐",
  RightTriangleEqual: "⊵",
  RightUpDownVector: "⥏",
  RightUpTeeVector: "⥜",
  RightUpVector: "↾",
  RightUpVectorBar: "⥔",
  RightVector: "⇀",
  RightVectorBar: "⥓",
  Rightarrow: "⇒",
  Ropf: "ℝ",
  RoundImplies: "⥰",
  Rrightarrow: "⇛",
  Rscr: "ℛ",
  Rsh: "↱",
  RuleDelayed: "⧴",
  SHCHcy: "Щ",
  SHcy: "Ш",
  SOFTcy: "Ь",
  Sacute: "Ś",
  Sc: "⪼",
  Scaron: "Š",
  Scedil: "Ş",
  Scirc: "Ŝ",
  Scy: "С",
  Sfr: "𝔖",
  ShortDownArrow: "↓",
  ShortLeftArrow: "←",
  ShortRightArrow: "→",
  ShortUpArrow: "↑",
  Sigma: "Σ",
  SmallCircle: "∘",
  Sopf: "𝕊",
  Sqrt: "√",
  Square: "□",
  SquareIntersection: "⊓",
  SquareSubset: "⊏",
  SquareSubsetEqual: "⊑",
  SquareSuperset: "⊐",
  SquareSupersetEqual: "⊒",
  SquareUnion: "⊔",
  Sscr: "𝒮",
  Star: "⋆",
  Sub: "⋐",
  Subset: "⋐",
  SubsetEqual: "⊆",
  Succeeds: "≻",
  SucceedsEqual: "⪰",
  SucceedsSlantEqual: "≽",
  SucceedsTilde: "≿",
  SuchThat: "∋",
  Sum: "∑",
  Sup: "⋑",
  Superset: "⊃",
  SupersetEqual: "⊇",
  Supset: "⋑",
  THORN: "Þ",
  TRADE: "™",
  TSHcy: "Ћ",
  TScy: "Ц",
  Tab: "	",
  Tau: "Τ",
  Tcaron: "Ť",
  Tcedil: "Ţ",
  Tcy: "Т",
  Tfr: "𝔗",
  Therefore: "∴",
  Theta: "Θ",
  ThickSpace: "  ",
  ThinSpace: " ",
  Tilde: "∼",
  TildeEqual: "≃",
  TildeFullEqual: "≅",
  TildeTilde: "≈",
  Topf: "𝕋",
  TripleDot: "⃛",
  Tscr: "𝒯",
  Tstrok: "Ŧ",
  Uacute: "Ú",
  Uarr: "↟",
  Uarrocir: "⥉",
  Ubrcy: "Ў",
  Ubreve: "Ŭ",
  Ucirc: "Û",
  Ucy: "У",
  Udblac: "Ű",
  Ufr: "𝔘",
  Ugrave: "Ù",
  Umacr: "Ū",
  UnderBar: "_",
  UnderBrace: "⏟",
  UnderBracket: "⎵",
  UnderParenthesis: "⏝",
  Union: "⋃",
  UnionPlus: "⊎",
  Uogon: "Ų",
  Uopf: "𝕌",
  UpArrow: "↑",
  UpArrowBar: "⤒",
  UpArrowDownArrow: "⇅",
  UpDownArrow: "↕",
  UpEquilibrium: "⥮",
  UpTee: "⊥",
  UpTeeArrow: "↥",
  Uparrow: "⇑",
  Updownarrow: "⇕",
  UpperLeftArrow: "↖",
  UpperRightArrow: "↗",
  Upsi: "ϒ",
  Upsilon: "Υ",
  Uring: "Ů",
  Uscr: "𝒰",
  Utilde: "Ũ",
  Uuml: "Ü",
  VDash: "⊫",
  Vbar: "⫫",
  Vcy: "В",
  Vdash: "⊩",
  Vdashl: "⫦",
  Vee: "⋁",
  Verbar: "‖",
  Vert: "‖",
  VerticalBar: "∣",
  VerticalLine: "|",
  VerticalSeparator: "❘",
  VerticalTilde: "≀",
  VeryThinSpace: " ",
  Vfr: "𝔙",
  Vopf: "𝕍",
  Vscr: "𝒱",
  Vvdash: "⊪",
  Wcirc: "Ŵ",
  Wedge: "⋀",
  Wfr: "𝔚",
  Wopf: "𝕎",
  Wscr: "𝒲",
  Xfr: "𝔛",
  Xi: "Ξ",
  Xopf: "𝕏",
  Xscr: "𝒳",
  YAcy: "Я",
  YIcy: "Ї",
  YUcy: "Ю",
  Yacute: "Ý",
  Ycirc: "Ŷ",
  Ycy: "Ы",
  Yfr: "𝔜",
  Yopf: "𝕐",
  Yscr: "𝒴",
  Yuml: "Ÿ",
  ZHcy: "Ж",
  Zacute: "Ź",
  Zcaron: "Ž",
  Zcy: "З",
  Zdot: "Ż",
  ZeroWidthSpace: "​",
  Zeta: "Ζ",
  Zfr: "ℨ",
  Zopf: "ℤ",
  Zscr: "𝒵",
  aacute: "á",
  abreve: "ă",
  ac: "∾",
  acE: "∾̳",
  acd: "∿",
  acirc: "â",
  acute: "´",
  acy: "а",
  aelig: "æ",
  af: "⁡",
  afr: "𝔞",
  agrave: "à",
  alefsym: "ℵ",
  aleph: "ℵ",
  alpha: "α",
  amacr: "ā",
  amalg: "⨿",
  amp: "&",
  and: "∧",
  andand: "⩕",
  andd: "⩜",
  andslope: "⩘",
  andv: "⩚",
  ang: "∠",
  ange: "⦤",
  angle: "∠",
  angmsd: "∡",
  angmsdaa: "⦨",
  angmsdab: "⦩",
  angmsdac: "⦪",
  angmsdad: "⦫",
  angmsdae: "⦬",
  angmsdaf: "⦭",
  angmsdag: "⦮",
  angmsdah: "⦯",
  angrt: "∟",
  angrtvb: "⊾",
  angrtvbd: "⦝",
  angsph: "∢",
  angst: "Å",
  angzarr: "⍼",
  aogon: "ą",
  aopf: "𝕒",
  ap: "≈",
  apE: "⩰",
  apacir: "⩯",
  ape: "≊",
  apid: "≋",
  apos: "'",
  approx: "≈",
  approxeq: "≊",
  aring: "å",
  ascr: "𝒶",
  ast: "*",
  asymp: "≈",
  asympeq: "≍",
  atilde: "ã",
  auml: "ä",
  awconint: "∳",
  awint: "⨑",
  bNot: "⫭",
  backcong: "≌",
  backepsilon: "϶",
  backprime: "‵",
  backsim: "∽",
  backsimeq: "⋍",
  barvee: "⊽",
  barwed: "⌅",
  barwedge: "⌅",
  bbrk: "⎵",
  bbrktbrk: "⎶",
  bcong: "≌",
  bcy: "б",
  bdquo: "„",
  becaus: "∵",
  because: "∵",
  bemptyv: "⦰",
  bepsi: "϶",
  bernou: "ℬ",
  beta: "β",
  beth: "ℶ",
  between: "≬",
  bfr: "𝔟",
  bigcap: "⋂",
  bigcirc: "◯",
  bigcup: "⋃",
  bigodot: "⨀",
  bigoplus: "⨁",
  bigotimes: "⨂",
  bigsqcup: "⨆",
  bigstar: "★",
  bigtriangledown: "▽",
  bigtriangleup: "△",
  biguplus: "⨄",
  bigvee: "⋁",
  bigwedge: "⋀",
  bkarow: "⤍",
  blacklozenge: "⧫",
  blacksquare: "▪",
  blacktriangle: "▴",
  blacktriangledown: "▾",
  blacktriangleleft: "◂",
  blacktriangleright: "▸",
  blank: "␣",
  blk12: "▒",
  blk14: "░",
  blk34: "▓",
  block: "█",
  bne: "=⃥",
  bnequiv: "≡⃥",
  bnot: "⌐",
  bopf: "𝕓",
  bot: "⊥",
  bottom: "⊥",
  bowtie: "⋈",
  boxDL: "╗",
  boxDR: "╔",
  boxDl: "╖",
  boxDr: "╓",
  boxH: "═",
  boxHD: "╦",
  boxHU: "╩",
  boxHd: "╤",
  boxHu: "╧",
  boxUL: "╝",
  boxUR: "╚",
  boxUl: "╜",
  boxUr: "╙",
  boxV: "║",
  boxVH: "╬",
  boxVL: "╣",
  boxVR: "╠",
  boxVh: "╫",
  boxVl: "╢",
  boxVr: "╟",
  boxbox: "⧉",
  boxdL: "╕",
  boxdR: "╒",
  boxdl: "┐",
  boxdr: "┌",
  boxh: "─",
  boxhD: "╥",
  boxhU: "╨",
  boxhd: "┬",
  boxhu: "┴",
  boxminus: "⊟",
  boxplus: "⊞",
  boxtimes: "⊠",
  boxuL: "╛",
  boxuR: "╘",
  boxul: "┘",
  boxur: "└",
  boxv: "│",
  boxvH: "╪",
  boxvL: "╡",
  boxvR: "╞",
  boxvh: "┼",
  boxvl: "┤",
  boxvr: "├",
  bprime: "‵",
  breve: "˘",
  brvbar: "¦",
  bscr: "𝒷",
  bsemi: "⁏",
  bsim: "∽",
  bsime: "⋍",
  bsol: "\\",
  bsolb: "⧅",
  bsolhsub: "⟈",
  bull: "•",
  bullet: "•",
  bump: "≎",
  bumpE: "⪮",
  bumpe: "≏",
  bumpeq: "≏",
  cacute: "ć",
  cap: "∩",
  capand: "⩄",
  capbrcup: "⩉",
  capcap: "⩋",
  capcup: "⩇",
  capdot: "⩀",
  caps: "∩︀",
  caret: "⁁",
  caron: "ˇ",
  ccaps: "⩍",
  ccaron: "č",
  ccedil: "ç",
  ccirc: "ĉ",
  ccups: "⩌",
  ccupssm: "⩐",
  cdot: "ċ",
  cedil: "¸",
  cemptyv: "⦲",
  cent: "¢",
  centerdot: "·",
  cfr: "𝔠",
  chcy: "ч",
  check: "✓",
  checkmark: "✓",
  chi: "χ",
  cir: "○",
  cirE: "⧃",
  circ: "ˆ",
  circeq: "≗",
  circlearrowleft: "↺",
  circlearrowright: "↻",
  circledR: "®",
  circledS: "Ⓢ",
  circledast: "⊛",
  circledcirc: "⊚",
  circleddash: "⊝",
  cire: "≗",
  cirfnint: "⨐",
  cirmid: "⫯",
  cirscir: "⧂",
  clubs: "♣",
  clubsuit: "♣",
  colon: ":",
  colone: "≔",
  coloneq: "≔",
  comma: ",",
  commat: "@",
  comp: "∁",
  compfn: "∘",
  complement: "∁",
  complexes: "ℂ",
  cong: "≅",
  congdot: "⩭",
  conint: "∮",
  copf: "𝕔",
  coprod: "∐",
  copy: "©",
  copysr: "℗",
  crarr: "↵",
  cross: "✗",
  cscr: "𝒸",
  csub: "⫏",
  csube: "⫑",
  csup: "⫐",
  csupe: "⫒",
  ctdot: "⋯",
  cudarrl: "⤸",
  cudarrr: "⤵",
  cuepr: "⋞",
  cuesc: "⋟",
  cularr: "↶",
  cularrp: "⤽",
  cup: "∪",
  cupbrcap: "⩈",
  cupcap: "⩆",
  cupcup: "⩊",
  cupdot: "⊍",
  cupor: "⩅",
  cups: "∪︀",
  curarr: "↷",
  curarrm: "⤼",
  curlyeqprec: "⋞",
  curlyeqsucc: "⋟",
  curlyvee: "⋎",
  curlywedge: "⋏",
  curren: "¤",
  curvearrowleft: "↶",
  curvearrowright: "↷",
  cuvee: "⋎",
  cuwed: "⋏",
  cwconint: "∲",
  cwint: "∱",
  cylcty: "⌭",
  dArr: "⇓",
  dHar: "⥥",
  dagger: "†",
  daleth: "ℸ",
  darr: "↓",
  dash: "‐",
  dashv: "⊣",
  dbkarow: "⤏",
  dblac: "˝",
  dcaron: "ď",
  dcy: "д",
  dd: "ⅆ",
  ddagger: "‡",
  ddarr: "⇊",
  ddotseq: "⩷",
  deg: "°",
  delta: "δ",
  demptyv: "⦱",
  dfisht: "⥿",
  dfr: "𝔡",
  dharl: "⇃",
  dharr: "⇂",
  diam: "⋄",
  diamond: "⋄",
  diamondsuit: "♦",
  diams: "♦",
  die: "¨",
  digamma: "ϝ",
  disin: "⋲",
  div: "÷",
  divide: "÷",
  divideontimes: "⋇",
  divonx: "⋇",
  djcy: "ђ",
  dlcorn: "⌞",
  dlcrop: "⌍",
  dollar: "$",
  dopf: "𝕕",
  dot: "˙",
  doteq: "≐",
  doteqdot: "≑",
  dotminus: "∸",
  dotplus: "∔",
  dotsquare: "⊡",
  doublebarwedge: "⌆",
  downarrow: "↓",
  downdownarrows: "⇊",
  downharpoonleft: "⇃",
  downharpoonright: "⇂",
  drbkarow: "⤐",
  drcorn: "⌟",
  drcrop: "⌌",
  dscr: "𝒹",
  dscy: "ѕ",
  dsol: "⧶",
  dstrok: "đ",
  dtdot: "⋱",
  dtri: "▿",
  dtrif: "▾",
  duarr: "⇵",
  duhar: "⥯",
  dwangle: "⦦",
  dzcy: "џ",
  dzigrarr: "⟿",
  eDDot: "⩷",
  eDot: "≑",
  eacute: "é",
  easter: "⩮",
  ecaron: "ě",
  ecir: "≖",
  ecirc: "ê",
  ecolon: "≕",
  ecy: "э",
  edot: "ė",
  ee: "ⅇ",
  efDot: "≒",
  efr: "𝔢",
  eg: "⪚",
  egrave: "è",
  egs: "⪖",
  egsdot: "⪘",
  el: "⪙",
  elinters: "⏧",
  ell: "ℓ",
  els: "⪕",
  elsdot: "⪗",
  emacr: "ē",
  empty: "∅",
  emptyset: "∅",
  emptyv: "∅",
  emsp13: " ",
  emsp14: " ",
  emsp: " ",
  eng: "ŋ",
  ensp: " ",
  eogon: "ę",
  eopf: "𝕖",
  epar: "⋕",
  eparsl: "⧣",
  eplus: "⩱",
  epsi: "ε",
  epsilon: "ε",
  epsiv: "ϵ",
  eqcirc: "≖",
  eqcolon: "≕",
  eqsim: "≂",
  eqslantgtr: "⪖",
  eqslantless: "⪕",
  equals: "=",
  equest: "≟",
  equiv: "≡",
  equivDD: "⩸",
  eqvparsl: "⧥",
  erDot: "≓",
  erarr: "⥱",
  escr: "ℯ",
  esdot: "≐",
  esim: "≂",
  eta: "η",
  eth: "ð",
  euml: "ë",
  euro: "€",
  excl: "!",
  exist: "∃",
  expectation: "ℰ",
  exponentiale: "ⅇ",
  fallingdotseq: "≒",
  fcy: "ф",
  female: "♀",
  ffilig: "ﬃ",
  fflig: "ﬀ",
  ffllig: "ﬄ",
  ffr: "𝔣",
  filig: "ﬁ",
  fjlig: "fj",
  flat: "♭",
  fllig: "ﬂ",
  fltns: "▱",
  fnof: "ƒ",
  fopf: "𝕗",
  forall: "∀",
  fork: "⋔",
  forkv: "⫙",
  fpartint: "⨍",
  frac12: "½",
  frac13: "⅓",
  frac14: "¼",
  frac15: "⅕",
  frac16: "⅙",
  frac18: "⅛",
  frac23: "⅔",
  frac25: "⅖",
  frac34: "¾",
  frac35: "⅗",
  frac38: "⅜",
  frac45: "⅘",
  frac56: "⅚",
  frac58: "⅝",
  frac78: "⅞",
  frasl: "⁄",
  frown: "⌢",
  fscr: "𝒻",
  gE: "≧",
  gEl: "⪌",
  gacute: "ǵ",
  gamma: "γ",
  gammad: "ϝ",
  gap: "⪆",
  gbreve: "ğ",
  gcirc: "ĝ",
  gcy: "г",
  gdot: "ġ",
  ge: "≥",
  gel: "⋛",
  geq: "≥",
  geqq: "≧",
  geqslant: "⩾",
  ges: "⩾",
  gescc: "⪩",
  gesdot: "⪀",
  gesdoto: "⪂",
  gesdotol: "⪄",
  gesl: "⋛︀",
  gesles: "⪔",
  gfr: "𝔤",
  gg: "≫",
  ggg: "⋙",
  gimel: "ℷ",
  gjcy: "ѓ",
  gl: "≷",
  glE: "⪒",
  gla: "⪥",
  glj: "⪤",
  gnE: "≩",
  gnap: "⪊",
  gnapprox: "⪊",
  gne: "⪈",
  gneq: "⪈",
  gneqq: "≩",
  gnsim: "⋧",
  gopf: "𝕘",
  grave: "`",
  gscr: "ℊ",
  gsim: "≳",
  gsime: "⪎",
  gsiml: "⪐",
  gt: ">",
  gtcc: "⪧",
  gtcir: "⩺",
  gtdot: "⋗",
  gtlPar: "⦕",
  gtquest: "⩼",
  gtrapprox: "⪆",
  gtrarr: "⥸",
  gtrdot: "⋗",
  gtreqless: "⋛",
  gtreqqless: "⪌",
  gtrless: "≷",
  gtrsim: "≳",
  gvertneqq: "≩︀",
  gvnE: "≩︀",
  hArr: "⇔",
  hairsp: " ",
  half: "½",
  hamilt: "ℋ",
  hardcy: "ъ",
  harr: "↔",
  harrcir: "⥈",
  harrw: "↭",
  hbar: "ℏ",
  hcirc: "ĥ",
  hearts: "♥",
  heartsuit: "♥",
  hellip: "…",
  hercon: "⊹",
  hfr: "𝔥",
  hksearow: "⤥",
  hkswarow: "⤦",
  hoarr: "⇿",
  homtht: "∻",
  hookleftarrow: "↩",
  hookrightarrow: "↪",
  hopf: "𝕙",
  horbar: "―",
  hscr: "𝒽",
  hslash: "ℏ",
  hstrok: "ħ",
  hybull: "⁃",
  hyphen: "‐",
  iacute: "í",
  ic: "⁣",
  icirc: "î",
  icy: "и",
  iecy: "е",
  iexcl: "¡",
  iff: "⇔",
  ifr: "𝔦",
  igrave: "ì",
  ii: "ⅈ",
  iiiint: "⨌",
  iiint: "∭",
  iinfin: "⧜",
  iiota: "℩",
  ijlig: "ĳ",
  imacr: "ī",
  image: "ℑ",
  imagline: "ℐ",
  imagpart: "ℑ",
  imath: "ı",
  imof: "⊷",
  imped: "Ƶ",
  in: "∈",
  incare: "℅",
  infin: "∞",
  infintie: "⧝",
  inodot: "ı",
  int: "∫",
  intcal: "⊺",
  integers: "ℤ",
  intercal: "⊺",
  intlarhk: "⨗",
  intprod: "⨼",
  iocy: "ё",
  iogon: "į",
  iopf: "𝕚",
  iota: "ι",
  iprod: "⨼",
  iquest: "¿",
  iscr: "𝒾",
  isin: "∈",
  isinE: "⋹",
  isindot: "⋵",
  isins: "⋴",
  isinsv: "⋳",
  isinv: "∈",
  it: "⁢",
  itilde: "ĩ",
  iukcy: "і",
  iuml: "ï",
  jcirc: "ĵ",
  jcy: "й",
  jfr: "𝔧",
  jmath: "ȷ",
  jopf: "𝕛",
  jscr: "𝒿",
  jsercy: "ј",
  jukcy: "є",
  kappa: "κ",
  kappav: "ϰ",
  kcedil: "ķ",
  kcy: "к",
  kfr: "𝔨",
  kgreen: "ĸ",
  khcy: "х",
  kjcy: "ќ",
  kopf: "𝕜",
  kscr: "𝓀",
  lAarr: "⇚",
  lArr: "⇐",
  lAtail: "⤛",
  lBarr: "⤎",
  lE: "≦",
  lEg: "⪋",
  lHar: "⥢",
  lacute: "ĺ",
  laemptyv: "⦴",
  lagran: "ℒ",
  lambda: "λ",
  lang: "⟨",
  langd: "⦑",
  langle: "⟨",
  lap: "⪅",
  laquo: "«",
  larr: "←",
  larrb: "⇤",
  larrbfs: "⤟",
  larrfs: "⤝",
  larrhk: "↩",
  larrlp: "↫",
  larrpl: "⤹",
  larrsim: "⥳",
  larrtl: "↢",
  lat: "⪫",
  latail: "⤙",
  late: "⪭",
  lates: "⪭︀",
  lbarr: "⤌",
  lbbrk: "❲",
  lbrace: "{",
  lbrack: "[",
  lbrke: "⦋",
  lbrksld: "⦏",
  lbrkslu: "⦍",
  lcaron: "ľ",
  lcedil: "ļ",
  lceil: "⌈",
  lcub: "{",
  lcy: "л",
  ldca: "⤶",
  ldquo: "“",
  ldquor: "„",
  ldrdhar: "⥧",
  ldrushar: "⥋",
  ldsh: "↲",
  le: "≤",
  leftarrow: "←",
  leftarrowtail: "↢",
  leftharpoondown: "↽",
  leftharpoonup: "↼",
  leftleftarrows: "⇇",
  leftrightarrow: "↔",
  leftrightarrows: "⇆",
  leftrightharpoons: "⇋",
  leftrightsquigarrow: "↭",
  leftthreetimes: "⋋",
  leg: "⋚",
  leq: "≤",
  leqq: "≦",
  leqslant: "⩽",
  les: "⩽",
  lescc: "⪨",
  lesdot: "⩿",
  lesdoto: "⪁",
  lesdotor: "⪃",
  lesg: "⋚︀",
  lesges: "⪓",
  lessapprox: "⪅",
  lessdot: "⋖",
  lesseqgtr: "⋚",
  lesseqqgtr: "⪋",
  lessgtr: "≶",
  lesssim: "≲",
  lfisht: "⥼",
  lfloor: "⌊",
  lfr: "𝔩",
  lg: "≶",
  lgE: "⪑",
  lhard: "↽",
  lharu: "↼",
  lharul: "⥪",
  lhblk: "▄",
  ljcy: "љ",
  ll: "≪",
  llarr: "⇇",
  llcorner: "⌞",
  llhard: "⥫",
  lltri: "◺",
  lmidot: "ŀ",
  lmoust: "⎰",
  lmoustache: "⎰",
  lnE: "≨",
  lnap: "⪉",
  lnapprox: "⪉",
  lne: "⪇",
  lneq: "⪇",
  lneqq: "≨",
  lnsim: "⋦",
  loang: "⟬",
  loarr: "⇽",
  lobrk: "⟦",
  longleftarrow: "⟵",
  longleftrightarrow: "⟷",
  longmapsto: "⟼",
  longrightarrow: "⟶",
  looparrowleft: "↫",
  looparrowright: "↬",
  lopar: "⦅",
  lopf: "𝕝",
  loplus: "⨭",
  lotimes: "⨴",
  lowast: "∗",
  lowbar: "_",
  loz: "◊",
  lozenge: "◊",
  lozf: "⧫",
  lpar: "(",
  lparlt: "⦓",
  lrarr: "⇆",
  lrcorner: "⌟",
  lrhar: "⇋",
  lrhard: "⥭",
  lrm: "‎",
  lrtri: "⊿",
  lsaquo: "‹",
  lscr: "𝓁",
  lsh: "↰",
  lsim: "≲",
  lsime: "⪍",
  lsimg: "⪏",
  lsqb: "[",
  lsquo: "‘",
  lsquor: "‚",
  lstrok: "ł",
  lt: "<",
  ltcc: "⪦",
  ltcir: "⩹",
  ltdot: "⋖",
  lthree: "⋋",
  ltimes: "⋉",
  ltlarr: "⥶",
  ltquest: "⩻",
  ltrPar: "⦖",
  ltri: "◃",
  ltrie: "⊴",
  ltrif: "◂",
  lurdshar: "⥊",
  luruhar: "⥦",
  lvertneqq: "≨︀",
  lvnE: "≨︀",
  mDDot: "∺",
  macr: "¯",
  male: "♂",
  malt: "✠",
  maltese: "✠",
  map: "↦",
  mapsto: "↦",
  mapstodown: "↧",
  mapstoleft: "↤",
  mapstoup: "↥",
  marker: "▮",
  mcomma: "⨩",
  mcy: "м",
  mdash: "—",
  measuredangle: "∡",
  mfr: "𝔪",
  mho: "℧",
  micro: "µ",
  mid: "∣",
  midast: "*",
  midcir: "⫰",
  middot: "·",
  minus: "−",
  minusb: "⊟",
  minusd: "∸",
  minusdu: "⨪",
  mlcp: "⫛",
  mldr: "…",
  mnplus: "∓",
  models: "⊧",
  mopf: "𝕞",
  mp: "∓",
  mscr: "𝓂",
  mstpos: "∾",
  mu: "μ",
  multimap: "⊸",
  mumap: "⊸",
  nGg: "⋙̸",
  nGt: "≫⃒",
  nGtv: "≫̸",
  nLeftarrow: "⇍",
  nLeftrightarrow: "⇎",
  nLl: "⋘̸",
  nLt: "≪⃒",
  nLtv: "≪̸",
  nRightarrow: "⇏",
  nVDash: "⊯",
  nVdash: "⊮",
  nabla: "∇",
  nacute: "ń",
  nang: "∠⃒",
  nap: "≉",
  napE: "⩰̸",
  napid: "≋̸",
  napos: "ŉ",
  napprox: "≉",
  natur: "♮",
  natural: "♮",
  naturals: "ℕ",
  nbsp: "\xA0",
  nbump: "≎̸",
  nbumpe: "≏̸",
  ncap: "⩃",
  ncaron: "ň",
  ncedil: "ņ",
  ncong: "≇",
  ncongdot: "⩭̸",
  ncup: "⩂",
  ncy: "н",
  ndash: "–",
  ne: "≠",
  neArr: "⇗",
  nearhk: "⤤",
  nearr: "↗",
  nearrow: "↗",
  nedot: "≐̸",
  nequiv: "≢",
  nesear: "⤨",
  nesim: "≂̸",
  nexist: "∄",
  nexists: "∄",
  nfr: "𝔫",
  ngE: "≧̸",
  nge: "≱",
  ngeq: "≱",
  ngeqq: "≧̸",
  ngeqslant: "⩾̸",
  nges: "⩾̸",
  ngsim: "≵",
  ngt: "≯",
  ngtr: "≯",
  nhArr: "⇎",
  nharr: "↮",
  nhpar: "⫲",
  ni: "∋",
  nis: "⋼",
  nisd: "⋺",
  niv: "∋",
  njcy: "њ",
  nlArr: "⇍",
  nlE: "≦̸",
  nlarr: "↚",
  nldr: "‥",
  nle: "≰",
  nleftarrow: "↚",
  nleftrightarrow: "↮",
  nleq: "≰",
  nleqq: "≦̸",
  nleqslant: "⩽̸",
  nles: "⩽̸",
  nless: "≮",
  nlsim: "≴",
  nlt: "≮",
  nltri: "⋪",
  nltrie: "⋬",
  nmid: "∤",
  nopf: "𝕟",
  not: "¬",
  notin: "∉",
  notinE: "⋹̸",
  notindot: "⋵̸",
  notinva: "∉",
  notinvb: "⋷",
  notinvc: "⋶",
  notni: "∌",
  notniva: "∌",
  notnivb: "⋾",
  notnivc: "⋽",
  npar: "∦",
  nparallel: "∦",
  nparsl: "⫽⃥",
  npart: "∂̸",
  npolint: "⨔",
  npr: "⊀",
  nprcue: "⋠",
  npre: "⪯̸",
  nprec: "⊀",
  npreceq: "⪯̸",
  nrArr: "⇏",
  nrarr: "↛",
  nrarrc: "⤳̸",
  nrarrw: "↝̸",
  nrightarrow: "↛",
  nrtri: "⋫",
  nrtrie: "⋭",
  nsc: "⊁",
  nsccue: "⋡",
  nsce: "⪰̸",
  nscr: "𝓃",
  nshortmid: "∤",
  nshortparallel: "∦",
  nsim: "≁",
  nsime: "≄",
  nsimeq: "≄",
  nsmid: "∤",
  nspar: "∦",
  nsqsube: "⋢",
  nsqsupe: "⋣",
  nsub: "⊄",
  nsubE: "⫅̸",
  nsube: "⊈",
  nsubset: "⊂⃒",
  nsubseteq: "⊈",
  nsubseteqq: "⫅̸",
  nsucc: "⊁",
  nsucceq: "⪰̸",
  nsup: "⊅",
  nsupE: "⫆̸",
  nsupe: "⊉",
  nsupset: "⊃⃒",
  nsupseteq: "⊉",
  nsupseteqq: "⫆̸",
  ntgl: "≹",
  ntilde: "ñ",
  ntlg: "≸",
  ntriangleleft: "⋪",
  ntrianglelefteq: "⋬",
  ntriangleright: "⋫",
  ntrianglerighteq: "⋭",
  nu: "ν",
  num: "#",
  numero: "№",
  numsp: " ",
  nvDash: "⊭",
  nvHarr: "⤄",
  nvap: "≍⃒",
  nvdash: "⊬",
  nvge: "≥⃒",
  nvgt: ">⃒",
  nvinfin: "⧞",
  nvlArr: "⤂",
  nvle: "≤⃒",
  nvlt: "<⃒",
  nvltrie: "⊴⃒",
  nvrArr: "⤃",
  nvrtrie: "⊵⃒",
  nvsim: "∼⃒",
  nwArr: "⇖",
  nwarhk: "⤣",
  nwarr: "↖",
  nwarrow: "↖",
  nwnear: "⤧",
  oS: "Ⓢ",
  oacute: "ó",
  oast: "⊛",
  ocir: "⊚",
  ocirc: "ô",
  ocy: "о",
  odash: "⊝",
  odblac: "ő",
  odiv: "⨸",
  odot: "⊙",
  odsold: "⦼",
  oelig: "œ",
  ofcir: "⦿",
  ofr: "𝔬",
  ogon: "˛",
  ograve: "ò",
  ogt: "⧁",
  ohbar: "⦵",
  ohm: "Ω",
  oint: "∮",
  olarr: "↺",
  olcir: "⦾",
  olcross: "⦻",
  oline: "‾",
  olt: "⧀",
  omacr: "ō",
  omega: "ω",
  omicron: "ο",
  omid: "⦶",
  ominus: "⊖",
  oopf: "𝕠",
  opar: "⦷",
  operp: "⦹",
  oplus: "⊕",
  or: "∨",
  orarr: "↻",
  ord: "⩝",
  order: "ℴ",
  orderof: "ℴ",
  ordf: "ª",
  ordm: "º",
  origof: "⊶",
  oror: "⩖",
  orslope: "⩗",
  orv: "⩛",
  oscr: "ℴ",
  oslash: "ø",
  osol: "⊘",
  otilde: "õ",
  otimes: "⊗",
  otimesas: "⨶",
  ouml: "ö",
  ovbar: "⌽",
  par: "∥",
  para: "¶",
  parallel: "∥",
  parsim: "⫳",
  parsl: "⫽",
  part: "∂",
  pcy: "п",
  percnt: "%",
  period: ".",
  permil: "‰",
  perp: "⊥",
  pertenk: "‱",
  pfr: "𝔭",
  phi: "φ",
  phiv: "ϕ",
  phmmat: "ℳ",
  phone: "☎",
  pi: "π",
  pitchfork: "⋔",
  piv: "ϖ",
  planck: "ℏ",
  planckh: "ℎ",
  plankv: "ℏ",
  plus: "+",
  plusacir: "⨣",
  plusb: "⊞",
  pluscir: "⨢",
  plusdo: "∔",
  plusdu: "⨥",
  pluse: "⩲",
  plusmn: "±",
  plussim: "⨦",
  plustwo: "⨧",
  pm: "±",
  pointint: "⨕",
  popf: "𝕡",
  pound: "£",
  pr: "≺",
  prE: "⪳",
  prap: "⪷",
  prcue: "≼",
  pre: "⪯",
  prec: "≺",
  precapprox: "⪷",
  preccurlyeq: "≼",
  preceq: "⪯",
  precnapprox: "⪹",
  precneqq: "⪵",
  precnsim: "⋨",
  precsim: "≾",
  prime: "′",
  primes: "ℙ",
  prnE: "⪵",
  prnap: "⪹",
  prnsim: "⋨",
  prod: "∏",
  profalar: "⌮",
  profline: "⌒",
  profsurf: "⌓",
  prop: "∝",
  propto: "∝",
  prsim: "≾",
  prurel: "⊰",
  pscr: "𝓅",
  psi: "ψ",
  puncsp: " ",
  qfr: "𝔮",
  qint: "⨌",
  qopf: "𝕢",
  qprime: "⁗",
  qscr: "𝓆",
  quaternions: "ℍ",
  quatint: "⨖",
  quest: "?",
  questeq: "≟",
  quot: '"',
  rAarr: "⇛",
  rArr: "⇒",
  rAtail: "⤜",
  rBarr: "⤏",
  rHar: "⥤",
  race: "∽̱",
  racute: "ŕ",
  radic: "√",
  raemptyv: "⦳",
  rang: "⟩",
  rangd: "⦒",
  range: "⦥",
  rangle: "⟩",
  raquo: "»",
  rarr: "→",
  rarrap: "⥵",
  rarrb: "⇥",
  rarrbfs: "⤠",
  rarrc: "⤳",
  rarrfs: "⤞",
  rarrhk: "↪",
  rarrlp: "↬",
  rarrpl: "⥅",
  rarrsim: "⥴",
  rarrtl: "↣",
  rarrw: "↝",
  ratail: "⤚",
  ratio: "∶",
  rationals: "ℚ",
  rbarr: "⤍",
  rbbrk: "❳",
  rbrace: "}",
  rbrack: "]",
  rbrke: "⦌",
  rbrksld: "⦎",
  rbrkslu: "⦐",
  rcaron: "ř",
  rcedil: "ŗ",
  rceil: "⌉",
  rcub: "}",
  rcy: "р",
  rdca: "⤷",
  rdldhar: "⥩",
  rdquo: "”",
  rdquor: "”",
  rdsh: "↳",
  real: "ℜ",
  realine: "ℛ",
  realpart: "ℜ",
  reals: "ℝ",
  rect: "▭",
  reg: "®",
  rfisht: "⥽",
  rfloor: "⌋",
  rfr: "𝔯",
  rhard: "⇁",
  rharu: "⇀",
  rharul: "⥬",
  rho: "ρ",
  rhov: "ϱ",
  rightarrow: "→",
  rightarrowtail: "↣",
  rightharpoondown: "⇁",
  rightharpoonup: "⇀",
  rightleftarrows: "⇄",
  rightleftharpoons: "⇌",
  rightrightarrows: "⇉",
  rightsquigarrow: "↝",
  rightthreetimes: "⋌",
  ring: "˚",
  risingdotseq: "≓",
  rlarr: "⇄",
  rlhar: "⇌",
  rlm: "‏",
  rmoust: "⎱",
  rmoustache: "⎱",
  rnmid: "⫮",
  roang: "⟭",
  roarr: "⇾",
  robrk: "⟧",
  ropar: "⦆",
  ropf: "𝕣",
  roplus: "⨮",
  rotimes: "⨵",
  rpar: ")",
  rpargt: "⦔",
  rppolint: "⨒",
  rrarr: "⇉",
  rsaquo: "›",
  rscr: "𝓇",
  rsh: "↱",
  rsqb: "]",
  rsquo: "’",
  rsquor: "’",
  rthree: "⋌",
  rtimes: "⋊",
  rtri: "▹",
  rtrie: "⊵",
  rtrif: "▸",
  rtriltri: "⧎",
  ruluhar: "⥨",
  rx: "℞",
  sacute: "ś",
  sbquo: "‚",
  sc: "≻",
  scE: "⪴",
  scap: "⪸",
  scaron: "š",
  sccue: "≽",
  sce: "⪰",
  scedil: "ş",
  scirc: "ŝ",
  scnE: "⪶",
  scnap: "⪺",
  scnsim: "⋩",
  scpolint: "⨓",
  scsim: "≿",
  scy: "с",
  sdot: "⋅",
  sdotb: "⊡",
  sdote: "⩦",
  seArr: "⇘",
  searhk: "⤥",
  searr: "↘",
  searrow: "↘",
  sect: "§",
  semi: ";",
  seswar: "⤩",
  setminus: "∖",
  setmn: "∖",
  sext: "✶",
  sfr: "𝔰",
  sfrown: "⌢",
  sharp: "♯",
  shchcy: "щ",
  shcy: "ш",
  shortmid: "∣",
  shortparallel: "∥",
  shy: "­",
  sigma: "σ",
  sigmaf: "ς",
  sigmav: "ς",
  sim: "∼",
  simdot: "⩪",
  sime: "≃",
  simeq: "≃",
  simg: "⪞",
  simgE: "⪠",
  siml: "⪝",
  simlE: "⪟",
  simne: "≆",
  simplus: "⨤",
  simrarr: "⥲",
  slarr: "←",
  smallsetminus: "∖",
  smashp: "⨳",
  smeparsl: "⧤",
  smid: "∣",
  smile: "⌣",
  smt: "⪪",
  smte: "⪬",
  smtes: "⪬︀",
  softcy: "ь",
  sol: "/",
  solb: "⧄",
  solbar: "⌿",
  sopf: "𝕤",
  spades: "♠",
  spadesuit: "♠",
  spar: "∥",
  sqcap: "⊓",
  sqcaps: "⊓︀",
  sqcup: "⊔",
  sqcups: "⊔︀",
  sqsub: "⊏",
  sqsube: "⊑",
  sqsubset: "⊏",
  sqsubseteq: "⊑",
  sqsup: "⊐",
  sqsupe: "⊒",
  sqsupset: "⊐",
  sqsupseteq: "⊒",
  squ: "□",
  square: "□",
  squarf: "▪",
  squf: "▪",
  srarr: "→",
  sscr: "𝓈",
  ssetmn: "∖",
  ssmile: "⌣",
  sstarf: "⋆",
  star: "☆",
  starf: "★",
  straightepsilon: "ϵ",
  straightphi: "ϕ",
  strns: "¯",
  sub: "⊂",
  subE: "⫅",
  subdot: "⪽",
  sube: "⊆",
  subedot: "⫃",
  submult: "⫁",
  subnE: "⫋",
  subne: "⊊",
  subplus: "⪿",
  subrarr: "⥹",
  subset: "⊂",
  subseteq: "⊆",
  subseteqq: "⫅",
  subsetneq: "⊊",
  subsetneqq: "⫋",
  subsim: "⫇",
  subsub: "⫕",
  subsup: "⫓",
  succ: "≻",
  succapprox: "⪸",
  succcurlyeq: "≽",
  succeq: "⪰",
  succnapprox: "⪺",
  succneqq: "⪶",
  succnsim: "⋩",
  succsim: "≿",
  sum: "∑",
  sung: "♪",
  sup1: "¹",
  sup2: "²",
  sup3: "³",
  sup: "⊃",
  supE: "⫆",
  supdot: "⪾",
  supdsub: "⫘",
  supe: "⊇",
  supedot: "⫄",
  suphsol: "⟉",
  suphsub: "⫗",
  suplarr: "⥻",
  supmult: "⫂",
  supnE: "⫌",
  supne: "⊋",
  supplus: "⫀",
  supset: "⊃",
  supseteq: "⊇",
  supseteqq: "⫆",
  supsetneq: "⊋",
  supsetneqq: "⫌",
  supsim: "⫈",
  supsub: "⫔",
  supsup: "⫖",
  swArr: "⇙",
  swarhk: "⤦",
  swarr: "↙",
  swarrow: "↙",
  swnwar: "⤪",
  szlig: "ß",
  target: "⌖",
  tau: "τ",
  tbrk: "⎴",
  tcaron: "ť",
  tcedil: "ţ",
  tcy: "т",
  tdot: "⃛",
  telrec: "⌕",
  tfr: "𝔱",
  there4: "∴",
  therefore: "∴",
  theta: "θ",
  thetasym: "ϑ",
  thetav: "ϑ",
  thickapprox: "≈",
  thicksim: "∼",
  thinsp: " ",
  thkap: "≈",
  thksim: "∼",
  thorn: "þ",
  tilde: "˜",
  times: "×",
  timesb: "⊠",
  timesbar: "⨱",
  timesd: "⨰",
  tint: "∭",
  toea: "⤨",
  top: "⊤",
  topbot: "⌶",
  topcir: "⫱",
  topf: "𝕥",
  topfork: "⫚",
  tosa: "⤩",
  tprime: "‴",
  trade: "™",
  triangle: "▵",
  triangledown: "▿",
  triangleleft: "◃",
  trianglelefteq: "⊴",
  triangleq: "≜",
  triangleright: "▹",
  trianglerighteq: "⊵",
  tridot: "◬",
  trie: "≜",
  triminus: "⨺",
  triplus: "⨹",
  trisb: "⧍",
  tritime: "⨻",
  trpezium: "⏢",
  tscr: "𝓉",
  tscy: "ц",
  tshcy: "ћ",
  tstrok: "ŧ",
  twixt: "≬",
  twoheadleftarrow: "↞",
  twoheadrightarrow: "↠",
  uArr: "⇑",
  uHar: "⥣",
  uacute: "ú",
  uarr: "↑",
  ubrcy: "ў",
  ubreve: "ŭ",
  ucirc: "û",
  ucy: "у",
  udarr: "⇅",
  udblac: "ű",
  udhar: "⥮",
  ufisht: "⥾",
  ufr: "𝔲",
  ugrave: "ù",
  uharl: "↿",
  uharr: "↾",
  uhblk: "▀",
  ulcorn: "⌜",
  ulcorner: "⌜",
  ulcrop: "⌏",
  ultri: "◸",
  umacr: "ū",
  uml: "¨",
  uogon: "ų",
  uopf: "𝕦",
  uparrow: "↑",
  updownarrow: "↕",
  upharpoonleft: "↿",
  upharpoonright: "↾",
  uplus: "⊎",
  upsi: "υ",
  upsih: "ϒ",
  upsilon: "υ",
  upuparrows: "⇈",
  urcorn: "⌝",
  urcorner: "⌝",
  urcrop: "⌎",
  uring: "ů",
  urtri: "◹",
  uscr: "𝓊",
  utdot: "⋰",
  utilde: "ũ",
  utri: "▵",
  utrif: "▴",
  uuarr: "⇈",
  uuml: "ü",
  uwangle: "⦧",
  vArr: "⇕",
  vBar: "⫨",
  vBarv: "⫩",
  vDash: "⊨",
  vangrt: "⦜",
  varepsilon: "ϵ",
  varkappa: "ϰ",
  varnothing: "∅",
  varphi: "ϕ",
  varpi: "ϖ",
  varpropto: "∝",
  varr: "↕",
  varrho: "ϱ",
  varsigma: "ς",
  varsubsetneq: "⊊︀",
  varsubsetneqq: "⫋︀",
  varsupsetneq: "⊋︀",
  varsupsetneqq: "⫌︀",
  vartheta: "ϑ",
  vartriangleleft: "⊲",
  vartriangleright: "⊳",
  vcy: "в",
  vdash: "⊢",
  vee: "∨",
  veebar: "⊻",
  veeeq: "≚",
  vellip: "⋮",
  verbar: "|",
  vert: "|",
  vfr: "𝔳",
  vltri: "⊲",
  vnsub: "⊂⃒",
  vnsup: "⊃⃒",
  vopf: "𝕧",
  vprop: "∝",
  vrtri: "⊳",
  vscr: "𝓋",
  vsubnE: "⫋︀",
  vsubne: "⊊︀",
  vsupnE: "⫌︀",
  vsupne: "⊋︀",
  vzigzag: "⦚",
  wcirc: "ŵ",
  wedbar: "⩟",
  wedge: "∧",
  wedgeq: "≙",
  weierp: "℘",
  wfr: "𝔴",
  wopf: "𝕨",
  wp: "℘",
  wr: "≀",
  wreath: "≀",
  wscr: "𝓌",
  xcap: "⋂",
  xcirc: "◯",
  xcup: "⋃",
  xdtri: "▽",
  xfr: "𝔵",
  xhArr: "⟺",
  xharr: "⟷",
  xi: "ξ",
  xlArr: "⟸",
  xlarr: "⟵",
  xmap: "⟼",
  xnis: "⋻",
  xodot: "⨀",
  xopf: "𝕩",
  xoplus: "⨁",
  xotime: "⨂",
  xrArr: "⟹",
  xrarr: "⟶",
  xscr: "𝓍",
  xsqcup: "⨆",
  xuplus: "⨄",
  xutri: "△",
  xvee: "⋁",
  xwedge: "⋀",
  yacute: "ý",
  yacy: "я",
  ycirc: "ŷ",
  ycy: "ы",
  yen: "¥",
  yfr: "𝔶",
  yicy: "ї",
  yopf: "𝕪",
  yscr: "𝓎",
  yucy: "ю",
  yuml: "ÿ",
  zacute: "ź",
  zcaron: "ž",
  zcy: "з",
  zdot: "ż",
  zeetrf: "ℨ",
  zeta: "ζ",
  zfr: "𝔷",
  zhcy: "ж",
  zigrarr: "⇝",
  zopf: "𝕫",
  zscr: "𝓏",
  zwj: "‍",
  zwnj: "‌",
};
// ../../node_modules/.pnpm/pend@1.2.0/node_modules/pend/index.js
var require_pend = /* @__PURE__ */ __commonJSMin((exports, module) => {
  module.exports = Pend;
  function Pend() {
    this.pending = 0;
    this.max = Infinity;
    this.listeners = [];
    this.waiting = [];
    this.error = null;
  }
  Pend.prototype.go = function (fn) {
    if (this.pending < this.max) pendGo(this, fn);
    else this.waiting.push(fn);
  };
  Pend.prototype.wait = function (cb) {
    if (this.pending === 0) cb(this.error);
    else this.listeners.push(cb);
  };
  Pend.prototype.hold = function () {
    return pendHold(this);
  };
  function pendHold(self) {
    self.pending += 1;
    var called = false;
    return onCb;
    function onCb(err) {
      if (called) throw new Error("callback called twice");
      called = true;
      self.error = self.error || err;
      self.pending -= 1;
      if (self.waiting.length > 0 && self.pending < self.max) pendGo(self, self.waiting.shift());
      else if (self.pending === 0) {
        var listeners = self.listeners;
        self.listeners = [];
        listeners.forEach(cbListener);
      }
    }
    function cbListener(listener) {
      listener(self.error);
    }
  }
  function pendGo(self, fn) {
    fn(pendHold(self));
  }
});
// ../../node_modules/.pnpm/yauzl@3.4.0/node_modules/yauzl/fd-slicer.js
var require_fd_slicer = /* @__PURE__ */ __commonJSMin((exports) => {
  var fs = __require("fs");
  var util = __require("util");
  var stream = __require("stream");
  var Readable = stream.Readable;
  var PassThrough = stream.PassThrough;
  var Pend = require_pend();
  var EventEmitter = __require("events").EventEmitter;
  exports.BufferSlicer = BufferSlicer;
  exports.FdSlicer = FdSlicer;
  util.inherits(FdSlicer, EventEmitter);
  function FdSlicer(fd) {
    EventEmitter.call(this);
    this.fd = fd;
    this.pend = new Pend();
    this.pend.max = 1;
    this.refCount = 0;
  }
  FdSlicer.prototype.read = function (buffer, offset, length, position, callback) {
    var self = this;
    self.pend.go(function (cb) {
      fs.read(self.fd, buffer, offset, length, position, function (err, bytesRead, buffer) {
        cb();
        callback(err, bytesRead, buffer);
      });
    });
  };
  FdSlicer.prototype.createReadStream = function (options) {
    return new ReadStream(this, options);
  };
  FdSlicer.prototype.ref = function () {
    this.refCount += 1;
  };
  FdSlicer.prototype.unref = function () {
    var self = this;
    self.refCount -= 1;
    if (self.refCount < 0) throw new Error("invalid unref");
    if (self.refCount > 0) return;
    fs.close(self.fd, onCloseDone);
    function onCloseDone(err) {
      if (err) self.emit("error", err);
      else self.emit("close");
    }
  };
  util.inherits(ReadStream, Readable);
  function ReadStream(context, options) {
    options = options || {};
    Readable.call(this, options);
    this.context = context;
    this.context.ref();
    this.start = options.start || 0;
    this.endOffset = options.end;
    this.pos = this.start;
  }
  ReadStream.prototype._read = function (n) {
    var self = this;
    var toRead = Math.min(self._readableState.highWaterMark, n);
    if (self.endOffset != null) toRead = Math.min(toRead, self.endOffset - self.pos);
    if (toRead <= 0) {
      self.push(null);
      this._cleanup();
      return;
    }
    self.context.pend.go(function (cb) {
      var buffer = Buffer.allocUnsafe(toRead);
      fs.read(self.context.fd, buffer, 0, toRead, self.pos, function (err, bytesRead) {
        if (err) self.destroy(err);
        else if (bytesRead === 0) {
          self.push(null);
          self._cleanup();
        } else {
          self.pos += bytesRead;
          self.push(buffer.slice(0, bytesRead));
        }
        cb();
      });
    });
  };
  ReadStream.prototype._destroy = function (err, cb) {
    this._cleanup();
    cb(err);
  };
  ReadStream.prototype._cleanup = function () {
    if (this.context != null) {
      this.context.unref();
      this.context = null;
    }
  };
  util.inherits(BufferSlicer, EventEmitter);
  function BufferSlicer(buffer) {
    EventEmitter.call(this);
    this.refCount = 0;
    this.buffer = buffer;
  }
  BufferSlicer.prototype.read = function (buffer, offset, length, position, callback) {
    if (!(0 <= offset && offset <= buffer.length))
      throw new RangeError("offset outside buffer: 0 <= " + offset + " <= " + buffer.length);
    if (position < 0) throw new RangeError("position is negative: " + position);
    if (offset + length > buffer.length) length = buffer.length - offset;
    if (position + length > this.buffer.length) length = this.buffer.length - position;
    if (length <= 0) {
      setImmediate(function () {
        callback(null, 0);
      });
      return;
    }
    this.buffer.copy(buffer, offset, position, position + length);
    setImmediate(function () {
      callback(null, length);
    });
  };
  BufferSlicer.prototype.createReadStream = function (options) {
    options = options || {};
    var readStream = new PassThrough(options);
    readStream.start = options.start || 0;
    readStream.endOffset = options.end;
    readStream.pos = readStream.endOffset || this.buffer.length;
    var entireSlice = this.buffer.slice(readStream.start, readStream.pos);
    var maxChunkSize = 65536;
    var offset = 0;
    while (true) {
      var nextOffset = offset + maxChunkSize;
      if (nextOffset >= entireSlice.length) {
        if (offset < entireSlice.length)
          readStream.write(entireSlice.slice(offset, entireSlice.length));
        break;
      }
      readStream.write(entireSlice.slice(offset, nextOffset));
      offset = nextOffset;
    }
    readStream.end();
    return readStream;
  };
  BufferSlicer.prototype.ref = function () {
    this.refCount += 1;
  };
  BufferSlicer.prototype.unref = function () {
    this.refCount -= 1;
    if (this.refCount < 0) throw new Error("invalid unref");
  };
});
// ../../node_modules/.pnpm/yauzl@3.4.0/node_modules/yauzl/crc32.js
var require_crc32 = /* @__PURE__ */ __commonJSMin((exports, module) => {
  const CRC_TABLE = new Int32Array([
    0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274,
    2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548,
    1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
    1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096,
    1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722,
    1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
    1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974,
    1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192,
    31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
    251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444,
    476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902,
    314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
    984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506,
    879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948,
    654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
    702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384,
    2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930,
    2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
    2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526,
    2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888,
    2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
    2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804,
    3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542,
    2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
    3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634,
    3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012,
    4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
    4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896,
    3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818,
    3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
    3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614,
    3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117,
  ]);
  function crc32(buf) {
    let crc = -1;
    for (let x of buf) crc = CRC_TABLE[(crc ^ x) & 255] ^ (crc >>> 8);
    return (crc ^ -1) >>> 0;
  }
  module.exports = crc32;
});
// ../../node_modules/.pnpm/yauzl@3.4.0/node_modules/yauzl/index.js
var require_yauzl = /* @__PURE__ */ __commonJSMin((exports) => {
  var fs = __require("fs");
  var zlib = __require("zlib");
  var fd_slicer = require_fd_slicer();
  var util = __require("util");
  var EventEmitter = __require("events").EventEmitter;
  var Transform = __require("stream").Transform;
  var PassThrough = __require("stream").PassThrough;
  var Writable = __require("stream").Writable;
  const crc32 = typeof zlib.crc32 === "function" ? zlib.crc32 : require_crc32();
  exports.open = open;
  function open(path, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = null;
    }
    if (options == null) options = {};
    if (options.autoClose == null) options.autoClose = true;
    if (options.lazyEntries == null) options.lazyEntries = false;
    if (options.decodeStrings == null) options.decodeStrings = true;
    if (options.validateEntrySizes == null) options.validateEntrySizes = true;
    if (options.strictFileNames == null) options.strictFileNames = false;
    if (callback == null) callback = defaultCallback;
    fs.open(path, "r", function (err, fd) {
      if (err) return callback(err);
      fromFd(fd, options, function (err, zipfile) {
        if (err) fs.close(fd, defaultCallback);
        callback(err, zipfile);
      });
    });
  }
  function fromFd(fd, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = null;
    }
    if (options == null) options = {};
    if (options.autoClose == null) options.autoClose = false;
    if (options.lazyEntries == null) options.lazyEntries = false;
    if (options.decodeStrings == null) options.decodeStrings = true;
    if (options.validateEntrySizes == null) options.validateEntrySizes = true;
    if (options.strictFileNames == null) options.strictFileNames = false;
    if (callback == null) callback = defaultCallback;
    fs.fstat(fd, function (err, stats) {
      if (err) return callback(err);
      fromRandomAccessReader(new fd_slicer.FdSlicer(fd), stats.size, options, callback);
    });
  }
  function fromRandomAccessReader(reader, totalSize, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = null;
    }
    if (options == null) options = {};
    if (options.autoClose == null) options.autoClose = true;
    if (options.lazyEntries == null) options.lazyEntries = false;
    if (options.decodeStrings == null) options.decodeStrings = true;
    var decodeStrings = !!options.decodeStrings;
    if (options.validateEntrySizes == null) options.validateEntrySizes = true;
    if (options.strictFileNames == null) options.strictFileNames = false;
    if (callback == null) callback = defaultCallback;
    if (typeof totalSize !== "number")
      throw new Error("expected totalSize parameter to be a number");
    if (totalSize > Number.MAX_SAFE_INTEGER)
      throw new Error(
        "zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.",
      );
    reader.ref();
    var eocdrWithoutCommentSize = 22;
    var zip64EocdlSize = 20;
    var bufferSize = Math.min(zip64EocdlSize + eocdrWithoutCommentSize + 65535, totalSize);
    var buffer = newBuffer(bufferSize);
    readAndAssertNoEof(reader, buffer, 0, bufferSize, totalSize - buffer.length, function (err) {
      if (err) return callback(err);
      for (var i = bufferSize - eocdrWithoutCommentSize; i >= 0; i -= 1) {
        if (buffer.readUInt32LE(i) !== 101010256) continue;
        var eocdrBuffer = buffer.subarray(i);
        var diskNumber = eocdrBuffer.readUInt16LE(4);
        var entryCount = eocdrBuffer.readUInt16LE(10);
        var centralDirectoryOffset = eocdrBuffer.readUInt32LE(16);
        var commentLength = eocdrBuffer.readUInt16LE(20);
        var expectedCommentLength = eocdrBuffer.length - eocdrWithoutCommentSize;
        if (commentLength !== expectedCommentLength)
          return callback(
            /* @__PURE__ */ new Error(
              "Invalid comment length. Expected: " +
                expectedCommentLength +
                ". Found: " +
                commentLength +
                ". Are there extra bytes at the end of the file? Or is the end of central dir signature `PK☺☻` in the comment?",
            ),
          );
        var comment = decodeStrings
          ? decodeBuffer(eocdrBuffer.subarray(22), false)
          : eocdrBuffer.subarray(22);
        if (i - zip64EocdlSize >= 0 && buffer.readUInt32LE(i - zip64EocdlSize) === 117853008) {
          var zip64EocdrOffset = readUInt64LE(
            buffer.subarray(i - zip64EocdlSize, i - zip64EocdlSize + zip64EocdlSize),
            8,
          );
          var zip64EocdrBuffer = newBuffer(56);
          return readAndAssertNoEof(
            reader,
            zip64EocdrBuffer,
            0,
            zip64EocdrBuffer.length,
            zip64EocdrOffset,
            function (err) {
              if (err) return callback(err);
              if (zip64EocdrBuffer.readUInt32LE(0) !== 101075792)
                return callback(
                  /* @__PURE__ */ new Error(
                    "invalid zip64 end of central directory record signature",
                  ),
                );
              diskNumber = zip64EocdrBuffer.readUInt32LE(16);
              if (diskNumber !== 0)
                return callback(
                  /* @__PURE__ */ new Error(
                    "multi-disk zip files are not supported: found disk number: " + diskNumber,
                  ),
                );
              entryCount = readUInt64LE(zip64EocdrBuffer, 32);
              centralDirectoryOffset = readUInt64LE(zip64EocdrBuffer, 48);
              return callback(
                null,
                new ZipFile(
                  reader,
                  centralDirectoryOffset,
                  totalSize,
                  entryCount,
                  comment,
                  options.autoClose,
                  options.lazyEntries,
                  decodeStrings,
                  options.validateEntrySizes,
                  options.strictFileNames,
                ),
              );
            },
          );
        }
        if (diskNumber !== 0)
          return callback(
            /* @__PURE__ */ new Error(
              "multi-disk zip files are not supported: found disk number: " + diskNumber,
            ),
          );
        return callback(
          null,
          new ZipFile(
            reader,
            centralDirectoryOffset,
            totalSize,
            entryCount,
            comment,
            options.autoClose,
            options.lazyEntries,
            decodeStrings,
            options.validateEntrySizes,
            options.strictFileNames,
          ),
        );
      }
      callback(
        /* @__PURE__ */ new Error(
          "End of central directory record signature not found. Either not a zip file, or file is truncated.",
        ),
      );
    });
  }
  util.inherits(ZipFile, EventEmitter);
  function ZipFile(
    reader,
    centralDirectoryOffset,
    fileSize,
    entryCount,
    comment,
    autoClose,
    lazyEntries,
    decodeStrings,
    validateEntrySizes,
    strictFileNames,
  ) {
    var self = this;
    EventEmitter.call(self);
    self.reader = reader;
    self.reader.on("error", function (err) {
      emitError(self, err);
    });
    self.reader.once("close", function () {
      self.emit("close");
    });
    self.readEntryCursor = centralDirectoryOffset;
    self.fileSize = fileSize;
    self.entryCount = entryCount;
    self.comment = comment;
    self.entriesRead = 0;
    self.autoClose = !!autoClose;
    self.lazyEntries = !!lazyEntries;
    self.decodeStrings = !!decodeStrings;
    self.validateEntrySizes = !!validateEntrySizes;
    self.strictFileNames = !!strictFileNames;
    self.isOpen = true;
    self.emittedError = false;
    self.hasEachEntryBeenCalled = false;
    if (!self.lazyEntries) self._readEntry();
  }
  ZipFile.prototype.close = function () {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.reader.unref();
  };
  function emitErrorAndAutoClose(self, err) {
    if (self.autoClose) self.close();
    emitError(self, err);
  }
  function emitError(self, err) {
    if (self.emittedError) return;
    self.emittedError = true;
    self.emit("error", err);
  }
  ZipFile.prototype.readEntry = function () {
    if (!this.lazyEntries) throw new Error("readEntry() called without lazyEntries:true");
    this._readEntry();
  };
  ZipFile.prototype._readEntry = function () {
    var self = this;
    if (self.entryCount === self.entriesRead) {
      setImmediate(function () {
        if (self.autoClose) self.close();
        if (self.emittedError) return;
        self.emit("end");
      });
      return;
    }
    if (self.emittedError) return;
    var buffer = newBuffer(46);
    readAndAssertNoEof(self.reader, buffer, 0, buffer.length, self.readEntryCursor, function (err) {
      if (err) return emitErrorAndAutoClose(self, err);
      if (self.emittedError) return;
      var entry = new Entry();
      var signature = buffer.readUInt32LE(0);
      if (signature !== 33639248)
        return emitErrorAndAutoClose(
          self,
          /* @__PURE__ */ new Error(
            "invalid central directory file header signature: 0x" + signature.toString(16),
          ),
        );
      entry.versionMadeBy = buffer.readUInt16LE(4);
      entry.versionNeededToExtract = buffer.readUInt16LE(6);
      entry.generalPurposeBitFlag = buffer.readUInt16LE(8);
      entry.compressionMethod = buffer.readUInt16LE(10);
      entry.lastModFileTime = buffer.readUInt16LE(12);
      entry.lastModFileDate = buffer.readUInt16LE(14);
      entry.crc32 = buffer.readUInt32LE(16);
      entry.compressedSize = buffer.readUInt32LE(20);
      entry.uncompressedSize = buffer.readUInt32LE(24);
      entry.fileNameLength = buffer.readUInt16LE(28);
      entry.extraFieldLength = buffer.readUInt16LE(30);
      entry.fileCommentLength = buffer.readUInt16LE(32);
      entry.internalFileAttributes = buffer.readUInt16LE(36);
      entry.externalFileAttributes = buffer.readUInt32LE(38);
      entry.relativeOffsetOfLocalHeader = buffer.readUInt32LE(42);
      if (entry.generalPurposeBitFlag & 64)
        return emitErrorAndAutoClose(
          self,
          /* @__PURE__ */ new Error("strong encryption is not supported"),
        );
      self.readEntryCursor += 46;
      buffer = newBuffer(entry.fileNameLength + entry.extraFieldLength + entry.fileCommentLength);
      readAndAssertNoEof(
        self.reader,
        buffer,
        0,
        buffer.length,
        self.readEntryCursor,
        function (err) {
          if (err) return emitErrorAndAutoClose(self, err);
          if (self.emittedError) return;
          entry.fileNameRaw = buffer.subarray(0, entry.fileNameLength);
          var fileCommentStart = entry.fileNameLength + entry.extraFieldLength;
          entry.extraFieldRaw = buffer.subarray(entry.fileNameLength, fileCommentStart);
          entry.fileCommentRaw = buffer.subarray(
            fileCommentStart,
            fileCommentStart + entry.fileCommentLength,
          );
          try {
            entry.extraFields = parseExtraFields(entry.extraFieldRaw);
          } catch (err) {
            return emitErrorAndAutoClose(self, err);
          }
          if (self.decodeStrings) {
            var isUtf8 = (entry.generalPurposeBitFlag & 2048) !== 0;
            entry.fileComment = decodeBuffer(entry.fileCommentRaw, isUtf8);
            entry.fileName = getFileNameLowLevel(
              entry.generalPurposeBitFlag,
              entry.fileNameRaw,
              entry.extraFields,
              self.strictFileNames,
            );
            var errorMessage = validateFileName(entry.fileName);
            if (errorMessage != null) return emitErrorAndAutoClose(self, new Error(errorMessage));
          } else {
            entry.fileComment = entry.fileCommentRaw;
            entry.fileName = entry.fileNameRaw;
          }
          entry.comment = entry.fileComment;
          self.readEntryCursor += buffer.length;
          self.entriesRead += 1;
          for (var i = 0; i < entry.extraFields.length; i++) {
            var extraField = entry.extraFields[i];
            if (extraField.id !== 1) continue;
            var zip64EiefBuffer = extraField.data;
            var index = 0;
            if (entry.uncompressedSize === 4294967295) {
              if (index + 8 > zip64EiefBuffer.length)
                return emitErrorAndAutoClose(
                  self,
                  /* @__PURE__ */ new Error(
                    "zip64 extended information extra field does not include uncompressed size",
                  ),
                );
              entry.uncompressedSize = readUInt64LE(zip64EiefBuffer, index);
              index += 8;
            }
            if (entry.compressedSize === 4294967295) {
              if (index + 8 > zip64EiefBuffer.length)
                return emitErrorAndAutoClose(
                  self,
                  /* @__PURE__ */ new Error(
                    "zip64 extended information extra field does not include compressed size",
                  ),
                );
              entry.compressedSize = readUInt64LE(zip64EiefBuffer, index);
              index += 8;
            }
            if (entry.relativeOffsetOfLocalHeader === 4294967295) {
              if (index + 8 > zip64EiefBuffer.length)
                return emitErrorAndAutoClose(
                  self,
                  /* @__PURE__ */ new Error(
                    "zip64 extended information extra field does not include relative header offset",
                  ),
                );
              entry.relativeOffsetOfLocalHeader = readUInt64LE(zip64EiefBuffer, index);
              index += 8;
            }
            break;
          }
          if (self.validateEntrySizes && entry.compressionMethod === 0) {
            var expectedCompressedSize = entry.uncompressedSize;
            if (entry.isEncrypted()) expectedCompressedSize += 12;
            if (entry.compressedSize !== expectedCompressedSize) {
              var msg =
                "compressed/uncompressed size mismatch for stored file: " +
                entry.compressedSize +
                " != " +
                entry.uncompressedSize;
              return emitErrorAndAutoClose(self, new Error(msg));
            }
          }
          self.emit("entry", entry);
          if (!self.lazyEntries) self._readEntry();
        },
      );
    });
  };
  ZipFile.prototype.eachEntry = function () {
    const self = this;
    if (!self.lazyEntries) throw new Error("eachEntry() requires lazyEntries: true");
    if (self.hasEachEntryBeenCalled)
      throw new Error("eachEntry() must only be called once per ZipFile");
    self.hasEachEntryBeenCalled = true;
    let pendingResolveReject = null;
    self.on("entry", onEntry);
    self.on("end", onEnd);
    self.on("error", onError);
    function cleanup() {
      self.removeListener("entry", onEntry);
      self.removeListener("end", onEnd);
      self.removeListener("error", onError);
      if (self.autoClose) self.close();
    }
    function onEntry(entry) {
      let { resolve } = pendingResolveReject;
      pendingResolveReject = null;
      resolve({ value: entry });
    }
    function onEnd() {
      let { resolve } = pendingResolveReject;
      pendingResolveReject = null;
      cleanup();
      resolve({ done: true });
    }
    function onError(err) {
      let { reject } = pendingResolveReject;
      pendingResolveReject = null;
      cleanup();
      reject(err);
    }
    return {
      [Symbol.asyncIterator]() {
        return this;
      },
      next() {
        const promise = new Promise((resolve, reject) => {
          if (pendingResolveReject != null)
            throw new Error("next() called before previous Promise was resolved.");
          pendingResolveReject = {
            resolve,
            reject,
          };
        });
        self.readEntry();
        return promise;
      },
      return(value) {
        cleanup();
        return Promise.resolve({
          done: true,
          value,
        });
      },
      throw(value) {
        cleanup();
        return Promise.reject(value);
      },
    };
  };
  ZipFile.prototype.openReadStream = function (entry, options, callback) {
    var self = this;
    var relativeStart = 0;
    var relativeEnd = entry.compressedSize;
    if (callback == null) {
      callback = options;
      options = null;
    }
    if (options == null) options = {};
    else {
      if (options.decodeFileData === false) {
        if (options.decrypt != null)
          throw new Error("cannot use options.decrypt when options.decodeFileData === false");
        if (options.decompress != null)
          throw new Error("cannot use options.decompress when options.decodeFileData === false");
      } else {
        if (options.decrypt != null) {
          if (!entry.isEncrypted())
            throw new Error(
              "options.decrypt can only be specified for encrypted entries. See also option decodeFileData.",
            );
          if (options.decrypt !== false)
            throw new Error("invalid options.decrypt value: " + options.decrypt);
          if (entry.isCompressed()) {
            if (options.decompress !== false)
              throw new Error(
                "entry is encrypted and compressed, and options.decompress !== false. See also option decodeFileData.",
              );
          }
        }
        if (options.decompress != null) {
          if (!entry.isCompressed())
            throw new Error(
              "options.decompress can only be specified for compressed entries. See also option decodeFileData.",
            );
          if (!(options.decompress === false || options.decompress === true))
            throw new Error("invalid options.decompress value: " + options.decompress);
          decompress = options.decompress;
        }
      }
      if (options.start != null) {
        relativeStart = options.start;
        if (relativeStart < 0) throw new Error("options.start < 0");
        if (relativeStart > entry.compressedSize)
          throw new Error("options.start > entry.compressedSize");
      }
      if (options.end != null) {
        relativeEnd = options.end;
        if (relativeEnd < 0) throw new Error("options.end < 0");
        if (relativeEnd > entry.compressedSize)
          throw new Error("options.end > entry.compressedSize");
        if (relativeEnd < relativeStart) throw new Error("options.end < options.start");
      }
    }
    var rawMode =
      options.decodeFileData === false ||
      ((entry.compressionMethod === 0 ||
        (entry.compressionMethod === 8 && options.decompress === false)) &&
        (!entry.isEncrypted() || options.decrypt === false));
    if (options.start != null || options.end != null) {
      if (!rawMode)
        throw new Error(
          "start/end range require options.decodeFileData === false for non-trivial encoded entries.",
        );
    }
    if (!self.isOpen) return callback(/* @__PURE__ */ new Error("closed"));
    if (entry.isEncrypted() && !rawMode) {
      if (options.decrypt !== false)
        return callback(
          /* @__PURE__ */ new Error("entry is encrypted, and options.decodeFileData !== false"),
        );
    }
    var decompress;
    if (rawMode) decompress = false;
    else if (entry.compressionMethod === 8) decompress = options.decodeFileData !== true;
    else
      return callback(
        /* @__PURE__ */ new Error("unsupported compression method: " + entry.compressionMethod),
      );
    self.readLocalFileHeader(entry, { minimal: true }, function (err, localFileHeader) {
      if (err) return callback(err);
      self.openReadStreamLowLevel(
        localFileHeader.fileDataStart,
        entry.compressedSize,
        relativeStart,
        relativeEnd,
        decompress,
        entry.uncompressedSize,
        callback,
      );
    });
  };
  ZipFile.prototype.openReadStreamLowLevel = function (
    fileDataStart,
    compressedSize,
    relativeStart,
    relativeEnd,
    decompress,
    uncompressedSize,
    callback,
  ) {
    var self = this;
    fileDataStart + compressedSize;
    var readStream = self.reader.createReadStream({
      start: fileDataStart + relativeStart,
      end: fileDataStart + relativeEnd,
    });
    var endpointStream = readStream;
    if (decompress) {
      var destroyed = false;
      var inflateFilter = zlib.createInflateRaw();
      readStream.on("error", function (err) {
        setImmediate(function () {
          if (!destroyed) inflateFilter.emit("error", err);
        });
      });
      readStream.pipe(inflateFilter);
      if (self.validateEntrySizes) {
        endpointStream = new AssertByteCountStream(uncompressedSize);
        inflateFilter.on("error", function (err) {
          setImmediate(function () {
            if (!destroyed) endpointStream.emit("error", err);
          });
        });
        inflateFilter.pipe(endpointStream);
      } else endpointStream = inflateFilter;
      installDestroyFn(endpointStream, function () {
        destroyed = true;
        if (inflateFilter !== endpointStream) inflateFilter.unpipe(endpointStream);
        readStream.unpipe(inflateFilter);
        readStream.destroy();
      });
    }
    callback(null, endpointStream);
  };
  ZipFile.prototype.readLocalFileHeader = function (entry, options, callback) {
    var self = this;
    if (callback == null) {
      callback = options;
      options = null;
    }
    if (options == null) options = {};
    self.reader.ref();
    var buffer = newBuffer(30);
    readAndAssertNoEof(
      self.reader,
      buffer,
      0,
      buffer.length,
      entry.relativeOffsetOfLocalHeader,
      function (err) {
        try {
          if (err) return callback(err);
          var signature = buffer.readUInt32LE(0);
          if (signature !== 67324752)
            return callback(
              /* @__PURE__ */ new Error(
                "invalid local file header signature: 0x" + signature.toString(16),
              ),
            );
          var fileNameLength = buffer.readUInt16LE(26);
          var extraFieldLength = buffer.readUInt16LE(28);
          var fileDataStart =
            entry.relativeOffsetOfLocalHeader + 30 + fileNameLength + extraFieldLength;
          if (fileDataStart + entry.compressedSize > self.fileSize)
            return callback(
              /* @__PURE__ */ new Error(
                "file data overflows file bounds: " +
                  fileDataStart +
                  " + " +
                  entry.compressedSize +
                  " > " +
                  self.fileSize,
              ),
            );
          if (options.minimal) return callback(null, { fileDataStart });
          var localFileHeader = new LocalFileHeader();
          localFileHeader.fileDataStart = fileDataStart;
          localFileHeader.versionNeededToExtract = buffer.readUInt16LE(4);
          localFileHeader.generalPurposeBitFlag = buffer.readUInt16LE(6);
          localFileHeader.compressionMethod = buffer.readUInt16LE(8);
          localFileHeader.lastModFileTime = buffer.readUInt16LE(10);
          localFileHeader.lastModFileDate = buffer.readUInt16LE(12);
          localFileHeader.crc32 = buffer.readUInt32LE(14);
          localFileHeader.compressedSize = buffer.readUInt32LE(18);
          localFileHeader.uncompressedSize = buffer.readUInt32LE(22);
          localFileHeader.fileNameLength = fileNameLength;
          localFileHeader.extraFieldLength = extraFieldLength;
          buffer = newBuffer(fileNameLength + extraFieldLength);
          self.reader.ref();
          readAndAssertNoEof(
            self.reader,
            buffer,
            0,
            buffer.length,
            entry.relativeOffsetOfLocalHeader + 30,
            function (err) {
              try {
                if (err) return callback(err);
                localFileHeader.fileName = buffer.subarray(0, fileNameLength);
                localFileHeader.extraField = buffer.subarray(fileNameLength);
                return callback(null, localFileHeader);
              } finally {
                self.reader.unref();
              }
            },
          );
        } finally {
          self.reader.unref();
        }
      },
    );
  };
  ZipFile.prototype.openReadStreamPromise = function (entry, options) {
    return new Promise((resolve, reject) => {
      this.openReadStream(entry, options, function (err, readStream) {
        if (err) return reject(err);
        resolve(readStream);
      });
    });
  };
  ZipFile.prototype.openReadStreamLowLevelPromise = function (
    fileDataStart,
    compressedSize,
    relativeStart,
    relativeEnd,
    decompress,
    uncompressedSize,
  ) {
    return new Promise((resolve, reject) => {
      this.openReadStream(
        fileDataStart,
        compressedSize,
        relativeStart,
        relativeEnd,
        decompress,
        uncompressedSize,
        function (err, readStream) {
          if (err) return reject(err);
          resolve(readStream);
        },
      );
    });
  };
  ZipFile.prototype.readLocalFileHeaderPromise = function (entry, options) {
    return new Promise((resolve, reject) => {
      this.readLocalFileHeader(entry, options, function (err, localFileHeader) {
        if (err) return reject(err);
        resolve(localFileHeader);
      });
    });
  };
  function Entry() {}
  Entry.prototype.getLastModDate = function (options) {
    if (options == null) options = {};
    if (!options.forceDosFormat)
      for (var i = 0; i < this.extraFields.length; i++) {
        var extraField = this.extraFields[i];
        if (extraField.id === 21589) {
          var data = extraField.data;
          if (data.length < 5) continue;
          if (!(data[0] & 1)) continue;
          var posixTimestamp = data.readInt32LE(1);
          return /* @__PURE__ */ new Date(posixTimestamp * 1e3);
        } else if (extraField.id === 10) {
          var data = extraField.data;
          if (data.length !== 32) continue;
          if (data.readUInt16LE(4) !== 1) continue;
          if (data.readUInt16LE(6) !== 24) continue;
          var millisecondsSince1970 =
            (data.readUInt32LE(8) + 4294967296 * data.readInt32LE(12)) / 1e4 - 0xa9730b66800;
          return new Date(millisecondsSince1970);
        }
      }
    return dosDateTimeToDate(this.lastModFileDate, this.lastModFileTime, options.timezone);
  };
  Entry.prototype.canDecodeFileData = function () {
    return !this.isEncrypted() && (this.compressionMethod === 0 || this.compressionMethod === 8);
  };
  Entry.prototype.isEncrypted = function () {
    return (this.generalPurposeBitFlag & 1) !== 0;
  };
  Entry.prototype.isCompressed = function () {
    return this.compressionMethod === 8;
  };
  function LocalFileHeader() {}
  function dosDateTimeToDate(date, time, timezone) {
    var day = date & 31;
    var month = ((date >> 5) & 15) - 1;
    var year = ((date >> 9) & 127) + 1980;
    var millisecond = 0;
    var second = (time & 31) * 2;
    var minute = (time >> 5) & 63;
    var hour = (time >> 11) & 31;
    if (timezone == null || timezone === "local")
      return new Date(year, month, day, hour, minute, second, millisecond);
    else if (timezone === "UTC")
      return new Date(Date.UTC(year, month, day, hour, minute, second, millisecond));
    else throw new Error("unrecognized options.timezone: " + options.timezone);
  }
  function getFileNameLowLevel(
    generalPurposeBitFlag,
    fileNameBuffer,
    extraFields,
    strictFileNames,
  ) {
    var fileName = null;
    for (var i = 0; i < extraFields.length; i++) {
      var extraField = extraFields[i];
      if (extraField.id === 28789) {
        if (extraField.data.length < 6) continue;
        if (extraField.data.readUInt8(0) !== 1) continue;
        var oldNameCrc32 = extraField.data.readUInt32LE(1);
        if (crc32(fileNameBuffer) !== oldNameCrc32) continue;
        fileName = decodeBuffer(extraField.data.subarray(5), true);
        break;
      }
    }
    if (fileName == null)
      fileName = decodeBuffer(fileNameBuffer, (generalPurposeBitFlag & 2048) !== 0);
    if (!strictFileNames) fileName = fileName.replace(/\\/g, "/");
    return fileName;
  }
  function validateFileName(fileName) {
    if (fileName.indexOf("\\") !== -1) return "invalid characters in fileName: " + fileName;
    if (/^[a-zA-Z]:/.test(fileName) || /^\//.test(fileName)) return "absolute path: " + fileName;
    if (fileName.split("/").indexOf("..") !== -1) return "invalid relative path: " + fileName;
    return null;
  }
  function parseExtraFields(extraFieldBuffer) {
    var extraFields = [];
    var i = 0;
    while (i < extraFieldBuffer.length - 3) {
      var headerId = extraFieldBuffer.readUInt16LE(i + 0);
      var dataSize = extraFieldBuffer.readUInt16LE(i + 2);
      var dataStart = i + 4;
      var dataEnd = dataStart + dataSize;
      if (dataEnd > extraFieldBuffer.length)
        throw new Error("extra field length exceeds extra field buffer size");
      var dataBuffer = extraFieldBuffer.subarray(dataStart, dataEnd);
      extraFields.push({
        id: headerId,
        data: dataBuffer,
      });
      i = dataEnd;
    }
    return extraFields;
  }
  function readAndAssertNoEof(reader, buffer, offset, length, position, callback) {
    if (length === 0)
      return setImmediate(function () {
        callback(null, newBuffer(0));
      });
    reader.read(buffer, offset, length, position, function (err, bytesRead) {
      if (err) return callback(err);
      if (bytesRead < length) return callback(/* @__PURE__ */ new Error("unexpected EOF"));
      callback();
    });
  }
  util.inherits(AssertByteCountStream, Transform);
  function AssertByteCountStream(byteCount) {
    Transform.call(this);
    this.actualByteCount = 0;
    this.expectedByteCount = byteCount;
  }
  AssertByteCountStream.prototype._transform = function (chunk, encoding, cb) {
    this.actualByteCount += chunk.length;
    if (this.actualByteCount > this.expectedByteCount) {
      var msg =
        "too many bytes in the stream. expected " +
        this.expectedByteCount +
        ". got at least " +
        this.actualByteCount;
      return cb(new Error(msg));
    }
    cb(null, chunk);
  };
  AssertByteCountStream.prototype._flush = function (cb) {
    if (this.actualByteCount < this.expectedByteCount) {
      var msg =
        "not enough bytes in the stream. expected " +
        this.expectedByteCount +
        ". got only " +
        this.actualByteCount;
      return cb(new Error(msg));
    }
    cb();
  };
  util.inherits(RandomAccessReader, EventEmitter);
  function RandomAccessReader() {
    EventEmitter.call(this);
    this.refCount = 0;
  }
  RandomAccessReader.prototype.ref = function () {
    this.refCount += 1;
  };
  RandomAccessReader.prototype.unref = function () {
    var self = this;
    self.refCount -= 1;
    if (self.refCount > 0) return;
    if (self.refCount < 0) throw new Error("invalid unref");
    self.close(onCloseDone);
    function onCloseDone(err) {
      if (err) return self.emit("error", err);
      self.emit("close");
    }
  };
  RandomAccessReader.prototype.createReadStream = function (options) {
    if (options == null) options = {};
    var start = options.start;
    var end = options.end;
    if (start === end) {
      var emptyStream = new PassThrough();
      setImmediate(function () {
        emptyStream.end();
      });
      return emptyStream;
    }
    var stream = this._readStreamForRange(start, end);
    var destroyed = false;
    var refUnrefFilter = new RefUnrefFilter(this);
    stream.on("error", function (err) {
      setImmediate(function () {
        if (!destroyed) refUnrefFilter.emit("error", err);
      });
    });
    installDestroyFn(refUnrefFilter, function () {
      stream.unpipe(refUnrefFilter);
      refUnrefFilter.unref();
      stream.destroy();
    });
    var byteCounter = new AssertByteCountStream(end - start);
    refUnrefFilter.on("error", function (err) {
      setImmediate(function () {
        if (!destroyed) byteCounter.emit("error", err);
      });
    });
    installDestroyFn(byteCounter, function () {
      destroyed = true;
      refUnrefFilter.unpipe(byteCounter);
      refUnrefFilter.destroy();
    });
    return stream.pipe(refUnrefFilter).pipe(byteCounter);
  };
  RandomAccessReader.prototype._readStreamForRange = function (start, end) {
    throw new Error("not implemented");
  };
  RandomAccessReader.prototype.read = function (buffer, offset, length, position, callback) {
    var readStream = this.createReadStream({
      start: position,
      end: position + length,
    });
    var writeStream = new Writable();
    var written = 0;
    writeStream._write = function (chunk, encoding, cb) {
      chunk.copy(buffer, offset + written, 0, chunk.length);
      written += chunk.length;
      cb();
    };
    writeStream.on("finish", callback);
    readStream.on("error", function (error) {
      callback(error);
    });
    readStream.pipe(writeStream);
  };
  RandomAccessReader.prototype.close = function (callback) {
    setImmediate(callback);
  };
  util.inherits(RefUnrefFilter, PassThrough);
  function RefUnrefFilter(context) {
    PassThrough.call(this);
    this.context = context;
    this.context.ref();
    this.unreffedYet = false;
  }
  RefUnrefFilter.prototype._flush = function (cb) {
    this.unref();
    cb();
  };
  RefUnrefFilter.prototype.unref = function (cb) {
    if (this.unreffedYet) return;
    this.unreffedYet = true;
    this.context.unref();
  };
  var cp437 =
    "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■\xA0";
  function decodeBuffer(buffer, isUtf8) {
    if (isUtf8) return buffer.toString("utf8");
    else {
      var result = "";
      for (var i = 0; i < buffer.length; i++) result += cp437[buffer[i]];
      return result;
    }
  }
  function readUInt64LE(buffer, offset) {
    var lower32 = buffer.readUInt32LE(offset);
    return buffer.readUInt32LE(offset + 4) * 4294967296 + lower32;
  }
  var newBuffer;
  if (typeof Buffer.allocUnsafe === "function")
    newBuffer = function (len) {
      return Buffer.allocUnsafe(len);
    };
  else
    newBuffer = function (len) {
      return new Buffer(len);
    };
  function installDestroyFn(stream, fn) {
    if (typeof stream.destroy === "function")
      stream._destroy = function (err, cb) {
        fn();
        if (cb != null) cb(err);
      };
    else stream.destroy = fn;
  }
  function defaultCallback(err) {
    if (err) throw err;
  }
});
export {
  __require as a,
  __exportAll as i,
  characterEntities as n,
  __toESM as o,
  __commonJSMin as r,
  require_yauzl as t,
};

//# sourceMappingURL=yauzl-BCgcFNel.mjs.map
