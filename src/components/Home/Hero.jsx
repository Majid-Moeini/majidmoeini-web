import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative  h-fit overflow-hidden">
            {/* background */}
            <Image
                src="/images/hero-bg.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center items-center"
            />

            {/* content */}
            <div className="relative flex flex-col lg:flex-row z-10 h-full mt-20 md:mt-50 items-center">

                {/* left content */}
                <div className="flex flex-1 lg:w-[40%] flex-col justify-center gap-4 lg:mr-[14%] mb-8 h-full items-center lg:items-start ">
                    <p className="inline-block rounded-3xl bg-white px-4 py-2 mb-3 text-xs text-gray-800 ">
                        اپلیکیشن کمک دست راننده و مکانیک
                    </p>

                    <h1 className="font-modam text-4xl font-black text-gray-800 px-3 md:px-0 text-center md:text-start">
                        ایکپ، سامانه دستیار هوشمند خودرو
                    </h1>

                    <p className="text-2xl text-gray-800 py-2">
                        مکانیک یاب و عیب یاب
                    </p>

                    <div className="mt-6 flex gap-6 ">
                        <Button
                            asChild
                            className="w-40 bg-white"
                        >
                            <a href="https://myket.ir" target="_blank">
                                <span className="flex items-center gap-2">
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
                            className="w-40 bg-white"
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
                <div className="flex flex-1 w-full h-fit mr-auto flex-col justify-end ">
                    <Image
                        src="/images/personPic.png"
                        alt="icap-person"
                        width={1024}
                        height={535}
                        priority
                        className=" lg:-translate-x-[35%] "
                    />
                </div>
            </div>
        </section>
    )
}
