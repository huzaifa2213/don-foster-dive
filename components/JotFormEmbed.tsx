"use client";

import { useEffect, useRef } from "react";

type JotFormEmbedProps = {
  src: string;
  minHeight?: number;
};

/**
 * Embeds a JotForm form using the same manual-DOM-injection pattern as
 * TrustindexWidget. JotForm's jsform loader (like Trustindex's loader)
 * locates its own <script> tag in the DOM to know where to inject the
 * form markup, and next/script does not guarantee the script lands at
 * the exact JSX render position — so we create and append the script
 * element ourselves inside a useEffect, exactly as a static HTML embed
 * would.
 */
export default function JotFormEmbed({ src, minHeight = 600 }: JotFormEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector("script[data-jotform]")) return;

    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.setAttribute("data-jotform", "true");
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [src]);

  return <div ref={containerRef} style={{ minHeight }} className="w-full" />;
}
