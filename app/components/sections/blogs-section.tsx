import {
    getBannerTitleProp,
    getBannerAltProp,
    dateConverter,
} from "~/utils/blogs";
import { BlurrableImage } from "~/libs/BlurrableImage";
import { getImgProps, getImageBuilder } from "~/libs/ImageBuilder";
import { Link } from "@remix-run/react";
import type { MdxPage } from "types";

function BlogSection({ blogs }: { blogs: MdxPage[] }) {
    function UrlResolver(slug: string) {
        return `/blogs/${slug}`;
    }

    return (
        <>
            {blogs.length > 0 && (
                <section className="max-w-[1620px] w-full mx-auto px-[5vw] md:px-20 mt-40 md:mt-60">
                    <h2 className="text-5xl text-white font-semibold">
                        Featured post
                    </h2>

                    <div className="mt-10 grid grid-cols-3 gap-x-10">
                        {blogs.map((blog, idx) => (
                            <Link to={UrlResolver(blog.slug)} key={idx}>
                                <div>
                                    <div className="relative">
                                        {blog.frontmatter
                                            .bannerCloudinaryId && (
                                            <BlurrableImage
                                                key={
                                                    blog.frontmatter
                                                        .bannerCloudinaryId
                                                }
                                                blurDataUrl={
                                                    blog.frontmatter
                                                        .bannerBlurDataUrl
                                                }
                                                className="aspect-h-4 aspect-w-3 md:aspect-w-3 md:aspect-h-2"
                                                img={
                                                    <img
                                                        key={
                                                            blog.frontmatter
                                                                .bannerCloudinaryId
                                                        }
                                                        title={getBannerTitleProp(
                                                            blog.frontmatter,
                                                        )}
                                                        className="rounded-lg object-cover object-center w-full"
                                                        {...getImgProps(
                                                            getImageBuilder(
                                                                blog.frontmatter
                                                                    .bannerCloudinaryId,
                                                                getBannerAltProp(
                                                                    blog.frontmatter,
                                                                ),
                                                            ),
                                                            {
                                                                widths: [
                                                                    280, 560,
                                                                    840, 1100,
                                                                    1650, 2500,
                                                                    2100, 3100,
                                                                ],
                                                                sizes: [
                                                                    "(max-width:1023px) 80vw",
                                                                    "(min-width:1024px) and (max-width:1620px) 67vw",
                                                                    "1100px",
                                                                ],
                                                                transformations:
                                                                    {
                                                                        background:
                                                                            "rgb:e6e9ee",
                                                                    },
                                                            },
                                                        )}
                                                    />
                                                }
                                            />
                                        )}
                                        <div className="flex flex-wrap gap-x-2 absolute bottom-4 right-4">
                                            {blog.frontmatter.categories?.map(
                                                (cat, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-cyan-900 bg-opacity-80 text-gray-100 rounded-md px-2"
                                                    >
                                                        {cat}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-gray-400 font-bold text-xl mt-6">
                                        {dateConverter(blog.frontmatter.date)}
                                        {" — "}
                                        {blog.readTime}
                                    </p>
                                    <h4 className="text-3xl font-bold text-white text-opacity-80 mt-4">
                                        {blog.frontmatter.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}

export { BlogSection };
