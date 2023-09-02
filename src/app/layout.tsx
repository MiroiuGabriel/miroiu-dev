import { Icon, Navbar } from '@miroiu/components';
import type { Metadata } from 'next';
import { Providers } from './providers';

import NextLink from 'next/link';
import { Link } from '@nextui-org/link';

import { Analytics } from '@vercel/analytics/react';

import './globals.css';

export const metadata: Metadata = {
	metadataBase: new URL(process.env.WEBSITE_URL!),
	title: {
		default: 'Miroiu Gabriel',
		template: '%s | Miroiu Gabriel',
	},
	description: 'Developer, student and gym rat.',
	openGraph: {
		title: 'Miroiu Gabriel',
		description: 'Developer, student and gym rat.',
		url: process.env.WEBSITE_URL!,
		siteName: 'Miroiu Gabriel',
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Miroiu Gabriel',
		card: 'summary_large_image',
	},
	verification: {
		google: 'tLsCcvFwzhkjsdCSsMsfWkOEkdKDdkA_5ubpJssCerA',
		yandex: '66c8b44c093dac6f',
	},
	keywords: [
		'nextjs',
		'react',
		'blog',
		'technical blog content',
		'portfolio',
		'developer',
		'coding',
		'programming',
		'software engineer',
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Providers>
					<Navbar className="max-w-3xl mx-auto px-6" />
					<main
						id="skip"
						className="scroll-m-5 max-w-3xl mx-auto px-6 my-6 overflow-x-hidden sm:overflow-x-visible"
					>
						{children}
					</main>
					<footer className="mt-16 mb-8 max-w-3xl mx-auto px-6">
						<div className="flex items-center gap-4 mb-6">
							<h3 className="text-xl font-semibold">
								Reached the end
							</h3>
							<Icon name="check" className="h-8 text-highlight" />
						</div>
						<div className="relative grid grid-cols-2 sm:grid-cols-3 overflow-hidden">
							<div className="flex flex-col gap-3">
								<Link
									as={NextLink}
									href="/"
									className="text-secondary"
								>
									Home
								</Link>
								<Link
									as={NextLink}
									href="/snippets"
									className="text-secondary"
								>
									Snippets
								</Link>
								<Link
									as={NextLink}
									href="/blog"
									className="text-secondary"
								>
									Blog
								</Link>
							</div>
							<div className="flex flex-col gap-3">
								<Link
									isExternal
									as={NextLink}
									href="https://www.linkedin.com/in/miroiu-gabriel"
									className="text-secondary"
								>
									<Icon
										name="linkedIn"
										className="w-6 h-6 mr-2"
									/>
									LinkedIn
								</Link>
								<Link
									as={NextLink}
									href="https://github.com/miroiu-dev"
									className="text-secondary"
								>
									<Icon
										name="github"
										className="w-6 h-6 mr-2"
									/>
									Github
								</Link>
								<Link
									as={NextLink}
									href="https://medium.com/@miroiu-dev"
									isExternal
									className="text-secondary"
								>
									<Icon
										name="medium"
										className="w-6 h-6 mr-2"
									/>
									Medium
								</Link>
							</div>
							<div className="hidden sm:flex flex-col items-center justify-center">
								<Link as={NextLink} href="/">
									<Icon
										name="brandOutline"
										className="w-24 h-24"
									/>
								</Link>
							</div>
						</div>
					</footer>
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}
