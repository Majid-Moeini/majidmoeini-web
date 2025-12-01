import React from 'react'
import { toFarsiNumber } from './layout'

export const metadata = {
  title: "iCAP Home page",
  description: "iCAP Landing test",
};


export default function Page() {
  return (
    <div className='font-modam font-extrabold text-2xl my-15'>
      با سلام این یک متن آزمایشی است
      <p>
        {toFarsiNumber('قیمت : 12,345')}
      </p>
    </div>

  )
}
