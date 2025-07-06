// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "/rebirdth";

const nextConfig: NextConfig = {
  // ← makes <Image src="/logo.png" /> → /rebirdth/logo.png in prod
  basePath:  isProd ? repo : "",
  assetPrefix: isProd ? `${repo}/` : "",

  output: "export",     // you already have this
  images: {
    unoptimized: true,  // you already have this
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
