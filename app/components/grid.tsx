import * as React from "react";
import clsx from "clsx";

type GridProps = {
    children: React.ReactNode;
    overflow?: boolean;
    className?: string;
    as?: React.ElementType;
    nested?: boolean;
    rowGap?: boolean;
    featured?: boolean;
};

export const Grid = React.forwardRef<HTMLElement, GridProps>(function Grid(
    { children, className, as: Tag = "div", featured, nested, rowGap },
    ref,
) {
    return (
        <Tag
            ref={ref}
            className={clsx("relative", {
                "mx-10vw": !nested,
                "w-full": nested,
                "py-10 md:py-24 lg:pb-40 lg:pt-36": featured,
            })}
        >
            {featured ? (
                <div className="absolute inset-0 -mx-5vw">
                    <div className="mx-auto h-full w-full max-w-8xl" />
                </div>
            ) : null}

            <div
                className={clsx(
                    "relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6",
                    {
                        "mx-auto w-full": !nested,
                        "gap-y-24 lg:gap-y-6": rowGap,
                    },
                    className,
                )}
            >
                {children}
            </div>
        </Tag>
    );
});
