import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/utils/posts";
import type { MdxPage } from "types";
import { HeroSectionBg, HeroSection } from "~/components/sections/hero-section";
import { PostSection } from "~/components/sections/posts-grid-section";
import { AboutSection } from "~/components/sections/hero-about-section";
// import clsx from "clsx";

export const loader: LoaderFunction = async () => {
    return getPosts();
};

export default function Index() {
    const posts = useLoaderData<MdxPage[]>();

    return (
        <div>
            <section className="relative mx-auto overflow-hidden">
                <HeroSectionBg />
                <HeroSection />
            </section>
            <main>
                <PostSection posts={posts} title="Featured Posts" subTitle="" />
                <AboutSection />
            </main>
        </div>
    );
}
