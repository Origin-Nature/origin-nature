/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // www.origin-nature.com
      {
        source: "/",
        destination: "/en",
        permanent: true,
        has: [{ type: "host", value: "www.origin-nature.com" }],
      },
      {
        source: "/:path((?!en|_next|api).*)",
        destination: "/en",
        permanent: true,
        has: [{ type: "host", value: "www.origin-nature.com" }],
      },
      // www.origine-nature.com
      {
        source: "/",
        destination: "/fr",
        permanent: true,
        has: [{ type: "host", value: "www.origine-nature.com" }],
      },
      {
        source: "/:path((?!fr|_next|api).*)",
        destination: "/fr",
        permanent: true,
        has: [{ type: "host", value: "www.origine-nature.com" }],
      },
    ];
  },
};

export default nextConfig;
