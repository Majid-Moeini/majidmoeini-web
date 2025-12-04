"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <section className="icap-footer py-4">
            <div className="container mx-auto">

                {/* ردیف اصلی: ستون بزرگ راست + ستون عکس چپ */}
                <div className="flex flex-col md:flex-row md:gap-6">

                    {/* ستون بزرگ سمت راست */}
                    <div className="md:w-2/3 w-full order-1 md:order-1 flex flex-col gap-4">

                        {/* ردیف 1: لوگو و شبکه‌ها */}
                        <div className="flex justify-between items-center p-3">
                            <div className="flex items-center gap-3">
                                <Image src="/images/logo.png" width={100} height={40} alt="logo" />
                                <h5 className="font-bold m-0">آیکپ، سامانه دستیار هوشمند خودرو</h5>
                            </div>
                            <div className="flex gap-3">
                                <Image src="/images/instagram.png" width={24} height={24} alt="Instagram" />
                                <Image src="/images/send-2.png" width={24} height={24} alt="Send" />
                                <Image src="/images/whatsapp.png" width={24} height={24} alt="WhatsApp" />
                                <Image src="/images/facebook.png" width={24} height={24} alt="Facebook" />
                            </div>
                        </div>

                        {/* ردیف 2: ارتباط با ما */}
                        <div className="bg-gray-200 rounded-xl p-3 flex flex-col gap-3">
                            <h6 className="font-bold mb-2">ارتباط با ما</h6>
                            <div className="flex flex-wrap gap-4 overflow-x-auto">
                                <div className="flex items-center gap-2">
                                    <Image src="/images/sms-notification.png" width={20} height={20} alt="Email" />
                                    <span className="text-gray-700 text-sm">info@saatchi.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src="/images/call-calling.png" width={20} height={20} alt="Phone" />
                                    <span className="text-gray-700 text-sm">021-33434902</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-700 text-sm">09120123456</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src="/images/location.png" width={20} height={20} alt="Location" />
                                    <span className="text-gray-700 text-sm">
                                        تهران، خیابان آزادی، جنب پارک اوستا، پلاک ۱۵۶، ساختمان رایان خودرو
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ردیف 3: لینک‌ها و نماد اعتماد */}
                        <div className="bg-gray-200 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                            <div className="flex justify-center items-center">
                                <Image src="/images/image 1480.png" width={120} height={120} alt="Enamad" />
                            </div>
                        </div>
                    </div>

                    {/* ستون چپ با عکس */}
                    <div className="md:w-1/3 w-full order-2 md:order-2 flex justify-center md:justify-start md:items-end">
                        <div className="bg-gray-200 rounded-xl p-6 text-center md:text-left w-full">
                            <div className="relative">
                                <Image
                                    src="/images/Group 1261152893.png"
                                    width={300}
                                    height={300}
                                    alt="اپلیکیشن"
                                    className="-mt-24 md:mt-16 mx-auto md:mx-0"
                                />
                            </div>
                            <h6 className="font-bold mt-6 mb-3">
                                اپلیکیشن مکانیک یاب و عیب یاب
                            </h6>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="#"
                                    className="block w-56 bg-orange-500 text-white py-3 rounded-lg text-center"
                                >
                                    دانلود از مایکت
                                </a>
                                <a
                                    href="#"
                                    className="block w-56 bg-orange-500 text-white py-3 rounded-lg text-center"
                                >
                                    دانلود از بازار
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* نوار مشکی پایین */}
            <div className="bg-black text-center py-2 mt-4">
                <p className="text-white text-sm m-0">
                    تمامی حقوق برای فروشگاه ساعتچی محفوظ است.
                </p>
            </div>
        </section>
    );
}