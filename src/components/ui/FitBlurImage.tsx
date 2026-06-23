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
        className="absolute inset-0 w-full h-full object-cover blur-3xl scale-150"
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
