/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path((?!en|fr).*)',
        destination: '/en',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'origin-nature\\.com',
          },
        ],
      },
      {
        source: '/:path((?!en|fr).*)',
        destination: '/fr',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'origine-nature\\.com',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
