/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Disable webpack cache for both client and server
    config.cache = false;
    return config;
  },
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  }
}

module.exports = nextConfig