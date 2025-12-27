import React from "react";
//import { toFarsiNumber } from "@/lib/utils";
//import Image from "next/image";
//import { Button } from '@/components/ui/button';
import Hero from "@/components/Home/Hero";
import RepairService from "@/components/Home/RepairService";
import RdipCard from "@/components/Home/RdipCard";
import PaidServices from "@/components/Home/PaidServices";
import EmergencyServices from "@/components/Home/EmergencyServices";
import LatestArticles from "@/components/Home/LatestArticles";
import FAQ from "@/components/Home/FAQ";

export const metadata = {
  title: "iCAP Home page",
  description: "iCAP Landing test",
};

export default function Page() {
  return (
    <main className="w-full">
      <Hero />

      {/* body */}
      <div className="max-w-7xl mx-auto">
        <RdipCard />
        <RepairService />
        <EmergencyServices />
        <PaidServices />
        <LatestArticles />
        <FAQ />
      </div>
    </main>
  );
}
