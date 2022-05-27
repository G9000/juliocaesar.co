import type { TransformerOption } from "@cld-apis/types";
import { setConfig, buildImageUrl } from "cloudinary-build-url";

setConfig({
    cloudName: "juliocaesar-co",
});

type ImageBuilder = {
    (transformations?: TransformerOption): string;
    alt: string;
    id: string;
};

const createImages = <
    ImageType extends Record<string, { id: string; alt: string }>,
>(
    images: ImageType,
) => {
    const imageBuilders: Record<string, ImageBuilder> = {};
    for (const [name, { id, alt }] of Object.entries(images)) {
        imageBuilders[name] = getImageBuilder(id, alt);
    }
    return imageBuilders as { [Name in keyof ImageType]: ImageBuilder };
};

function getImageBuilder(id: string, alt: string = ""): ImageBuilder {
    function imageBuilder(transformations?: TransformerOption) {
        return buildImageUrl(id, { transformations });
    }
    imageBuilder.alt = alt;
    imageBuilder.id = id;
    return imageBuilder;
}

const imageLists = createImages({
    IndexjulioCaesarAbout: {
        id: "Index/about-julio",
        alt: "julio caesar about",
    },
});

function getImgProps(
    imageBuilder: ImageBuilder,
    {
        widths,
        sizes,
        transformations,
    }: {
        widths: Array<number>;
        sizes: Array<string>;
        transformations?: TransformerOption;
    },
) {
    const averageSize = Math.ceil(
        widths.reduce((a, s) => a + s) / widths.length,
    );

    return {
        alt: imageBuilder.alt,
        src: imageBuilder({
            quality: "auto",
            format: "auto",
            ...transformations,
            resize: { width: averageSize, ...transformations?.resize },
        }),
        srcSet: widths
            .map((width) =>
                [
                    imageBuilder({
                        quality: "auto",
                        format: "auto",
                        ...transformations,
                        resize: { width, ...transformations?.resize },
                    }),
                    `${width}w`,
                ].join(" "),
            )
            .join(", "),
        sizes: sizes.join(", "),
    };
}

async function getBlurDataUrl(cloudinaryId: string) {
    const imageURL = buildImageUrl(cloudinaryId, {
        transformations: {
            resize: { width: 100 },
            quality: "auto",
            format: "webp",
            effect: {
                name: "blur",
                value: "1000",
            },
        },
    });
    const dataUrl = await getDataUrlForImage(imageURL);
    return dataUrl;
}

async function getDataUrlForImage(imageUrl: string) {
    const res = await fetch(imageUrl);
    const arrayBuffer = await res.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");
    const mime = res.headers.get("Content-Type") ?? "image/webp";
    const dataUrl = `data:${mime};base64,${base64}`;
    return dataUrl;
}

export { getImgProps, getImageBuilder, getBlurDataUrl, imageLists };
export type { ImageBuilder };
