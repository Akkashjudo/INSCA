import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 200, 256, 384, 512],
  },
  eslint: { dirs: ["app", "components", "data", "lib"] },
};

export default nextConfig;
