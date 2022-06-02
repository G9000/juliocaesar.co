import type { MetaFunction, LinksFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import styles from "./tailwind.css";
import clsx from "clsx";
import {
    ThemeProvider,
    useTheme,
    NonFlashOfWrongThemeEls,
} from "~/providers/theme-provider";
import { getThemeSession } from "~/utils/theme.server";
import type { Theme } from "~/providers/theme-provider";
import { Layout } from "./components/layout/Layout";
import { Toaster } from "react-hot-toast";

export type LoaderData = {
    theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
    const themeSession = await getThemeSession(request);

    const data: LoaderData = {
        theme: themeSession.getTheme(),
    };

    return data;
};

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Julio Caesar",
    viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function App() {
    const data = useLoaderData<LoaderData>();
    const [theme] = useTheme();
    return (
        <html lang="en" className={clsx(theme)}>
            <head>
                <Meta />
                <Links />
                <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
            </head>

            <Layout>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
                <Toaster />
            </Layout>
        </html>
    );
}

export default function AppWithProvider() {
    const data = useLoaderData<LoaderData>();
    return (
        <ThemeProvider specifiedTheme={data.theme}>
            <App />
        </ThemeProvider>
    );
}
