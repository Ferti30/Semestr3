
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import * as React from "react"
import Navbar from "./Navbar";



export const metadata: Metadata = {
  title: "Pawel Matysiak 113960",
    description: "Strona stworzona przez Pawel Matysiak 113960",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="pl-PL">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar/>
                    <ConvexClientProvider>{children}</ConvexClientProvider>
                </ThemeProvider>
            </body>
        </html>
  );
}
