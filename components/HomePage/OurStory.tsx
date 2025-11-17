import renovationsImg from "@/app/assets/renovations.jpg";
import Link from "next/link";
import { Button } from "../ui/button";
export default function OurStory() {
  return (
    <section
      style={{ backgroundImage: `url(${renovationsImg.src})` }}
      className="renovation-bg flex justify-center items-center bg-cover relative bg-center px-6"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container py-12 md:py-28 text-primary z-1 flex flex-col md:flex-row px-4 md:px-0">
        <div className="flex-1">
          {" "}
          <p className="text-primary font-semibold">Our Story</p>
          <h3 className="text-primary text-4xl md:text-5xl font-bold max-w-4xl leading-12 md:leading-16">
            More Than Renovations. <br />A Promise.
          </h3>
        </div>
        <div className="flex-1 space-y-8 mt-12 md:mt-72 md:text-lg">
          <p>
            “Ibasho” means a place where you feel at home. For us, it’s about
            more than safety — it’s about dignity, independence, and preserving
            the warmth of a home filled with memories.
          </p>

          <p>
            We exist so children, no matter where they live, can ensure their
            parents age gracefully, comfortably, and confidently in the homes
            they love.
          </p>
          <Link href="#contact" className="rounded-none flex w-fit ">
            <Button
              type="button"
              variant="default"
              className="rounded-none border text-primary bg-transparent border-solid border-white hover:cursor-pointer hover:bg-accent/80 text-base px-6 py-6 font-normal outline-none"
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
