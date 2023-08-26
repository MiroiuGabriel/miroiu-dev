import { Callout } from './callout';
import { CustomLink } from './custom-link';
import type { MDXComponents } from 'mdx/types';

export const components: MDXComponents = {
	a: ({ ...props }) => <CustomLink {...props} />,
	Callout,
};
