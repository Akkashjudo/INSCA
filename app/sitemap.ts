import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${site.url}/courses/level-1a`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${site.url}/workshops`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
