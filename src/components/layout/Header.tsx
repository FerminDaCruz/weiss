"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`flex items-center justify-center w-full h-[100px] fixed top-0 z-40 py-15 transition-colors duration-300 ${
                isTop ? "bg-black" : "bg-black/30 backdrop-blur-md"
            }`}
        >
            <div className="flex flex-col md:flex-row justify-between items-center container p-5 gap-5  ">
                <Image
                    src="/logos/weiss-logo-cropped.png"
                    width={100}
                    height={100}
                    alt="weiss-logo"
                />
                <nav className="flex items-center justify-center gap-3 lg:gap-0">
                    <Link
                        href="#"
                        className="lg:w-40 hover:border-t-4 border-white text-center p-3 transition-all duration-100"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="#"
                        className="lg:w-40 hover:border-t-4 border-white text-center p-3 transition-all duration-100"
                    >
                        Menú
                    </Link>
                    <Link
                        href="#"
                        className="lg:w-40 hover:border-t-4 border-white text-center p-3 transition-all duration-100"
                    >
                        Nosotros
                    </Link>
                </nav>
            </div>
        </header>
    );
}
