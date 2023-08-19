import { Link, LinkProps } from '@nextui-org/link';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { HTMLProps } from 'react';

export function CustomLink({ href, ...props }: HTMLProps<HTMLAnchorElement>) {
	if (href!.startsWith('/')) {
		return (
			<Link {...(props as NextLinkProps)} href={href} as={NextLink}>
				{props.children}
			</Link>
		);
	}

	if (href!.startsWith('#')) {
		return <a {...props} href={href} />;
	}

	return (
		<Link {...(props as LinkProps)} href={href} showAnchorIcon isExternal>
			{props.children}
		</Link>
	);
}
