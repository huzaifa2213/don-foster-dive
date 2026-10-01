type Props = {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  description?: string;
  dark?: boolean;
};

export default function SectionHeading({ eyebrow, title, align = "center", description, dark = false }: Props) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 max-w-2xl reveal ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl md:text-4xl leading-tight font-bold ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && (
        <p className={`text-base md:text-lg ${dark ? "text-white/75" : "text-ink/70"}`}>{description}</p>
      )}
    </div>
  );
}
