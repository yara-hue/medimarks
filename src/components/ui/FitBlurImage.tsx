interface FitBlurImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FitBlurImage({ src, alt, className = "" }: FitBlurImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-contain ${className}`}
    />
  );
}
