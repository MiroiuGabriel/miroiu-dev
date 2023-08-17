import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
	return twMerge(clsx(...args));
}

export function radiansToDegrees(rad: number) {
	return (rad * 180.0) / Math.PI;
}

export function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(min, num), max);
}

export function delay(ms: number): Promise<void> {
	return new Promise(res => setTimeout(() => res(), ms));
}

export function formatDate(date: string) {
	const currentDate = new Date();
	const targetDate = new Date(date);
  
	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
	const daysAgo = currentDate.getDate() - targetDate.getDate();
  
	let formattedDate = '';
  
	if (yearsAgo > 0) {
	  formattedDate = `${yearsAgo}y ago`;
	} else if (monthsAgo > 0) {
	  formattedDate = `${monthsAgo}mo ago`;
	} else if (daysAgo > 0) {
	  formattedDate = `${daysAgo}d ago`;
	} else {
	  formattedDate = 'Today';
	}
  
	const fullDate = targetDate.toLocaleString('en-us', {
	  month: 'long',
	  day: 'numeric',
	  year: 'numeric',
	});
  
	return `${fullDate} (${formattedDate})`;
  }