import { Icon, Views } from '@miroiu/components';
import { formatDate } from '@miroiu/lib/utils';
import { Post, allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Blog',
	description:
		'Read about my ongoing journey and awesome finds in software development',
};

function PostCard({ publishedAt, slugAsParams, description, title }: Post) {
	const date = formatDate(publishedAt);

	return (
		<Link
			className="flex flex-col border p-4 rounded-lg border-gray-100 dark:border-gray-100/10 hover:bg-gray-100 dark:hover:bg-gray-100/10 transition-colors duration-300 ease-soft-spring"
			href={`/blog/${slugAsParams}`}
		>
			<h2 className="text-xl sm:text-3xl font-medium text-balance">
				{title}
			</h2>
			<p className="text-secondary text-lg">{description}</p>
			<p className="text-secondary mt-4">
				{date} • <Views slug={slugAsParams} trackView={false} /> views
			</p>
		</Link>
	);
}

export default async function Blog() {
	return (
		<>
			<h1 className="text-4xl sm:text-5xl font-bold mb-14">
				Blog
				<Icon
					name="underline"
					className="h-1.5 sm:h-2 mt-2 text-highlight"
				/>
			</h1>
			<div className="flex flex-col gap-4">
				{allPosts
					.sort((a, b) =>
						new Date(a.publishedAt) > new Date(b.publishedAt)
							? -1
							: 1
					)
					.map(post => (
						<PostCard key={post._id} {...post} />
					))}
			</div>
		</>
	);
}
