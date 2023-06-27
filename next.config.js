/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  typescript: {
    // !! WARN !! -- NOT RECOMMENDED IN PRODUCTION
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
