/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/CRGS-Custom",
    output: "export",
    images: {
        unoptimized: true,
        domains: ['placehold.jp'],
      },
};

export default nextConfig;
