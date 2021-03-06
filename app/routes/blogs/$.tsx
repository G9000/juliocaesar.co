import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost, getBannerTitleProp, getBannerAltProp } from "~/utils/posts";
import { getImgProps, getImageBuilder } from "~/libs/ImageBuilder";
import { BlurrableImage } from "~/libs/BlurrableImage";
import type { MdxPage } from "types";

export const loader: LoaderFunction = async ({ params, request }) => {
    const slug = params["*"];
    if (!slug) throw new Response("Not found", { status: 404 });

    const blog = await getPost(slug);
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
        <div className="max-w-[1620px] w-full mx-auto">
            <div className="px-[10vw] py-40">
                <div className="w-full grid grid-cols-12 pb-14">
                    <div className="col-span-8 col-start-3 space-y-4">
                        <h1 className="text-4xl text-white font-semibold">
                            {frontmatter.title}
                        </h1>
                        <p className="text-gray-400 font-bold text-xl">
                            {frontmatter.date}
                            {" — "}
                            {readTime}
                        </p>
                    </div>
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
                <div className="mt-20 w-full grid grid-cols-12">
                    <div className="col-span-8 col-start-3 prose prose-invert prose-p:text-gray-500 lg:prose-xl prose-h2:text-white">
                        <Component />
                    </div>
                </div>
            </div>
        </div>
    );
}
