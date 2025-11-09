"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import customer2 from "@/app/assets/customer2.png";
import customer3 from "@/app/assets/customer3.png";
import customer4 from "@/app/assets/customer4.png";
import { cn } from "@/lib/utils";

export default function TestimonialSection() {
  const reviews = [
    {
      stars: 5,
      content:
        "“Living in the US, I constantly worried about my parents in Delhi. Ibasho gave them a safer, more beautiful home — and me, peace of mind.”",
      customerName: "Shekhar Gupta",
      location: "Delhi, India",
      customerImage: customer4,
    },
    {
      stars: 5,
      content:
        "“The changes have made daily life so much easier. My home feels like mine, only safer.”",
      customerName: "Rohit Sharma",
      location: "Sector 122, Noida, India",
      customerImage: customer2,
    },
    {
      stars: 5,
      content:
        "“The changes have made daily life so much easier. My home feels like mine, only safer.”",
      customerName: "Vishal Sharma",
      location: "Mumbai, India",
      customerImage: customer3,
    },
    {
      stars: 5,
      content:
        "“Living in the US, I constantly worried about my parents in Delhi. Ibasho gave them a safer, more beautiful home — and me, peace of mind.”",
      customerName: "Shekhar Gupta",
      location: "Delhi, India",
      customerImage: customer4,
    },
  ];

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="container mx-auto relative py-18 md:py-24 px-4">
      <h3 className="text-strong text-4xl md:text-5xl font-bold max-w-4xl leading-12 mb-6">
        What Families Say About Us
      </h3>
      <p className="mb-8 md:text-lg">
        Real stories of care, trust, and transformation
      </p>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            loop: true,
            dragFree: true,
            align: "start",
          }}
          setApi={setApi}
          orientation="horizontal"
          className="w-full"
        >
          <CarouselContent className="flex-row lg:-ml-40 sm:-ml-10">
            {reviews.map((r, i) => (
              <CarouselItem
                key={i}
                className="sm:pl-10 lg:pl-40 basis-full md:basis-1/2 flex"
              >
                <CarouselCard review={r} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-18 left-0 right-0 flex justify-between items-center px-4 pb-2">
            {/* Dot indicators  */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    i === selectedIndex ? "bg-strong" : "bg-gray-300"
                  )}
                />
              ))}
            </div>

            {/* Nav buttons (right side) */}
            <div className="flex gap-2">
              <CarouselPrevious
                className="static translate-y-0 bg-transparent hover:bg-subtle border-1 border-primary-foreground p-5 cursor-pointer"
                size="icon"
              />
              <CarouselNext className="static translate-y-0 bg-transparent hover:bg-subtle border-1 border-primary-foreground p-5 cursor-pointer" />
            </div>
          </div>
        </Carousel>

        {/* Bottom controls */}
      </div>
    </section>
  );
}

function CarouselCard({
  review,
}: {
  review: {
    stars: number;
    content: string;
    customerName: string;
    location: string;
    customerImage: StaticImageData;
  };
}) {
  return (
    <Card className="flex-1 mx-2 border-0 outline-0 shadow-none">
      <CardContent className="p-0 md:p-6">
        <div className="flex items-center space-x-1 justify-start">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.17632 0.720186C7.31479 0.387266 7.7864 0.387266 7.92487 0.720186L9.5999 4.74744C9.65828 4.88779 9.79027 4.98369 9.94179 4.99583L14.2895 5.34439C14.649 5.3732 14.7947 5.82174 14.5209 6.05631L11.2083 8.89385C11.0929 8.99274 11.0425 9.1479 11.0777 9.29576L12.0898 13.5384C12.1734 13.8892 11.7919 14.1664 11.4842 13.9784L7.76189 11.7049C7.63217 11.6256 7.46902 11.6256 7.3393 11.7049L3.61701 13.9784C3.3093 14.1664 2.92775 13.8892 3.01142 13.5384L4.02345 9.29576C4.05872 9.1479 4.0083 8.99274 3.89286 8.89385L0.580328 6.05631C0.306491 5.82174 0.452229 5.3732 0.811645 5.34439L5.1594 4.99583C5.31092 4.98369 5.44291 4.88779 5.50129 4.74744L7.17632 0.720186Z"
                fill={`${i + 1 > review.stars ? "#cecece" : "#000"}`}
              />
            </svg>
          ))}
        </div>

        <p className="font-bold mb-6 mt-4 text-lg md:text-xl">
          {review.content}
        </p>
        <div className="flex items-start space-x-3 flex-col md:flex-row text-left">
          <Image
            src={review.customerImage}
            alt={review.customerName}
            className="rounded-full"
            width={50}
            height={50}
          />
          <div>
            <p className="font-semibold text-base">{review.customerName}</p>
            <p className="text-foreground text-base">{review.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
