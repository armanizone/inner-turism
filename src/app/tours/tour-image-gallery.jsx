"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function TourImageGallery({ images, name }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        <button
          onClick={() => openLightbox(0)}
          className="group relative col-span-2 row-span-2 cursor-pointer overflow-hidden"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={images[0]}
              alt={`${name} - main`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
          </div>
        </button>

        {images.slice(1, 5).map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i + 1)}
            className="group relative cursor-pointer overflow-hidden"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={img}
                alt={`${name} - ${i + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
              {i === 3 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/40">
                  <span className="text-lg font-semibold text-secondary">
                    +{images.length - 5}
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/20 text-secondary transition-colors hover:bg-background/40"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/20 text-secondary transition-colors hover:bg-background/40"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative mx-16 h-[75vh] w-full max-w-5xl">
            <Image
              src={images[activeIndex]}
              alt={`${name} - ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <button
            onClick={goNext}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/20 text-secondary transition-colors hover:bg-background/40"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-6 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-secondary"
                    : "bg-secondary/40 hover:bg-secondary/60"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
