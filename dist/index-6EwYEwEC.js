import { defineComponent as w, shallowRef as Ut, watch as U, openBlock as y, createBlock as b, resolveDynamicComponent as be, normalizeClass as re, unref as i, createCommentVNode as H, createElementBlock as Q, pushScopeId as Ba, popScopeId as Ea, createElementVNode as J, computed as S, renderSlot as C, createVNode as P, withCtx as g, ref as E, getCurrentScope as hn, onScopeDispose as yn, shallowReadonly as Ye, mergeProps as F, cloneVNode as Pa, h as et, toRefs as de, getCurrentInstance as Ne, normalizeProps as Z, guardReactiveProps as te, reactive as Bo, normalizeStyle as wt, watchEffect as ee, markRaw as mo, nextTick as q, onMounted as ne, withKeys as zt, withModifiers as pe, withDirectives as Eo, vShow as bn, createTextVNode as oe, Fragment as xe, toDisplayString as ie, isRef as Po, renderList as xt, Teleport as wn, useSlots as qt, onBeforeMount as ka, effectScope as xn, customRef as _n, readonly as Gt, toHandlerKey as Da, camelize as Cn, onUnmounted as Xt, vModelSelect as $a, onBeforeUnmount as An, inject as On, provide as Bn, onBeforeUpdate as Sa, onUpdated as Ta, toRef as En, mergeDefaults as Pn, useAttrs as Ia, Transition as ko, mergeModels as Nt, useModel as Do } from "vue";
import { RouterLink as Ra } from "vue-router";
import { useI18n as $o } from "vue-i18n";
const kn = {
  arrowDown: import("./ArrowDownIcon-i1wZe7qW.js"),
  arrowLeft: import("./ArrowLeftIcon-Bchq4dpv.js"),
  arrowRight: import("./ArrowRightIcon-DVZD0Cn3.js"),
  arrowUp: import("./ArrowUpIcon-BU5ixk18.js"),
  checkmark: import("./CheckmarkIcon-1PBBDZmw.js"),
  chevronDown: import("./ChevronDownIcon-BGHwIOy-.js"),
  chevronLeft: import("./ChevronLeftIcon-v3i2kh3q.js"),
  chevronRight: import("./ChevronRightIcon-BLIMQt1q.js"),
  chevronUp: import("./ChevronUpIcon-CYswE0EX.js"),
  close: import("./CloseIcon-CrDnwnNG.js"),
  eye: import("./EyeIcon-CRKS_BPV.js"),
  eyeSlash: import("./EyeSlashIcon-DclD69Vc.js")
};
function Nd(e) {
  Object.assign(kn, e);
}
function Dn(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (o = Dn(e[t])) && (n && (n += " "), n += o);
    } else
      for (o in e)
        e[o] && (n && (n += " "), n += o);
  return n;
}
function Ma() {
  for (var e, t, o = 0, n = "", a = arguments.length; o < a; o++)
    (e = arguments[o]) && (t = Dn(e)) && (n && (n += " "), n += t);
  return n;
}
const So = "-";
function Fa(e) {
  const t = za(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: n
  } = e;
  function a(l) {
    const s = l.split(So);
    return s[0] === "" && s.length !== 1 && s.shift(), $n(s, t) || La(l);
  }
  function r(l, s) {
    const u = o[l] || [];
    return s && n[l] ? [...u, ...n[l]] : u;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: r
  };
}
function $n(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], n = t.nextPart.get(o), a = n ? $n(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const r = e.join(So);
  return (l = t.validators.find(({
    validator: s
  }) => s(r))) == null ? void 0 : l.classGroupId;
}
const Zo = /^\[(.+)\]$/;
function La(e) {
  if (Zo.test(e)) {
    const t = Zo.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}
function za(e) {
  const {
    theme: t,
    prefix: o
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Na(Object.entries(e.classGroups), o).forEach(([r, l]) => {
    go(l, n, r, t);
  }), n;
}
function go(e, t, o, n) {
  e.forEach((a) => {
    if (typeof a == "string") {
      const r = a === "" ? t : en(t, a);
      r.classGroupId = o;
      return;
    }
    if (typeof a == "function") {
      if (Va(a)) {
        go(a(n), t, o, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: o
      });
      return;
    }
    Object.entries(a).forEach(([r, l]) => {
      go(l, en(t, r), o, n);
    });
  });
}
function en(e, t) {
  let o = e;
  return t.split(So).forEach((n) => {
    o.nextPart.has(n) || o.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(n);
  }), o;
}
function Va(e) {
  return e.isThemeGetter;
}
function Na(e, t) {
  return t ? e.map(([o, n]) => {
    const a = n.map((r) => typeof r == "string" ? t + r : typeof r == "object" ? Object.fromEntries(Object.entries(r).map(([l, s]) => [t + l, s])) : r);
    return [o, a];
  }) : e;
}
function ja(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function a(r, l) {
    o.set(r, l), t++, t > e && (t = 0, n = o, o = /* @__PURE__ */ new Map());
  }
  return {
    get(r) {
      let l = o.get(r);
      if (l !== void 0)
        return l;
      if ((l = n.get(r)) !== void 0)
        return a(r, l), l;
    },
    set(r, l) {
      o.has(r) ? o.set(r, l) : a(r, l);
    }
  };
}
const Sn = "!";
function Wa(e) {
  const t = e.separator, o = t.length === 1, n = t[0], a = t.length;
  return function(l) {
    const s = [];
    let u = 0, d = 0, p;
    for (let h = 0; h < l.length; h++) {
      let _ = l[h];
      if (u === 0) {
        if (_ === n && (o || l.slice(h, h + a) === t)) {
          s.push(l.slice(d, h)), d = h + a;
          continue;
        }
        if (_ === "/") {
          p = h;
          continue;
        }
      }
      _ === "[" ? u++ : _ === "]" && u--;
    }
    const c = s.length === 0 ? l : l.substring(d), f = c.startsWith(Sn), v = f ? c.substring(1) : c, m = p && p > d ? p - d : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
}
function Ka(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...o.sort(), n), o = []) : o.push(n);
  }), t.push(...o.sort()), t;
}
function Ha(e) {
  return {
    cache: ja(e.cacheSize),
    splitModifiers: Wa(e),
    ...Fa(e)
  };
}
const Ua = /\s+/;
function qa(e, t) {
  const {
    splitModifiers: o,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, r = /* @__PURE__ */ new Set();
  return e.trim().split(Ua).map((l) => {
    const {
      modifiers: s,
      hasImportantModifier: u,
      baseClassName: d,
      maybePostfixModifierPosition: p
    } = o(l);
    let c = n(p ? d.substring(0, p) : d), f = !!p;
    if (!c) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (c = n(d), !c)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      f = !1;
    }
    const v = Ka(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: u ? v + Sn : v,
      classGroupId: c,
      originalClassName: l,
      hasPostfixModifier: f
    };
  }).reverse().filter((l) => {
    if (!l.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: u,
      hasPostfixModifier: d
    } = l, p = s + u;
    return r.has(p) ? !1 : (r.add(p), a(u, d).forEach((c) => r.add(s + c)), !0);
  }).reverse().map((l) => l.originalClassName).join(" ");
}
function Ga() {
  let e = 0, t, o, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = Tn(t)) && (n && (n += " "), n += o);
  return n;
}
function Tn(e) {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Tn(e[n])) && (o && (o += " "), o += t);
  return o;
}
function ho(e, ...t) {
  let o, n, a, r = l;
  function l(u) {
    const d = t.reduce((p, c) => c(p), e());
    return o = Ha(d), n = o.cache.get, a = o.cache.set, r = s, s(u);
  }
  function s(u) {
    const d = n(u);
    if (d)
      return d;
    const p = qa(u, o);
    return a(u, p), p;
  }
  return function() {
    return r(Ga.apply(null, arguments));
  };
}
function G(e) {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}
const In = /^\[(?:([a-z-]+):)?(.+)\]$/i, Xa = /^\d+\/\d+$/, Ya = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qa = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ja = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Za = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, er = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, tr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Oe(e) {
  return He(e) || Ya.has(e) || Xa.test(e);
}
function Me(e) {
  return nt(e, "length", ur);
}
function He(e) {
  return !!e && !Number.isNaN(Number(e));
}
function It(e) {
  return nt(e, "number", He);
}
function vt(e) {
  return !!e && Number.isInteger(Number(e));
}
function or(e) {
  return e.endsWith("%") && He(e.slice(0, -1));
}
function N(e) {
  return In.test(e);
}
function Fe(e) {
  return Qa.test(e);
}
const nr = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function ar(e) {
  return nt(e, nr, Rn);
}
function rr(e) {
  return nt(e, "position", Rn);
}
const lr = /* @__PURE__ */ new Set(["image", "url"]);
function ir(e) {
  return nt(e, lr, cr);
}
function sr(e) {
  return nt(e, "", dr);
}
function mt() {
  return !0;
}
function nt(e, t, o) {
  const n = In.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : o(n[2]) : !1;
}
function ur(e) {
  return Ja.test(e) && !Za.test(e);
}
function Rn() {
  return !1;
}
function dr(e) {
  return er.test(e);
}
function cr(e) {
  return tr.test(e);
}
function yo() {
  const e = G("colors"), t = G("spacing"), o = G("blur"), n = G("brightness"), a = G("borderColor"), r = G("borderRadius"), l = G("borderSpacing"), s = G("borderWidth"), u = G("contrast"), d = G("grayscale"), p = G("hueRotate"), c = G("invert"), f = G("gap"), v = G("gradientColorStops"), m = G("gradientColorStopPositions"), h = G("inset"), _ = G("margin"), x = G("opacity"), A = G("padding"), B = G("saturate"), T = G("scale"), D = G("sepia"), I = G("skew"), k = G("space"), V = G("translate"), j = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", N, t], $ = () => [N, t], X = () => ["", Oe, Me], R = () => ["auto", He, N], W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], K = () => ["solid", "dashed", "dotted", "double", "none"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ge = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], he = () => ["", "0", N], St = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ye = () => [He, It], Xe = () => [He, N];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [mt],
      spacing: [Oe, Me],
      blur: ["none", "", Fe, N],
      brightness: ye(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Fe, N],
      borderSpacing: $(),
      borderWidth: X(),
      contrast: ye(),
      grayscale: he(),
      hueRotate: Xe(),
      invert: he(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [or, Me],
      inset: L(),
      margin: L(),
      opacity: ye(),
      padding: $(),
      saturate: ye(),
      scale: ye(),
      sepia: he(),
      skew: Xe(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Fe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": St()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": St()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...W(), N]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", vt, N]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", N]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: he()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: he()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", vt, N]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [mt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", vt, N]
        }, N]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": R()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": R()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [mt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [vt, N]
        }, N]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": R()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": R()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", N]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...ge()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ge(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...ge(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [A]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [A]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [A]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [A]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [A]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [A]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [A]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [A]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [A]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", N, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [N, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [N, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Fe]
        }, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [N, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [N, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [N, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Fe, Me]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", It]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [mt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", N]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", He, It]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Oe, N]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", N]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", N]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Oe, Me]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Oe, N]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", N]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", N]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...W(), rr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ar]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ir]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [v]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [v]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [r]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [r]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [r]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [r]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [r]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [r]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [r]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [r]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [r]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [r]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [r]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [r]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [r]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [r]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [r]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...K(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: K()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...K()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Oe, N]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Oe, Me]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: X()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Oe, Me]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Fe, sr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [mt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ae()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Fe, N]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", N]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Xe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", N]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Xe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", N]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [vt, N]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [V]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [V]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", N]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", N]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", N]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Oe, Me, It]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function pr(e, {
  cacheSize: t,
  prefix: o,
  separator: n,
  extend: a = {},
  override: r = {}
}) {
  Vt(e, "cacheSize", t), Vt(e, "prefix", o), Vt(e, "separator", n);
  for (const l in r)
    fr(e[l], r[l]);
  for (const l in a)
    vr(e[l], a[l]);
  return e;
}
function Vt(e, t, o) {
  o !== void 0 && (e[t] = o);
}
function fr(e, t) {
  if (t)
    for (const o in t)
      Vt(e, o, t[o]);
}
function vr(e, t) {
  if (t)
    for (const o in t) {
      const n = t[o];
      n !== void 0 && (e[o] = (e[o] || []).concat(n));
    }
}
function mr(e, ...t) {
  return typeof e == "function" ? ho(yo, e, ...t) : ho(() => pr(yo(), e), ...t);
}
const gr = /* @__PURE__ */ ho(yo);
function hr(...e) {
  return gr(Ma(e));
}
function Mn(e) {
  var t, o, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (o = Mn(e[t])) && (n && (n += " "), n += o);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function so() {
  for (var e, t, o = 0, n = ""; o < arguments.length; )
    (e = arguments[o++]) && (t = Mn(e)) && (n && (n += " "), n += t);
  return n;
}
const tn = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, yr = (e) => {
  const t = function() {
    for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
      r[l] = arguments[l];
    var s, u;
    return typeof (e == null || (s = e.hooks) === null || s === void 0 ? void 0 : s["cx:done"]) < "u" ? e == null ? void 0 : e.hooks["cx:done"](so(r)) : typeof (e == null || (u = e.hooks) === null || u === void 0 ? void 0 : u.onComplete) < "u" ? e == null ? void 0 : e.hooks.onComplete(so(r)) : so(r);
  };
  return { compose: function() {
    for (var a = arguments.length, r = new Array(a), l = 0; l < a; l++)
      r[l] = arguments[l];
    return (s) => {
      const u = Object.fromEntries(Object.entries(s || {}).filter((d) => {
        let [p] = d;
        return !["class", "className"].includes(p);
      }));
      return t(r.map((d) => d(u)), s == null ? void 0 : s.class, s == null ? void 0 : s.className);
    };
  }, cva: (a) => (r) => {
    var l;
    if ((a == null ? void 0 : a.variants) == null)
      return t(a == null ? void 0 : a.base, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
    const { variants: s, defaultVariants: u } = a, d = Object.keys(s).map((f) => {
      const v = r == null ? void 0 : r[f], m = u == null ? void 0 : u[f], h = tn(v) || tn(m);
      return s[f][h];
    }), p = { ...u, ...r && Object.entries(r).reduce((f, v) => {
      let [m, h] = v;
      return typeof h > "u" ? f : { ...f, [m]: h };
    }, {}) }, c = a == null || (l = a.compoundVariants) === null || l === void 0 ? void 0 : l.reduce((f, v) => {
      let { class: m, className: h, ..._ } = v;
      return Object.entries(_).every((x) => {
        let [A, B] = x;
        const T = p[A];
        return Array.isArray(B) ? B.includes(T) : T === B;
      }) ? [...f, m, h] : f;
    }, []);
    return t(a == null ? void 0 : a.base, d, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  }, cx: t };
}, br = mr({
  extend: {
    classGroups: {
      "font-size": [{
        text: ["subtext", "caption", "hero", "title", "subtitle", "heading", "body"]
      }]
    }
  }
}), {
  compose: jd,
  cva: Yt,
  cx: Wd
} = yr({
  hooks: {
    onComplete: (e) => br(e)
  }
}), Fn = {
  default: "h-4 w-4",
  full: "h-full w-full",
  lg: "h-5 w-5",
  sm: "h-3 w-3",
  xl: "h-6 w-6",
  xs: "h-2 w-2",
  xxl: "h-8 w-8"
}, wr = Yt({
  base: null,
  defaultVariants: {
    size: "default"
  },
  variants: {
    size: Fn
  }
}), Kd = Object.keys(Fn), se = /* @__PURE__ */ w({
  __name: "AppIcon",
  props: {
    icon: {},
    size: { default: "default" }
  },
  setup(e) {
    const t = e, o = Ut(null);
    return U(
      () => t.icon,
      async () => {
        const n = await kn[t.icon];
        o.value = n.default;
      },
      {
        immediate: !0
      }
    ), (n, a) => o.value !== null ? (y(), b(be(o.value), {
      key: 0,
      class: re(i(hr)(i(wr)({ size: n.size })))
    }, null, 8, ["class"])) : H("", !0);
  }
}), To = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, a] of t)
    o[n] = a;
  return o;
}, xr = {}, _r = (e) => (Ba("data-v-6e666566"), e = e(), Ea(), e), Cr = { viewBox: "25 25 50 50" }, Ar = /* @__PURE__ */ _r(() => /* @__PURE__ */ J("circle", {
  class: "size-full",
  cx: "100%",
  cy: "100%",
  fill: "none",
  r: "20",
  stroke: "currentColor",
  "stroke-miterlimit": "10",
  "stroke-width": "2"
}, null, -1)), Or = [
  Ar
];
function Br(e, t) {
  return y(), Q("svg", Cr, Or);
}
const Ln = /* @__PURE__ */ To(xr, [["render", Br], ["__scopeId", "data-v-6e666566"]]), zn = Yt({
  base: "relative flex items-center justify-center rounded-button border border-solid text-sm outline-none ring-offset-2 ring-offset-background duration-200 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
  defaultVariants: {
    size: "default",
    variant: "default"
  },
  variants: {
    size: {
      default: "h-10 px-4 py-2",
      icon: "size-10",
      lg: "h-11 rounded-button px-8",
      sm: "h-9 rounded-button px-3"
    },
    variant: {
      default: "border-primary bg-primary text-primary-foreground ring-ring",
      destructive: "border-destructive bg-destructive text-destructive-foreground focus-visible:ring-destructive",
      "destructive-outline": "border-destructive bg-transparent text-destructive ring-destructive",
      ghost: "border-transparent bg-transparent text-muted-foreground ring-foreground hover:enabled:bg-muted-background focus:enabled:bg-muted-background",
      outline: "border-primary bg-background text-primary ring-primary",
      secondary: "border-muted-background bg-muted-background text-muted-foreground ring-foreground"
    }
  }
}), Hd = Yt({
  defaultVariants: {
    size: "default"
  },
  variants: {
    size: {
      default: "size-3.5",
      lg: "size-4",
      sm: "size-3.5"
    }
  }
}), Er = ["disabled", "type"], Pr = {
  key: 1,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
}, kr = /* @__PURE__ */ w({
  __name: "AppButton",
  props: {
    iconLeft: {},
    iconRight: {},
    isDisabled: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    size: { default: "default" },
    type: { default: "button" },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, o = S(
      () => zn({
        size: t.size,
        variant: t.variant
      })
    );
    return (n, a) => (y(), Q("button", {
      disabled: n.isDisabled || n.isLoading,
      type: t.type,
      class: re(o.value)
    }, [
      t.iconLeft !== null && t.iconLeft !== void 0 ? (y(), b(se, {
        key: 0,
        icon: t.iconLeft,
        class: re([{
          "opacity-0": t.isLoading
        }, "mr-3"])
      }, null, 8, ["icon", "class"])) : H("", !0),
      J("span", {
        class: re({
          "opacity-0": t.isLoading
        })
      }, [
        C(n.$slots, "default")
      ], 2),
      t.isLoading ? (y(), Q("div", Pr, [
        P(Ln, { class: "size-4" })
      ])) : H("", !0),
      t.iconRight !== null && t.iconRight !== void 0 ? (y(), b(se, {
        key: 2,
        icon: t.iconRight,
        class: re([{
          "opacity-0": t.isLoading
        }, "ml-3"])
      }, null, 8, ["icon", "class"])) : H("", !0)
    ], 10, Er));
  }
}), Vn = /* @__PURE__ */ w({
  __name: "AppIconButton",
  props: {
    icon: {},
    iconSize: { default: "sm" },
    label: {},
    variant: { default: "default" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(kr, {
      variant: t.variant,
      "aria-label": t.label,
      size: "icon"
    }, {
      default: g(() => [
        P(se, {
          icon: t.icon,
          size: t.iconSize
        }, null, 8, ["icon", "size"])
      ]),
      _: 1
    }, 8, ["variant", "aria-label"]));
  }
}), Dr = {
  key: 1,
  class: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
}, Ud = /* @__PURE__ */ w({
  __name: "AppRouterLinkButton",
  props: {
    iconLeft: {},
    iconRight: {},
    size: { default: "default" },
    to: {},
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, o = S(
      () => zn({
        size: t.size,
        variant: t.variant
      })
    );
    return (n, a) => (y(), b(i(Ra), {
      to: t.to,
      class: re(o.value)
    }, {
      default: g(() => [
        t.iconLeft !== null && t.iconLeft !== void 0 ? (y(), b(se, {
          key: 0,
          icon: t.iconLeft,
          class: re([{
            "opacity-0": t.isLoading
          }, "mr-3"])
        }, null, 8, ["icon", "class"])) : H("", !0),
        J("span", {
          class: re({
            "opacity-0": t.isLoading
          })
        }, [
          C(n.$slots, "default")
        ], 2),
        t.isLoading ? (y(), Q("div", Dr, [
          P(Ln, { class: "size-4" })
        ])) : H("", !0),
        t.iconRight !== null && t.iconRight !== void 0 ? (y(), b(se, {
          key: 2,
          icon: t.iconRight,
          class: re([{
            "opacity-0": t.isLoading
          }, "ml-3"])
        }, null, 8, ["icon", "class"])) : H("", !0)
      ]),
      _: 3
    }, 8, ["to", "class"]));
  }
}), $r = ["top", "right", "bottom", "left"], ze = Math.min, ce = Math.max, jt = Math.round, Rt = Math.floor, Ve = (e) => ({
  x: e,
  y: e
}), Sr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Tr = {
  start: "end",
  end: "start"
};
function bo(e, t, o) {
  return ce(e, ze(t, o));
}
function ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function De(e) {
  return e.split("-")[0];
}
function at(e) {
  return e.split("-")[1];
}
function Io(e) {
  return e === "x" ? "y" : "x";
}
function Ro(e) {
  return e === "y" ? "height" : "width";
}
function rt(e) {
  return ["top", "bottom"].includes(De(e)) ? "y" : "x";
}
function Mo(e) {
  return Io(rt(e));
}
function Ir(e, t, o) {
  o === void 0 && (o = !1);
  const n = at(e), a = Mo(e), r = Ro(a);
  let l = a === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (l = Wt(l)), [l, Wt(l)];
}
function Rr(e) {
  const t = Wt(e);
  return [wo(e), t, wo(t)];
}
function wo(e) {
  return e.replace(/start|end/g, (t) => Tr[t]);
}
function Mr(e, t, o) {
  const n = ["left", "right"], a = ["right", "left"], r = ["top", "bottom"], l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? r : l;
    default:
      return [];
  }
}
function Fr(e, t, o, n) {
  const a = at(e);
  let r = Mr(De(e), o === "start", n);
  return a && (r = r.map((l) => l + "-" + a), t && (r = r.concat(r.map(wo)))), r;
}
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Sr[t]);
}
function Lr(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nn(e) {
  return typeof e != "number" ? Lr(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Kt(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function on(e, t, o) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = rt(t), l = Mo(t), s = Ro(l), u = De(t), d = r === "y", p = n.x + n.width / 2 - a.width / 2, c = n.y + n.height / 2 - a.height / 2, f = n[s] / 2 - a[s] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: p,
        y: n.y - a.height
      };
      break;
    case "bottom":
      v = {
        x: p,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: c
      };
      break;
    case "left":
      v = {
        x: n.x - a.width,
        y: c
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (at(t)) {
    case "start":
      v[l] -= f * (o && d ? -1 : 1);
      break;
    case "end":
      v[l] += f * (o && d ? -1 : 1);
      break;
  }
  return v;
}
const zr = async (e, t, o) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: l
  } = o, s = r.filter(Boolean), u = await (l.isRTL == null ? void 0 : l.isRTL(t));
  let d = await l.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: p,
    y: c
  } = on(d, n, u), f = n, v = {}, m = 0;
  for (let h = 0; h < s.length; h++) {
    const {
      name: _,
      fn: x
    } = s[h], {
      x: A,
      y: B,
      data: T,
      reset: D
    } = await x({
      x: p,
      y: c,
      initialPlacement: n,
      placement: f,
      strategy: a,
      middlewareData: v,
      rects: d,
      platform: l,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = A ?? p, c = B ?? c, v = {
      ...v,
      [_]: {
        ...v[_],
        ...T
      }
    }, D && m <= 50 && (m++, typeof D == "object" && (D.placement && (f = D.placement), D.rects && (d = D.rects === !0 ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : D.rects), {
      x: p,
      y: c
    } = on(d, f, u)), h = -1);
  }
  return {
    x: p,
    y: c,
    placement: f,
    strategy: a,
    middlewareData: v
  };
};
async function ht(e, t) {
  var o;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: l,
    elements: s,
    strategy: u
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: c = "floating",
    altBoundary: f = !1,
    padding: v = 0
  } = ke(t, e), m = Nn(v), _ = s[f ? c === "floating" ? "reference" : "floating" : c], x = Kt(await r.getClippingRect({
    element: (o = await (r.isElement == null ? void 0 : r.isElement(_))) == null || o ? _ : _.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: d,
    rootBoundary: p,
    strategy: u
  })), A = c === "floating" ? {
    ...l.floating,
    x: n,
    y: a
  } : l.reference, B = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), T = await (r.isElement == null ? void 0 : r.isElement(B)) ? await (r.getScale == null ? void 0 : r.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = Kt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: A,
    offsetParent: B,
    strategy: u
  }) : A);
  return {
    top: (x.top - D.top + m.top) / T.y,
    bottom: (D.bottom - x.bottom + m.bottom) / T.y,
    left: (x.left - D.left + m.left) / T.x,
    right: (D.right - x.right + m.right) / T.x
  };
}
const Vr = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: o,
      y: n,
      placement: a,
      rects: r,
      platform: l,
      elements: s,
      middlewareData: u
    } = t, {
      element: d,
      padding: p = 0
    } = ke(e, t) || {};
    if (d == null)
      return {};
    const c = Nn(p), f = {
      x: o,
      y: n
    }, v = Mo(a), m = Ro(v), h = await l.getDimensions(d), _ = v === "y", x = _ ? "top" : "left", A = _ ? "bottom" : "right", B = _ ? "clientHeight" : "clientWidth", T = r.reference[m] + r.reference[v] - f[v] - r.floating[m], D = f[v] - r.reference[v], I = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(d));
    let k = I ? I[B] : 0;
    (!k || !await (l.isElement == null ? void 0 : l.isElement(I))) && (k = s.floating[B] || r.floating[m]);
    const V = T / 2 - D / 2, j = k / 2 - h[m] / 2 - 1, O = ze(c[x], j), L = ze(c[A], j), $ = O, X = k - h[m] - L, R = k / 2 - h[m] / 2 + V, W = bo($, R, X), K = !u.arrow && at(a) != null && R !== W && r.reference[m] / 2 - (R < $ ? O : L) - h[m] / 2 < 0, ae = K ? R < $ ? R - $ : R - X : 0;
    return {
      [v]: f[v] + ae,
      data: {
        [v]: W,
        centerOffset: R - W - ae,
        ...K && {
          alignmentOffset: ae
        }
      },
      reset: K
    };
  }
}), Nr = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var o, n;
      const {
        placement: a,
        middlewareData: r,
        rects: l,
        initialPlacement: s,
        platform: u,
        elements: d
      } = t, {
        mainAxis: p = !0,
        crossAxis: c = !0,
        fallbackPlacements: f,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ..._
      } = ke(e, t);
      if ((o = r.arrow) != null && o.alignmentOffset)
        return {};
      const x = De(a), A = De(s) === s, B = await (u.isRTL == null ? void 0 : u.isRTL(d.floating)), T = f || (A || !h ? [Wt(s)] : Rr(s));
      !f && m !== "none" && T.push(...Fr(s, h, m, B));
      const D = [s, ...T], I = await ht(t, _), k = [];
      let V = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (p && k.push(I[x]), c) {
        const $ = Ir(a, l, B);
        k.push(I[$[0]], I[$[1]]);
      }
      if (V = [...V, {
        placement: a,
        overflows: k
      }], !k.every(($) => $ <= 0)) {
        var j, O;
        const $ = (((j = r.flip) == null ? void 0 : j.index) || 0) + 1, X = D[$];
        if (X)
          return {
            data: {
              index: $,
              overflows: V
            },
            reset: {
              placement: X
            }
          };
        let R = (O = V.filter((W) => W.overflows[0] <= 0).sort((W, K) => W.overflows[1] - K.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!R)
          switch (v) {
            case "bestFit": {
              var L;
              const W = (L = V.map((K) => [K.placement, K.overflows.filter((ae) => ae > 0).reduce((ae, ge) => ae + ge, 0)]).sort((K, ae) => K[1] - ae[1])[0]) == null ? void 0 : L[0];
              W && (R = W);
              break;
            }
            case "initialPlacement":
              R = s;
              break;
          }
        if (a !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function nn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function an(e) {
  return $r.some((t) => e[t] >= 0);
}
const jr = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: o
      } = t, {
        strategy: n = "referenceHidden",
        ...a
      } = ke(e, t);
      switch (n) {
        case "referenceHidden": {
          const r = await ht(t, {
            ...a,
            elementContext: "reference"
          }), l = nn(r, o.reference);
          return {
            data: {
              referenceHiddenOffsets: l,
              referenceHidden: an(l)
            }
          };
        }
        case "escaped": {
          const r = await ht(t, {
            ...a,
            altBoundary: !0
          }), l = nn(r, o.floating);
          return {
            data: {
              escapedOffsets: l,
              escaped: an(l)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Wr(e, t) {
  const {
    placement: o,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), l = De(o), s = at(o), u = rt(o) === "y", d = ["left", "top"].includes(l) ? -1 : 1, p = r && u ? -1 : 1, c = ke(t, e);
  let {
    mainAxis: f,
    crossAxis: v,
    alignmentAxis: m
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...c
  };
  return s && typeof m == "number" && (v = s === "end" ? m * -1 : m), u ? {
    x: v * p,
    y: f * d
  } : {
    x: f * d,
    y: v * p
  };
}
const Kr = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var o, n;
      const {
        x: a,
        y: r,
        placement: l,
        middlewareData: s
      } = t, u = await Wr(t, e);
      return l === ((o = s.offset) == null ? void 0 : o.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: a + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: l
        }
      };
    }
  };
}, Hr = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: o,
        y: n,
        placement: a
      } = t, {
        mainAxis: r = !0,
        crossAxis: l = !1,
        limiter: s = {
          fn: (_) => {
            let {
              x,
              y: A
            } = _;
            return {
              x,
              y: A
            };
          }
        },
        ...u
      } = ke(e, t), d = {
        x: o,
        y: n
      }, p = await ht(t, u), c = rt(De(a)), f = Io(c);
      let v = d[f], m = d[c];
      if (r) {
        const _ = f === "y" ? "top" : "left", x = f === "y" ? "bottom" : "right", A = v + p[_], B = v - p[x];
        v = bo(A, v, B);
      }
      if (l) {
        const _ = c === "y" ? "top" : "left", x = c === "y" ? "bottom" : "right", A = m + p[_], B = m - p[x];
        m = bo(A, m, B);
      }
      const h = s.fn({
        ...t,
        [f]: v,
        [c]: m
      });
      return {
        ...h,
        data: {
          x: h.x - o,
          y: h.y - n
        }
      };
    }
  };
}, Ur = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: o,
        y: n,
        placement: a,
        rects: r,
        middlewareData: l
      } = t, {
        offset: s = 0,
        mainAxis: u = !0,
        crossAxis: d = !0
      } = ke(e, t), p = {
        x: o,
        y: n
      }, c = rt(a), f = Io(c);
      let v = p[f], m = p[c];
      const h = ke(s, t), _ = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const B = f === "y" ? "height" : "width", T = r.reference[f] - r.floating[B] + _.mainAxis, D = r.reference[f] + r.reference[B] - _.mainAxis;
        v < T ? v = T : v > D && (v = D);
      }
      if (d) {
        var x, A;
        const B = f === "y" ? "width" : "height", T = ["top", "left"].includes(De(a)), D = r.reference[c] - r.floating[B] + (T && ((x = l.offset) == null ? void 0 : x[c]) || 0) + (T ? 0 : _.crossAxis), I = r.reference[c] + r.reference[B] + (T ? 0 : ((A = l.offset) == null ? void 0 : A[c]) || 0) - (T ? _.crossAxis : 0);
        m < D ? m = D : m > I && (m = I);
      }
      return {
        [f]: v,
        [c]: m
      };
    }
  };
}, qr = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: o,
        rects: n,
        platform: a,
        elements: r
      } = t, {
        apply: l = () => {
        },
        ...s
      } = ke(e, t), u = await ht(t, s), d = De(o), p = at(o), c = rt(o) === "y", {
        width: f,
        height: v
      } = n.floating;
      let m, h;
      d === "top" || d === "bottom" ? (m = d, h = p === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (h = d, m = p === "end" ? "top" : "bottom");
      const _ = v - u[m], x = f - u[h], A = !t.middlewareData.shift;
      let B = _, T = x;
      if (c) {
        const I = f - u.left - u.right;
        T = p || A ? ze(x, I) : I;
      } else {
        const I = v - u.top - u.bottom;
        B = p || A ? ze(_, I) : I;
      }
      if (A && !p) {
        const I = ce(u.left, 0), k = ce(u.right, 0), V = ce(u.top, 0), j = ce(u.bottom, 0);
        c ? T = f - 2 * (I !== 0 || k !== 0 ? I + k : ce(u.left, u.right)) : B = v - 2 * (V !== 0 || j !== 0 ? V + j : ce(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: T,
        availableHeight: B
      });
      const D = await a.getDimensions(r.floating);
      return f !== D.width || v !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $e(e) {
  return Fo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function fe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Te(e) {
  var t;
  return (t = (Fo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fo(e) {
  return e instanceof Node || e instanceof fe(e).Node;
}
function Se(e) {
  return e instanceof Element || e instanceof fe(e).Element;
}
function we(e) {
  return e instanceof HTMLElement || e instanceof fe(e).HTMLElement;
}
function rn(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof fe(e).ShadowRoot;
}
function _t(e) {
  const {
    overflow: t,
    overflowX: o,
    overflowY: n,
    display: a
  } = ve(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(a);
}
function Gr(e) {
  return ["table", "td", "th"].includes($e(e));
}
function Lo(e) {
  const t = zo(), o = ve(e);
  return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !t && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !t && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (o.contain || "").includes(n));
}
function Xr(e) {
  let t = tt(e);
  for (; we(t) && !Qt(t); ) {
    if (Lo(t))
      return t;
    t = tt(t);
  }
  return null;
}
function zo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qt(e) {
  return ["html", "body", "#document"].includes($e(e));
}
function ve(e) {
  return fe(e).getComputedStyle(e);
}
function Jt(e) {
  return Se(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function tt(e) {
  if ($e(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    rn(e) && e.host || // Fallback.
    Te(e)
  );
  return rn(t) ? t.host : t;
}
function jn(e) {
  const t = tt(e);
  return Qt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : we(t) && _t(t) ? t : jn(t);
}
function yt(e, t, o) {
  var n;
  t === void 0 && (t = []), o === void 0 && (o = !0);
  const a = jn(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), l = fe(a);
  return r ? t.concat(l, l.visualViewport || [], _t(a) ? a : [], l.frameElement && o ? yt(l.frameElement) : []) : t.concat(a, yt(a, [], o));
}
function Wn(e) {
  const t = ve(e);
  let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = we(e), r = a ? e.offsetWidth : o, l = a ? e.offsetHeight : n, s = jt(o) !== r || jt(n) !== l;
  return s && (o = r, n = l), {
    width: o,
    height: n,
    $: s
  };
}
function Vo(e) {
  return Se(e) ? e : e.contextElement;
}
function Ze(e) {
  const t = Vo(e);
  if (!we(t))
    return Ve(1);
  const o = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: r
  } = Wn(t);
  let l = (r ? jt(o.width) : o.width) / n, s = (r ? jt(o.height) : o.height) / a;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const Yr = /* @__PURE__ */ Ve(0);
function Kn(e) {
  const t = fe(e);
  return !zo() || !t.visualViewport ? Yr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Qr(e, t, o) {
  return t === void 0 && (t = !1), !o || t && o !== fe(e) ? !1 : t;
}
function Ue(e, t, o, n) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  const a = e.getBoundingClientRect(), r = Vo(e);
  let l = Ve(1);
  t && (n ? Se(n) && (l = Ze(n)) : l = Ze(e));
  const s = Qr(r, o, n) ? Kn(r) : Ve(0);
  let u = (a.left + s.x) / l.x, d = (a.top + s.y) / l.y, p = a.width / l.x, c = a.height / l.y;
  if (r) {
    const f = fe(r), v = n && Se(n) ? fe(n) : n;
    let m = f, h = m.frameElement;
    for (; h && n && v !== m; ) {
      const _ = Ze(h), x = h.getBoundingClientRect(), A = ve(h), B = x.left + (h.clientLeft + parseFloat(A.paddingLeft)) * _.x, T = x.top + (h.clientTop + parseFloat(A.paddingTop)) * _.y;
      u *= _.x, d *= _.y, p *= _.x, c *= _.y, u += B, d += T, m = fe(h), h = m.frameElement;
    }
  }
  return Kt({
    width: p,
    height: c,
    x: u,
    y: d
  });
}
const Jr = [":popover-open", ":modal"];
function Hn(e) {
  return Jr.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Zr(e) {
  let {
    elements: t,
    rect: o,
    offsetParent: n,
    strategy: a
  } = e;
  const r = a === "fixed", l = Te(n), s = t ? Hn(t.floating) : !1;
  if (n === l || s && r)
    return o;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = Ve(1);
  const p = Ve(0), c = we(n);
  if ((c || !c && !r) && (($e(n) !== "body" || _t(l)) && (u = Jt(n)), we(n))) {
    const f = Ue(n);
    d = Ze(n), p.x = f.x + n.clientLeft, p.y = f.y + n.clientTop;
  }
  return {
    width: o.width * d.x,
    height: o.height * d.y,
    x: o.x * d.x - u.scrollLeft * d.x + p.x,
    y: o.y * d.y - u.scrollTop * d.y + p.y
  };
}
function el(e) {
  return Array.from(e.getClientRects());
}
function Un(e) {
  return Ue(Te(e)).left + Jt(e).scrollLeft;
}
function tl(e) {
  const t = Te(e), o = Jt(e), n = e.ownerDocument.body, a = ce(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ce(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let l = -o.scrollLeft + Un(e);
  const s = -o.scrollTop;
  return ve(n).direction === "rtl" && (l += ce(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: r,
    x: l,
    y: s
  };
}
function ol(e, t) {
  const o = fe(e), n = Te(e), a = o.visualViewport;
  let r = n.clientWidth, l = n.clientHeight, s = 0, u = 0;
  if (a) {
    r = a.width, l = a.height;
    const d = zo();
    (!d || d && t === "fixed") && (s = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: r,
    height: l,
    x: s,
    y: u
  };
}
function nl(e, t) {
  const o = Ue(e, !0, t === "fixed"), n = o.top + e.clientTop, a = o.left + e.clientLeft, r = we(e) ? Ze(e) : Ve(1), l = e.clientWidth * r.x, s = e.clientHeight * r.y, u = a * r.x, d = n * r.y;
  return {
    width: l,
    height: s,
    x: u,
    y: d
  };
}
function ln(e, t, o) {
  let n;
  if (t === "viewport")
    n = ol(e, o);
  else if (t === "document")
    n = tl(Te(e));
  else if (Se(t))
    n = nl(t, o);
  else {
    const a = Kn(e);
    n = {
      ...t,
      x: t.x - a.x,
      y: t.y - a.y
    };
  }
  return Kt(n);
}
function qn(e, t) {
  const o = tt(e);
  return o === t || !Se(o) || Qt(o) ? !1 : ve(o).position === "fixed" || qn(o, t);
}
function al(e, t) {
  const o = t.get(e);
  if (o)
    return o;
  let n = yt(e, [], !1).filter((s) => Se(s) && $e(s) !== "body"), a = null;
  const r = ve(e).position === "fixed";
  let l = r ? tt(e) : e;
  for (; Se(l) && !Qt(l); ) {
    const s = ve(l), u = Lo(l);
    !u && s.position === "fixed" && (a = null), (r ? !u && !a : !u && s.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || _t(l) && !u && qn(e, l)) ? n = n.filter((p) => p !== l) : a = s, l = tt(l);
  }
  return t.set(e, n), n;
}
function rl(e) {
  let {
    element: t,
    boundary: o,
    rootBoundary: n,
    strategy: a
  } = e;
  const l = [...o === "clippingAncestors" ? al(t, this._c) : [].concat(o), n], s = l[0], u = l.reduce((d, p) => {
    const c = ln(t, p, a);
    return d.top = ce(c.top, d.top), d.right = ze(c.right, d.right), d.bottom = ze(c.bottom, d.bottom), d.left = ce(c.left, d.left), d;
  }, ln(t, s, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function ll(e) {
  const {
    width: t,
    height: o
  } = Wn(e);
  return {
    width: t,
    height: o
  };
}
function il(e, t, o) {
  const n = we(t), a = Te(t), r = o === "fixed", l = Ue(e, !0, r, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ve(0);
  if (n || !n && !r)
    if (($e(t) !== "body" || _t(a)) && (s = Jt(t)), n) {
      const c = Ue(t, !0, r, t);
      u.x = c.x + t.clientLeft, u.y = c.y + t.clientTop;
    } else
      a && (u.x = Un(a));
  const d = l.left + s.scrollLeft - u.x, p = l.top + s.scrollTop - u.y;
  return {
    x: d,
    y: p,
    width: l.width,
    height: l.height
  };
}
function sn(e, t) {
  return !we(e) || ve(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Gn(e, t) {
  const o = fe(e);
  if (!we(e) || Hn(e))
    return o;
  let n = sn(e, t);
  for (; n && Gr(n) && ve(n).position === "static"; )
    n = sn(n, t);
  return n && ($e(n) === "html" || $e(n) === "body" && ve(n).position === "static" && !Lo(n)) ? o : n || Xr(e) || o;
}
const sl = async function(e) {
  const t = this.getOffsetParent || Gn, o = this.getDimensions;
  return {
    reference: il(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await o(e.floating)
    }
  };
};
function ul(e) {
  return ve(e).direction === "rtl";
}
const dl = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zr,
  getDocumentElement: Te,
  getClippingRect: rl,
  getOffsetParent: Gn,
  getElementRects: sl,
  getClientRects: el,
  getDimensions: ll,
  getScale: Ze,
  isElement: Se,
  isRTL: ul
};
function cl(e, t) {
  let o = null, n;
  const a = Te(e);
  function r() {
    var s;
    clearTimeout(n), (s = o) == null || s.disconnect(), o = null;
  }
  function l(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), r();
    const {
      left: d,
      top: p,
      width: c,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !c || !f)
      return;
    const v = Rt(p), m = Rt(a.clientWidth - (d + c)), h = Rt(a.clientHeight - (p + f)), _ = Rt(d), A = {
      rootMargin: -v + "px " + -m + "px " + -h + "px " + -_ + "px",
      threshold: ce(0, ze(1, u)) || 1
    };
    let B = !0;
    function T(D) {
      const I = D[0].intersectionRatio;
      if (I !== u) {
        if (!B)
          return l();
        I ? l(!1, I) : n = setTimeout(() => {
          l(!1, 1e-7);
        }, 100);
      }
      B = !1;
    }
    try {
      o = new IntersectionObserver(T, {
        ...A,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(T, A);
    }
    o.observe(e);
  }
  return l(!0), r;
}
function pl(e, t, o, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: r = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, d = Vo(e), p = a || r ? [...d ? yt(d) : [], ...yt(t)] : [];
  p.forEach((x) => {
    a && x.addEventListener("scroll", o, {
      passive: !0
    }), r && x.addEventListener("resize", o);
  });
  const c = d && s ? cl(d, o) : null;
  let f = -1, v = null;
  l && (v = new ResizeObserver((x) => {
    let [A] = x;
    A && A.target === d && v && (v.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var B;
      (B = v) == null || B.observe(t);
    })), o();
  }), d && !u && v.observe(d), v.observe(t));
  let m, h = u ? Ue(e) : null;
  u && _();
  function _() {
    const x = Ue(e);
    h && (x.x !== h.x || x.y !== h.y || x.width !== h.width || x.height !== h.height) && o(), h = x, m = requestAnimationFrame(_);
  }
  return o(), () => {
    var x;
    p.forEach((A) => {
      a && A.removeEventListener("scroll", o), r && A.removeEventListener("resize", o);
    }), c == null || c(), (x = v) == null || x.disconnect(), v = null, u && cancelAnimationFrame(m);
  };
}
const fl = Hr, un = Nr, vl = qr, ml = jr, gl = Vr, hl = Ur, yl = (e, t, o) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: dl,
    ...o
  }, r = {
    ...a.platform,
    _c: n
  };
  return zr(e, t, {
    ...a,
    platform: r
  });
};
function bl(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function xo(e) {
  if (bl(e)) {
    const t = e.$el;
    return Fo(t) && $e(t) === "#comment" ? null : t;
  }
  return e;
}
function wl(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const o = xo(i(e.element));
      return o == null ? {} : gl({
        element: o,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Xn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function dn(e, t) {
  const o = Xn(e);
  return Math.round(t * o) / o;
}
function xl(e, t, o) {
  o === void 0 && (o = {});
  const n = o.whileElementsMounted, a = S(() => {
    var k;
    return (k = i(o.open)) != null ? k : !0;
  }), r = S(() => i(o.middleware)), l = S(() => {
    var k;
    return (k = i(o.placement)) != null ? k : "bottom";
  }), s = S(() => {
    var k;
    return (k = i(o.strategy)) != null ? k : "absolute";
  }), u = S(() => {
    var k;
    return (k = i(o.transform)) != null ? k : !0;
  }), d = S(() => xo(e.value)), p = S(() => xo(t.value)), c = E(0), f = E(0), v = E(s.value), m = E(l.value), h = Ut({}), _ = E(!1), x = S(() => {
    const k = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!p.value)
      return k;
    const V = dn(p.value, c.value), j = dn(p.value, f.value);
    return u.value ? {
      ...k,
      transform: "translate(" + V + "px, " + j + "px)",
      ...Xn(p.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: V + "px",
      top: j + "px"
    };
  });
  let A;
  function B() {
    d.value == null || p.value == null || yl(d.value, p.value, {
      middleware: r.value,
      placement: l.value,
      strategy: s.value
    }).then((k) => {
      c.value = k.x, f.value = k.y, v.value = k.strategy, m.value = k.placement, h.value = k.middlewareData, _.value = !0;
    });
  }
  function T() {
    typeof A == "function" && (A(), A = void 0);
  }
  function D() {
    if (T(), n === void 0) {
      B();
      return;
    }
    if (d.value != null && p.value != null) {
      A = n(d.value, p.value, B);
      return;
    }
  }
  function I() {
    a.value || (_.value = !1);
  }
  return U([r, l, s], B, {
    flush: "sync"
  }), U([d, p], D, {
    flush: "sync"
  }), U(a, I, {
    flush: "sync"
  }), hn() && yn(T), {
    x: Ye(c),
    y: Ye(f),
    strategy: Ye(v),
    placement: Ye(m),
    middlewareData: Ye(h),
    isPositioned: Ye(_),
    floatingStyles: x,
    update: B
  };
}
function Y(e, t) {
  const o = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(o);
  return [(a) => {
    const r = On(n, a);
    if (r || r === null)
      return r;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (a) => (Bn(n, a), a)];
}
function No(e, t, o) {
  const n = o.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: o
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function _l(e, t) {
  var o;
  const n = Ut();
  return ee(() => {
    n.value = e();
  }, {
    ...t,
    flush: (o = t == null ? void 0 : t.flush) != null ? o : "sync"
  }), Gt(n);
}
function Ct(e) {
  return hn() ? (yn(e), !0) : !1;
}
function Cl(e) {
  let t = !1, o;
  const n = xn(!0);
  return (...a) => (t || (o = n.run(() => e(...a)), t = !0), o);
}
function Al(e) {
  let t = 0, o, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), o = void 0, n = void 0);
  };
  return (...r) => (t += 1, o || (n = xn(!0), o = n.run(() => e(...r))), Ct(a), o);
}
function Pe(e) {
  return typeof e == "function" ? e() : i(e);
}
const Ie = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ol = (e) => typeof e < "u", Bl = (e) => e != null, El = Object.prototype.toString, Pl = (e) => El.call(e) === "[object Object]", cn = (e, t, o) => Math.min(o, Math.max(t, e)), Yn = () => {
}, pn = /* @__PURE__ */ kl();
function kl() {
  var e, t;
  return Ie && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Dl(e) {
  return e || Ne();
}
function $l(...e) {
  if (e.length !== 1)
    return En(...e);
  const t = e[0];
  return typeof t == "function" ? Gt(_n(() => ({ get: t, set: Yn }))) : E(t);
}
function Qn(e, t = 1e4) {
  return _n((o, n) => {
    let a = Pe(e), r;
    const l = () => setTimeout(() => {
      a = Pe(e), n();
    }, Pe(t));
    return Ct(() => {
      clearTimeout(r);
    }), {
      get() {
        return o(), a;
      },
      set(s) {
        a = s, n(), clearTimeout(r), r = l();
      }
    };
  });
}
function Sl(e, t) {
  Dl(t) && An(e, t);
}
function Jn(e, t, o = {}) {
  const {
    immediate: n = !0
  } = o, a = E(!1);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function s() {
    a.value = !1, l();
  }
  function u(...d) {
    l(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...d);
    }, Pe(t));
  }
  return n && (a.value = !0, Ie && u()), Ct(s), {
    isPending: Gt(a),
    start: u,
    stop: s
  };
}
function _e(e) {
  var t;
  const o = Pe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const jo = Ie ? window : void 0;
function Ht(...e) {
  let t, o, n, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, a] = e, t = jo) : [t, o, n, a] = e, !t)
    return Yn;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const r = [], l = () => {
    r.forEach((p) => p()), r.length = 0;
  }, s = (p, c, f, v) => (p.addEventListener(c, f, v), () => p.removeEventListener(c, f, v)), u = U(
    () => [_e(t), Pe(a)],
    ([p, c]) => {
      if (l(), !p)
        return;
      const f = Pl(c) ? { ...c } : c;
      r.push(
        ...o.flatMap((v) => n.map((m) => s(p, v, m, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Ct(d), d;
}
function Tl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Il(...e) {
  let t, o, n = {};
  e.length === 3 ? (t = e[0], o = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, o = e[0], n = e[1]) : (t = e[0], o = e[1]) : (t = !0, o = e[0]);
  const {
    target: a = jo,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: s = !1
  } = n, u = Tl(t);
  return Ht(a, r, (d) => {
    d.repeat && Pe(s) || u(d) && o(d);
  }, l);
}
function Zn() {
  const e = E(!1), t = Ne();
  return t && ne(() => {
    e.value = !0;
  }, t), e;
}
function Rl(e) {
  const t = Zn();
  return S(() => (t.value, !!e()));
}
function Ml(e) {
  return JSON.parse(JSON.stringify(e));
}
function Fl(e, t, o = {}) {
  const { window: n = jo, ...a } = o;
  let r;
  const l = Rl(() => n && "MutationObserver" in n), s = () => {
    r && (r.disconnect(), r = void 0);
  }, u = S(() => {
    const f = Pe(e), v = (Array.isArray(f) ? f : [f]).map(_e).filter(Bl);
    return new Set(v);
  }), d = U(
    () => u.value,
    (f) => {
      s(), l.value && n && f.size && (r = new MutationObserver(t), f.forEach((v) => r.observe(v, a)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => r == null ? void 0 : r.takeRecords(), c = () => {
    s(), d();
  };
  return Ct(c), {
    isSupported: l,
    stop: c,
    takeRecords: p
  };
}
function Ll(e, t) {
  const o = Ut(t);
  return U(
    $l(e),
    (n, a) => {
      o.value = a;
    },
    { flush: "sync" }
  ), Gt(o);
}
function le(e, t, o, n = {}) {
  var a, r, l;
  const {
    clone: s = !1,
    passive: u = !1,
    eventName: d,
    deep: p = !1,
    defaultValue: c,
    shouldEmit: f
  } = n, v = Ne(), m = o || (v == null ? void 0 : v.emit) || ((a = v == null ? void 0 : v.$emit) == null ? void 0 : a.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let h = d;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const _ = (B) => s ? typeof s == "function" ? s(B) : Ml(B) : B, x = () => Ol(e[t]) ? _(e[t]) : c, A = (B) => {
    f ? f(B) && m(h, B) : m(h, B);
  };
  if (u) {
    const B = x(), T = E(B);
    let D = !1;
    return U(
      () => e[t],
      (I) => {
        D || (D = !0, T.value = _(I), q(() => D = !1));
      }
    ), U(
      T,
      (I) => {
        !D && (I !== e[t] || p) && A(I);
      },
      { deep: p }
    ), T;
  } else
    return S({
      get() {
        return x();
      },
      set(B) {
        A(B);
      }
    });
}
function Zt(e) {
  return e ? e.flatMap((t) => t.type === xe ? Zt(t.children) : [t]) : [];
}
const zl = ["INPUT", "TEXTAREA"];
function Vl(e, t, o, n = {}) {
  if (!t || n.enableIgnoredElement && zl.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: s = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: p = !1
  } = n, [c, f, v, m, h, _] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], x = v || m, A = c || f;
  if (!h && !_ && (!x && !A || a === "vertical" && A || a === "horizontal" && x))
    return null;
  const B = o ? Array.from(o.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && e.preventDefault();
  let T = null;
  return A || x ? T = ea(B, t, {
    goForward: x ? m : u === "ltr" ? c : f,
    loop: s
  }) : h ? T = B.at(0) || null : _ && (T = B.at(-1) || null), p && (T == null || T.focus()), T;
}
function ea(e, t, { goForward: o, loop: n }, a = e.length) {
  if (--a === 0)
    return null;
  const r = e.indexOf(t), l = o ? r + 1 : r - 1;
  if (!n && (l < 0 || l >= e.length))
    return null;
  const s = (l + e.length) % e.length, u = e[s];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? ea(
    e,
    u,
    { goForward: o, loop: n },
    a
  ) : u : null;
}
function uo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function _o(e, t, o = ".", n) {
  if (!uo(t))
    return _o(e, {}, o, n);
  const a = Object.assign({}, t);
  for (const r in e) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = e[r];
    l != null && (n && n(a, r, l, o) || (Array.isArray(l) && Array.isArray(a[r]) ? a[r] = [...l, ...a[r]] : uo(l) && uo(a[r]) ? a[r] = _o(
      l,
      a[r],
      (o ? `${o}.` : "") + r.toString(),
      n
    ) : a[r] = l));
  }
  return a;
}
function Nl(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((o, n) => _o(o, n, "", e), {})
  );
}
const jl = Nl(), [Wo, qd] = Y("ConfigProvider");
let Wl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Kl = (e = 21) => {
  let t = "", o = e;
  for (; o--; )
    t += Wl[Math.random() * 64 | 0];
  return t;
};
const Hl = Al(() => {
  const e = E(/* @__PURE__ */ new Map()), t = E(), o = S(() => {
    for (const l of e.value.values())
      if (l)
        return !0;
    return !1;
  }), n = Wo({
    scrollBody: E(!0)
  });
  let a = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", pn && (a == null || a()), t.value = void 0;
  };
  return U(o, (l, s) => {
    var u;
    if (!Ie)
      return;
    if (!l) {
      s && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const d = window.innerWidth - document.documentElement.clientWidth, p = { padding: d, margin: 0 }, c = (u = n.scrollBody) != null && u.value ? typeof n.scrollBody.value == "object" ? jl({
      padding: n.scrollBody.value.padding === !0 ? d : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? d : n.scrollBody.value.margin
    }, p) : p : { padding: 0, margin: 0 };
    d > 0 && (document.body.style.paddingRight = `${c.padding}px`, document.body.style.marginRight = `${c.margin}px`, document.body.style.setProperty("--scrollbar-width", `${d}px`), document.body.style.overflow = "hidden"), pn && (a = Ht(
      document,
      "touchmove",
      (f) => {
        var v;
        f.target === document.documentElement && (f.touches.length > 1 || (v = f.preventDefault) == null || v.call(f));
      },
      { passive: !1 }
    )), q(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function At(e) {
  const t = Kl(6), o = Hl();
  o.value.set(t, e ?? !1);
  const n = S({
    get: () => o.value.get(t) ?? !1,
    set: (a) => o.value.set(t, a)
  });
  return Sl(() => {
    o.value.delete(t);
  }), n;
}
const Ul = "data-radix-vue-collection-item";
function lt(e, t = Ul) {
  const o = e ?? Symbol();
  return { createCollection: (n) => {
    const a = E([]);
    function r() {
      const l = _e(n);
      return l ? a.value = Array.from(
        l.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : a.value = [];
    }
    return Sa(() => {
      a.value = [];
    }), ne(r), Ta(r), U(() => n == null ? void 0 : n.value, r, { immediate: !0 }), Bn(o, a), a;
  }, injectCollection: () => On(o, E([])) };
}
function Ot(e) {
  const t = Wo({
    dir: E("ltr")
  });
  return S(() => {
    var o;
    return (e == null ? void 0 : e.value) || ((o = t.dir) == null ? void 0 : o.value) || "ltr";
  });
}
function Bt(e) {
  const t = Ne(), o = t == null ? void 0 : t.type.emits, n = {};
  return o != null && o.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), o == null || o.forEach((a) => {
    n[Da(Cn(a))] = (...r) => e(a, ...r);
  }), n;
}
let co = 0;
function Ko() {
  ee((e) => {
    if (!Ie)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? fn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? fn()
    ), co++, e(() => {
      co === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), co--;
    });
  });
}
function fn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
function ta(e) {
  return S(() => {
    var t;
    return Pe(e) ? !!((t = _e(e)) != null && t.closest("form")) : !0;
  });
}
function it(e) {
  const t = Ne(), o = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (a[r] = l), a;
  }, {}), n = En(e);
  return S(() => {
    const a = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      a[Cn(l)] = r[l];
    }), Object.keys({ ...o, ...a }).reduce((l, s) => (n.value[s] !== void 0 && (l[s] = n.value[s]), l), {});
  });
}
function me(e, t) {
  const o = it(e), n = t ? Bt(t) : {};
  return S(() => ({
    ...o.value,
    ...n
  }));
}
function M() {
  const e = Ne(), t = E(), o = S(() => {
    var l, s;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (s = t.value) == null ? void 0 : s.$el.nextElementSibling : _e(t);
  }), n = Object.assign({}, e.exposed), a = {};
  for (const l in e.props)
    Object.defineProperty(a, l, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[l]
    });
  if (Object.keys(n).length > 0)
    for (const l in n)
      Object.defineProperty(a, l, {
        enumerable: !0,
        configurable: !0,
        get: () => n[l]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function r(l) {
    t.value = l, !(l instanceof Element || !l) && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => l.$el
    }), e.exposed = a);
  }
  return { forwardRef: r, currentRef: t, currentElement: o };
}
var ql = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Qe = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Ft = {}, po = 0, oa = function(e) {
  return e && (e.host || oa(e.parentNode));
}, Gl = function(e, t) {
  return t.map(function(o) {
    if (e.contains(o))
      return o;
    var n = oa(o);
    return n && e.contains(n) ? n : (console.error("aria-hidden", o, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(o) {
    return !!o;
  });
}, Xl = function(e, t, o, n) {
  var a = Gl(t, Array.isArray(e) ? e : [e]);
  Ft[o] || (Ft[o] = /* @__PURE__ */ new WeakMap());
  var r = Ft[o], l = [], s = /* @__PURE__ */ new Set(), u = new Set(a), d = function(c) {
    !c || s.has(c) || (s.add(c), d(c.parentNode));
  };
  a.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (s.has(f))
        p(f);
      else {
        var v = f.getAttribute(n), m = v !== null && v !== "false", h = (Qe.get(f) || 0) + 1, _ = (r.get(f) || 0) + 1;
        Qe.set(f, h), r.set(f, _), l.push(f), h === 1 && m && Mt.set(f, !0), _ === 1 && f.setAttribute(o, "true"), m || f.setAttribute(n, "true");
      }
    });
  };
  return p(t), s.clear(), po++, function() {
    l.forEach(function(c) {
      var f = Qe.get(c) - 1, v = r.get(c) - 1;
      Qe.set(c, f), r.set(c, v), f || (Mt.has(c) || c.removeAttribute(n), Mt.delete(c)), v || c.removeAttribute(o);
    }), po--, po || (Qe = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Ft = {});
  };
}, Yl = function(e, t, o) {
  o === void 0 && (o = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = t || ql(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), Xl(n, a, o, "aria-hidden")) : function() {
    return null;
  };
};
function Et(e) {
  let t;
  U(() => _e(e), (o) => {
    o ? t = Yl(o) : t && t();
  }), Xt(() => {
    t && t();
  });
}
let Ql = 0;
function ue(e, t = "radix") {
  if (e)
    return e;
  const { useId: o } = Wo({ useId: void 0 });
  return o && typeof o == "function" ? `${t}-${o()}` : `${t}-${++Ql}`;
}
function Jl(e) {
  const t = E(), o = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = S(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ne(() => {
    const a = _e(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const s = l[0];
        let u, d;
        if ("borderBoxSize" in s) {
          const p = s.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
        } else
          u = a.offsetWidth, d = a.offsetHeight;
        t.value = { width: u, height: d };
      });
      return r.observe(a, { box: "border-box" }), () => r.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: o,
    height: n
  };
}
function Zl(e, t) {
  const o = E(e);
  function n(a) {
    return t[o.value][a] ?? o.value;
  }
  return {
    state: o,
    dispatch: (a) => {
      o.value = n(a);
    }
  };
}
function Ho(e) {
  const t = Qn("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o) => {
      var n, a;
      t.value = t.value + o;
      const r = e.value, l = document.activeElement, s = ((a = (n = r.find((c) => c === l)) == null ? void 0 : n.textContent) == null ? void 0 : a.trim()) ?? "", u = r.map((c) => {
        var f;
        return ((f = c.textContent) == null ? void 0 : f.trim()) ?? "";
      }), d = ti(u, t.value, s), p = r.find(
        (c) => {
          var f;
          return ((f = c.textContent) == null ? void 0 : f.trim()) === d;
        }
      );
      p && p.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function ei(e, t) {
  return e.map((o, n) => e[(t + n) % e.length]);
}
function ti(e, t, o) {
  const n = t.length > 1 && Array.from(t).every((s) => s === t[0]) ? t[0] : t, a = o ? e.indexOf(o) : -1;
  let r = ei(e, Math.max(a, 0));
  n.length === 1 && (r = r.filter((s) => s !== o));
  const l = r.find(
    (s) => s.toLowerCase().startsWith(n.toLowerCase())
  );
  return l !== o ? l : void 0;
}
const Uo = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      var n, a;
      if (!o.default)
        return null;
      const r = Zt(o.default()), [l, ...s] = r;
      if (l) {
        (n = l.props) == null || delete n.ref;
        const u = F(t, l.props ?? {});
        t.class && (a = l.props) != null && a.class && delete l.props.class;
        const d = Pa(l, u);
        for (const p in u)
          p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
        return r.length === 1 ? d : [d, ...s];
      }
      return r;
    };
  }
}), z = w({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: o }) {
    return (e.asChild ? "template" : e.as) !== "template" ? () => et(e.as, t, { default: o.default }) : () => et(Uo, t, { default: o.default });
  }
});
function na() {
  const e = E(), t = S(() => {
    var o, n;
    return ["#text", "#comment"].includes((o = e.value) == null ? void 0 : o.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : _e(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function oi(e, t) {
  const o = E({}), n = E("none"), a = e.value ? "mounted" : "unmounted", { state: r, dispatch: l } = Zl(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  U(
    e,
    async (c, f) => {
      var v;
      const m = f !== c;
      if (await q(), m) {
        const h = n.value, _ = Lt(t.value);
        c ? l("MOUNT") : _ === "none" || ((v = o.value) == null ? void 0 : v.display) === "none" ? l("UNMOUNT") : l(f && h !== _ ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: !0 }
  );
  const s = (c) => {
    const f = Lt(t.value), v = f.includes(
      c.animationName
    );
    c.target === t.value && v && l("ANIMATION_END"), c.target === t.value && f === "none" && l("ANIMATION_END");
  }, u = (c) => {
    c.target === t.value && (n.value = Lt(t.value));
  }, d = U(
    t,
    (c, f) => {
      c ? (o.value = getComputedStyle(c), c.addEventListener("animationstart", u), c.addEventListener("animationcancel", s), c.addEventListener("animationend", s)) : (l("ANIMATION_END"), f == null || f.removeEventListener("animationstart", u), f == null || f.removeEventListener("animationcancel", s), f == null || f.removeEventListener("animationend", s));
    },
    { immediate: !0 }
  ), p = U(r, () => {
    const c = Lt(t.value);
    n.value = r.value === "mounted" ? c : "none";
  });
  return Xt(() => {
    d(), p();
  }), {
    isPresent: S(
      () => ["mounted", "unmountSuspended"].includes(r.value)
    )
  };
}
function Lt(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const qe = w({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(e, { slots: t, expose: o }) {
    var n;
    const { present: a, forceMount: r } = de(e), l = E(), { isPresent: s } = oi(a, l);
    o({ present: s });
    let u = t.default({ present: s });
    u = Zt(u || []);
    const d = Ne();
    if (u && (u == null ? void 0 : u.length) > 1) {
      const p = (n = d == null ? void 0 : d.parent) != null && n.type.name ? `<${d.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => r.value || a.value || s.value ? et(t.default({ present: s })[0], {
      ref: (p) => {
        const c = _e(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? l.value = c.firstElementChild : l.value = c), c;
      }
    }) : null;
  }
}), [Ce, ni] = Y("DialogRoot"), ai = /* @__PURE__ */ w({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), a = E(), r = E(), { modal: l } = de(o);
    return ni({
      open: n,
      modal: l,
      openModal: () => {
        n.value = !0;
      },
      onOpenChange: (s) => {
        n.value = s;
      },
      onOpenToggle: () => {
        n.value = !n.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: a,
      contentElement: r
    }), (s, u) => C(s.$slots, "default");
  }
}), Pt = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = Zn();
    return (o, n) => i(t) || o.forceMount ? (y(), b(wn, {
      key: 0,
      to: o.to,
      disabled: o.disabled
    }, [
      C(o.$slots, "default")
    ], 8, ["to", "disabled"])) : H("", !0);
  }
}), ri = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Pt), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), li = "dismissableLayer.pointerDownOutside", ii = "dismissableLayer.focusOutside";
function aa(e, t) {
  const o = t.closest(
    "[data-dismissable-layer]"
  ), n = e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(o && n === o || a.indexOf(n) < a.indexOf(o));
}
function si(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1), r = E(() => {
  });
  return ee((l) => {
    if (!Ie)
      return;
    const s = async (d) => {
      const p = d.target;
      if (t != null && t.value) {
        if (aa(t.value, p)) {
          a.value = !1;
          return;
        }
        if (d.target && !a.value) {
          let c = function() {
            No(
              li,
              e,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (n.removeEventListener("click", r.value), r.value = c, n.addEventListener("click", r.value, {
            once: !0
          })) : c();
        } else
          n.removeEventListener("click", r.value);
        a.value = !1;
      }
    }, u = window.setTimeout(() => {
      n.addEventListener("pointerdown", s);
    }, 0);
    l(() => {
      window.clearTimeout(u), n.removeEventListener("pointerdown", s), n.removeEventListener("click", r.value);
    });
  }), {
    onPointerDownCapture: () => a.value = !0
  };
}
function ui(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = E(!1);
  return ee((r) => {
    if (!Ie)
      return;
    const l = async (s) => {
      t != null && t.value && (await q(), !(!t.value || aa(t.value, s.target)) && s.target && !a.value && No(
        ii,
        e,
        { originalEvent: s }
      ));
    };
    n.addEventListener("focusin", l), r(() => n.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = !0,
    onBlurCapture: () => a.value = !1
  };
}
const Be = Bo({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), st = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: r } = M(), l = S(
      () => {
        var m;
        return ((m = r.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), s = S(() => Be.layersRoot), u = S(() => r.value ? Array.from(s.value).indexOf(r.value) : -1), d = S(() => Be.layersWithOutsidePointerEventsDisabled.size > 0), p = S(() => {
      const m = Array.from(s.value), [h] = [...Be.layersWithOutsidePointerEventsDisabled].slice(-1), _ = m.indexOf(h);
      return u.value >= _;
    }), c = si(async (m) => {
      const h = [...Be.branches].some(
        (_) => _.contains(m.target)
      );
      !p.value || h || (n("pointerDownOutside", m), n("interactOutside", m), await q(), m.defaultPrevented || n("dismiss"));
    }, r), f = ui((m) => {
      [...Be.branches].some(
        (h) => h.contains(m.target)
      ) || (n("focusOutside", m), n("interactOutside", m), m.defaultPrevented || n("dismiss"));
    }, r);
    Il("Escape", (m) => {
      u.value === s.value.size - 1 && (n("escapeKeyDown", m), m.defaultPrevented || n("dismiss"));
    });
    let v;
    return ee((m) => {
      r.value && (o.disableOutsidePointerEvents && (Be.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), Be.layersWithOutsidePointerEventsDisabled.add(r.value)), s.value.add(r.value), m(() => {
        o.disableOutsidePointerEvents && Be.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), ee((m) => {
      m(() => {
        r.value && (s.value.delete(r.value), Be.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (m, h) => (y(), b(i(z), {
      ref: i(a),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: wt({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: i(f).onFocusCapture,
      onBlurCapture: i(f).onBlurCapture,
      onPointerdownCapture: i(c).onPointerDownCapture
    }, {
      default: g(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), fo = "focusScope.autoFocusOnMount", vo = "focusScope.autoFocusOnUnmount", vn = { bubbles: !1, cancelable: !0 };
function di(e, { select: t = !1 } = {}) {
  const o = document.activeElement;
  for (const n of e)
    if (Le(n, { select: t }), document.activeElement !== o)
      return !0;
}
function ci(e) {
  const t = ra(e), o = mn(t, e), n = mn(t.reverse(), e);
  return [o, n];
}
function ra(e) {
  const t = [], o = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; o.nextNode(); )
    t.push(o.currentNode);
  return t;
}
function mn(e, t) {
  for (const o of e)
    if (!pi(o, { upTo: t }))
      return o;
}
function pi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function fi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Le(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const o = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== o && fi(e) && t && e.select();
  }
}
const vi = Cl(() => E([]));
function mi() {
  const e = vi();
  return {
    add(t) {
      const o = e.value[0];
      t !== o && (o == null || o.pause()), e.value = gn(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var o;
      e.value = gn(e.value, t), (o = e.value[0]) == null || o.resume();
    }
  };
}
function gn(e, t) {
  const o = [...e], n = o.indexOf(t);
  return n !== -1 && o.splice(n, 1), o;
}
function gi(e) {
  return e.filter((t) => t.tagName !== "A");
}
const eo = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, { currentRef: a, currentElement: r } = M(), l = E(null), s = mi(), u = Bo({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ee((p) => {
      if (!Ie)
        return;
      const c = r.value;
      if (!o.trapped)
        return;
      function f(_) {
        if (u.paused || !c)
          return;
        const x = _.target;
        c.contains(x) ? l.value = x : Le(l.value, { select: !0 });
      }
      function v(_) {
        if (u.paused || !c)
          return;
        const x = _.relatedTarget;
        x !== null && (c.contains(x) || Le(l.value, { select: !0 }));
      }
      function m(_) {
        c.contains(l.value) || Le(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const h = new MutationObserver(m);
      c && h.observe(c, { childList: !0, subtree: !0 }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), h.disconnect();
      });
    }), ee(async (p) => {
      const c = r.value;
      if (await q(), !c)
        return;
      s.add(u);
      const f = document.activeElement;
      if (!c.contains(f)) {
        const v = new CustomEvent(fo, vn);
        c.addEventListener(
          fo,
          (m) => n("mountAutoFocus", m)
        ), c.dispatchEvent(v), v.defaultPrevented || (di(gi(ra(c)), {
          select: !0
        }), document.activeElement === f && Le(c));
      }
      p(() => {
        c.removeEventListener(
          fo,
          (h) => n("mountAutoFocus", h)
        );
        const v = new CustomEvent(vo, vn), m = (h) => {
          n("unmountAutoFocus", h);
        };
        c.addEventListener(vo, m), c.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Le(f ?? document.body, { select: !0 }), c.removeEventListener(vo, m), s.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!o.loop && !o.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (c && f) {
        const v = p.currentTarget, [m, h] = ci(v);
        m && h ? !p.shiftKey && f === h ? (p.preventDefault(), o.loop && Le(m, { select: !0 })) : p.shiftKey && f === m && (p.preventDefault(), o.loop && Le(h, { select: !0 })) : f === v && p.preventDefault();
      }
    }
    return (p, c) => (y(), b(i(z), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: g(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), hi = "menu.itemSelect", Co = ["Enter", " "], yi = ["ArrowDown", "PageUp", "Home"], la = ["ArrowUp", "PageDown", "End"], bi = [...yi, ...la], wi = {
  ltr: [...Co, "ArrowRight"],
  rtl: [...Co, "ArrowLeft"]
}, xi = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function qo(e) {
  return e ? "open" : "closed";
}
function Ao(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t))
      return;
}
function _i(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const s = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > n != p > n && o < (d - s) * (n - u) / (p - u) + s && (a = !a);
  }
  return a;
}
function Ci(e, t) {
  if (!t)
    return !1;
  const o = { x: e.clientX, y: e.clientY };
  return _i(o, t);
}
function bt(e) {
  return e.pointerType === "mouse";
}
function Ai() {
  const e = "DialogContent", t = "DialogTitle", o = Ce(), n = `Warning: \`${e}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/dialog.html#title;`, a = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${e}.`;
  ne(() => {
    var r;
    document.getElementById(o.titleId) || console.warn(n);
    const l = (r = o.contentElement.value) == null ? void 0 : r.getAttribute("aria-describedby");
    o.descriptionId && l && (document.getElementById(o.descriptionId) || console.warn(a));
  });
}
const ia = /* @__PURE__ */ w({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Ce(), { forwardRef: r, currentElement: l } = M();
    return a.titleId || (a.titleId = ue(void 0, "radix-vue-dialog-title")), a.descriptionId || (a.descriptionId = ue(void 0, "radix-vue-dialog-description")), ne(() => {
      a.contentElement = l;
    }), process.env.NODE_ENV !== "production" && Ai(), (s, u) => (y(), b(i(eo), {
      "as-child": "",
      loop: "",
      trapped: o.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: g(() => [
        P(i(st), F({
          id: i(a).contentId,
          ref: i(r),
          as: s.as,
          "as-child": s.asChild,
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": i(a).descriptionId,
          "aria-labelledby": i(a).titleId,
          "data-state": i(qo)(i(a).open.value)
        }, s.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => i(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
        }), {
          default: g(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Oi = /* @__PURE__ */ w({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Ce(), r = Bt(n), { forwardRef: l, currentElement: s } = M();
    return Et(s), (u, d) => (y(), b(ia, F({ ...o, ...i(r) }, {
      ref: i(l),
      "trap-focus": i(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (p.preventDefault(), (c = i(a).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0;
        (c.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (p) => {
        p.preventDefault();
      }),
      onOpenAutoFocus: d[3] || (d[3] = (p) => n("openAutoFocus", p))
    }), {
      default: g(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Bi = /* @__PURE__ */ w({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Bt(n);
    M();
    const r = Ce(), l = E(!1), s = E(!1);
    return (u, d) => (y(), b(ia, F({ ...o, ...i(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (l.value || (c = i(r).triggerElement.value) == null || c.focus(), p.preventDefault()), l.value = !1, s.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (p) => {
        var c;
        p.defaultPrevented || (l.value = !0, p.detail.originalEvent.type === "pointerdown" && (s.value = !0));
        const f = p.target;
        (c = i(r).triggerElement.value) != null && c.contains(f) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && s.value && p.preventDefault();
      })
    }), {
      default: g(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ei = /* @__PURE__ */ w({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Ce(), r = Bt(n), { forwardRef: l } = M();
    return (s, u) => (y(), b(i(qe), {
      present: s.forceMount || i(a).open.value
    }, {
      default: g(() => [
        i(a).modal.value ? (y(), b(Oi, F({
          key: 0,
          ref: i(l)
        }, { ...o, ...i(r), ...s.$attrs }, {
          onOpenAutoFocus: u[0] || (u[0] = (d) => n("openAutoFocus", d))
        }), {
          default: g(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), b(Bi, F({
          key: 1,
          ref: i(l)
        }, { ...o, ...i(r), ...s.$attrs }), {
          default: g(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Pi = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ce();
    return At(!0), M(), (o, n) => (y(), b(i(z), {
      as: o.as,
      "as-child": o.asChild,
      "data-state": i(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), ki = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Ce(), { forwardRef: o } = M();
    return (n, a) => {
      var r;
      return (r = i(t)) != null && r.modal.value ? (y(), b(i(qe), {
        key: 0,
        present: n.forceMount || i(t).open.value
      }, {
        default: g(() => [
          P(Pi, F(n.$attrs, {
            ref: i(o),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: g(() => [
              C(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : H("", !0);
    };
  }
}), Di = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const o = Ce();
    return (n, a) => (y(), b(i(z), F(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (r) => i(o).onOpenChange(!1))
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), $i = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, o = Ce();
    return M(), (n, a) => (y(), b(i(z), F(t, {
      id: i(o).titleId
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Si = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    M();
    const o = Ce();
    return (n, a) => (y(), b(i(z), F(t, {
      id: i(o).descriptionId
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [sa, Ti] = Y("PopperRoot"), ut = /* @__PURE__ */ w({
  __name: "PopperRoot",
  setup(e) {
    const t = E();
    return Ti({
      anchor: t,
      onAnchorChange: (o) => t.value = o
    }), (o, n) => C(o.$slots, "default");
  }
}), kt = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o, currentElement: n } = M(), a = sa();
    return U(n, () => {
      a.onAnchorChange(t.element ?? n.value);
    }), (r, l) => (y(), b(i(z), {
      ref: i(o),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: g(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Ii(e) {
  return e !== null;
}
function Ri(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var o, n, a;
      const { placement: r, rects: l, middlewareData: s } = t, u = ((o = s.arrow) == null ? void 0 : o.centerOffset) !== 0, d = u ? 0 : e.arrowWidth, p = u ? 0 : e.arrowHeight, [c, f] = Oo(r), v = { start: "0%", center: "50%", end: "100%" }[f], m = (((n = s.arrow) == null ? void 0 : n.x) ?? 0) + d / 2, h = (((a = s.arrow) == null ? void 0 : a.y) ?? 0) + p / 2;
      let _ = "", x = "";
      return c === "bottom" ? (_ = u ? v : `${m}px`, x = `${-p}px`) : c === "top" ? (_ = u ? v : `${m}px`, x = `${l.floating.height + p}px`) : c === "right" ? (_ = `${-p}px`, x = u ? v : `${h}px`) : c === "left" && (_ = `${l.floating.width + p}px`, x = u ? v : `${h}px`), { data: { x: _, y: x } };
    }
  };
}
function Oo(e) {
  const [t, o = "center"] = e.split("-");
  return [t, o];
}
const ua = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Mi, Fi] = Y("PopperContent"), ot = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Pn({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...ua
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = sa(), { forwardRef: r, currentElement: l } = M(), s = E(), u = E(), { width: d, height: p } = Jl(u), c = S(
      () => o.side + (o.align !== "center" ? `-${o.align}` : "")
    ), f = S(() => typeof o.collisionPadding == "number" ? o.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...o.collisionPadding }), v = S(() => Array.isArray(o.collisionBoundary) ? o.collisionBoundary : [o.collisionBoundary]), m = S(() => ({
      padding: f.value,
      boundary: v.value.filter(Ii),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), h = _l(() => [
      Kr({
        mainAxis: o.sideOffset + p.value,
        alignmentAxis: o.alignOffset
      }),
      o.prioritizePosition && o.avoidCollisions && un({
        ...m.value
      }),
      o.avoidCollisions && fl({
        mainAxis: !0,
        crossAxis: !!o.prioritizePosition,
        limiter: o.sticky === "partial" ? hl() : void 0,
        ...m.value
      }),
      !o.prioritizePosition && o.avoidCollisions && un({
        ...m.value
      }),
      vl({
        ...m.value,
        apply: ({ elements: O, rects: L, availableWidth: $, availableHeight: X }) => {
          const { width: R, height: W } = L.reference, K = O.floating.style;
          Object.assign(O.floating.style, {
            maxWidth: `${$}px`,
            maxHeight: `${X}px`
          }), K.setProperty(
            "--radix-popper-available-width",
            `${$}px`
          ), K.setProperty(
            "--radix-popper-available-height",
            `${X}px`
          ), K.setProperty(
            "--radix-popper-anchor-width",
            `${R}px`
          ), K.setProperty(
            "--radix-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      u.value && wl({ element: u.value, padding: o.arrowPadding }),
      Ri({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      o.hideWhenDetached && ml({ strategy: "referenceHidden", ...m.value })
    ]), { floatingStyles: _, placement: x, isPositioned: A, middlewareData: B } = xl(
      a.anchor,
      s,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...O) => pl(...O, {
          animationFrame: o.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), T = S(
      () => Oo(x.value)[0]
    ), D = S(
      () => Oo(x.value)[1]
    );
    ee(() => {
      A.value && n("placed");
    });
    const I = S(
      () => {
        var O;
        return ((O = B.value.arrow) == null ? void 0 : O.centerOffset) !== 0;
      }
    ), k = E("");
    ee(() => {
      l.value && (k.value = window.getComputedStyle(l.value).zIndex);
    });
    const V = S(() => {
      var O;
      return ((O = B.value.arrow) == null ? void 0 : O.x) ?? 0;
    }), j = S(() => {
      var O;
      return ((O = B.value.arrow) == null ? void 0 : O.y) ?? 0;
    });
    return Fi({
      placedSide: T,
      onArrowChange: (O) => u.value = O,
      arrowX: V,
      arrowY: j,
      shouldHideArrow: I
    }), (O, L) => {
      var $, X, R;
      return y(), Q("div", {
        ref_key: "floatingRef",
        ref: s,
        "data-radix-popper-content-wrapper": "",
        style: wt({
          ...i(_),
          transform: i(A) ? i(_).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: k.value,
          "--radix-popper-transform-origin": [
            ($ = i(B).transformOrigin) == null ? void 0 : $.x,
            (X = i(B).transformOrigin) == null ? void 0 : X.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((R = i(B).hide) == null ? void 0 : R.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        P(i(z), F({ ref: i(r) }, O.$attrs, {
          "as-child": o.asChild,
          as: O.as,
          "data-side": T.value,
          "data-align": D.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: i(A) ? void 0 : "none"
          }
        }), {
          default: g(() => [
            C(O.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Li = /* @__PURE__ */ J("polygon", { points: "0,0 30,0 15,10" }, null, -1), zi = /* @__PURE__ */ w({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(z), F(t, {
      width: o.width,
      height: o.height,
      viewBox: o.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: o.asChild ? void 0 : "none"
    }), {
      default: g(() => [
        C(o.$slots, "default", {}, () => [
          Li
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), Vi = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, to = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const { forwardRef: t } = M(), o = Mi(), n = S(() => Vi[o.placedSide.value]);
    return (a, r) => {
      var l, s, u, d;
      return y(), Q("span", {
        ref: (p) => {
          i(o).onArrowChange(p);
        },
        style: wt({
          position: "absolute",
          left: (l = i(o).arrowX) != null && l.value ? `${(s = i(o).arrowX) == null ? void 0 : s.value}px` : void 0,
          top: (u = i(o).arrowY) != null && u.value ? `${(d = i(o).arrowY) == null ? void 0 : d.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i(o).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i(o).placedSide.value],
          visibility: i(o).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        P(zi, F(a.$attrs, {
          ref: i(t),
          style: {
            display: "block"
          },
          as: a.as,
          "as-child": a.asChild,
          width: a.width,
          height: a.height
        }), {
          default: g(() => [
            C(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), oo = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return M(), (t, o) => (y(), b(i(z), {
      as: t.as,
      "as-child": t.asChild,
      style: wt({
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      })
    }, {
      default: g(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "style"]));
  }
}), Ni = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = S(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, a) => typeof n == "object" ? Object.entries(n).map(([r, l]) => ({ name: `[${a}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${a}]`, value: n }) : typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, a]) => ({ name: `[${t.name}][${n}]`, value: a })) : []);
    return (n, a) => (y(!0), Q(xe, null, xt(o.value, (r) => (y(), b(oo, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
});
function ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wi = function e(t, o) {
  if (t === o)
    return !0;
  if (t && o && typeof t == "object" && typeof o == "object") {
    if (t.constructor !== o.constructor)
      return !1;
    var n, a, r;
    if (Array.isArray(t)) {
      if (n = t.length, n != o.length)
        return !1;
      for (a = n; a-- !== 0; )
        if (!e(t[a], o[a]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === o.source && t.flags === o.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === o.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === o.toString();
    if (r = Object.keys(t), n = r.length, n !== Object.keys(o).length)
      return !1;
    for (a = n; a-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(o, r[a]))
        return !1;
    for (a = n; a-- !== 0; ) {
      var l = r[a];
      if (!e(t[l], o[l]))
        return !1;
    }
    return !0;
  }
  return t !== t && o !== o;
};
const Je = /* @__PURE__ */ ji(Wi), Ki = "data-radix-vue-collection-item", [Go, Hi] = Y("CollectionProvider");
function Ui(e = Ki) {
  const t = E(/* @__PURE__ */ new Map()), o = E(), n = Hi({
    collectionRef: o,
    itemMap: t,
    attrName: e
  }), { getItems: a } = Xi(n), r = S(() => Array.from(n.itemMap.value.values())), l = S(() => n.itemMap.value.size);
  return { getItems: a, reactiveItems: r, itemMapSize: l };
}
const qi = w({
  name: "CollectionSlot",
  setup(e, { slots: t }) {
    const o = Go(), { primitiveElement: n, currentElement: a } = na();
    return U(a, () => {
      o.collectionRef.value = a.value;
    }), () => et(Uo, { ref: n }, t);
  }
}), Gi = w({
  name: "CollectionItem",
  setup(e, { slots: t, attrs: o }) {
    const n = Go(), { primitiveElement: a, currentElement: r } = na(), l = Ne();
    return ee((s) => {
      var u;
      if (r.value) {
        const d = mo(r.value);
        n.itemMap.value.set(d, { ref: r.value, ...mo(((u = l == null ? void 0 : l.parent) == null ? void 0 : u.props) ?? {}) }), s(() => n.itemMap.value.delete(d));
      }
    }), () => et(Uo, { ...o, [n.attrName]: "", ref: a }, t);
  }
});
function Xi(e) {
  const t = e ?? Go();
  return { getItems: () => {
    const o = t.collectionRef.value;
    if (!o)
      return [];
    const n = Array.from(o.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (a, r) => n.indexOf(a.ref) - n.indexOf(r.ref)
    );
  } };
}
const [je, Yi] = Y("ComboboxRoot"), Qi = /* @__PURE__ */ w({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm"],
  setup(e, { emit: t }) {
    const o = e, n = t, { multiple: a, disabled: r, dir: l } = de(o), s = Ot(l), u = le(o, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: o.searchTerm === void 0
    }), d = le(o, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: o.defaultValue ?? a.value ? [] : void 0,
      passive: o.modelValue === void 0,
      deep: !0
    }), p = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), c = E();
    async function f(R) {
      var W, K;
      p.value = R, await q(), R ? (d.value && (Array.isArray(d.value) && a.value ? c.value = (W = B().find((ae) => {
        var ge, he;
        return ((he = (ge = ae.ref) == null ? void 0 : ge.dataset) == null ? void 0 : he.state) === "checked";
      })) == null ? void 0 : W.value : c.value = d.value), (K = h.value) == null || K.focus(), X()) : (m.value = !1, V());
    }
    function v(R) {
      if (Array.isArray(d.value) && a.value) {
        const W = d.value.findIndex((K) => Je(K, R));
        W === -1 ? d.value.push(R) : d.value.splice(W, 1);
      } else
        d.value = R, f(!1);
    }
    const m = E(!1), h = E(), _ = E(), { forwardRef: x, currentElement: A } = M(), { getItems: B, reactiveItems: T, itemMapSize: D } = Ui("data-radix-vue-combobox-item"), I = E([]);
    U(() => D.value, () => {
      I.value = B().map((R) => R.value);
    }, { immediate: !0 });
    const k = S(() => {
      if (m.value) {
        if (o.filterFunction)
          return o.filterFunction(I.value, u.value);
        const R = I.value.filter((W) => typeof W == "string");
        if (R.length)
          return R.filter((W) => {
            var K;
            return W.toLowerCase().includes((K = u.value) == null ? void 0 : K.toLowerCase());
          });
      }
      return I.value;
    });
    function V() {
      !a.value && d.value && !Array.isArray(d.value) ? o.displayValue ? u.value = o.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const j = S(() => k.value.findIndex((R) => Je(R, c.value))), O = S(() => {
      var R;
      return (R = T.value.find((W) => W.value === c.value)) == null ? void 0 : R.ref;
    }), L = S(() => JSON.stringify(d.value));
    U(L, async () => {
      await q(), await q(), V();
    }, { immediate: !0 }), U(() => k.value.length, async (R) => {
      await q(), await q(), R && j.value === -1 && (c.value = k.value[0]);
    });
    const $ = ta(A);
    function X() {
      O.value instanceof Element && O.value.scrollIntoView({ block: "nearest" });
    }
    return Yi({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error igoring
      onValueChange: v,
      isUserInputted: m,
      multiple: a,
      disabled: r,
      open: p,
      onOpenChange: f,
      filteredOptions: k,
      contentId: "",
      inputElement: h,
      onInputElementChange: (R) => h.value = R,
      onInputNavigation: async (R) => {
        const W = j.value;
        W === 0 && R === "up" || W === k.value.length - 1 && R === "down" || (W === -1 && k.value.length || R === "home" ? c.value = k.value[0] : R === "end" ? c.value = k.value[k.value.length - 1] : c.value = k.value[R === "up" ? W - 1 : W + 1], X());
      },
      onInputEnter: async () => {
        var R;
        k.value.length && c.value && O.value instanceof Element && ((R = O.value) == null || R.click());
      },
      selectedValue: c,
      onSelectedValueChange: (R) => c.value = R,
      parentElement: A,
      contentElement: _,
      onContentElementChange: (R) => _.value = R
    }), (R, W) => (y(), b(i(ut), null, {
      default: g(() => [
        P(i(z), F({
          ref: i(x),
          style: {
            pointerEvents: i(p) ? "auto" : void 0
          },
          as: R.as,
          "as-child": R.asChild,
          dir: i(s)
        }, R.$attrs), {
          default: g(() => [
            C(R.$slots, "default", {
              open: i(p),
              modelValue: i(d)
            }),
            i($) && o.name ? (y(), b(i(Ni), {
              key: 0,
              name: o.name,
              value: i(d)
            }, null, 8, ["name", "value"])) : H("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Ji = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(e) {
    const t = e, o = je(), { forwardRef: n, currentElement: a } = M();
    ne(() => {
      const d = a.value.nodeName === "INPUT" ? a.value : a.value.querySelector("input");
      d && (o.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const r = S(() => t.disabled || o.disabled.value || !1);
    function l(d) {
      o.open.value ? o.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : o.onOpenChange(!0);
    }
    function s(d) {
      o.open.value && o.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function u(d) {
      var p;
      o.searchTerm.value = (p = d.target) == null ? void 0 : p.value, o.open.value || o.onOpenChange(!0), o.isUserInputted.value = !0;
    }
    return (d, p) => (y(), b(i(z), {
      ref: i(n),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: r.value,
      value: i(o).searchTerm.value,
      "aria-expanded": i(o).open.value,
      "aria-controls": i(o).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        zt(pe(l, ["prevent"]), ["down", "up"]),
        zt(i(o).onInputEnter, ["enter"]),
        zt(pe(s, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: g(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "onKeydown"]));
  }
}), Zi = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const { forwardRef: t } = M();
    return (o, n) => (y(), b(i(kt), { "as-child": "" }, {
      default: g(() => [
        P(i(z), F({
          ref: i(t),
          "as-child": o.asChild,
          as: o.as
        }, o.$attrs), {
          default: g(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
}), es = /* @__PURE__ */ w({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const o = je(), n = S(() => t.disabled || o.disabled.value || !1);
    return (a, r) => (y(), b(i(z), F(t, {
      type: a.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": i(o).open.value,
      "aria-controls": i(o).contentId,
      "data-state": i(o).open.value ? "open" : "closed",
      disabled: n.value,
      "data-disabled": n.value ? "" : void 0,
      "aria-disabled": n.value ?? void 0,
      onClick: r[0] || (r[0] = (l) => i(o).onOpenChange(!i(o).open.value))
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
}), [da, ts] = Y("ComboboxGroup"), os = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { currentRef: o, currentElement: n } = M(), a = ue(void 0, "radix-vue-combobox-group"), r = je(), l = E(!1);
    function s() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      l.value = !!u.length;
    }
    return Fl(n, () => {
      s();
    }, { childList: !0 }), U(() => r.searchTerm.value, () => {
      q(() => {
        s();
      });
    }, { immediate: !0 }), ts({
      id: a
    }), (u, d) => Eo((y(), b(i(z), F(t, {
      ref_key: "currentRef",
      ref: o,
      role: "group",
      "aria-labelledby": i(a)
    }), {
      default: g(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [bn, l.value]
    ]);
  }
}), ns = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    M();
    const o = da({ id: "" });
    return (n, a) => (y(), b(i(z), F(t, {
      id: i(o).id
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [as, rs] = Y("ComboboxContent"), ls = /* @__PURE__ */ w({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const o = e, n = t, { position: a } = de(o), r = je();
    At(o.bodyLock);
    const { forwardRef: l, currentElement: s } = M();
    Et(s);
    const u = S(() => o.position === "popper" ? o : {}), d = it(u.value);
    function p(f) {
      r.onSelectedValueChange("");
    }
    ne(() => {
      r.onContentElementChange(s.value);
    });
    const c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return rs({ position: a }), (f, v) => (y(), b(i(qi), null, {
      default: g(() => [
        f.dismissable ? (y(), b(i(st), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (m) => i(r).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (m) => {
            var h;
            (h = i(r).parentElement.value) != null && h.contains(m.target) && m.preventDefault(), n("focusOutside", m);
          }),
          onInteractOutside: v[2] || (v[2] = (m) => n("interactOutside", m)),
          onEscapeKeyDown: v[3] || (v[3] = (m) => n("escapeKeyDown", m)),
          onPointerDownOutside: v[4] || (v[4] = (m) => {
            var h;
            (h = i(r).parentElement.value) != null && h.contains(m.target) && m.preventDefault(), n("pointerDownOutside", m);
          })
        }, {
          default: g(() => [
            (y(), b(be(i(a) === "popper" ? i(ot) : i(z)), F({ ...f.$attrs, ...i(d) }, {
              id: i(r).contentId,
              ref: i(l),
              role: "listbox",
              "data-state": i(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...i(a) === "popper" ? c : {}
              },
              onPointerleave: p
            }), {
              default: g(() => [
                C(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (y(), b(be(i(a) === "popper" ? i(ot) : i(z)), F({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: i(r).contentId,
          ref: i(l),
          role: "listbox",
          "data-state": i(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...i(a) === "popper" ? c : {}
          },
          onPointerleave: p
        }), {
          default: g(() => [
            C(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), is = /* @__PURE__ */ w({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(e, { emit: t }) {
    const o = me(e, t), { forwardRef: n } = M(), a = je();
    return a.contentId || (a.contentId = ue(void 0, "radix-vue-combobox-content")), (r, l) => (y(), b(i(qe), {
      present: r.forceMount || i(a).open.value
    }, {
      default: g(() => [
        P(ls, F({ ...i(o), ...r.$attrs }, { ref: i(n) }), {
          default: g(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ss = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    M();
    const o = je(), n = S(() => o.filteredOptions.value.length === 0);
    return (a, r) => n.value ? (y(), b(i(z), Z(F({ key: 0 }, t)), {
      default: g(() => [
        C(a.$slots, "default", {}, () => [
          oe("No options")
        ])
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), us = /* @__PURE__ */ w({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: o } = M();
    return (n, a) => (y(), Q(xe, null, [
      P(i(z), F({ ...n.$attrs, ...t }, {
        ref: i(o),
        "data-radix-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: g(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      P(i(z), {
        as: "style",
        nonce: n.nonce
      }, {
        default: g(() => [
          oe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), [ds, cs] = Y("ComboboxItem"), ps = "combobox.select", fs = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { disabled: a } = de(o), r = je();
    da({ id: "", options: E([]) });
    const { forwardRef: l } = M(), s = S(
      () => {
        var m, h;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (m = r.modelValue.value) == null ? void 0 : m.some((_) => Je(_, o.value)) : Je((h = r.modelValue) == null ? void 0 : h.value, o.value);
      }
    ), u = S(() => Je(r.selectedValue.value, o.value)), d = ue(void 0, "radix-vue-combobox-item"), p = S(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((m) => Je(m, o.value)) : !0);
    async function c(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !a.value && m && r.onValueChange(o.value);
    }
    function f(m) {
      if (!m)
        return;
      const h = { originalEvent: m, value: o.value };
      No(ps, c, h);
    }
    async function v(m) {
      await q(), !m.defaultPrevented && r.onSelectedValueChange(o.value);
    }
    if (o.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return cs({
      isSelected: s
    }), (m, h) => (y(), b(i(Gi), null, {
      default: g(() => [
        Eo(P(i(z), {
          ref: i(l),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": i(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": s.value,
          "data-state": s.value ? "checked" : "unchecked",
          "aria-disabled": i(a) || void 0,
          "data-disabled": i(a) ? "" : void 0,
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: f,
          onPointermove: v
        }, {
          default: g(() => [
            C(m.$slots, "default", {}, () => [
              oe(ie(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [bn, p.value]
        ])
      ]),
      _: 3
    }));
  }
}), vs = /* @__PURE__ */ w({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e;
    M();
    const o = ds();
    return (n, a) => i(o).isSelected.value ? (y(), b(i(z), F({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), ms = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(z), F(t, { "aria-hidden": "" }), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = /* @__PURE__ */ w({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e, o = je(), n = as();
    return M(), (a, r) => i(o).open.value && i(n).position.value === "popper" ? (y(), b(i(to), Z(F({ key: 0 }, t)), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), hs = /* @__PURE__ */ w({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Pt), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ca = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(kt), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ys = /* @__PURE__ */ w({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(to), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ge, pa] = Y(["MenuRoot", "MenuSub"], "MenuContext"), [Dt, bs] = Y("MenuRoot"), ws = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a, dir: r } = de(o), l = Ot(r), s = le(o, "open", n), u = E(), d = E(!1);
    return ee((p) => {
      if (!Ie)
        return;
      const c = () => {
        d.value = !0, document.addEventListener("pointerdown", f, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", f, {
          capture: !0,
          once: !0
        });
      }, f = () => d.value = !1;
      document.addEventListener("keydown", c, { capture: !0 }), p(() => {
        document.removeEventListener("keydown", c, { capture: !0 }), document.removeEventListener("pointerdown", f, {
          capture: !0
        }), document.removeEventListener("pointermove", f, {
          capture: !0
        });
      });
    }), pa({
      open: s,
      onOpenChange: (p) => {
        s.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), bs({
      onClose: () => {
        s.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: a
    }), (p, c) => (y(), b(i(ut), null, {
      default: g(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), xs = "rovingFocusGroup.onEntryFocus", _s = { bubbles: !1, cancelable: !0 };
function Cs(e) {
  const t = document.activeElement;
  for (const o of e)
    if (o === t || (o.focus(), document.activeElement !== t))
      return;
}
const [Gd, As] = Y("RovingFocusGroup"), Os = /* @__PURE__ */ w({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { emit: t }) {
    const o = e, n = t, { loop: a, orientation: r, dir: l } = de(o), s = Ot(l), u = le(o, "currentTabStopId", n, {
      defaultValue: o.defaultCurrentTabStopId,
      passive: o.currentTabStopId === void 0
    }), d = E(!1), p = E(!1), c = E(0), { forwardRef: f, currentElement: v } = M(), { createCollection: m } = lt("rovingFocus"), h = m(v);
    function _(x) {
      const A = !p.value;
      if (x.currentTarget && x.target === x.currentTarget && A && !d.value) {
        const B = new CustomEvent(xs, _s);
        if (x.currentTarget.dispatchEvent(B), n("entryFocus", B), !B.defaultPrevented) {
          const T = h.value, D = T.find((V) => V.getAttribute("data-active") === "true"), I = T.find(
            (V) => V.id === u.value
          ), k = [D, I, ...T].filter(
            Boolean
          );
          Cs(k);
        }
      }
      p.value = !1;
    }
    return As({
      loop: a,
      dir: s,
      orientation: r,
      currentTabStopId: u,
      onItemFocus: (x) => {
        u.value = x;
      },
      onItemShiftTab: () => {
        d.value = !0;
      },
      onFocusableItemAdd: () => {
        c.value++;
      },
      onFocusableItemRemove: () => {
        c.value--;
      }
    }), (x, A) => (y(), b(i(z), {
      ref: i(f),
      tabindex: d.value || c.value === 0 ? -1 : 0,
      "data-orientation": i(r),
      as: x.as,
      "as-child": x.asChild,
      dir: i(s),
      style: { outline: "none" },
      onMousedown: A[0] || (A[0] = (B) => p.value = !0),
      onFocus: _,
      onBlur: A[1] || (A[1] = (B) => d.value = !1)
    }, {
      default: g(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), [Xo, Bs] = Y("MenuContent"), Yo = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Pn({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...ua
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = Ge(), r = Dt(), { trapFocus: l, disableOutsidePointerEvents: s, loop: u } = de(o);
    Ko(), At(s.value);
    const d = E(""), p = E(0), c = E(0), f = E(null), v = E("right"), m = E(0), h = E(null), { createCollection: _ } = lt(), { forwardRef: x, currentElement: A } = M(), B = _(A);
    U(A, (O) => {
      a.onContentChange(O);
    });
    const { handleTypeaheadSearch: T } = Ho(B);
    Xt(() => {
      window.clearTimeout(p.value);
    });
    function D(O) {
      var L, $;
      return v.value === ((L = f.value) == null ? void 0 : L.side) && Ci(O, ($ = f.value) == null ? void 0 : $.area);
    }
    async function I(O) {
      var L;
      n("openAutoFocus", O), !O.defaultPrevented && (O.preventDefault(), (L = A.value) == null || L.focus());
    }
    function k(O) {
      if (O.defaultPrevented)
        return;
      const L = O.target.closest("[data-radix-menu-content]") === O.currentTarget, $ = O.ctrlKey || O.altKey || O.metaKey, X = O.key.length === 1, R = Vl(
        O,
        document.activeElement,
        A.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (R)
        return R == null ? void 0 : R.focus();
      if (O.code === "Space" || (L && (O.key === "Tab" && O.preventDefault(), !$ && X && T(O.key)), O.target !== A.value) || !bi.includes(O.key))
        return;
      O.preventDefault();
      const W = B.value;
      la.includes(O.key) && W.reverse(), Ao(W);
    }
    function V(O) {
      var L, $;
      ($ = (L = O == null ? void 0 : O.currentTarget) == null ? void 0 : L.contains) != null && $.call(L, O.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function j(O) {
      var L;
      if (!bt(O))
        return;
      const $ = O.target, X = m.value !== O.clientX;
      if ((L = O == null ? void 0 : O.currentTarget) != null && L.contains($) && X) {
        const R = O.clientX > m.value ? "right" : "left";
        v.value = R, m.value = O.clientX;
      }
    }
    return Bs({
      onItemEnter: (O) => !!D(O),
      onItemLeave: (O) => {
        var L;
        D(O) || ((L = A.value) == null || L.focus(), h.value = null);
      },
      onTriggerLeave: (O) => !!D(O),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (O) => {
        f.value = O;
      }
    }), (O, L) => (y(), b(i(eo), {
      "as-child": "",
      trapped: i(l),
      onMountAutoFocus: I,
      onUnmountAutoFocus: L[7] || (L[7] = ($) => n("closeAutoFocus", $))
    }, {
      default: g(() => [
        P(i(st), {
          "as-child": "",
          "disable-outside-pointer-events": i(s),
          onEscapeKeyDown: L[2] || (L[2] = ($) => n("escapeKeyDown", $)),
          onPointerDownOutside: L[3] || (L[3] = ($) => n("pointerDownOutside", $)),
          onFocusOutside: L[4] || (L[4] = ($) => n("focusOutside", $)),
          onInteractOutside: L[5] || (L[5] = ($) => n("interactOutside", $)),
          onDismiss: L[6] || (L[6] = ($) => n("dismiss"))
        }, {
          default: g(() => [
            P(i(Os), {
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = ($) => h.value = $),
              "as-child": "",
              orientation: "vertical",
              dir: i(r).dir.value,
              loop: i(u),
              onEntryFocus: L[1] || (L[1] = ($) => {
                n("entryFocus", $), i(r).isUsingKeyboardRef.value || $.preventDefault();
              })
            }, {
              default: g(() => [
                P(i(ot), {
                  ref: i(x),
                  role: "menu",
                  as: O.as,
                  "as-child": O.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": i(qo)(i(a).open.value),
                  dir: i(r).dir.value,
                  side: O.side,
                  "side-offset": O.sideOffset,
                  align: O.align,
                  "align-offset": O.alignOffset,
                  "avoid-collisions": O.avoidCollisions,
                  "collision-boundary": O.collisionBoundary,
                  "collision-padding": O.collisionPadding,
                  "arrow-padding": O.arrowPadding,
                  "prioritize-position": O.prioritizePosition,
                  sticky: O.sticky,
                  "hide-when-detached": O.hideWhenDetached,
                  onKeydown: k,
                  onBlur: V,
                  onPointermove: j
                }, {
                  default: g(() => [
                    C(O.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), fa = /* @__PURE__ */ w({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Xo(), n = E(!1);
    async function a(l) {
      if (!l.defaultPrevented && bt(l)) {
        if (t.disabled)
          o.onItemLeave(l);
        else if (!o.onItemEnter(l)) {
          const s = l.currentTarget;
          s == null || s.focus();
        }
      }
    }
    async function r(l) {
      await q(), !l.defaultPrevented && bt(l) && o.onItemLeave(l);
    }
    return (l, s) => (y(), b(i(z), {
      role: "menuitem",
      tabindex: "-1",
      as: l.as,
      "as-child": l.asChild,
      "data-radix-vue-collection-item": "",
      "aria-disabled": l.disabled || void 0,
      "data-disabled": l.disabled ? "" : void 0,
      "data-highlighted": n.value ? "" : void 0,
      onPointermove: a,
      onPointerleave: r,
      onFocus: s[0] || (s[0] = async (u) => {
        await q(), !(u.defaultPrevented || l.disabled) && (n.value = !0);
      }),
      onBlur: s[1] || (s[1] = async (u) => {
        await q(), !u.defaultPrevented && (n.value = !1);
      })
    }, {
      default: g(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"]));
  }
}), Es = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t, { forwardRef: a, currentElement: r } = M(), l = Dt(), s = Xo(), u = E(!1);
    async function d() {
      const p = r.value;
      if (!o.disabled && p) {
        const c = new CustomEvent(hi, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", c), await q(), c.defaultPrevented ? u.value = !1 : l.onClose();
      }
    }
    return (p, c) => (y(), b(fa, F(o, {
      ref: i(a),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = !0;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var v;
        await q(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const v = i(s).searchRef.value !== "";
        p.disabled || v && f.key === " " || i(Co).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: g(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ps = /* @__PURE__ */ w({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = me(o, n), r = Ge(), { forwardRef: l, currentElement: s } = M();
    return Et(s), (u, d) => (y(), b(Yo, F(i(a), {
      ref: i(l),
      "trap-focus": i(r).open.value,
      "disable-outside-pointer-events": i(r).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (p) => i(r).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = pe((p) => n("focusOutside", p), ["prevent"]))
    }), {
      default: g(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), ks = /* @__PURE__ */ w({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = me(e, t), n = Ge();
    return (a, r) => (y(), b(Yo, F(i(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: r[0] || (r[0] = (l) => i(n).onOpenChange(!1))
    }), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ds = /* @__PURE__ */ w({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = me(e, t), n = Ge(), a = Dt();
    return (r, l) => (y(), b(i(qe), {
      present: r.forceMount || i(n).open.value
    }, {
      default: g(() => [
        i(a).modal.value ? (y(), b(Ps, Z(F({ key: 0 }, { ...r.$attrs, ...i(o) })), {
          default: g(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), b(ks, Z(F({ key: 1 }, { ...r.$attrs, ...i(o) })), {
          default: g(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $s = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(z), F({ role: "group" }, t), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ss = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(z), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ts = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Pt), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Is = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(z), F(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [va, Rs] = Y("MenuSub"), Ms = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      defaultValue: !1,
      passive: o.open === void 0
    }), a = Ge(), r = E(), l = E();
    return ee((s) => {
      (a == null ? void 0 : a.open.value) === !1 && (n.value = !1), s(() => n.value = !1);
    }), pa({
      open: n,
      onOpenChange: (s) => {
        n.value = s;
      },
      content: l,
      onContentChange: (s) => {
        l.value = s;
      }
    }), Rs({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (s) => {
        r.value = s;
      }
    }), (s, u) => (y(), b(i(ut), null, {
      default: g(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fs = /* @__PURE__ */ w({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = me(e, t), n = Ge(), a = Dt(), r = va(), { forwardRef: l, currentElement: s } = M();
    return r.contentId || (r.contentId = ue(void 0, "radix-vue-menu-sub-content")), (u, d) => (y(), b(i(qe), {
      present: u.forceMount || i(n).open.value
    }, {
      default: g(() => [
        P(Yo, F(i(o), {
          id: i(r).contentId,
          ref: i(l),
          "aria-labelledby": i(r).triggerId,
          align: "start",
          side: i(a).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: d[0] || (d[0] = pe((p) => {
            var c;
            i(a).isUsingKeyboardRef.value && ((c = i(s)) == null || c.focus());
          }, ["prevent"])),
          onCloseAutoFocus: d[1] || (d[1] = pe(() => {
          }, ["prevent"])),
          onFocusOutside: d[2] || (d[2] = (p) => {
            p.defaultPrevented || p.target !== i(r).trigger.value && i(n).onOpenChange(!1);
          }),
          onEscapeKeyDown: d[3] || (d[3] = (p) => {
            i(a).onClose(), p.preventDefault();
          }),
          onKeydown: d[4] || (d[4] = (p) => {
            var c, f;
            const v = (c = p.currentTarget) == null ? void 0 : c.contains(p.target), m = i(xi)[i(a).dir.value].includes(p.key);
            v && m && (i(n).onOpenChange(!1), (f = i(r).trigger.value) == null || f.focus(), p.preventDefault());
          })
        }), {
          default: g(() => [
            C(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ls = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = Ge(), n = Dt(), a = va(), r = Xo(), l = E(null);
    a.triggerId || (a.triggerId = ue(void 0, "radix-vue-menu-sub-trigger"));
    function s() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    Xt(() => {
      s();
    });
    function u(c) {
      !bt(c) || r.onItemEnter(c) || !t.disabled && !o.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        o.onOpenChange(!0), s();
      }, 100));
    }
    async function d(c) {
      var f, v;
      if (!bt(c))
        return;
      s();
      const m = (f = o.content.value) == null ? void 0 : f.getBoundingClientRect();
      if (m != null && m.width) {
        const h = (v = o.content.value) == null ? void 0 : v.dataset.side, _ = h === "right", x = _ ? -5 : 5, A = m[_ ? "left" : "right"], B = m[_ ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + x, y: c.clientY },
            { x: A, y: m.top },
            { x: B, y: m.top },
            { x: B, y: m.bottom },
            { x: A, y: m.bottom }
          ],
          side: h
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(c))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var f;
      const v = r.searchRef.value !== "";
      t.disabled || v && c.key === " " || wi[n.dir.value].includes(c.key) && (o.onOpenChange(!0), await q(), (f = o.content.value) == null || f.focus(), c.preventDefault());
    }
    return (c, f) => (y(), b(ca, { "as-child": "" }, {
      default: g(() => [
        P(fa, F(t, {
          id: i(a).triggerId,
          ref: (v) => {
            var m;
            (m = i(a)) == null || m.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": i(o).open.value,
          "aria-controls": i(a).contentId,
          "data-state": i(qo)(i(o).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), i(o).open.value || i(o).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: p
        }), {
          default: g(() => [
            C(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ma, zs] = Y("DropdownMenuRoot"), Vs = /* @__PURE__ */ w({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    M();
    const a = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), r = E(), { modal: l, dir: s } = de(o), u = Ot(s);
    return zs({
      open: a,
      onOpenChange: (d) => {
        a.value = d;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerId: "",
      triggerElement: r,
      contentId: "",
      modal: l,
      dir: u
    }), (d, p) => (y(), b(i(ws), {
      open: i(a),
      "onUpdate:open": p[0] || (p[0] = (c) => Po(a) ? a.value = c : null),
      dir: i(u),
      modal: i(l)
    }, {
      default: g(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Ns = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = ma(), { forwardRef: n, currentElement: a } = M();
    return ne(() => {
      o.triggerElement = a;
    }), o.triggerId || (o.triggerId = ue(void 0, "radix-vue-dropdown-menu-trigger")), (r, l) => (y(), b(i(ca), { "as-child": "" }, {
      default: g(() => [
        P(i(z), {
          id: i(o).triggerId,
          ref: i(n),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": i(o).open.value,
          "aria-controls": i(o).open.value ? i(o).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": i(o).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (s) => {
            var u;
            !r.disabled && s.button === 0 && s.ctrlKey === !1 && ((u = i(o)) == null || u.onOpenToggle(), await q(), i(o).open.value && s.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = zt(
            (s) => {
              r.disabled || (["Enter", " "].includes(s.key) && i(o).onOpenToggle(), s.key === "ArrowDown" && i(o).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: g(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), js = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Ts), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ws = /* @__PURE__ */ w({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    M();
    const n = ma(), a = E(!1);
    function r(l) {
      l.defaultPrevented || (a.value || setTimeout(() => {
        var s;
        (s = n.triggerElement.value) == null || s.focus();
      }, 0), a.value = !1, l.preventDefault());
    }
    return n.contentId || (n.contentId = ue(void 0, "radix-vue-dropdown-menu-content")), (l, s) => {
      var u;
      return y(), b(i(Ds), F(i(o), {
        id: i(n).contentId,
        "aria-labelledby": (u = i(n)) == null ? void 0 : u.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: r,
        onInteractOutside: s[0] || (s[0] = (d) => {
          var p;
          if (d.defaultPrevented)
            return;
          const c = d.detail.originalEvent, f = c.button === 0 && c.ctrlKey === !0, v = c.button === 2 || f;
          (!i(n).modal.value || v) && (a.value = !0), (p = i(n).triggerElement.value) != null && p.contains(d.target) && d.preventDefault();
        })
      }), {
        default: g(() => [
          C(l.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
}), Ks = /* @__PURE__ */ w({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(ys), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hs = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = Bt(t);
    return M(), (a, r) => (y(), b(i(Es), Z(te({ ...o, ...i(n) })), {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Us = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i($s), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qs = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(Is), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gs = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(Ss), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xs = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = le(o, "open", t, {
      passive: o.open === void 0,
      defaultValue: o.defaultOpen ?? !1
    });
    return M(), (a, r) => (y(), b(i(Ms), {
      open: i(n),
      "onUpdate:open": r[0] || (r[0] = (l) => Po(n) ? n.value = l : null)
    }, {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Ys = /* @__PURE__ */ w({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = me(e, t);
    return M(), (n, a) => (y(), b(i(Fs), F(i(o), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), Qs = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(Ls), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Js = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(z), F(t, {
      onMousedown: n[0] || (n[0] = (a) => {
        !a.defaultPrevented && a.detail > 1 && a.preventDefault();
      })
    }), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [dt, Zs] = Y("PopoverRoot"), eu = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, { modal: a } = de(o), r = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = E(), s = E(!1);
    return Zs({
      contentId: "",
      modal: a,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: l,
      hasCustomAnchor: s
    }), (u, d) => (y(), b(i(ut), null, {
      default: g(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), tu = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = dt(), { forwardRef: n, currentElement: a } = M();
    return ne(() => {
      o.triggerElement.value = a.value;
    }), (r, l) => (y(), b(be(i(o).hasCustomAnchor.value ? i(z) : i(kt)), { "as-child": "" }, {
      default: g(() => [
        P(i(z), {
          ref: i(n),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": i(o).open.value,
          "aria-controls": i(o).contentId,
          "data-state": i(o).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: i(o).onOpenToggle
        }, {
          default: g(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), ou = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Pt), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ga = /* @__PURE__ */ w({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = it(o), { forwardRef: r } = M(), l = dt();
    return Ko(), (s, u) => (y(), b(i(eo), {
      "as-child": "",
      loop: "",
      trapped: s.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: g(() => [
        P(i(st), {
          "as-child": "",
          "disable-outside-pointer-events": s.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => i(l).onOpenChange(!1))
        }, {
          default: g(() => [
            P(i(ot), F(i(a), {
              id: i(l).contentId,
              ref: i(r),
              "data-state": i(l).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: g(() => [
                C(s.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), nu = /* @__PURE__ */ w({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = dt(), r = E(!1);
    At(!0);
    const l = me(o, n), { forwardRef: s, currentElement: u } = M();
    return Et(u), (d, p) => (y(), b(ga, F(i(l), {
      ref: i(s),
      "trap-focus": i(a).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = pe(
        (c) => {
          var f;
          n("closeAutoFocus", c), r.value || (f = i(a).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        n("pointerDownOutside", c);
        const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, m = f.button === 2 || v;
        r.value = m;
      }),
      onFocusOutside: p[2] || (p[2] = pe(() => {
      }, ["prevent"]))
    }), {
      default: g(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), au = /* @__PURE__ */ w({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = dt(), r = E(!1), l = E(!1), s = me(o, n);
    return (u, d) => (y(), b(ga, F(i(s), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        n("closeAutoFocus", p), p.defaultPrevented || (r.value || (c = i(a).triggerElement.value) == null || c.focus(), p.preventDefault()), r.value = !1, l.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var c;
        n("interactOutside", p), p.defaultPrevented || (r.value = !0, p.detail.originalEvent.type === "pointerdown" && (l.value = !0));
        const f = p.target;
        (c = i(a).triggerElement.value) != null && c.contains(f) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && l.value && p.preventDefault();
      })
    }), {
      default: g(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ru = /* @__PURE__ */ w({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = dt(), r = me(o, n), { forwardRef: l } = M();
    return a.contentId || (a.contentId = ue(void 0, "radix-vue-popover-content")), (s, u) => (y(), b(i(qe), {
      present: s.forceMount || i(a).open.value
    }, {
      default: g(() => [
        i(a).modal.value ? (y(), b(nu, F({ key: 0 }, i(r), { ref: i(l) }), {
          default: g(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)) : (y(), b(au, F({ key: 1 }, i(r), { ref: i(l) }), {
          default: g(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), lu = /* @__PURE__ */ w({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(to), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ w({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    M();
    const o = dt();
    return (n, a) => (y(), b(i(z), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: a[0] || (a[0] = (r) => i(o).onOpenChange(!1))
    }, {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
}), su = ["default-value"], uu = /* @__PURE__ */ w({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(e) {
    const t = e, { value: o } = de(t);
    Ll(o);
    const n = E();
    return (a, r) => (y(), b(i(oo), { "as-child": "" }, {
      default: g(() => [
        Eo(J("select", F({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => Po(o) ? o.value = l : null),
          "default-value": i(o)
        }), [
          C(a.$slots, "default")
        ], 16, su), [
          [$a, i(o)]
        ])
      ]),
      _: 3
    }));
  }
}), du = {
  key: 0,
  value: ""
}, [ct, ha] = Y("SelectRoot"), [Xd, cu] = Y("SelectRoot"), pu = /* @__PURE__ */ w({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = le(o, "modelValue", n, {
      defaultValue: o.defaultValue,
      passive: o.modelValue === void 0
    }), r = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    }), l = E(), s = E(), u = E({
      x: 0,
      y: 0
    }), d = E(!1), { required: p, disabled: c, dir: f } = de(o), v = Ot(f);
    ha({
      triggerElement: l,
      onTriggerChange: (x) => {
        l.value = x;
      },
      valueElement: s,
      onValueElementChange: (x) => {
        s.value = x;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (x) => {
        d.value = x;
      },
      contentId: "",
      modelValue: a,
      onValueChange: (x) => {
        a.value = x;
      },
      open: r,
      required: p,
      onOpenChange: (x) => {
        r.value = x;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const m = ta(l), h = E(/* @__PURE__ */ new Set()), _ = S(() => Array.from(h.value).map((x) => {
      var A;
      return (A = x.props) == null ? void 0 : A.value;
    }).join(";"));
    return cu({
      onNativeOptionAdd: (x) => {
        h.value.add(x);
      },
      onNativeOptionRemove: (x) => {
        h.value.delete(x);
      }
    }), (x, A) => (y(), b(i(ut), null, {
      default: g(() => [
        C(x.$slots, "default"),
        i(m) ? (y(), b(uu, F({ key: _.value }, x.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: i(p),
          name: x.name,
          autocomplete: x.autocomplete,
          disabled: i(c),
          value: i(a),
          onChange: A[0] || (A[0] = (B) => a.value = B.target.value)
        }), {
          default: g(() => [
            i(a) === void 0 ? (y(), Q("option", du)) : H("", !0),
            (y(!0), Q(xe, null, xt(Array.from(h.value), (B) => (y(), b(be(B), F(B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : H("", !0)
      ]),
      _: 3
    }));
  }
}), fu = [" ", "Enter", "ArrowUp", "ArrowDown"], vu = [" ", "Enter"], Ee = 10;
function ya(e) {
  return e === "" || e === void 0;
}
const mu = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = ct(), n = S(() => {
      var f;
      return ((f = o.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: a, currentElement: r } = M();
    o.contentId || (o.contentId = ue(void 0, "radix-vue-select-content")), ne(() => {
      o.triggerElement = r;
    });
    const { injectCollection: l } = lt(), s = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = Ho(s);
    function c() {
      n.value || (o.onOpenChange(!0), p());
    }
    return (f, v) => (y(), b(i(kt), { "as-child": "" }, {
      default: g(() => {
        var m, h, _, x;
        return [
          P(i(z), {
            ref: i(a),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": i(o).contentId,
            "aria-expanded": i(o).open.value || !1,
            "aria-required": (m = i(o).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (h = i(o)) == null ? void 0 : h.dir.value,
            "data-state": (_ = i(o)) != null && _.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": i(ya)((x = i(o).modelValue) == null ? void 0 : x.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = (A) => {
              var B;
              (B = A == null ? void 0 : A.currentTarget) == null || B.focus();
            }),
            onPointerdown: v[1] || (v[1] = (A) => {
              const B = A.target;
              B.hasPointerCapture(A.pointerId) && B.releasePointerCapture(A.pointerId), A.button === 0 && A.ctrlKey === !1 && (c(), i(o).triggerPointerDownPosRef.value = {
                x: Math.round(A.pageX),
                y: Math.round(A.pageY)
              }, A.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = pe(() => {
            }, ["prevent"])),
            onKeydown: v[3] || (v[3] = (A) => {
              const B = i(u) !== "";
              !(A.ctrlKey || A.altKey || A.metaKey) && A.key.length === 1 && B && A.key === " " || (i(d)(A.key), i(fu).includes(A.key) && (c(), A.preventDefault()));
            })
          }, {
            default: g(() => [
              C(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), gu = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Pt), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Qo, hu] = Y("SelectItemAlignedPosition"), yu = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { injectCollection: a } = lt(), r = ct(), l = pt(), s = a(), u = E(!1), d = E(!0), p = E(), { forwardRef: c, currentElement: f } = M(), { viewport: v, selectedItem: m, selectedItemText: h, focusSelectedItem: _ } = l;
    function x() {
      if (r.triggerElement.value && r.valueElement.value && p.value && f.value && v != null && v.value && m != null && m.value && h != null && h.value) {
        const T = r.triggerElement.value.getBoundingClientRect(), D = f.value.getBoundingClientRect(), I = r.valueElement.value.getBoundingClientRect(), k = h.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const We = k.left - D.left, Ae = I.left - We, ft = T.left - Ae, Ke = T.width + ft, ro = Math.max(Ke, D.width), lo = window.innerWidth - Ee, io = cn(Ae, Ee, lo - ro);
          p.value.style.minWidth = `${Ke}px`, p.value.style.left = `${io}px`;
        } else {
          const We = D.right - k.right, Ae = window.innerWidth - I.right - We, ft = window.innerWidth - T.right - Ae, Ke = T.width + ft, ro = Math.max(Ke, D.width), lo = window.innerWidth - Ee, io = cn(
            Ae,
            Ee,
            lo - ro
          );
          p.value.style.minWidth = `${Ke}px`, p.value.style.right = `${io}px`;
        }
        const V = s.value, j = window.innerHeight - Ee * 2, O = v.value.scrollHeight, L = window.getComputedStyle(f.value), $ = Number.parseInt(
          L.borderTopWidth,
          10
        ), X = Number.parseInt(L.paddingTop, 10), R = Number.parseInt(
          L.borderBottomWidth,
          10
        ), W = Number.parseInt(
          L.paddingBottom,
          10
        ), K = $ + X + O + W + R, ae = Math.min(
          m.value.offsetHeight * 5,
          K
        ), ge = window.getComputedStyle(v.value), he = Number.parseInt(ge.paddingTop, 10), St = Number.parseInt(
          ge.paddingBottom,
          10
        ), ye = T.top + T.height / 2 - Ee, Xe = j - ye, ao = m.value.offsetHeight / 2, Aa = m.value.offsetTop + ao, Tt = $ + X + Aa, Oa = K - Tt;
        if (Tt <= ye) {
          const We = m.value === V[V.length - 1];
          p.value.style.bottom = "0px";
          const Ae = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, ft = Math.max(
            Xe,
            ao + (We ? St : 0) + Ae + R
          ), Ke = Tt + ft;
          p.value.style.height = `${Ke}px`;
        } else {
          const We = m.value === V[0];
          p.value.style.top = "0px";
          const Ae = Math.max(
            ye,
            $ + v.value.offsetTop + (We ? he : 0) + ao
          ) + Oa;
          p.value.style.height = `${Ae}px`, v.value.scrollTop = Tt - ye + v.value.offsetTop;
        }
        p.value.style.margin = `${Ee}px 0`, p.value.style.minHeight = `${ae}px`, p.value.style.maxHeight = `${j}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const A = E("");
    ne(async () => {
      await q(), x(), f.value && (A.value = window.getComputedStyle(f.value).zIndex);
    });
    function B(T) {
      T && d.value === !0 && (x(), _ == null || _(), d.value = !1);
    }
    return hu({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (T, D) => (y(), Q("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: wt({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: A.value
      })
    }, [
      P(i(z), F({
        ref: i(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...T.$attrs, ...o }), {
        default: g(() => [
          C(T.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
}), bu = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ee },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = it(e);
    return (o, n) => (y(), b(i(ot), F(i(t), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), $t = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [pt, wu] = Y("SelectContent"), xu = /* @__PURE__ */ w({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = ct();
    Ko(), At(!0);
    const { createCollection: r } = lt(), l = E();
    Et(l);
    const s = r(l), { search: u, handleTypeaheadSearch: d } = Ho(s), p = E(), c = E(), f = E(), v = E(!1), m = E(!1);
    function h() {
      c.value && l.value && Ao([c.value, l.value]);
    }
    U(v, () => {
      h();
    });
    const { onOpenChange: _, triggerPointerDownPosRef: x } = a;
    ee((D) => {
      if (!l.value)
        return;
      let I = { x: 0, y: 0 };
      const k = (j) => {
        var O, L;
        I = {
          x: Math.abs(
            Math.round(j.pageX) - (((O = x.value) == null ? void 0 : O.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(j.pageY) - (((L = x.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, V = (j) => {
        var O;
        I.x <= 10 && I.y <= 10 ? j.preventDefault() : (O = l.value) != null && O.contains(j.target) || _(!1), document.removeEventListener("pointermove", k), x.value = null;
      };
      x.value !== null && (document.addEventListener("pointermove", k), document.addEventListener("pointerup", V, {
        capture: !0,
        once: !0
      })), D(() => {
        document.removeEventListener("pointermove", k), document.removeEventListener("pointerup", V, {
          capture: !0
        });
      });
    });
    function A(D) {
      const I = D.ctrlKey || D.altKey || D.metaKey;
      if (D.key === "Tab" && D.preventDefault(), !I && D.key.length === 1 && d(D.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key)) {
        let k = s.value;
        if (["ArrowUp", "End"].includes(D.key) && (k = k.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(D.key)) {
          const V = D.target, j = k.indexOf(V);
          k = k.slice(j + 1);
        }
        setTimeout(() => Ao(k)), D.preventDefault();
      }
    }
    const B = S(() => o.position === "popper" ? o : {}), T = it(B.value);
    return wu({
      content: l,
      viewport: p,
      onViewportChange: (D) => {
        p.value = D;
      },
      itemRefCallback: (D, I, k) => {
        var V, j;
        const O = !m.value && !k;
        (((V = a.modelValue) == null ? void 0 : V.value) !== void 0 && ((j = a.modelValue) == null ? void 0 : j.value) === I || O) && (c.value = D, O && (m.value = !0));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var D;
        (D = l.value) == null || D.focus();
      },
      itemTextRefCallback: (D, I, k) => {
        var V, j;
        const O = !m.value && !k;
        (((V = a.modelValue) == null ? void 0 : V.value) !== void 0 && ((j = a.modelValue) == null ? void 0 : j.value) === I || O) && (f.value = D);
      },
      focusSelectedItem: h,
      position: o.position,
      isPositioned: v,
      searchRef: u
    }), (D, I) => (y(), b(i(eo), {
      "as-child": "",
      onMountAutoFocus: I[6] || (I[6] = pe(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: I[7] || (I[7] = (k) => {
        var V;
        n("closeAutoFocus", k), !k.defaultPrevented && ((V = i(a).triggerElement.value) == null || V.focus({ preventScroll: !0 }), k.preventDefault());
      })
    }, {
      default: g(() => [
        P(i(st), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: I[2] || (I[2] = pe(() => {
          }, ["prevent"])),
          onDismiss: I[3] || (I[3] = (k) => i(a).onOpenChange(!1)),
          onEscapeKeyDown: I[4] || (I[4] = (k) => n("escapeKeyDown", k)),
          onPointerDownOutside: I[5] || (I[5] = (k) => n("pointerDownOutside", k))
        }, {
          default: g(() => [
            (y(), b(be(
              D.position === "popper" ? bu : yu
            ), F({ ...D.$attrs, ...i(T) }, {
              id: i(a).contentId,
              ref: (k) => {
                l.value = i(_e)(k);
              },
              role: "listbox",
              "data-state": i(a).open.value ? "open" : "closed",
              dir: i(a).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: I[0] || (I[0] = pe(() => {
              }, ["prevent"])),
              onPlaced: I[1] || (I[1] = (k) => v.value = !0),
              onKeydown: A
            }), {
              default: g(() => [
                C(D.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), _u = /* @__PURE__ */ w({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(e) {
    return ha(e.context), (t, o) => C(t.$slots, "default");
  }
}), Cu = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const o = me(e, t), n = ct(), a = E();
    ne(() => {
      a.value = new DocumentFragment();
    });
    const r = E();
    return (l, s) => {
      var u;
      return y(), Q(xe, null, [
        P(i(qe), {
          ref_key: "presenceRef",
          ref: r,
          present: l.forceMount || i(n).open.value
        }, {
          default: g(() => [
            P(xu, Z(te({ ...i(o), ...l.$attrs })), {
              default: g(() => [
                C(l.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }, 8, ["present"]),
        !((u = r.value) != null && u.present) && a.value ? (y(), b(wn, {
          key: 0,
          to: a.value
        }, [
          P(_u, { context: i(n) }, {
            default: g(() => [
              J("div", null, [
                C(l.$slots, "default")
              ])
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"])) : H("", !0)
      ], 64);
    };
  }
}), Au = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(z), F({ "aria-hidden": "" }, t), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ou, Bu] = Y("SelectItem"), Eu = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { disabled: o } = de(t), n = ct(), a = pt($t), { forwardRef: r, currentElement: l } = M(), s = S(() => {
      var h;
      return ((h = n.modelValue) == null ? void 0 : h.value) === t.value;
    }), u = E(!1), d = E(t.textValue ?? ""), p = ue(void 0, "radix-vue-select-item-text");
    async function c(h) {
      await q(), !(h != null && h.defaultPrevented) && (o.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function f(h) {
      var _;
      await q(), !h.defaultPrevented && (o.value ? (_ = a.onItemLeave) == null || _.call(a) : h.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(h) {
      var _;
      await q(), !h.defaultPrevented && h.currentTarget === document.activeElement && ((_ = a.onItemLeave) == null || _.call(a));
    }
    async function m(h) {
      var _;
      await q(), !(h.defaultPrevented || ((_ = a.searchRef) == null ? void 0 : _.value) !== "" && h.key === " ") && (vu.includes(h.key) && c(), h.key === " " && h.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return ne(() => {
      l.value && a.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), Bu({
      value: t.value,
      disabled: o,
      textId: p,
      isSelected: s,
      onItemTextChange: (h) => {
        d.value = ((d.value || (h == null ? void 0 : h.textContent)) ?? "").trim();
      }
    }), (h, _) => (y(), b(i(z), {
      ref: i(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": i(p),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": s.value && u.value,
      "data-state": s.value ? "checked" : "unchecked",
      "aria-disabled": i(o) || void 0,
      "data-disabled": i(o) ? "" : void 0,
      tabindex: i(o) ? void 0 : -1,
      as: h.as,
      "as-child": h.asChild,
      onFocus: _[0] || (_[0] = (x) => u.value = !0),
      onBlur: _[1] || (_[1] = (x) => u.value = !1),
      onPointerup: c,
      onTouchend: _[2] || (_[2] = pe(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: m
    }, {
      default: g(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Pu = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = e, o = Ou();
    return (n, a) => i(o).isSelected.value ? (y(), b(i(z), F({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), [ku, Du] = Y("SelectGroup"), $u = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = ue(void 0, "radix-vue-select-group");
    return Du({ id: o }), (n, a) => (y(), b(i(z), F({ role: "group" }, t, { "aria-labelledby": i(o) }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Su = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    const t = e, o = ku({ id: "" });
    return (n, a) => (y(), b(i(z), F(t, {
      id: i(o).id
    }), {
      default: g(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Tu = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, o = pt($t), n = o.position === "item-aligned" ? Qo() : void 0, { forwardRef: a, currentElement: r } = M();
    ne(() => {
      o == null || o.onViewportChange(r.value);
    });
    const l = E(0);
    function s(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: c } = n ?? {};
      if (p != null && p.value && c != null && c.value) {
        const f = Math.abs(l.value - d.scrollTop);
        if (f > 0) {
          const v = window.innerHeight - Ee * 2, m = Number.parseFloat(
            c.value.style.minHeight
          ), h = Number.parseFloat(c.value.style.height), _ = Math.max(m, h);
          if (_ < v) {
            const x = _ + f, A = Math.min(v, x), B = x - A;
            c.value.style.height = `${A}px`, c.value.style.bottom === "0px" && (d.scrollTop = B > 0 ? B : 0, c.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (y(), Q(xe, null, [
      P(i(z), F({
        ref: i(a),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: s
      }), {
        default: g(() => [
          C(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      P(i(z), {
        as: "style",
        nonce: u.nonce
      }, {
        default: g(() => [
          oe(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), ba = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(e, { emit: t }) {
    const o = t, { injectCollection: n } = lt(), a = n(), r = pt($t), l = E(null);
    function s() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    ee(() => {
      const p = a.value.find(
        (c) => c === document.activeElement
      );
      p == null || p.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    function d() {
      var p;
      (p = r.onItemLeave) == null || p.call(r), l.value === null && (l.value = window.setInterval(() => {
        o("autoScroll");
      }, 50));
    }
    return An(() => s()), (p, c) => {
      var f;
      return y(), b(i(z), F({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = p.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: c[0] || (c[0] = () => {
          s();
        })
      }), {
        default: g(() => [
          C(p.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Iu = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = pt($t), o = t.position === "item-aligned" ? Qo() : void 0, { forwardRef: n, currentElement: a } = M(), r = E(!1);
    return ee((l) => {
      var s, u;
      if ((s = t.viewport) != null && s.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          r.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), U(a, () => {
      a.value && (o == null || o.onScrollButtonChange(a.value));
    }), (l, s) => r.value ? (y(), b(ba, {
      key: 0,
      ref: i(n),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: u, selectedItem: d } = i(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: g(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : H("", !0);
  }
}), Ru = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = pt($t), o = t.position === "item-aligned" ? Qo() : void 0, { forwardRef: n, currentElement: a } = M(), r = E(!1);
    return ee((l) => {
      var s, u;
      if ((s = t.viewport) != null && s.value && (u = t.isPositioned) != null && u.value) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          r.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), U(a, () => {
      a.value && (o == null || o.onScrollButtonChange(a.value));
    }), (l, s) => r.value ? (y(), b(ba, {
      key: 0,
      ref: i(n),
      onAutoScroll: s[0] || (s[0] = () => {
        const { viewport: u, selectedItem: d } = i(t);
        u != null && u.value && d != null && d.value && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: g(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : H("", !0);
  }
}), Mu = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const { forwardRef: t, currentElement: o } = M(), n = ct(), a = qt();
    return ka(() => {
      var r;
      const l = !!Zt((r = a == null ? void 0 : a.default) == null ? void 0 : r.call(a)).length;
      n.onValueElementHasChildrenChange(l);
    }), ne(() => {
      n.valueElement = o;
    }), (r, l) => (y(), b(i(z), {
      ref: i(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: g(() => {
        var s;
        return [
          i(ya)((s = i(n).modelValue) == null ? void 0 : s.value) ? (y(), Q(xe, { key: 0 }, [
            oe(ie(r.placeholder), 1)
          ], 64)) : C(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Fu = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, o) => (y(), b(i(z), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: g(() => [
        C(t.$slots, "default", {}, () => [
          oe("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Lu() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
Lu();
const zu = /* @__PURE__ */ w({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    M();
    const a = le(o, "pressed", n, {
      defaultValue: o.defaultValue,
      passive: o.pressed === void 0
    });
    function r() {
      a.value = !a.value;
    }
    const l = S(() => a.value ? "on" : "off");
    return (s, u) => (y(), b(i(z), {
      type: s.as === "button" ? "button" : void 0,
      "as-child": o.asChild,
      as: s.as,
      "aria-pressed": i(a),
      "data-state": l.value,
      "data-disabled": s.disabled ? "" : void 0,
      disabled: s.disabled,
      onClick: r
    }, {
      default: g(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
}), wa = "tooltip.open";
function Vu(e, t) {
  const o = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), a = Math.abs(t.right - e.x), r = Math.abs(t.left - e.x);
  switch (Math.min(o, n, a, r)) {
    case r:
      return "left";
    case a:
      return "right";
    case o:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Nu(e, t, o = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - o, y: e.y + o },
        { x: e.x + o, y: e.y + o }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - o, y: e.y - o },
        { x: e.x + o, y: e.y - o }
      );
      break;
    case "left":
      n.push(
        { x: e.x + o, y: e.y - o },
        { x: e.x + o, y: e.y + o }
      );
      break;
    case "right":
      n.push(
        { x: e.x - o, y: e.y - o },
        { x: e.x - o, y: e.y + o }
      );
      break;
  }
  return n;
}
function ju(e) {
  const { top: t, right: o, bottom: n, left: a } = e;
  return [
    { x: a, y: t },
    { x: o, y: t },
    { x: o, y: n },
    { x: a, y: n }
  ];
}
function Wu(e, t) {
  const { x: o, y: n } = e;
  let a = !1;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const s = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > n != p > n && o < (d - s) * (n - u) / (p - u) + s && (a = !a);
  }
  return a;
}
function Ku(e) {
  const t = e.slice();
  return t.sort((o, n) => o.x < n.x ? -1 : o.x > n.x ? 1 : o.y < n.y ? -1 : o.y > n.y ? 1 : 0), Hu(t);
}
function Hu(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], l = t[t.length - 2];
      if ((r.x - l.x) * (a.y - l.y) >= (r.y - l.y) * (a.x - l.x))
        t.pop();
      else
        break;
    }
    t.push(a);
  }
  t.pop();
  const o = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n];
    for (; o.length >= 2; ) {
      const r = o[o.length - 1], l = o[o.length - 2];
      if ((r.x - l.x) * (a.y - l.y) >= (r.y - l.y) * (a.x - l.x))
        o.pop();
      else
        break;
    }
    o.push(a);
  }
  return o.pop(), t.length === 1 && o.length === 1 && t[0].x === o[0].x && t[0].y === o[0].y ? t : t.concat(o);
}
const [Jo, Uu] = Y("TooltipProvider"), qu = /* @__PURE__ */ w({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean }
  },
  setup(e) {
    const t = e, { delayDuration: o, skipDelayDuration: n, disableHoverableContent: a, disableClosingTrigger: r } = de(t);
    M();
    const l = E(!0), s = Qn(!1, 300), { start: u, stop: d } = Jn(() => {
      l.value = !0;
    }, n, { immediate: !1 });
    return Uu({
      isOpenDelayed: l,
      delayDuration: o,
      onOpen() {
        d(), l.value = !1;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: s,
      onPointerInTransitChange(p) {
        s.value = p;
      },
      disableHoverableContent: a,
      disableClosingTrigger: r
    }), (p, c) => C(p.$slots, "default");
  }
}), [no, Gu] = Y("TooltipRoot"), Xu = /* @__PURE__ */ w({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    M();
    const a = Jo(), r = S(() => o.disableHoverableContent ?? a.disableHoverableContent.value), l = S(() => o.disableClosingTrigger ?? a.disableClosingTrigger.value), s = S(() => o.delayDuration ?? a.delayDuration.value), u = le(o, "open", n, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    U(u, (x) => {
      a.onClose && (x ? (a.onOpen(), document.dispatchEvent(new CustomEvent(wa))) : a.onClose());
    });
    const d = E(!1), p = E(), c = S(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: v } = Jn(() => {
      d.value = !0, u.value = !0;
    }, s, { immediate: !1 });
    function m() {
      v(), d.value = !1, u.value = !0;
    }
    function h() {
      v(), u.value = !1;
    }
    function _() {
      f();
    }
    return Gu({
      contentId: "",
      open: u,
      stateAttribute: c,
      trigger: p,
      onTriggerChange(x) {
        p.value = x;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? _() : m();
      },
      onTriggerLeave() {
        r.value ? h() : v();
      },
      onOpen: m,
      onClose: h,
      disableHoverableContent: r,
      disableClosingTrigger: l
    }), (x, A) => (y(), b(i(ut), null, {
      default: g(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yu = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, o = no(), n = Jo();
    o.contentId || (o.contentId = ue(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: a, currentElement: r } = M(), l = E(!1), s = E(!1);
    function u() {
      l.value = !1;
    }
    function d() {
      l.value = !0, document.addEventListener("pointerup", u, { once: !0 });
    }
    return ne(() => {
      o.onTriggerChange(r.value);
    }), (p, c) => (y(), b(i(kt), { "as-child": "" }, {
      default: g(() => [
        P(i(z), {
          ref: i(a),
          "aria-describedby": i(o).open.value ? i(o).contentId : void 0,
          "data-state": i(o).stateAttribute.value,
          as: p.as,
          "as-child": t.asChild,
          onPointermove: c[0] || (c[0] = (f) => {
            f.pointerType !== "touch" && !s.value && !i(n).isPointerInTransitRef.value && (i(o).onTriggerEnter(), s.value = !0);
          }),
          onPointerleave: c[1] || (c[1] = (f) => {
            i(o).onTriggerLeave(), s.value = !1;
          }),
          onPointerdown: d,
          onFocus: c[2] || (c[2] = () => {
            l.value || i(o).onOpen();
          }),
          onBlur: c[3] || (c[3] = (f) => i(o).onClose()),
          onClick: c[4] || (c[4] = () => {
            i(o).disableClosingTrigger.value || i(o).onClose();
          })
        }, {
          default: g(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), xa = /* @__PURE__ */ w({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = no(), { forwardRef: r } = M(), l = qt(), s = S(() => {
      var p;
      return (p = l.default) == null ? void 0 : p.call(l);
    }), u = S(() => {
      var p;
      if (o.ariaLabel)
        return o.ariaLabel;
      let c = "";
      function f(v) {
        typeof v.children == "string" ? c += v.children : Array.isArray(v.children) && v.children.forEach((m) => f(m));
      }
      return (p = s.value) == null || p.forEach((v) => f(v)), c;
    }), d = S(() => {
      const { ariaLabel: p, ...c } = o;
      return c;
    });
    return ne(() => {
      Ht(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(a.trigger.value) && a.onClose();
      }), Ht(window, wa, a.onClose);
    }), (p, c) => (y(), b(i(st), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: c[0] || (c[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var v;
        i(a).disableClosingTrigger.value && (v = i(a).trigger.value) != null && v.contains(f.target) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = pe(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => i(a).onClose())
    }, {
      default: g(() => [
        P(i(ot), F({
          ref: i(r),
          "data-state": i(a).stateAttribute.value
        }, { ...p.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: g(() => [
            C(p.$slots, "default"),
            P(i(oo), {
              id: i(a).contentId,
              role: "tooltip"
            }, {
              default: g(() => [
                oe(ie(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }));
  }
}), Qu = /* @__PURE__ */ w({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(e) {
    const t = it(e), { forwardRef: o, currentElement: n } = M(), { trigger: a, onClose: r } = no(), l = Jo(), s = E(null);
    function u() {
      s.value = null, l.onPointerInTransitChange(!1);
    }
    function d(p, c) {
      const f = p.currentTarget, v = { x: p.clientX, y: p.clientY }, m = Vu(v, f.getBoundingClientRect()), h = Nu(v, m), _ = ju(c.getBoundingClientRect()), x = Ku([...h, ..._]);
      s.value = x, l.onPointerInTransitChange(!0);
    }
    return ee((p) => {
      if (a.value && n.value) {
        const c = (v) => d(v, n.value), f = (v) => d(v, a.value);
        a.value.addEventListener("pointerleave", c), n.value.addEventListener("pointerleave", f), p(() => {
          var v, m;
          (v = a.value) == null || v.removeEventListener("pointerleave", c), (m = n.value) == null || m.removeEventListener("pointerleave", f);
        });
      }
    }), ee((p) => {
      if (s.value) {
        const c = (f) => {
          var v, m;
          if (!s.value)
            return;
          const h = f.target, _ = { x: f.clientX, y: f.clientY }, x = ((v = a.value) == null ? void 0 : v.contains(h)) || ((m = n.value) == null ? void 0 : m.contains(h)), A = !Wu(_, s.value);
          x ? u() : A && (u(), r());
        };
        document.addEventListener("pointermove", c), p(() => document.removeEventListener("pointermove", c));
      }
    }), (p, c) => (y(), b(xa, F({ ref: i(o) }, i(t)), {
      default: g(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ju = /* @__PURE__ */ w({
  __name: "TooltipContent",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = no(), r = me(o, n), { forwardRef: l } = M();
    return (s, u) => i(a).open.value ? (y(), b(be(i(a).disableHoverableContent.value ? xa : Qu), F({
      key: 0,
      ref: i(l)
    }, i(r)), {
      default: g(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16)) : H("", !0);
  }
}), Zu = /* @__PURE__ */ w({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return M(), (o, n) => (y(), b(i(to), Z(te(t)), {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _a = {
  body: "text-body",
  caption: "text-caption",
  heading: "text-heading",
  hero: "text-hero",
  subtext: "text-subtext",
  subtitle: "text-subtitle",
  title: "text-title"
}, ed = Yt({
  base: null,
  defaultVariants: {
    variant: "body"
  },
  variants: {
    variant: _a
  }
}), Yd = Object.keys(_a), Re = /* @__PURE__ */ w({
  __name: "AppText",
  props: {
    as: { default: "p" },
    variant: {}
  },
  setup(e) {
    const t = e, o = S(() => {
      const a = [];
      switch (t.variant) {
        case "hero":
          a.push("text-hero font-bold");
          break;
        case "title":
          a.push("text-title font-semibold text-foreground");
          break;
        case "subtitle":
          a.push("text-subtitle text-foreground");
          break;
        case "heading":
          a.push("text-heading text-foreground");
          break;
        case "body":
          a.push("text-body text-foreground");
          break;
        case "subtext":
          a.push("text-subtext text-foreground");
          break;
        case "caption":
          a.push("text-caption text-foreground");
          break;
      }
      return a.join(" ");
    }), n = Ia();
    return (a, r) => (y(), b(be(a.as), {
      class: re(
        i(ed)({
          variant: t.variant,
          class: [o.value, i(n).class]
        })
      )
    }, {
      default: g(() => [
        C(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), td = { class: "flex items-center gap-x-3" }, od = { class: "w-4" }, nd = /* @__PURE__ */ w({
  __name: "AppComboboxItem",
  props: {
    isDisabled: { type: Boolean, default: !1 },
    value: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(fs), {
      disabled: o.isDisabled,
      value: t.value,
      class: "cursor-default rounded-md px-2 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[highlighted]:bg-muted-background data-[disabled]:opacity-50"
    }, {
      default: g(() => [
        J("div", td, [
          J("div", od, [
            P(i(vs), null, {
              default: g(() => [
                P(se, {
                  class: "text-muted-foreground",
                  icon: "checkmark",
                  size: "default"
                })
              ]),
              _: 1
            })
          ]),
          P(Re, { variant: "subtext" }, {
            default: g(() => [
              C(o.$slots, "default")
            ]),
            _: 3
          })
        ])
      ]),
      _: 3
    }, 8, ["disabled", "value"]));
  }
}), ad = { class: "relative" }, rd = { key: 0 }, Qd = /* @__PURE__ */ w({
  __name: "AppCombobox",
  props: {
    emptyText: { default: null },
    isInvalid: { type: Boolean, default: !1 },
    modelValue: {},
    options: {},
    placeholder: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = S({
      get: () => o.modelValue ?? void 0,
      set: (f) => {
        n("update:modelValue", f ?? null);
      }
    }), { t: r } = $o(), l = E(!1), s = S(() => Array.isArray(a.value)), u = S(() => s.value ? a.value.map(c).join(", ") : o.placeholder ?? void 0), d = S(() => s.value ? a.value.length === 0 : a.value === void 0);
    function p(f, v) {
      return f.filter((m) => {
        const h = o.options.find((_) => _.value === m) ?? null;
        return h === null ? !1 : h.label.toLowerCase().includes(v.toLowerCase());
      });
    }
    function c(f) {
      const v = o.options.find((m) => m.value === f) ?? null;
      return v === null ? "" : v.label;
    }
    return (f, v) => (y(), Q("div", null, [
      P(i(Qi), {
        modelValue: a.value,
        "onUpdate:modelValue": v[0] || (v[0] = (m) => a.value = m),
        open: l.value,
        "onUpdate:open": v[1] || (v[1] = (m) => l.value = m),
        "display-value": c,
        "filter-function": p,
        multiple: s.value
      }, {
        default: g(() => [
          P(i(Zi), null, {
            default: g(() => [
              J("div", ad, [
                P(i(Ji), {
                  class: re([{
                    "border-input-border focus-within:ring-ring": !o.isInvalid,
                    "border-destructive focus-within:ring-destructive": o.isInvalid,
                    "placeholder:text-input-placeholder": d.value && !s.value,
                    "placeholder:text-input-foreground": !d.value && s.value,
                    "focus:placeholder:text-input-placeholder": s.value && !d.value
                  }, "h-10 w-full truncate rounded-input border bg-input pl-3 pr-9 text-sm outline-none ring-offset-background duration-200 focus-visible:ring-2 focus-visible:ring-offset-2"]),
                  placeholder: u.value,
                  tabindex: "0"
                }, null, 8, ["class", "placeholder"]),
                P(i(es), {
                  "as-child": !0,
                  class: "absolute right-1 top-1/2 box-content -translate-y-1/2 p-2 outline-none"
                }, {
                  default: g(() => [
                    P(se, {
                      class: "text-muted-foreground",
                      icon: "chevronDown",
                      size: "default"
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          P(i(hs), null, {
            default: g(() => [
              P(ko, {
                "enter-active-class": "duration-150",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: g(() => [
                  l.value ? (y(), Q("div", rd, [
                    P(i(is), {
                      "force-mount": !0,
                      class: "combobox-content relative z-popover overflow-hidden rounded-popover border border-solid border-border bg-background shadow-popover-shadow",
                      position: "popper"
                    }, {
                      default: g(() => [
                        P(i(us), { class: "max-h-[25rem] p-1.5" }, {
                          default: g(() => [
                            P(i(ss), null, {
                              default: g(() => [
                                P(Re, {
                                  variant: "subtext",
                                  class: "p-2"
                                }, {
                                  default: g(() => [
                                    oe(ie(o.emptyText ?? i(r)("components.combobox.empty")), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            (y(!0), Q(xe, null, xt(o.options, (m) => (y(), b(nd, {
                              key: m.label,
                              value: m.value
                            }, {
                              default: g(() => [
                                oe(ie(m.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]))), 128))
                          ]),
                          _: 1
                        }),
                        P(i(gs))
                      ]),
                      _: 1
                    })
                  ])) : H("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "open", "multiple"])
    ]));
  }
}), Jd = /* @__PURE__ */ w({
  __name: "AppComboboxDivider",
  setup(e) {
    return (t, o) => (y(), b(i(ms), { class: "my-1 h-px bg-border" }));
  }
}), Zd = /* @__PURE__ */ w({
  __name: "AppComboboxGroup",
  props: {
    label: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(os), null, {
      default: g(() => [
        P(i(ns), { class: "px-2 py-1" }, {
          default: g(() => [
            P(Re, { variant: "subtext" }, {
              default: g(() => [
                oe(ie(t.label), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        C(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ld = /* @__PURE__ */ w({
  __name: "AppDialogCloseButton",
  setup(e) {
    const { t } = $o();
    return (o, n) => (y(), b(i(Di), { "as-child": !0 }, {
      default: g(() => [
        C(o.$slots, "default", {}, () => [
          P(Vn, {
            label: i(t)("shared.close"),
            icon: "close",
            "icon-size": "default",
            variant: "ghost"
          }, null, 8, ["label"])
        ])
      ]),
      _: 3
    }));
  }
}), id = /* @__PURE__ */ w({
  __name: "AppDialogContent",
  props: {
    accessibleDescription: {},
    accessibleTitle: {},
    hideCloseButton: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Ei), {
      "force-mount": !0,
      class: "fixed left-1/2 top-1/2 z-dialog -translate-x-1/2 -translate-y-1/2 rounded-dialog bg-background shadow-dialog-shadow outline-none"
    }, {
      default: g(() => [
        J("div", null, [
          P(i(oo), null, {
            default: g(() => [
              P(i($i), null, {
                default: g(() => [
                  oe(ie(t.accessibleTitle), 1)
                ]),
                _: 1
              }),
              P(i(Si), null, {
                default: g(() => [
                  oe(ie(t.accessibleDescription), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          C(o.$slots, "content"),
          o.hideCloseButton ? H("", !0) : (y(), b(ld, {
            key: 0,
            class: "!absolute right-2 top-2"
          }))
        ])
      ]),
      _: 3
    }));
  }
}), sd = /* @__PURE__ */ w({
  __name: "AppDialogOverlay",
  setup(e) {
    return (t, o) => (y(), b(i(ki), { class: "dialog-overlay fixed inset-0 z-dialog-overlay bg-black/30 backdrop-blur-sm" }));
  }
}), ec = /* @__PURE__ */ w({
  __name: "AppDialog",
  props: /* @__PURE__ */ Nt({
    accessibleDescription: {},
    accessibleTitle: {},
    animateFromTrigger: { type: Boolean, default: !1 },
    hideCloseButton: { type: Boolean, default: !1 },
    triggerId: { default: null }
  }, {
    isOpen: { type: Boolean, default: !1 },
    isOpenModifiers: {}
  }),
  emits: ["update:isOpen"],
  setup(e) {
    const t = e, o = Do(e, "isOpen"), n = E(!1), a = document.startViewTransition !== void 0;
    if (t.animateFromTrigger && t.triggerId === null)
      throw new Error("[AppDialog] The `triggerId` prop is required when using the `animateFromTrigger` prop");
    function r() {
      return document.querySelector(`#${t.triggerId}`) ?? null;
    }
    function l() {
      const f = document.querySelector('[role="dialog"]');
      if (f === null)
        throw new Error("[AppDialog] No dialog element found");
      return f;
    }
    function s() {
      const f = r();
      if (f === null)
        throw new Error("[AppDialog] No trigger element found");
      f.style.viewTransitionName = "dialog", document.startViewTransition(async () => {
        n.value = !0, await q(), f.style.viewTransitionName = "", f.style.opacity = "0";
        const m = l();
        m.style.viewTransitionName = "dialog";
      }).finished.finally(() => {
        const m = l();
        m.style.viewTransitionName = "";
      });
    }
    function u() {
      const f = r();
      if (f === null)
        throw new Error("[AppDialog] No trigger element found");
      const v = l();
      v.style.viewTransitionName = "dialog-leave", document.startViewTransition(() => {
        v.style.viewTransitionName = "", f.style.viewTransitionName = "dialog-leave", f.style.opacity = "1", n.value = !1;
      }).finished.finally(() => {
        f.style.viewTransitionName = "";
      });
    }
    function d() {
      a && t.animateFromTrigger ? s() : n.value = !0;
    }
    function p() {
      if (t.triggerId === null)
        return;
      const f = r();
      document.body.contains(f) && f !== null && f.focus();
    }
    function c() {
      a && t.animateFromTrigger ? u() : n.value = !1, setTimeout(() => {
        p();
      }, t.animateFromTrigger ? 200 : 0);
    }
    return U(o, (f) => {
      f ? d() : c();
    }), (f, v) => (y(), b(i(ai), {
      open: o.value,
      "onUpdate:open": v[0] || (v[0] = (m) => o.value = m),
      modal: n.value
    }, {
      default: g(() => [
        P(i(ri), null, {
          default: g(() => [
            P(sd),
            (y(), b(be(f.animateFromTrigger ? "div" : ko), {
              "enter-active-class": "duration-300 ease-dialog",
              "enter-from-class": "opacity-0 scale-110",
              "leave-active-class": "duration-300 ease-dialog",
              "leave-to-class": "opacity-0 scale-110"
            }, {
              default: g(() => [
                n.value ? (y(), b(id, {
                  key: 0,
                  "accessible-title": t.accessibleTitle,
                  "accessible-description": t.accessibleDescription,
                  "hide-close-button": t.hideCloseButton
                }, {
                  content: g(() => [
                    C(f.$slots, "content")
                  ]),
                  _: 3
                }, 8, ["accessible-title", "accessible-description", "hide-close-button"])) : H("", !0)
              ]),
              _: 3
            }))
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["open", "modal"]));
  }
});
function Ca() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
const gt = E([]);
function ud() {
  return {
    dialogs: gt
  };
}
function tc({
  animateFromTrigger: e = !1,
  component: t
}) {
  const o = `dialog-${Ca()}`;
  function n() {
    gt.value = gt.value.filter((s) => s.id !== o);
  }
  async function a(s) {
    const u = await l(s);
    gt.value.push(u.value), setTimeout(() => {
      u.value.isOpen = !0;
    });
  }
  function r() {
    const s = gt.value.find((u) => u.id === o) ?? null;
    s !== null && (s.isOpen = !1, setTimeout(n, 500));
  }
  async function l(s) {
    const u = await t(), d = S(() => et(
      u.default,
      Bo({
        ...s,
        animateFromTrigger: e,
        triggerId: o
      })
    ));
    return E({
      component: mo(d),
      id: o,
      isOpen: !1
    });
  }
  return {
    closeDialog: r,
    dialogId: o,
    openDialog: a
  };
}
const oc = /* @__PURE__ */ w({
  __name: "AppDialogContainer",
  setup(e) {
    const { dialogs: t } = ud();
    return (o, n) => (y(!0), Q(xe, null, xt(i(t), (a) => (y(), b(be(a.component), {
      key: a.id,
      "is-open": a.isOpen,
      "onUpdate:isOpen": (r) => a.isOpen = r
    }, null, 40, ["is-open", "onUpdate:isOpen"]))), 128));
  }
}), dd = /* @__PURE__ */ J("div", { class: "relative z-10 -mb-4 size-4 -translate-y-px overflow-hidden" }, [
  /* @__PURE__ */ J("div", { class: "size-4 -translate-y-2.5 rotate-45 rounded-sm border border-solid border-border bg-popover" })
], -1), cd = /* @__PURE__ */ w({
  __name: "AppDropdownMenuArrow",
  setup(e) {
    return (t, o) => (y(), b(i(Ks), { "as-child": !0 }, {
      default: g(() => [
        dd
      ]),
      _: 1
    }));
  }
}), pd = /* @__PURE__ */ w({
  __name: "AppDropdownMenuContent",
  props: {
    align: {},
    side: {},
    sideOffset: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Ws), {
      align: t.align,
      "arrow-padding": 12,
      side: t.side,
      "side-offset": t.sideOffset,
      class: "popover-content z-popover max-h-96 min-w-40 max-w-60 overflow-y-auto rounded-popover border border-solid border-border bg-popover shadow-popover-shadow"
    }, {
      default: g(() => [
        C(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["align", "side", "side-offset"]));
  }
}), nc = /* @__PURE__ */ w({
  __name: "AppDropdownMenu",
  props: {
    align: { default: "center" },
    hasArrow: { type: Boolean, default: !1 },
    offset: { default: 0 },
    side: { default: "bottom" }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Vs), null, {
      default: g(() => [
        P(i(Ns), { "as-child": !0 }, {
          default: g(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        }),
        P(i(js), null, {
          default: g(() => [
            P(pd, {
              align: t.align,
              side: t.side,
              "side-offset": t.offset
            }, {
              default: g(() => [
                C(o.$slots, "content"),
                o.hasArrow ? (y(), b(cd, { key: 0 })) : H("", !0)
              ]),
              _: 3
            }, 8, ["align", "side", "side-offset"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), ac = /* @__PURE__ */ w({
  __name: "AppDropdownMenuDivider",
  setup(e) {
    return (t, o) => (y(), b(i(qs), { class: "h-px bg-border" }));
  }
}), rc = /* @__PURE__ */ w({
  __name: "AppDropdownMenuGroup",
  setup(e) {
    return (t, o) => (y(), b(i(Us), { class: "p-1" }, {
      default: g(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), fd = { class: "flex items-center gap-x-3 overflow-hidden" }, lc = /* @__PURE__ */ w({
  __name: "AppDropdownMenuItem",
  props: {
    icon: { default: null }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function a() {
      n("select");
    }
    return (r, l) => (y(), b(i(Hs), {
      class: "group cursor-default overflow-hidden rounded-md p-2 outline-none focus:bg-muted-background",
      onSelect: a
    }, {
      default: g(() => [
        J("div", fd, [
          o.icon !== null ? (y(), b(se, {
            key: 0,
            icon: o.icon,
            class: "shrink-0 text-muted-foreground group-focus:text-foreground",
            size: "default"
          }, null, 8, ["icon"])) : H("", !0),
          P(Re, {
            class: "truncate group-focus:text-foreground",
            variant: "subtext"
          }, {
            default: g(() => [
              C(r.$slots, "default")
            ]),
            _: 3
          })
        ])
      ]),
      _: 3
    }));
  }
}), ic = /* @__PURE__ */ w({
  __name: "AppDropdownMenuLabel",
  props: {
    label: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Gs), { class: "px-2 py-1 text-muted-foreground" }, {
      default: g(() => [
        P(Re, { variant: "subtext" }, {
          default: g(() => [
            oe(ie(t.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), sc = /* @__PURE__ */ w({
  __name: "AppDropdownMenuSub",
  setup(e) {
    return (t, o) => (y(), b(i(Xs), null, {
      default: g(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), uc = /* @__PURE__ */ w({
  __name: "AppDropdownMenuSubContent",
  setup(e) {
    return (t, o) => (y(), b(i(Ys), { class: "popover-content min-w-40 max-w-60 overflow-hidden rounded-popover border border-solid border-border bg-popover shadow-popover-shadow" }, {
      default: g(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), vd = { class: "flex items-center justify-between gap-x-3 overflow-hidden" }, md = { class: "flex items-center gap-x-3 overflow-hidden" }, dc = /* @__PURE__ */ w({
  __name: "AppDropdownMenuSubTrigger",
  props: {
    icon: { default: null }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Qs), { class: "group cursor-default overflow-hidden rounded-md p-2 py-1.5 outline-none focus:bg-muted-background" }, {
      default: g(() => [
        J("div", vd, [
          J("div", md, [
            t.icon !== null ? (y(), b(se, {
              key: 0,
              icon: t.icon,
              class: "shrink-0 text-muted-foreground group-focus:text-foreground",
              size: "default"
            }, null, 8, ["icon"])) : H("", !0),
            P(Re, {
              class: "truncate group-focus:text-foreground",
              variant: "subtext"
            }, {
              default: g(() => [
                C(o.$slots, "default")
              ]),
              _: 3
            })
          ]),
          P(se, {
            class: "shrink-0 text-muted-foreground",
            icon: "chevronRight",
            size: "sm"
          })
        ])
      ]),
      _: 3
    }));
  }
}), gd = /* @__PURE__ */ w({
  __name: "AppPopoverCloseButton",
  setup(e) {
    const { t } = $o();
    return (o, n) => (y(), b(i(iu), { "as-child": !0 }, {
      default: g(() => [
        P(Vn, {
          label: i(t)("shared.close"),
          variant: "ghost",
          icon: "close",
          "icon-size": "default"
        }, null, 8, ["label"])
      ]),
      _: 1
    }));
  }
}), hd = /* @__PURE__ */ J("div", { class: "relative z-popover -mb-4 h-4 w-10 overflow-hidden" }, [
  /* @__PURE__ */ J("div", { class: "absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow" })
], -1), cc = /* @__PURE__ */ w({
  __name: "AppPopover",
  props: {
    align: { default: "center" },
    hideArrow: { type: Boolean, default: !1 },
    offset: { default: 10 },
    side: { default: "top" }
  },
  setup(e) {
    const t = e;
    if (qt().default === void 0)
      throw new Error("[POPOVER] The `trigger` slot is required.");
    return (n, a) => (y(), b(i(eu), null, {
      default: g(() => [
        P(i(tu), { "as-child": !0 }, {
          default: g(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }),
        P(i(ou), null, {
          default: g(() => [
            P(i(ru), {
              align: t.align,
              "has-arrow": !t.hideArrow,
              side: t.side,
              "side-offset": t.offset,
              class: "popover-content rounded-popover bg-popover shadow-popover-shadow"
            }, {
              default: g(() => [
                P(gd, { class: "absolute right-0 top-0" }),
                C(n.$slots, "content"),
                t.hideArrow ? H("", !0) : (y(), b(i(lu), {
                  key: 0,
                  "as-child": !0
                }, {
                  default: g(() => [
                    hd
                  ]),
                  _: 1
                }))
              ]),
              _: 3
            }, 8, ["align", "has-arrow", "side", "side-offset"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), yd = { class: "flex items-center gap-x-3" }, bd = { class: "w-4" }, wd = /* @__PURE__ */ w({
  __name: "AppSelectItem",
  props: {
    isDisabled: { type: Boolean, default: !1 },
    value: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Eu), {
      disabled: o.isDisabled,
      value: t.value,
      class: "cursor-default rounded-md px-2 py-1.5 outline-none hover:bg-muted-background focus:bg-muted-background data-[disabled]:cursor-not-allowed data-[disabled]:bg-background data-[disabled]:opacity-50"
    }, {
      default: g(() => [
        J("div", yd, [
          J("div", bd, [
            P(i(Pu), null, {
              default: g(() => [
                P(se, {
                  class: "text-muted-foreground",
                  icon: "checkmark",
                  size: "default"
                })
              ]),
              _: 1
            })
          ]),
          P(Re, { variant: "subtext" }, {
            default: g(() => [
              C(o.$slots, "default")
            ]),
            _: 3
          })
        ])
      ]),
      _: 3
    }, 8, ["disabled", "value"]));
  }
}), xd = /* @__PURE__ */ w({
  __name: "AppSelectScrollDownButton",
  setup(e) {
    return (t, o) => (y(), b(i(Ru), { class: "absolute bottom-0 z-10 flex w-full justify-center bg-gradient-to-b from-transparent to-white p-2" }, {
      default: g(() => [
        P(se, {
          class: "text-muted-foreground",
          icon: "chevronDown",
          size: "default"
        })
      ]),
      _: 1
    }));
  }
}), _d = /* @__PURE__ */ w({
  __name: "AppSelectScrollUpButton",
  setup(e) {
    return (t, o) => (y(), b(i(Iu), { class: "absolute top-0 z-10 flex w-full justify-center bg-gradient-to-t from-transparent to-white p-2" }, {
      default: g(() => [
        P(se, {
          class: "text-muted-foreground",
          icon: "chevronUp",
          size: "default"
        })
      ]),
      _: 1
    }));
  }
}), Cd = { key: 0 }, Ad = /* @__PURE__ */ w({
  __name: "AppSelect",
  props: {
    id: { default: null },
    isInvalid: { type: Boolean, default: !1 },
    modelValue: {},
    options: {},
    placeholder: { default: null }
  },
  emits: ["blur", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, a = E(!1), r = S({
      get: () => o.modelValue ?? void 0,
      set: (d) => {
        n("update:modelValue", d ?? null);
      }
    }), l = S(() => {
      const d = o.options.find((p) => p.value === r.value) ?? null;
      return (d == null ? void 0 : d.label) ?? null;
    });
    function s() {
      n("blur");
    }
    function u() {
      a.value || s();
    }
    return (d, p) => (y(), Q("div", null, [
      P(i(pu), {
        modelValue: r.value,
        "onUpdate:modelValue": p[0] || (p[0] = (c) => r.value = c),
        open: a.value,
        "onUpdate:open": p[1] || (p[1] = (c) => a.value = c)
      }, {
        default: g(() => [
          P(i(mu), {
            id: d.id,
            class: re([{
              "border-input-border focus-visible:ring-ring": !o.isInvalid,
              "border-destructive focus-visible:ring-destructive": o.isInvalid
            }, "flex h-10 w-full items-center justify-between rounded-input border border-solid bg-input px-3 ring-offset-background duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"]),
            onBlur: u
          }, {
            default: g(() => [
              P(i(Mu), {
                class: re([{
                  "text-input-placeholder": r.value === void 0
                }, "truncate text-sm"]),
                placeholder: d.placeholder ?? void 0
              }, {
                default: g(() => [
                  oe(ie(l.value), 1)
                ]),
                _: 1
              }, 8, ["class", "placeholder"]),
              P(i(Fu), { "as-child": !0 }, {
                default: g(() => [
                  P(se, {
                    class: "text-muted-foreground",
                    icon: "chevronDown",
                    size: "default"
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["id", "class"]),
          P(i(gu), null, {
            default: g(() => [
              P(ko, {
                "enter-active-class": "duration-150",
                "enter-from-class": "opacity-0",
                "enter-to-class": "opacity-100",
                "leave-active-class": "duration-150",
                "leave-from-class": "opacity-100",
                "leave-to-class": "opacity-0"
              }, {
                default: g(() => [
                  a.value ? (y(), Q("div", Cd, [
                    P(i(Cu), {
                      "force-mount": !0,
                      align: "center",
                      class: "select-content relative z-popover overflow-hidden rounded-popover bg-background shadow-popover-shadow",
                      position: "popper"
                    }, {
                      default: g(() => [
                        P(_d),
                        P(i(Tu), { class: "max-h-[25rem] p-1.5" }, {
                          default: g(() => [
                            (y(!0), Q(xe, null, xt(o.options, (c) => (y(), b(wd, {
                              key: c.label,
                              value: c.value
                            }, {
                              default: g(() => [
                                oe(ie(c.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]))), 128))
                          ]),
                          _: 1
                        }),
                        P(xd)
                      ]),
                      _: 1
                    })
                  ])) : H("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "open"])
    ]));
  }
}), pc = /* @__PURE__ */ w({
  __name: "AppSelectDivider",
  setup(e) {
    return (t, o) => (y(), b(i(Au), { class: "my-1 h-px bg-border" }));
  }
}), fc = /* @__PURE__ */ w({
  __name: "AppSelectGroup",
  props: {
    label: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i($u), null, {
      default: g(() => [
        P(i(Su), { class: "px-2 py-1" }, {
          default: g(() => [
            P(Re, { variant: "subtext" }, {
              default: g(() => [
                oe(ie(t.label), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        C(o.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Od = {};
function Bd(e, t) {
  return y(), Q("div");
}
const Ed = /* @__PURE__ */ To(Od, [["render", Bd]]), Pd = {}, kd = { class: "space-y-0.5" };
function Dd(e, t) {
  return y(), Q("div", kd, [
    C(e.$slots, "default")
  ]);
}
const $d = /* @__PURE__ */ To(Pd, [["render", Dd]]), Sd = /* @__PURE__ */ w({
  __name: "FormLabel",
  props: {
    for: {},
    isDisabled: { type: Boolean, default: !1 },
    isInvalid: { type: Boolean, default: !1 },
    isRequired: { type: Boolean, default: !1 },
    label: {}
  },
  setup(e) {
    const t = e, o = S(() => t.isRequired ? `${t.label} *` : t.label);
    return (n, a) => (y(), b(i(Js), {
      for: t.for
    }, {
      default: g(() => [
        J("span", {
          class: re([{
            "text-destructive": t.isInvalid,
            "text-muted-foreground": !t.isInvalid,
            "opacity-50": t.isDisabled
          }, "text-sm"])
        }, ie(o.value), 3)
      ]),
      _: 1
    }, 8, ["for"]));
  }
}), Td = /* @__PURE__ */ w({
  __name: "FormInputContainer",
  props: {
    errors: {},
    isRequired: { type: Boolean },
    isTouched: { type: Boolean },
    label: {}
  },
  setup(e) {
    const t = e, o = `form-input-${Ca()}`, n = S(() => t.isTouched && t.errors !== null);
    return (a, r) => (y(), b($d, null, {
      default: g(() => [
        P(Sd, {
          for: o,
          label: t.label,
          "is-required": t.isRequired,
          "is-invalid": n.value
        }, null, 8, ["label", "is-required", "is-invalid"]),
        C(a.$slots, "default", { isInvalid: n.value }),
        P(Ed, {
          "is-invalid": n.value,
          errors: t.errors
        }, null, 8, ["is-invalid", "errors"])
      ]),
      _: 3
    }));
  }
}), vc = /* @__PURE__ */ w({
  __name: "FormSelect",
  props: /* @__PURE__ */ Nt({
    errors: {},
    isRequired: { type: Boolean, default: !1 },
    label: {},
    modelValue: {},
    options: {},
    placeholder: { default: null }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Nt(["blur"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, a = Do(e, "modelValue");
    function r() {
      n("blur");
    }
    return (l, s) => (y(), b(Td, {
      errors: o.errors,
      "is-required": o.isRequired,
      "is-touched": !1,
      placeholder: l.placeholder,
      label: o.label
    }, {
      default: g(({ isInvalid: u }) => [
        P(Ad, {
          modelValue: a.value,
          "onUpdate:modelValue": s[0] || (s[0] = (d) => a.value = d),
          "is-invalid": u,
          options: o.options,
          "is-required": o.isRequired,
          placeholder: o.placeholder,
          onBlur: r
        }, null, 8, ["modelValue", "is-invalid", "options", "is-required", "placeholder"])
      ]),
      _: 1
    }, 8, ["errors", "is-required", "placeholder", "label"]));
  }
}), mc = /* @__PURE__ */ w({
  __name: "AppToggle",
  props: /* @__PURE__ */ Nt({
    isDisabled: { type: Boolean, default: !1 }
  }, {
    isToggled: { type: Boolean, required: !0 },
    isToggledModifiers: {}
  }),
  emits: ["update:isToggled"],
  setup(e) {
    const t = e, o = Do(e, "isToggled");
    function n() {
      o.value = !o.value;
    }
    return (a, r) => (y(), b(i(zu), {
      pressed: o.value,
      "onUpdate:pressed": r[0] || (r[0] = (l) => o.value = l),
      "as-child": !0,
      disabled: t.isDisabled,
      onClick: n
    }, {
      default: g(() => [
        C(a.$slots, "default", {
          isToggled: o.value,
          isDisabled: t.isDisabled
        })
      ]),
      _: 3
    }, 8, ["pressed", "disabled"]));
  }
}), Id = /* @__PURE__ */ J("div", { class: "relative z-10 -mb-4 h-4 w-10 overflow-hidden" }, [
  /* @__PURE__ */ J("div", { class: "absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow" })
], -1), Rd = /* @__PURE__ */ w({
  __name: "AppTooltipArrow",
  setup(e) {
    return (t, o) => (y(), b(i(Zu), { "as-child": !0 }, {
      default: g(() => [
        Id
      ]),
      _: 1
    }));
  }
}), Md = /* @__PURE__ */ w({
  __name: "AppTooltipContent",
  props: {
    align: {},
    hasArrow: { type: Boolean },
    offset: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(Ju), {
      align: t.align,
      "arrow-padding": 12,
      "side-offset": t.offset,
      class: "popover-content z-popover rounded-popover border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-popover-shadow"
    }, {
      default: g(() => [
        C(o.$slots, "default"),
        t.hasArrow ? (y(), b(Rd, { key: 0 })) : H("", !0)
      ]),
      _: 3
    }, 8, ["align", "side-offset"]));
  }
}), Fd = /* @__PURE__ */ w({
  __name: "AppTooltipProvider",
  props: {
    delayDuration: {},
    disableCloseOnTriggerClick: { type: Boolean },
    disableHoverableContent: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (y(), b(i(qu), {
      "delay-duration": t.delayDuration,
      "disable-closing-trigger": t.disableCloseOnTriggerClick,
      "disable-hoverable-content": t.disableHoverableContent
    }, {
      default: g(() => [
        P(i(Xu), null, {
          default: g(() => [
            C(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["delay-duration", "disable-closing-trigger", "disable-hoverable-content"]));
  }
}), gc = /* @__PURE__ */ w({
  __name: "AppTooltip",
  props: {
    align: { default: "center" },
    delayDuration: { default: 0 },
    disableCloseOnTriggerClick: { type: Boolean, default: !1 },
    disableHoverableContent: { type: Boolean, default: !1 },
    hideArrow: { type: Boolean, default: !1 },
    label: { default: null },
    offset: { default: 10 },
    side: { default: "top" }
  },
  setup(e) {
    const t = e, o = qt();
    if (t.label === null && o.content === void 0)
      throw new Error("[TOOLTIP] Either the `label` prop or `content` slot must be provided.");
    return (n, a) => (y(), b(Fd, {
      "delay-duration": t.delayDuration,
      "disable-close-on-trigger-click": t.disableCloseOnTriggerClick,
      "disable-hoverable-content": t.disableHoverableContent
    }, {
      default: g(() => [
        P(i(Yu), { "as-child": !0 }, {
          default: g(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }),
        P(Md, {
          align: t.align,
          "has-arrow": !t.hideArrow,
          offset: t.offset,
          side: t.side
        }, {
          default: g(() => [
            C(n.$slots, "content", {}, () => [
              P(Re, {
                class: "max-w-xs p-2 text-center text-popover-foreground",
                variant: "subtext"
              }, {
                default: g(() => [
                  oe(ie(t.label), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 3
        }, 8, ["align", "has-arrow", "offset", "side"])
      ]),
      _: 3
    }, 8, ["delay-duration", "disable-close-on-trigger-click", "disable-hoverable-content"]));
  }
});
export {
  xd as A,
  _d as B,
  vc as C,
  Re as D,
  mc as E,
  gc as F,
  tc as G,
  Nd as H,
  zn as I,
  Hd as J,
  Fn as K,
  wr as L,
  Kd as M,
  _a as N,
  ed as O,
  Yd as P,
  To as _,
  kr as a,
  Vn as b,
  Ud as c,
  Qd as d,
  Jd as e,
  Zd as f,
  nd as g,
  ec as h,
  ld as i,
  oc as j,
  nc as k,
  cd as l,
  pd as m,
  ac as n,
  rc as o,
  lc as p,
  ic as q,
  sc as r,
  uc as s,
  dc as t,
  se as u,
  cc as v,
  Ad as w,
  pc as x,
  fc as y,
  wd as z
};
