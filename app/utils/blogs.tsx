import parseFrontMatter from "front-matter";
import { readFile, readdir } from "./fs.server";
import { bundleMDX } from "./mdx.server";
import type { MdxPage } from "types";
import { path, blogDirr } from "./dirr.server";
import calculateReadingTime from "reading-time";
import { getBlurDataUrl } from "~/libs/ImageBuilder";

export type Blog = {
    slug: string;
    title: string;
};

export type PostMarkdownAttributes = {
    title: string;
};

export function getBannerTitleProp(frontmatter: MdxPage["frontmatter"]) {
    return (
        frontmatter.bannerCredit ??
        frontmatter.bannerTitle ??
        frontmatter.bannerAlt
    );
}

export function getBannerAltProp(frontmatter: MdxPage["frontmatter"]) {
    return (
        frontmatter.bannerAlt ??
        frontmatter.bannerTitle ??
        frontmatter.bannerCredit ??
        frontmatter.title ??
        "Post banner"
    );
}

let dateConfig = {
    year: "numeric",
    month: "long",
    day: "numeric",
} as const;

export const BLOG_PATH = blogDirr;

// Get the mdx files in the blog directory
export async function getBlog<FrontmatterType extends Record<string, unknown>>(
    slug: string,
) {
    const source = await readFile(path.join(BLOG_PATH, `${slug}.mdx`), "utf-8");

    const rehypeHighlight = await import("rehype-highlight").then(
        (mod) => mod.default,
    );
    const { default: remarkGfm } = await import("remark-gfm");
    const { default: rehypeAutolinkHeadings } = await import(
        "rehype-autolink-headings"
    );
    const { default: rehypeSlug } = await import("rehype-slug");

    try {
        const { frontmatter, code } = await bundleMDX({
            source,
            mdxOptions(options) {
                options.remarkPlugins = [
                    ...(options.remarkPlugins ?? []),
                    remarkGfm,
                ];
                options.rehypePlugins = [
                    ...(options.rehypePlugins ?? []),
                    rehypeAutolinkHeadings,
                    rehypeSlug,
                    rehypeHighlight,
                ];
                return options;
            },
        });
        const readTime = calculateReadingTime(source).text;
        frontmatter.bannerBlurDataUrl = await getBlurDataUrl(
            frontmatter.bannerCloudinaryId ?? "",
        );
        frontmatter.date = new Date(frontmatter.date).toLocaleDateString(
            "en-US",
            dateConfig,
        );

        return {
            code,
            readTime,
            frontmatter: frontmatter as FrontmatterType,
        };
    } catch (error: unknown) {
        console.error("Compilation error for slug: ", slug);
        throw error;
    }
}

// Get all the blogs in the blog directory
export async function getBlogs() {
    const blogsPath = await readdir(BLOG_PATH, {
        withFileTypes: true,
    });

    const blogs = await Promise.all(
        blogsPath.map(async (dirent) => {
            const file = await readFile(path.join(BLOG_PATH, dirent.name));
            const { attributes } = parseFrontMatter(file.toString());
            return {
                slug: dirent.name.replace(/\.mdx/, ""),
                //@ts-ignore
                title: attributes.title,
            };
        }),
    );
    return blogs;
}
