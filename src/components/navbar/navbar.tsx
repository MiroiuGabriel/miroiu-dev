import { HTMLAttributes } from 'react';
import { NavLink } from './nav-link';
import { SkipToMain } from './skip-to-main';
import { ThemeButton } from './theme-button';
import { cn } from '@miroiu/lib/utils';
import { Icon } from '..';

type NavbarProps = HTMLAttributes<HTMLElement>;

export function Navbar({ className, ...props }: NavbarProps) {
	return (
		<nav
			className={cn(
				'flex justify-between items-center pt-8 pb-6 relative',
				className
			)}
			{...props}
		>
			<SkipToMain />
			<div className="flex -ml-3 space-x-2 h-10">
				<NavLink href="/" className="text-primary">
					<Icon name="brand" />
				</NavLink>
				<NavLink href="/">Home</NavLink>
				<NavLink href="/snippets">Snippets</NavLink>
				<NavLink href="/blog">Blog</NavLink>
			</div>
			<ThemeButton />
		</nav>
	);
}
