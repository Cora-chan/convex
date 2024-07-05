import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scribble it",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
      <link rel="icon" type="image/svg+xml" href="../../src/favicon copy.ico"/>
      </head>
      <body className="inter.className">

        <ConvexClientProvider>
          <Navbar />
          {children}
          <Footer />
          </ConvexClientProvider>
      </body>
    </html>
  );
}