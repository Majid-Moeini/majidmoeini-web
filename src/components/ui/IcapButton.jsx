// components/ui/IcapButton.jsx
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function CustomButton({
    children,
    href,
    color = "bg-primary",
    hover = "hover:bg-primary",
    fullWidth = false,
    width,
    height,
    mobileSize = "sm",  //  Mobile Size
    desktopSize = "default",    //  Desktop size
    className = "transition-transform duration-150 ease hover:scale-[1.02] text-center",    //  animation
    ...props
}) {

    const Wrapper = href ? Link : 'div';

    return (
        <Button
            asChild={!!href}
            size={desktopSize}
            className={`
            ${color} ${hover} 
            ${fullWidth ? "w-full" : width ? `w-[${width}px]` : ""} 
            ${height ? `h-[${height}px]` : ""} 
            rounded-lg px-4 py-2 text-white font-medium transition-all duration-200
            ${className}
            `}
            {...props}
        >
            <Wrapper href={href} className={`block md:inline-block`}>
                {children}
            </Wrapper>
        </Button>
    );

}
