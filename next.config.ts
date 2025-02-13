import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.djoreh64.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "djoreh64.ru",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
