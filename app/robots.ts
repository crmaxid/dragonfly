import type { MetadataRoute } from "next";
import { CONFIG } from "@/libs/consts";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${CONFIG.SITE_URL}/sitemap.xml`,
  };
}
