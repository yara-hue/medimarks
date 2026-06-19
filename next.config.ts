import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/medimarks",
  assetPrefix: "/medimarks/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
