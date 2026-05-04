import React from "react";
import { projectData } from "./project-data";
import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";

export default function Project() {
  return (
    <div className="w-full grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-4">
      {projectData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-full mt-14 md:mt-0 justify-between"
        >
          <div>
            <div className="relative  h-48 ">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg font-semibold font-modam py-4 mt-2 text-gray-100">
              {item.title}
            </p>
          </div>

          <div className="flex ">
            <ul className="cursor-pointer w-fit shrink-0 text-gray-100">
              {item.Technology.map((Icon, index) => (
                <li key={index}>
                  <Icon />
                </li>
              ))}
            </ul>

            <a href={item.url} className="w-full flex justify-end items-end">
              <ArrowUpRightIcon className="m-3 bg-blue-400 hover:bg-blue-400/60 text-white rounded-2xl p-0.5 duration-300 cursor-pointer scale-120" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
