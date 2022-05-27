import parseFrontMatter from "front-matter";
import { readFile, readdir } from "./fs.server";
import { bundleMDX } from "./mdx.server";
import type { MdxPage } from "types";
import { path, blogDirr } from "./dirr.server";

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

export const BLOG_PATH = blogDirr;

// Get the mdx files in the blog directory
export async function getBlog(slug: string) {
    const source = await readFile(path.join(BLOG_PATH, `${slug}.mdx`), "utf-8");

    const rehypeHighlight = await import("rehype-highlight").then(
        (mod) => mod.default,
    );
    const { default: remarkGfm } = await import("remark-gfm");
    const { default: rehypeAutolinkHeadings } = await import(
        "rehype-autolink-headings"
    );
    const { default: rehypeToc } = await import("rehype-toc");
    const { default: rehypeSlug } = await import("rehype-slug");

    try {
        const blogs = await bundleMDX({
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
                    rehypeToc,
                    rehypeHighlight,
                ];

                return options;
            },
        });
        return blogs;
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
