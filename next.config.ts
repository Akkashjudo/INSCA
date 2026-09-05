import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 420, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [64, 96, 128, 200, 256, 384, 512],
    /**
     * 75 is the default used everywhere; 90 is reserved for the gallery
     * lightbox, which is the one place a photograph is shown large and
     * uncropped. Next 16 requires every quality in use to be declared here.
     */
    qualities: [75, 90],
  },
  eslint: { dirs: ["app", "components", "data", "lib"] },
};

export default nextConfig;
