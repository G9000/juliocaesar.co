import { Link, useLoaderData, Outlet } from "@remix-run/react";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { getBlogs } from "~/utils/blogs";
import type { Blog } from "~/utils/blogs";
import styles from "highlight.js/styles/github-dark-dimmed.css";

export const loader: LoaderFunction = async () => {
    return getBlogs();
};

export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
    ];
};

export default function Blogs() {
    const blogs = useLoaderData<Blog[]>();
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.slug}>
                        <Link to={blog.slug}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
}
