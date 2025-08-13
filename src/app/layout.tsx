import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Passion_One, Roboto } from "next/font/google";

const passionOne = Passion_One({
    weight: ["400", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

const roboto = Roboto({
    weight: ["100", "200", "400", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Maqueta Weiss",
    description: "Maqueta con modelado 3D de ejemplo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
