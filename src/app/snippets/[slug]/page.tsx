import { Views } from '@miroiu/components';
import { formatDate } from '@miroiu/lib/utils';
import { allSnippets } from 'contentlayer/generated';
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
	const snippet = await getDocFromParams(params.slug);

	if (!snippet) {
		return {};
	}

	const { title, publishedAt, description, slugAsParams, image } = snippet;

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
	return allSnippets.map(snippet => ({ slug: snippet.slugAsParams }));
}

async function getDocFromParams(slug: string) {
	const snippet = allSnippets.find(snippet => snippet.slugAsParams === slug);

	if (!snippet) notFound();

	return snippet;
}

export default async function Snippet({ params }: { params: Params }) {
	const snippet = await getDocFromParams(params.slug);

	const MDXContent = getMDXComponent(snippet.body.code);

	const formatedDate = formatDate(snippet.publishedAt);

	const shouldTrackView = process.env.NODE_ENV === 'production';

	return (
		<div>
			<h1 className="text-3xl sm:text-5xl tracking-tighter font-bold mb-2 text-balance">
				{snippet.title}
			</h1>
			<p className="text-xl text-secondary mb-3">{snippet.description}</p>
			<div className="flex justify-between mb-8 text-sm">
				<p className="text-secondary">{formatedDate}</p>
				<p className="text-secondary">
					<Views
						slug={snippet.slugAsParams}
						trackView={shouldTrackView}
					/>{' '}
					views
				</p>
			</div>
			<article
				className="prose prose-pre:scrollbar-hide prose-code:scrollbar-hide prose-pre:border prose-pre:rounded-lg prose-pre:border-gray-100 dark:prose-pre:border-gray-100/10 prose-primary max-w-none scroll-m-5"
				id="#skip"
			>
				<MDXContent />
			</article>
		</div>
	);
}
