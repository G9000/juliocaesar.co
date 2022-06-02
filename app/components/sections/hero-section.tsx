import * as React from "react";
import { toast } from "react-hot-toast";
import { FaGithub, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function HeroSection() {
    function blockUrl() {
        toast.error("🚧 Halt! Still under construction. 🚧");
        console.log("Not ready");
    }

    // clear toast
    React.useEffect(() => {
        toast.dismiss();
    }, []);
    return (
        <div className="flex py-[10vh] md:py-[15vh] max-w-[1620px] items-center w-full mx-auto relative">
            <div className="w-full xl:w-2/3 px-[5vw] md:px-20">
                <h1 className="leading-relaxed text-3xl md:text-4xl md:leading-relaxed font-semibold text-white mt-4">
                    Helping clients to build delightful digital landmarks on the
                    net.
                </h1>
                <div className="mt-10 flex flex-col md:flex-row lg:items-center gap-x-4 md:gap-x-10">
                    <div className="relative group w-[200px]">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-teal-500 rounded-lg blur transition duration-1000 opacity-75 group-hover:opacity-100" />
                        <button
                            onClick={() => blockUrl()}
                            className="h-[70px] inline-flex items-center justify-center rounded-lg text-xl w-full bg-cyan-200 text-cyan-900 font-black relative tracking-tight"
                        >
                            Read the blog
                        </button>
                    </div>

                    <div className="inline-flex items-center mt-6 md:mt-0 px-6 rounded-lg h-[70px] gap-x-6  border-opacity-20 bg-black bg-opacity-40 w-fit shadow-lg">
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
    );
}

function HeroSectionBg() {
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
}

export { HeroSection, HeroSectionBg };
