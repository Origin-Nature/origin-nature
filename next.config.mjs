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
    // Use modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Minimize layout shift by not using placeholder
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },
  // Suppress large pageProps warning (Plasmic bundles CSS/JS in props)
  experimental: {
    largePageDataBytes: 512 * 1024, // 512KB threshold
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
