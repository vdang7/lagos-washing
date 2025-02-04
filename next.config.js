// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// })

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizeCss: true,
    },
}

module.exports = nextConfig

// module.exports = withBundleAnalyzer(nextConfig)
