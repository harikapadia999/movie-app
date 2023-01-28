/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
