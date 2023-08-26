'use client';

import { useEffect } from 'react';

export type Views = {
	slug: string;
	count: number;
};

type ViewCounterProps = {
	slug: string;
	trackView?: boolean;
	views: number;
};

export function ViewCounter({ slug, views, trackView = false }: ViewCounterProps) {
	useEffect(() => {
		if (trackView) {
			fetch(`/api/views/${slug}`, {
				method: 'PUT',
			});
		}
	}, [slug, trackView]);

	return <span className="text-secondary">{views}</span>;
}
