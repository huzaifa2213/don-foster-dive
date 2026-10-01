import { business } from "@/lib/site";

export default function ContactMap() {
  const mapQuery = encodeURIComponent(`${business.name}, ${business.address}`);

  return (
    <section className="reveal">
      <iframe
        title={`${business.name} on Google Maps`}
        src={`https://maps.google.com/maps?q=${mapQuery}&t=m&z=15&output=embed&iwloc=near`}
        className="h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
