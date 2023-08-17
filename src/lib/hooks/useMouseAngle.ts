import { RefObject, useEffect, useState } from 'react';
import { useInView } from '.';
import { radiansToDegrees } from '../utils';

export function useMouseAngle(
	initialAngle: number,
	target: RefObject<HTMLElement>
) {
	const [angle, setAngle] = useState(() => `${initialAngle}deg`);

	const inView = useInView(target);

	useEffect(() => {
		if (!target.current) return;

		const { left, width, top, height } =
			target.current.getBoundingClientRect();

		const handX = left + width / 2;
		const handY = top + height / 2;

		const mouseMoveHandler = (ev: MouseEvent) => {
			if (!inView) return;

			const posX = handX - ev.clientX;
			const posY = handY - ev.clientY;

			const angle = radiansToDegrees(Math.atan2(posY, posX));
			setAngle(`${angle}deg`);
		};

		document.addEventListener('mousemove', mouseMoveHandler);

		return () =>
			document.removeEventListener('mousemove', mouseMoveHandler);
	}, [target, inView]);

	return angle;
}
