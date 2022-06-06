import * as React from "react";
import type { Wallet } from "@solana/wallet-adapter-react";

export interface WalletIconProps
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    wallet: Wallet | null;
}

export function WalletIcon({ wallet, ...props }: WalletIconProps) {
    return (
        wallet && (
            <img
                src={wallet.adapter.icon}
                alt={`${wallet.adapter.name} icon`}
                {...props}
            />
        )
    );
}
