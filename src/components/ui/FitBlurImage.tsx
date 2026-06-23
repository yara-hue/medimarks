interface FitBlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  return (
    <div className="absolute inset-0">
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110"
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        className={`relative w-full h-full object-contain z-10 ${className}`}
      />
    </div>
  );
}
