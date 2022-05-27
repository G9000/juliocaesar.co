import React from "react";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import { useMedia } from "react-use";
import { toast } from "react-hot-toast";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const isMobile = useMedia("(max-width: 848px)", false);
    let [isOpen, setIsOpen] = useState<boolean>(false);

    const NavLinkStyle = "cursor-pointer hover:text-cyan-200";

    function blockUrl() {
        toast.error("🚧 Halt! Still under construction. 🚧");
        console.log("Not ready");
    }

    // clear toast
    useEffect(() => {
        toast.dismiss();
    }, []);

    return (
        <body className="flex w-full bg-neutral-900 relative">
            <div className="w-full min-h-screen h-full flex flex-col">
                <div className="hidden md:block bg-cyan-200 bg-opacity-5 border-b border-cyan-500 sticky top-0 z-50" />
                <nav className="flex justify-between items-center max-w-[1640px] w-full mx-auto h-[90px] my-6 z-50 px-[5vw]">
                    {!isMobile ? (
                        <>
                            <ul className="text-white flex gap-x-8 text-xl font-semibold">
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
                            <div className="flex gap-x-4 items-center">
                                <a
                                    href="mailto:leo.caesar@live.com"
                                    className="py-4 px-6 bg-black hover:bg-cyan-900 hover:bg-opacity-10 text-white rounded-lg shadow-lg font-bold hover:shadow-xl hover:shadow-cyan-400/20 hover:ring-2 hover:ring-cyan-200 hover:text-cyan-200"
                                >
                                    Let's have a chat
                                </a>
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

                            <Dialog
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
                            </Dialog>
                        </div>
                    )}
                </nav>
                <div className="grow"> {children}</div>
                <div className="hidden md:block bg-cyan-200 bg-opacity-5 border-t border-cyan-900 sticky bottom-0 z-50" />
            </div>
        </body>
    );
};
