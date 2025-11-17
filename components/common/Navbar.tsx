"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import hamburgerIcon from "@/app/assets/hamburger.svg";
import { useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "About us", href: "/about" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <nav className="w-full flex justify-between items-center container mx-auto my-2 px-6">
        <Link href="/" className="p-2 flex justify-between items-center">
          <Image
            src="/Logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-38 h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center justify-center gap-8 py-4 ">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="relative cursor-pointer">
                <Link
                  href={item.href}
                  className={` text-base transition-colors  ${
                    isActive
                      ? "text-subtle font-bold"
                      : "text-primary-foreground hover:text-subtle font-normal"
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
        <Link
          href="#contact"
          className="rounded-none hidden md:flex w-fit mx-auto md:mx-0 "
        >
          <Button
            type="button"
            variant="default"
            className="rounded-none bg-accent hover:cursor-pointer hover:bg-accent/80 text-sm md:text-lg px-6 py-5 font-normal"
          >
            Book a free consultation
          </Button>
        </Link>

        <Button
          type="button"
          className="cursor-pointer md:hidden flex bg-background hover"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          <Image src={hamburgerIcon} alt="Menu" height={24} width={24} />
        </Button>
      </nav>
      {showMenu && (
        <div className="text-center bg-subtle opacity-95 space-y-6 absolute z-[11] w-full py-8 drop-shadow-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="relative cursor-pointer">
                <Link
                  href={item.href}
                  className={` text-base font-medium transition-colors  ${
                    isActive
                      ? "text-white font-bold"
                      : " hover:text-white font-normal "
                  }`}
                  onClick={() => setShowMenu(false)}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
