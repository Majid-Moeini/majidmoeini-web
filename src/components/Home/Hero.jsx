import Image from 'next/image'
import { Button } from '@/components/ui/button'

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

            <div className="relative flex flex-col lg:flex-row z-10 h-fit mt-[60px] md:mt-[200px] items-center lg:-translate-x-[15%]">

                {/* left content */}

                <div className="flex lg:w-[60%] lg:max-w-[500px] flex-col justify-center gap-4 h-full items-center lg:items-start lg:ml-auto mb-15 ">
                    <p className="inline-block rounded-3xl bg-white px-4 py-2 mb-3 text-xs text-gray-800 ">
                        اپلیکیشن کمک دست راننده و مکانیک
                    </p>

                    <h1 className="font-modam text-4xl font-black text-gray-800 px-3 md:px-0 text-center md:text-start leading-snug">
                        ایکپ، سامانه دستیار<br /> هوشمند خودرو
                    </h1>

                    <p className="text-2xl text-gray-800 py-2">
                        مکانیک یاب و عیب یاب
                    </p>

                    <div className=" flex gap-8 w-full h-[50px] justify-end">
                        <Button
                            asChild
                            className=" bg-white w-[200px] h-full hover:-translate-y-0.5 text-lg"
                        >
                            <a href="https://myket.ir" target="_blank">
                                <span className="flex items-center gap-2 text-[1.125rem]">
                                    دانلود از مایکت
                                    <Image
                                        src="/images/icons/Myket.png"
                                        width={22}
                                        height={22}
                                        alt="Myket"
                                    />
                                </span>
                            </a>
                        </Button>

                        <Button
                            asChild
                            className=" bg-white w-[200px] h-full hover:-translate-y-0.5 text-lg"
                        >
                            <a href="https://cafebazaar.ir" target="_blank">
                                <span className="flex items-center gap-2">
                                    دانلود از بازار
                                    <Image
                                        src="/images/icons/Bazar.png"
                                        width={20}
                                        height={21}
                                        alt="Bazar"
                                    />
                                </span>
                            </a>
                        </Button>
                    </div>
                </div>


                {/* right image */}
                <div className="relative min-w-4xl h-[335px] md:h-[435px] -translate-x-[8%] xl:-translate-x-[7%]">
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
    )
}
