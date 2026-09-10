"use client";

// import {
//   Apple,
//   AtomIcon,
//   BadgeCent,
//   BadgeInfo,
//   BadgeX,
//   Banana,
//   Bolt,
// } from "lucide-react";
import { useEffect, useState } from "react";

// import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import AnimatedAvatar from "@/components/animated-avatar";
import Image from "next/image";

export const CenterIcon = <AnimatedAvatar />;

export const LucideIcons = [
  // <Banana key="banana" className={cn("h-12 w-12", iconColors[0])} />,
  // <Bolt key="bolt" className={cn("h-12 w-12", iconColors[1])} />,
  // <BadgeX key="badge-x" className={cn("h-12 w-12", iconColors[2])} />,
  // <BadgeCent key="badge-cent" className={cn("h-12 w-12", iconColors[3])} />,
  // <BadgeInfo key="badge-info" className={cn("h-12 w-12", iconColors[4])} />,
  // <Apple key="apple" className={cn("h-12 w-12", iconColors[5])} />,

  <Image
    key="bolt"
    src="/images/avatar-icons/js.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,

  <Image
    key="bolt"
    src="/images/avatar-icons/clowd.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/nextjs.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/css.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/ts.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/react.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/tailwind.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/html.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
  <Image
    key="bolt"
    src="/images/avatar-icons/script.png"
    alt="bolt"
    width={48}
    height={48}
    className="h-12 w-12"
  />,
];

/**
 * @typedef {Object} OrbitingItems3DProps
 * @property {number} radiusX - The radius of the ellipse on X-axis in percentage, relative to the container.
 * @property {number} radiusY - The radius of the ellipse on Y-axis in percentage, relative to the container.
 * @property {number} tiltAngle - The angle at which ellipse is tilted to x-axis.
 * @property {number} duration - The time taken for the revolution around the center element.
 * @property {React.ReactNode[]} items - The items to orbit around the center of the parent element.
 * @property {string} [backgroundClassName] - Class name for the background element.
 * @property {string} [containerClassName] - Class name for the container element.
 * @property {string} [className] - Additional classes for the item container.
 */

function OrbitingItem({
  index,
  radiusX,
  radiusY,
  totalItems,
  tiltAngle,
  duration,
  children,
}) {
  const angleStep = 360 / totalItems;
  const [angle, setAngle] = useState(index * angleStep);

  useEffect(() => {
    const animation = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + 1) % 360);
    }, duration);
    return () => clearInterval(animation);
  }, [duration]);

  const radians = (angle * Math.PI) / 180;
  const x = radiusX * Math.cos(radians);
  const y = radiusY * Math.sin(radians);

  const tiltRadians = (tiltAngle * Math.PI) / 180;
  const xTilted = x * Math.cos(tiltRadians) - y * Math.sin(tiltRadians);
  const yTilted = x * Math.sin(tiltRadians) + y * Math.cos(tiltRadians);
  const zIndex = angle > 180 ? 0 : 3;
  const scale = angle < 180 ? 1.2 : 0.9;

  return (
    <div
      // className="absolute flex size-20 bg-transparent items-center justify-center shadow-2xl shadow-purple-500/20  transition-transform duration-500 ease-out"
      className="absolute flex size-15 transition-transform duration-500 ease-out"
      style={{
        left: `${45 + xTilted}%`,
        top: `${65 + yTilted}%`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex,
        transition: "transform 0.8s ease-in-out",
      }}
    >
      <div className="transition-transform ease-linear direction-reverse repeat-infinite">
        {children}
      </div>
    </div>
  );
}

/**
 * @param {OrbitingItems3DProps} props
 */
export default function OrbitingItems3D({
  radiusX = 70,
  radiusY = -25,
  tiltAngle = 360 - 200,
  duration = 60,
  items = LucideIcons,
  backgroundClassName,
  containerClassName,
  className,
}) {
  return (
    <div
      className={cn(
        "full-content group flex items-center justify-center py-32",
        containerClassName,
      )}
    >
      {/* <div
        className={cn(
          "absolute inset-0 -z-10 h-full w-full items-center bg-linear-to-br from-slate-950 via-purple-950 to-slate-900",
          backgroundClassName,
        )}
      /> */}
      <div
        className={cn(
          "relative flex h-64 w-64 items-center justify-center ease-linear repeat-infinite",
          className,
        )}
      >
        {CenterIcon}
        {items.map((item, index) => (
          <OrbitingItem
            key={index}
            index={index}
            radiusX={radiusX}
            radiusY={radiusY}
            totalItems={items.length}
            tiltAngle={tiltAngle}
            duration={duration}
          >
            {item}
          </OrbitingItem>
        ))}
      </div>
    </div>
  );
}
