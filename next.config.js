const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		minimumCacheTTL: 1024,
	},
};

module.exports = withContentlayer(nextConfig);
