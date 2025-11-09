import { Separator } from "../ui/separator";
import fbLogo from "@/app/assets/fb.svg";
import linkedinLogo from "@/app/assets/linkedin.svg";
import ytLogo from "@/app/assets/yt.svg";
import instaLogo from "@/app/assets/insta.svg";
import xLogo from "@/app/assets/x.svg";
import Image from "next/image";
import companyLogo from "@/app/assets/logo.png";

export default function Footer() {
  const socialLinks = [
    {
      image: fbLogo,
      link: "https://www.fb.com",
    },
    {
      image: instaLogo,
      link: "https://www.instagram.com",
    },
    {
      image: xLogo,
      link: "https://www.x.com",
    },
    {
      image: linkedinLogo,
      link: "https://www.linkedin.com",
    },
    {
      image: ytLogo,
      link: "https://www.youtube.com",
    },
  ];
  return (
    <footer className="px-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  py-10 md:py-20 gap-6 md:gap-10">
        <div className="col-span-1 space-y-6 ">
          <Image
            src={companyLogo}
            className="w-40 h-auto md:w-40 mb-10"
            alt="Company Logo"
          />
          <div>
            <p className="font-semibold">Address:</p>
            <address className="not-italic">
              Level 1, 12 Sample St, Sydney NSW 2000
            </address>
          </div>
          <div>
            <p className="font-semibold">Contact:</p>
            <a href="tel:1800124567" className="underline block">
              1800 123 4567
            </a>
            <a href="mailto:email@example.com" className="underline block">
              email@example.com
            </a>
          </div>
          <div className="space-x-6 flex items-center mt-10">
            {socialLinks.map((social) => (
              <a href={social.link} key={social.link}>
                <Image
                  src={social.image}
                  alt={social.link}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-1 space-y-6">
          <a className="font-semibold block">Link One</a>
          <a className="font-semibold block">Link Two</a>
          <a className="font-semibold block">Link Three</a>
          <a className="font-semibold block">Link Four</a>
          <a className="font-semibold block">Link Five</a>
        </div>
      </div>
      <Separator orientation="horizontal" className="border-b-1 border-black" />
      <div className="flex justify-between md:items-center items-start py-8 md:py-12 container mx-auto flex-col md:flex-row gap-5">
        <p className=" md:text-base order-2 md:order-1">
          &copy; {new Date().getFullYear()} Ibasho. All rights reserved.
        </p>
        <div className="flex md:flex-row flex-col justify-between md:items-center space-y-4 md:space-y-0 md:space-x-8 order-1 md:order-2">
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
          <a href="/terms" className="underline">
            Terms of Service
          </a>
          <a href="/cookies" className="underline">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
