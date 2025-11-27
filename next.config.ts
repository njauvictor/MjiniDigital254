import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io'
      },
      {
        protocol: 'https',
        hostname: 'worldvectorlogo.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },

      {
        protocol: 'https',
        hostname: 'imagedelivery.net'
      },

      {
        protocol: 'https',
        hostname: 'placehold.co'

      },
    ]
  }
};

export default nextConfig;