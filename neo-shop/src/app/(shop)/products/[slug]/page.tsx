"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";

export default function ProductPage() {
	const [color, setColor] = useState("Neon Blue");
	const [size, setSize] = useState("M");
	return (
		<div className="grid lg:grid-cols-2 gap-8">
			<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
				<div className="aspect-square">
					<Canvas camera={{ position: [0, 0, 2.4] }}>
						<ambientLight intensity={0.6} />
						<Environment preset="city" />
						<mesh rotation={[0.5, 0.3, 0]}>
							<torusKnotGeometry args={[1, 0.3, 128, 32]} />
							<meshStandardMaterial color={color === "Neon Blue" ? "#00d9ff" : color === "Gold" ? "#d4af37" : "#ffffff"} metalness={0.9} roughness={0.2} />
						</mesh>
						<OrbitControls />
					</Canvas>
				</div>
			</div>
			<div className="space-y-4">
				<h1 className="text-3xl font-semibold">Neo Product</h1>
				<div className="text-[#d4af37] text-xl">$199</div>
				<div className="grid grid-cols-2 gap-3">
					<div>
						<div className="text-sm text-white/60 mb-2">Color</div>
						<div className="flex gap-2">
							{["Neon Blue", "Gold", "White"].map((c) => (
								<button key={c} onClick={() => setColor(c)} className={`px-3 py-1 rounded-full border ${color === c ? "border-[#00d9ff] bg-[#00d9ff]/20" : "border-white/20 bg-white/5"}`}>{c}</button>
							))}
						</div>
					</div>
					<div>
						<div className="text-sm text-white/60 mb-2">Size</div>
						<div className="flex gap-2">
							{["S", "M", "L", "XL"].map((s) => (
								<button key={s} onClick={() => setSize(s)} className={`px-3 py-1 rounded-full border ${size === s ? "border-[#00d9ff] bg-[#00d9ff]/20" : "border-white/20 bg-white/5"}`}>{s}</button>
							))}
						</div>
					</div>
				</div>
				<div className="flex items-center gap-3 pt-2">
					<button className="px-5 py-3 rounded-full bg-[#00d9ff] text-black font-medium">Add to cart</button>
					<button className="px-5 py-3 rounded-full border border-white/20 bg-white/5">Wishlist</button>
				</div>
				<p className="text-white/70">High fidelity, lightweight 3D model with real-time lighting. Experience the product in detail with zoom and rotation.</p>
			</div>
		</div>
	);
}