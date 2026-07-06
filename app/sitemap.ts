import type { MetadataRoute } from "next";
import { services, productions } from "@/lib/content";
import { occasions } from "@/lib/occasions";

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
    ...occasions.map((o) => ({
      url: `${base}/services/private-events/${o.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...productions.map((p) => ({
      url: `${base}/productions/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
