"use client";

import { useState } from "react";
import { contactServiceOptions } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your booking/email endpoint of choice.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl3 bg-brand-500 p-8 text-white shadow-card">
        <h3 className="text-xl font-bold">Thank you!</h3>
        <p className="mt-2 text-sm text-white/85">
          Your message has been received. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "rounded-xl border-2 border-mist px-4 py-3 text-ink focus:outline-none focus:border-brand-500 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 reveal">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-bold text-ink">
          Name <span className="font-normal text-ink/40">(required)</span>
          <input required type="text" name="name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-bold text-ink">
          Email <span className="font-normal text-ink/40">(required)</span>
          <input required type="email" name="email" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-bold text-ink">
          Phone <span className="font-normal text-ink/40">(optional)</span>
          <input type="tel" name="phone" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-bold text-ink">
          Service <span className="font-normal text-ink/40">(required)</span>
          <select required name="service" defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a service
            </option>
            {contactServiceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-bold text-ink">
        Message
        <textarea required name="message" rows={5} className={inputClass} />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-brand-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-card shadow-soft active:scale-95"
      >
        Send Message
      </button>
    </form>
  );
}
