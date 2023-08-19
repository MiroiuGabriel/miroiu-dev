import Image, { ImageProps } from 'next/image';

export function RoundedImage({ alt, ...props }: ImageProps) {
	return <Image alt={alt} className="rounded-lg" {...props} />;
}
