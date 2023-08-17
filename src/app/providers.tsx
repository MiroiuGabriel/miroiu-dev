'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: PropsWithChildren) {
	return (
		<ThemeProvider
			enableColorScheme
			enableSystem
			attribute="class"
			disableTransitionOnChange
		>
			<NextUIProvider>{children}</NextUIProvider>
		</ThemeProvider>
	);
}
