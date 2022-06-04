import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/utils/posts";
import type { MdxPage } from "types";
import { HeroSectionBg, HeroSection } from "~/components/sections/hero-section";
import { PostSection } from "~/components/sections/posts-grid-section";
import { AboutSection } from "~/components/sections/hero-about-section";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const loader: LoaderFunction = async () => {
    return getPosts();
};

export default function Index() {
    const posts = useLoaderData<MdxPage[]>();
    const { publicKey } = useWallet();

    return (
        <div>
            <section className="relative mx-auto overflow-hidden">
                <HeroSectionBg />
                <HeroSection />
            </section>
            <main>
                {publicKey
                    ? renderItemBuyContainer()
                    : renderNotConnectedContainer()}
                <PostSection posts={posts} title="Featured Posts" subTitle="" />
                <AboutSection />
            </main>
        </div>
    );
}

const renderNotConnectedContainer = () => (
    <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
    </div>
);

const renderItemBuyContainer = () => (
    <div className="products-container">asdadasd</div>
);
