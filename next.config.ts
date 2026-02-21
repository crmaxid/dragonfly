import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.minio.runeforge.tech",
        pathname: "/crmax-assets/**",
      },
    ],
  },
};

export default nextConfig;
