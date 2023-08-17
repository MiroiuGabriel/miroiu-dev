import { cache } from 'react';
import { db } from './planetscale';

export const getViewsCount = cache(async () => {
	return db.selectFrom('views').select(['slug', 'count']).execute();
});
