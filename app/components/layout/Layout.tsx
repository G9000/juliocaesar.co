import * as React from "react";
import { Theme, useTheme } from "~/providers/theme-provider";
import { Link } from "@remix-run/react";
import { Dialog } from "@headlessui/react";
import { HiMenu, HiX, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useMedia } from "react-use";
import { toast } from "react-hot-toast";
import { Button, IconButton } from "~/components/button";
import clsx from "clsx";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useMedia("(max-width: 848px)", false);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [theme, setTheme] = useTheme();

    const NavLinkStyle =
        "cursor-pointer hover:text-cyan-800 dark:hover:text-cyan-200 transition ease-in-out delay-150 duration-300";

    function blockUrl() {
        toast.error("🚧 Halt! Still under construction. 🚧");
        console.log("Not ready");
    }

    function toggleTheme() {
        setTheme((prevTheme) =>
            prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
        );
    }

    // clear toast
    React.useEffect(() => {
        toast.dismiss();
    }, []);

    return (
        <body className="flex w-full bg-neutral-100 dark:bg-neutral-900 transition ease-in-out delay-150 duration-300 relative font-basicSans">
            <div className="w-full min-h-screen h-full flex flex-col">
                <div className="hidden md:block bg-cyan-200 bg-opacity-5 border-b border-cyan-500 sticky top-0 z-50" />
                <nav className="flex justify-between items-center max-w-[1840px] w-full mx-auto my-6 z-50 px-[5vw]">
                    {!isMobile ? (
                        <>
                            <ul className="text-gray-900 dark:text-gray-100 flex gap-x-8 text-xl font-semibold">
                                <Link to="/" className={NavLinkStyle}>
                                    Home
                                </Link>
                                <button
                                    onClick={() => blockUrl()}
                                    className={NavLinkStyle}
                                >
                                    Blogs
                                </button>
                                <button
                                    onClick={() => blockUrl()}
                                    className={NavLinkStyle}
                                >
                                    Stuff
                                </button>
                                <Link to="/about" className={NavLinkStyle}>
                                    About
                                </Link>
                            </ul>
                            <div className="inline-flex gap-x-4">
                                {/* <button
                                    onClick={toggleTheme}
                                    className={clsx(
                                        "flex items-center gap-x-4 text-xl p-4 rounded-lg shadow-lg font-bold",
                                        "border border-black dark:border-transparent dark:bg-black text-gray-900 dark:text-gray-100 hover:bg-black hover:text-gray-100 dark:hover:bg-cyan-800",
                                        "transition ease-in-out duration-300",
                                    )}
                                >
                                    {theme === "light" ? (
                                        <HiOutlineSun />
                                    ) : (
                                        <HiOutlineMoon />
                                    )}
                                </button> */}
                                <IconButton size="medium" onClick={toggleTheme}>
                                    {theme === "light" ? (
                                        <HiOutlineSun />
                                    ) : (
                                        <HiOutlineMoon />
                                    )}
                                </IconButton>
                                <Button size="medium">Let's have a chat</Button>
                            </div>
                        </>
                    ) : (
                        <div>
                            {!isOpen ? (
                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="p-2 border border-gray-200 border-opacity-20 rounded-full text-white group hover:bg-cyan-200 hover:ring-4 hover:ring-cyan-200 hover:ring-opacity-20"
                                >
                                    <HiMenu className="text-3xl" />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 border border-gray-200 border-opacity-20 rounded-full text-white group hover:bg-cyan-200 hover:ring-4 hover:ring-cyan-200 hover:ring-opacity-20"
                                >
                                    <HiX className="text-3xl" />
                                </button>
                            )}

                            {/* <Dialog
                                open={isOpen}
                                onClose={() => setIsOpen(false)}
                                className="bg-neutral-900 fixed top-[90px] w-full px-4 h-screen"
                            >
                                <Dialog.Panel>
                                    <ul className="text-white flex flex-col gap-y-4 text-xl mt-20">
                                        <button
                                            onClick={() => blockUrl()}
                                            className={NavLinkStyle}
                                        >
                                            Blogs
                                        </button>
                                        <button
                                            onClick={() => blockUrl()}
                                            className={NavLinkStyle}
                                        >
                                            Library
                                        </button>
                                        <button
                                            onClick={() => blockUrl()}
                                            className={NavLinkStyle}
                                        >
                                            Weekend Project
                                        </button>
                                        <button
                                            onClick={() => blockUrl()}
                                            className={NavLinkStyle}
                                        >
                                            About
                                        </button>
                                    </ul>
                                </Dialog.Panel>
                            </Dialog> */}
                        </div>
                    )}
                </nav>
                <div className="grow"> {children}</div>
                <div className="hidden md:block bg-cyan-200 bg-opacity-5 border-t border-cyan-900 sticky bottom-0 z-50" />
            </div>
        </body>
    );
};
