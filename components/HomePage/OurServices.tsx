import ServicesCardView from "../common/ServicesCardView";

export default function OurServices() {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center px-6 py-18 md:py-24 gap-4 md:gap-6">
      <p className="text-accent font-semibold">Our Service Options</p>
      <h3 className="text-strong text-4xl md:text-5xl font-bold text-center max-w-4xl leading-12 md:leading-16">
        Tailored Solutions for Every Stage of Care
      </h3>
      <p className="md:text-lg text-center ">
        Each family needs a different care
      </p>
      <ServicesCardView />
    </section>
  );
}
