import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://frienders.co";
  const staticPages = ["", "/about", "/team", "/services", "/productions", "/pricing", "/contact"];
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: s.slug === "party911" ? 0.9 : 0.7,
    })),
  ];
}
