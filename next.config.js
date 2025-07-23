/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = {
  swcMinify: false,
  experimental: {
    optimizeCss: false,
  },
};
