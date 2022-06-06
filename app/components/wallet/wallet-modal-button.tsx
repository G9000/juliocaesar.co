import * as React from "react";
import { Button } from "~/components/button";
import type { ButtonProps } from "~/components/button";
import { useWalletModal } from "~/hooks/useWalletModal";

export function WalletModalButton({
    children = "Select Wallet",
    onClick,
    ...props
}: ButtonProps) {
    const { visible, setVisible } = useWalletModal();

    const handleClick = React.useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (onClick) onClick(event);
            if (!event.defaultPrevented) setVisible(!visible);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onClick, visible],
    );

    return (
        <Button
            className="wallet-adapter-button-trigger"
            onClick={handleClick}
            {...props}
        >
            {children}
        </Button>
    );
}
