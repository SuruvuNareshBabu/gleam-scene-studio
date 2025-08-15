"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const isDark = theme !== "light";
	return (
		<button
			aria-label="Toggle theme"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
		>
			{isDark ? <Sun size={16} /> : <Moon size={16} />}
		</button>
	);
}