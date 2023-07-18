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
import { cssBundleHref } from "@remix-run/css-bundle";
import tailwind from "~/styles/tailwind.css";
import splideCss from "@splidejs/splide/dist/css/splide-core.min.css";
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

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [{ rel: "stylesheet", href: cssBundleHref }]
    : [{ rel: "stylesheet", href: tailwind }]),
  { rel: "stylesheet", href: splideCss },
];

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
      <html lang="en">
        <head>
          <Links />
        </head>
        <body>
          <ErrorBoundaryComponent error={error} />
        </body>
      </html>
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
