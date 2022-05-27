import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlog, getBannerTitleProp, getBannerAltProp } from "~/utils/blogs";
import { getImgProps, getImageBuilder } from "~/libs/ImageBuilder";
import { BlurrableImage } from "~/libs/BlurrableImage";
import type { MdxPage } from "types";

export const loader: LoaderFunction = async ({ params, request }) => {
    const slug = params["*"];
    if (!slug) throw new Response("Not found", { status: 404 });

    const blog = await getBlog(slug);
    if (blog) {
        return json(blog);
    } else {
        throw new Response("Not found", { status: 404 });
    }
};

export default function Blog() {
    const { code, frontmatter, readTime } = useLoaderData<MdxPage>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <div className="max-w-[1440px] w-full mx-auto">
            <div className="px-[10vw] py-40">
                <div className="px-40 pb-20 space-y-6">
                    <h1 className="text-4xl text-white font-semibold">
                        {frontmatter.title}
                    </h1>
                    <p className="text-gray-400 font-bold text-xl">
                        {frontmatter.date}
                        {" — "}
                        {readTime}
                    </p>
                </div>

                {frontmatter.bannerCloudinaryId && (
                    <BlurrableImage
                        key={frontmatter.bannerCloudinaryId}
                        blurDataUrl={frontmatter.bannerBlurDataUrl}
                        className="aspect-h-4 aspect-w-3 md:aspect-w-3 md:aspect-h-2"
                        img={
                            <img
                                key={frontmatter.bannerCloudinaryId}
                                title={getBannerTitleProp(frontmatter)}
                                className="rounded-lg object-cover object-center w-full"
                                {...getImgProps(
                                    getImageBuilder(
                                        frontmatter.bannerCloudinaryId,
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
                <div className="prose lg:prose-xl prose-h2:text-white">
                    <Component />
                </div>
            </div>
        </div>
    );
}
