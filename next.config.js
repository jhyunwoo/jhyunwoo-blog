const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewirtes() {
    return [
      {
        soruce: "/google-analytics",
        destivation: "https://www.googletagmanager.com/gtag/js?id=G-N8FZXTL1E5",
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
