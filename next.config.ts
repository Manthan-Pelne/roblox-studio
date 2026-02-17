import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://pub-adea3c1c384d44aa8e5a76fd9362a6e3.r2.dev', // Put your R2 hostname here
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
