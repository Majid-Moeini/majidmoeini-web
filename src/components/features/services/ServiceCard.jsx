import { Sun } from "lucide-react";
import Image from "next/image";

export default function ServiceCard({ service, featured = false }) {
  const content = (
    <>
      <div className="bg-white p-2 rounded-lg w-fit">
        <Sun />
      </div>
      <p className="text-white font-semibold font-modam text-base">
        {service.title}
      </p>
      <p className="text-gray-100 text-sm">{service.description}</p>
    </>
  );

  if (!featured) {
    return (
      <article className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col p-4 gap-3 rounded-xl">
        {content}
      </article>
    );
  }

  return (
    <article className="bg-linear-to-br from-gray-400/40 border border-gray-500 flex flex-col md:flex-row p-4 rounded-xl md:col-span-2 gap-3">
      <div className="flex flex-col gap-3 lg:max-w-[55%] w-full">{content}</div>
      <div className="relative w-full lg:max-w-[400px] h-[200px] lg:h-auto">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </article>
  );
}
