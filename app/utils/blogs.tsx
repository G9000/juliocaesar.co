import parseFrontMatter from "front-matter";
import path from "path";
import fs from "fs/promises";
import { bundleMDX } from "./mdx.server";

export type Blog = {
    slug: string;
    title: string;
};

export type PostMarkdownAttributes = {
    title: string;
};

export const BLOG_PATH = path.join(process.cwd(), "/contents/blogs");

// Get the mdx files in the blog directory
export async function getBlog(slug: string) {
    const source = await fs.readFile(
        path.join(BLOG_PATH, `${slug}.mdx`),
        "utf-8",
    );

    const rehypeHighlight = await import("rehype-highlight").then(
        (mod) => mod.default,
    );
    const { default: remarkGfm } = await import("remark-gfm");
    const { default: rehypeAutolinkHeadings } = await import(
        "rehype-autolink-headings"
    );
    const { default: rehypeToc } = await import("rehype-toc");
    const { default: rehypeSlug } = await import("rehype-slug");

    const blog = await bundleMDX({
        source,
        mdxOptions(options, frontmatter) {
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
    }).catch((e) => {
        throw e;
    });

    return blog;
}

// Get all the blogs in the blog directory
export async function getBlogs() {
    const blogsPath = await fs.readdir(BLOG_PATH, {
        withFileTypes: true,
    });

    const blogs = await Promise.all(
        blogsPath.map(async (dirent) => {
            const file = await fs.readFile(path.join(BLOG_PATH, dirent.name));
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
