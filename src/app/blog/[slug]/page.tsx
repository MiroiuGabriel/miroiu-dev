import { Comments, Share, Views } from '@miroiu/components';
import { components } from '@miroiu/components/mdx';
import { formatDate } from '@miroiu/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

type Params = {
	slug: string;
};

export async function generateMetadata({
	params,
}: {
	params: Params;
}): Promise<Metadata> {
	const post = await getDocFromParams(params.slug);

	if (!post) {
		return {};
	}

	const { title, publishedAt, description, slugAsParams, image, keywords } =
		post;

	const ogImage = image
		? `${process.env.WEBSITE_URL}/${image}`
		: `${process.env.WEBSITE_URL}/og?title=${title}`;

	return {
		title,
		description,
		keywords,
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

	const MDXContent = getMDXComponent(post.body.code);

	const formatedDate = formatDate(post.publishedAt);

	const shouldTrackView = process.env.NODE_ENV === 'production';

	return (
		<div>
			<h1 className="text-3xl sm:text-5xl tracking-tighter font-bold mb-2 text-balance">
				{post.title}
			</h1>
			<p className="text-xl text-secondary mb-1">{post.description}</p>
			<div className="flex justify-between mb-8 text-sm items-center">
				<p className="text-secondary">{formatedDate}</p>
				<div className="flex items-center gap-2">
					<Share slug={post.slugAsParams} />

					<p className="text-secondary">
						<Views
							slug={post.slugAsParams}
							trackView={shouldTrackView}
						/>{' '}
						views
					</p>
				</div>
			</div>
			<article
				className="prose prose-img:rounded-lg prose-pre:border prose-pre:rounded-lg prose-pre:border-gray-100 dark:prose-pre:border-gray-100/10 prose-primary max-w-none scroll-m-5"
				id="#skip"
			>
				<MDXContent components={components} />
			</article>
			<Comments slug={post.slugAsParams} title={post.title} />
		</div>
	);
}
