import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**", // Matches all paths under the domain
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "/**", // Matches all paths under this domain
      },
    ],
  }, 
};

export default nextConfig;
