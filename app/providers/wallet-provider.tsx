import type { FC, ReactNode } from "react";
import React, { useState } from "react";
import { WalletModalContext } from "~/hooks/useWalletModal";
import type { WalletModalProps } from "~/components/wallet/wallet-modal";
import { WalletModal } from "~/components/wallet/wallet-modal";

export interface WalletModalProviderProps extends WalletModalProps {
    children: ReactNode;
}

export const WalletModalProvider: FC<WalletModalProviderProps> = ({
    children,
    ...props
}) => {
    const [visible, setVisible] = useState(false);

    return (
        <WalletModalContext.Provider
            value={{
                visible,
                setVisible,
            }}
        >
            {children}
            {visible && <WalletModal {...props} />}
        </WalletModalContext.Provider>
    );
};
