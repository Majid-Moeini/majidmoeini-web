import React from 'react'
//import { toFarsiNumber } from "@/lib/utils";
//import Image from "next/image";
//import { Button } from '@/components/ui/button';
import Hero from '@/components/Home/Hero';

export const metadata = {
  title: "iCAP Home page",
  description: "iCAP Landing test",
};


export default function Page() {
  return (
    <main className='w-full'>
      <Hero />
      <div>
        hiii
      </div>

    </main>
  );
}

