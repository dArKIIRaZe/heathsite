import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uk.sz-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'example.schoolzineplus.co.uk',
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
