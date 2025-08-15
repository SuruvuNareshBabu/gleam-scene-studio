"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Suspense } from "react";

function SpinningTorus() {
	return (
		<Float speed={1.5} rotationIntensity={0.8} floatIntensity={2}>
			<mesh rotation={[0.5, 0.2, 0]}>
				<torusKnotGeometry args={[1, 0.35, 128, 32]} />
				<meshStandardMaterial color="#00D9FF" emissive="#00A6FF" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
			</mesh>
		</Float>
	);
}

export default function ShopHome() {
	const [query, setQuery] = useState("");
	const categories = useMemo(() => [
		{ name: "All", slug: "all" },
		{ name: "Sneakers", slug: "sneakers" },
		{ name: "Apparel", slug: "apparel" },
		{ name: "Accessories", slug: "accessories" },
		{ name: "Tech", slug: "tech" },
	], []);

	return (
		<div className="space-y-10">
			<section className="grid lg:grid-cols-2 gap-8 items-center">
				<div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_0_120px_-40px_#00ccff]">
					<Canvas camera={{ position: [0, 0, 4] }}>
						<ambientLight intensity={0.6} />
						<directionalLight position={[5, 5, 5]} intensity={1.2} />
						<Suspense fallback={null}>
							<SpinningTorus />
							<Environment preset="city" />
						</Suspense>
						<OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
					</Canvas>
				</div>
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
						<span className="text-white">Shop the </span>
						<span className="text-[#d4af37]">Future</span>
					</h1>
					<p className="text-white/70 max-w-prose">Immersive 3D showcases, premium design, and ultra-smooth interactions. Explore categories and experience shopping reimagined.</p>
					<div className="relative">
						<input
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search products..."
							className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 outline-none focus:ring-2 focus:ring-[#00d9ff]/60 placeholder-white/40"
						/>
						<motion.button whileTap={{ scale: 0.98 }} className="absolute right-1 top-1 rounded-full bg-[#00d9ff] text-black px-5 py-2 font-medium">Search</motion.button>
					</div>
					<div className="flex gap-3 overflow-auto pb-2">
						{categories.map((c) => (
							<Link key={c.slug} href={`/products?category=${c.slug}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors whitespace-nowrap">{c.name}</Link>
						))}
					</div>
				</div>
			</section>

			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold">Featured</h2>
					<Link href="/products" className="text-[#00d9ff] hover:underline">View all</Link>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{Array.from({ length: 8 }).map((_, i) => (
						<motion.a key={i} href="/products/demo" className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
							<div className="aspect-square rounded-xl bg-gradient-to-br from-black to-[#0b0e14] relative">
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
									<Canvas camera={{ position: [0, 0, 2.8] }}>
										<ambientLight intensity={0.6} />
										<SpinningTorus />
									</Canvas>
								</div>
							</div>
							<div className="mt-3">
								<div className="text-sm text-white/70">Category</div>
								<div className="font-medium">Neo Product {i + 1}</div>
								<div className="text-[#d4af37]">$199</div>
							</div>
						</motion.a>
					))}
				</div>
			</section>
		</div>
	);
}