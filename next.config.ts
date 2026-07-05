import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/trips", destination: "/productions", permanent: true },
      { source: "/trips/:path*", destination: "/productions", permanent: true },
    ];
  },
};

export default nextConfig;
