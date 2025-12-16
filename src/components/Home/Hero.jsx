import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-fit overflow-hidden">
      {/* background */}
      <Image
        src="/images/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center items-center"
      />

      {/* content */}

      <div className="relative flex flex-col lg:flex-row z-10 h-fit mt-20 md:mt-[200px] items-center lg:-translate-x-[150px] xl:-translate-x-[200px]">
        <div className="flex lg:w-[60%] lg:max-w-[700px] flex-col justify-center gap-2 h-full items-center lg:items-start lg:ml-auto md:mb-15 mb-4 ">
          <p className="inline-block rounded-3xl bg-white px-4 py-2 mb-3 text-sm md:text-base text-gray-800 ">
            اپلیکیشن کمک دست راننده و مکانیک
          </p>

          <h1 className="font-modam text-2xl md:text-5xl font-black text-gray-800 px-3 md:px-0 text-center lg:text-start leading-snug md:max-w-[550px]">
            ایکپ، سامانه دستیار هوشمند خودرو
          </h1>

          <p className="text-base md:text-3xl text-gray-800 py-2">
            مکانیک یاب و عیب یاب
          </p>

          <div className=" flex gap-7 md:gap-8 w-full h-[50px] justify-center lg:justify-end mt-6 ">
            <Button
              asChild
              className=" bg-white w-[150px] md:w-[212px] h-full hover:-translate-y-0.5 rounded-xl"
            >
              <a href="https://myket.ir" target="_blank">
                <span className="flex items-center gap-3 text-sm md:text-lg">
                  دانلود از مایکت
                  <Image
                    src="/images/icons/Myket.png"
                    width={22}
                    height={22}
                    alt="Myket"
                    className="md:size-6 size-4"
                  />
                </span>
              </a>
            </Button>

            <Button
              asChild
              className=" bg-white w-[150px] md:w-[212px] h-full hover:-translate-y-0.5 rounded-xl"
            >
              <a href="https://cafebazaar.ir" target="_blank">
                <span className="flex items-center gap-3 text-sm md:text-lg rounded-4xl">
                  دانلود از بازار
                  <Image
                    src="/images/icons/Bazar.png"
                    width={20}
                    height={21}
                    alt="Bazar"
                    className="md:size-6 size-4"
                  />
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* right image */}
        <div className="relative min-w-4xl h-[335px] md:h-[435px] -translate-x-[9%] md:-translate-x-[11%] lg:-translate-x-[10%] ">
          <Image
            src="/images/personPic.png"
            alt="icap-person"
            fill
            priority
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
