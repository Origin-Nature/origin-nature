/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  // Optimize images from Plasmic CDN
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.plasmic.app',
      },
      {
        protocol: 'https',
        hostname: 'img.plasmic.app',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/post/:slug',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/about/:slug',
        destination: '/',
        permanent: false,
      },
      {
        source: '/brands',
        destination: '/',
        permanent: false,
      },
      {
        source: '/brands/:slug',
        destination: '/?brand=:slug',
        permanent: false,
      },
      {
        source: '/materials',
        destination: '/',
        permanent: false,
      },
      {
        source: '/materials/:slug',
        destination: '/?material=:slug',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
