import type { TransformerOption } from "@cld-apis/types";
import type { ImageBuilder } from "~/libs/ImageBuilder";
import { getImgProps, imageLists } from "~/libs/ImageBuilder";

const About = () => {
    const aboutMe = imageLists.IndexjulioCaesarAbout;
    const mySetup = imageLists.IndexMySetup;
    return (
        <div className="max-w-[1840px] w-full mx-auto px-[11vw] py-[10vh]">
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
                <div className="space-y-4 col-span-full md:col-span-4 lg:col-span-5 md:row-start-1">
                    <h2 className="text-3xl lg:text-4xl text-black dark:text-gray-100 transition ease-in-out delay-150 duration-300">
                        Hi, I'm Julio Caesar, I work as a full time web
                        tinkerer.
                    </h2>
                    <p className="text-3xl lg:text-4xl text-gray-400">
                        I help build a delightful quality software through
                        design and development with aesthetics and usability in
                        mind.
                    </p>
                </div>

                <div className="col-span-full md:col-start-6 lg:col-start-8 md:col-span-4 row-start-1 mb-20 md:mb-0 md:row-start-1">
                    <img
                        className="h-auto w-full object-contain rounded-lg"
                        {...getIndexAboutImg(aboutMe)}
                    />
                </div>
            </div>
            <div className="mt-[16vh] prose prose-lg prose-h3:text-black dark:prose-h3:text-gray-100 prose-p:text-gray-400 mx-auto">
                <div className="my-60">
                    <img
                        className="h-auto w-full object-contain rounded-lg"
                        {...getIndexAboutGif(mySetup)}
                    />
                    <p className="text-center">
                        My current setup. No I'm not a weeb. It just aesthetics.
                    </p>
                </div>

                <h2 className="gradient-text">
                    A little bit about myself . . .
                </h2>
                <p>
                    I started designing and developing my own website way back
                    in 2016 with no code solution like Webflow. I was very
                    excited about the endless possibilities of what I can
                    achieve with the solution but as time goes by, I started to
                    stumble into multiple issues/roadblocks etc and it was quite
                    expensive to integrate with third-party APIs and even
                    connecting a domain name that I purchased somewhere else for
                    a much cheaper price to Webflow back in the days were quite
                    expensive given I'm still a student living with my mum's
                    money.
                </p>
                <p>
                    Eventho Webflow and similar no-code solution has come a long
                    way, I still wanted to experience that good feeling when you
                    build something on your own.
                </p>
                <p>
                    My journey in programming is kind of on and off prior to
                    2019. My first ever recorded programming journey started way
                    back in 2012 by watching a Python programming tutorial on
                    thenewboston channel. Learning javascript, HTML, and CSS in
                    2016 and for some reason, I stopped probably because of my
                    degree choice in Advertising Design. It was tiring and most
                    dreadful years of my life. I took this degree because it a
                    cheaper than a computer science degree which I could not
                    afford. At the end of my final uni year, I realize that I
                    only love high-level design thinking and research in
                    creating pretty and functional designs but not designing
                    some posters which is the expected career path for someone
                    with my degree and the pay was abysmal at best especially in
                    the South East Asia region.
                </p>
                <p>
                    Troubled over my own uncertain future, I restarted my
                    programming journey in 2019 with a new passion for learning
                    and building things hoping to redirect my future to
                    something, I might enjoy and have a livable income.
                </p>
                <h3>CS50 by David J. Malan from Harvard is a game-changer</h3>
                <p>
                    Finding well-structured courses that teach you strong
                    fundamentals is tough. It's like searching for a needle in a
                    hack stack. Yes, there are plenty of tutorials, and courses
                    out there, but not everyone can teach. CS50 is phenomenal
                    and it was one of the best courses I've ever taken. If
                    anyone asks me where to start and learn to program, I would
                    definitely recommend CS50. It teaches you the fundamentals
                    of programming and a Lil bit of C, Python, and Javascript.
                    This is also where I first started learning my first web
                    framework called Django.
                </p>
                <h3>
                    Now I'm working as full-time{" "}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#61dafb] no-underline"
                    >
                        React{" "}
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://vuejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#42b883] no-underline"
                    >
                        Vue
                    </a>{" "}
                    developer.
                </h3>
            </div>
        </div>
    );
};

export default About;

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

function getIndexAboutGif(
    imageBuilder: ImageBuilder,
    transformations?: TransformerOption,
) {
    return getImgProps(imageBuilder, {
        widths: [600],
        sizes: [],
        transformations,
    });
}
