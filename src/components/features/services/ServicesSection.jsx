import ServiceCard from "./ServiceCard";
import content from "./servicesContent.json";

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 mx-auto md:my-20 my-10 flex flex-col items-center gap-8 px-4 md:px-8">
      <div className="flex flex-col items-center">
        <h2 className="font-modam md:text-5xl text-2xl font-bold text-gray-50">
          {content.title}
        </h2>
        <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
          {content.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-4 w-full md:max-w-5xl">
        {content.items.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            service={service}
            featured={index === content.items.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
