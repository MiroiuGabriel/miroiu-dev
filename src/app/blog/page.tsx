import { Icon } from '@miroiu/components';
import { ViewCounter, Views } from '@miroiu/components/view-counter';
import { getViewsCount } from '@miroiu/lib/mertics';
import { formatDate } from '@miroiu/lib/utils';
import { Post, allPosts } from 'contentlayer/generated';
import Link from 'next/link';

function PostCard({
	published,
	slugAsParams,
	slug,
	description,
	title,
	allViews,
}: Post & { allViews: Views[] }) {
	const date = formatDate(published);

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
				{date} •{' '}
				<ViewCounter
					allViews={allViews}
					slug={slugAsParams}
					trackView={false}
				/>{' '}
				views
			</p>
		</Link>
	);
}

export default async function Blog() {
	const allViews = await getViewsCount();

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
						new Date(a.published) > new Date(b.published) ? -1 : 1
					)
					.map(post => (
						<PostCard
							key={post._id}
							{...post}
							allViews={allViews}
						/>
					))}
			</div>
		</>
	);
}
