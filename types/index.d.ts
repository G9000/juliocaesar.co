/* eslint-disable no-undef */
import type calculateReadingTime from "reading-time";

type MdxPage = {
    code: string;
    slug: string;
    readTime?: ReturnType<typeof calculateReadingTime>;
    frontmatter: {
        title?: string;
        description?: string;
        meta?: {
            keywords?: Array<string>;
            // @ts-expect-error
            [key as string]: string;
        };

        // Post meta
        categories?: Array<string>;
        date?: string;
        bannerCloudinaryId?: string;
        bannerBlurDataUrl?: string;
        bannerCredit?: string;
        bannerAlt?: string;
        bannerTitle?: string;
    };
};

export { MdxPage };
