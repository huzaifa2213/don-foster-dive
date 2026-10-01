"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

type Props = {
  images: string[];
  alt?: string;
  fadeFrom?: "white" | "mist";
};

// Continuous, autoplaying, looping image slider — avoids the awkward
// orphaned-last-row problem a fixed grid gets with 4 or 5 images. The image
// list is duplicated once so the CSS marquee animation loops seamlessly;
// hovering pauses it. Click any image to open it in a lightbox.
export default function GallerySlider({ images, alt = "Gallery photo", fadeFrom = "white" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const loop = [...images, ...images];
  const fadeClass = fadeFrom === "mist" ? "from-mist" : "from-white";

  return (
    <div className="relative overflow-hidden reveal" style={{ ["--marquee-duration" as string]: `${images.length * 5}s` }}>
      <div className="marquee-track flex w-max gap-5">
        {loop.map((src, i) => {
          const realIndex = i % images.length;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIndex(realIndex)}
              aria-label={`Open ${alt} ${realIndex + 1} in lightbox`}
              className="relative h-64 w-64 md:h-80 md:w-80 shrink-0 overflow-hidden rounded-xl3 shadow-soft cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`${alt} ${realIndex + 1}`}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </button>
          );
        })}
      </div>

      <div className={`pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r ${fadeClass} to-transparent`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l ${fadeClass} to-transparent`} />

      {openIndex !== null && (
        <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
      )}
    </div>
  );
}
