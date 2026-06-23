import edgeColors from "@/data/edge-colors";
import type { EdgeColors } from "@/data/edge-colors";

interface FitBlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

function bgStyle(data: EdgeColors | undefined): React.CSSProperties {
  if (!data) return { backgroundColor: "#f0f0f0" };
  if (data.gradient) {
    const { top, bottom, left, right } = data;
    return {
      background: [
        `linear-gradient(to bottom, ${top}, ${bottom})`,
        `linear-gradient(to right, ${left}, ${right})`,
      ].join(", "),
    };
  }
  return { backgroundColor: data.flat };
}

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  const bg = bgStyle(edgeColors[src]);

  return (
    <div className="absolute inset-0" style={bg}>
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
