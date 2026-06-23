import edgeColors from "@/data/edge-colors";

interface FitBlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  const bgColor = edgeColors[src] || "#f0f0f0";

  return (
    <div className="absolute inset-0" style={{ backgroundColor: bgColor }}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain ${className}`}
        style={{
          maskImage: "radial-gradient(ellipse 70% 70% at center, black 65%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at center, black 65%, transparent 100%)",
        }}
      />
    </div>
  );
}
