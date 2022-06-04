import * as React from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

export const useSSRLayoutEffect =
    typeof window === "undefined" ? () => {} : React.useLayoutEffect;

export const useEnvironment =
    process.env.NODE_ENV === "production"
        ? { env: "Production", solanaNetwork: WalletAdapterNetwork.Mainnet }
        : { env: "Development", solanaNetwork: WalletAdapterNetwork.Devnet };
