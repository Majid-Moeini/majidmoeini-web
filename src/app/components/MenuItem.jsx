import Link from "next/link";


export default function MenuItem({ title, address }) {
    return (
        <Link href={address} className="text-gray-700 hover:text-primary">
            <p className="font-iransansxv font-light text-sm">{title}</p>
        </Link>
    )
}
