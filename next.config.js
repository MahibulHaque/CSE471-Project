/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "images.weserv.nl",
    ],
    formats: ["image/webp"],
  },
  env:{
    HEADER_SECRET:'H+MbQeThWmZq4t7w9z$C&F)J@NcRfUjX'
  }
};
