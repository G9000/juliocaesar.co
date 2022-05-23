// import { useLoaderData } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { FaGithub, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export default function Index() {
    function blockUrl() {
        toast.error(
            "🚧 👷🏽 Halt! Still under construction. Last update May 19 2022 👷🏼‍♀️ 🚧",
        );
        console.log("Not ready");
    }

    // clear toast
    useEffect(() => {
        toast.dismiss();
    }, []);

    return (
        <div>
            <section className="relative mx-auto overflow-hidden">
                <HeroSectionBg />
                <div className="flex py-[10vh] md:py-[15vh] max-w-[1440px] items-center w-full mx-auto relative">
                    <div className="w-full xl:w-2/3 px-[5vw] md:px-20">
                        <h1 className="leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-semibold text-white mt-4">
                            Helping clients to build delightful digital
                            landmarks on the net.
                        </h1>
                        <div className="mt-10 flex flex-col md:flex-row lg:items-center gap-x-4 md:gap-x-10">
                            <div className="relative group w-[200px]">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-teal-500 rounded-lg blur transition duration-1000 opacity-75 group-hover:opacity-100" />
                                <button
                                    onClick={() => blockUrl()}
                                    className="h-[70px] inline-flex items-center justify-center rounded-lg text-xl w-full bg-cyan-200 text-sky-900 font-black relative tracking-tight"
                                >
                                    Read the blog
                                </button>
                            </div>

                            <div className="inline-flex items-center mt-10 md:mt-0 px-6 rounded-lg h-[70px] gap-x-6  border-opacity-20 bg-black bg-opacity-40 w-fit shadow-lg">
                                <span className="text-cyan-200 text-opacity-60">
                                    Find me here:
                                </span>
                                <a
                                    href="https://github.com/G9000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="text-2xl text-cyan-200 text-opacity-60 hover:text-opacity-100" />
                                </a>
                                <a
                                    href="https://www.behance.net/juliocaesar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaBehance className="text-2xl text-cyan-200 text-opacity-60 hover:text-opacity-100" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/juliocaesar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="text-2xl text-cyan-200 text-opacity-60 hover:text-opacity-100" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-[260px] max-w-[1180px] w-full mx-auto relative">
        <h2 className="text-5xl text-white font-semibold">Featured post</h2>
        <div className="mt-10 grid grid-cols-3 gap-x-10">
          {blogs.map((blog, idx) => (
            <Link to={RouteResolver(blog.slug.current)} key={idx} className="">
              <img src={urlFor(blog.thumbnail).width(375).url()} alt="asda" />
              <div className="mt-6">
                <span className="text-xl text-white text-opacity-40">
                  {blog.createdAt}
                </span>
                <h4 className="text-4xl font-bold mt-4 text-white text-opacity-80">
                  {blog.title}
                </h4>
                <p className="text-lg text-white text-opacity-60">
                  {blog.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
            <AboutSection />
        </div>
    );
}

const HeroSectionBg = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-spectrum" />
            <div className="absolute inset-0 grid-tile top -1px center flex items-center justify-center overflow-hidden">
                <div className="absolute left-[1/2] top-0 h-full">
                    <svg
                        width="2591"
                        height="767"
                        viewBox="0 0 2591 767"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.path
                            d="M767 672H672V767H767V672Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M863 192H768V287H863V192Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M863 384H768V479H863V384Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M863 672H768V767H863V672Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M1919 96H1824V191H1919V96Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2303 96H2208V191H2303V96Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M1919 288H1824V383H1919V288Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M1919 576H1824V671H1919V576Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2303 672H2208V767H2303V672Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M1823 0H1728V95H1823V0Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2495 192H2400V287H2495V192Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2207 192H2112V287H2207V192Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2015 384H1920V479H2015V384Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2399 384H2304V479H2399V384Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M1823 480H1728V575H1823V480Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2207 480H2112V575H2207V480Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                        <motion.path
                            d="M2399 576H2304V671H2399V576Z"
                            fill="#ffffffa7"
                            animate={{
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: Math.floor(Math.random() * 10),
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: Math.floor(Math.random() * 10),
                            }}
                        />
                    </svg>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-[#18181800] to-neutral-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-[#18181800] to-neutral-900" />
        </>
    );
};

const AboutSection = () => {
    return (
        <section className="flex py-[10vh] md:py-[15vh] max-w-[1440px] items-center w-full mx-auto relative mt-40">
            <div className="w-full px-[5vw] md:px-20 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-20">
                <div className="col-span-full lg:col-span-4">
                    <img
                        src="./about.jpg"
                        alt="Julio with Tiger graffiti"
                        className="rounded-lg w-full lg:w-[300px] h-full max-h-[370px] object-cover"
                    />
                </div>
                <div className="col-span-full lg:col-span-6 lg:col-start-6 mt-16 lg:mt-0">
                    <h2 className="text-3xl text-gray-100 font-semibold">
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
                        className="inline-flex mt-16 text-gray-100 gap-x-6 items-center text-2xl group"
                    >
                        Know more about me
                        <div className="border rounded-full p-2 border-gray-100 border-opacity-20 group-hover:text-cyan-200 group-hover:border-cyan-200 ease-in-out duration-300">
                            <HiArrowSmRight />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
