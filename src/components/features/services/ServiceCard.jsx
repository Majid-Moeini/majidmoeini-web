"use client";

import { useRef } from "react";
import Image from "next/image";

import { GaugeIcon } from "@/components/ui/gauge";
import { AccessibilityIcon } from "@/components/ui/accessibility";
import { LayoutPanelTopIcon } from "@/components/ui/layout-panel-top";
import { BotIcon } from "@/components/ui/bot";
import { SearchIcon } from "@/components/ui/search";

const iconMap = {
  Gauge: GaugeIcon,
  Accessibility: AccessibilityIcon,
  LayoutPanelTop: LayoutPanelTopIcon,
  Bot: BotIcon,
  Search: SearchIcon,
};

export default function ServiceCard({ service, featured = false }) {
  const iconRef = useRef(null);
  const Icon = service.icon ? iconMap[service.icon] : null;
  const hasImage = featured && service.image;

  if (service.icon && !Icon) {
    console.warn("Icon not found:", service.icon);
  }

  const cardClass =
    "bg-linear-to-br from-gray-400/40 border border-gray-500 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";

  const handlers = {
    onMouseEnter: () => iconRef.current?.startAnimation(),
    onMouseLeave: () => iconRef.current?.stopAnimation(),
  };

  const content = (
    <>
      {Icon && (
        <div className="bg-white text-black p-2 rounded-lg w-fit">
          <Icon ref={iconRef} size={24} />
        </div>
      )}
      <p className="text-white font-semibold font-modam text-base">
        {service.title}
      </p>
      <p className="text-gray-100 text-sm">{service.description}</p>
    </>
  );

  if (!hasImage) {
    return (
      <article {...handlers} className={`${cardClass} flex flex-col gap-3`}>
        {content}
      </article>
    );
  }

  return (
    <article
      {...handlers}
      className={`${cardClass} flex flex-col md:flex-row md:col-span-2 gap-3`}
    >
      <div className="flex flex-col gap-3 lg:max-w-[55%] w-full">{content}</div>
      <div className="relative w-full lg:max-w-[400px] h-[200px] lg:h-auto">
        <Image
          src={service.image}
          alt={service.imageAlt ?? service.title}
          fill
          sizes="(min-width: 1024px) 400px, 100vw"
          className="object-cover rounded-xl"
        />
      </div>
    </article>
  );
}
