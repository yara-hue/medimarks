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
    return {
      background: [
        `linear-gradient(to bottom, ${data.top}, ${data.bottom})`,
        `linear-gradient(to right, ${data.left}, ${data.right})`,
      ].join(", "),
    };
  }
  return { backgroundColor: data.flat };
}

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  const data = edgeColors[src];
  const bg = bgStyle(data);

  return (
    <div className="absolute inset-0" style={bg}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain relative ${className}`}
      />
    </div>
  );
}
