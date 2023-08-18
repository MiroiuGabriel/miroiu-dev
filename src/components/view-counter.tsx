'use client';

import { useEffect } from 'react';

export type Views = {
	slug: string;
	count: number;
};

type ViewCounterProps = {
	slug: string;
	allViews: Views[];
	trackView?: boolean;
};

export function ViewCounter({ slug, allViews, trackView }: ViewCounterProps) {
	const viewsForSlug = allViews && allViews.find(view => view.slug === slug);
	const number = new Number(viewsForSlug?.count || 0);

	useEffect(() => {
		if (trackView) {
			fetch(`/api/views/${slug}`, {
				method: 'PUT',
			});
		}
	}, [slug, trackView]);

	return <span className="text-secondary">{number.valueOf()}</span>;
}
