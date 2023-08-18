import { allSnippets, allPosts } from 'contentlayer/generated';

export default async function sitemap() {
	const posts = allPosts.map(post => ({
		url: `${process.env.WEBSITE_URL}/blog/${post.slugAsParams}`,
		lastModified: post.publishedAt,
	}));

	const snippets = allSnippets.map(snippet => ({
		url: `${process.env.WEBSITE_URL}/snippets/${snippet.slugAsParams}`,
		lastModified: snippet.publishedAt,
	}));

	const routes = ['', '/blog', '/snippets'].map(route => ({
		url: `${process.env.WEBSITE_URL}${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...snippets, ...posts];
}
