import React from 'react'
import { toFarsiNumber } from './layout'
import Image from "next/image";

export const metadata = {
  title: "iCAP Home page",
  description: "iCAP Landing test",
};


export default function Page() {
  return (
    <div className='font-modam font-extrabold text-2xl my-15'>
      <Image
        src="/images/landing-bg.png"
        width={4096}
        height={2157}
        alt="hearo"
        className="absolute top-0 w-full -z-20"
      />

      <p>
        {toFarsiNumber('قیمت : 12,345')}
      </p>
    </div>

  )
}
