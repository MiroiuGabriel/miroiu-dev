'use client';

import TypewriterComponent, {
	Options,
	TypewriterClass,
} from 'typewriter-effect';

export function Typewriter() {
	return (
		<TypewriterComponent
			onInit={typewriter => {
				typewriter
					.start()
					.typeString('Miroiu Gabriel')
					.pauseFor(1000)
					.deleteAll()
					.typeString('A Developer')
					.pauseFor(1000)
					.deleteAll()
					.typeString('A Student')
					.pauseFor(1000);
			}}
			options={{ loop: true }}
		/>
	);
}
