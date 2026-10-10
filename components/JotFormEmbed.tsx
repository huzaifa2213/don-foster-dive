"use client";

import { useEffect, useRef, useState } from "react";

type JotFormEmbedProps = {
  src: string;
  minHeight?: number;
  title?: string;
  description?: string;
};

/**
 * Embeds a JotForm form using the same manual-DOM-injection pattern as
 * TrustindexWidget. JotForm's jsform loader (like Trustindex's loader)
 * locates its own <script> tag in the DOM to know where to inject the
 * form markup, and next/script does not guarantee the script lands at
 * the exact JSX render position — so we create and append the script
 * element ourselves inside a useEffect, exactly as a static HTML embed
 * would.
 *
 * Design note (verified by inspecting JotForm's actual loader script):
 * the "jsform" embed renders the form inside a same-origin-looking but
 * actually cross-origin <iframe> pointed at form.jotform.com. That means
 * the fields, labels, and submit button INSIDE the form live in a
 * different browser document — CSS written here, or anywhere on this
 * site, cannot reach them, by browser design (not a code limitation).
 * Only the chrome we build around the iframe (card, header, loading
 * skeleton) is ours to style. To restyle the fields themselves, use
 * JotForm's own Form Designer/Theme panel in the JotForm dashboard —
 * that's a form-level setting baked into the form itself, so it applies
 * no matter what fields are added, removed, or reordered later.
 */
export default function JotFormEmbed({ src, minHeight = 520, title, description }: JotFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector("script[data-jotform]")) return;

    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.setAttribute("data-jotform", "true");
    container.appendChild(script);

    // We don't get a reliable onload callback from the injected script, so
    // we treat the first real content JotForm inserts (its form wrapper, or
    // an iframe if it falls back to one) as "loaded" and fade the skeleton.
    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe, form, .form-all, [id^='jotform']")) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    // Fallback in case the iframe never fires the observer (slow network, etc.)
    const fallback = window.setTimeout(() => setLoaded(true), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      container.innerHTML = "";
    };
  }, [src]);

  return (
    <div className="overflow-hidden rounded-xl3 border-2 border-mist bg-white shadow-soft">
      {(title || description) && (
        <div className="border-b-2 border-mist bg-gradient-to-r from-brand-50 to-white px-6 py-6 md:px-10 md:py-8">
          {title && <h3 className="text-xl font-bold text-ink md:text-2xl">{title}</h3>}
          {description && <p className="mt-2 max-w-xl text-sm text-ink/65 md:text-base">{description}</p>}
        </div>
      )}

      <div className="relative px-2 py-4 md:px-6 md:py-6">
        {!loaded && (
          <div
            aria-hidden
            className="absolute inset-0 flex flex-col gap-4 px-6 py-8 md:px-10"
          >
            <div className="h-4 w-1/3 animate-pulse rounded-full bg-mist" />
            <div className="h-11 w-full animate-pulse rounded-xl bg-mist" />
            <div className="h-4 w-1/4 animate-pulse rounded-full bg-mist" />
            <div className="h-11 w-full animate-pulse rounded-xl bg-mist" />
            <div className="h-4 w-1/4 animate-pulse rounded-full bg-mist" />
            <div className="h-28 w-full animate-pulse rounded-xl bg-mist" />
            <div className="mt-2 h-11 w-36 animate-pulse rounded-full bg-brand-100" />
          </div>
        )}
        <div
          ref={containerRef}
          style={{ minHeight }}
          className={`w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
}
