import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Tipe & util dari workspace di-transpile (di-publish sebagai TS source).
  transpilePackages: ["@concierge/shared"],
};

export default nextConfig;
