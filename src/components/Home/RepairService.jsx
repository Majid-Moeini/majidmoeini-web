"use client";

import { useState } from "react";
import Image from "next/image";
import IcapButton from "@/components/ui/icap-ui/IcapButton";
import { repairServicesData } from "../Data/Home/RepairService/repairServicesData";
import RepairServiceItem from "../Data/Home/RepairService/RepairServiceItem";


export default function RepairServiceList() {
  const [selectedId, setSelectedId] = useState(
    repairServicesData[1]?.id ?? repairServicesData[0]?.id
  );

  const selectedService = repairServicesData.find(
    (s) => s.id === selectedId
  );


  const [title, subTitle] = [
    "خدمات تعمیر خودرو",
    "در مورد این دسته بندی توضیح کوتاهی داریم",
  ];

  return (
    <section className="max-w-full mx-auto px-4 md:px-10 mb-10">
      <div className="flex flex-col items-center mb-5">
        <h2 className="text-xl md:text-4xl font-extrabold mb-4 font-modam">
          {title}
        </h2>
        <p className="text-[10px] md:text-base text-gray-600 mb-4">
          {subTitle}
        </p>
      </div>

      {/* scrollable list */}
      <div className="overflow-x-auto scrollbar-hide md:pb-4 md:px-4 px-6" >
        <div className="flex gap-3 md:gap-6 w-max md:w-full mx-auto "  >
          {repairServicesData.map((service) => (
            <RepairServiceItem
              key={service.id}
              {...service}
              data-id={service.id}
              selected={service.id === selectedId}
              onSelect={() => setSelectedId(service.id)}
            />
          ))}
        </div>
      </div>

      {/* details */}
      {selectedService && (
        <div
          key={selectedId}
          className="flex flex-col w-full opacity-0 translate-y-4 animate-detail"
        >
          <div className="flex flex-col items-center md:flex-row w-full">
            <div className="relative h-[180px] md:h-[200px] flex w-[332px] md:w-1/3">
              <Image
                src={selectedService.image.src}
                alt={selectedService.image.alt}
                fill
                className="object-cover object-center md:w-full"
              />
            </div>

            <div className="md:w-2/3 text-sm md:text-base leading-relaxed text-justify">
              {selectedService.fullDescription}
            </div>
          </div>

          <div className="flex w-full justify-center mt-6 md:mt-8 lg:mt-0 md:mr-auto md:w-[243px]">
            <IcapButton href={selectedService.cta.href} className="py-5">
              {selectedService.cta.label}
            </IcapButton>
          </div>
        </div>
      )}
    </section>
  );
}
