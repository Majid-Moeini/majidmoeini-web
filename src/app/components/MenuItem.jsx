import Link from "next/link";

export default function MenuItem({ title, address }) {
    return (
        <Link
            href={address}
            className="relative group inline-block text-gray-700 hover:text-primary"
        >
            <p className="font-iransansxv font-light text-sm">{title}</p>

            {/* Underline */}
            <span
                className="
          absolute left-0 w-full h-0.5 bg-primary
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
                style={{ bottom: "-8px" }}
            ></span>
        </Link>
    );
}
