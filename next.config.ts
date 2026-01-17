import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone'
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [new URL('https://bakagott.se/**')],
  },
}