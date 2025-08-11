import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center p-5 gap-5">
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
                <Link href="#">Franquicias</Link>
                <Link href="#">Club Weiss</Link>
                <Link href="#">Delivery</Link>
            </nav>
        </header>
    );
}
