import { RefObject, useEffect, useState } from 'react';

export function useInView(
	target: RefObject<HTMLElement>,
	options: IntersectionObserverInit = {
		root: null,
		threshold: 0,
		rootMargin: '0%',
	}
) {
	const [entry, setEntry] = useState<IntersectionObserverEntry>();

	const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = target.current;

		if (!node) return;

		const observer = new IntersectionObserver(updateEntry, options);

		observer.observe(node);

		return () => observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const inView = !!entry?.isIntersecting;

	return inView;
}
