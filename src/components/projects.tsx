import { projects } from '@miroiu/lib/fixtures';
import { Link } from '@nextui-org/link';
import Image from 'next/image';

export function Projects() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 my-4">
			{projects.map(project => (
				<article key={project.title}>
					<Image
						alt={project.title}
						className="h-auto w-full rounded-lg"
						width={384}
						height={300}
						src={project.image}
					/>
					<h3 className="text-2xl font-medium mt-3">
						{project.title}{' '}
						<span className="text-sm text-secondary">
							{project.year}
						</span>
					</h3>
					<p className="text-lg text-secondary">
						{project.description}
					</p>
					<div className="flex gap-4">
						{project.website && (
							<Link
								isExternal
								className="underline underline-offset-4"
								href={project.website}
							>
								Website
							</Link>
						)}
						{project.source && (
							<Link
								isExternal
								className="underline underline-offset-2"
								href={project.source}
							>
								Source
							</Link>
						)}
					</div>
				</article>
			))}
		</div>
	);
}
