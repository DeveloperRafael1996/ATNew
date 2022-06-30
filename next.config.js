/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
  env: {
    REACT_APP_COMPANY: process.env.REACT_APP_COMPANY,
    REACT_APP_CURRENCY: process.env.REACT_APP_CURRENCY,
    REACT_APP_LOCAL_API: process.env.REACT_APP_LOCAL_API,
    REACT_APP_WEB_BASE: process.env.REACT_APP_WEB_BASE,
    REACT_APP_CALIMACO_BASE: process.env.REACT_APP_CALIMACO_BASE,
    REACT_APP_CALIMACO_API_BASE: process.env.REACT_APP_CALIMACO_API_BASE,
    REACT_APP_WEB_CMS: process.env.REACT_APP_WEB_CMS,
  },
}

module.exports = nextConfig
