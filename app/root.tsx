import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";
import { defer } from "@remix-run/node";
import { createClient } from "~/lib/prismicClient";
import global from "~/styles/global.css";
import tailwind from "~/styles/tailwind.css";
import components from "~/styles/components/index.css";
import splideCss from "@splidejs/splide/dist/css/splide-core.min.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import Layout from "~/components/Layout";
import ErrorBoundaryComponent from "~/components/ErrorBoundary";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import SplitText from "gsap/dist/SplitText";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";

// NOTE: Register plugins here, so we register them only once.
gsap.registerPlugin(Flip, ScrollTrigger, ScrollSmoother, SplitText);

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    { rel: "stylesheet", href: global },
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: splideCss },
    { rel: "stylesheet", href: components },
  ];
};

export const loader = async () => {
  const client = createClient();
  const workMenu = await client.getSingle("workmenu", {
    fetchLinks: [
      "project_page.roles",
      "project_page.links",
      "project_page.reel_cover",
    ],
  });

  return defer({
    workMenu,
  });
};

export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "Canvas | Design Studio and Creative Agency",
    viewport: "width=device-width,initial-scale=1",
  },
];

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
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
        <Layout>
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

export type RootLoader = typeof loader;

export default function App() {
  const { workMenu } = useLoaderData<RootLoader>();

  return (
    <Document>
      <Layout workMenuData={workMenu}>
        <Outlet />
      </Layout>
    </Document>
  );
}
