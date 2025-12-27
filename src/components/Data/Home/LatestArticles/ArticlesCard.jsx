import Image from "next/image";
import Link from "next/link";

export default function ArticlesCard({ article }) {
    if (!article) return null;

    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-white rounded-2xl overflow-hidden md:border border-gray-200 hover:shadow-md transition">

                {/* Image */}
                <div className="relative w-full h-[220px]">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-gray-800 leading-6">
                        {article.title}
                    </h4>

                    <span className="text-sm text-gray-400">
                        {article.date} · {article.readTime}
                    </span>

                    <p className="text-sm text-gray-600 line-clamp-2 text-center md:text-start">
                        {article.excerpt}
                    </p>

                    <Link
                        href={article.link}
                        // md:text-primary
                        className="text-sm font-medium text-green-800 md:text-[#FF680A] hover:text-shadow-2xs w-fit mr-auto transition-all duration-150"
                    >
                        ادامه مطلب
                    </Link>
                </div>
            </div>
        </div>
    );
}
