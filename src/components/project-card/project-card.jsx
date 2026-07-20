import React from "react";
import Projects from "./projects";

export default function ProjectCard() {
  return (
    <div className="mx-auto md:my-20 my-10 flex flex-col items-center gap-8 px-4 md:px-8 w-full md:max-w-5xl">
      <div className="flex flex-col items-center gap-1">
        <h2 className="font-modam md:text-5xl text-2xl font-bold text-gray-50">
          {"Projects"}
        </h2>

        <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
          {"Some of my Work"}
        </p>
      </div>
      <Projects />
    </div>
  );
}
