import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV == "development" ? 'http' : 'https',
        hostname: process.env.NODE_ENV == "development" ? 'localhost' : "z-backend-t3zn.onrender.com",
        port: process.env.NODE_ENV === "development" ? "2006" : "",
        pathname: "/static/**"
      },
    ]
  }
}

export default nextConfig;
