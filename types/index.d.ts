/* eslint-disable no-undef */

type MdxPage = {
    code: string;
    slug: string;
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
        bannerCredit?: string;
        bannerAlt?: string;
        bannerTitle?: string;
    };
};

export { MdxPage };
