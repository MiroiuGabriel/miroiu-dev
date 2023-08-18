import { increment } from '@miroiu/lib/metrics';

export const runtime = 'edge';

type Params = { params: { slug: string } };

export async function PUT(_: Request, { params }: Params) {
	await increment(params.slug);

	return new Response('Hello World' + params.slug, {
		status: 200,
	});
}
