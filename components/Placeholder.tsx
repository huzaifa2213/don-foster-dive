type Props = {
  label: string;
  ratio?: string; // aspect ratio class e.g. "aspect-[4/3]"
  className?: string;
};

// Swap this component's usage for a real <Image> once photography is supplied.
export default function Placeholder({ label, ratio = "aspect-[4/3]", className = "" }: Props) {
  return (
    <div className={`placeholder-img rounded-xl2 ${ratio} ${className}`}>
      {label}
    </div>
  );
}
