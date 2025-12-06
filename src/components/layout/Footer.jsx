"use client";
import Image from "next/image";
import IcapButton from "@/components/ui/IcapButton"
import { toFarsiNumber } from "../../app/layout";


export default function Footer() {
    return (
        <section className="bottom-0 w-full">
            {/* div اصلی */}
            <div className="flex items-center gap-3">
                <Image src="/images/logo.png" width={100} height={40} alt="logo" />
                <h5 className="font-bold m-0">آیکپ، سامانه دستیار هوشمند خودرو</h5>
            </div>

            <div className="flex container  mx-auto md:w-[1280] gap-6 justify-center">


                {/* div Right */}
                <div className="flex flex-col gap-4 my-0">
                    {/* div Right 2 */}

                    <div className="bg-gray-100 rounded-2xl p-3 flex flex-col gap-3">
                        {/* contact us title  */}
                        <p className="font-bold mb-2">ارتباط با ما</p>

                        {/* mail  */}
                        <div className="flex flex-wrap justify-around gap-5">
                            <a href="" className="flex items-center gap-3">
                                <Image src="/images/icons/sms-tracking.png"
                                    width={24}
                                    height={24}
                                    alt="sms-tracking"
                                    className="w-6 h-6" />
                                <p className="text-xs font-bold text-gray-800 hover:text-primary">info@r-icap.com</p>
                            </a>
                            {/* call  */}
                            <a href="" className="flex items-center gap-3">
                                <Image src="/images/icons/call-calling.png"
                                    width={24}
                                    height={24}
                                    alt="sms-tracking"
                                    className="w-6 h-6" />
                                <p className="text-xs font-bold text-gray-800 hover:text-primary">{toFarsiNumber('09301234567')}</p>
                                <p className="text-xs font-bold text-gray-800 hover:text-primary">{toFarsiNumber('09301234567')}</p>
                            </a>
                            {/* addres  */}
                            <a href="" className="flex items-center gap-3">
                                <Image src="/images/icons/location.png"
                                    width={24}
                                    height={24}
                                    alt="sms-tracking"
                                    className="w-6 h-6" />
                                <p className="text-xs font-bold text-gray-800 hover:text-primary">  تهران، خیابان آزادی، جنب پارک اوستا، پلاک ۱۵۶، ساختمان رایان خودرو</p>
                            </a>

                        </div>

                    </div>

                    {/* div Right 3 */}
                    <div className="bg-gray-100 rounded-2xl p-4 items-center h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <h6 className="font-bold mb-2">خرید از فروشگاه</h6>
                            <ul className="text-gray-700 text-sm space-y-1 list-none p-0 m-0">
                                <li>راهنمای خرید</li>
                                <li>زمان تحویل و ارسال</li>
                                <li>شرایط تعویض</li>
                                <li>سوالات متداول</li>
                                <li>ویترین</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold mb-2">دسترسی سریع</h6>
                            <ul className="text-gray-700 text-sm space-y-1 list-none p-0 m-0">
                                <li>راهنمای خرید</li>
                                <li>زمان تحویل و ارسال</li>
                                <li>شرایط تعویض</li>
                                <li>سوالات متداول</li>
                                <li>ویترین</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-bold mb-2">پشتیبانی</h6>
                            <ul className="text-gray-700 text-sm space-y-1 list-none p-0 m-0">
                                <li>راهنمای خرید</li>
                                <li>زمان تحویل و ارسال</li>
                                <li>شرایط تعویض</li>
                                <li>سوالات متداول</li>
                                <li>ویترین</li>
                            </ul>
                        </div>

                        {/* E-Namad  */}

                        <div >   {/*className="flex justify-center items-center" */}
                            <Image src="/images/Enamad.png"
                                width={120}
                                height={120}
                                alt="Enamad" />
                        </div>
                    </div>
                </div>

                {/* div Left */}
                <div className="hidden md:flex shrink-0 flex-col h-full mt-auto bg-gray-100 rounded-2xl justify-end} ">
                    {/* mobile pic */}
                    <div className="">
                        <Image
                            src="/images/Application.png"
                            width={300}
                            height={300}
                            alt="اپلیکیشن"
                            className="md:-mt-24 "
                        />
                    </div>

                    {/* text  */}
                    <p className="font-bold text-center">اپلیکیشن مکانیک یاب و عیب یاب</p>
                    <div className="flex flex-col gap-2 m-6">
                        {/* btn 1 */}
                        <IcapButton href="#">دانلود از مایکت</IcapButton>
                        {/* btn 2 */}
                        <IcapButton href="#">دانلود از بازار</IcapButton>
                    </div>
                </div>
            </div>

            {/* نوار مشکی پایین */}
            <div className="bg-black text-center py-2 mt-4 w-full">
                <p className="text-white text-sm m-0">
                    تمامی حقوق برای فروشگاه ساعتچی محفوظ است.
                </p>
            </div>

        </section >
    );
}