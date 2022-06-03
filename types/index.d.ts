/* eslint-disable no-undef */
import type calculateReadingTime from "reading-time";

export type MdxPage = {
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

/**
 * This is a separate type from MdxPage because the code string is often
 * pretty big and the pages that simply list the pages shouldn't include the code.
 */
export type MdxListItem = Omit<MdxPage, "code">;
