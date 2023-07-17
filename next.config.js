/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: true },
  async redirects() {
    return [
      {
        source: "/go/:slug/",
        destination: "/go/:slug/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
