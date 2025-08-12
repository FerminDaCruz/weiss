import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-center w-full bg-black h-[100px] fixed top-0 z-10 py-15">
            <div className="flex flex-col md:flex-row justify-between items-center container p-5 gap-5  ">
                <Image
                    src="/logos/weiss-logo-cropped.png"
                    width={100}
                    height={100}
                    alt="weiss-logo"
                />
                <nav className="flex items-center justify-center gap-3">
                    <Link href="#">Inicio</Link>
                    <Link href="#">Menú</Link>
                    <Link href="#">Nosotros</Link>
                </nav>
            </div>
        </header>
    );
}
