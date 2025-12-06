import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // @ts-expect-error 
    appDir: true, 
  },
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
