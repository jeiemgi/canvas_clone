import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
} from "@remix-run/react";
import global from "~/styles/global.css";
import tailwind from "~/styles/tailwind.css";
import splideCss from "@splidejs/splide/dist/css/splide-core.min.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import { gsap } from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CustomEase from "gsap/dist/CustomEase";
import Flip from "gsap/dist/Flip";
import Layout from "~/components/Layout";
import ErrorBoundaryComponent from "~/components/ErrorBoundary";
import type { LinksFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";
import { createClient } from "~/lib/prismicClient";
import { defer } from "@remix-run/node";

// NOTE: Register plugins here, so we register them only once.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, CustomEase, Flip);

const otherCss = [
  { rel: "stylesheet", href: global },
  { rel: "stylesheet", href: tailwind },
  { rel: "stylesheet", href: splideCss },
];

export const links: LinksFunction = () => {
  return cssBundleHref
    ? [...otherCss, { rel: "stylesheet", href: cssBundleHref }]
    : otherCss;
};

export const loader = async () => {
  const client = createClient();
  const workMenu = await client.getSingle("workmenu", {
    fetchLinks: ["project_page.roles", "project_page.links"],
  });

  return defer({
    workMenu,
  });
};

function Document({ children, title }: PropsWithChildren<{ title?: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="keywords" content="Canvas, website" />
        {/*<meta
          name="twitter:image"
          content="https://remix-jokes.lol/social.png"
        />*/}
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

/*export function ErrorBoundary() {
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
}*/

export type RootLoader = typeof loader;

export default function App() {
  const { workMenu } = useLoaderData<RootLoader>();

  return (
    <Document>
      <Layout workMenu={workMenu}>
        <Outlet />
      </Layout>
    </Document>
  );
}
