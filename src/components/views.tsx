import { getViewCountBySlug } from '@miroiu/lib/metrics';
import { ViewCounter } from './view-counter';

type ViewCounterProps = {
	slug: string;
	trackView?: boolean;
};

export async function Views({ slug, trackView }: ViewCounterProps) {
	const views = await getViewCountBySlug(slug);

	const shouldTrackView = trackView || process.env.NODE_ENV === 'production';

	return (
		<ViewCounter slug={slug} views={views} trackView={shouldTrackView} />
	);
}
