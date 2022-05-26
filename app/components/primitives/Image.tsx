import type { TransformerOption } from "@cld-apis/types";
import { getImgProps, getImageBuilder } from "~/libs/ImageBuilder";
import type { ImageBuilder } from "~/libs/ImageBuilder";

type ImageType = {
    imageBuilder: ImageBuilder;
};

export const Image = ({ imageBuilder }: ImageType) => {
    return (
        // <img
        //     className="h-auto w-full object-contain"
        //     {...getImageProps(imageBuilder)}
        // />
        <img
            // key={frontmatter.bannerCloudinaryId}
            title={frontmatter.bannerCredit}
            className="rounded-lg object-cover object-center"
            {...getImgProps(
                getImageBuilder(
                    frontmatter.bannerCloudinaryId,
                    getBannerAltProp(frontmatter),
                ),
                {
                    widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
                    sizes: [
                        "(max-width:1023px) 80vw",
                        "(min-width:1024px) and (max-width:1620px) 67vw",
                        "1100px",
                    ],
                    transformations: {
                        background: "rgb:e6e9ee",
                    },
                },
            )}
        />
    );
};

function getImageProps(
    imageBuilder: ImageBuilder,
    transformations?: TransformerOption,
) {
    return getImgProps(getImageBuilder(imageBuilder.id), {
        widths: [256, 550, 700, 900, 1300, 1800],
        sizes: [
            "(max-width: 1023px) 80vw",
            "(min-width: 1024px) and (max-width: 1279px) 50vw",
            "(min-width: 1280px) 900px",
        ],
        transformations,
    });
}
