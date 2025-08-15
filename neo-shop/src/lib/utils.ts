import { type ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatCurrency(cents: number, currency: string = "USD") {
	return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(cents / 100);
}