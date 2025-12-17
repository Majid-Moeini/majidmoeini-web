// import { FOOTER_LINKS } from "./data";
import { FOOTER_LINKS } from "@/components/Data/Footer/data"
import TrustBadge from "../TrustBadge";
import Link from "next/link";

export default function DesktopLinks() {
    return (
        <div className={"hidden md:grid bg-gray-100 rounded-2xl p-5 row-start-3 col-span-3 row-span-2 grid-cols-4 gap-4 items-start h-full"}>

            {FOOTER_LINKS.map((col, i) => (
                <div key={i}>
                    <h6 className="font-bold mb-2 pr-2 border-r-2 border-primary">
                        {col.title}
                    </h6>
                    <ul className="text-gray-700 text-sm space-y-1 list-none pr-3">
                        {col.items.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="hover:text-primary">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {/* TrustBadge */}
            <div className="hidden md:flex justify-center items-start">
                <TrustBadge src="/images/Enamad.png" alt="Enamad" />
            </div>

        </div>
    );
}
