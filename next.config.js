/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  swcMinify: false,
  experimental: {
    optimizeCss: false,  // <-- THIS IS CRITICAL
  },
};

module.exports = nextConfig;
