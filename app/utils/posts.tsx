import parseFrontMatter from "front-matter";
import { readFile, readdir } from "./fs.server";
import { bundleMDX } from "./mdx.server";
import type { MdxPage } from "types";
import { path, postDirr } from "./dirr.server";
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

// export let dateConfig = {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// } as const;

// export function dateConverter(date?: string) {
//     if (!date) {
//         throw new Error("You forgot to pass the date");
//     }

//     return new Date(date).toLocaleDateString("en-US", dateConfig);
// }

export const POST_PATH = postDirr;

// Get the mdx files in the post directory
export async function getPost<FrontmatterType extends Record<string, unknown>>(
    slug: string,
) {
    const source = await readFile(path.join(POST_PATH, `${slug}.mdx`), "utf-8");

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

// Get all the posts in the post directory
export async function getPosts() {
    const postsPath = await readdir(POST_PATH, {
        withFileTypes: true,
    });

    const posts = await Promise.all(
        postsPath.map(async (dirent) => {
            const file = await readFile(path.join(POST_PATH, dirent.name));
            const source = file.toString();
            const { attributes }: { attributes: MdxPage["frontmatter"] } =
                parseFrontMatter(source.toString());
            attributes.bannerBlurDataUrl = await getBlurDataUrl(
                attributes.bannerCloudinaryId ?? "",
            );
            return {
                slug: dirent.name.replace(/\.mdx/, ""),
                readTime: calculateReadingTime(source).text,
                frontmatter: { ...attributes },
            };
        }),
    );
    return posts;
}
