import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "~/utils/blogs";
import type { MdxPage } from "types";
import { HeroSectionBg, HeroSection } from "~/components/sections/hero-section";
import { BlogSection } from "~/components/sections/blogs-section";
import { AboutSection } from "~/components/sections/hero-about-section";
// import clsx from "clsx";

export const loader: LoaderFunction = async () => {
    return getBlogs();
};

export default function Index() {
    const blogs = useLoaderData<MdxPage[]>();

    return (
        <div>
            <section className="relative mx-auto overflow-hidden">
                <HeroSectionBg />
                <HeroSection />
            </section>
            <BlogSection blogs={blogs} />
            <AboutSection />
        </div>
    );
}
