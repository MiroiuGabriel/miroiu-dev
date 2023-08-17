import Link from "next/link";

export function SkipToMain() {
	return (
		<Link
			href="#skip"
			className="absolute py-3 px-4 bg-background left-0 ml-6 lg:left-[-25%] -top-16 rounded-lg z-10 focus:translate-y-24 no-underline transition-transform duration-300 ease-in-out"
		>
			Skip to main
		</Link>
	);
}
