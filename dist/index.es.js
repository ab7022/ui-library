import * as c from "react";
import ne from "react";
import "react-dom";
var G = { exports: {} }, F = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function le() {
  if (Q)
    return F;
  Q = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, n, o) {
    var u = null;
    if (o !== void 0 && (u = "" + o), n.key !== void 0 && (u = "" + n.key), "key" in n) {
      o = {};
      for (var d in n)
        d !== "key" && (o[d] = n[d]);
    } else
      o = n;
    return n = o.ref, {
      $$typeof: t,
      type: s,
      key: u,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return F.Fragment = r, F.jsx = i, F.jsxs = i, F;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ee;
function oe() {
  return ee || (ee = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === W ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case w:
          return "Profiler";
        case S:
          return "StrictMode";
        case O:
          return "Suspense";
        case N:
          return "SuspenseList";
        case L:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case A:
            return (e.displayName || "Context") + ".Provider";
          case _:
            return (e._context.displayName || "Context") + ".Consumer";
          case I:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case k:
            return a = e.displayName || null, a !== null ? a : t(e.type) || "Memo";
          case D:
            a = e._payload, e = e._init;
            try {
              return t(e(a));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function i(e) {
      try {
        r(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var g = a.error, j = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return g.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), r(e);
      }
    }
    function s(e) {
      if (e === R)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var a = t(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (C.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function d(e, a) {
      function g() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      g.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: g,
        configurable: !0
      });
    }
    function f() {
      var e = t(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, a, g, j, P, T, B, V) {
      return g = T.ref, e = {
        $$typeof: b,
        type: e,
        key: a,
        props: T,
        _owner: P
      }, (g !== void 0 ? g : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: V
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, a, g, j, P, T, B, V) {
      var E = a.children;
      if (E !== void 0)
        if (j)
          if (Y(E)) {
            for (j = 0; j < E.length; j++)
              m(E[j]);
            Object.freeze && Object.freeze(E);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          m(E);
      if (C.call(a, "key")) {
        E = t(e);
        var $ = Object.keys(a).filter(function(re) {
          return re !== "key";
        });
        j = 0 < $.length ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}", K[E + j] || ($ = 0 < $.length ? "{" + $.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          E,
          $,
          E
        ), K[E + j] = !0);
      }
      if (E = null, g !== void 0 && (i(g), E = "" + g), u(a) && (i(a.key), E = "" + a.key), "key" in a) {
        g = {};
        for (var H in a)
          H !== "key" && (g[H] = a[H]);
      } else
        g = a;
      return E && d(
        g,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        E,
        T,
        P,
        n(),
        g,
        B,
        V
      );
    }
    function m(e) {
      typeof e == "object" && e !== null && e.$$typeof === b && e._store && (e._store.validated = 1);
    }
    var v = ne, b = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), A = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), W = Symbol.for("react.client.reference"), h = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, Y = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var J, q = {}, X = v.react_stack_bottom_frame.bind(
      v,
      o
    )(), Z = M(s(o)), K = {};
    z.Fragment = R, z.jsx = function(e, a, g, j, P) {
      var T = 1e4 > h.recentlyCreatedOwnerStacks++;
      return x(
        e,
        a,
        g,
        !1,
        j,
        P,
        T ? Error("react-stack-top-frame") : X,
        T ? M(s(e)) : Z
      );
    }, z.jsxs = function(e, a, g, j, P) {
      var T = 1e4 > h.recentlyCreatedOwnerStacks++;
      return x(
        e,
        a,
        g,
        !0,
        j,
        P,
        T ? Error("react-stack-top-frame") : X,
        T ? M(s(e)) : Z
      );
    };
  }()), z;
}
process.env.NODE_ENV === "production" ? G.exports = le() : G.exports = oe();
var l = G.exports;
function te(t, r) {
  if (typeof t == "function")
    return t(r);
  t != null && (t.current = r);
}
function se(...t) {
  return (r) => {
    let i = !1;
    const s = t.map((n) => {
      const o = te(n, r);
      return !i && typeof o == "function" && (i = !0), o;
    });
    if (i)
      return () => {
        for (let n = 0; n < s.length; n++) {
          const o = s[n];
          typeof o == "function" ? o() : te(t[n], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function ae(t) {
  const r = /* @__PURE__ */ ie(t), i = c.forwardRef((s, n) => {
    const { children: o, ...u } = s, d = c.Children.toArray(o), f = d.find(ue);
    if (f) {
      const p = f.props.children, x = d.map((m) => m === f ? c.Children.count(p) > 1 ? c.Children.only(null) : c.isValidElement(p) ? p.props.children : null : m);
      return /* @__PURE__ */ l.jsx(r, { ...u, ref: n, children: c.isValidElement(p) ? c.cloneElement(p, void 0, x) : null });
    }
    return /* @__PURE__ */ l.jsx(r, { ...u, ref: n, children: o });
  });
  return i.displayName = `${t}.Slot`, i;
}
// @__NO_SIDE_EFFECTS__
function ie(t) {
  const r = c.forwardRef((i, s) => {
    const { children: n, ...o } = i;
    if (c.isValidElement(n)) {
      const u = fe(n), d = de(o, n.props);
      return n.type !== c.Fragment && (d.ref = s ? se(s, u) : u), c.cloneElement(n, d);
    }
    return c.Children.count(n) > 1 ? c.Children.only(null) : null;
  });
  return r.displayName = `${t}.SlotClone`, r;
}
var ce = Symbol("radix.slottable");
function ue(t) {
  return c.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === ce;
}
function de(t, r) {
  const i = { ...r };
  for (const s in r) {
    const n = t[s], o = r[s];
    /^on[A-Z]/.test(s) ? n && o ? i[s] = (...d) => {
      const f = o(...d);
      return n(...d), f;
    } : n && (i[s] = n) : s === "style" ? i[s] = { ...n, ...o } : s === "className" && (i[s] = [n, o].filter(Boolean).join(" "));
  }
  return { ...t, ...i };
}
function fe(t) {
  var s, n;
  let r = (s = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : s.get, i = r && "isReactWarning" in r && r.isReactWarning;
  return i ? t.ref : (r = (n = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : n.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? t.props.ref : t.props.ref || t.ref);
}
var me = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], pe = me.reduce((t, r) => {
  const i = /* @__PURE__ */ ae(`Primitive.${r}`), s = c.forwardRef((n, o) => {
    const { asChild: u, ...d } = n, f = u ? i : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(f, { ...d, ref: o });
  });
  return s.displayName = `Primitive.${r}`, { ...t, [r]: s };
}, {}), xe = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), be = "VisuallyHidden", U = c.forwardRef(
  (t, r) => /* @__PURE__ */ l.jsx(
    pe.span,
    {
      ...t,
      ref: r,
      style: { ...xe, ...t.style }
    }
  )
);
U.displayName = be;
function ge({ config: t }) {
  const [r, i] = c.useState(null), [s, n] = c.useState(null), [o, u] = c.useState(null), d = c.useRef(null), { acceptedTypes: f, maxSizeMB: p, labels: x = {}, theme: m = {}, multiple: v = !1 } = t, b = (O) => {
    u(null), n(null);
    const N = O.target.files;
    if (!N || N.length === 0)
      return;
    const k = N[0];
    if (f && !f.includes(k.type)) {
      u(x.fileTypeInvalid || "Invalid file type.");
      return;
    }
    if (p && k.size > p * 1024 * 1024) {
      u(x.fileSizeExceed || `File exceeds ${p}MB.`);
      return;
    }
    if (i(k), k.type.startsWith("image/")) {
      const D = URL.createObjectURL(k);
      n(D);
    }
  }, y = m.size === "sm" ? "text-sm py-1 px-2" : m.size === "lg" ? "text-lg py-3 px-6" : "text-base py-2 px-4", R = m.borderRadius || "rounded-md", S = m.borderStyle || "border", w = m.color || "border-gray-300", _ = m.bgColor || "bg-white", A = m.textColor || "text-gray-900", I = m.focusRing || "focus:ring-2 focus:ring-blue-500";
  return l.jsxs("div", { className: `inline-block ${S} ${w} ${R} p-4 ${_}`, children: [l.jsxs("label", { className: `cursor-pointer inline-flex items-center gap-2 ${y} ${A} ${I}`, tabIndex: 0, onKeyDown: (O) => {
    var N;
    (O.key === "Enter" || O.key === " ") && ((N = d.current) == null || N.click());
  }, "aria-label": x.uploadButton || "Upload File", children: [m.iconPlacement === "left" && l.jsx("span", { "aria-hidden": !0, children: "📁" }), x.uploadButton || "Upload File", m.iconPlacement === "right" && l.jsx("span", { "aria-hidden": !0, children: "📁" }), l.jsx(U, { children: l.jsx("input", { ref: d, type: "file", accept: f == null ? void 0 : f.join(","), multiple: v, onChange: b, "aria-invalid": !!o }) })] }), r && l.jsxs("div", { className: "mt-2 flex items-center gap-2", role: "status", children: [s && l.jsx("img", { src: s, alt: r.name, className: "w-12 h-12 object-cover rounded border", style: { minWidth: 48, minHeight: 48 } }), l.jsxs("span", { className: "text-xs text-green-600", children: [x.preview || "Selected:", " ", r.name] })] }), o && l.jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: o })] });
}
function he({ config: t }) {
  const [r, i] = c.useState(null), [s, n] = c.useState(null), [o, u] = c.useState(null), d = c.useRef(null), [f, p] = c.useState(!1), { acceptedTypes: x, maxSizeMB: m, labels: v = {}, theme: b = {}, multiple: y = !1 } = t, R = (h) => {
    if (u(null), n(null), !h || h.length === 0)
      return;
    const C = h[0];
    if (x && !x.includes(C.type)) {
      u(v.fileTypeInvalid || "Invalid file type.");
      return;
    }
    if (m && C.size > m * 1024 * 1024) {
      u(v.fileSizeExceed || `File exceeds ${m}MB.`);
      return;
    }
    if (i(C), C.type.startsWith("image/")) {
      const Y = URL.createObjectURL(C);
      n(Y);
    }
  }, S = (h) => {
    h.preventDefault(), p(!1), R(h.dataTransfer.files);
  }, w = (h) => {
    h.preventDefault(), p(!0);
  }, _ = (h) => {
    h.preventDefault(), p(!1);
  }, A = (h) => {
    var C;
    (h.key === "Enter" || h.key === " ") && ((C = d.current) == null || C.click());
  }, I = b.size === "sm" ? "text-sm py-4" : b.size === "lg" ? "text-lg py-12" : "text-base py-8", O = b.borderRadius || "rounded-md", N = b.borderStyle || "border-2 border-dashed", k = b.color || "border-blue-400", D = f ? "bg-blue-100" : b.bgColor || "bg-white", L = b.textColor || "text-blue-900", W = b.focusRing || "focus:ring-2 focus:ring-blue-500";
  return l.jsxs("div", { className: `w-full max-w-lg mx-auto ${N} ${k} ${O} ${D} ${W} flex flex-col items-center justify-center transition-all duration-150`, tabIndex: 0, onKeyDown: A, onDrop: S, onDragOver: w, onDragLeave: _, "aria-label": v.dropzone || "Drop files here or click to upload", style: { minHeight: 160, cursor: "pointer" }, onClick: () => {
    var h;
    return (h = d.current) == null ? void 0 : h.click();
  }, role: "button", children: [l.jsx("span", { className: `block ${I} ${L} select-none`, children: v.dropzone || "Drag & drop file here or click to select" }), l.jsx(U, { children: l.jsx("input", { ref: d, type: "file", accept: x == null ? void 0 : x.join(","), multiple: y, onChange: (h) => R(h.target.files), "aria-invalid": !!o }) }), r && l.jsxs("div", { className: "mt-2 flex items-center gap-2", role: "status", children: [s && l.jsx("img", { src: s, alt: r.name, className: "w-12 h-12 object-cover rounded border", style: { minWidth: 48, minHeight: 48 } }), l.jsxs("span", { className: "text-xs text-green-600", children: [v.preview || "Selected:", " ", r.name] })] }), o && l.jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: o })] });
}
function ve({ config: t }) {
  const [r, i] = c.useState(null), [s, n] = c.useState(null), [o, u] = c.useState(null), d = c.useRef(null), { acceptedTypes: f, maxSizeMB: p, labels: x = {}, theme: m = {}, multiple: v = !1 } = t, b = (S) => {
    u(null), n(null);
    const w = S.target.files;
    if (!w || w.length === 0)
      return;
    const _ = w[0];
    if (f && !f.includes(_.type)) {
      u(x.fileTypeInvalid || "Invalid file type.");
      return;
    }
    if (p && _.size > p * 1024 * 1024) {
      u(x.fileSizeExceed || `File exceeds ${p}MB.`);
      return;
    }
    if (i(_), _.type.startsWith("image/")) {
      const A = URL.createObjectURL(_);
      n(A);
    }
  }, y = m.bgColor || "bg-white", R = m.textColor || "text-gray-900";
  return l.jsxs("div", { className: `w-full max-w-md mx-auto border rounded-lg p-4 flex flex-col items-center ${y} ${R}`, children: [l.jsxs("label", { className: "cursor-pointer inline-block mb-2", children: [x.uploadButton || "Select File", l.jsx(U, { children: l.jsx("input", { ref: d, type: "file", accept: f == null ? void 0 : f.join(","), multiple: v, onChange: b, "aria-invalid": !!o }) })] }), r && s && l.jsx("img", { src: s, alt: r.name, className: "w-48 h-48 object-contain rounded border mb-2" }), r && l.jsxs("div", { className: "text-xs text-green-600", role: "status", children: [x.preview || "Selected:", " ", r.name] }), o && l.jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: o })] });
}
function ye({ config: t }) {
  const [r, i] = c.useState(null), [s, n] = c.useState(null), [o, u] = c.useState(null), d = c.useRef(null), f = t.labels || {}, p = t.theme || {}, x = (b) => {
    u(null), n(null);
    const y = b.target.files;
    if (!y || y.length === 0)
      return;
    const R = y[0];
    if (!R.type.startsWith("image/")) {
      u(f.fileTypeInvalid || "Only image files allowed.");
      return;
    }
    i(R);
    const S = URL.createObjectURL(R);
    n(S);
  }, m = p.bgColor || "bg-white", v = p.textColor || "text-gray-900";
  return l.jsxs("div", { className: `w-full max-w-xs mx-auto border rounded-lg p-4 flex flex-col items-center ${m} ${v}`, children: [l.jsxs("label", { className: "cursor-pointer inline-block mb-2", children: [f.uploadButton || "Select Image", l.jsx(U, { children: l.jsx("input", { ref: d, type: "file", accept: "image/*", onChange: x, "aria-invalid": !!o }) })] }), r && s && l.jsx("img", { src: s, alt: r.name, className: "w-32 h-32 object-cover rounded border mb-2" }), r && l.jsxs("div", { className: "text-xs text-green-600", role: "status", children: [f.preview || "Selected:", " ", r.name] }), o && l.jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: o })] });
}
function Re({ config: t }) {
  const [r, i] = c.useState([]), [s, n] = c.useState(null), o = c.useRef(null), { acceptedTypes: u, maxSizeMB: d, labels: f = {}, theme: p = {} } = t, x = (b) => {
    n(null);
    const y = b.target.files;
    if (!y || y.length === 0)
      return;
    const R = [];
    for (let S = 0; S < y.length; S++) {
      const w = y[S];
      if (u && !u.includes(w.type)) {
        n(f.fileTypeInvalid || "Invalid file type.");
        return;
      }
      if (d && w.size > d * 1024 * 1024) {
        n(f.fileSizeExceed || `File exceeds ${d}MB.`);
        return;
      }
      R.push(w);
    }
    i(R);
  }, m = p.bgColor || "bg-white", v = p.textColor || "text-gray-900";
  return l.jsxs("div", { className: `w-full max-w-md mx-auto border rounded-lg p-4 flex flex-col items-center ${m} ${v}`, children: [l.jsxs("label", { className: "cursor-pointer inline-block mb-2", children: [f.uploadButton || "Select Files", l.jsx(U, { children: l.jsx("input", { ref: o, type: "file", accept: u == null ? void 0 : u.join(","), multiple: !0, onChange: x, "aria-invalid": !!s }) })] }), r.length > 0 && l.jsx("ul", { className: "w-full mt-2 space-y-2", children: r.map((b, y) => l.jsxs("li", { className: "flex items-center gap-2", children: [b.type.startsWith("image/") && l.jsx("img", { src: URL.createObjectURL(b), alt: b.name, className: "w-10 h-10 object-cover rounded border" }), l.jsx("span", { className: "text-xs text-green-600", children: b.name })] }, y)) }), s && l.jsx("div", { className: "mt-2 text-xs text-red-600", role: "alert", children: s })] });
}
function Se({ config: t }) {
  const { variant: r = "button" } = t;
  switch (r) {
    case "dropzone":
      return l.jsx(he, { config: t });
    case "image-preview":
      return l.jsx(ve, { config: t });
    case "image-only":
      return l.jsx(ye, { config: t });
    case "multi-file":
      return l.jsx(Re, { config: t });
    case "button":
    default:
      return l.jsx(ge, { config: t });
  }
}
export {
  Se as FileUpload
};
