import MyForm from "@/components/form";
import content from "./contactContent.json";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 w-full max-w-2xl mx-auto my-10">
      <div className="flex flex-col items-center">
        <h2 className="font-modam md:text-4xl text-2xl font-bold text-gray-50">
          {content.title}
        </h2>
        <p className="text-sm md:text-xl max-w-2xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-200 flex gap-2">
          {content.subtitle}
        </p>
      </div>
      <MyForm />
    </section>
  );
}
