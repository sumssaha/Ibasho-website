import WhyItMatters from "@/components/HomePage/WhyItMatters";
import HeroSection from "@/components/HomePage/HeroSection";

import TestimonialSection from "@/components/HomePage/TestimonialSection";
import ContactUsSection from "@/components/HomePage/ContactUsSection";
import HowItWorks from "@/components/HomePage/HowItWorks";
import OurServices from "@/components/HomePage/OurServices";
import OurStory from "@/components/HomePage/OurStory";
import Faq from "@/components/HomePage/Faq";

// export const metadata: Metadata = {
//   title: "Nectar India",
//   description:
//     "Precision, innovation, and trust — built into every space we create.",
//   alternates: {
//     canonical: "https://nectarindia.co.in",
//   },
//   openGraph: {
//     title: "Nectar India",
//     description:
//       "Precision, innovation, and trust — built into every space we create.",
//     url: "https://nectarindia.co.in",
//     siteName: "Nectar India",
//     images: [
//       {
//         url: "https://nectarindia.co.in/logo.png",
//         width: 500,
//         height: 500,
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyItMatters />
      <HowItWorks />
      <OurServices />
      <OurStory />
      <TestimonialSection />
      <Faq />
      <ContactUsSection />
    </>
  );
}
