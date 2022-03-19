/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com","avatars.githubusercontent.com"],
    formats: ["image/webp"],
},
}
