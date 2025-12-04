// components/ui/IcapButton.jsx
import { Button } from "@/components/ui/button";


export default function CustomButton({
    children,                                     // متن دکمه
    color = "bg-primary",                        // رنگ اصلی دکمه
    hover = "hover:bg-blue-700",                  // رنگ هاور
    fullWidth = false,                            // آیا دکمه کل عرض رو بگیره
    width,                                        // طول ثابت دلخواه
    height,                                       // ارتفاع دلخواه
    mobileSize = "sm",                            // اندازه دکمه در موبایل
    desktopSize = "default",                      // اندازه دکمه در دسکتاپ
    className = "",                               // کلاس اضافه
    ...props
}) {
    return (
        <Button
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
            <span className={`block md:inline-block`}>
                {children}
            </span>
        </Button>
    );
}
