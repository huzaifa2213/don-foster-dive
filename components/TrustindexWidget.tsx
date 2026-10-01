"use client";

import { useEffect, useRef } from "react";

// Live Google Reviews widget (Trustindex) — renders real, auto-updating
// reviews pulled from the business's actual Google Business Profile.
//
// This is intentionally NOT using next/script: Next's <Script> component
// manages script loading through its own internal system and does not
// guarantee the <script> tag lands at this exact DOM position, which
// breaks widget loaders like Trustindex that locate their own script tag
// at runtime to know where to insert their markup. Creating and appending
// a real <script> element ourselves, directly inside this component's own
// container div, faithfully reproduces a plain static-HTML embed.
export default function TrustindexWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Avoid double-inserting if this effect re-runs (e.g. React strict mode).
    if (container.querySelector("script[data-trustindex]")) return;

    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?94d390482660673e2f46ddb5077";
    script.defer = true;
    script.async = true;
    script.setAttribute("data-trustindex", "true");
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="min-h-[120px]" />;
}
