'use client';

import { cn } from '@miroiu/lib/utils';
import { usePathname } from 'next/navigation';
import { HTMLAttributes, PropsWithChildren } from 'react';

import Link from 'next/link';

type NavLinkProps = {
	href: string;
} & HTMLAttributes<HTMLAnchorElement>;

export function NavLink({
	href,
	children,
	className,
	...props
}: PropsWithChildren<NavLinkProps>) {
	let pathname = usePathname();
	if (pathname.includes('/blog/')) {
		pathname = '/blog';
	}
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				'text-secondary flex px-3 h-full items-center rounded-lg hover:bg-gray-100 hover:dark:bg-gray-100/10 transition-background duration-200 ease-in',
				{
					'text-primary': isActive,
				},
				className
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
