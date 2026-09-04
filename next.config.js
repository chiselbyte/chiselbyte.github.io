/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Pricing lives as a section on /how-we-build; capture typed/linked /pricing.
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/how-we-build#what-this-costs',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
