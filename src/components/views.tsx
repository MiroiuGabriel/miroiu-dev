import { getViewCountBySlug } from '@miroiu/lib/metrics';
import { ViewCounter } from './view-counter';

type ViewCounterProps = {
	slug: string;
	trackView?: boolean;
};

export async function Views({ slug, trackView = false }: ViewCounterProps) {
	const views = await getViewCountBySlug(slug);

	return <ViewCounter slug={slug} views={views} trackView={trackView} />;
}
