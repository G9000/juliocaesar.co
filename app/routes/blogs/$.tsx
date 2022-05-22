import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getBlog } from "~/utils/blogs";

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
        <div>
            <Link to="/">← Back to blog index</Link>
            <h1>{frontmatter.title}</h1>
            <Component />
        </div>
    );
}
