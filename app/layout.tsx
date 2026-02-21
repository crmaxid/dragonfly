import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BRAND, CONFIG, SEO } from "@/libs/consts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SEO.DEFAULT_TITLE,
    template: SEO.TITLE_TEMPLATE,
  },
  description: SEO.DESCRIPTION,
  keywords: [...SEO.KEYWORDS],
  openGraph: {
    title: SEO.DEFAULT_TITLE,
    description: SEO.DESCRIPTION_SHORT,
    url: CONFIG.SITE_URL,
    siteName: BRAND.NAME,
    type: SEO.OG_TYPE,
  },
  twitter: {
    card: SEO.TWITTER_CARD,
    title: SEO.DEFAULT_TITLE,
    description: SEO.DESCRIPTION_SHORT,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(CONFIG.SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
