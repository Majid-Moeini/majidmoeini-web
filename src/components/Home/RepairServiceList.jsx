import React from "react";
import Image from "next/image";

export default function RepairServiceList() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10">
      {/* scrollable boxes */}
      <div className="overflow-x-auto scrollbar-hide h-fit pb-10 md:px-4">
        <div className="flex gap-6 w-max md:w-full mx-auto">
          <div className="flex-none w-[100px] md:flex-1 md:w-auto md:h-fit h-10 bg-gray-50 md:bg-white rounded-2xl flex items-center justify-start hover:drop-shadow-xl hover:drop-shadow-amber-500/20 grayscale hover:grayscale-0 border border-transparent hover:border-gray-100 transition duration-100 p-2">


            <Image
              src="/images/Ido.png"
              width={355}
              height={222}
              alt="R-dip diagnose"
              className="max-w-[20%] md:max-w-[40%] m-2"
            />

            <div className="flex flex-col md:max-w-[60%] justify-start">
              <span className="text-lg text-gray-900">آی دو</span>
              <p className="hidden lg:flex text-sm text-gray-500">این یک متن آرمایشی برای آیدو است</p>
            </div>
          </div>
          <div className="flex-none w-[100px] md:flex-1 md:w-auto md:h-fit h-10 bg-gray-50 md:bg-white rounded-2xl flex items-center justify-start hover:drop-shadow-xl hover:drop-shadow-amber-500/20 grayscale hover:grayscale-0 border border-transparent hover:border-gray-100 transition duration-100 p-2">

            <Image
              src="/images/Ichek.png"
              width={355}
              height={222}
              alt="R-dip diagnose"
              className="max-w-[20%] md:max-w-[40%] m-2"
            />

            <div className="flex flex-col md:max-w-[60%] justify-start">
              <span className="text-lg text-gray-900">آی دو</span>
              <p className="hidden lg:flex text-sm text-gray-500">این یک متن آرمایشی برای آیدو است</p>
            </div>
          </div>
          <div className="flex-none w-[100px] md:flex-1 md:w-auto md:h-fit h-10 bg-gray-50 md:bg-white rounded-2xl flex items-center justify-start hover:drop-shadow-xl hover:drop-shadow-amber-500/20 grayscale hover:grayscale-0 border border-transparent hover:border-gray-100 transition duration-100 p-2">

            <Image
              src="/images/Idiag.png"
              width={355}
              height={222}
              alt="R-dip diagnose"
              className="max-w-[20%] md:max-w-[35%] m-2"
            />

            <div className="flex flex-col md:max-w-[60%] justify-start">
              <span className="text-lg text-gray-900">آی دو</span>
              <p className="hidden lg:flex text-sm text-gray-500">این یک متن آرمایشی برای آیدو است</p>
            </div>
          </div>
          <div className="flex-none w-[100px] md:flex-1 md:w-auto md:h-fit h-10 bg-gray-50 md:bg-white rounded-2xl flex items-center justify-start hover:drop-shadow-xl hover:drop-shadow-amber-500/20 grayscale hover:grayscale-0 border border-transparent hover:border-gray-100 transition duration-100 p-2">

            <Image
              src="/images/Iban.png"
              width={355}
              height={222}
              alt="R-dip diagnose"
              className="max-w-[20%] md:max-w-[35%] m-2"
            />

            <div className="flex flex-col md:max-w-[60%] justify-start">
              <span className="text-lg text-gray-900">آی دو</span>
              <p className="hidden lg:flex text-sm text-gray-500">این یک متن آرمایشی برای آیدو است</p>
            </div>
          </div>
        </div>
      </div>


      {/* monitor box */}
      <div className="flex flex-col md:flex-row ">
        <div className="w-1/3">
          <Image
            src="/images/Iban.png"
            width={355}
            height={222}
            alt="R-dip diagnose"
            className=" md:max-w-[80%] m-2"
          />
        </div>

        <div className="w-2/3">
          <p>آچیک با هدف ارائه خدمات خودرویی به‌صورت جامع و سریع ایجاد شده است. کاربران می‌توانند با نصب اپلیکیشن آچیک، خدمات مورد نیاز خود را در محل و به‌صورت آنلاین ثبت کنند. کارشناسان آچیک در کوتاه‌ترین زمان ممکن در محل حضور یافته و خدمت درخواستی را انجام می‌دهند.خدمات آچیک شامل سرویس‌های دوره‌ای خودرو، تعویض روغن، شست‌وشوی خودرو، تعویض باتری، تعویض لنت، بازدید فنی خودرو، امداد سیار و سایر خدمات خودرویی است.آچیک با بهره‌مندی از کارشناسان مجرب، کیفیت بالای خدمات و قیمت‌های رقابتی، بهترین تجربه از خدمات خودرویی را برای مشتریان خود فراهم می‌کند.هدف آچیک، صرفه‌جویی در زمان، افزایش آسایش و رضایت مشتریان است.</p>
        </div>
      </div>

      {/* action btn */}
      <div>

      </div>
    </div>
  );
}
