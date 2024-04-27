import {
  toValue,
  tryOnScopeDispose
} from "./chunk-G3YK36MN.js";
import {
  useRoute,
  useRouter
} from "./chunk-73NWNFM5.js";
import "./chunk-WBYI4UQ7.js";
import "./chunk-5VLIZV53.js";
import {
  customRef,
  nextTick,
  watch
} from "./chunk-RG7C3B44.js";

// ../../node_modules/.pnpm/@vueuse+router@10.9.0_vue-router@4.3.0_vue@3.4.21/node_modules/@vueuse/router/index.mjs
var _hash;
function useRouteHash(defaultValue, {
  mode = "replace",
  route = useRoute(),
  router = useRouter()
} = {}) {
  _hash = route.hash;
  tryOnScopeDispose(() => {
    _hash = void 0;
  });
  let _trigger;
  const proxy = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        track();
        return _hash || toValue(defaultValue);
      },
      set(v) {
        if (v === _hash)
          return;
        _hash = v === null ? void 0 : v;
        trigger();
        nextTick(() => {
          const { params, query } = route;
          router[toValue(mode)]({ params, query, hash: _hash });
        });
      }
    };
  });
  watch(
    () => route.hash,
    () => {
      _hash = route.hash;
      _trigger();
    },
    { flush: "sync" }
  );
  return proxy;
}
var _queue$1 = /* @__PURE__ */ new WeakMap();
function useRouteParams(name, defaultValue, options = {}) {
  const {
    mode = "replace",
    route = useRoute(),
    router = useRouter(),
    transform = (value) => value
  } = options;
  if (!_queue$1.has(router))
    _queue$1.set(router, /* @__PURE__ */ new Map());
  const _paramsQueue = _queue$1.get(router);
  let param = route.params[name];
  tryOnScopeDispose(() => {
    param = void 0;
  });
  let _trigger;
  const proxy = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        track();
        return transform(param !== void 0 ? param : toValue(defaultValue));
      },
      set(v) {
        if (param === v)
          return;
        param = v === defaultValue || v === null ? void 0 : v;
        _paramsQueue.set(name, v === defaultValue || v === null ? void 0 : v);
        trigger();
        nextTick(() => {
          if (_paramsQueue.size === 0)
            return;
          const newParams = Object.fromEntries(_paramsQueue.entries());
          _paramsQueue.clear();
          const { params, query, hash } = route;
          router[toValue(mode)]({
            params: {
              ...params,
              ...newParams
            },
            query,
            hash
          });
        });
      }
    };
  });
  watch(
    () => route.params[name],
    (v) => {
      param = v;
      _trigger();
    },
    { flush: "sync" }
  );
  return proxy;
}
var _queue = /* @__PURE__ */ new WeakMap();
function useRouteQuery(name, defaultValue, options = {}) {
  const {
    mode = "replace",
    route = useRoute(),
    router = useRouter(),
    transform = (value) => value
  } = options;
  if (!_queue.has(router))
    _queue.set(router, /* @__PURE__ */ new Map());
  const _queriesQueue = _queue.get(router);
  let query = route.query[name];
  tryOnScopeDispose(() => {
    query = void 0;
  });
  let _trigger;
  const proxy = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        track();
        return transform(query !== void 0 ? query : toValue(defaultValue));
      },
      set(v) {
        if (query === v)
          return;
        query = v === defaultValue || v === null ? void 0 : v;
        _queriesQueue.set(name, v === defaultValue || v === null ? void 0 : v);
        trigger();
        nextTick(() => {
          if (_queriesQueue.size === 0)
            return;
          const newQueries = Object.fromEntries(_queriesQueue.entries());
          _queriesQueue.clear();
          const { params, query: query2, hash } = route;
          router[toValue(mode)]({
            params,
            query: { ...query2, ...newQueries },
            hash
          });
        });
      }
    };
  });
  watch(
    () => route.query[name],
    (v) => {
      query = v;
      _trigger();
    },
    { flush: "sync" }
  );
  return proxy;
}
export {
  useRouteHash,
  useRouteParams,
  useRouteQuery
};
//# sourceMappingURL=@vueuse_router.js.map
