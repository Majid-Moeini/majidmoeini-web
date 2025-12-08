"use client";
import Image from "next/image";
import { toFarsiNumber } from "../../app/layout";

import FacebookIcon from "../icons/FacebookIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import TelegramIcon from "../icons/TelegramIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FooterAppSection from "./FooterAppSection";
import TrustBadge from "./TrustBadge";
import FooterLinks from "./FooterLinks/FooterLinks";


export default function Footer() {
    return (
        <section className="flex flex-col items-center mt-auto pt-5">
            {/* div اصلی */}

            <div className="container flex flex-col md:grid lg:grid-cols-4 lg:grid-rows-4 md:gap-y-4 gap-x-6 md:py-3 lg:w-[1200]">

                <div className="rounded-2xl row-start-1 col-span-3 flex justify-center md:items-end md:justify-between md:border-0 md:pb-0 border-gray-200 border-b-2 pb-5 mt-1">
                    <div className="flex gap-3 flex-col md:flex-row items-center">
                        <Image src="/images/iCAP-Logo.png" width={190} height={53} alt="icap-logo" className="md:w-30 md:h-8 w-22 h-6 " />
                        <h5 className="font-bold m-0 text-base md:text-xl">آیکپ، سامانه دستیار هوشمند خودرو</h5>
                    </div>

                    <div className="hidden md:flex h-fit flex-row-reverse gap-2">
                        <a href="#" className="p-1 text-gray-400 ">
                            <FacebookIcon />
                        </a>
                        <a href="" className="p-1 text-gray-400">
                            <WhatsappIcon />
                        </a>
                        <a href="" className="p-1 text-gray-400">
                            <TelegramIcon />
                        </a>
                        <a href="" className="p-1 text-gray-400">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>

                <div className="md:bg-gray-100 rounded-2xl p-3 pt-4 md:pt-3 row-start-2 col-span-3">
                    <p className="font-bold mb-2">ارتباط با ما</p>

                    {/* mail  */}
                    <div className="flex flex-col pr-2 pt-1 lg:flex-row lg:flex-wrap justify-start gap-4 md:gap-6">
                        <a href="" className="flex items-center gap-3">
                            <Image src="/images/icons/sms-tracking.png"
                                width={24}
                                height={24}
                                alt="sms-tracking"
                                className="w-5 h-5" />
                            <p className="text-sm md:text-xs text-gray-800 hover:text-primary">info@r-icap.com</p>
                        </a>
                        {/* call  */}
                        <a href="" className="flex items-center gap-3">
                            <Image src="/images/icons/call-calling.png"
                                width={24}
                                height={24}
                                alt="sms-tracking"
                                className="w-5 h-5" />
                            <p className="text-sm md:text-xs text-gray-800 hover:text-primary">{toFarsiNumber('0912346789')}</p>
                            <p className="text-sm md:text-xs text-gray-800 hover:text-primary">{toFarsiNumber('09301234567')}</p>
                        </a>
                        {/* addres  */}
                        <a href="" className="flex items-center gap-3">
                            <Image src="/images/icons/location.png"
                                width={24}
                                height={24}
                                alt="sms-tracking"
                                className="w-5 h-5" />
                            <p className="text-sm md:text-xs text-gray-800 hover:text-primary">  تهران، خیابان آزادی، جنب پارک اوستا، پلاک ۱۵۶، ساختمان رایان خودرو</p>
                        </a>

                    </div>

                    <div className="md:hidden flex h-fit flex-row-reverse justify-between px-2 pt-4">
                        <a href="#" className="p-1 text-gray-600 ">
                            <FacebookIcon />
                        </a>
                        <a href="" className="p-1 text-gray-600">
                            <WhatsappIcon />
                        </a>
                        <a href="" className="p-1 text-gray-600">
                            <TelegramIcon />
                        </a>
                        <a href="" className="p-1 text-gray-600">
                            <InstagramIcon />
                        </a>
                    </div>

                </div>

                <FooterLinks />

                <div className="bg-gray-200 md:rounded-2xl md:row-span-3 md:col-start-4 md:row-start-2 w-full flex justify-center">

                    <FooterAppSection />

                    {/* فقط موبایل بدون هیچ کلاس اضافی */}
                    <div className="md:hidden flex w-[60%]  justify-center ">
                        <TrustBadge src="/images/Enamad.png" alt="Enamad" className="w-auto h-auto py-8" />
                    </div>
                </div>


            </div>

            {/* نوار مشکی پایین */}
            <div className="bg-black text-center py-2 md:mt-4 w-full">
                <p className="text-white text-sm m-0">
                    تمامی حقوق برای فروشگاه ساعتچی محفوظ است.
                </p>
            </div>

        </section >
    );
}