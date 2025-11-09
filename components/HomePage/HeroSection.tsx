"use client";
import Image from "next/image";
import heroImage from "@/app/assets/hero.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="flex justify-between items-center lg:gap-10 xl:gap-36 flex-col md:flex-row">
      <div className="flex-1 my-10 p-4 xl:p-8 2xl:ml-[11rem] max-w-xl">
        <h1 className="text-4.5xl md:text-5.5xl font-bold text-strong leading-14  lg:leading-16 mb-4 md:mt-0">
          Safe Homes for the Ones Who Raised You
        </h1>
        <p className="text-lg md:text-xl ">
          We transform houses into safe, comfortable spaces for aging parents,
          enabling independent living with confidence while giving you peace of
          mind from anywhere.
        </p>
        <Link href="/contact" className="rounded-none flex w-fit my-6">
          <Button
            type="button"
            variant="default"
            className="rounded-none bg-accent hover:cursor-pointer hover:bg-accent/80 text-lg px-4 py-6 font-normal"
          >
            Book a free consultation
          </Button>
        </Link>
      </div>
      <div className="flex-1 justify-items-end w-full">
        <Image
          src={heroImage}
          alt="heroImage"
          width={850}
          height={850}
          className=" fade-in w-full max-w-4xl"
        />
      </div>
    </section>
  );
}
