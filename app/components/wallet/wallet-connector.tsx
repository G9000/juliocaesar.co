import { useWallet } from "@solana/wallet-adapter-react";
import * as React from "react";
import type { ButtonProps } from "~/components/button";
import { Button } from "~/components/button";
import { useWalletModal } from "~/components/wallet/wallet-modal";
import { WalletConnectButton } from "~/components/wallet/wallet-connect-button";
import { WalletIcon } from "~/components/wallet/wallet-icon";
import { WalletModalButton } from "~/components/wallet/wallet-modal-button";

export function WalletConnector({ children, ...props }: ButtonProps) {
    const { publicKey, wallet, disconnect } = useWallet();
    const { setVisible } = useWalletModal();
    const [copied, setCopied] = React.useState(false);
    const [active, setActive] = React.useState(false);
    const ref = React.useRef<HTMLUListElement>(null);

    const base58 = React.useMemo(() => publicKey?.toBase58(), [publicKey]);
    const content = React.useMemo(() => {
        if (children) return children;
        if (!wallet || !base58) return null;
        return base58.slice(0, 4) + ".." + base58.slice(-4);
    }, [children, wallet, base58]);

    const copyAddress = React.useCallback(async () => {
        if (base58) {
            await navigator.clipboard.writeText(base58);
            setCopied(true);
            setTimeout(() => setCopied(false), 400);
        }
    }, [base58]);

    const openDropdown = React.useCallback(() => {
        setActive(true);
    }, []);

    const closeDropdown = React.useCallback(() => {
        setActive(false);
    }, []);

    const openModal = React.useCallback(() => {
        setVisible(true);
        closeDropdown();
    }, [closeDropdown]);

    React.useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const node = ref.current;

            // Do nothing if clicking dropdown or its descendants
            if (!node || node.contains(event.target as Node)) return;
            closeDropdown();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, closeDropdown]);

    if (!wallet)
        return <WalletModalButton {...props}>{children}</WalletModalButton>;
    if (!base58)
        return <WalletConnectButton {...props}>{children}</WalletConnectButton>;

    return (
        <div className="wallet-adapter-dropdown">
            <Button
                aria-expanded={active}
                className="wallet-adapter-button-trigger"
                style={{
                    pointerEvents: active ? "none" : "auto",
                    ...props.style,
                }}
                onClick={openDropdown}
                startIcon={<WalletIcon wallet={wallet} />}
                {...props}
            >
                {content}
            </Button>
            <ul
                aria-label="dropdown-list"
                className={`wallet-adapter-dropdown-list ${
                    active && "wallet-adapter-dropdown-list-active"
                }`}
                ref={ref}
                role="menu"
            >
                <li
                    onClick={copyAddress}
                    className="wallet-adapter-dropdown-list-item"
                    role="menuitem"
                >
                    {copied ? "Copied" : "Copy address"}
                </li>
                <li
                    onClick={openModal}
                    className="wallet-adapter-dropdown-list-item"
                    role="menuitem"
                >
                    Change wallet
                </li>
                <li
                    onClick={disconnect}
                    className="wallet-adapter-dropdown-list-item"
                    role="menuitem"
                >
                    Disconnect
                </li>
            </ul>
        </div>
    );
}
