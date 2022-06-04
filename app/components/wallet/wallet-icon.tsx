import type { Wallet } from "@solana/wallet-adapter-react";
import * as React from "react";

export interface WalletIconProps
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {
    wallet: Wallet | null;
}

export const WalletIcon = ({ wallet, ...props }: WalletIconProps) => {
    return (
        wallet && (
            <img
                src={wallet.adapter.icon}
                alt={`${wallet.adapter.name} icon`}
                {...props}
            />
        )
    );
};
