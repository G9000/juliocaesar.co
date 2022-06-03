import * as React from "react";
import formatDate from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { Link } from "@remix-run/react";
import type { MdxListItem } from "types";
import { BlurrableImage } from "~/libs/BlurrableImage";
import { getBannerTitleProp, getBannerAltProp } from "~/utils/posts";
import { getImgProps, getImageBuilder } from "~/libs/ImageBuilder";
import { H3 } from "~/components/typography";

export function PostCard({
    post: {
        slug,
        readTime,
        frontmatter,
        frontmatter: {
            title = "Untitled Post",
            date = formatDate(new Date(), "yyyy-MM-ii"),
            bannerCloudinaryId,
            bannerBlurDataUrl,
            categories,
        },
    },
}: {
    post: MdxListItem;
}) {
    return (
        <Link to={`/blogs/${slug}`}>
            <div className="relative">
                {bannerCloudinaryId && (
                    <BlurrableImage
                        key={bannerCloudinaryId}
                        blurDataUrl={bannerBlurDataUrl}
                        className="aspect-h-4 aspect-w-3 md:aspect-w-3 md:aspect-h-2 h-[320px] lg:h-[420px]"
                        img={
                            <img
                                key={bannerCloudinaryId}
                                title={getBannerTitleProp(frontmatter)}
                                className="rounded-lg object-cover object-center w-full"
                                {...getImgProps(
                                    getImageBuilder(
                                        bannerCloudinaryId,
                                        getBannerAltProp(frontmatter),
                                    ),
                                    {
                                        widths: [
                                            280, 560, 840, 1100, 1650, 2500,
                                            2100, 3100,
                                        ],
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
                        }
                    />
                )}
                <div className="flex flex-wrap gap-x-2 absolute bottom-4 right-4">
                    {categories?.map((cat, idx) => (
                        <span
                            key={categories?.[idx]}
                            className="bg-cyan-900 bg-opacity-80 text-gray-100 rounded-md px-2"
                        >
                            {cat}
                        </span>
                    ))}
                </div>
            </div>

            <div className="inline-flex gap-x-2 flex-wrap items-center text-gray-400 text-xl mt-6 font-semibold">
                {formatDate(parseISO(date), "PPP")} — {readTime}
            </div>

            <H3 as="div" className="mt-2">
                {title}
            </H3>
        </Link>
    );
}
