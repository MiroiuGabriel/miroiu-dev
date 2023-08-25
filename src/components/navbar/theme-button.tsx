'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { useRef } from 'react';
import { useMouseAngle } from '@miroiu/lib/hooks';

export function ThemeButton() {
	const { setTheme } = useTheme();

	const toggleRef = useRef<HTMLButtonElement>(null);

	const angle = useMouseAngle(0, toggleRef);

	return (
		<>
			<button
				className="hidden dark:flex bg-gray-100 dark:bg-gray-100/10 p-2 rounded-lg justify-center items-center hover:ring-2 transition-shadow duration-200 ease-in-out ring-black dark:ring-white select-none"
				role="button"
				aria-label="switch theme"
				tabIndex={0}
				onClick={() => setTheme('light')}
				ref={toggleRef}
			>
				<SunIcon
					className="w-6 h-6"
					aria-label="Switch to light mode"
					style={{ rotate: angle }}
				/>
			</button>
			<button
				className="shadow-sm dark:hidden bg-gray-100 dark:bg-gray-100/10 p-2 rounded-lg flex justify-center items-center hover:ring-2 transition-shadow duration-200 ease-in-out ring-black dark:ring-white select-none"
				role="button"
				aria-label="switch theme"
				tabIndex={0}
				onClick={() => setTheme('dark')}
			>
				<MoonIcon
					className="w-6 h-6"
					aria-label="Switch to dark mode"
				/>
			</button>
		</>
	);
}
