import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Providers from "./providers";
import { Input } from "@nextui-org/react";

export const metadata = {
    title: "Tienda de computadoras",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="flex flex-col h-screen">
            <body className={"flex flex-col"}>
                <Providers>
                    <div className="min-h-screen w-full flex flex-col">
                        <Navbar />
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
