import * as React from "react";

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    endIcon?: React.ReactElement;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    startIcon?: React.ReactElement;
    style?: React.CSSProperties;
    tabIndex?: number;
    children?: React.ReactNode | React.ReactNode[];
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={`wallet-adapter-button ${props.className || ""}`}
            disabled={props.disabled}
            onClick={props.onClick}
            tabIndex={props.tabIndex || 0}
            type="button"
        >
            {props.startIcon && (
                <i className="wallet-adapter-button-start-icon">
                    {props.startIcon}
                </i>
            )}
            {props.children}
            {props.endIcon && (
                <i className="wallet-adapter-button-end-icon">
                    {props.endIcon}
                </i>
            )}
        </button>
    );
};
