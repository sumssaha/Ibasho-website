import Image from "next/image";
import essentialSafetyImg from "@/app/assets/essential_safety.jpg";
import comfortCareImg from "@/app/assets/comfort_care.jpg";
import eliteUpgradeImg from "@/app/assets/elite_upgrade.jpg";
import chevronRight from "@/app/assets/chevron_right.svg";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ServicesCardView() {
  const cards = [
    {
      title: "Essential Safety",
      subtitle:
        "Immediate peace of mind (grab bars, slip-resistant flooring, lighting)",
      image: essentialSafetyImg,
      link: "/",
    },
    {
      title: "Comfort & Care",
      subtitle:
        "Accessibility + lifestyle upgrades (bathrooms, kitchens, ergonomic furniture).",
      image: comfortCareImg,
      link: "/",
    },
    {
      title: "Elite Upgrade",
      subtitle: "Smart home safety, full redesign, project management",
      image: eliteUpgradeImg,
      link: "/",
    },
  ];

  return (
    <div className="flex justify-between items-center flex-col lg:flex-row gap-5 md:gap-8  mt-10 md:mt-16">
      {cards.map((card) => (
        <div key={card.title} className="relative">
          <Image
            src={card.image}
            className="h-[630px] object-cover grayscale"
            alt=""
          />
          <div className="absolute bg-linear-to-b from-transparent to-strong inset-0" />
          <div className="absolute bottom-0 z-1 text-primary pb-10 px-4 md:p-10 space-y-6">
            <h4 className="font-bold text-2xl md:text-3xl">{card.title}</h4>
            <p>{card.subtitle}</p>
            <Link href={card.link} className="rounded-none flex w-fit ">
              <Button
                type="button"
                variant="default"
                className="rounded-none border text-primary bg-transparent border-solid border-white hover:cursor-pointer hover:bg-accent/80 text-base px-4 py-6 font-normal outline-none"
              >
                Connect to know more <Image src={chevronRight} alt="go" />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
