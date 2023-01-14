/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/Pricing',
        destination: '/',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
