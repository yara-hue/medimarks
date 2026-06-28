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
  const data = edgeColors[src];
  const bg = bgStyle(data);
  const blurBg = data?.gradient
    ? {
        background: [
          `linear-gradient(to bottom, ${data.top}, ${data.bottom})`,
          `linear-gradient(to right, ${data.left}, ${data.right})`,
        ].join(", "),
        filter: "blur(40px)",
        opacity: 0.6,
        transform: "scale(1.25)",
      }
    : {
        backgroundColor: data?.flat || "#f0f0f0",
        filter: "blur(40px)",
        opacity: 0.6,
        transform: "scale(1.25)",
      };
  const midBg = data?.gradient
    ? {
        background: [
          `linear-gradient(to bottom, ${data.top}, ${data.bottom})`,
          `linear-gradient(to right, ${data.left}, ${data.right})`,
        ].join(", "),
        filter: "blur(20px)",
        opacity: 0.35,
        transform: "scale(1.12)",
      }
    : {
        backgroundColor: data?.flat || "#f0f0f0",
        filter: "blur(20px)",
        opacity: 0.35,
        transform: "scale(1.12)",
      };

  const edgeFade = "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)";

  return (
    <div className="absolute inset-0" style={bg}>
      <div className="absolute inset-0" style={blurBg} />
      <div className="absolute inset-0" style={midBg} />
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover relative ${className}`}
        style={{
          maskImage: edgeFade,
          WebkitMaskImage: edgeFade,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </div>
  );
}
