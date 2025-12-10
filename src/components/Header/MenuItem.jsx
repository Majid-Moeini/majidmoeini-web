import Link from "next/link";

export function MenuItem({ title, address, mobile = false }) {
    return (
        <Link
            href={address}
            className={`text-gray-700 ${mobile
                ? "px-4 py-3  active:bg-primary active:border-r-[3px] active:border-primary"
                : "relative group inline-block hover:text-primary shrink-0"
                }
            `}
        >
            <span className="font-iransansxv font-light text-sm">{title}</span>

            {/* Underline */}

            {!mobile && (<span
                className="absolute left-0 w-full h-0.5 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 -bottom-2"
            ></span>)}
        </Link >
    );
} 