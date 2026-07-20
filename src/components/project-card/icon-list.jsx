import React from "react";

import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiVitess } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";

const fatherClass =
  "relative group flex items-center gap-1.5 p-1 cursor-pointer w-fit shrink-0";

export function ReactIcon() {
  return (
    <div className={fatherClass}>
      <IoLogoReact className="scale-130 group-hover:text-blue-400 duration-400" />
      React
    </div>
  );
}

export function TypeScriptIcon() {
  return (
    <div className={fatherClass}>
      <BiLogoTypescript className="scale-130 group-hover:text-blue-500 duration-400" />
      Type script
    </div>
  );
}

export function NextIcon() {
  return (
    <div className={fatherClass}>
      <RiNextjsFill className="scale-140 group-hover:text-gray-600 duration-400" />
      Next.js
    </div>
  );
}

export function ViteIcon() {
  return (
    <div className={fatherClass}>
      <SiVitess className="scale-100 group-hover:text-purple-600 duration-400" />
      Vite
    </div>
  );
}

export function TailWindIcon() {
  return (
    <div className={fatherClass}>
      <RiTailwindCssFill className="scale-110 group-hover:text-blue-300 duration-400" />
      TailWind
    </div>
  );
}

export function JavascriptIcon() {
  return (
    <div className={fatherClass}>
      <RiJavascriptFill className="scale-130 group-hover:text-amber-300 duration-400" />
      Java script
    </div>
  );
}
