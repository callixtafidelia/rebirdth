import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: true, // This disables ESLint during next build
  },
 output : 'export',
  images : {
    unoptimized : true,
  }
};


export default nextConfig;