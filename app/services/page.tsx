import ServicesCardView from "@/components/common/ServicesCardView";
import ContactUsSection from "@/components/HomePage/ContactUsSection";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Ibasho",
  description: "Tailored Solutions for Every Stage of Care",
};
export default function Services() {
  return (
    <>
      <section className="container mx-auto flex flex-col justify-center items-center px-4 py-18 md:py-24 gap-4 md:gap-6">
        <h3 className="text-strong text-4.5xl md:text-5.5xl font-bold text-center leading-12 md:leading-16">
          <span className="text-accent">Tailored Solutions for</span> Every
          Stage of Care
        </h3>
        <p className="md:text-lg text-center max-w-4xl mb-14">
          Every home is different — and so are the needs of the people who live
          in it. <br /> At Ibasho, we bring design, safety, and empathy together
          to make homes aging-friendly so your parents can live independently,
          comfortably, and confidently
        </p>
        <ServicesCardView />
      </section>
      <section className="bg-strong py-24">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center px-4">
          <div className="max-w-3xl">
            <h3 className="text-primary text-3xl text-4.5xl font-bold">
              Your parent’s fall risk calculator
            </h3>
            <p className="text-primary my-6 md:text-lg">
              Falls are preventable. This 2-minute assessment helps you identify
              risk factors and learn simple, meaningful steps to make your
              parent’s home safer.
            </p>

            <p className="italic text-accent md:text-lg">
              Takes less than 2 minutes. No personal data stored.
            </p>
          </div>
          <div>
            <Link href="/contact" className="rounded-none flex w-fit my-6">
              <Button
                type="button"
                variant="default"
                className="rounded-none bg-primary hover:cursor-pointer hover:bg-accent/80 text-lg px-4 py-6 font-normal"
              >
                Start Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
