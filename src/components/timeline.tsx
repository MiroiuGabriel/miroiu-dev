import { experiences } from '@miroiu/lib/fixtures';
import { Icon } from '.';
import Image from 'next/image';

export function Timeline() {
	return (
		<div>
			{experiences.map(experience => (
				<div className="card" key={experience.title}>
					<div className="border border-gray-100 dark:border-gray-100/10 p-3 rounded-lg">
						<div className="title flex flex-col items-start md:flex-row md:items-center gap-4">
							{!experience.link && (
								<Icon
									name={experience.icon!}
									className="w-10 h-10"
								/>
							)}
							{experience.link && (
								<Image
									alt={experience.title}
									width={40}
									height={40}
									className="w-10 h-10"
									src={experience.link}
								/>
							)}
							<span className="text-2xl font-semibold text-balance">
								{experience.title}
							</span>
						</div>
						<p className="duration md:ml-14 text-secondary">
							Duration:{' '}
							<span className="text-primary">
								{experience.duration}
							</span>
						</p>
						<p className="md:ml-14 text-secondary mt-2">
							{experience.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
