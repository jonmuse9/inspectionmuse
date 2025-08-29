import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export - no API routes needed anymore
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
