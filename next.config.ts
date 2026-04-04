import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // For remote dev access
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
