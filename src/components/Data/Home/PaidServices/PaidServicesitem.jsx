"use client";
import { useEffect, useRef, useState } from "react";

export default function PaidServicesItem({ title, description, Icon, mt = "", delay = 0 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio > 0.7) {
                    setInView(true);
                } else if (entry.intersectionRatio < 0.05) {
                    setInView(false);
                }
            },
            { threshold: Array.from({ length: 50 }, (_, i) => i / 50) }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`
                flex flex-col w-full items-start md:items-center gap-4 p-3
                bg-white rounded-xl shadow-md border border-gray-100 min-w-[190px] mb-18
                transition-all duration-500 ease-out transform
                ${inView ? mt : "xl:translate-y-20"}
            `}
        >
            {/* icon */}
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-2xl shadow-amber-500/30 border border-amber-500/30 -translate-y-[65%] bg-white mx-auto">
                {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8" />}
            </div>

            {/* description */}
            <div className="flex-1 flex flex-col justify-start items-center -translate-y-3">
                <h5 className="font-bold text-base md:text-base mb-2">{title}</h5>
                <p className="text-gray-600 text-sm md:text-base text-center">{description}</p>
            </div>
        </div>
    );
}
