'use client';

import { DiscussionEmbed } from 'disqus-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
	slug: string;
	title: string;
};

export function Comments({ slug, title }: Props) {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();
	const url = `${process.env.NEXT_PUBLIC_DISQUS_URL}/blog/${slug}`;

	useEffect(() => {
		setMounted(true);
	}, []);

	return mounted ? (
		<div className="my-8 dark:text-highlight" key={theme}>
			<DiscussionEmbed
				shortname="miroiu-dev"
				config={{
					url,
					identifier: slug,
					title,
				}}
			/>
		</div>
	) : null;
}
