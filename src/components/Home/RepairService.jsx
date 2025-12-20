"use client";
import React, { useState } from "react";
import Image from "next/image";
import IcapButton from "@/components/ui/icap-ui/IcapButton";
import { repairServicesData } from "../Data/Home/RepairService/repairServicesData";
import RepairServiceItem from "../Data/Home/RepairService/RepairServiceItem";

export default function RepairServiceList() {
  const [selectedId, setSelectedId] = useState(repairServicesData[0].id); // دیفالت: اولی

  const selectedService = repairServicesData.find(
    (s) => s.id === selectedId
  );

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10">

      {/* scrollable list */}
      <div className="overflow-x-auto scrollbar-hide pb-2 md:pb-4 md:px-4">
        <div className="flex gap-3 md:gap-6 w-max md:w-full mx-auto">
          {repairServicesData.map((service) => (
            <RepairServiceItem
              key={service.id}
              {...service}
              selected={service.id === selectedId}
              onSelect={() => setSelectedId(service.id)}
            />
          ))}
        </div>
      </div>

      {/* details */}
      <div className="flex flex-col mt-8 w-full">
        <div className="flex flex-col items-center md:flex-row w-full">
          <div className="md:w-1/3 max-w-[80%]">
            <Image
              src={selectedService.image.src}
              alt={selectedService.image.alt}
              width={1000}
              height={667}
              className="md:w-full"
            />
          </div>

          <div className="md:w-2/3 text-sm md:text-base leading-relaxed">
            {selectedService.fullDescription}
          </div>
        </div>

        <div className="flex w-full justify-center mt-4 md:mr-auto md:w-[243px]">
          <IcapButton href={selectedService.cta.href} className="py-5">
            {selectedService.cta.label}
          </IcapButton>
        </div>
      </div>

    </section>
  );
}
