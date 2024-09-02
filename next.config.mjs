
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'a.storyblok.com',
              pathname: '/**',
          },
      ],
      formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
