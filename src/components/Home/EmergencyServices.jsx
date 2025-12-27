import Image from "next/image";

import EmergencyServicesData from "../Data/Home/EmergencyServices/EmergencyServicesData";
import EmergencyCard from "../Data/Home/EmergencyServices/EmergencyCard";


export default function EmergencyServices() {
  const { section, services } = EmergencyServicesData;

  return (
    <section className="py-12 bg-gray-50/40">

      <div className="flex flex-col items-center md:mb-15 mb-5">
        <h2 className="text-xl md:text-4xl font-extrabold md:mb-4 font-modam">
          {section.title}
        </h2>

        <p className="text-[10px] md:text-base text-gray-600 mb-4">
          {section.subtitle}
        </p>
      </div>

      <div className="relative w-full h-[280px] md:h-[360px] ">
        <Image
          src={section.banner.image}
          alt={section.banner.alt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 -mt-24 relative z-10 ">
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((item) => (
            <EmergencyCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              alt={item.alt}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
