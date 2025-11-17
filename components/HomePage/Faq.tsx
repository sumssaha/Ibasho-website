import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Faq() {
  const faqs = [
    {
      query: "Which geographic locations do you serve?",
      response:
        "Currently, we operate in Delhi NCR, where we deliver personalized, high-quality transformations — and we’re preparing to bring our expertise to other cities soon.",
    },
    {
      query: "Does this mean a full redesign of the home?",
      response:
        "Not at all. Often, simple yet thoughtful enhancements—such as safety-focused bathrooms, better lighting, or slip-free flooring—can make a profound difference in comfort, safety, and independence.",
    },
    {
      query: "When should we start planning for our parents’ home safety?",
      response:
        "While every home and family is unique, studies show that after 50, safety-focused home design greatly improves comfort and well-being. Making thoughtful changes now gives your parents the confidence to live freely and safely as they age.",
    },
    {
      query: "Can adjustments be made later if needs change?",
      response:
        "Yes. Our solutions are designed to be flexible and future-ready, allowing the home to adapt seamlessly as your parents’ needs evolve.",
    },
    {
      query:
        "Should I get my home transformed even if my parents don’t need it yet?",
      response:
        "Yes. We always encourage families to plan ahead and future-proof their homes. Taking thoughtful steps today helps prevent potential falls and ensures your parents continue to live safely and comfortably — giving you peace of mind, even from afar.",
    },
  ];

  return (
    <section className="container mx-auto py-18 md:py-24 px-6 text-center">
      <h3 className="text-strong text-4xl md:text-5xl font-bold  leading-12 mb-6">
        Frequently Asked Questions
      </h3>
      <p className="text-subtle md:text-lg">
        Everything You Need to Know Before You Begin
      </p>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto my-16">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={faq.query}
            style={{
              borderBottom: "1px solid black",
            }}
            className={`border-b-black py-2 ${
              i === 0 ? "border-t border-t-black" : ""
            }`}
          >
            <AccordionTrigger className="text-bold">
              {faq.query}
            </AccordionTrigger>
            <AccordionContent className="text-left">
              {faq.response}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h4 className="text-strong font-bold text-2xl md:text-3xl">
        Still have questions?
      </h4>
      <p className="my-6 md:text-lg">We’re just a message away</p>
      <Link href="#contact" className="rounded-none flex w-fit mx-auto">
        <Button
          type="button"
          variant="default"
          className="rounded-none border border-solid border-strong hover:cursor-pointer hover:bg-accent/80 text-lg px-4 py-6 font-normal text-strong outline-none"
        >
          Contact Us
        </Button>
      </Link>
    </section>
  );
}
