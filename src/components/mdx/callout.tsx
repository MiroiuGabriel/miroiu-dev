import { PropsWithChildren } from 'react';

type CalloutProps = {
	icon: string;
};

export function Callout({ icon, children }: PropsWithChildren<CalloutProps>) {
	return (
		<div className="callout p-4 flex border border-gray-100 dark:border-gray-100/10 bg-gray-100 dark:bg-gray-100/10 rounded-lg">
			<div className="flex items-center text-xl w-4 mr-4">{icon}</div>
			<div className="w-full">{children}</div>
		</div>
	);
}
