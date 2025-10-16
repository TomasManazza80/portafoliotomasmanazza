/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    domains: ["user-images.githubusercontent.com", "cdn.hashnode.com", "github.com"],
  },
};

module.exports = nextConfig;