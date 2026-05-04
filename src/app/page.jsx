import Project from "@/components/project";
import { CandyIcon, Sun } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col ">
      <div className="relative md:max-w-5xl w-full md:h-[800px] h-[560px] mx-auto overflow-hidden rounded-2xl md:mb-20 mb-10">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/Rectangle2.svg"
            alt="Rectangle-hiro"
            fill
            className="object-cover mask-radial-to-80% opacity-50"
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-3">
          <div className="bg-white size-40 md:size-60 flex justify-center items-end  rounded-full shrink-0 shadow-2xl mt-50">
            <Image
              src="/images/Majidmoeini_web.png"
              width={776}
              height={1102}
              alt="Person"
              className="reletive w-40 md:w-60 h-fit md:h-fit border-6 border-b-white rounded-full"
            />
          </div>

          <div className="flex flex-col w-full md:-translate-y-5">
            <p className="text-lg md:text-3xl text-gray-200 mb-2 max-w-2xl font-modam">
              {"Hi thre!"}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-modam">
              {" I'm Majid Moeini"}
            </h1>
          </div>

          <p className="text-lg md:text-2xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
            {"Frontend Developer"}
            <CandyIcon className="text-2xl text-blue-300" />
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-2 md:max-w-3xl w-full font-modam mt-3">
            {
              "Passionate Front-End Developer with a year of practical experience in designing sleek, responsive interfaces. I specialize in using React, Next.js, and Tailwind CSS to deliver optimized, fluid, and engaging user experiences."
            }
          </p>

          <button className="px-10 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-white rounded-full  transition font-modam text-xl font-light cursor-pointer md:mt-3">
            {"Contact Me"}
          </button>
        </div>
      </div>

      <div className="mx-auto md:my-20 my-10 flex flex-col items-center gap-6 px-4">
        <div className="flex flex-col items-center">
          <h2 className="font-modam md:text-5xl text-2xl font-bold text-gray-50">
            {"About Me"}
          </h2>

          <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
            {"Get to know me"}
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-2 md:max-w-3xl w-full font-modam mt-3 whitespace-pre-line md:text-center text-justify">
          {`Passionate Front-End Developer with a year of practical experience crafting sleek, responsive UIs using React, Next.js, and Tailwind CSS. My focus is on creating optimized, fluid user experiences.

            I have taken multiple projects from ideation to production, gaining valuable insights into real-world web development challenges. I thrive in environments that encourage continuous learning and innovation.

            I am looking to join a dynamic team where I can tackle complex problems, collaborate on impactful products, and learn from seasoned professionals. I believe that the best growth comes from collaboration and shared expertise.`}
        </p>

        <button className="px-5 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-white rounded-full  transition font-modam text-xl font-light cursor-pointer md:mt-3 w-fit items-center ">
          {"Download Resume"}
        </button>
      </div>

      <div className="mx-auto md:my-20 my-10 flex flex-col items-center gap-8 px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h2 className="font-modam md:text-5xl text-2xl font-bold text-gray-50">
            {"What I do"}
          </h2>

          <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
            {"My  Services"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-4 w-full md:max-w-5xl">
          {/* کارت 1 */}
          <div className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col p-4 gap-3 rounded-xl">
            <div className="bg-white p-2 rounded-lg w-fit">
              <Sun />
            </div>
            <p className="text-white font-semibold font-modam text-base">
              Data Analytics & Visualization
            </p>
            <p className="text-gray-100 text-sm">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>

          {/* کارت 2 */}
          <div className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col p-4 gap-3 rounded-xl">
            <div className="bg-white p-2 rounded-lg w-fit">
              <Sun />
            </div>
            <p className="text-white font-semibold font-modam text-base">
              Data Analytics & Visualization
            </p>
            <p className="text-gray-100 text-sm">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>

          {/* کارت 3 */}
          <div className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col p-4 gap-3 rounded-xl">
            <div className="bg-white p-2 rounded-lg w-fit">
              <Sun />
            </div>
            <p className="text-white font-semibold font-modam text-base">
              Data Analytics & Visualization
            </p>
            <p className="text-gray-100 text-sm">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>

          {/* کارت 4 */}
          <div className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col p-4 gap-3 rounded-xl">
            <div className="bg-white p-2 rounded-lg w-fit">
              <Sun />
            </div>
            <p className="text-white font-semibold font-modam text-base">
              Data Analytics & Visualization
            </p>
            <p className="text-gray-100 text-sm">
              From data inception to actionable insights, I design compelling
              analytics and visualization solutions that illuminate trends,
              empower decision-making, and drive your business forward.
            </p>
          </div>

          {/* کارت بزرگ (دو ستونه) - در موبایل به صورت ستونی */}
          <div className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col md:flex-row p-4 rounded-xl md:col-span-2 gap-3">
            <div className="flex flex-col gap-3 lg:max-w-[55%] w-full">
              <div className="bg-white p-2 rounded-lg w-fit">
                <Sun />
              </div>
              <p className="text-white font-semibold font-modam text-base">
                Data Analytics & Visualization
              </p>
              <p className="text-gray-100 text-sm">
                From data inception to actionable insights, I design compelling
                analytics and visualization solutions that illuminate trends,
                empower decision-making, and drive your business forward.
              </p>
            </div>

            <div className="relative w-full lg:max-w-[400px] h-[200px] lg:h-auto">
              <Image
                src="/images/next.jpg"
                alt="git"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto md:my-20 my-10 flex flex-col items-center gap-8 px-4 md:px-8 w-full md:max-w-5xl">
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-modam md:text-5xl text-2xl font-bold text-gray-50">
            {"Projects"}
          </h2>

          <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
            {"Some of my Work"}
          </p>
        </div>
        <Project />
      </div>
    </div>
  );
}
