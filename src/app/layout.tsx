import type {Metadata} from "next";
import {Inter, Manrope} from "next/font/google";
import "./globals.css";
import {Header} from "@/src/components/Header";
import {cx} from "@/src/utils";

const inter = Inter({subsets: ["latin"], display: "swap", variable: "--font-in"});
const manrope = Manrope({subsets: ["latin"], display: "swap", variable: "--font-mr"})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={cx(inter.variable, manrope.variable, "font-mr bg-light ")}>{children}
        <Header/>
        </body>
        </html>
    );
}
