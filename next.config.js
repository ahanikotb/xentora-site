const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "tools/*/*")],
  },
  experimental: { serverActions: true },
};

module.exports = nextConfig;
