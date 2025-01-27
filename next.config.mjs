/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: isProd ? '/intern-pognali-1-1' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
