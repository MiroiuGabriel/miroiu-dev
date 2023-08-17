'use client';

import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { FormEvent, useState } from 'react';
import { delay } from '@miroiu/lib/utils';

export function Newsletter() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [error, setErorr] = useState('');

	const validationState = error.length > 0 ? 'invalid' : 'valid';

	async function subscribe(ev: FormEvent) {
		ev.preventDefault();
		setLoading(true);

		await delay(2000);

		setLoading(false);
		setErorr('Plese enter a valid email');
		setEmail('');
	}

	return (
		<section className="border border-gray-100 dark:border-gray-100/10 p-6 rounded-lg my-14">
			<h2 className="text-2xl font-semibold">Newsletter</h2>
			<p className="text-secondary mt-1 mb-4">
				Subscribe to my newsletter to receive notifications when I
				publish new content on the blog.
			</p>
			<form className="flex gap-4" onSubmit={subscribe}>
				<Input
					variant="bordered"
					placeholder="johndoe@gmail.com"
					isClearable
					isDisabled={loading}
					value={email}
					onValueChange={value => {
						if (error) setErorr('');
						setEmail(value);
					}}
					isRequired
					type="email"
					onClear={() => setEmail('')}
					validationState={validationState}
					errorMessage={error}
				/>
				<Button variant="bordered" type="submit" isLoading={loading}>
					{loading ? 'Subscribing' : 'Subscribe'}
				</Button>
			</form>
		</section>
	);
}
