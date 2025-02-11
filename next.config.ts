import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["djoreh64.ru", "cdn.djoreh64.ru"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
