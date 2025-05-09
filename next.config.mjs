/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;