"use client";

import PaidServicesData from "../Data/Home/PaidServices/PaidServicesData";
import PaidServicesItem from "../Data/Home/PaidServices/PaidServicesitem";

import PeriodicService from "@/components/icons/PaidServices/PeriodicService";
import Inquiry from "@/components/icons/PaidServices/Inquiry";
import InsuranceServices from "@/components/icons/PaidServices/InsuranceServices";
import TrafficInfo from "@/components/icons/PaidServices/TrafficInfo";
import Car from "@/components/icons/PaidServices/Car";
import CarServices from "@/components/icons/PaidServices/CarServices";

// map اسم → کامپوننت
const iconMap = {
  PeriodicService,
  Inquiry,
  InsuranceServices,
  TrafficInfo,
  Car,
  CarServices,
};

export default function PaidServices() {

  const [title, subTitle] = [
    "سرویس های پرداختی",
    "در مورد این دسته بندی توضیح کوتاهی داریم"
  ];

  return (
    <section className="max-w-full mx-auto px-4 md:px-0 md:mb-8 bg-gray-50/40 md:pt-15">

      <div className="flex flex-col items-center">
        <h2 className="text-xl md:text-4xl font-extrabold mb-4 mt-10 font-modam">
          {title}
        </h2>

        <p className="text-[10px] md:text-base text-gray-600 mb-4">{subTitle}</p>
      </div>

      <div className="flex flex-row overflow-x-auto scrollbar-hide md:pb-4 md:px-4">
        <div className="flex gap-3 md:gap-3 w-max md:w-full mx-auto mt-10 md:mt-20">
          {PaidServicesData.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <PaidServicesItem
                key={service.id}
                title={service.title}
                description={service.description}
                Icon={Icon}
                mt={service.mt}
                delay={index * 30}
              />
            );
          })}

        </div>
      </div>

    </section>
  );
}
