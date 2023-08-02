import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import splideCss from "@splidejs/splide/dist/css/splide-core.min.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import { gsap } from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ErrorBoundaryComponent from "~/components/ErrorBoundary";
import type { LinksFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";
import Layout from "~/components/Layout";
import { useLayoutEffect } from "~/hooks";

// NOTE: Register plugins here, so we register them only once.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const otherCss = [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: splideCss },
];

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref
      ? [...[{ rel: "stylesheet", href: cssBundleHref }], ...otherCss]
      : otherCss),
  ];
};

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="Canvas, website" />
        <meta
          name="twitter:image"
          content="https://remix-jokes.lol/social.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@canvascreative" />
        <meta name="twitter:site" content="@canvascreative" />
        <meta name="twitter:title" content="Canvas Studio" />
        <Meta />
        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <Document title={`${error.status} ${error.statusText}`}>
        <Layout footer={false}>
          <ErrorBoundaryComponent error={error} />
        </Layout>
      </Document>
    );
  }

  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  return (
    <Document title="App Error">
      <div className="error-container">
        <h1>App Error</h1>
        <pre>{errorMessage}</pre>
      </div>
    </Document>
  );
}

export default function App() {
  useLayoutEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    ScrollSmoother.create({
      smooth: 0.8, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      normalizeScroll: true,
      ease: "power4.out",
    });
  }, []);

  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
