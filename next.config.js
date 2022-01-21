/** @type {import('next').NextConfig} */
const { withFramworkConfig } = require('./src/framework/common/config')

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = withFramworkConfig({
  framework: {
    name: 'shopify_local',
  },
  i18n: {
    locales: ['en-US', 'es'],
    defaultLocale: 'en-US',
  },
})

console.log('next.config.js', JSON.stringify(module.exports, null, 2))
