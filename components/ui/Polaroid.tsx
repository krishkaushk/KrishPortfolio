"use client";

import Image from "next/image";

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function Polaroid({
  src,
  alt,
  caption,
  rotate = -2,
  className = "",
  sizes,
  priority,
}: PolaroidProps) {
  return (
    <div
      className={`bg-paper p-3 pb-4 shadow-[0_6px_24px_rgba(0,0,0,0.12)] rounded-[2px] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {caption && (
        <p className="font-hand text-lg text-text-primary text-center mt-2 leading-none">
          {caption}
        </p>
      )}
    </div>
  );
}
