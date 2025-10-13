import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60
  },
  // Add experimental optimizations
  experimental: {
    optimizePackageImports: ["swiper", "framer-motion"]
  }
};

export default nextConfig;
