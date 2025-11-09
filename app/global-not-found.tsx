// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <div className="mx-auto container text-center py-44 ">
          <h1 className="font-bold text-xl">404 | Page Not Found</h1>
          <p className="mt-2 mb-6">This page does not exist.</p>
          <Button
            type="button"
            className="bg-accent hover:bg-accent/80 text-white  rounded-full py-6"
          >
            <Link href="/">Go back to Home</Link>
          </Button>
        </div>
        <Footer />
      </body>
    </html>
  );
}
