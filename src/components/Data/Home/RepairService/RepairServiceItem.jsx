"use client";
import Image from "next/image";

export default function RepairServiceItem({
    title,
    description,
    image,
    selected,
    onSelect,
}) {
    const mobileSelect = "grayscale-0 border-2 border-amber-500 drop-shadow-xl drop-shadow-amber-500/20";
    const desktopSelect =
        "md:grayscale-0 md:border-gray-100 md:drop-shadow-xl md:drop-shadow-amber-500/20";

    const serviceItemClass = `
  flex-none w-[100px] md:flex-1 md:w-auto h-10 md:h-fit
  bg-gray-50 md:bg-white rounded-lg md:rounded-2xl
  flex items-center gap-0
  transition duration-130 grayscale mx-auto
  group
  mb-5 md:px-2m, 
  md:cursor-pointer
  md:gap-2 md:border
  md:hover:grayscale-0 md:hover:border-gray-100 md:hover:drop-shadow-xl md:hover:drop-shadow-amber-500/20
  ${selected ? `${mobileSelect} ${desktopSelect}` : "border border-gray-200 md:border-transparent"}
`;

    return (
        <div>
            <div className={`relative hidden md:flex z-20 w-4 h-4 rounded-4xl mr-12 translate-y-2 ${selected ? "bg-primary" : "bg-transparent"}`}></div>
            <div className={`${serviceItemClass}`} onClick={onSelect}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={667}
                    className="max-w-[50%] md:max-w-[40%]"
                />
                <div className={`flex flex-col md:max-w-[60%] text-sm md:text-lg md:font-medium  ${selected ? "text-amber-600 md:text-gray-900  " : "text-gray-400 md:text-gray-400  "
                    } md:group-hover:text-gray-900`}>
                    <span>
                        {title}
                    </span>
                    <p className="hidden lg:flex text-sm text-gray-500 ">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
