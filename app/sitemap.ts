import type { MetadataRoute } from "next";
import { navigation, divingServices, courses } from "@/lib/site";

function flatten(items: typeof navigation): string[] {
  return items.flatMap((i) => [i.href, ...(i.children ? flatten(i.children) : [])]);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.donfosters.com";
  const paths = Array.from(new Set(flatten(navigation)));
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}
