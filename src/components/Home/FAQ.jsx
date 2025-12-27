import React from "react";
import FaqAccordion from "../Data/Home/FAQ/FaqAccordion";
import Image from "next/image";

export default function FAQ() {
  return (

    <main className="max-w-full mx-auto md:px-10 flex flex-col mt-20 justify-center w-full ">
      <h1 className="text-xl font-bold mb-8 text-center md:text-start">سوالات متداول</h1>
      <div className="flex gap-8">
        <div className="w-full px-4 md:w-[60%]">
          <FaqAccordion />
        </div>
        <div className="relative h-[475px] w-[40%] hidden lg:flex">
          <Image
            src="/images/RepairService.jpg"
            alt="ArticlesBanner"
            fill
            className="object-cover object-center rounded-3xl "
          />
        </div>
      </div>
    </main>
  );
}
