import { CandyIcon } from "lucide-react";
import Image from "next/image";
import OrbitingItems3D from "@/components/animata/list/orbiting-items-3-d";
import content from "./heroContent.json";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 relative md:max-w-5xl w-full md:h-[800px] h-[560px] mx-auto overflow-hidden rounded-2xl md:mb-20 mb-10">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Rectangle2.svg"
          alt={content.backgroundAlt}
          fill
          className="object-cover mask-radial-to-80% opacity-50"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-3 mt-0 md:mt-20">
        <OrbitingItems3D className="mt-60 md:mt-0" />

        <div className="flex flex-col w-full md:-translate-y-5">
          <p className="text-lg md:text-3xl text-gray-200 mb-2 max-w-2xl font-modam">
            {content.greeting}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-modam">
            {content.name}
          </h1>
        </div>

        <p className="text-lg md:text-2xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
          {content.role}
          <CandyIcon className="text-2xl text-blue-300" />
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-2 md:max-w-3xl w-full font-modam mt-3">
          {content.description}
        </p>

        <button className="px-10 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-white rounded-full transition font-modam text-xl font-light cursor-pointer md:mt-3">
          {content.contactLabel}
        </button>
      </div>
    </section>
  );
}
