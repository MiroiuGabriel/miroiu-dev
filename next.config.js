const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		minimumCacheTTL: 1024,
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = withContentlayer(nextConfig);
