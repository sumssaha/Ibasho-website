import Image from "next/image";
import renovatingImage from "@/app/assets/renovating.png";
export default function WhyItMatters() {
  const facts = [
    {
      number: "80%",
      mainText: "of seniors prefer to age in their own homes",
      subtext: "Most seniors want to stay where memories were made",
    },
    {
      number: "65.3%",
      mainText: "elderly were unable to move",
      subtext: "After one major fall and it impacts the quality of life",
    },
    {
      number: "40%",
      mainText: "fewer falls with simple home modifications",
      subtext: "Smart home upgrades can cut fall risks nearly in half",
    },
  ];
  return (
    <section className="container mx-auto flex flex-col justify-center items-center px-6 py-18 md:py-24 font-poppins gap-4 md:gap-6">
      <p className="text-accent font-semibold">Why it matters</p>
      <h3 className="text-strong text-4xl md:text-5xl font-bold text-center max-w-4xl">
        Why Renovating for Aging Parents Matters
      </h3>
      <p className="md:text-lg text-center md:text-left">
        A safe home today means peace of mind tomorrow.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:my-22 my-8 xl:items-stretch items-center">
        <Image
          src={renovatingImage}
          alt="Elderly Couple"
          className="col-span-1 lg:col-span-7 xl:col-span-8 w-full"
        />
        <div className="flex flex-col justify-between mx-8 lg:mx-10 xl:mx-20 col-span-1 lg:col-span-5 xl:col-span-4 lg:space-y-0 space-y-10 mt-6 lg:mt-0">
          {facts.map((fact, i) => (
            <div key={i}>
              <p className="text-accent font-bold text-4.5xl md:text-5.5xl my-6">
                {fact.number}
              </p>
              <p className="text-lg md:text-xl font-bold mb-2">
                {fact.mainText}
              </p>
              <p>{fact.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
