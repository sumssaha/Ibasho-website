import ContactUsSection from "@/components/HomePage/ContactUsSection";
import { Metadata } from "next";
import storyImage from "@/app/assets/about-story.jpg";
// import Image from "next/image";
// import LitanRoyImage from "@/app/assets/litan-roy.png";
import founderImage from "@/app/assets/founder.png";
import litanRoyImage from "@/app/assets/litan-roy.png";
import aboutBanner from "@/app/assets/about-banner.jpg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Ibasho",
  description:
    "Ibasho” means a place where you feel at home. For us, it’s about more than safety — it’s about dignity, independence, and preserving the warmth of a home filled with memories.",
};
export default function About() {
  return (
    <>
      <section>
        <Image
          src={aboutBanner}
          alt=""
          className="w-full max-h-[660px] object-cover object-center"
        />
        <div className="py-18 md:py-24 container mx-auto px-4 text-center space-y-10 max-w-3xl">
          <h1 className="text-accent font-bold text-4.5xl md:text-5.5xl">
            Ibasho Story
          </h1>
          <p className="text-base md:text-lg">
            We created Ibasho from a deeply personal place. Having lived away
            from home, our parent’s safety was always on our minds. Our parent
            experienced a fall that led to critical surgery and a long hospital
            stay. Beyond the physical recovery, what stayed with them was the
            constant fear of another fall.
          </p>

          <p className="text-base md:text-lg">
            That fear stayed with us too. It made us realize how important it is
            to create homes that not only provide comfort but also ensure safety
            and dignity for our loved ones as they age. This is why Ibasho is so
            close to our hearts — it’s about building safe homes for the ones
            who raised us.
          </p>
          <Button className="text-sm font-semibold px-2  bg-[#eee] rounded-none">
            About Us
          </Button>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${storyImage.src})` }}
        className="flex justify-center items-center bg-cover relative bg-center px-6"
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="container py-12 md:py-28 text-primary z-1 flex flex-col md:flex-row px-4 md:px-0">
          <div className="flex-1">
            {" "}
            <p className="text-primary font-semibold">Our Story</p>
            <h3 className="text-primary text-4xl md:text-5xl font-bold max-w-xl leading-12 md:leading-16">
              The Heart Behind Our Name
            </h3>
          </div>
          <div className="flex-1 space-y-8 mt-12 md:mt-56">
            <p className="text-base md:text-lg">
              “Ibasho” means a place where you feel at home. For us, it’s about
              more than safety — it’s about dignity, independence, and
              preserving the warmth of a home filled with memories.
            </p>

            <p className="text-base md:text-lg">
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
      <section className="py-18 md:py-24 container mx-auto px-6 ">
        <p className="text-accent font-semibold">Meet the founders</p>
        <div className="space-y-20 lg:space-y-36 pt-10">
          <div className="flex justify-between items-center lg:items-start gap-10 flex-col lg:flex-row xl:gap-40">
            <div className="space-y-10 flex-1">
              <h2 className="text-strong text-4xl md:text-5xl font-bold leading-12 md:leading-14">
                Ar. Pradip Sur - Founder & Principal Architect
              </h2>
              <p className="text-justify text-base md:text-lg">
                Ar. Pradip Sur, an alumnus of NIT Calicut (2004), brings over
                two decades of extensive experience in interior and
                architectural design. While his portfolio spans diverse
                industries and residential projects, he has significantly
                specialized in the healthcare sector, successfully completing
                several hospital projects. His profound understanding of
                circulation layouts is particularly beneficial for disabled and
                aged individuals, ensuring safety and accessibility. Ar. Sur is
                recognized for his innovative character and compassionate
                dedication to enhancing the safety, security, and
                self-confidence of vulnerable populations through thoughtful
                design and renovation.
              </p>
            </div>
            <div className="">
              <Image
                src={founderImage}
                alt="founder"
                className="w-full max-w-xl"
              />
            </div>
          </div>
          <div className="flex justify-between items-center xl:items-start gap-10 flex-col lg:flex-row  xl:gap-40">
            <div className="order-2 lg:order-1">
              <Image
                src={litanRoyImage}
                alt="founder"
                className="w-full max-w-xl"
              />
            </div>
            <div className="space-y-10 flex-1 order-1 lg:order-2">
              <h2 className="text-strong text-4xl md:text-5xl font-bold leading-12 md:leading-14">
                Litan Roy
              </h2>
              <p className="text-justify text-base md:text-lg">
                Mr. Litan Roy, an engineering graduate, brings over 22 years of
                diverse experience in executing large-scale projects across
                Civil, Interior, and MEP works. He has successfully delivered
                projects for esteemed clients including DMRC, Indian Railways,
                NHAI, Formula One Roofing, Mumbai Airport, and Delhi Airport.
                With a proven track record of managing major infrastructure and
                construction projects with precision and quality assurance, Mr.
                Roy has built a reputation for excellence and reliability. He
                founded Nectar India with a vision to deliver projects that
                embody Quality, Innovation, and Integrity.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>
      <ContactUsSection />
    </>
  );
}
