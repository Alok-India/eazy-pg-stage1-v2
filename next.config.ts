import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages hosting logic
  basePath: process.env.NODE_ENV === 'production' ? '/eazy-pg-stage1-v2' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
