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
import { defer } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import splideCss from "@splidejs/splide/dist/css/splide-core.min.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import { createClient } from "~/lib/prismicClient";
import Layout from "~/components/Layout";
import ErrorBoundaryComponent from "~/components/ErrorBoundary";
import { NavThemeProvider } from "~/components/Navigation/NavThemeProvider";
import { gsap } from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import type { LinksFunction } from "@remix-run/node";

// NOTE: Register plugins here, so we register them only once.
gsap.registerPlugin(ScrollTrigger, SplitText);

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

export const loader = async () => {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "top-navigation");

  return defer({
    navigation,
  });
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <Links />
        </head>
        <body>
          <ErrorBoundaryComponent error={error} />
        </body>
      </html>
    );
  } else if (error instanceof Error) {
    return (
      <div style={{ padding: "0 2rem" }}>
        <h1>Error</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NavThemeProvider>
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NavThemeProvider>
      </body>
    </html>
  );
}
