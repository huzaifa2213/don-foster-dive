"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "./Lightbox";

export default function Gallery({ images }: { images: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
      {images.map((src, i) => (
        <button
          key={src}
          type="button"
          onClick={() => setOpenIndex(i)}
          aria-label={`Open gallery photo ${i + 1} in lightbox`}
          className="group relative aspect-square overflow-hidden rounded-xl3 shadow-soft hover:shadow-card transition-all duration-300 reveal cursor-zoom-in"
        >
          <Image
            src={src}
            alt={`Gallery photo ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
        </button>
      ))}

      {openIndex !== null && (
        <Lightbox images={images} index={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
      )}
    </div>
  );
}
