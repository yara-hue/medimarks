"use client";

import { useState, useCallback } from "react";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  const selectedSrc = images[selectedIndex];
  const hasMultiple = images.length > 1;

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!zoomed) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPos({ x, y });
    },
    [zoomed],
  );

  function ArrowBtn({ dir }: { dir: "prev" | "next" }) {
    const onClick = dir === "prev" ? prev : next;
    const pos = dir === "prev" ? "left-2" : "right-2";
    return (
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        className={`absolute ${pos} top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-navy-700 shadow flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {dir === "prev"
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          }
        </svg>
      </button>
    );
  }

  return (
    <>
      <div
        className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-navy-800 cursor-crosshair select-none group"
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => { setZoomed(false); setZoomPos({ x: 50, y: 50 }); }}
        onMouseMove={handleMouseMove}
        onClick={() => setFullscreen(true)}
      >
        <img
          src={selectedSrc}
          alt={alt}
          className="w-full h-auto block"
          draggable={false}
          style={{ visibility: zoomed ? "hidden" : "visible" }}
        />
        {zoomed && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${selectedSrc}")`,
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundSize: "250%",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
        {hasMultiple && (
          <>
            <ArrowBtn dir="prev" />
            <ArrowBtn dir="next" />
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                i === selectedIndex
                  ? "border-navy-500 dark:border-navy-300"
                  : "border-transparent hover:border-gray-300 dark:hover:border-navy-600"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" draggable={false} />
            </button>
          ))}
        </div>
      )}

      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setFullscreen(false)}
        >
          <button
            type="button"
            onClick={() => setFullscreen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
          <img
            src={selectedSrc}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </>
  );
}
