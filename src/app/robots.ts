export default function robots() {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
		sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
		host: process.env.WEBSITE_URL,
	};
}
