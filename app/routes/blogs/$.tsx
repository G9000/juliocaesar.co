import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlog, getBannerTitleProp, getBannerAltProp } from "~/utils/blogs";
import { getImgProps, getImageBuilder } from "~/libs/ImageBuilder";

type LoaderData = {
    frontmatter: any;
    code: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
    const slug = params["*"];
    if (!slug) throw new Response("Not found", { status: 404 });

    const blog = await getBlog(slug);
    if (blog) {
        const { frontmatter, code } = blog;
        return json({ frontmatter, code });
    } else {
        throw new Response("Not found", { status: 404 });
    }
};

export default function Blog() {
    const { code, frontmatter } = useLoaderData<LoaderData>();
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <div className="max-w-[1440px] w-full mx-auto">
            <div className="px-[10vw]">
                <Link to="/">← Back to blog index</Link>
                <h1>{frontmatter.title}</h1>
                {frontmatter.bannerCloudinaryId ? (
                    <div className="w-full ">
                        <img
                            className="rounded-lg object-cover object-center w-full"
                            title={getBannerTitleProp(frontmatter)}
                            {...getImgProps(
                                getImageBuilder(
                                    frontmatter.bannerCloudinaryId,
                                    getBannerAltProp(frontmatter),
                                ),
                                {
                                    widths: [
                                        280, 560, 840, 1100, 1650, 2500, 2100,
                                        3100,
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
                    </div>
                ) : null}
                <div className="prose lg:prose-xl prose-h2:text-white">
                    <Component />
                </div>
            </div>
        </div>
    );
}
