import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import prose from '@tailwindcss/typography';
import plugin from 'tailwindcss/plugin';

const scrollbarHide = plugin(function ({ addUtilities }) {
	addUtilities({
		'.scrollbar-hide': {
			/* IE and Edge */
			'-ms-overflow-style': 'none',

			/* Firefox */
			'scrollbar-width': 'none',

			/* Safari and Chrome */
			'&::-webkit-scrollbar': {
				display: 'none',
			},
		},

		'.scrollbar-default': {
			/* IE and Edge */
			'-ms-overflow-style': 'auto',

			/* Firefox */
			'scrollbar-width': 'auto',

			/* Safari and Chrome */
			'&::-webkit-scrollbar': {
				display: 'block',
			},
		},
	});
});

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./src/content/*/*.mdx',
	],
	theme: {
		extend: {
			typography: () => ({
				primary: {
					css: {
						'--tw-prose-body': 'var(--text-secondary)',
						'--tw-prose-headings': 'var(--text-primary)',
						'--tw-prose-links': 'var(--text-highlight)',
						'--tw-prose-pre-bg': 'var(--code)',
					},
				},
			}),
			keyframes: {
				marquee: {
					'0%': {
						transform: 'translateX(0%)',
					},
					'100%': {
						transform: 'translateX(-100%)',
					},
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			animation: {
				marquee: 'marquee 30s linear infinite',
				marquee2: 'marquee2 30s linear infinite',
			},
			textColor: {
				primary: 'var(--text-primary)',
				secondary: 'var(--text-secondary)',
				highlight: 'var(--text-highlight)',
				'secondary-darker': 'var(--text-secondary-darker)',
			},
			colors: {
				background: 'var(--background)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
			},
			transitionProperty: {
				background: 'background',
				margin: 'margin',
				outline: 'outline',
			},
			boxShadow: {
				landing:
					'inset 0 0 40px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff, 0 0 10px #fff, 30px 0 40px #f0f, 10px 0 40px #0ff',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui(), prose, scrollbarHide],
};

export default config;
