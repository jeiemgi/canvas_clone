import type {LinksFunction} from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    LiveReload,
    ScrollRestoration,
} from "@remix-run/react";
import tailwind from "~/styles/tailwind.css";
import {cssBundleHref} from "@remix-run/css-bundle";

export const links: LinksFunction = () => [
    ...(cssBundleHref ? [{rel: "stylesheet", href: cssBundleHref}] : [{rel: "stylesheet", href: tailwind}]),
];

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
