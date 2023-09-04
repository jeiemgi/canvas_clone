var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/josemiguel/dev/canvas-studio/canvas-website/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/josemiguel/dev/canvas-studio/canvas-website/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2 = void 0;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react25 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/lib/prismicClient.ts
var prismic = __toESM(require("@prismicio/client")), repositoryName = "canvas-website-v4";
function createClient2() {
  return prismic.createClient(repositoryName, {
    // If your repository is private, add an access token
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
    // This defines how you will structure URL paths in your project.
    // Update the types to match the custom types in your project, and edit
    // the paths to match the routing in your project.
    //
    // If you are not using a router in your project, you can change this
    // to an empty array or remove the option entirely.
    // routes: [
    //   {
    //     type: "homepage",
    //     path: "/",
    //   },
    // ],
  });
}

// app/styles/global.css
var global_default = "/build/_assets/global-5J7HTL2K.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PBIJ2UQW.css";

// app/styles/components/index.css
var components_default = "/build/_assets/index-L7GG3ZZV.css";

// node_modules/@splidejs/splide/dist/css/splide-core.min.css
var splide_core_min_default = "/build/_assets/splide-core.min-WCNDQEQ5.css";

// app/root.tsx
var import_css_bundle = __toESM(require_dist());

// app/components/Layout/Layout.tsx
var import_react24 = require("react");

// app/components/Layout/Lenis.tsx
var import_gsap = require("gsap"), import_react2 = require("react"), import_react_lenis = require("@studio-freight/react-lenis"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function LenisComponent({ children }) {
  let lenisRef = (0, import_react2.useRef)();
  return (0, import_react2.useEffect)(() => {
    function update(time) {
      var _a;
      (_a = lenisRef.current) == null || _a.raf(time * 1e3);
    }
    return import_gsap.gsap.ticker.add(update), () => {
      import_gsap.gsap.ticker.remove(update);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_lenis.ReactLenis, { root: !0, ref: lenisRef, autoRaf: !1, children }, void 0, !1, {
    fileName: "app/components/Layout/Lenis.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var Lenis_default = LenisComponent;

// app/components/Layout/Navigation.tsx
var import_react_router = require("react-router"), import_usehooks_ts = require("usehooks-ts");

// app/hooks/useIsScrolled.ts
var import_react3 = require("react");
function useIsScrolled(threshold = 0) {
  let [isScrolled, setIsScrolled] = (0, import_react3.useState)(!1);
  return (0, import_react3.useEffect)(() => {
    let update = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    return window.addEventListener("scroll", update), update(), () => window.removeEventListener("scroll", update);
  }, [threshold]), isScrolled;
}
var useIsScrolledInArea = (start, end) => {
  let [isInView, setIsInView] = (0, import_react3.useState)(!1);
  return (0, import_react3.useEffect)(() => {
    let updatePosition = () => {
      let endPos = window.innerHeight + end;
      setIsInView(
        scrollY > start && scrollY + endPos < document.documentElement.scrollHeight - endPos
      );
    };
    return window.addEventListener("scroll", updatePosition), updatePosition(), () => window.removeEventListener("scroll", updatePosition);
  }, [start, end]), isInView;
}, useIsScrolled_default = useIsScrolled;

// app/components/Layout/Navigation.tsx
var import_react10 = require("react");

// app/components/Navigation/NavThemeProvider.tsx
var import_react4 = require("react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), NavThemeContext = (0, import_react4.createContext)({
  theme: "transparent",
  setTheme: () => {
    console.log("setTheme defaultAction");
  }
});
function NavThemeProvider({ children }) {
  let [theme, setTheme] = (0, import_react4.useState)("transparent"), setThemeCallback = (newTheme) => {
    setTheme(newTheme);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    NavThemeContext.Provider,
    {
      value: {
        theme,
        setTheme: setThemeCallback
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Navigation/NavThemeProvider.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}
var useNavTheme = () => (0, import_react4.useContext)(NavThemeContext), NavThemeProvider_default = NavThemeProvider;

// app/components/Navigation/Nav.tsx
var import_clsx = __toESM(require("clsx"));
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Nav({ children }) {
  let { theme } = useNavTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "nav",
    {
      className: (0, import_clsx.default)(
        "fixed left-0 top-0 z-50 h-header w-full px-4 md:h-headerDesk md:px-8",
        "flex flex-row items-center justify-between transition-colors duration-100",
        theme === "white" ? "bg-white delay-500" : "bg-gradient delay-0"
      ),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/Navigation/Nav.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}
var Nav_default = Nav;

// app/components/CTA/PrimaryCTA.tsx
var import_clsx2 = __toESM(require("clsx")), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function PrimaryCTALink({
  size = "sm",
  dark = !1,
  active = !1,
  children,
  className,
  ...props
}) {
  let textStyle = size === "sm" ? "heading--3" : "heading--1";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Link,
    {
      className: (0, import_clsx2.default)("PrimaryCTAButton", {
        "PrimaryCTAButton--active": active,
        "PrimaryCTAButton--dark": dark,
        "PrimaryCTAButton--lg": size === "lg"
      }),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "PrimaryCTAButton__inner", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: (0, import_clsx2.default)(textStyle, "PrimaryCTAButton__parenthesisL"), children: "(" }, void 0, !1, {
          fileName: "app/components/CTA/PrimaryCTA.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: (0, import_clsx2.default)(textStyle, "px-2"), children }, void 0, !1, {
          fileName: "app/components/CTA/PrimaryCTA.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: (0, import_clsx2.default)(textStyle, "PrimaryCTAButton__parenthesisR"), children: ")" }, void 0, !1, {
          fileName: "app/components/CTA/PrimaryCTA.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CTA/PrimaryCTA.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/CTA/PrimaryCTA.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
function PrimaryCTAButton({
  size = "sm",
  dark = !1,
  active = !1,
  children,
  ...props
}) {
  let textStyle = size === "sm" ? "heading--3" : "heading--1";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "button",
    {
      className: (0, import_clsx2.default)("PrimaryCTAButton", {
        "PrimaryCTAButton--active": active,
        "PrimaryCTAButton--dark": dark,
        "PrimaryCTAButton--lg": size === "lg"
      }),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_clsx2.default)("PrimaryCTAButton__inner", textStyle), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "PrimaryCTAButton__parenthesisL", children: "(" }, void 0, !1, {
          fileName: "app/components/CTA/PrimaryCTA.tsx",
          lineNumber: 67,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: (0, import_clsx2.default)(textStyle, "px-2"), children }, void 0, !1, {
          fileName: "app/components/CTA/PrimaryCTA.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "PrimaryCTAButton__parenthesisR", children: ")" }, void 0, !1, {
          fileName: "app/components/CTA/PrimaryCTA.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/CTA/PrimaryCTA.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/CTA/PrimaryCTA.tsx",
      lineNumber: 58,
      columnNumber: 5
    },
    this
  );
}

// app/components/CTA/SecondaryCTA.tsx
var import_gsap3 = require("gsap");

// app/hooks/useIsomorphicLayoutEffect.ts
var import_react6 = require("react"), useIsomorphicLayoutEffect = typeof window < "u" ? import_react6.useLayoutEffect : import_react6.useEffect, useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// app/components/CTA/TextCloneButton.tsx
var import_clsx3 = __toESM(require("clsx")), import_react7 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), TextCloneButton = (0, import_react7.forwardRef)(
  ({ children, className = "" }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      ref,
      "aria-label": children,
      className: (0, import_clsx3.default)(
        className,
        "relative inline-block overflow-hidden align-middle"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "content block", children }, void 0, !1, {
          fileName: "app/components/CTA/TextCloneButton.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "clone absolute block", children }, void 0, !1, {
          fileName: "app/components/CTA/TextCloneButton.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/CTA/TextCloneButton.tsx",
      lineNumber: 14,
      columnNumber: 7
    },
    this
  )
);
TextCloneButton.displayName = "TextCloneButton";
var TextCloneButton_default = TextCloneButton;

// app/components/CTA/useTextAnimation.ts
var import_react8 = require("react");
var import_gsap2 = require("gsap"), useTextAnimation = () => {
  let ref = (0, import_react8.useRef)(null);
  return useIsomorphicLayoutEffect_default(() => {
    let ctx = import_gsap2.gsap.context((self) => {
      var _a, _b;
      let tl = import_gsap2.gsap.timeline({ paused: !0 }), clone = self != null && self.selector ? self == null ? void 0 : self.selector(".clone") : null, content = self != null && self.selector ? self == null ? void 0 : self.selector(".content") : null;
      tl.to([content, clone], {
        y: "-100%",
        duration: 0.35,
        ease: "cubic-bezier(0.20, 0.00, 0.20, 1.00)"
      });
      let mouseEnter = () => tl.play(), mouseLeave = () => tl.reverse();
      ref.current instanceof Element && ((_a = ref.current) == null || _a.addEventListener("mouseenter", mouseEnter), (_b = ref.current) == null || _b.addEventListener("mouseleave", mouseLeave));
    }, ref);
    return () => ctx.revert();
  }, []), { ref };
}, useTextAnimation_default = useTextAnimation;

// app/components/CTA/SecondaryCTA.tsx
var import_clsx4 = __toESM(require("clsx")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SecondaryCTA({
  dark = !1,
  children,
  border = !1,
  ...props
}) {
  let { ref } = useTextAnimation_default();
  return useIsomorphicLayoutEffect_default(() => {
    let ctx = import_gsap3.gsap.context((self) => {
      var _a, _b;
      let bg = self.selector ? self.selector(".round-background") : null, tl = import_gsap3.gsap.timeline({ paused: !0 });
      tl.to(bg, {
        scaleX: 1.1,
        duration: 0.3,
        ease: "cubic-bezier(0.20, 0.00, 0.20, 1.00)"
      });
      let mouseEnter = () => tl.play(), mouseLeave = () => tl.reverse();
      (_a = ref.current) == null || _a.addEventListener("mouseenter", mouseEnter), (_b = ref.current) == null || _b.addEventListener("mouseleave", mouseLeave);
    }, ref);
    return () => ctx.revert();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "button",
    {
      ref,
      ...props,
      className: (0, import_clsx4.default)(
        "label--2 relative rounded-full px-[1.81rem] py-[1.16rem]",
        props.className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: (0, import_clsx4.default)(
              dark ? "bg-black" : "bg-white",
              border ? "border border-black/30 bg-white" : "",
              "round-background absolute left-0 top-0 h-full w-full rounded-full"
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/CTA/SecondaryCTA.tsx",
            lineNumber: 52,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TextCloneButton_default, { className: (0, import_clsx4.default)(dark ? "text-white" : "text-black"), children }, void 0, !1, {
          fileName: "app/components/CTA/SecondaryCTA.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/CTA/SecondaryCTA.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}

// app/components/CTA/LinkCTA.tsx
var import_clsx5 = __toESM(require("clsx")), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function LinkCTA({
  dark = !1,
  className,
  children,
  ...props
}) {
  let { ref } = useTextAnimation_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    import_react9.Link,
    {
      ref,
      ...props,
      className: (0, import_clsx5.default)(
        className || "body--3",
        "inline-block",
        dark ? "text-black" : "text-white"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TextCloneButton_default, { children }, void 0, !1, {
        fileName: "app/components/CTA/LinkCTA.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/CTA/LinkCTA.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
var LinkCTA_default = LinkCTA;

// app/components/Navigation/NavLogo.tsx
var import_clsx6 = __toESM(require("clsx"));

// app/svg/CanvasLogo.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), SvgCanvasLogo = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 78,
    height: 14,
    viewBox: "0 0 78 14",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        d: "m74.673 5.95-2.37-.416c-1.245-.22-1.867-.537-1.867-1.393 0-.855.837-1.442 2.13-1.442s2.274.636 2.394 1.613h2.8C77.497 1.917 75.702.5 72.542.5c-2.824 0-4.93 1.613-4.93 3.959 0 2.223 1.483 3.176 3.494 3.543l2.154.39c1.34.245 1.867.612 1.867 1.394 0 1.002-1.005 1.539-2.298 1.539-1.292 0-2.585-.586-2.729-1.881h-2.92c.263 2.712 2.537 4.056 5.697 4.056 2.896 0 5.122-1.564 5.122-3.934 0-2.053-1.197-3.25-3.327-3.617ZM8.497 5.046c-.239-1.344-1.029-2.2-2.417-2.2C4.141 2.846 3.064 4.46 3.064 7c0 2.542 1.077 4.154 3.016 4.154 1.388 0 2.178-.88 2.418-2.199h2.896c-.335 2.786-2.274 4.545-5.29 4.545C2.537 13.5 0 11.008 0 7 0 2.993 2.537.5 6.104.5c3.016 0 4.955 1.784 5.29 4.546H8.497Zm38.286 5.106h.047L50.135.794h2.992l-4.668 12.413h-3.35L40.32.794h3.088l3.375 9.358ZM33.248.634A4.787 4.787 0 0 1 34.388.5c2.777 0 4.453 1.76 4.453 4.741v7.966h-3.064V5.974c0-1.98-.91-3.006-2.441-3.006-1.533 0-2.73 1.002-2.73 3.495v6.744h-3.063V.794h3.016V3.44s.35-1.896 2.132-2.63a4.29 4.29 0 0 1 .556-.177Zm-8.751 4.68C24.497 2.09 22.606.5 19.302.5c-2.94 0-4.955 1.51-5.274 4.09-.014.114-.029.35-.025.456h2.948v-.027c0-.085-.001-.244.014-.381.13-1.098.936-1.816 2.241-1.816 1.128 0 1.94.483 2.205 1.476l.003.013c.115.468-.022 1.33-1.1 1.481-.038.006-.078.01-.118.014h-.002l-2.328.265c-2.465.293-4.38 1.32-4.38 3.812 0 2.249 1.723 3.592 4.093 3.592 1.939 0 3.47-.806 4.045-2.223 0 .61.048 1.27.168 1.955h2.944c-.192-1.002-.24-1.955-.24-3.104v-4.79.001Zm-2.992 3.08c0 1.954-1.508 2.907-3.088 2.907-1.22 0-1.891-.61-1.891-1.588 0-1.295.982-1.589 2.274-1.76l1.43-.168c1.079-.144 1.275-.92 1.275-.92v1.528ZM59.775.5C63.08.5 64.97 2.09 64.97 5.314v4.79c0 1.148.048 2.1.24 3.103h-2.945a11.367 11.367 0 0 1-.167-1.955c-.575 1.417-2.107 2.223-4.046 2.223-2.37 0-4.093-1.343-4.093-3.592 0-2.492 1.915-3.519 4.38-3.812l2.328-.265h.002c.04-.004.08-.008.118-.014 1.079-.152 1.216-1.013 1.1-1.481l-.002-.013c-.266-.993-1.077-1.476-2.205-1.476-1.305 0-2.111.718-2.24 1.816a3.478 3.478 0 0 0-.016.38v.028h-2.948a4.213 4.213 0 0 1 .025-.456C54.821 2.01 56.836.5 59.776.5Zm-.885 10.801c1.58 0 3.088-.953 3.088-2.908V6.865s-.196.776-1.275.92l-1.43.168C57.981 8.124 57 8.418 57 9.713c0 .977.67 1.588 1.891 1.588Z",
        clipRule: "evenodd"
      },
      void 0,
      !1,
      {
        fileName: "app/svg/CanvasLogo.tsx",
        lineNumber: 11,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/svg/CanvasLogo.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), CanvasLogo_default = SvgCanvasLogo;

// app/svg/ClearIcon.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), SvgClearIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 26,
    height: 23,
    fill: "none",
    viewBox: "0 0 26 23",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "path",
      {
        fill: "#fff",
        d: "M0 6.357c.13-.104.268-.2.387-.315C2.317 4.185 4.244 2.328 6.172.468 6.32.325 6.458.17 6.622 0l1.693 1.717L4.69 5.24h.747c3.733 0 7.467.02 11.2-.006 4.376-.032 8.106 2.885 9.076 6.764.111.445.192.895.287 1.342v1.552c-.114.52-.187 1.051-.349 1.558-1.15 3.595-3.647 5.762-7.516 6.436-.469.082-.954.107-1.433.108-4.486.008-8.971.006-13.457.006H2.81v-2.12c.208-.006.43-.018.653-.018 4.37 0 8.74.005 13.111-.005 2.038-.004 3.825-.656 5.215-2.11 1.88-1.964 2.41-4.273 1.502-6.78-.89-2.464-2.76-3.935-5.453-4.4a6.073 6.073 0 0 0-1.032-.093C12.898 7.468 8.99 7.47 5.081 7.47h-.364c1.239 1.273 2.457 2.426 3.632 3.627l-1.76 1.586c-1.272-1.206-2.616-2.474-3.954-3.749-.751-.716-1.492-1.44-2.242-2.158C.273 6.66.132 6.57 0 6.468v-.111Z"
      },
      void 0,
      !1,
      {
        fileName: "app/svg/ClearIcon.tsx",
        lineNumber: 12,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/svg/ClearIcon.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
), ClearIcon_default = SvgClearIcon;

// app/components/Navigation/NavLogo.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function NavLogoDesktop({
  onClick
}) {
  let { theme } = useNavTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "button",
    {
      onClick,
      "aria-label": "CANVAS",
      className: "desktop-only absolute left-0 right-0 m-auto w-max",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        CanvasLogo_default,
        {
          width: 125,
          height: 21,
          className: (0, import_clsx6.default)(
            "transition-colors",
            theme === "transparent" ? "fill-white" : "fill-black"
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Navigation/NavLogo.tsx",
          lineNumber: 19,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Navigation/NavLogo.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}
function NavLogoMobile({
  onClick
}) {
  let { theme } = useNavTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { onClick, "aria-label": "CANVAS", className: "mobile-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    CanvasLogo_default,
    {
      width: 78,
      height: 13,
      className: (0, import_clsx6.default)(
        "transition-colors",
        theme === "transparent" ? "fill-white" : "fill-black"
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Navigation/NavLogo.tsx",
      lineNumber: 40,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Navigation/NavLogo.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/lib/constants.ts
var INSTAGRAM_URL = "https://www.instagram.com/canvascreative", TWITTER_URL = "https://twitter.com/canvascreative", LINKEDIN_URL = "https://www.linkedin.com/company/canvascreative";

// app/components/Layout/Navigation.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Navigation({
  modalOpen,
  setModalOpen
}) {
  let navigate = (0, import_react_router.useNavigate)(), isScrolled = useIsScrolled_default(), { width: windowWidth } = (0, import_usehooks_ts.useWindowSize)(), { theme, setTheme } = useNavTheme();
  (0, import_react10.useEffect)(() => {
    windowWidth < 768 && windowWidth > 0 && isScrolled && setTheme("white");
  }, [windowWidth, isScrolled, setTheme]);
  let onLogoClick = () => {
    modalOpen ? setModalOpen(null) : navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Nav_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      PrimaryCTAButton,
      {
        active: modalOpen === "work",
        dark: theme === "transparent",
        onClick: () => setModalOpen("work"),
        children: "WORK"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Navigation.tsx",
        lineNumber: 46,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Layout/Navigation.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout/Navigation.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(NavLogoMobile, { onClick: onLogoClick }, void 0, !1, {
      fileName: "app/components/Layout/Navigation.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(NavLogoDesktop, { onClick: onLogoClick }, void 0, !1, {
      fileName: "app/components/Layout/Navigation.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      PrimaryCTAButton,
      {
        dark: theme === "transparent",
        active: modalOpen === "contact",
        onClick: () => setModalOpen("contact"),
        children: "Contact"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Navigation.tsx",
        lineNumber: 61,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Layout/Navigation.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Layout/Navigation.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout/Navigation.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
var Navigation_default = Navigation;

// app/components/Layout/LayoutContact.tsx
var import_react15 = require("react");

// app/slices/Contact/ContactPage.tsx
var import_clsx11 = __toESM(require("clsx"));

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => contact_default,
  validator: () => validator
});
var import_zod = require("zod"), import_node2 = require("@remix-run/node"), import_with_zod = require("@remix-validated-form/with-zod"), import_remix_validated_form = require("remix-validated-form");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), validator = (0, import_with_zod.withZod)(
  import_zod.z.object({
    message: import_zod.z.string().min(1, { message: "This field is required" }),
    fullName: import_zod.z.string().min(1, { message: "This field is required" }),
    email: import_zod.z.string().min(1, { message: "This field is required" }).email("Please enter a valid email address (e.g. email@domain.com).")
  })
), action = async ({ request }) => {
  let data = await request.formData(), validation = await validator.validate(data);
  if (validation.error)
    return (0, import_remix_validated_form.validationError)(validation.error);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  let urlencoded = new URLSearchParams();
  urlencoded.append("form-name", "contact"), urlencoded.append("fullName", validation.data.fullName), urlencoded.append("message", validation.data.message), urlencoded.append("email", validation.data.email);
  let response = fetch("https://main--canvas-v4-prod.netlify.app/form", {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  }).then((response2) => response2.json()).catch((error) => error);
  return (0, import_node2.json)({ ok: !0, response });
}, Page = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ContactPage_default, {}, void 0, !1, {
  fileName: "app/routes/contact.tsx",
  lineNumber: 54,
  columnNumber: 10
}, this), contact_default = Page;

// app/slices/Contact/ContactPage.tsx
var import_react14 = require("@remix-run/react");

// app/slices/Contact/ContactForm.tsx
var import_clsx10 = __toESM(require("clsx")), import_remix_validated_form4 = require("remix-validated-form");

// app/components/Input/Input.tsx
var import_clsx8 = __toESM(require("clsx")), import_react12 = require("react"), import_remix_validated_form2 = require("remix-validated-form");

// app/components/Input/InputHelpers.tsx
var import_clsx7 = __toESM(require("clsx"));

// app/components/Transition.tsx
var import_react11 = require("@headlessui/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function FadeInOut({ show, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react11.Transition,
    {
      show,
      enter: "transition-opacity duration-150 ease-in-out ",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition-opacity duration-150 ease-in-out ",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Transition.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}
function FadeInBottom({ show, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react11.Transition,
    {
      show,
      enter: "transition-opacity transition-transform duration-150 ease-in-out ",
      enterFrom: "opacity-0 translate-y-1/2",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition-opacity duration-150 ease-in-out ",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-1/2",
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Transition.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}
function SwitchFadeInFadeOut({ show, onTrue, onFalse, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react11.Transition,
      {
        show,
        enterTo: "opacity-100 translate-y-0",
        enterFrom: "opacity-0 translate-y-1/2",
        enter: "transition-opacity transition-transform duration-150 ease-in-out",
        leaveTo: "opacity-0 translate-y-[1rem]",
        leaveFrom: "opacity-100 translate-y-0",
        leave: "transition-opacity transition-transform duration-200 ease-in-out ",
        ...props,
        children: onTrue(show)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Transition.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react11.Transition,
      {
        show: !show,
        enter: "transition-opacity transition-transform duration-150 ease-in-out ",
        enterFrom: "opacity-0 translate-y-[-1rem]",
        enterTo: "opacity-100 translate-y-0",
        leave: "transition-opacity transition-transform duration-200 ease-in-out ",
        leaveFrom: "opacity-100 translate-y-0",
        leaveTo: "opacity-0 translate-y-[1rem]",
        ...props,
        children: onFalse(show)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Transition.tsx",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Transition.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}
var Transition_default = {
  FadeInOut,
  FadeInBottom,
  SwitchFadeInFadeOut
};

// app/components/Input/InputHelpers.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ErrorMessage({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Transition_default.FadeInBottom, { show: Boolean(error), children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "label--2 absolute bottom-5 left-0 text-red", children: error }, void 0, !1, {
    fileName: "app/components/Input/InputHelpers.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Input/InputHelpers.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function Wrapper({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "cursor-text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "div",
    {
      className: (0, import_clsx7.default)("relative border-b border-b-white/30 pt-6", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Input/InputHelpers.tsx",
      lineNumber: 25,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Input/InputHelpers.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function Label(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    "label",
    {
      className: "body--1 absolute left-0 top-0 origin-top-left scale-[0.6] transition-transform peer-placeholder-shown:scale-100 peer-focus:scale-[0.6]",
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Input/InputHelpers.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
}

// app/components/Input/Input.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Input({
  id,
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}) {
  let ref = (0, import_react12.useRef)(null), { error, getInputProps } = (0, import_remix_validated_form2.useField)(name, {
    validationBehavior: {
      initial: "onSubmit",
      whenTouched: "onSubmit",
      whenSubmitted: "onSubmit"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    Wrapper,
    {
      onClick: () => {
        var _a;
        return (_a = ref.current) == null ? void 0 : _a.focus();
      },
      className: containerClassName,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "input",
          {
            ref,
            id: name,
            name,
            className: (0, import_clsx8.default)(
              "body--1 peer w-full bg-transparent outline-0 ring-0 transition-[padding]",
              error ? "pb-8 text-red" : "pb-5 text-white"
            ),
            placeholder: placeholder || " ",
            ...getInputProps({
              id: name,
              ...props
            })
          },
          void 0,
          !1,
          {
            fileName: "app/components/Input/Input.tsx",
            lineNumber: 30,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Label, { htmlFor: name, children: label }, void 0, !1, {
          fileName: "app/components/Input/Input.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ErrorMessage, { error }, void 0, !1, {
          fileName: "app/components/Input/Input.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Input/Input.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}
var Input_default = Input;

// app/components/Input/TextArea.tsx
var import_clsx9 = __toESM(require("clsx")), import_react13 = require("react"), import_remix_validated_form3 = require("remix-validated-form");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function TextArea({
  id,
  name,
  label,
  placeholder,
  containerClassName,
  ...props
}) {
  let ref = (0, import_react13.useRef)(null), [value, setValue] = (0, import_remix_validated_form3.useControlField)(name), { error, getInputProps } = (0, import_remix_validated_form3.useField)(name, {
    validationBehavior: {
      initial: "onSubmit",
      whenTouched: "onSubmit",
      whenSubmitted: "onSubmit"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    Wrapper,
    {
      onClick: () => {
        var _a;
        return (_a = ref.current) == null ? void 0 : _a.focus();
      },
      className: containerClassName,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "textarea",
          {
            ref,
            id: name,
            name,
            rows: 2,
            placeholder: placeholder || " ",
            className: (0, import_clsx9.default)(
              "body--1 peer min-h-[150px] w-full resize-none bg-transparent py-2 placeholder-white/30 outline-0 ring-0 transition-[height]",
              error ? "text-red" : "text-white"
            ),
            ...getInputProps({
              id: name,
              value,
              onChange: (e) => setValue(e.target.value),
              ...props
            })
          },
          void 0,
          !1,
          {
            fileName: "app/components/Input/TextArea.tsx",
            lineNumber: 34,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Label, { htmlFor: name, children: label }, void 0, !1, {
          fileName: "app/components/Input/TextArea.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ErrorMessage, { error }, void 0, !1, {
          fileName: "app/components/Input/TextArea.tsx",
          lineNumber: 52,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Input/TextArea.tsx",
      lineNumber: 30,
      columnNumber: 5
    },
    this
  );
}
var TextArea_default = TextArea;

// app/slices/Contact/ContactForm.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function ContactSubmitButton({
  submittedOk,
  isFilled
}) {
  let isSubmitting = (0, import_remix_validated_form4.useIsSubmitting)("contact");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex justify-end", children: submittedOk ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "heading--1", children: "Sent" }, void 0, !1, {
    fileName: "app/slices/Contact/ContactForm.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    PrimaryCTAButton,
    {
      dark: !0,
      size: "lg",
      type: "submit",
      disabled: isSubmitting || !isFilled,
      children: isSubmitting ? "Sending" : "Send"
    },
    void 0,
    !1,
    {
      fileName: "app/slices/Contact/ContactForm.tsx",
      lineNumber: 31,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/Contact/ContactForm.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function ContactForm({
  fetcher,
  validator: validator2
}) {
  var _a;
  let submittedOk = ((_a = fetcher.data) == null ? void 0 : _a.ok) || !1, isSubmitting = fetcher.state === "submitting", [fullName, setFullName] = (0, import_remix_validated_form4.useControlField)(
    "fullName",
    "contactForm"
  ), [email, setEmail] = (0, import_remix_validated_form4.useControlField)("email", "contactForm"), [message, setMessage] = (0, import_remix_validated_form4.useControlField)(
    "message",
    "contactForm"
  ), isFilled = Boolean(fullName) && Boolean(email) && Boolean(message);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_remix_validated_form4.ValidatedForm,
    {
      method: "post",
      fetcher,
      validator: validator2,
      id: "contactForm",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "div",
          {
            className: (0, import_clsx10.default)(
              "transition-opacity",
              isSubmitting || submittedOk ? "pointer-events-none select-none opacity-30" : "pointer-events-auto opacity-100"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                Input_default,
                {
                  type: "text",
                  name: "fullName",
                  label: "Full Name*",
                  containerClassName: "mb-5",
                  value: fullName || "",
                  onChange: (e) => setFullName(e.target.value)
                },
                void 0,
                !1,
                {
                  fileName: "app/slices/Contact/ContactForm.tsx",
                  lineNumber: 82,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                Input_default,
                {
                  type: "text",
                  name: "email",
                  label: "Email*",
                  containerClassName: "mb-5",
                  value: email || "",
                  onChange: (e) => setEmail(e.target.value)
                },
                void 0,
                !1,
                {
                  fileName: "app/slices/Contact/ContactForm.tsx",
                  lineNumber: 90,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                TextArea_default,
                {
                  name: "message",
                  label: "Project Detail*",
                  containerClassName: "mb-10",
                  placeholder: "Let\u2019s start with a brief overview of what you\u2019re looking for, budget range, and timeline.",
                  value: message || "",
                  onChange: (e) => setMessage(e.target.value)
                },
                void 0,
                !1,
                {
                  fileName: "app/slices/Contact/ContactForm.tsx",
                  lineNumber: 98,
                  columnNumber: 11
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/slices/Contact/ContactForm.tsx",
            lineNumber: 74,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ContactSubmitButton, { submittedOk, isFilled }, void 0, !1, {
          fileName: "app/slices/Contact/ContactForm.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/Contact/ContactForm.tsx",
      lineNumber: 68,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/Contact/ContactForm.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
var ContactForm_default = ContactForm;

// app/slices/Contact/ContactPage.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), ContactPage = () => {
  var _a;
  let fetcher = (0, import_react14.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "div",
    {
      className: "noise-background flex min-h-screen items-start bg-pure-black pt-header text-white md:items-center md:pt-headerDesk",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid-container w-full pb-24 pt-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-4 mb-5 border-t border-t-white/30 md:col-span-12" }, void 0, !1, {
          fileName: "app/slices/Contact/ContactPage.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-4 mb-12 md:order-1 md:col-start-1 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "heading--2 py-6 md:mb-20 md:py-0", children: "Let\u2019s chat" }, void 0, !1, {
          fileName: "app/slices/Contact/ContactPage.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/Contact/ContactPage.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "div",
          {
            className: "col-span-4 md:order-2 md:col-span-6 md:col-start-7 md:mb-20",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative overflow-hidden", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                "div",
                {
                  className: (0, import_clsx11.default)(
                    "absolute inset-0 transition delay-75 duration-300",
                    (_a = fetcher.data) != null && _a.ok ? "translate-y-0 opacity-100" : "translate-y-[1rem] opacity-0"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "body--1", children: [
                    "Your message has been sent, thank you! ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/slices/Contact/ContactPage.tsx",
                      lineNumber: 39,
                      columnNumber: 56
                    }, this),
                    "Someone from our team will be reaching out to you shortly."
                  ] }, void 0, !0, {
                    fileName: "app/slices/Contact/ContactPage.tsx",
                    lineNumber: 38,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/slices/Contact/ContactPage.tsx",
                  lineNumber: 30,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                "div",
                {
                  className: (0, import_clsx11.default)(
                    "transition-transform duration-300",
                    fetcher.data ? "-translate-y-full" : "translate-y-0"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "body--1", children: [
                    "We\u2019re curious to learn about your company and how we could help. Fill out the form below or if you would prefer to email us hit us up at",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "mailto:biz@canvascreative.co", children: "biz@canvascreative.co" }, void 0, !1, {
                      fileName: "app/slices/Contact/ContactPage.tsx",
                      lineNumber: 54,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/slices/Contact/ContactPage.tsx",
                    lineNumber: 50,
                    columnNumber: 15
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/slices/Contact/ContactPage.tsx",
                  lineNumber: 44,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/slices/Contact/ContactPage.tsx",
            lineNumber: 24,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-4 mb-14 md:order-3 md:col-span-6 md:col-start-7 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ContactForm_default, { fetcher, validator }, void 0, !1, {
          fileName: "app/slices/Contact/ContactPage.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/Contact/ContactPage.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-4 md:order-2 md:col-start-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mb-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "label--2", children: "new business" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LinkCTA, { className: "body--3", to: "mailto:biz@canvascreative.co", children: "biz@canvascreative.co" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/slices/Contact/ContactPage.tsx",
            lineNumber: 65,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mb-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "label--2", children: "careers" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 72,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              LinkCTA,
              {
                className: "body--3",
                to: "mailto:careers@canvascreative.co",
                children: "careers@canvascreative.co"
              },
              void 0,
              !1,
              {
                fileName: "app/slices/Contact/ContactPage.tsx",
                lineNumber: 73,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/slices/Contact/ContactPage.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mb-14", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "label--2", children: "general" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LinkCTA, { className: "body--3", to: "mailto:info@canvascreative.co", children: "info@canvascreative.co" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/slices/Contact/ContactPage.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-4 md:absolute md:bottom-0 md:pb-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LinkCTA, { className: "body--3", target: "_blank", to: INSTAGRAM_URL, children: "Instagram" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LinkCTA, { className: "body--3", target: "_blank", to: LINKEDIN_URL, children: "LinkedIn" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LinkCTA, { className: "body--3", target: "_blank", to: TWITTER_URL, children: "Twitter" }, void 0, !1, {
              fileName: "app/slices/Contact/ContactPage.tsx",
              lineNumber: 94,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/slices/Contact/ContactPage.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/Contact/ContactPage.tsx",
          lineNumber: 64,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/slices/Contact/ContactPage.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/Contact/ContactPage.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}, ContactPage_default = ContactPage;

// app/components/Layout/LayoutContact.tsx
var import_react16 = require("@headlessui/react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function LayoutContact({
  show,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react16.Transition, { show, as: import_react15.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react16.Dialog, { onClose, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_react16.Transition.Child,
      {
        as: import_react15.Fragment,
        enter: "ease-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "div",
          {
            className: "noise-background fixed inset-0 h-full w-full bg-pure-black"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/LayoutContact.tsx",
            lineNumber: 24,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/LayoutContact.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_react16.Transition.Child,
      {
        as: import_react15.Fragment,
        enter: "ease-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-out duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "div",
          {
            "data-lenis-prevent": !0,
            className: "fixed inset-0 h-full w-full overflow-scroll",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ContactPage_default, {}, void 0, !1, {
              fileName: "app/components/Layout/LayoutContact.tsx",
              lineNumber: 44,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/LayoutContact.tsx",
            lineNumber: 40,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/LayoutContact.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Layout/LayoutContact.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Layout/LayoutContact.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var LayoutContact_default = LayoutContact;

// app/components/Layout/LayoutWorkMenu.tsx
var import_clsx13 = __toESM(require("clsx")), import_gsap6 = require("gsap");

// app/lib/easings.ts
var import_gsap4 = require("gsap"), import_CustomEase = __toESM(require("gsap/dist/CustomEase"));
import_gsap4.gsap.registerPlugin(import_CustomEase.default);
var easings = {
  mask: import_CustomEase.default.create("custom", "M0,0 C0.77,0 0.18,1 1,1")
}, easings_default = easings;

// app/components/ProjectHero/ProjectHero.tsx
var import_clsx12 = __toESM(require("clsx")), import_gsap5 = require("gsap"), import_Flip = __toESM(require("gsap/dist/Flip")), import_react20 = require("react");
var import_react21 = require("@remix-run/react"), import_richtext = require("@prismicio/richtext");

// app/components/Image/Image.tsx
var import_react17 = require("react"), import_react18 = require("@prismicio/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), Image = (0, import_react17.forwardRef)(
  ({ field, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    import_react18.PrismicImage,
    {
      ref,
      fallbackAlt: "",
      widths: [800, 1e3, 1600, 1920, 2400],
      imgixParams: { auto: ["format"] },
      field,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/Image/Image.tsx",
      lineNumber: 12,
      columnNumber: 7
    },
    this
  )
);
Image.displayName = "Image";

// app/components/CTA/TextCTA.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function TextCta({ children, ...props }) {
  let { ref } = useTextAnimation_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TextCloneButton_default, { ref, ...props, children }, void 0, !1, {
    fileName: "app/components/CTA/TextCTA.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var TextCTA_default = TextCta;

// app/components/Video/Video.tsx
var import_react19 = require("react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), Video = (0, import_react19.forwardRef)(
  ({
    lazy = !0,
    autoPlay,
    className,
    playable = !1,
    poster,
    src,
    ...props
  }, ref) => {
    let extraProps = autoPlay ? { autoPlay: !0, muted: !0, loop: !0, playsInline: !0 } : {};
    return lazy ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "video",
      {
        ref,
        poster,
        className,
        ...extraProps,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("source", { "data-src": src, type: "video/mp4" }, void 0, !1, {
          fileName: "app/components/Video/Video.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Video/Video.tsx",
        lineNumber: 28,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "video",
      {
        ref,
        src,
        poster,
        className,
        ...extraProps,
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/Video/Video.tsx",
        lineNumber: 40,
        columnNumber: 7
      },
      this
    );
  }
), Video_default = Video;

// app/components/ProjectHero/ProjectHeroTable.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function ProjectHeroItem({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "body--3 hero-table-row__item block text-white", children }, void 0, !1, {
    fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
function ProjectHeroTable({
  data,
  isClone = !1
}) {
  return !data || !data.links ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "hero-table relative col-span-4 mb-10 md:col-span-5 md:col-start-8 md:mb-40 md:border-t-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "pb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex w-full overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-1/2 md:w-2/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectHeroItem, { children: "Role" }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      data.links.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-1/2 md:w-1/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectHeroItem, { children: "Links" }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    data.roles.map((item, index) => {
      var _a, _b, _c;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        "div",
        {
          className: "relative flex overflow-hidden py-2.5",
          children: [
            index === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectHeroLine, { className: "mobile-only", top: !0 }, void 0, !1, {
              fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex w-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-1/2 md:w-2/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectHeroItem, { children: item.role_item }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
                lineNumber: 60,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
                lineNumber: 59,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
                lineNumber: 58,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "w-1/2 md:w-1/3", children: data.links[index] ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
                "a",
                {
                  rel: "noreferrer",
                  target: "_blank",
                  className: "body--3 relative inline-block w-max",
                  tabIndex: isClone ? -1 : 0,
                  href: (_b = (_a = data.links[index]) == null ? void 0 : _a.link_item) == null ? void 0 : _b.url,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectHeroItem, { children: (_c = data.links[index]) == null ? void 0 : _c.label }, void 0, !1, {
                    fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
                  lineNumber: 67,
                  columnNumber: 19
                },
                this
              ) : null }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
                lineNumber: 65,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
              lineNumber: 56,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ProjectHeroLine, {}, void 0, !1, {
              fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
              lineNumber: 82,
              columnNumber: 13
            }, this)
          ]
        },
        `WorkHero-Roles-${index}`,
        !0,
        {
          fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
          lineNumber: 49,
          columnNumber: 11
        },
        this
      );
    })
  ] }, void 0, !0, {
    fileName: "app/components/ProjectHero/ProjectHeroTable.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/components/ProjectHero/ProjectHero.tsx
var import_usehooks_ts2 = require("usehooks-ts");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), ProjectHeroTitle = ({
  field,
  children,
  animateTitles,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
  "div",
  {
    ...props,
    className: (0, import_clsx12.default)(
      "ProjectHeroTitle",
      "display--1 leading--none relative col-span-4 my-12 md:col-span-12 md:mb-32 md:mt-24 md:h-[7rem]",
      props.className ? props.className : "text-white"
    ),
    children: field ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "h1",
      {
        className: "display--1 overflow-hidden",
        dangerouslySetInnerHTML: {
          __html: field ? `${(0, import_richtext.asText)(field)}` : ""
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProjectHero/ProjectHero.tsx",
        lineNumber: 45,
        columnNumber: 9
      },
      this
    ) : animateTitles ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "hero-table-row__item block", children }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this) : children
  },
  void 0,
  !1,
  {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 36,
    columnNumber: 5
  },
  this
), ProjectHeroSubtitle = ({
  children,
  field,
  animateTitles,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
  "div",
  {
    ...props,
    className: (0, import_clsx12.default)(
      "ProjectHeroSubtitle",
      "heading--3 relative col-span-4 mb-12 text-white md:col-span-12 md:mb-2 md:h-[1rem] md:pb-20",
      props.className
    ),
    children: field ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h3", { className: "heading--3 overflow-hidden", children: animateTitles ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "hero-table-row__item block", children: field ? (0, import_richtext.asText)(field) : "" }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this) : field ? (0, import_richtext.asText)(field) : "" }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) : children
  },
  void 0,
  !1,
  {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 67,
    columnNumber: 5
  },
  this
);
function ProjectHeroCTA({
  isClone = !1,
  field,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "desktop-only relative overflow-hidden md:col-span-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("button", { ...props, className: (0, import_clsx12.default)("overflow-hidden", props.className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "hero-table-row__item flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "heading--3 mr-1 inline-block text-white", children: "( " }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(TextCTA_default, { className: "heading--3 text-white", children: typeof field == "string" ? field : field ? (0, import_richtext.asText)(field) : "" }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "heading--3 ml-1 inline-block text-white", children: " )" }, void 0, !1, {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 112,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
function ProjectBackground({
  field,
  isClone,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "div",
    {
      className: (0, import_clsx12.default)(
        "ProjectHeroBackground",
        "absolute flex h-full w-full overflow-hidden",
        isClone ? "items-end" : "items-start"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        Image,
        {
          ...props,
          field,
          className: (0, import_clsx12.default)(props == null ? void 0 : props.className, "min-h-screen w-full object-cover")
        },
        void 0,
        !1,
        {
          fileName: "app/components/ProjectHero/ProjectHero.tsx",
          lineNumber: 138,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 131,
      columnNumber: 5
    },
    this
  );
}
var ProjectHeroLine = ({ top = !1, className = "" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
  "div",
  {
    className: (0, import_clsx12.default)(
      className,
      top ? "top-0" : "bottom-0",
      "hero-table-line absolute bottom-0 left-0 block h-[1px] w-full origin-left bg-white/30"
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 149,
    columnNumber: 5
  },
  this
), animateBanner = (tl, { position, stagger, ease, duration, ...vars }, { title, subtitle, scope, itemsScope }) => {
  let tableLines = itemsScope ? itemsScope.querySelectorAll(".hero-table-line") : scope.querySelectorAll(".hero-table-line"), tableItems = itemsScope ? itemsScope.querySelectorAll(".hero-table-row__item") : scope.querySelectorAll(".hero-table-row__item");
  tl.to(
    tableLines,
    {
      scaleX: 1,
      ...vars
    },
    position
  ), tl.to(
    tableItems,
    {
      y: "0%",
      ease,
      duration,
      stagger,
      ...vars
    },
    position
  );
  let titleText = title.querySelector("span");
  if (tl.to(
    titleText,
    {
      ease,
      duration,
      fontSize: "6.875rem",
      letterSpacing: "-0.1375rem",
      transformOrigin: "top left",
      ...vars
    },
    position
  ), subtitle) {
    let subtitleText = subtitle.querySelector("span");
    tl.to(
      subtitleText,
      {
        ease,
        duration,
        fontSize: "1.5rem",
        letterSpacing: "-0.015rem",
        transformOrigin: "top left",
        ...vars
      },
      position
    );
  }
  let cloneHeroTitle = scope.querySelector(".ProjectHeroTitle");
  if (cloneHeroTitle) {
    let titleState = import_Flip.default.getState(title);
    cloneHeroTitle.appendChild(title), import_Flip.default.from(titleState, { duration, ease, ...vars });
  } else
    console.warn("NO CLONE TITLE DETECTED IN SCOPE");
  if (subtitle) {
    let cloneHeroSubtitle = scope.querySelector(".ProjectHeroSubtitle");
    if (cloneHeroSubtitle) {
      let subtitleState = import_Flip.default.getState(subtitle);
      cloneHeroSubtitle == null || cloneHeroSubtitle.appendChild(subtitle), import_Flip.default.from(subtitleState, { duration, ease, ...vars });
    } else
      console.warn("NO CLONE SUBTITLE DETECTED IN SCOPE");
  }
}, setupBannerAnimation = (scope) => {
  let tableLines = scope.querySelectorAll(".hero-table-line"), tableItems = scope.querySelectorAll(".hero-table-row__item");
  import_gsap5.gsap.set(tableLines, { scaleX: 0 }), import_gsap5.gsap.set(tableItems, { y: "200%" });
};
function ProjectPrefetchLink({ slug }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "absolute left-0 top-0 opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react21.Link, { prefetch: "viewport", to: `/work/${slug}`, children: "Prefetch link" }, void 0, !1, {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 266,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ProjectHero/ProjectHero.tsx",
    lineNumber: 265,
    columnNumber: 5
  }, this);
}
function ProjectHeroVideo({
  animate = !0,
  field,
  poster,
  className
}) {
  let ref = (0, import_react20.useRef)(null), [, setLocked] = (0, import_usehooks_ts2.useLockedBody)(!0);
  return useIsomorphicLayoutEffect_default(() => {
    let ctx = import_gsap5.gsap.context(() => {
      import_gsap5.gsap.timeline({
        autoRemoveChildren: !0,
        onComplete: () => {
          setLocked(!1);
        }
      }).to(ref.current, {
        y: 0,
        duration: 1,
        autoAlpha: 1,
        ease: easings_default.mask
      });
    });
    return () => ctx.revert();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "div",
    {
      ref,
      className: (0, import_clsx12.default)(
        animate ? "translate-y-1/2 opacity-0" : "",
        "col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3 md:aspect-video",
        className
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Video_default, { autoPlay: !0, src: field.url, poster: poster.url ?? "" }, void 0, !1, {
        fileName: "app/components/ProjectHero/ProjectHero.tsx",
        lineNumber: 316,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 308,
      columnNumber: 5
    },
    this
  );
}
function ProjectHero({
  animateVideo = !1,
  absolute = !1,
  animateTitles = !1,
  children,
  className,
  cta,
  debug = !1,
  focusable = !1,
  image,
  isClone = !1,
  subTitleField,
  tableData,
  titleField,
  video,
  ...props
}) {
  let container = (0, import_react20.useRef)(null), extraProps = isClone ? { tabIndex: -1, "aria-hidden": !0 } : {}, baseClassNames = isClone ? "pointer-events-none" : "", debugClassNames = debug ? "border inner border-white" : "", positionClassNames = absolute ? "absolute min-h-screen w-full left-0 top-0" : "relative";
  return useIsomorphicLayoutEffect_default(() => {
    isClone && container.current && setupBannerAnimation(container.current);
  }, [isClone]), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "div",
    {
      ...props,
      ...extraProps,
      ref: container,
      className: (0, import_clsx12.default)(
        "ProjectHero",
        className,
        baseClassNames,
        positionClassNames,
        debugClassNames
      ),
      children: [
        image ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ProjectBackground, { isClone, field: image }, void 0, !1, {
          fileName: "app/components/ProjectHero/ProjectHero.tsx",
          lineNumber: 385,
          columnNumber: 16
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
          "div",
          {
            className: (0, import_clsx12.default)(
              "grid-container relative pt-header md:pt-headerDesk",
              debugClassNames
            ),
            children: [
              debug ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "absolute left-0 top-0 bg-black text-white", children: "ProjectHero" }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHero.tsx",
                lineNumber: 394,
                columnNumber: 11
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                ProjectHeroTitle,
                {
                  animateTitles,
                  className: debugClassNames,
                  "aria-hidden": isClone,
                  tabIndex: isClone ? -1 : 0,
                  field: titleField
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProjectHero/ProjectHero.tsx",
                  lineNumber: 398,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                ProjectHeroSubtitle,
                {
                  animateTitles,
                  className: debugClassNames,
                  "aria-hidden": isClone,
                  tabIndex: isClone ? -1 : 0,
                  field: subTitleField
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProjectHero/ProjectHero.tsx",
                  lineNumber: 405,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative col-span-4 mb-3 md:col-span-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ProjectHeroLine, {}, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHero.tsx",
                lineNumber: 413,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHero.tsx",
                lineNumber: 412,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                ProjectHeroCTA,
                {
                  tabIndex: isClone ? -1 : 0,
                  className: debugClassNames,
                  field: "SEE PROJECT DETAILS",
                  onClick: () => {
                    cta && cta();
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProjectHero/ProjectHero.tsx",
                  lineNumber: 415,
                  columnNumber: 9
                },
                this
              ),
              tableData ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ProjectHeroTable, { isClone, data: tableData }, void 0, !1, {
                fileName: "app/components/ProjectHero/ProjectHero.tsx",
                lineNumber: 425,
                columnNumber: 11
              }, this) : null,
              video && !isClone ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                ProjectHeroVideo,
                {
                  animate: animateVideo,
                  className: debugClassNames,
                  ...video
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProjectHero/ProjectHero.tsx",
                  lineNumber: 429,
                  columnNumber: 11
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                "div",
                {
                  className: (0, import_clsx12.default)(
                    "col-span-4 mb-10 aspect-video md:col-span-8 md:col-start-3",
                    debugClassNames
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProjectHero/ProjectHero.tsx",
                  lineNumber: 435,
                  columnNumber: 11
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProjectHero/ProjectHero.tsx",
            lineNumber: 387,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ProjectHero/ProjectHero.tsx",
      lineNumber: 373,
      columnNumber: 5
    },
    this
  );
}
var ProjectHero_default = ProjectHero;

// app/components/ProjectHero/index.ts
var ProjectHero_default2 = ProjectHero_default;

// app/components/Layout/LayoutWorkMenu.tsx
var import_react_router2 = require("react-router"), import_react22 = require("react");
var import_react23 = require("@headlessui/react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function LayoutWorkMenuItem({
  index,
  length,
  hovered,
  someIsHovered,
  item,
  ...props
}) {
  var _a;
  let refs = (0, import_react22.useRef)([]), opacity = someIsHovered && !hovered ? "opacity-50" : "opacity-100", opacityTransition = "transition-opacity duration-200", setRefs = (0, import_react22.useCallback)((node) => {
    node && (refs.current = [...refs.current, node]);
  }, []), media = item.items.map((_it) => ({
    image: _it.thumbnail,
    video: _it.thumbnail_video
  }));
  return (0, import_react22.useEffect)(() => {
    hovered ? refs.current.forEach((video) => video.play()) : refs.current.forEach((video) => {
      video.pause(), video.currentTime = 0;
    });
  }, [hovered]), /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    "button",
    {
      ...props,
      className: "LayoutWorkMenuItem grid-container cursor-pointer",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "div",
          {
            className: `col-span-2 flex h-full items-center ${opacity} ${opacityTransition}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h1", { className: "LayoutWorkMenuItem__title label--2 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: item.primary.name }, void 0, !1, {
                fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                lineNumber: 70,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                lineNumber: 69,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { className: "label--2 mobile-only text-white", children: `${index + 1}/${length}` }, void 0, !1, {
                fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                lineNumber: 72,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 66,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "div",
          {
            className: `desktop-only col-span-2 flex h-full items-center ${opacity} ${opacityTransition}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h2", { className: "label--2 col-span-1 text-white", children: `${index + 1}/${length}` }, void 0, !1, {
              fileName: "app/components/Layout/LayoutWorkMenu.tsx",
              lineNumber: 80,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 77,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "div",
          {
            className: `col-span-2 flex h-full items-center ${opacity} ${opacityTransition}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("h3", { className: "label--2  text-left text-white", children: (_a = item.primary.capabilities) == null ? void 0 : _a.split(", ").map((_it, _idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("span", { children: [
              _it,
              /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                lineNumber: 92,
                columnNumber: 15
              }, this)
            ] }, `LayoutWorkMenuItem-capabilities-${_it}-${_idx}`, !0, {
              fileName: "app/components/Layout/LayoutWorkMenu.tsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)) }, void 0, !1, {
              fileName: "app/components/Layout/LayoutWorkMenu.tsx",
              lineNumber: 88,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 85,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "div",
          {
            className: (0, import_clsx13.default)(
              opacityTransition,
              someIsHovered && !hovered ? "opacity-0" : "opacity-100",
              "pointer-events-none col-span-5 col-start-8 hidden gap-[20px] md:grid md:grid-cols-5"
            ),
            children: media.map((item2, _idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              "div",
              {
                className: "aspect-square overflow-hidden",
                children: "url" in item2.video && item2.video.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                  Video_default,
                  {
                    lazy: !1,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    src: item2.video.url,
                    poster: item2.image.url || "",
                    className: "w-full",
                    ref: (node) => setRefs(node)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                    lineNumber: 112,
                    columnNumber: 17
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                  Image,
                  {
                    loading: "eager",
                    field: item2.image,
                    className: "w-full"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                    lineNumber: 124,
                    columnNumber: 17
                  },
                  this
                )
              },
              `LayoutWorkMenuItemImage-${index}-${_idx}`,
              !1,
              {
                fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                lineNumber: 107,
                columnNumber: 13
              },
              this
            ))
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 98,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Layout/LayoutWorkMenu.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}
function LayoutWorkMenu({
  show,
  onClose,
  data
}) {
  let navigate = (0, import_react_router2.useNavigate)(), [locked, setLocked] = (0, import_react22.useState)(!1), [hoveredIndex, setHoveredIndex] = (0, import_react22.useState)(null), onItemClick = (e, slug, index) => {
    var _a;
    setLocked(!0);
    let tl = import_gsap6.gsap.timeline({
      onComplete: () => {
        navigate(`/work/${slug}`, { preventScrollReset: !1 }), setTimeout(() => {
          onClose(), setLocked(!1);
        }, 200);
      }
    }), duration = 1, ease = easings_default.mask;
    if (tl.to(".LayoutWorkMenuItem", {
      opacity: 0,
      duration: 0.5
    }), e.target instanceof Element) {
      let container = (_a = document.querySelector(".LayoutWorkMenu-Hero")) == null ? void 0 : _a.children[index], title = e.target.querySelector(".LayoutWorkMenuItem__title"), background = document.querySelectorAll(".LayoutWorkMenu-Background")[index].querySelector("img");
      title && container && background && (tl.to(
        background,
        {
          ease,
          duration: duration - 0.3,
          y: background ? (background == null ? void 0 : background.scrollHeight) - window.innerHeight : 0
        },
        0
      ), animateBanner(
        tl,
        {
          ease,
          duration,
          position: 0.2,
          stagger: 0.02
        },
        {
          title,
          scope: container
        }
      ));
    }
  }, onMouseEnter = (index) => {
    locked || setHoveredIndex(index);
  }, onMouseLeave = () => {
    locked || setHoveredIndex(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react23.Transition, { show, as: import_react22.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_react23.Dialog, { onClose, className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      import_react23.Transition.Child,
      {
        unmount: !1,
        as: import_react22.Fragment,
        enter: "ease-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
          "div",
          {
            className: (0, import_clsx13.default)(
              locked ? "" : "noise-background bg-pure-black",
              "fixed inset-0 h-full w-full"
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 234,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/LayoutWorkMenu.tsx",
        lineNumber: 224,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
      import_react23.Transition.Child,
      {
        unmount: !1,
        as: import_react22.Fragment,
        enter: "ease-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-out duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "fixed inset-0 h-full w-full", children: [
          data.data.body.map((item, _idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            "div",
            {
              className: "LayoutWorkMenu-Background pointer-events-none absolute flex h-full w-full items-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                Image,
                {
                  className: (0, import_clsx13.default)(
                    hoveredIndex === _idx ? "opacity-100" : "opacity-0 delay-100",
                    "absolute w-full items-start object-cover transition-opacity duration-500 ease-out"
                  ),
                  field: item.primary.background
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                  lineNumber: 263,
                  columnNumber: 19
                },
                this
              )
            },
            `LayoutWorkMenuItem-background--${_idx}`,
            !1,
            {
              fileName: "app/components/Layout/LayoutWorkMenu.tsx",
              lineNumber: 257,
              columnNumber: 17
            },
            this
          )),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "LayoutWorkMenu-Hero", children: data.data.body.map((item, _idx) => {
            if ("data" in item.primary.project_page_data)
              return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                ProjectHero_default2,
                {
                  absolute: !0,
                  isClone: !0,
                  tableData: item.primary.project_page_data.data
                },
                `LayoutWorkMenu-Hero-${_idx}`,
                !1,
                {
                  fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                  lineNumber: 277,
                  columnNumber: 21
                },
                this
              );
          }) }, void 0, !1, {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 273,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "relative h-full w-full flex-col justify-end pt-40 md:flex md:items-end md:pb-[30px] md:pt-headerDesk", children: data.data.body.map((item, _idx, arr) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
            "div",
            {
              className: "LayoutWorkMenuItem mb-5 last:mb-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
                LayoutWorkMenuItem,
                {
                  hovered: hoveredIndex === _idx,
                  someIsHovered: hoveredIndex !== null,
                  item,
                  index: _idx,
                  length: arr.length,
                  onMouseLeave,
                  onMouseEnter: () => onMouseEnter(_idx),
                  onClick: (e) => onItemClick(e, item.primary.link, _idx)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Layout/LayoutWorkMenu.tsx",
                  lineNumber: 300,
                  columnNumber: 21
                },
                this
              )
            },
            `LayoutWorkMenuItem-${item.primary.link}-${_idx}`,
            !1,
            {
              fileName: "app/components/Layout/LayoutWorkMenu.tsx",
              lineNumber: 296,
              columnNumber: 19
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/Layout/LayoutWorkMenu.tsx",
            lineNumber: 290,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Layout/LayoutWorkMenu.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/LayoutWorkMenu.tsx",
        lineNumber: 242,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Layout/LayoutWorkMenu.tsx",
    lineNumber: 223,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Layout/LayoutWorkMenu.tsx",
    lineNumber: 222,
    columnNumber: 5
  }, this);
}
var LayoutWorkMenu_default = LayoutWorkMenu;

// app/components/Layout/Layout.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function Layout({
  children,
  workMenuData
}) {
  let [modalOpen, setModalOpen] = (0, import_react24.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(NavThemeProvider_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      Navigation_default,
      {
        modalOpen,
        setModalOpen: (modal) => setModalOpen(modal)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Layout.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      LayoutContact_default,
      {
        show: modalOpen === "contact",
        onClose: () => setModalOpen(null)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Layout.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    ),
    workMenuData ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      LayoutWorkMenu_default,
      {
        data: workMenuData,
        show: modalOpen === "work",
        onClose: () => setModalOpen(null)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Layout.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Lenis_default, { children }, void 0, !1, {
      fileName: "app/components/Layout/Layout.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout/Layout.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
var Layout_default = Layout;

// app/components/Layout/index.tsx
var Layout_default2 = Layout_default;

// app/root.tsx
var import_gsap7 = require("gsap"), import_Flip2 = __toESM(require("gsap/dist/Flip")), import_SplitText = __toESM(require("gsap/dist/SplitText")), import_ScrollSmoother = __toESM(require("gsap/dist/ScrollSmoother")), import_ScrollTrigger = __toESM(require("gsap/dist/ScrollTrigger")), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
import_gsap7.gsap.registerPlugin(import_Flip2.default, import_ScrollTrigger.default, import_ScrollSmoother.default, import_SplitText.default);
var links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: splide_core_min_default },
  { rel: "stylesheet", href: components_default }
], loader = async () => {
  let workMenu = await createClient2().getSingle("workmenu", {
    fetchLinks: ["project_page.roles", "project_page.links"]
  });
  return (0, import_node3.defer)({
    workMenu
  });
}, meta = () => [
  {
    charset: "utf-8",
    title: "Canvas | Design Studio and Creative Agency",
    viewport: "width=device-width,initial-scale=1"
  }
];
function Document({ children, title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react25.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react25.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react25.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react25.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react25.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function App() {
  let { workMenu } = (0, import_react25.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(Layout_default2, { workMenuData: workMenu, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 109,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 108,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}

// app/routes/work.$project.tsx
var work_project_exports = {};
__export(work_project_exports, {
  default: () => work_project_default,
  loader: () => loader2
});
var import_clsx17 = __toESM(require("clsx")), import_node4 = require("@remix-run/node"), import_react32 = require("@remix-run/react"), import_usehooks_ts3 = require("usehooks-ts");

// app/lib/projectDetails.ts
function getKey(prefix, ...keys) {
  return `${prefix}-${keys.join("-")}`;
}
var createTableColumns = (items) => {
  let columns = [], columnItem = [];
  return items.forEach((item) => {
    item.isheader ? (columnItem = [], columnItem.push(item), columns.push(columnItem)) : columnItem.push(item);
  }), columns;
}, createTableRows = (items) => {
  let columns = createTableColumns(items), headers = items.filter((a) => a.isheader), rowsLength = columns.reduce((a, b) => a.length > b.length ? a : b).length, colsLength = headers.length, rows = Array.from(Array(rowsLength), () => new Array(colsLength));
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    let row = rows[rowIndex];
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++)
      rows[rowIndex][cellIndex] = columns[cellIndex][rowIndex];
  }
  return rows;
}, normalizeProjectDetailsData = (body) => body.map((bodyItem) => ({
  title: bodyItem.primary.title1,
  description: bodyItem.primary.description,
  columns: createTableColumns(bodyItem.items),
  rows: createTableRows(bodyItem.items)
}));

// app/slices/WorkProject/WorkProjectSliceZone.tsx
var import_react27 = require("@remix-run/react");

// app/slices/WorkProject/WorkProjectFullWidth.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function WorkProjectFullWidth({ item, lazy }) {
  return "url" in item.primary.video && item.primary.video.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("section", { className: "aspect-video select-none bg-red", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    Video_default,
    {
      autoPlay: !0,
      lazy,
      src: item.primary.video.url,
      poster: item.primary.background.url || ""
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectFullWidth.tsx",
      lineNumber: 15,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectFullWidth.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    Image,
    {
      loading: lazy ? "eager" : "lazy",
      field: item.primary.background,
      className: "w-full select-none object-cover"
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectFullWidth.tsx",
      lineNumber: 27,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectFullWidth.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
var WorkProjectFullWidth_default = WorkProjectFullWidth;

// app/slices/WorkProject/WorkProject2Column.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function WorkProject2Column({ item, lazy }) {
  let leftIsVideo = !!item.primary.left_video.url, rightIsVideo = !!item.primary.right_video.url;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "md:flex", children: [
    leftIsVideo ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-full bg-pure-black md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      Video_default,
      {
        autoPlay: !0,
        lazy,
        className: "h-full w-full object-cover",
        src: item.primary.left_video.url
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
        lineNumber: 22,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      Image,
      {
        loading: lazy ? "eager" : "lazy",
        className: "w-full select-none md:w-1/2",
        field: item.primary.left_image
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    ),
    rightIsVideo ? /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "w-full bg-pure-black md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      Video_default,
      {
        autoPlay: !0,
        lazy,
        className: "h-full w-full object-cover",
        src: item.primary.right_video.url
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
        lineNumber: 41,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      Image,
      {
        loading: lazy ? "eager" : "lazy",
        className: "w-full select-none md:w-1/2",
        field: item.primary.right_image
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/slices/WorkProject/WorkProject2Column.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var WorkProject2Column_default = WorkProject2Column;

// app/slices/WorkProject/WorkProjectVideoColor.tsx
var import_clsx14 = __toESM(require("clsx"));
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function WorkProjectVideoColor({ lazy, item }) {
  let containerClassNames = item.primary.square ? "md:min-h-screen" : "md:aspect-video", contentClassNames = item.primary.square ? "md:col-span-6 md:col-start-4" : "md:col-span-8 md:col-start-3 md:aspect-video bg-black";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
    "div",
    {
      className: (0, import_clsx14.default)("md:grid-container items-center", containerClassNames),
      style: {
        backgroundColor: item.primary.background_color || "#fff000"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: contentClassNames, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
        Video_default,
        {
          autoPlay: !0,
          lazy,
          poster: item.primary.cover.url || "",
          src: item.primary.video.url
        },
        void 0,
        !1,
        {
          fileName: "app/slices/WorkProject/WorkProjectVideoColor.tsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/slices/WorkProject/WorkProjectVideoColor.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectVideoColor.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
var WorkProjectVideoColor_default = WorkProjectVideoColor;

// app/slices/WorkProject/WorkProjectVideoPhoto.tsx
var import_clsx15 = __toESM(require("clsx"));
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function WorkProjectVideoPhoto({ item, lazy }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("section", { className: "WorkProjectSlice relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      Image,
      {
        field: item.primary.image,
        loading: lazy ? "eager" : "lazy",
        className: "desktop-only w-full"
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectVideoPhoto.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      "div",
      {
        className: (0, import_clsx15.default)(
          "md:absolute md:left-0 md:top-0 md:flex md:h-full md:w-full md:items-center md:justify-center"
        ),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "div",
          {
            className: item.primary.square ? "md:aspect-square md:max-w-[50%]" : "md:aspect-video md:max-w-[80%]",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              Video_default,
              {
                autoPlay: !0,
                lazy,
                src: item.primary.video.url
              },
              void 0,
              !1,
              {
                fileName: "app/slices/WorkProject/WorkProjectVideoPhoto.tsx",
                lineNumber: 32,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectVideoPhoto.tsx",
            lineNumber: 25,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectVideoPhoto.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/slices/WorkProject/WorkProjectVideoPhoto.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var WorkProjectVideoPhoto_default = WorkProjectVideoPhoto;

// app/slices/WorkProject/WorkProjectPictureColor.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function WorkProjectPictureColor({ item, lazy }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "md:grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    "div",
    {
      className: "flex items-center md:col-span-8 md:col-start-3 md:min-h-screen",
      style: {
        backgroundColor: item.primary.background_color || "white"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        Image,
        {
          loading: lazy ? "eager" : "lazy",
          field: item.primary.image,
          className: "w-full select-none"
        },
        void 0,
        !1,
        {
          fileName: "app/slices/WorkProject/WorkProjectPictureColor.tsx",
          lineNumber: 21,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectPictureColor.tsx",
      lineNumber: 13,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectPictureColor.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var WorkProjectPictureColor_default = WorkProjectPictureColor;

// app/slices/WorkProject/WorkProjectNextProject.tsx
var import_gsap8 = require("gsap"), import_react26 = require("react"), import_react_router3 = require("react-router");
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function WorkProjectNextContent({ title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "div",
    {
      className: "pointer-events-none absolute left-0 top-0 flex h-full w-full flex-col justify-center pl-4 pt-5 md:p-8",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "relative h-[10rem]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "h3",
          {
            className: "heading--3 WorkProjectNextContentInfo absolute top-0 mb-5 w-full text-left text-white",
            children: "NEXT PROJECT"
          },
          void 0,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
            lineNumber: 30,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "h1",
          {
            className: "WorkProjectNextContentTitle display--1 absolute bottom-0 text-left text-white",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { children: title }, void 0, !1, {
              fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
            lineNumber: 37,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
function WorkProjectNextProject({ item, lazy }) {
  let navigate = (0, import_react_router3.useNavigate)(), container = (0, import_react26.useRef)(null);
  useIsomorphicLayoutEffect_default(() => {
    container.current && setupBannerAnimation(container.current);
  }, []);
  let onClick = (e, slug) => {
    let ease = easings_default.mask;
    if (e.target instanceof Element) {
      let tl = import_gsap8.gsap.timeline({
        onComplete: () => {
          navigate(`/work/${slug}`);
        }
      }), background = e.target.querySelector(".background>img");
      tl.to(
        background,
        {
          ease,
          duration: 1 - 0.3,
          y: background ? (background == null ? void 0 : background.scrollHeight) - window.innerHeight : 0
        },
        0
      );
      let other = e.target.querySelectorAll(".WorkProjectNextContentInfo");
      tl.to(
        other,
        {
          autoAlpha: 0,
          duration: 0.5,
          ease
        },
        0
      );
      let title = e.target.querySelector(".WorkProjectNextContentTitle");
      title && animateBanner(
        tl,
        {
          ease,
          duration: 1,
          position: 0.5
        },
        {
          title,
          scope: e.target
        }
      );
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "div",
    {
      ref: container,
      role: "button",
      id: "WorkProjectNextProject",
      onClick: (e) => onClick(e, item.primary.slug),
      className: "relative aspect-square w-full cursor-pointer overflow-hidden md:aspect-auto md:h-screen",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "div",
          {
            className: "background pointer-events-none absolute flex h-full w-full items-end",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              Image,
              {
                loading: lazy ? "eager" : "lazy",
                className: "w-full object-cover",
                field: item.primary.background_image1
              },
              void 0,
              !1,
              {
                fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
                lineNumber: 123,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
            lineNumber: 118,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          ProjectHero_default,
          {
            isClone: !0,
            animateTitles: !0,
            subTitleField: item.primary.next_project_data.data.capabilities,
            tableData: item.primary.next_project_data.data
          },
          void 0,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
            lineNumber: 129,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(WorkProjectNextContent, { title: item.primary.title1 }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
          lineNumber: 137,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ProjectPrefetchLink, { slug: item.primary.slug }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
          lineNumber: 138,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/WorkProject/WorkProjectNextProject.tsx",
      lineNumber: 109,
      columnNumber: 5
    },
    this
  );
}
var WorkProjectNextProject_default = WorkProjectNextProject;

// app/slices/WorkProject/WorkProjectSliceZone.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function WorkProjectSliceZone() {
  let { slices } = (0, import_react27.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_jsx_dev_runtime35.Fragment, { children: slices.map((item, index) => {
    switch (item.slice_type) {
      case "project_full_width":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          WorkProjectFullWidth_default,
          {
            item,
            lazy: !0
          },
          `WorkProjectSlice-${index}`,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
            lineNumber: 21,
            columnNumber: 15
          },
          this
        );
      case "project_2_column":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          WorkProject2Column_default,
          {
            lazy: !0,
            item
          },
          `WorkProjectSlice-${index}`,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
            lineNumber: 29,
            columnNumber: 15
          },
          this
        );
      case "project_plate_-_videocolor":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          WorkProjectVideoColor_default,
          {
            item,
            lazy: !0
          },
          `WorkProjectSlice-${index}`,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
            lineNumber: 37,
            columnNumber: 15
          },
          this
        );
      case "project_plate_-_videophoto":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          WorkProjectVideoPhoto_default,
          {
            lazy: !0,
            item
          },
          `WorkProjectSlice-${index}`,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
            lineNumber: 45,
            columnNumber: 15
          },
          this
        );
      case "projectplate_-_picturecolor":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          WorkProjectPictureColor_default,
          {
            lazy: !0,
            item
          },
          `WorkProjectSlice-${index}`,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
            lineNumber: 53,
            columnNumber: 15
          },
          this
        );
      case "project_next_banner":
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          WorkProjectNextProject_default,
          {
            lazy: !0,
            item
          },
          `WorkProjectSlice-${index}`,
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
            lineNumber: 61,
            columnNumber: 15
          },
          this
        );
      default:
        return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("span", { children: [
          "Unknown Slice Type ",
          item.slice_type
        ] }, void 0, !0, {
          fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
          lineNumber: 68,
          columnNumber: 20
        }, this);
    }
  }) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectSliceZone.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var WorkProjectSliceZone_default = WorkProjectSliceZone;

// app/slices/WorkProject/WorkProjectDetails.tsx
var import_richtext3 = require("@prismicio/richtext"), import_react31 = require("@remix-run/react");

// app/slices/WorkProject/WorkProjectDetailsModal.tsx
var import_react28 = require("react"), import_react29 = require("@headlessui/react");
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function WorkProjectDetailsModal({ isOpen, onClose, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react29.Transition, { show: isOpen, as: import_react28.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react29.Dialog, { onClose: () => onClose(), className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      import_react29.Transition.Child,
      {
        as: import_react28.Fragment,
        enter: "ease-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-out duration-500",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "fixed inset-0 h-full w-full bg-white" }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
      import_react29.Transition.Child,
      {
        as: import_react28.Fragment,
        enter: "ease-out duration-500",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-out duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react29.Dialog.Panel, { children: [
          children,
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(CloseButton, { onClick: onClose }, void 0, !1, {
            fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
function CloseButton({ onClick }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    "div",
    {
      className: "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-0 md:left-0 md:block md:w-auto md:pb-5 md:pl-8",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(SecondaryCTA, { className: "min-w-[195px]", dark: !0, onClick: () => onClick(), children: "CLOSE" }, void 0, !1, {
        fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModal.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}
var WorkProjectDetailsModal_default = WorkProjectDetailsModal;

// app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx
var import_richtext2 = require("@prismicio/richtext");
var import_react30 = require("@prismicio/react"), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function TableInfo({
  title,
  description
}) {
  return !title || !description ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "col-span-4 mb-8 md:col-span-5 md:mb-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(TableTitle, { text: title }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      import_react30.PrismicRichText,
      {
        field: description,
        components: {
          paragraph: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "body--3", children }, void 0, !1, {
            fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
            lineNumber: 23,
            columnNumber: 40
          }, this)
        }
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function WorkProjectDetailsModalTableInfo({
  title,
  description,
  rows
}) {
  let keyPre = "TableWithInfo", detailsTitle = (0, import_richtext2.asText)(title);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "grid-container mb-20 md:mb-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "col-span-4 border-t border-t-black/30 md:col-span-12 md:mb-3.5" }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(TableInfo, { title: detailsTitle, description }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "col-span-4 md:col-span-5 md:col-start-8", children: rows.map((row, rowIndex) => {
      let rowKey = getKey(keyPre, "row", detailsTitle, rowIndex);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "flex border-b border-b-black/30", children: row.map((rowItem, rowItemIndex) => {
        let rowItemKey = getKey(
          keyPre,
          "rowItem",
          detailsTitle,
          rowItemIndex
        );
        return rowItem != null && rowItem.isheader ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(TableTitle, { text: rowItem.label }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this) }, rowItemKey, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(TableCell, { item: rowItem }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
          lineNumber: 67,
          columnNumber: 21
        }, this) }, rowItemKey, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this);
      }) }, rowKey, !1, {
        fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this);
    }) }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableInfo.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
var WorkProjectDetailsModalTableInfo_default = WorkProjectDetailsModalTableInfo;

// app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx
var import_clsx16 = __toESM(require("clsx"));
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function WorkProjectDetailsModalTableFull({
  rows,
  columns
}) {
  let keyPre = "TableFull", keyPreMobile = "TableFullMobile";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "desktop-only", children: rows.map((row, rowIndex) => {
      let rowChunks = [];
      for (let i = 0; i < row.length; i += 2)
        rowChunks.push(row.slice(i, i + 2));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        "div",
        {
          className: "grid-container border-b border-b-black/30",
          children: rowChunks.map((chunk, chunkIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            "div",
            {
              className: (0, import_clsx16.default)(
                "col-span-4 flex md:col-span-5 md:even:col-start-8"
              ),
              children: chunk.map((chunkItem, chunkItemIndex) => {
                let key = getKey(keyPre, "chunkItem", chunkItemIndex);
                return chunkItem != null && chunkItem.isheader ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(TableTitle, { text: chunkItem.label }, void 0, !1, {
                  fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                  lineNumber: 43,
                  columnNumber: 29
                }, this) }, key, !1, {
                  fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                  lineNumber: 42,
                  columnNumber: 27
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(TableCell, { item: chunkItem }, void 0, !1, {
                  fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                  lineNumber: 49,
                  columnNumber: 29
                }, this) }, key, !1, {
                  fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                  lineNumber: 48,
                  columnNumber: 27
                }, this);
              })
            },
            getKey(keyPre, "rowChunk", chunkIndex),
            !1,
            {
              fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
              lineNumber: 32,
              columnNumber: 19
            },
            this
          ))
        },
        getKey(keyPre, "row", rowIndex),
        !1,
        {
          fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
          lineNumber: 26,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mobile-only", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      "div",
      {
        className: "max-container grid grid-cols-4 md:border-b md:border-b-black/30",
        children: columns == null ? void 0 : columns.map((colItem, colIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          "div",
          {
            className: (0, import_clsx16.default)(
              "relative col-span-2 mb-24 border-b border-b-black/30"
            ),
            children: colItem.map((cellItem, cellItemIndex) => {
              let key = getKey(keyPreMobile, "cellItem", cellItemIndex);
              return cellItem.isheader ? /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                "div",
                {
                  className: colIndex % 2 === 0 ? "relative after:absolute after:top-0 after:h-[1px] after:w-[200%] after:bg-black/30last:before:absolute last:before:bottom-0 last:before:h-[1px] last:before:w-[200%] last:before:bg-black/30" : "",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(TableTitle, { text: cellItem.label }, void 0, !1, {
                    fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                    lineNumber: 88,
                    columnNumber: 23
                  }, this)
                },
                key,
                !1,
                {
                  fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                  lineNumber: 79,
                  columnNumber: 21
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                "div",
                {
                  className: colIndex % 2 === 0 ? "relative after:absolute after:top-0 after:h-[1px] after:w-[200%] after:bg-black/30" : "",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(TableCell, { item: cellItem }, void 0, !1, {
                    fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                    lineNumber: 99,
                    columnNumber: 23
                  }, this)
                },
                key,
                !1,
                {
                  fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
                  lineNumber: 91,
                  columnNumber: 21
                },
                this
              );
            })
          },
          getKey(keyPreMobile, "column", colIndex),
          !1,
          {
            fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
            lineNumber: 70,
            columnNumber: 15
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
        lineNumber: 63,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/slices/WorkProject/WorkProjectDetailsModalTableFull.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var WorkProjectDetailsModalTableFull_default = WorkProjectDetailsModalTableFull;

// app/slices/WorkProject/WorkProjectDetails.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function TableTitle({ text }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mb-8 pt-3.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "label--2", children: text }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function TableCell({
  item
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "body--3 py-2", children: item != null && item.link && "url" in item.link && item.link.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    "a",
    {
      rel: "noreferrer",
      target: "_blank",
      href: item.link.url,
      children: item.label
    },
    void 0,
    !1,
    {
      fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { children: item ? item.label : null }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
    lineNumber: 36,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function WorkProjectDetailsTables() {
  let { details } = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: details.tables.map(({ title, description, rows, columns }, index) => {
    let isFull = !(0, import_richtext3.asText)(title);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_jsx_dev_runtime39.Fragment, { children: isFull ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      WorkProjectDetailsModalTableFull_default,
      {
        rows,
        columns
      },
      `TableFull-${index}`,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
        lineNumber: 52,
        columnNumber: 15
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
      WorkProjectDetailsModalTableInfo_default,
      {
        rows,
        title,
        description
      },
      `TableWithInfo-${index}`,
      !1,
      {
        fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
        lineNumber: 58,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function WorkProjectDetails({
  isOpen,
  toggle
}) {
  let { hero } = (0, import_react31.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WorkProjectDetailsModal_default, { onClose: toggle, isOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    "div",
    {
      "data-lenis-prevent": !0,
      className: "fixed inset-0 h-full w-full overflow-scroll",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "grid-container relative pt-header md:pt-headerDesk", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ProjectHeroTitle, { className: "text-black", field: hero.title }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "col-span-4 mb-10 md:col-span-12 md:mb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("h3", { className: "heading--3", children: (0, import_richtext3.asText)(hero.capabilities) }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 90,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "modal-tables mb-[100px] pb-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(WorkProjectDetailsTables, {}, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 95,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "mb-20 md:mb-10", children: hero.credits.length > 0 ? hero.credits.map((item, index) => item.value ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
          "div",
          {
            className: "grid-container",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { className: "label--2 md:col-span-2 md:col-start-8", children: item.type }, void 0, !1, {
                fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
                lineNumber: 108,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
                "div",
                {
                  className: "label--2 col-span-2 col-start-3 text-right md:col-start-11 md:text-left",
                  children: item.value
                },
                void 0,
                !1,
                {
                  fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
                  lineNumber: 111,
                  columnNumber: 23
                },
                this
              )
            ]
          },
          `Table-credits-${index}`,
          !0,
          {
            fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
            lineNumber: 104,
            columnNumber: 21
          },
          this
        ) : null) : null }, void 0, !1, {
          fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
      lineNumber: 82,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/WorkProject/WorkProjectDetails.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
var WorkProjectDetails_default = WorkProjectDetails;

// app/routes/work.$project.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  if (!params.project)
    throw new Response("Not Found", { status: 404 });
  let page = await createClient2().getByUID("project_page", params.project, {
    fetchLinks: [
      "project_page.roles",
      "project_page.links",
      "project_page.capabilities"
    ]
  });
  if (!page || !page.data)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  let details = {
    credits: page.data.credits,
    tables: normalizeProjectDetailsData(page.data.body2)
  };
  return (0, import_node4.json)({
    hero: page.data,
    slices: page.data.body,
    details,
    page
  });
};
function WorkProjectDetailsButton({
  onClick
}) {
  let isInArea = useIsScrolledInArea(500, 100);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    "div",
    {
      id: "WorkProjectDetailsButton",
      className: (0, import_clsx17.default)(
        isInArea ? "opacity-100" : "opacity-0",
        "fixed bottom-5 flex w-full justify-center transition-opacity md:bottom-5 md:left-8 md:block md:w-auto"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(SecondaryCTA, { className: "min-w-[195px]", onClick, border: !0, children: "SEE PROJECT DETAILS" }, void 0, !1, {
        fileName: "app/routes/work.$project.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/work.$project.tsx",
      lineNumber: 57,
      columnNumber: 5
    },
    this
  );
}
function WorkProject() {
  let location = (0, import_react32.useLocation)(), [, setLocked] = (0, import_usehooks_ts3.useLockedBody)(!0), [showDetails, toggleShowDetails] = (0, import_usehooks_ts3.useToggle)(), { hero } = (0, import_react32.useLoaderData)(), toggleModalOpen = () => {
    setLocked(showDetails), toggleShowDetails();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { id: "WorkProjectPage", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      ProjectHero_default2,
      {
        animateVideo: !0,
        cta: toggleModalOpen,
        image: hero.background_image,
        subTitleField: hero.capabilities,
        tableData: hero,
        titleField: hero.title,
        video: {
          poster: hero.reel_cover,
          field: hero.reel
        }
      },
      `work-hero-${location.pathname}`,
      !1,
      {
        fileName: "app/routes/work.$project.tsx",
        lineNumber: 89,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(WorkProjectSliceZone_default, {}, `work-slices-${location.pathname}`, !1, {
      fileName: "app/routes/work.$project.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      WorkProjectDetails_default,
      {
        isOpen: showDetails,
        toggle: toggleShowDetails
      },
      `work-details-${location.pathname}`,
      !1,
      {
        fileName: "app/routes/work.$project.tsx",
        lineNumber: 103,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      WorkProjectDetailsButton,
      {
        onClick: toggleModalOpen
      },
      `work-details-button-${location.pathname}`,
      !1,
      {
        fileName: "app/routes/work.$project.tsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/work.$project.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
var work_project_default = WorkProject;

// app/routes/styleguide.tsx
var styleguide_exports = {};
__export(styleguide_exports, {
  default: () => styleguide_default
});
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function Styleguide() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "flex min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      "div",
      {
        className: "flex w-1/2 flex-col items-center justify-center bg-black",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(PrimaryCTAButton, { dark: !0, children: "CONTACT" }, void 0, !1, {
              fileName: "app/routes/styleguide.tsx",
              lineNumber: 12,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(PrimaryCTALink, { to: "#", dark: !0, children: "CONTACT" }, void 0, !1, {
              fileName: "app/routes/styleguide.tsx",
              lineNumber: 13,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(PrimaryCTALink, { to: "#", size: "lg", dark: !0, children: "CONTACT" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 18,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(SecondaryCTA, { children: "See Project Details" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LinkCTA_default, { to: "#", children: "This is a link" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/styleguide.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
      "div",
      {
        className: "flex w-1/2 flex-col items-center justify-center bg-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(PrimaryCTALink, { to: "#", children: "CONTACT" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 35,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(PrimaryCTALink, { to: "#", size: "lg", children: "CONTACT" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(SecondaryCTA, { border: !0, children: "See Project Details" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { className: "my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LinkCTA_default, { dark: !0, to: "#", children: "This is a link" }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 48,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/styleguide.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/styleguide.tsx",
        lineNumber: 31,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/styleguide.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var styleguide_default = Styleguide;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => HomePage,
  loader: () => loader3,
  meta: () => meta2
});
var import_node5 = require("@remix-run/node"), import_react38 = require("@remix-run/react");

// app/lib/prismicUtils.ts
var findAllSlicesByType = ({ data }, sliceType) => data.body.concat().filter(({ slice_type }) => slice_type === sliceType).filter((i) => i.primary.enabled);

// app/slices/HomePage/HomePageHero.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function HomePageHero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("section", { className: "texture-background h-screen" }, void 0, !1, {
    fileName: "app/slices/HomePage/HomePageHero.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var HomePageHero_default = HomePageHero;

// app/slices/HomePage/HomePagePortfolioDesktop.tsx
var import_clsx18 = __toESM(require("clsx")), import_gsap9 = require("gsap"), import_react33 = require("react");
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime"), ALL_TAGS_ID = "all";
function HomePagePortFolioImage({ active, image, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    "div",
    {
      className: (0, import_clsx18.default)(
        "col-span-1 transition-opacity",
        active ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-5"
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Image, { field: image, className: "object-contain" }, void 0, !1, {
        fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
function getCustomPosition(e, width) {
  return e.clientX < width / 2 ? [e.clientX, e.clientY + 28] : e.clientX > window.innerWidth - width / 2 ? [e.clientX - width, e.clientY + 28] : [e.clientX - width / 2, e.clientY + 28];
}
function HomePagePortfolioDesktop({ data }) {
  let availableTags = (0, import_react33.useMemo)(() => {
    var _a;
    return [ALL_TAGS_ID, ...((_a = data.primary.available_tags) == null ? void 0 : _a.split(", ")) || []];
  }, [data.primary.available_tags]), imageRef = (0, import_react33.useRef)(null), [selectedTag, setSelectedTag] = (0, import_react33.useState)(ALL_TAGS_ID), [hasMovedMouse, setHasmovedMouse] = (0, import_react33.useState)(!1), [isHovered, setIsHovered] = (0, import_react33.useState)(!1), [hoveredTag, setHoveredTag] = (0, import_react33.useState)(null), [hoverImage, setHoverImage] = (0, import_react33.useState)(""), cursorRef = (0, import_react33.useRef)(null), onMouseMove = (e) => {
    if (hasMovedMouse || (import_gsap9.gsap.set(cursorRef.current, {
      x: e.clientX,
      y: e.clientY
    }), setHasmovedMouse(!0)), imageRef.current) {
      let [x, y] = getCustomPosition(e, imageRef.current.clientWidth);
      import_gsap9.gsap.to(cursorRef.current, {
        x,
        y,
        delay: 0.01,
        duration: 0.4,
        ease: "power3.out"
      });
    }
  }, onMouseEnterImage = (e) => {
    let img = e.currentTarget.querySelector("img");
    setHoverImage(img.src), setIsHovered(!0);
  }, onMouseLeaveImage = (e) => {
    setIsHovered(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    "section",
    {
      onMouseMove,
      className: "desktop-only overflow-hidden pb-64 pt-20",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "max-container pb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex flex-row justify-end text-black/30", children: availableTags == null ? void 0 : availableTags.map((tag, index) => {
          let isActive = selectedTag === tag;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            "div",
            {
              onMouseEnter: () => setHoveredTag(tag),
              onMouseLeave: () => setHoveredTag(null),
              onClick: () => {
                setSelectedTag(tag);
              },
              className: (0, import_clsx18.default)(
                "heading--2 cursor-pointer hover:text-black",
                isActive ? "text-black" : "text-grey"
              ),
              children: [
                isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { children: "(\xA0" }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
                  lineNumber: 118,
                  columnNumber: 29
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(TextCTA_default, { className: "inline-block align-middle", children: tag }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
                  lineNumber: 119,
                  columnNumber: 17
                }, this),
                isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("span", { children: "\xA0)" }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
                  lineNumber: 120,
                  columnNumber: 29
                }, this) : null,
                index !== (availableTags == null ? void 0 : availableTags.length) - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: ",\xA0" }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
                  lineNumber: 121,
                  columnNumber: 56
                }, this) : null
              ]
            },
            `PortfolioDesk-${index}-${tag}`,
            !0,
            {
              fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
              lineNumber: 106,
              columnNumber: 15
            },
            this
          );
        }) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "relative grid grid-cols-17 gap-2 px-2", children: data.items.map((item, index) => {
          var _a;
          let tags = ((_a = item.tags) == null ? void 0 : _a.split(", ")) || [], active = hoveredTag ? tags.includes(hoveredTag) || hoveredTag === ALL_TAGS_ID : tags.includes(selectedTag) || selectedTag === ALL_TAGS_ID;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            HomePagePortFolioImage,
            {
              active,
              image: item.image,
              onMouseEnter: onMouseEnterImage,
              onMouseLeave: onMouseLeaveImage
            },
            `PortfolioDesk-Image-${index}}`,
            !1,
            {
              fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
              lineNumber: 135,
              columnNumber: 13
            },
            this
          );
        }) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
          lineNumber: 128,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
          "div",
          {
            ref: cursorRef,
            className: "pointer-events-none fixed left-0 top-0 z-10",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
              "div",
              {
                className: (0, import_clsx18.default)(
                  "transition-all duration-100 ease-out",
                  isHovered && hasMovedMouse ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                ),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
                  "img",
                  {
                    alt: " ",
                    ref: imageRef,
                    src: hoverImage,
                    "aria-hidden": !0,
                    className: "max-h-[50vh] max-w-[50vh]"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
                lineNumber: 150,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
            lineNumber: 146,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/HomePage/HomePagePortfolioDesktop.tsx",
      lineNumber: 97,
      columnNumber: 5
    },
    this
  );
}
var HomePagePortfolioDesktop_default = HomePagePortfolioDesktop;

// app/slices/HomePage/HomePagePortfolioMobile.tsx
var import_richtext4 = require("@prismicio/richtext"), import_react_splide = require("@splidejs/react-splide"), import_splide_extension_auto_scroll = require("@splidejs/splide-extension-auto-scroll"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function HomePagePortfolioMobile({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("section", { className: "w-full bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
    "div",
    {
      className: "mobile-only noise-background bg-black pt-[6.5rem] text-white last:pb-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "max-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("h2", { className: "heading--2 mb-7 border-t border-t-white/30 pt-2.5", children: (0, import_richtext4.asText)(data.primary.title) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_react_splide.Splide,
            {
              extensions: { AutoScroll: import_splide_extension_auto_scroll.AutoScroll },
              options: {
                type: "loop",
                drag: "free",
                perPage: 2,
                focus: "center",
                fixedWidth: "15.5rem",
                gap: "0.625rem",
                arrows: !1,
                pagination: !1,
                autoScroll: {
                  speed: 1
                }
              },
              className: "splide mb-7",
              children: data.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react_splide.SplideSlide, { className: "max-w-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("img", { src: item.images.url, alt: item.images.alt || "" }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
                lineNumber: 44,
                columnNumber: 17
              }, this) }, item.images.url, !1, {
                fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this))
            },
            void 0,
            !1,
            {
              fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
              lineNumber: 25,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("p", { className: "body--3 whitespace-pre-line", children: (0, import_richtext4.asText)(data.primary.description) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
      lineNumber: 13,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/HomePage/HomePagePortfolioMobile.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/slices/HomePage/HomePageProjectScrollContainer.tsx
var import_gsap12 = require("gsap");

// app/slices/HomePage/HomePageProjectTitleContainer.tsx
var import_clsx19 = __toESM(require("clsx")), import_gsap10 = require("gsap");
var import_richtext5 = require("@prismicio/richtext"), import_SplitText2 = __toESM(require("gsap/dist/SplitText")), import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function splitText(nodes) {
  return Array.from(nodes).map(
    (item) => new import_SplitText2.default(item, {
      type: "lines, words",
      linesClass: "overflow-hidden"
    })
  );
}
function animateTextOnScroll(splits, trigger, isLast = !1) {
  let ease = "slow.inOut", element = splits.words;
  if (import_gsap10.gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: !0,
      start: "top 400px",
      end: "+=400px"
    }
  }).to(element, { y: "0%", ease }), isLast)
    return;
  import_gsap10.gsap.timeline({
    scrollTrigger: {
      trigger,
      scrub: !0,
      start: "bottom 400px",
      end: "+=400px"
    }
  }).to(element, { y: "-100%", ease });
}
function useAnimationOnScroll(selector) {
  useIsomorphicLayoutEffect_default(() => {
    let ctx = import_gsap10.gsap.context(() => {
      let scrollItems = document.querySelectorAll(
        ".HomePageProjectScrollItem"
      ), items = document.querySelectorAll(selector);
      splitText(items).forEach((splits2, index, arr) => {
        index !== 0 && import_gsap10.gsap.set(splits2.words, { y: "100%" }), animateTextOnScroll(
          splits2,
          scrollItems[index],
          index === arr.length - 1
        );
      });
    });
    return () => ctx.revert();
  }, []);
}
var HomePageProjectTitle = ({
  children,
  className
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h3", { className: (0, import_clsx19.default)(className, "heading--3 leading-none text-white"), children }, void 0, !1, {
  fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
  lineNumber: 84,
  columnNumber: 5
}, this), HOMEPAGE_PROJECT_TITLE_ID = "HomePageProject-title", HOMEPAGE_PROJECT_SUBTITLE_ID = "HomePageProject-subtitle";
function HomePageProjectTitleContainer({
  data
}) {
  return useAnimationOnScroll(`.${HOMEPAGE_PROJECT_TITLE_ID}`), useAnimationOnScroll(`.${HOMEPAGE_PROJECT_SUBTITLE_ID}`), useAnimationOnScroll(".HomePageProject-index"), /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    "div",
    {
      className: "HomePageProjectTitleContainer desktop-only absolute inset-0 h-screen w-full",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "absolute left-[30px] top-headerDesk", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative mb-1 h-[25px] w-[500px]", children: data.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
          "div",
          {
            className: "absolute left-0 top-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
              HomePageProjectTitle,
              {
                className: `${HOMEPAGE_PROJECT_TITLE_ID} whitespace-nowrap`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { children: (0, import_richtext5.asText)(project.primary.title) }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
                  lineNumber: 118,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
                lineNumber: 115,
                columnNumber: 15
              },
              this
            )
          },
          `HomePageProject-title-${index}`,
          !1,
          {
            fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
            lineNumber: 111,
            columnNumber: 13
          },
          this
        )) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
          lineNumber: 109,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative mb-[30px] h-[25px] w-[500px]", children: data.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "absolute left-0 top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
          HomePageProjectTitle,
          {
            className: `${HOMEPAGE_PROJECT_SUBTITLE_ID}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("span", { children: (0, import_richtext5.asText)(project.primary.capabilities) }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
              lineNumber: 130,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
            lineNumber: 127,
            columnNumber: 15
          },
          this
        ) }, `subtitle-${index}`, !1, {
          fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this)) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
          lineNumber: 124,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "HomePageProject__labels", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(HomePageProjectTitle, { className: "mr-10 inline-block", children: "CASE STUDY" }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
            lineNumber: 137,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "relative mr-1 inline-block h-[21px] w-[18px]", children: data.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
            "div",
            {
              className: "absolute left-0 top-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(HomePageProjectTitle, { className: "HomePageProject-index", children: index + 1 }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
                lineNumber: 146,
                columnNumber: 17
              }, this)
            },
            `HomePageProject-index-${index}`,
            !1,
            {
              fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
              lineNumber: 142,
              columnNumber: 15
            },
            this
          )) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
            lineNumber: 140,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(HomePageProjectTitle, { className: "inline-block", children: [
            "/ ",
            data.length
          ] }, void 0, !0, {
            fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
            lineNumber: 152,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
        lineNumber: 108,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/HomePage/HomePageProjectTitleContainer.tsx",
      lineNumber: 103,
      columnNumber: 5
    },
    this
  );
}
var HomePageProjectTitleContainer_default = HomePageProjectTitleContainer;

// app/slices/HomePage/HomePageProjectScrollContainer.tsx
var import_react_lenis2 = require("@studio-freight/react-lenis"), import_richtext6 = require("@prismicio/richtext"), import_react_router4 = require("react-router");

// app/slices/HomePage/HomePageProjectBackground.tsx
var import_gsap11 = require("gsap");
var import_ScrollTrigger2 = __toESM(require("gsap/dist/ScrollTrigger"));
var import_react34 = require("react");
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), openPath = "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", closedPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
function HomePageBackgroundContainer({ data }) {
  let container = (0, import_react34.useRef)(null);
  return useIsomorphicLayoutEffect_default(() => {
    let ctx = import_gsap11.gsap.context((self) => {
      let ease = "linear", pinBackgroundContainer = () => {
        let bgContainer = document.querySelector(
          "#HomePageBackground-container"
        );
        import_ScrollTrigger2.default.create({
          pin: !0,
          trigger: bgContainer,
          end: () => `+=${document.querySelector(
            "#home-projects-container"
          ).scrollHeight - window.innerHeight}`
        });
      }, animateClippingMasks = () => {
        let bgItems = document.querySelectorAll(".hero-project-bg-container"), scrollItems = document.querySelectorAll(
          ".HomePageProjectScrollItem"
        );
        bgItems.forEach((bgItem, _index, arr) => {
          let isFirst = _index === 0, isLast = _index === arr.length - 1, scrollItem = scrollItems[_index];
          import_gsap11.gsap.set(bgItem, { clipPath: isFirst ? openPath : closedPath }), import_gsap11.gsap.to(bgItem, {
            ease,
            clipPath: openPath,
            scrollTrigger: {
              trigger: scrollItem,
              start: "top 85%",
              end: "+=100%",
              scrub: 0.3
            }
          });
          let image = bgItem.querySelector(".hero-project-bg-container>img");
          import_gsap11.gsap.set(image, { y: isFirst ? "0%" : "10%" }), import_gsap11.gsap.to(image, {
            ease,
            y: "0%",
            immediateRender: !1,
            scrollTrigger: {
              trigger: scrollItem,
              start: "top 85%",
              end: "+=100%",
              scrub: !0
            }
          }), isLast || import_gsap11.gsap.to(image, {
            ease,
            y: "-10%",
            immediateRender: !1,
            scrollTrigger: {
              trigger: scrollItem,
              start: "bottom 85%",
              end: "+=100%",
              scrub: !0
            }
          });
        });
      };
      pinBackgroundContainer(), animateClippingMasks();
    }, container);
    return () => ctx.revert();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_jsx_dev_runtime46.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    "div",
    {
      ref: container,
      id: "HomePageBackground-container",
      className: "absolute left-0 top-0 h-screen w-full overflow-hidden",
      children: [
        data.map((project) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
            "div",
            {
              className: "HomePageBackground-Item absolute h-full w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { className: "hero-project-bg-container absolute flex h-full w-full items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                  Image,
                  {
                    field: project.primary.background_image,
                    className: "min-h-screen w-full object-cover"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
                    lineNumber: 113,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
                  lineNumber: 112,
                  columnNumber: 13
                }, this),
                "data" in project.primary.project_data ? /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
                  ProjectHero_default2,
                  {
                    absolute: !1,
                    isClone: !0,
                    tableData: (_a = project.primary.project_data) == null ? void 0 : _a.data
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
                    lineNumber: 120,
                    columnNumber: 15
                  },
                  this
                ) : null
              ]
            },
            `HomePageBackground-Item-${project.id}`,
            !0,
            {
              fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
              lineNumber: 108,
              columnNumber: 11
            },
            this
          );
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(HomePageProjectTitleContainer_default, { data }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
      lineNumber: 102,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/slices/HomePage/HomePageProjectBackground.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
var HomePageProjectBackground_default = HomePageBackgroundContainer;

// app/slices/HomePage/HomePageProjectScrollContainer.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime"), HomePageProjectScrollItemContent = ({
  project
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "HomePageProjectScrollItem__content desktop-only--grid grid-container pointer-events-none relative pb-[20vh] pt-[50vh]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: "col-span-4 md:col-start-9", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { id: `HomePageProjectScrollItem-${project.primary.slug}` }, void 0, !1, {
    fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("p", { className: "body--2 mb-5 max-w-[500px] text-white", children: (0, import_richtext6.asText)(project.primary.description) }, void 0, !1, {
    fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this),
  project.items.map(({ slide }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
    "div",
    {
      className: "mb-5 overflow-hidden",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        Image,
        {
          loading: "eager",
          field: slide,
          className: "w-full object-contain"
        },
        void 0,
        !1,
        {
          fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
          lineNumber: 35,
          columnNumber: 13
        },
        this
      )
    },
    `ProjectImage-${slide.url}-${index}`,
    !1,
    {
      fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
      lineNumber: 31,
      columnNumber: 11
    },
    this
  ))
] }, void 0, !0, {
  fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
  lineNumber: 24,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this);
function HomePageProjectScrollContainer({
  data
}) {
  let lenis = (0, import_react_lenis2.useLenis)(), navigate = (0, import_react_router4.useNavigate)(), onClick = (e, { index, slug = "" }) => {
    lenis.scrollTo(`#HomePageProjectScrollItem-${slug}`);
    let duration = 1, ease = easings_default.mask, tl = import_gsap12.gsap.timeline({
      onComplete: () => {
        navigate(`/work/${slug}`);
      }
    }), background = document.querySelectorAll(".hero-project-bg-container")[index].querySelector("img");
    tl.to(
      background,
      {
        ease,
        duration: duration - 0.3,
        y: background ? (background == null ? void 0 : background.scrollHeight) - window.innerHeight : 0
      },
      0
    );
    let label = document.querySelector(".HomePageProject__labels");
    tl.to(
      label,
      { ease, duration: duration - 0.5, y: "100%", autoAlpha: 0 },
      0
    );
    let content = document.querySelectorAll(
      ".HomePageProjectScrollItem__content"
    )[index];
    if (tl.to(
      content,
      {
        ease,
        autoAlpha: 0,
        duration: duration - 0.5
      },
      0
    ), e.target instanceof Element) {
      let vars = { ease, duration, position: 0 }, title = document.querySelectorAll(`.${HOMEPAGE_PROJECT_TITLE_ID}`)[index], subtitle = document.querySelectorAll(`.${HOMEPAGE_PROJECT_SUBTITLE_ID}`)[index], scope = document.querySelector("#home-projects-container"), itemsScope = document.querySelectorAll(".HomePageBackground-Item")[index];
      animateBanner(tl, vars, {
        title,
        subtitle,
        scope,
        itemsScope
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { id: "home-projects-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(HomePageProjectBackground_default, { data }, void 0, !1, {
      fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    data.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      "div",
      {
        className: "HomePageProjectScrollItem relative",
        onClick: (e) => {
          onClick(e, { index, slug: project.primary.slug });
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(HomePageProjectScrollItemContent, { project }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      },
      `HomePageProjectScrollItem-${index}`,
      !1,
      {
        fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
        lineNumber: 130,
        columnNumber: 9
      },
      this
    ))
  ] }, void 0, !0, {
    fileName: "app/slices/HomePage/HomePageProjectScrollContainer.tsx",
    lineNumber: 126,
    columnNumber: 5
  }, this);
}
var HomePageProjectScrollContainer_default = HomePageProjectScrollContainer;

// app/slices/HomePage/HomePageProjectsMobile.tsx
var import_richtext7 = require("@prismicio/richtext"), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function HomePageProjectsMobile({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("section", { children: data.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
    "div",
    {
      className: "mobile-only--flex pt-headerHeightMobile absolute h-full flex-col pb-28",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "grid-container h-fit w-full pt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "col-span-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h3", { className: "heading--3", children: [
            (0, import_richtext7.asText)(project.primary.title),
            /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
              lineNumber: 22,
              columnNumber: 17
            }, this),
            "CASE STUDY"
          ] }, void 0, !0, {
            fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
            lineNumber: 20,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "col-span-1 col-start-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h3", { className: "heading--3 text-right", children: `${index + 1} / ${data.length}` }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "flex grow items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h3", { className: "heading--3 text-center", children: `( ${(0, import_richtext7.asText)(project.primary.cta)} )` }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "grid-container mobile-only--grid h-fit grow-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { className: "col-span-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("h3", { className: "heading--3 mb-12", children: (0, import_richtext7.asText)(project.primary.capabilities) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("p", { className: "body--2", children: (0, import_richtext7.asText)(project.primary.description) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
            lineNumber: 45,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ]
    },
    `HomePageBackground-mobileItem-${project.id}`,
    !0,
    {
      fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
      lineNumber: 14,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/slices/HomePage/HomePageProjectsMobile.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var HomePageProjectsMobile_default = HomePageProjectsMobile;

// app/slices/HomePage/HomePageProjects.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function HomePageProjects({ data }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)("section", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(HomePageProjectScrollContainer_default, { data }, void 0, !1, {
      fileName: "app/slices/HomePage/HomePageProjects.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(HomePageProjectsMobile_default, { data }, void 0, !1, {
      fileName: "app/slices/HomePage/HomePageProjects.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/slices/HomePage/HomePageProjects.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var HomePageProjects_default = HomePageProjects;

// app/slices/HomePage/HomePageTable.tsx
var import_richtext9 = require("@prismicio/richtext"), import_react36 = require("@prismicio/react");

// app/slices/HomePage/HomePageTableColumn.tsx
var import_clsx20 = __toESM(require("clsx")), import_richtext8 = require("@prismicio/richtext"), import_react35 = require("@prismicio/react"), import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function HomePageTableColumn({ item }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    "div",
    {
      className: "group col-span-4 mb-24 border-t border-t-black/30 text-left md:col-span-3 md:mb-28 md:border-t-0",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "mobile-only pt-2.5", children: [
          item.number.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h2", { className: "heading--2 mb-10 md:mb-44", children: (0, import_richtext8.asText)(item.number) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("h3", { className: "heading--2 mb-5", children: (0, import_richtext8.asText)(item.title) }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
            import_react35.PrismicRichText,
            {
              field: item.description,
              components: {
                paragraph: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("p", { className: "body--3 mb-6 whitespace-pre-line", children }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
                  lineNumber: 26,
                  columnNumber: 15
                }, this)
              }
            },
            void 0,
            !1,
            {
              fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
              lineNumber: 22,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          "div",
          {
            className: "relative col-span-4 border-t border-black/30 md:border-0",
            children: (0, import_richtext8.asText)(item.rows).split(", ").map((row, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
              "div",
              {
                className: (0, import_clsx20.default)(
                  "body--3 relative w-full border-b border-black/30 py-2.5 last:border-b-0 md:border-0",
                  "md:group-first:after:absolute md:group-first:after:bottom-0 md:group-first:after:block md:group-first:after:h-[1px] md:group-first:after:w-[500%] md:group-first:after:bg-black/30"
                ),
                children: row
              },
              `${row}-${index}`,
              !1,
              {
                fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
                lineNumber: 39,
                columnNumber: 15
              },
              this
            ))
          },
          void 0,
          !1,
          {
            fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
            lineNumber: 32,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/HomePage/HomePageTableColumn.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
var HomePageTableColumn_default = HomePageTableColumn;

// app/slices/HomePage/HomePageTable.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function HomePageTable({ data }) {
  let descriptions = data.items.map((item) => item.description);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("section", { className: data.primary.mobile ? "" : "desktop-only", children: [
    (0, import_richtext9.asText)(data.primary.title) !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "grid-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      "div",
      {
        className: "col-span-4 mb-6 pb-0 pt-14 md:col-span-12 md:mb-0 md:border-b md:border-b-black/30 md:pb-5 md:pt-52",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h1", { className: "display--2", children: (0, import_richtext9.asText)(data.primary.title) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageTable.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/slices/HomePage/HomePageTable.tsx",
        lineNumber: 13,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/slices/HomePage/HomePageTable.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "max-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "desktop-only--grid grid-container--full", children: data.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
        "div",
        {
          className: "col-span-4 md:col-span-3",
          children: [
            (0, import_richtext9.asText)(item.number) !== "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h2", { className: "heading--2 mb-10 pt-2 md:mb-44", children: (0, import_richtext9.asText)(item.number) }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageTable.tsx",
              lineNumber: 32,
              columnNumber: 19
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("h3", { className: "heading--2 mb-5", children: (0, import_richtext9.asText)(item.title) }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageTable.tsx",
              lineNumber: 36,
              columnNumber: 17
            }, this)
          ]
        },
        `Title-${item.title}-${index}`,
        !0,
        {
          fileName: "app/slices/HomePage/HomePageTable.tsx",
          lineNumber: 27,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/slices/HomePage/HomePageTable.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "desktop-only--grid grid-container--full", children: descriptions.map((description, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
        "div",
        {
          className: "col-span-4 md:col-span-3",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            import_react36.PrismicRichText,
            {
              field: description,
              components: {
                paragraph: ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("p", { className: "body--3 mb-10 whitespace-pre-line", children }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePageTable.tsx",
                  lineNumber: 53,
                  columnNumber: 23
                }, this)
              }
            },
            void 0,
            !1,
            {
              fileName: "app/slices/HomePage/HomePageTable.tsx",
              lineNumber: 49,
              columnNumber: 17
            },
            this
          )
        },
        `Description-${index}`,
        !1,
        {
          fileName: "app/slices/HomePage/HomePageTable.tsx",
          lineNumber: 45,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/slices/HomePage/HomePageTable.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
        "div",
        {
          className: "grid-container--full overflow-hidden md:border-t md:border-t-black/30",
          children: data.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(HomePageTableColumn_default, { item }, `TableHeader-${index}`, !1, {
            fileName: "app/slices/HomePage/HomePageTable.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/slices/HomePage/HomePageTable.tsx",
          lineNumber: 64,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/slices/HomePage/HomePageTable.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/slices/HomePage/HomePageTable.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var HomePageTable_default = HomePageTable;

// app/slices/HomePage/HomePageReviews.tsx
var import_gsap13 = require("gsap"), import_clsx21 = __toESM(require("clsx")), import_react37 = require("react");
var import_react_splide2 = require("@splidejs/react-splide"), import_random = __toESM(require("canvas-sketch-util/random")), import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function getRandomCoordinates(width, height) {
  return [import_random.default.rangeFloor(width), import_random.default.rangeFloor(height)];
}
function HomePageReviews({ data }) {
  let container = (0, import_react37.useRef)(null), onClearClick = () => {
    import_gsap13.gsap.to(imagesRefs.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "back.out",
      stagger: 0.05
    });
  };
  useIsomorphicLayoutEffect_default(() => {
    let ctx = import_gsap13.gsap.context((self) => {
      self.selector && imagesRefs.current.forEach((img, index) => {
        if (!imagesContainer.current)
          return;
        let [x, y] = getRandomCoordinates(
          imagesContainer.current.clientWidth - img.clientWidth,
          imagesContainer.current.clientHeight - img.clientHeight
        );
        import_gsap13.gsap.set(img, { x, y });
      });
    }, container);
    return () => ctx.revert();
  }, []);
  let imagesContainer = (0, import_react37.useRef)(null), imagesRefs = (0, import_react37.useRef)([]), setImgRef = (0, import_react37.useCallback)((node) => {
    node && (imagesRefs.current = [...imagesRefs.current, node]);
  }, []), onMouseOverImage = (e) => {
    import_gsap13.gsap.to(e.target, { opacity: 1, zIndex: 1, duration: 0.3 }), e.target instanceof Element && import_gsap13.gsap.to(e.target.querySelector("img"), {
      scale: 1,
      duration: 0.4,
      ease: "back.out"
    });
  }, onMouseLeaveImage = (e) => {
    import_gsap13.gsap.to(e.target, { zIndex: 0, duration: 0.3 }), e.target instanceof Element && import_gsap13.gsap.to(e.target.querySelector("img"), {
      scale: 0.95,
      delay: 0.2,
      duration: 0.2,
      ease: "back.out"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    "section",
    {
      ref: container,
      className: "relative h-screen w-full select-none overflow-hidden bg-royal-blue",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          "div",
          {
            className: (0, import_clsx21.default)(
              "reviews-image-bg pointer-events-none absolute left-0 top-0 flex h-full w-full items-center"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              "img",
              {
                className: "h-full w-full object-cover md:object-contain",
                src: data.primary.background_image.url || "",
                alt: data.primary.background_image.alt || ""
              },
              void 0,
              !1,
              {
                fileName: "app/slices/HomePage/HomePageReviews.tsx",
                lineNumber: 91,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/slices/HomePage/HomePageReviews.tsx",
            lineNumber: 86,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "absolute left-0 top-0 items-center pl-1.5 pt-8 md:p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("h3", { className: "heading--3 mr-2 inline-block text-white", children: "what the users are saying..." }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageReviews.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageReviews.tsx",
          lineNumber: 98,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "mobile-only--flex h-full items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          import_react_splide2.Splide,
          {
            options: {
              perMove: 1,
              padding: { left: "8%", right: "8%" },
              arrows: !1,
              pagination: !1
            },
            children: data.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react_splide2.SplideSlide, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(Image, { field: item.image }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageReviews.tsx",
              lineNumber: 115,
              columnNumber: 15
            }, this) }, `Review-Card-Img-Mobile-${index}`, !1, {
              fileName: "app/slices/HomePage/HomePageReviews.tsx",
              lineNumber: 114,
              columnNumber: 13
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/slices/HomePage/HomePageReviews.tsx",
            lineNumber: 105,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageReviews.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { className: "desktop-only absolute h-full w-full p-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { ref: imagesContainer, className: "relative h-full w-full", children: data.items.map((field, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          "div",
          {
            onMouseLeave: onMouseLeaveImage,
            onMouseOver: onMouseOverImage,
            ref: (node) => setImgRef(node),
            className: "absolute w-[35%] opacity-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
              Image,
              {
                field: field.image,
                className: "pointer-events-none object-contain"
              },
              void 0,
              !1,
              {
                fileName: "app/slices/HomePage/HomePageReviews.tsx",
                lineNumber: 132,
                columnNumber: 17
              },
              this
            )
          },
          `HomePageReviews-${index}`,
          !1,
          {
            fileName: "app/slices/HomePage/HomePageReviews.tsx",
            lineNumber: 125,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageReviews.tsx",
          lineNumber: 122,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageReviews.tsx",
          lineNumber: 121,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          "div",
          {
            className: "desktop-only absolute bottom-0 right-0 cursor-pointer items-center p-8",
            onClick: onClearClick,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("h3", { className: "heading--3 mr-2 inline-block text-white", children: "( CLEAR )" }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageReviews.tsx",
                lineNumber: 148,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("span", { className: "inline-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(ClearIcon_default, {}, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageReviews.tsx",
                lineNumber: 150,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageReviews.tsx",
                lineNumber: 149,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/slices/HomePage/HomePageReviews.tsx",
            lineNumber: 142,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/slices/HomePage/HomePageReviews.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  );
}
var HomePageReviews_default = HomePageReviews;

// app/components/TextBlur.tsx
var import_clsx22 = __toESM(require("clsx")), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function TextBlur({
  children,
  textAlign,
  className,
  verticalLeft = !1,
  verticalRight = !1,
  black = !1
}) {
  let wrapperClassNames = (0, import_clsx22.default)(
    "text-blur display--2--vw relative",
    textAlign,
    {
      black,
      verticalLeft,
      verticalRight
    },
    className
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("h1", { className: wrapperClassNames, children }, void 0, !1, {
    fileName: "app/components/TextBlur.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
var TextBlur_default = TextBlur;

// app/slices/HomePage/HomePageQuote.tsx
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime"), innerGrid = "md:grid md:grid-cols-12 md:gap-x-[20px]";
function HomePageQuote() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
    "section",
    {
      className: "texture-background overflow-hidden pb-16 pt-16 md:max-w-none md:pb-56 md:pt-64",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("div", { className: "max-container mx-auto max-w-[375px] md:max-w-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(TextBlur_default, { className: "mb-28 md:mb-56", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: innerGrid, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:col-span-12", children: "CANVAS IS AN " }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 16,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:col-span-10 md:col-start-3", children: [
              "INTERACTIVE ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "desktop-only--inline", children: "DESIGN" }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageQuote.tsx",
                lineNumber: 18,
                columnNumber: 27
              }, this)
            ] }, void 0, !0, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 17,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:hidden", children: "DESIGN &" }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 20,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:col-span-10 md:col-start-3", children: [
              "DEVELOP",
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "mobile-only--inline", children: "-" }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageQuote.tsx",
                lineNumber: 22,
                columnNumber: 22
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", { className: "mobile-only--inline" }, void 0, !1, {
                fileName: "app/slices/HomePage/HomePageQuote.tsx",
                lineNumber: 23,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { children: [
                "MENT ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", { className: "mobile-only--inline" }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePageQuote.tsx",
                  lineNumber: 25,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "block text-right md:inline-block", children: "STUDIO." }, void 0, !1, {
                  fileName: "app/slices/HomePage/HomePageQuote.tsx",
                  lineNumber: 26,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/slices/HomePage/HomePageQuote.tsx",
                lineNumber: 24,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 21,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/slices/HomePage/HomePageQuote.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageQuote.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePageQuote.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(TextBlur_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: innerGrid, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
            "span",
            {
              className: "block text-right md:col-span-4 md:col-start-5 md:inline-block",
              children: "WE CREATE"
            },
            void 0,
            !1,
            {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 37,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:col-span-7", children: [
            "STRATEGY-",
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", { className: "mobile-only" }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this),
            "FOCUSED ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", { className: "mobile-only" }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 47,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/slices/HomePage/HomePageQuote.tsx",
            lineNumber: 44,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", { className: "desktop-only" }, void 0, !1, {
            fileName: "app/slices/HomePage/HomePageQuote.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:col-span-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "block text-right md:inline-block", children: "& DESIGN-" }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "block text-right md:inline-block", children: "DRIVEN" }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/slices/HomePage/HomePageQuote.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "md:col-span-8", children: [
            "DIGITAL ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("br", { className: "mobile-only--inline" }, void 0, !1, {
              fileName: "app/slices/HomePage/HomePageQuote.tsx",
              lineNumber: 58,
              columnNumber: 23
            }, this),
            "EXPERIENCES."
          ] }, void 0, !0, {
            fileName: "app/slices/HomePage/HomePageQuote.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/slices/HomePage/HomePageQuote.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/slices/HomePage/HomePageQuote.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/slices/HomePage/HomePageQuote.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/slices/HomePage/HomePageQuote.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}
var HomePageQuote_default = HomePageQuote;

// app/components/Footer.tsx
var import_clsx23 = __toESM(require("clsx")), import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
    "footer",
    {
      className: (0, import_clsx23.default)(
        "transition-transform",
        "noise-background relative overflow-hidden bg-black text-white"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "grid-container mb-10 md:mb-56 md:pt-11", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-4 py-20 md:order-last md:col-start-9 md:py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h1", { className: "heading--1 md:text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(PrimaryCTALink, { to: "contact", dark: !0, size: "lg", className: "z-0", children: "Let's Chat" }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 18,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "body--1 col-span-4 mr-10 md:col-span-6", children: "If you are curious about some of our process or are interested in the details, we document much of what we do in Notion. We leave some of it public for those interested." }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "grid-container relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-2 flex flex-col justify-between border-l border-t border-white/20 pl-2.5 pt-3 md:h-[700px] md:pl-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "label--2 mb-24 md:mb-10", children: "DOCUMENTATION" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 33,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { className: "body--3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: "Development" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 35,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: "Design" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 36,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: "Process" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "desktop-only mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LinkCTA, { to: "#", className: "label--2", children: "PRIVACY POLICY" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 44,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 43,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LinkCTA, { to: "#", className: "label--2", children: "TERMS & CONDITIONS" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 49,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 48,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-2 flex flex-col justify-between border-l border-t border-white/20 pl-2.5 pt-3 md:h-[700px] md:pl-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "label--2 mb-24 md:mb-10", children: "SOCIAL" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 59,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { className: "body--3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LinkCTA, { target: "_blank", to: INSTAGRAM_URL, children: "Instagram" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 63,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LinkCTA, { target: "_blank", to: LINKEDIN_URL, children: "LinkedIn" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 68,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LinkCTA, { target: "_blank", to: TWITTER_URL, children: "Twitter" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 73,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 72,
                  columnNumber: 15
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 61,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "label--2 desktop-only mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-4", children: "\xA92023 Canvas LLC" }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 81,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-4 flex flex-col justify-between border-l border-t border-white/20 pb-20 pl-3 pt-3 md:col-span-2 md:h-[700px] md:pb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("h3", { className: "label--2 mb-5 md:mb-10", children: "CONTACTS" }, void 0, !1, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 88,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { className: "body--3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: "info@canvascreative.co" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 90,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LinkCTA, { className: "body--3", to: "#", children: "Careers" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 92,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 91,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Footer.tsx",
              lineNumber: 89,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 30,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          "div",
          {
            className: "grid-container pointer-events-none select-none md:absolute md:bottom-4 md:mb-24",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-4 border-l border-l-white/20 md:col-span-5 md:border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(TextBlur_default, { children: "PROPERLY " }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 107,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 106,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-4 border-l border-l-white/20 md:col-start-9 md:border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(TextBlur_default, { children: "BALANCED" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 110,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-4 border-l border-l-white/20 md:col-span-5 md:col-start-6 md:border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(TextBlur_default, { children: [
                "FOR FEELING ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { className: "desktop-only--inline", children: "&" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 116,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 115,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 114,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-4 border-l border-l-white/20 pb-20 md:col-span-5 md:col-start-8 md:border-0 md:pb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(TextBlur_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("span", { className: "mobile-only--inline", children: "&" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 122,
                  columnNumber: 13
                }, this),
                " FUNCTION."
              ] }, void 0, !0, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 121,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 120,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 101,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
          "div",
          {
            className: "grid-container mobile-only--grid select-none md:absolute md:bottom-4 ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-2 border-l border-l-white/20 pl-2.5 md:pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "label--2 mb-5", children: "privacy policy" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 133,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "label--2 mb-5", children: "terms & Conditions" }, void 0, !1, {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 134,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 131,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "col-span-2 pl-2.5 md:pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("ul", { className: "label--2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("li", { className: "mb-5", children: "\xA92023 Canvas LLC" }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 140,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 139,
                columnNumber: 11
              }, this) }, void 0, !1, {
                fileName: "app/components/Footer.tsx",
                lineNumber: 138,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Footer.tsx",
            lineNumber: 126,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}
var Footer_default = Footer;

// app/routes/_index.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "Canvas Studio Website V4" }], loader3 = async () => {
  let homepage = await createClient2().getSingle("homepage", {
    fetchLinks: ["project_page.roles", "project_page.links"]
  }), homeProjects = findAllSlicesByType(homepage, "homepage_project");
  return (0, import_node5.defer)({
    homepage,
    slices: {
      homeProjects
    }
  });
};
function HomePage() {
  let { homepage, slices } = (0, import_react38.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePageHero_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePageQuote_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePageProjects_default, { data: slices.homeProjects }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    homepage.data.body.map((slice) => {
      switch (slice.slice_type) {
        case "table":
          return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePageTable_default, { data: slice }, slice.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 44,
            columnNumber: 20
          }, this);
        case "homepage_portfolio_slice":
          return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePagePortfolioMobile, { data: slice }, slice.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 46,
            columnNumber: 20
          }, this);
        case "homepage_portfolio_desktop":
          return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePagePortfolioDesktop_default, { data: slice }, slice.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 48,
            columnNumber: 20
          }, this);
        case "home_reviews":
          return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(HomePageReviews_default, { data: slice }, slice.id, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 50,
            columnNumber: 20
          }, this);
        default:
          return null;
      }
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WXRS5PHA.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-2FB3OOXZ.js", "/build/_shared/chunk-JYYPEVM4.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-F3ZKR4VM.js", imports: ["/build/_shared/chunk-6YR3AMMK.js", "/build/_shared/chunk-KT64RBQR.js", "/build/_shared/chunk-B7IYI5WI.js", "/build/_shared/chunk-TYZV27UF.js", "/build/_shared/chunk-XYKCWTHS.js", "/build/_shared/chunk-64U3OWWI.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-FFWLSMTK.js", "/build/_shared/chunk-L34RLERN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-4XOT6OFC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-UWNKXMIQ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/styleguide": { id: "routes/styleguide", parentId: "root", path: "styleguide", index: void 0, caseSensitive: void 0, module: "/build/routes/styleguide-BDZISS3F.js", imports: ["/build/_shared/chunk-YIRGWWMB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work.$project": { id: "routes/work.$project", parentId: "root", path: "work/:project", index: void 0, caseSensitive: void 0, module: "/build/routes/work.$project-I7XHWJEX.js", imports: ["/build/_shared/chunk-YIRGWWMB.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "187707ef", hmr: { runtime: "/build/_shared/chunk-JYYPEVM4.js", timestamp: 1693856138243 }, url: "/build/manifest-187707EF.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/work.$project": {
    id: "routes/work.$project",
    parentId: "root",
    path: "work/:project",
    index: void 0,
    caseSensitive: void 0,
    module: work_project_exports
  },
  "routes/styleguide": {
    id: "routes/styleguide",
    parentId: "root",
    path: "styleguide",
    index: void 0,
    caseSensitive: void 0,
    module: styleguide_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v2.0.0-pre.5
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
