import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // ✅ Explicitly tell Turbopack the project root
  turbopack: {
    root: __dirname,
  },

  // ✅ Optional: set up useful aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"), // allows imports like "@/app/components/Details"
    };
    return config;
  },

  // ✅ Enable React strict mode (recommended)
  reactStrictMode: true,

  // ✅ Optional — if you’re using experimental features or external packages
  experimental: {
    typedRoutes: true, // Helps catch incorrect route imports
  },
};

export default nextConfig;
