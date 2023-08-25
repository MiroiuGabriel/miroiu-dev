export function useClipboard() {
	const copy = async (text: string) => {
		if (!navigator?.clipboard) {
			console.warn('Clipboard not supported');
			return false;
		}

		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch (error) {
			console.warn('Copy failed', error);
			return false;
		}
	};

	return copy;
}
