"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center"
    >
      <div className="relative px-12 py-10">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-navy-500 loading-corner-tl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-navy-500 loading-corner-tr" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-navy-500 loading-corner-bl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-navy-500 loading-corner-br" />

        <div className="relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white/10 tracking-tight select-none">
            MediMarks
          </h1>
          <div className="absolute inset-0 overflow-hidden loading-reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight select-none">
              MediMarks
            </h1>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 tracking-[0.3em] uppercase loading-subtitle">
        Engineering Solutions
      </p>

      <p className="mt-2 text-[10px] text-gray-600 tracking-widest uppercase loading-since">
        Since 2015
      </p>
    </div>
  );
}
