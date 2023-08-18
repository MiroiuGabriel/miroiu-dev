import {
	Typewriter,
	Marquee,
	Newsletter,
	Timeline,
	Icon,
	Faq,
	Projects,
} from '@miroiu/components';
import { Image } from '@nextui-org/image';
import { Chip } from '@nextui-org/chip';

import NextImage from 'next/image';

export default function Home() {
	return (
		<>
			<section className="flex flex-col gap-12 md:flex-row md:items-center">
				<div className="flex flex-col gap-3">
					<Chip
						variant="shadow"
						classNames={{
							base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
							content: 'drop-shadow shadow-black text-white',
						}}
					>
						Greetings
					</Chip>
					<h1 className="flex gap-3 text-4xl sm:text-5xl font-bold text-balance">
						I&apos;m <Typewriter />
					</h1>
					<p className="text-secondary">
						A driven developer based in Romania with a penchant for
						embracing fresh challenges. I thrive on collaborative
						teamwork to engineer remarkable software solutions.
						Outside of the digital realm, you&#39;ll find me
						immersed in activities like swimming, mountain climbing,
						meditation, reading books, and engaging in resistance
						training.
					</p>
				</div>
				<div className="shadow-landing rounded-lg w-full h-fit">
					<Image
						as={NextImage}
						src="/profile.webp"
						className="rounded-lg w-full"
						alt="Profile"
						quality={100}
						disableSkeleton
						isZoomed
						priority
						classNames={{
							zoomedWrapper: 'rounded-lg',
							wrapper: 'rotate-[10deg] mx-auto',
						}}
						width={400}
						height={360}
					/>
				</div>
			</section>

			<section>
				<h2 className="text-4xl sm:text-5xl font-bold my-14">
					Experience
					<Icon
						name="underline"
						className="h-3 sm:h-4 mt-2 text-highlight"
					/>
				</h2>
				<Timeline />
			</section>

			<section className="flex flex-col gap-3 my-14">
				<h2 className="text-4xl sm:text-5xl font-bold">Skills</h2>
				<p className="text-secondary">
					Skills acquired through years of engagement in diverse
					projects, including personal ventures and client
					collaborations.
				</p>
				<Marquee className="my-2" />
			</section>

			<section className="flex flex-col gap-3 my-14">
				<h2 className="text-4xl sm:text-5xl font-bold">Projects</h2>
				<p className="text-secondary">
					When I&#39;m not working on a client project, I&#39;m
					working on my own projects. Here are some things I made over
					the years.
				</p>
				<Projects />
			</section>

			<section className="my-14">
				<div className="flex items-center gap-4">
					<h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
						Frequently Asked Questions
					</h2>
					<Icon
						name="arrow"
						className="h-20 lg:h-10 text-highlight"
					/>
				</div>
				<Faq />
			</section>

			<Newsletter />
		</>
	);
}
