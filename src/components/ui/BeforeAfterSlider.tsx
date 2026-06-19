"use client";

import { useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const CYCLE = 14000;
const REVEAL = 5000;
const PAUSE_END = 2000;
const HIDE = 5000;
const PAUSE_START = 2000;

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Digital Design",
  afterLabel = "Finished Product",
  className = "",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function animate(time: number) {
      if (startRef.current === null) startRef.current = time;
      const elapsed = time - startRef.current;
      const t = elapsed % CYCLE;

      let pos: number;
      if (t < REVEAL) {
        pos = t / REVEAL;
      } else if (t < REVEAL + PAUSE_END) {
        pos = 1;
      } else if (t < REVEAL + PAUSE_END + HIDE) {
        pos = 1 - (t - REVEAL - PAUSE_END) / HIDE;
      } else {
        pos = 0;
      }

      setPosition(pos * 100);
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-px bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-white/80 bg-navy-900/40 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <path d="M8 3L3 8L8 13" />
            <path d="M16 3L21 8L16 13" />
          </svg>
        </div>
      </div>
      <div
        className="absolute top-6 left-6 px-3 py-1.5 rounded-md bg-navy-900/50 backdrop-blur-sm text-white/80 text-xs font-medium tracking-wider uppercase border border-white/10 select-none"
        style={{ opacity: Math.max(0, 1 - position / 30) }}
      >
        {beforeLabel}
      </div>
      <div
        className="absolute top-6 right-6 px-3 py-1.5 rounded-md bg-navy-900/50 backdrop-blur-sm text-white/80 text-xs font-medium tracking-wider uppercase border border-white/10 select-none"
        style={{ opacity: Math.max(0, (position - 70) / 30) }}
      >
        {afterLabel}
      </div>
    </div>
  );
}
