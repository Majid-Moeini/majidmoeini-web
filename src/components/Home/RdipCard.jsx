//import { Images } from "lucide-react";
import Image from "next/image";
import React from "react";
import IcapButton from "@/components/ui/icap-ui/IcapButton"
import RdipCardData from "@/components/Data/Home/RdipCardData.json"


export default function RdipCard(props) {
  const { title, subtitle, description, items, image, ctaText } = {
    ...RdipCardData,  // داده‌ها از JSON
    ...props          // امکان override از props
  };
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 ">

        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl md:text-[28px] font-extrabold mb-4 ">
            {title}
          </h2>

          <h4 className="text-lg text-gray-600 mb-4 ">
            {subtitle}
          </h4>
        </div>

        <div className="flex flex-col md:flex-row items-start  ">

          <div className="md:w-1/2 md:order-2 mb-6 md:mb-0 text-center md:text-left md:-translate-y-22">
            <img
              src={image}
              alt="R-dip diagnose"
              className="mx-auto  max-w-[90%] md:max-w-full"
            />
          </div>

          <div className="md:w-1/2 md:order-1 text-center md:text-right">
            <p className="leading-8 text-gray-700 mb-6 text-start">
              {description}
            </p>

            <ul className="space-y-4 mb-8">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 justify-start"
                >
                  <div className="p-2 border-2 border-gray-300 rounded-xl">
                    <Image
                      src="/images/icons/star.png"
                      width={24}
                      height={24}
                      alt="icon star"
                      className="w-6 h-6 "
                    />
                  </div>
                  <span className="leading-7 text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center md:justify-end">
              <div className="w-full md:w-[243px]">
                <IcapButton className="py-5 text-sm md:text-base" href={'/R-Dip'}>
                  {ctaText}
                </IcapButton>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}