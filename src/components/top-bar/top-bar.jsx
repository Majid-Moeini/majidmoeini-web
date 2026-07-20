"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function TopBar() {
  const [isScrooled, setIsScrolled] = useState(false);
  // Handle Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed text-white  w-full z-50 flex max-w-7xl mx-auto ${isScrooled ? "bg-gray-400/20" : ""}`}
    >
      <div className="flex gap-1.5 items-center p-2">
        <Image
          src={`${isScrooled ? "/images/Micon.svg" : "/images/usualM.svg"}`}
          alt="majid moeini icon"
          height={`${isScrooled ? 39 : 32}`}
          width={`${isScrooled ? 39 : 32}`}
          className={`duration-500 z-60 ${isScrooled ? "-rotate-45 " : "rotate-0"}`}
        />
        <Image
          src={"/images/ajid.svg"}
          alt="majid moeini icon"
          height={45}
          width={88}
          className={` duration-500 ${isScrooled ? "-translate-y-20 " : "translate-y-0"}`}
        />
      </div>

      <div>
        <a href="/">about</a>
      </div>
    </div>
  );
}
