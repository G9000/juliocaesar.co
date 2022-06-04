import * as React from "react";
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
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { useEnvironment } from "~/utils/misc";

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

function Body() {
    return (
        <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
            <Toaster />
        </Layout>
    );
}

function AppWithSolanaProvider() {
    const network = useEnvironment.solanaNetwork;
    const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);
    const wallets = React.useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network],
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Body />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

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

            <AppWithSolanaProvider />
        </html>
    );
}

export default function AppWithThemeProvider() {
    const data = useLoaderData<LoaderData>();
    return (
        <ThemeProvider specifiedTheme={data.theme}>
            <App />
        </ThemeProvider>
    );
}
