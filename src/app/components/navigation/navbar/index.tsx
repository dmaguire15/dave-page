import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

const Navbar = () => {
    return (
        <>
            <div className="w-full h-20 bg-gray-600 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Logo />
                        <ul className="hidden md:flex gap-x-6 text-black font-mono ">
                            <li>
                                <Link href="/home">
                                <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                <p>About</p>
                                </Link>
                            </li>
                        </ul>
                        <Button />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;