// ../../node_modules/.pnpm/clsx@2.0.0/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// ../../node_modules/.pnpm/cva@1.0.0-beta.1_typescript@5.4.5/node_modules/cva/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var defineConfig = (options) => {
  const cx1 = function() {
    for (var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }
    var ref, ref1;
    if (typeof (options === null || options === void 0 ? void 0 : (ref = options.hooks) === null || ref === void 0 ? void 0 : ref["cx:done"]) !== "undefined")
      return options === null || options === void 0 ? void 0 : options.hooks["cx:done"](clsx(inputs));
    if (typeof (options === null || options === void 0 ? void 0 : (ref1 = options.hooks) === null || ref1 === void 0 ? void 0 : ref1.onComplete) !== "undefined")
      return options === null || options === void 0 ? void 0 : options.hooks.onComplete(clsx(inputs));
    return clsx(inputs);
  };
  const cva1 = (config) => {
    return (props) => {
      var ref;
      if ((config === null || config === void 0 ? void 0 : config.variants) == null)
        return cx1(config === null || config === void 0 ? void 0 : config.base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
      const { variants, defaultVariants } = config;
      const getVariantClassNames = Object.keys(variants).map((variant) => {
        const variantProp = props === null || props === void 0 ? void 0 : props[variant];
        const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
        const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
        return variants[variant][variantKey];
      });
      const defaultsAndProps = { ...defaultVariants, ...props && Object.entries(props).reduce((acc, param) => {
        let [key, value] = param;
        return typeof value === "undefined" ? acc : { ...acc, [key]: value };
      }, {}) };
      const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
        let { class: cvClass, className: cvClassName, ...cvConfig } = param1;
        return Object.entries(cvConfig).every((param) => {
          let [cvKey, cvSelector] = param;
          const selector = defaultsAndProps[cvKey];
          return Array.isArray(cvSelector) ? cvSelector.includes(selector) : selector === cvSelector;
        }) ? [...acc, cvClass, cvClassName] : acc;
      }, []);
      return cx1(config === null || config === void 0 ? void 0 : config.base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
  };
  const compose1 = function() {
    for (var _len = arguments.length, components = new Array(_len), _key = 0; _key < _len; _key++) {
      components[_key] = arguments[_key];
    }
    return (props) => {
      const propsWithoutClass = Object.fromEntries(Object.entries(props || {}).filter((param) => {
        let [key] = param;
        return !["class", "className"].includes(key);
      }));
      return cx1(components.map((component) => component(propsWithoutClass)), props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
  };
  return { compose: compose1, cva: cva1, cx: cx1 };
};
var { compose, cva, cx } = defineConfig();
export {
  compose,
  cva,
  cx,
  defineConfig
};
//# sourceMappingURL=cva.js.map
