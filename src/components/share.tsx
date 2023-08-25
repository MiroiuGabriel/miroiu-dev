'use client';

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';

import { useClipboard } from '@miroiu/lib/hooks';
import { Icon } from '.';

type Props = {
	slug: string;
};

export function Share({ slug }: Props) {
	const url = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${slug}`;

	const copy = useClipboard();

	const handleCopy = async () => {
		const copied = await copy(url);

		if (copied) console.log('Copied to clipboard');
		else
			console.log(
				'Failed to copy. Please refresh the page and try again!'
			);
	};

	return (
		<Dropdown aria-label="dropwdown">
			<DropdownTrigger aria-label="trigger">
				<Button isIconOnly variant="light" aria-label="share">
					<Icon name="share" className="w-4 h-4" />
				</Button>
			</DropdownTrigger>
			<DropdownMenu title="Share" aria-label="menu">
				<DropdownItem
					aria-label="clipboard"
					onClick={handleCopy}
					startContent={<Icon name="clipboard" className="w-4 h-4" />}
				>
					Copy to clipboard
				</DropdownItem>
				<DropdownItem
					aria-label="linkedin"
					onClick={() =>
						window.open(
							`https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${url}`,
							undefined,
							'noopener, noreferrer'
						)
					}
					startContent={<Icon name="linkedIn" className="w-4 h-4" />}
				>
					LinkedIn
				</DropdownItem>
				<DropdownItem
					aria-label="twitter"
					onClick={() =>
						window.open(
							`https://twitter.com/intent/tweet?text=${url}`,
							undefined,
							'noopener, noreferrer'
						)
					}
					startContent={<Icon name="twitter" className="w-4 h-4" />}
				>
					Twitter
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
}
