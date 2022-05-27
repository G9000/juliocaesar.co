import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Layout } from "./components/layout/Layout";
import { Toaster } from "react-hot-toast";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Julio Caesar",
    viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <Layout>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </Layout>
            <Toaster />
        </html>
    );
}
