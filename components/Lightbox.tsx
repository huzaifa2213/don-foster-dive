"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  // Portal straight into <body> so this modal is never nested inside an
  // ancestor with a CSS transform (e.g. our `.reveal` animation class) —
  // a transformed ancestor creates a new containing block for `position:
  // fixed` children, which was trapping the lightbox inside the slider's
  // small box instead of covering the full viewport.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, images.length, onClose, onIndexChange]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 md:p-10 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20 transition-colors"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index - 1 + images.length) % images.length);
            }}
            className="absolute left-3 md:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors"
          >
            ‹
          </button>
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index + 1) % images.length);
            }}
            className="absolute right-3 md:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors"
          >
            ›
          </button>
        </>
      )}

      <div className="relative h-[75vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <Image src={images[index]} alt="" fill sizes="90vw" className="object-contain" />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white">
          {index + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body
  );
}
