import { components } from '@miroiu/components/mdx';
import { ViewCounter } from '@miroiu/components/view-counter';
import { getViewsCount } from '@miroiu/lib/metrics';
import { formatDate } from '@miroiu/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

type Params = {
	slug: string;
};

export async function generateMetadata({ params }: { params: Params }) {
	const post = await getDocFromParams(params.slug);

	if (!post) {
		return;
	}

	const { title, publishedAt, description, slugAsParams, image } = post;

	const ogImage = image
		? `${process.env.WEBSITE_URL}/${image}`
		: `${process.env.WEBSITE_URL}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime: publishedAt,
			url: `${process.env.WEBSITE_URL}/blog/${slugAsParams}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export function generateStaticParams() {
	return allPosts.map(post => ({ slug: post.slugAsParams }));
}

async function getDocFromParams(slug: string) {
	const post = allPosts.find(post => post.slugAsParams === slug);

	if (!post) notFound();

	return post;
}

export default async function Post({ params }: { params: Params }) {
	const post = await getDocFromParams(params.slug);

	const allViews = await getViewsCount();

	const MDXContent = getMDXComponent(post.body.code);

	const formatedDate = formatDate(post.publishedAt);

	const isProduction = process.env.NODE_ENV === 'production';

	return (
		<div>
			<h1 className="text-3xl sm:text-5xl tracking-tighter font-bold mb-2 text-balance">
				{post.title}
			</h1>
			<p className="text-xl text-secondary mb-3">{post.description}</p>
			<div className="flex justify-between mb-8 text-sm">
				<p className="text-secondary">{formatedDate}</p>
				<p className="text-secondary">
					{' '}
					<ViewCounter
						allViews={allViews}
						slug={post.slugAsParams}
						trackView={isProduction}
					/>{' '}
					views
				</p>
			</div>
			<article
				className="prose prose-pre:border prose-pre:rounded-lg prose-pre:border-gray-100 dark:prose-pre:border-gray-100/10 prose-primary max-w-none scroll-m-5"
				id="#skip"
			>
				<MDXContent components={components} />
			</article>
		</div>
	);
}
