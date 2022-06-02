import type { TransformerOption } from "@cld-apis/types";
import type { ImageBuilder } from "~/libs/ImageBuilder";
import { getImgProps, imageLists } from "~/libs/ImageBuilder";
import { Link } from "@remix-run/react";
import { HiArrowSmRight } from "react-icons/hi";

const AboutSection = () => {
    const imageBuilder = imageLists.IndexjulioCaesarAbout;
    return (
        <section className="flex py-[10vh] md:py-[15vh] max-w-[1440px] items-center w-full mx-auto relative mt-40">
            <div className="w-full px-[6.5vw] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-20">
                <div className="col-span-full lg:col-span-4">
                    <img
                        className="h-auto w-full object-contain rounded-lg"
                        {...getIndexAboutImg(imageBuilder)}
                    />
                </div>
                <div className="lg:col-start-6 col-span-full lg:col-span-6 mt-16 lg:mt-0">
                    <h2 className="text-3xl text-black dark:text-gray-100 font-semibold transition ease-in-out delay-150 duration-300">
                        Hi, I'm Julio Caesar. I help clients build delightful
                        quality software through design and development.
                    </h2>
                    <p className="text-2xl text-gray-400 mt-10">
                        After hours, I enjoy learning new stuff and early this
                        year I embarked on a journey to master 日本語 / Japanese
                        language. Else I enjoy ARPG like Path of Exile or FPS
                        like Apex Legend and go by the name Reaper_9000.
                    </p>

                    <Link
                        to="/about"
                        className="inline-flex mt-16 text-gray-600 dark:text-gray-100 gap-x-6 items-center text-2xl group"
                    >
                        Know more about me
                        <div className="border rounded-full p-2 border-gray-600 dark:border-gray-100 border-opacity-20 group-hover:text-cyan-200 group-hover:border-cyan-200 ease-in-out duration-300">
                            <HiArrowSmRight />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

function getIndexAboutImg(
    imageBuilder: ImageBuilder,
    transformations?: TransformerOption,
) {
    return getImgProps(imageBuilder, {
        widths: [256, 550, 700, 900, 1300, 1800],
        sizes: [
            "(max-width: 1023px) 80vw",
            "(min-width: 1024px) and (max-width: 1279px) 50vw",
            "(min-width: 1280px) 900px",
        ],
        transformations,
    });
}

export { AboutSection };
