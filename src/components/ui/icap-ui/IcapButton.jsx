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
    className = "",
    ...props
}) {

    // const Wrapper = href ? Link : 'div';
    const Wrapper = href ? Link : React.Fragment;

    return (
        <Button
            asChild={!!href}
            size={desktopSize}
            className={`
            ${color} ${hover} 
            ${fullWidth ? "w-full" : width ? `w-[${width}px]` : ""} 
            ${height ? `h-[${height}px]` : ""} 
            rounded-lg px-4 py-2 text-white font-medium transition-all duration-200 flex items-center justify-center text-sm ease hover:scale-[1.02] text-center w-full
            ${className}
            `}
            {...props}
        >
            <Wrapper href={href}>
                {children}
            </Wrapper>

        </Button>
    );

}
