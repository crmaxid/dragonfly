import type { MetadataRoute } from "next";
import { CONFIG } from "@/libs/consts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CONFIG.SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
