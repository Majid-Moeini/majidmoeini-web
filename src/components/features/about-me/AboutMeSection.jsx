import content from "./aboutMeContent.json";

export default function AboutMeSection() {
  return (
    <section id="aboutMe" className="scroll-mt-20 mx-auto md:my-20 my-10 flex flex-col items-center gap-6 px-4">
      <div className="flex flex-col items-center">
        <h2 className="font-modam md:text-5xl text-2xl font-bold text-gray-50">
          {content.title}
        </h2>
        <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
          {content.subtitle}
        </p>
      </div>

      <div className="text-lg md:text-xl text-gray-300 mb-2 md:max-w-3xl w-full font-modam mt-3 whitespace-pre-line md:text-center text-justify">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>

      <button className="px-5 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-white rounded-full transition font-modam text-xl font-light cursor-pointer md:mt-3 w-fit items-center">
        {content.resumeLabel}
      </button>
    </section>
  );
}
