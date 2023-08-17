type Project = {
	image: string;
	title: string;
	description: string;
	year: number;
	website?: string;
	source?: string;
};

export const projects: Project[] = [
	{
		image: '/shop.png',
		title: 'Online Shop',
		year: 2023,
		description: 'A fullstack shopping application',
		source: 'https://github.com/MiroiuGabriel/practica2023',
	},
	{
		image: '/algolizer.png',
		title: 'Algolizer',
		year: 2022,
		description: 'Platform for visualizing algorithms',
		website: 'https://algolizer.netlify.app/',
		source: 'https://github.com/MiroiuGabriel/algolizer',
	},
	{
		image: '/taxiecuador.png',
		title: 'Taxi Ecuador',
		year: 2021,
		description: 'A taxi booking business',
		website: 'https://taxi-ecuador.com/',
	},
	{
		image: '/twitter.png',
		title: 'Twitterly',
		year: 2023,
		description: 'A fully fledged Twitter clone',
		source: 'https://github.com/MiroiuGabriel/Twitterly',
	},
];
