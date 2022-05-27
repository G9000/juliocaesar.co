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
    // const blogs = useLoaderData<Blog[]>();
    return (
        <div>
            <Outlet />
        </div>
    );
}
