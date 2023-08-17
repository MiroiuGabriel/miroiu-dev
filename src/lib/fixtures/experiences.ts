import { IconName } from '@miroiu/components';

type Experience = {
	icon?: IconName;
	title: string;
	duration: string;
	description: string;
	link?: string;
};

export const experiences: Experience[] = [
	{
		icon: 'cnvv',
		title: 'Colegiul National Vlaicu Voda',
		duration: '2018 - 2022 • 4 years',
		description: `
		During my time in high school, my focus was on Mathematics and Informatics. 
		In my final Bacalaureat exam, I achieved a perfect score of 10 out of 10 in Mathematics and an impressive 9.75 out of 10 in Informatics.
		It was during this period that I conceptualized and developed Algolizer, a platform crafted for my computer science certificate.
		Algolizer's purpose was to render algorithm visualization, enhancing the understanding and accessibility of learning algorithms.
		Concurrently, I was also actively freelancing.
		`,
	},
	{
		icon: 'freelance',
		title: 'Freelance',
		duration: '2020 - 2023 • 3 years',
		description: `
        Throughout my freelancing period, I have specialized in developing websites for a diverse range of businesses.
		Among my notable achievements, I completed a major project involving the creation of a taxi booking website for a client based in the United States.
		My involvement spanned the entire project life cycle, from initial design to frontend and backend development, ending in the deployment of the website to the client's domain.
		The majority of my clients were secured via Discord, where I either initiated or received communications. Additionally, I leveraged Fiverr for a considerable period to establish connections with clients.
		`,
	},
	{
		icon: 'university',
		title: 'Facultatea de Stiinte, Educatie Fizica si Informatica',
		duration: '2022 - 2025 • Ongoing',
		description: `
		I am currently pursuing my Bachelor's degree in Computer Science at Universitatea Națională de Știință și Tehnologie Politehnica București Centrul Universitar Pitesti.
		My academic journey encompasses a comprehensive curriculum, including in-depth studies in databases, algorithms,
		object-oriented programming, web development, neural networks, artificial intelligence, software engineering, and a wide array of related subjects.`,
	},

	{
		title: 'Czestochowa University Of Technology',
		link: 'https://pcz.pl/fcp/BGBUTODtYP0c5WRc5HApeDRZIBzo5CBA/_users/code_YCFYXIghYYUQ6UhciCQgDI0QRCWY8AQ/kamila/ikonki/uczelnia_dostepna.svg',
		duration: '2023 Feb - July • 5 months',
		description: `
		During my one-semester Erasmus Mobility, I attained the top grades in all my courses.
		This experience taught me valuable lessons, such as building robust interpersonal skills through interactions with diverse students.
		It also instilled self-confidence and resourcefulness by navigating challenges independently, away from familiar environments.
		Moreover, exposure to varied ideas and perspectives broadened my life outlook, fostering an open-minded approach to learning and understanding the world.`,
	},

	{
		icon: 'roweb',
		title: 'Roweb - Summer Practice .NET + React',
		duration: '2023 June - July • 1 month',
		description: `
		Guided by my mentor Gabriel Marinescu, an exceptional instructor, I successfully crafted a shop application.
		Employing an Onion Layer architecture, ASP.NET Web API, and Dapper ORM were utilized for the backend, while the frontend was developed using React.js with TypeScript.
		The application featured diverse functionalities, including query-based product filtering, JWT token-based authentication, silent authentication, and an admin dashboard with CRUD capabilities for products and categories, etc.`,
	},
];
