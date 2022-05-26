import * as React from "react";
import clsx from "clsx";

function BlurrableImageBuilder({
    img,
    blurDataUrl,
    ...rest
}: {
    img: React.ReactElement<React.ImgHTMLAttributes<HTMLImageElement>>;
    blurDataUrl?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
    const [visible, setVisible] = React.useState(false);
    const jsImgElRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        if (!jsImgElRef.current) return;
        if (jsImgElRef.current.complete) return;

        let current = true;
        jsImgElRef.current.addEventListener("load", () => {
            if (!jsImgElRef.current || !current) return;
            setTimeout(() => {
                setVisible(true);
            }, 0);
        });

        return () => {
            current = false;
        };
    }, []);

    const jsImgEl = React.cloneElement(img, {
        // @ts-expect-error
        ref: jsImgElRef,
        className: clsx(img.props.className, "transition-opacity", {
            "opacity-0": !visible,
        }),
    });

    return (
        <div {...rest}>
            {blurDataUrl ? (
                <>
                    <img
                        src={blurDataUrl}
                        className={img.props.className}
                        alt={img.props.alt}
                    />
                    <div
                        className={clsx(
                            img.props.className,
                            "backdrop-blur-xl",
                        )}
                    />
                </>
            ) : null}
            {jsImgEl}
            <noscript>{img}</noscript>
        </div>
    );
}

export { BlurrableImageBuilder };
