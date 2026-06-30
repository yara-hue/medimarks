interface FitBlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

const edgeFade = "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%), linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)";

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  return (
    <div className="absolute inset-0 bg-gray-100 dark:bg-navy-800">
      <div
        className="absolute inset-0 bg-cover bg-center scale-125 blur-3xl opacity-60"
        style={{ backgroundImage: `url("${src}")` }}
      />
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-contain ${className}`}
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
