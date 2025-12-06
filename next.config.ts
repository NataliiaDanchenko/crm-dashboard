import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // @ts-expect-error appDir пока не типизировано
    appDir: true, // если используешь app/
  },
  images: {
    // если нужны локальные SVG/PNG из assets
    unoptimized: true, // можно убрать, если не используешь оптимизацию
  },
};

export default nextConfig;
