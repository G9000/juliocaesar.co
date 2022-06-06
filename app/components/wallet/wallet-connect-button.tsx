import * as React from "react";
import type { MouseEventHandler } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import type { ButtonProps } from "~/components/button";
import { Button } from "~/components/button";
import { WalletIcon } from "~/components/wallet/wallet-icon";

export const WalletConnectButton = ({
    children,
    disabled,
    onClick,
    ...props
}: ButtonProps) => {
    const { wallet, connect, connecting, connected } = useWallet();

    const handleClick: MouseEventHandler<HTMLButtonElement> = React.useCallback(
        (event) => {
            if (onClick) onClick(event);
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            if (!event.defaultPrevented) connect().catch(() => {});
        },
        [onClick, connect],
    );

    const content = React.useMemo(() => {
        if (children) return children;
        if (connecting) return "Connecting ...";
        if (connected) return "Connected";
        if (wallet) return "Connect";
        return "Connect Wallet";
    }, [children, connecting, connected, wallet]);

    return (
        <Button
            className="wallet-adapter-button-trigger"
            disabled={disabled || !wallet || connecting || connected}
            startIcon={wallet ? <WalletIcon wallet={wallet} /> : undefined}
            onClick={handleClick}
            {...props}
        >
            {content}
        </Button>
    );
};
