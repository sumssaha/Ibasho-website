import Link from "next/link";
import { Button } from "../ui/button";
import assessmentImage from "@/app/assets/Assessment.svg";
import designImage from "@/app/assets/Design.svg";
import executionImage from "@/app/assets/Execution.svg";
import contentImage from "@/app/assets/Content.svg";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-18 md:gap-18 lg:gap-22 xl:gap-40 py-18 md:py-24">
      <div className="flex-1 px-6 md:px-0">
        <p className="text-accent font-semibold">How it works</p>
        <h3 className="text-strong text-4xl md:text-5xl font-bold max-w-4xl pt-4 pb-8 md:leading-16 leading-12">
          Our Simple, Transparent Process
        </h3>
        <Link href="/contact" className="rounded-none flex w-fit ">
          <Button
            type="button"
            variant="default"
            className="rounded-none border border-solid border-strong hover:cursor-pointer hover:bg-accent/80 text-lg px-4 py-6 font-normal  outline-none"
          >
            Start with free consultation
          </Button>
        </Link>
      </div>
      <div className="space-y-8 flex-1 px-6 md:px-0">
        {/* INNER */}
        <div className="flex justify-between gap-6">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={assessmentImage}
              alt=""
              className="w-64 max-w-12 sm: md:w-20"
            />
            <div className="border-r-2 border-r-accent border-r-solid min-h-28 max-h-48 w-0 h-full" />
          </div>
          <div className="">
            <p className="text-accent font-bold text-lg md:text-xl">
              Consultation & Assessment
            </p>
            <p>
              We begin by listening to your concerns and understanding your
              parents’ daily routines.{" "}
              <span className="text-subtle font-bold italic">
                A detailed safety audit ensures nothing important is overlooked.
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={designImage}
              alt=""
              className="w-64 max-w-12 sm: md:w-20"
            />
            <div className="border-r-2 border-r-accent border-r-solid min-h-28 max-h-48 w-0 h-full" />
          </div>
          <div>
            <p className="text-accent font-bold text-lg md:text-xl">
              Personalized Design
            </p>
            <p>
              Our experts craft thoughtful plans that balance safety, comfort,
              and style.{" "}
              <span className="text-subtle font-bold italic">
                Every detail is tailored to your parents’ needs and lifestyle
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={executionImage}
              alt=""
              className="w-64 max-w-12 sm: md:w-20"
            />
            <div className="border-r-2 border-r-accent border-r-solid min-h-28 max-h-48 w-0 h-full" />
          </div>
          <div>
            <p className="text-accent font-bold text-lg md:text-xl">
              Seamless Execution
            </p>
            <p>
              From start to finish, we manage the project with care and
              precision.
              <span className="text-subtle font-bold italic">
                You receive regular updates, so you stay connected no matter
                where you are.
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-6">
          <div>
            <Image
              src={contentImage}
              alt=""
              className="w-64 max-w-12 sm: md:w-20"
            />
          </div>
          <div>
            <p className="text-accent font-bold text-lg md:text-xl">
              Handover & Peace of Mind
            </p>
            <p>
              Your parents step into a safe, beautiful, and dignified home.{" "}
              <span className="text-subtle font-bold italic">
                You gain confidence knowing their comfort is secured for years
                to come.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
