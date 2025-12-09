"use client";

import Image from "next/image";
import IcapButton from "@/components/ui/icap-ui/IcapButton"

export default function FooterAppSection() {
    return (
        <>
            <div className="flex flex-col w-full pt-4">
                <div className="flex justify-center">
                    <Image
                        src="/images/Application.png"
                        width={319}
                        height={295}
                        alt="اپلیکیشن"
                        className="xl:-mt-24 w-[132px] h-[120px] md:w-auto md:max-w-full md:h-55"
                    />
                </div>

                <p className="hidden md:flex md:text-base text-center font-bold justify-center mt-2">
                    اپلیکیشن مکانیک یاب و عیب یاب
                </p>

                <div className="flex flex-col gap-2 md:m-6 m-4 mt-1">
                    <IcapButton href="#">دانلود از مایکت</IcapButton>
                    <IcapButton href="#">دانلود از بازار</IcapButton>
                </div>
            </div>
        </>
    );
}