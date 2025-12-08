import Image from "next/image";
import Link from "next/link";

export default function TrustBadge({
    src,
    alt,
    width = 120,
    height = 120,
    href = null,
    className = "md:w-34 ",

}) {
    const content = (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-lg ${className}`}
        />
    );

    return href ? (
        <Link href={href} target="_blank" rel="noopener noreferrer">
            {content}
        </Link>
    ) : (
        content
    );
}
