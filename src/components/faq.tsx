'use client';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Link } from '@nextui-org/react';
import NextLink from 'next/link';

export function Faq() {
	return (
		<Accordion>
			<AccordionItem
				key="1"
				aria-label="Accordion 1"
				title="Are you available for hire?"
				className="text-secondary"
			>
				Definitely! I am presently in pursuit of a Full Stack developer
				role, bringing expertise in React and proficiency in either .NET
				or Node
			</AccordionItem>
			<AccordionItem
				key="2"
				aria-label="Accordion 2"
				title="How can I contact you?"
				className="text-secondary"
			>
				Feel free to reach out to me via email at{' '}
				<Link
					as={NextLink}
					isExternal
					showAnchorIcon
					href="mailto:miroiugabriel1231@gmail.com?subject=subject&body=body"
				>
					miroiugabriel1231@gmail.com
				</Link>{' '}
				or connect with me on{' '}
				<Link
					as={NextLink}
					isExternal
					showAnchorIcon
					href="https://www.linkedin.com/in/miroiu-gabriel"
				>
					LinkedIn
				</Link>
				.
			</AccordionItem>
			<AccordionItem
				key="3"
				aria-label="Accordion 3"
				title="Which frameworks do you use?"
				className="text-secondary"
			>
				In terms of frontend development, my primary experience lies in
				React.js. I&#39;ve also ventured into Next.js recently, and
				I&#39;m open to learning any other framework that aligns with
				your project&#39;s needs. On the backend, I&#39;m well-versed in
				utilizing Express.js and .NET Web API.
			</AccordionItem>
			<AccordionItem
				key="4"
				aria-label="Accordion 3"
				title="Do you use TypeScript?"
				className="text-secondary"
			>
				Certainly, I prefer to build my projects using TypeScript,
				unless they are very straightforward. However, if your project
				requires it, I am also comfortable using plain JavaScript.
				TypeScript is my preferred choice due to its benefits and
				versatility.
			</AccordionItem>
		</Accordion>
	);
}
