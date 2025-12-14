import React from 'react'
//import { toFarsiNumber } from "@/lib/utils";
import Image from "next/image";
import { Button } from '@/components/ui/button';

export const metadata = {
  title: "iCAP Home page",
  description: "iCAP Landing test",
};


export default function Page() {
  return (
    <div className='h-240 w-full' >

      {/* hearo */}
      <div className="relative h-190 w-full overflow-hidden mt-0">
        <Image
          src="/images/landing-bg.png"
          alt="hearo background"
          fill
          priority
          className="object-cover -z-10 "
        />

        <div className='absolute bottom-0 flex w-full h-fit md:flex-row-reverse items-end flex-wrap justify-between'>
          <div className='relative -translate-x-[350px]'>
            <Image
              src="/images/personPic.png"
              alt="icap-person"
              width={1024}
              height={535}
              className=""
            />
          </div>

          <div className='flex flex-col pb-50 ' >
            <p className='p-2 text-gray-800 text-xs bg-white rounded-3xl'>اپلیکیشن کمک دست راننده و مکانیک</p>
            <h1 className='text-gray-800 font-modam font-black text-4xl'>ایکپ، سامانه دستیار هوشمند خودرو</h1>
            <p className='text-gray-800 text-lg'>مکانیک یاب و عیب یاب</p>

            <div className='w-full flex justify-around'>
              <a href="https://bazar.ir">
                <Button className={`bg-white `}>
                  <p>دانلود از بازار</p>
                  <Image
                    src="/images/icons/Bazar.png"
                    width={20}
                    height={21}
                    alt="Myket-icon"
                  />
                </Button>
              </a>

              <a href="https://myket.ir">
                <Button className={`bg-white `}>
                  <p>دانلود از مایکت</p>
                  <Image
                    src="/images/icons/Myket.png"
                    width={22}
                    height={22}
                    alt="Bazar-icon"
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}
