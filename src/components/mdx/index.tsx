import { Callout } from './callout';
import { CustomLink } from './custom-link';
import { RoundedImage } from './rounded-image';
import type { MDXComponents } from 'mdx/types';

export const components: MDXComponents = {
	a: ({ ...props }) => <CustomLink {...props} />,
	Callout,
	img: ({ src, alt }) => <RoundedImage src={src!} alt={alt!} />,
};
