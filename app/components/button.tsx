import * as React from "react";
import clsx from "clsx";

//TODO: Make custom varaint

interface ButtonProps {
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    children: React.ReactNode | React.ReactNode[];
}

function getClassName({ className }: { className?: string }) {
    return clsx(
        "group relative h-max inline-flex text-lg font-bold focus:outline-none opacity-100 transition ease-in-out duration-300",
        className,
    );
}

function ButtonInner({
    children,
    variant,
    size = "medium",
}: Pick<ButtonProps, "children" | "variant" | "size">) {
    return (
        <>
            <div
                className={clsx(
                    "absolute inset-0 transform rounded-lg opacity-100 transition disabled:opacity-50 shadow-lg",
                    {
                        "btn-primary": variant === "primary",
                        "border border-gray-400 border-opacity-50 group-hover:ring-2 group-hover:ring-gray-800 dark:group-hover:ring-cyan-400 group-focus:ring-2 group-focus:ring-gray-800 dark:group-focus:ring-cyan-400":
                            variant === "secondary",
                    },
                )}
            />

            <div
                className={clsx(
                    "relative flex h-full w-full items-center justify-center whitespace-nowrap text-black dark:text-white group-hover:text-white leading-normal",
                    {
                        "space-x-5 px-11 py-6": size === "large",
                        "space-x-3 px-8 py-4": size === "medium",
                        "space-x-1 px-5 py-2 text-sm": size === "small",
                    },
                )}
            >
                {/* icon here */}
                {children}
            </div>
        </>
    );
}

function IconButtonInner({
    children,
    variant,
    size = "medium",
}: Pick<ButtonProps, "children" | "variant" | "size">) {
    return (
        <>
            <div
                className={clsx(
                    "absolute inset-0 transform rounded-lg opacity-100 transition disabled:opacity-50 shadow-lg",
                    {
                        "btn-primary": variant === "primary",
                        "border border-gray-400 border-opacity-50 group-hover:ring-2 group-hover:ring-gray-800 dark:group-hover:ring-cyan-400 group-focus:ring-2 group-focus:ring-gray-800 dark:group-focus:ring-cyan-400":
                            variant === "secondary",
                    },
                )}
            />

            <div
                className={clsx(
                    "relative flex h-full w-full items-center justify-center whitespace-nowrap text-black dark:text-white group-hover:text-white leading-normal",
                    {
                        "space-x-5 p-6": size === "large",
                        "space-x-3 p-4": size === "medium",
                        "space-x-1 p-2 text-sm": size === "small",
                    },
                )}
            >
                {/* icon here */}
                {children}
            </div>
        </>
    );
}

export function Button({
    children,
    variant = "primary",
    size = "large",
    className,
    ...buttonProps
}: ButtonProps & JSX.IntrinsicElements["button"]) {
    return (
        <button {...buttonProps} className={getClassName({ className })}>
            <ButtonInner variant={variant} size={size}>
                {children}
            </ButtonInner>
        </button>
    );
}

export function IconButton({
    children,
    variant = "primary",
    size = "large",
    className,
    ...buttonProps
}: ButtonProps & JSX.IntrinsicElements["button"]) {
    return (
        <button {...buttonProps} className={getClassName({ className })}>
            <IconButtonInner variant={variant} size={size}>
                {children}
            </IconButtonInner>
        </button>
    );
}
