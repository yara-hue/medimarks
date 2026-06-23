interface FitBlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center blur-2xl scale-110"
        style={{ backgroundImage: `url(${src})` }}
      />
      <img
        src={src}
        alt={alt}
        className={`relative w-full h-full object-contain z-10 ${className}`}
      />
    </div>
  );
}
