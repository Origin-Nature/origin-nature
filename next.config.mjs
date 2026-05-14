/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Racine pour origin-nature.com
      {
        source: "/",
        destination: "/en",
        permanent: true,
        has: [{ type: "host", value: "origin-nature.com" }],
      },
      // Autres chemins pour origin-nature.com (sauf /en)
      {
        source: "/:path((?!en|_next|api).*)",
        destination: "/en",
        permanent: true,
        has: [{ type: "host", value: "origin-nature.com" }],
      },
      // Racine pour origine-nature.com
      {
        source: "/",
        destination: "/fr",
        permanent: true,
        has: [{ type: "host", value: "origine-nature.com" }],
      },
      // Autres chemins pour origine-nature.com (sauf /fr)
      {
        source: "/:path((?!fr|_next|api).*)",
        destination: "/fr",
        permanent: true,
        has: [{ type: "host", value: "origine-nature.com" }],
      },
    ];
  },
};

export default nextConfig;
