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
import ErrorBoundaryComponent from "~/components/ErrorBoundary";
import NavThemeProvider from "~/components/Navigation/NavThemeProvider";
import type { LinksFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";

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
        <NavThemeProvider>{children}</NavThemeProvider>
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
        <div>
          <ErrorBoundaryComponent error={error} />
        </div>
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
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
