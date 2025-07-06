// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "/rebirdth";

const nextConfig: NextConfig = {
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? `${repo}/` : "",
  output: "export",
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
