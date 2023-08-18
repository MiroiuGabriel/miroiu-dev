import Image from 'next/image';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="flex flex-col gap-12 sm:flex-row">
			<div className="flex flex-col">
				<h1 className="text-3xl sm:text-5xl font-bold text-balance mb-4">
					Ooops, you&#39;re not supposed to be here!
				</h1>
				<p className="text-secondary">
					This page is being implemented or it doesn&#39;t exist.
					Either way, you should probably head back.
				</p>
				<Button as={Link} href="/" className="mt-6" variant="bordered">
					Return Home
				</Button>
			</div>
			<Image
				src="/not-found.svg"
				width={256}
				height={256}
				alt="Not Found"
				priority
				className="w-full sm:w-64"
			/>
		</div>
	);
}
