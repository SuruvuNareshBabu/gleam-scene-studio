export const dynamic = "force-static";
import { ReactNode } from "react";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function ShopLayout({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-screen">
				<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
					<div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
						<Link href="/" className="text-xl font-semibold text-white dark:text-white">
							<span className="bg-gradient-to-r from-[#0ff] via-[#66f] to-[#0ff] bg-clip-text text-transparent">NEO</span>
							<span className="ml-1 text-[#d4af37]">Shop</span>
						</Link>
						<nav className="ml-auto flex items-center gap-4 text-sm items-center">
							<Link href="/products" className="hover:text-[#0ff] transition-colors">Products</Link>
							<Link href="/categories" className="hover:text-[#0ff] transition-colors">Categories</Link>
							<Link href="/cart" className="hover:text-[#0ff] transition-colors">Cart</Link>
							<Link href="/account" className="hover:text-[#0ff] transition-colors">Account</Link>
							<ThemeToggle />
						</nav>
					</div>
				</header>
				<main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
				<footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">© {new Date().getFullYear()} NEO Shop</footer>
			</div>
	);
}