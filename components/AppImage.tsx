import Image from "next/image";

type Props = {
  src?: string;
  alt: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

// Renders a real photo when src is supplied, otherwise falls back to a
// labeled placeholder box so missing photography is obvious, not silent.
export default function AppImage({ src, alt, ratio = "aspect-[4/3]", className = "", sizes, priority }: Props) {
  if (!src) {
    return (
      <div className={`placeholder-img rounded-xl2 ${ratio} ${className}`}>
        {alt}
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden rounded-xl2 ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? "(min-width: 1024px) 33vw, 100vw"}
        className="object-cover"
      />
    </div>
  );
}
