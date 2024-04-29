import "./chunk-TDUMLE5V.js";

// ../../node_modules/.pnpm/maska@2.1.11/node_modules/maska/dist/maska.js
var S = Object.defineProperty;
var P = (n, t, s) => t in n ? S(n, t, { enumerable: true, configurable: true, writable: true, value: s }) : n[t] = s;
var m = (n, t, s) => (P(n, typeof t != "symbol" ? t + "" : t, s), s);
var R = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
var O = class {
  constructor(t = {}) {
    m(this, "opts", {});
    m(this, "memo", /* @__PURE__ */ new Map());
    const s = { ...t };
    if (s.tokens != null) {
      s.tokens = s.tokensReplace ? { ...s.tokens } : { ...R, ...s.tokens };
      for (const e of Object.values(s.tokens))
        typeof e.pattern == "string" && (e.pattern = new RegExp(e.pattern));
    } else
      s.tokens = R;
    Array.isArray(s.mask) && (s.mask.length > 1 ? s.mask = [...s.mask].sort((e, a) => e.length - a.length) : s.mask = s.mask[0] ?? ""), s.mask === "" && (s.mask = null), this.opts = s;
  }
  masked(t) {
    return this.process(t, this.findMask(t));
  }
  unmasked(t) {
    return this.process(t, this.findMask(t), false);
  }
  isEager() {
    return this.opts.eager === true;
  }
  isReversed() {
    return this.opts.reversed === true;
  }
  completed(t) {
    const s = this.findMask(t);
    if (this.opts.mask == null || s == null)
      return false;
    const e = this.process(t, s).length;
    return typeof this.opts.mask == "string" ? e >= this.opts.mask.length : typeof this.opts.mask == "function" ? e >= s.length : this.opts.mask.filter((a) => e >= a.length).length === this.opts.mask.length;
  }
  findMask(t) {
    const s = this.opts.mask;
    if (s == null)
      return null;
    if (typeof s == "string")
      return s;
    if (typeof s == "function")
      return s(t);
    const e = this.process(t, s.slice(-1).pop() ?? "", false);
    return s.find((a) => this.process(t, a, false).length >= e.length) ?? "";
  }
  escapeMask(t) {
    const s = [], e = [];
    return t.split("").forEach((a, i) => {
      a === "!" && t[i - 1] !== "!" ? e.push(i - e.length) : s.push(a);
    }), { mask: s.join(""), escaped: e };
  }
  process(t, s, e = true) {
    if (s == null)
      return t;
    const a = `value=${t},mask=${s},masked=${e ? 1 : 0}`;
    if (this.memo.has(a))
      return this.memo.get(a);
    const { mask: i, escaped: c } = this.escapeMask(s), r = [], f = this.opts.tokens != null ? this.opts.tokens : {}, l = this.isReversed() ? -1 : 1, M = this.isReversed() ? "unshift" : "push", u = this.isReversed() ? 0 : i.length - 1, C = this.isReversed() ? () => o > -1 && p > -1 : () => o < i.length && p < t.length, V = (k) => !this.isReversed() && k <= u || this.isReversed() && k >= u;
    let E, d = -1, o = this.isReversed() ? i.length - 1 : 0, p = this.isReversed() ? t.length - 1 : 0, y = false;
    for (; C(); ) {
      const k = i.charAt(o), h = f[k], g = (h == null ? void 0 : h.transform) != null ? h.transform(t.charAt(p)) : t.charAt(p);
      if (!c.includes(o) && h != null ? (g.match(h.pattern) != null ? (r[M](g), h.repeated ? (d === -1 ? d = o : o === u && o !== d && (o = d - l), u === d && (o -= l)) : h.multiple && (y = true, o -= l), o += l) : h.multiple ? y && (o += l, p -= l, y = false) : g === E ? E = void 0 : h.optional && (o += l, p -= l), p += l) : (e && !this.isEager() && r[M](k), g === k && !this.isEager() ? p += l : E = k, this.isEager() || (o += l)), this.isEager())
        for (; V(o) && (f[i.charAt(o)] == null || c.includes(o)); )
          e ? r[M](i.charAt(o)) : i.charAt(o) === t.charAt(p) && (p += l), o += l;
    }
    return this.memo.set(a, r.join("")), this.memo.get(a);
  }
};
var T = (n) => JSON.parse(n.replaceAll("'", '"'));
var w = (n, t = {}) => {
  const s = { ...t };
  return n.dataset.maska != null && n.dataset.maska !== "" && (s.mask = W(n.dataset.maska)), n.dataset.maskaEager != null && (s.eager = v(n.dataset.maskaEager)), n.dataset.maskaReversed != null && (s.reversed = v(n.dataset.maskaReversed)), n.dataset.maskaTokensReplace != null && (s.tokensReplace = v(n.dataset.maskaTokensReplace)), n.dataset.maskaTokens != null && (s.tokens = b(n.dataset.maskaTokens)), s;
};
var v = (n) => n !== "" ? !!JSON.parse(n) : true;
var W = (n) => n.startsWith("[") && n.endsWith("]") ? T(n) : n;
var b = (n) => {
  if (n.startsWith("{") && n.endsWith("}"))
    return T(n);
  const t = {};
  return n.split("|").forEach((s) => {
    const e = s.split(":");
    t[e[0]] = {
      pattern: new RegExp(e[1]),
      optional: e[2] === "optional",
      multiple: e[2] === "multiple",
      repeated: e[2] === "repeated"
    };
  }), t;
};
var L = class {
  constructor(t, s = {}) {
    m(this, "items", /* @__PURE__ */ new Map());
    m(this, "beforeinputEvent", (t2) => {
      const s2 = t2.target, e = this.items.get(s2);
      e.isEager() && "inputType" in t2 && t2.inputType.startsWith("delete") && e.unmasked(s2.value).length <= 1 && this.setMaskedValue(s2, "");
    });
    m(this, "inputEvent", (t2) => {
      if (t2 instanceof CustomEvent && t2.type === "input" && t2.detail != null && typeof t2.detail == "object" && "masked" in t2.detail)
        return;
      const s2 = t2.target, e = this.items.get(s2), a = s2.value, i = s2.selectionStart, c = s2.selectionEnd;
      let r = a;
      if (e.isEager()) {
        const f = e.masked(a), l = e.unmasked(a);
        l === "" && "data" in t2 && t2.data != null ? r = t2.data : l !== e.unmasked(f) && (r = l);
      }
      if (this.setMaskedValue(s2, r), "inputType" in t2 && (t2.inputType.startsWith("delete") || i != null && i < a.length))
        try {
          s2.setSelectionRange(i, c);
        } catch {
        }
    });
    this.options = s, typeof t == "string" ? this.init(
      Array.from(document.querySelectorAll(t)),
      this.getMaskOpts(s)
    ) : this.init(
      "length" in t ? Array.from(t) : [t],
      this.getMaskOpts(s)
    );
  }
  destroy() {
    for (const t of this.items.keys())
      t.removeEventListener("input", this.inputEvent), t.removeEventListener("beforeinput", this.beforeinputEvent);
    this.items.clear();
  }
  needUpdateOptions(t, s) {
    const e = this.items.get(t), a = new O(w(t, this.getMaskOpts(s)));
    return JSON.stringify(e.opts) !== JSON.stringify(a.opts);
  }
  needUpdateValue(t) {
    const s = t.dataset.maskaValue;
    return s == null && t.value !== "" || s != null && s !== t.value;
  }
  getMaskOpts(t) {
    const { onMaska: s, preProcess: e, postProcess: a, ...i } = t;
    return i;
  }
  init(t, s) {
    for (const e of t) {
      const a = new O(w(e, s));
      this.items.set(e, a), e.value !== "" && this.setMaskedValue(e, e.value), e.addEventListener("input", this.inputEvent), e.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, s) {
    const e = this.items.get(t);
    this.options.preProcess != null && (s = this.options.preProcess(s));
    const a = e.masked(s), i = e.unmasked(e.isEager() ? a : s), c = e.completed(s), r = { masked: a, unmasked: i, completed: c };
    s = a, this.options.postProcess != null && (s = this.options.postProcess(s)), t.value = s, t.dataset.maskaValue = s, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((f) => f(r)) : this.options.onMaska(r)), t.dispatchEvent(new CustomEvent("maska", { detail: r })), t.dispatchEvent(new CustomEvent("input", { detail: r }));
  }
};
var A = /* @__PURE__ */ new WeakMap();
var J = (n) => {
  setTimeout(() => {
    var t;
    ((t = A.get(n)) == null ? void 0 : t.needUpdateValue(n)) === true && n.dispatchEvent(new CustomEvent("input"));
  });
};
var j = (n, t) => {
  const s = n instanceof HTMLInputElement ? n : n.querySelector("input"), e = { ...t.arg };
  if (s == null || (s == null ? void 0 : s.type) === "file")
    return;
  J(s);
  const a = A.get(s);
  if (a != null) {
    if (!a.needUpdateOptions(s, e))
      return;
    a.destroy();
  }
  if (t.value != null) {
    const i = t.value, c = (r) => {
      i.masked = r.masked, i.unmasked = r.unmasked, i.completed = r.completed;
    };
    e.onMaska = e.onMaska == null ? c : Array.isArray(e.onMaska) ? [...e.onMaska, c] : [e.onMaska, c];
  }
  A.set(s, new L(s, e));
};
export {
  O as Mask,
  L as MaskInput,
  R as tokens,
  j as vMaska
};
/*! Bundled license information:

maska/dist/maska.js:
  (*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license *)
*/
//# sourceMappingURL=maska.js.map
