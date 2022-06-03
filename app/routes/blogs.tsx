import { Link, useLoaderData, Outlet } from "@remix-run/react";
import type { LoaderFunction, LinksFunction } from "@remix-run/node";
import { getPosts } from "~/utils/posts";
import type { Blog } from "~/utils/posts";
import styles from "highlight.js/styles/github-dark-dimmed.css";

export const loader: LoaderFunction = async () => {
    return getPosts();
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
