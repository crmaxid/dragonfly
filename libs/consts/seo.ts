export const BRAND = {
  NAME: "CRMax Performance",
  NAME_ALT: "Crmax Performance", // alternate casing for search
  SHORT: "CRMax",
} as const;

export const SEO = {
  DEFAULT_TITLE: `${BRAND.NAME} – Coming Soon`,
  TITLE_TEMPLATE: `%s | ${BRAND.NAME}`,
  DESCRIPTION: `${BRAND.NAME} – We're building something new. Follow us on social media for updates. Official website.`,
  DESCRIPTION_SHORT: `${BRAND.NAME} – We're building something new. Follow us on social media.`,
  KEYWORDS: [BRAND.NAME, BRAND.NAME_ALT, BRAND.SHORT, "performance"],
  OG_TYPE: "website",
  TWITTER_CARD: "summary_large_image",
} as const;
