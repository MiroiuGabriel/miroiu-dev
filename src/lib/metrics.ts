import { cache } from 'react';
import { db } from './planetscale';

export async function increment(slug: string) {
	const data = await db
		.selectFrom('views')
		.where('slug', '=', slug)
		.select(['count'])
		.execute();

	const views = !data.length ? 0 : Number(data[0].count);

	await db
		.insertInto('views')
		.values({ slug, count: 1 })
		.onDuplicateKeyUpdate({ count: views + 1 })
		.execute();
}

export async function getViewCountBySlug(slug: string) {
	const data = await db
		.selectFrom('views')
		.select(['count'])
		.where('slug', '=', slug)
		.execute();

	const views = !data.length ? 0 : Number(data[0].count);

	return views;
}
