import { Icon, IconName, Views } from '@miroiu/components';
import { formatDate } from '@miroiu/lib/utils';
import { Snippet, allSnippets } from 'contentlayer/generated';
import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Snippets',
	description:
		'Read about code constitutes an integral part of my daily workflow.',
};

type IconMap = Record<string, IconName>;

const iconMap: IconMap = {
	React: 'react',
	'Next.js': 'next',
	TypeScript: 'typescript',
};

function getIconName(title: string) {
	return iconMap[title];
}

function Snippet({ title, description, slugAsParams, publishedAt }: Snippet) {
	const iconName = getIconName(title);
	const formatedDate = formatDate(publishedAt);

	return (
		<Link
			href={`/snippets/${slugAsParams}`}
			className="flex flex-col border gap-2 border-gray-100 dark:border-gray-100/10 p-4 rounded-lg hover:bg-gray-100 hover:bg-gray-100/10 transition-colors duration-300 ease-soft-spring"
		>
			<div className="bg-gray-100/10 w-fit p-2 rounded-full">
				<Icon name={iconName} className="w-6 h-6" />
			</div>
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="text-secondary">{description}</p>
			<p className="text-secondary text-sm">
				{formatedDate} • <Views slug={slugAsParams} trackView={false} />{' '}
				views
			</p>
		</Link>
	);
}

export default async function Snippets() {
	return (
		<>
			<h1 className="text-4xl sm:text-5xl font-bold mb-14">
				Snippets
				<Icon
					name="underline"
					className="h-2 sm:h-3 mt-2 text-highlight"
				/>
			</h1>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{allSnippets
					.sort((a, b) =>
						new Date(a.publishedAt) > new Date(b.publishedAt)
							? -1
							: 1
					)
					.map(snippet => (
						<Snippet {...snippet} key={snippet._id} />
					))}
			</div>
		</>
	);
}
