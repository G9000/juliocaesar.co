import * as React from "react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import type { Wallet } from "@solana/wallet-adapter-react";
import { Button } from "~/components/button";
import { WalletIcon } from "~/components/wallet/wallet-icon";

export interface WalletListItemProps {
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    tabIndex?: number;
    wallet: Wallet;
}

export function WalletListItem({
    handleClick,
    tabIndex,
    wallet,
}: WalletListItemProps) {
    return (
        <li>
            <Button
                onClick={handleClick}
                startIcon={<WalletIcon wallet={wallet} />}
                tabIndex={tabIndex}
            >
                {wallet.adapter.name}
                {wallet.readyState === WalletReadyState.Installed && (
                    <span>Detected</span>
                )}
            </Button>
        </li>
    );
}
