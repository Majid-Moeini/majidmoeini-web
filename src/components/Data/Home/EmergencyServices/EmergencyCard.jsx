import Image from "next/image";

export default function EmergencyCard({ title, subtitle, description, image }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-full md:w-[420px]">
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            <h4 className="text-lg font-bold mb-2">
                {title}
            </h4>

            <p className="text-gray-500 text-sm leading-7 line-clamp-5 pb-3">{subtitle}</p>

            <p className="text-gray-500 text-sm leading-7 line-clamp-5 text-justify">
                {description}
            </p>
        </div>
    );
}
