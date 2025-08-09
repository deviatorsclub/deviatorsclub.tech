const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react", "@heroicons/react"],
  },

  // Image optimization for better performance
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
  },

  // Compression for smaller bundle sizes
  compress: true,

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
