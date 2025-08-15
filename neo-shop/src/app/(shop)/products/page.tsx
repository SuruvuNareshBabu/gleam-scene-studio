export default async function ProductsPage() {
	// Placeholder server data
	const products = Array.from({ length: 16 }).map((_, i) => ({ id: `${i}`, name: `Neo Product ${i+1}`, price: 19900 }));
	return (
		<div className="grid lg:grid-cols-4 gap-8">
			<aside className="lg:col-span-1 space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<div className="font-medium mb-2">Filters</div>
					<div className="space-y-3 text-sm">
						<div>
							<div className="text-white/70 mb-1">Price</div>
							<input type="range" min={0} max={500} defaultValue={200} className="w-full" />
						</div>
						<div>
							<div className="text-white/70 mb-1">Rating</div>
							<div className="flex gap-2">
								{[4,3,2,1].map(r => (<label key={r} className="inline-flex items-center gap-1"><input type="checkbox"/> {r}★ & up</label>))}
							</div>
						</div>
						<div>
							<label className="inline-flex items-center gap-2"><input type="checkbox"/> In stock</label>
						</div>
					</div>
				</div>
			</aside>
			<section className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
				{products.map((p, i) => (
					<a key={p.id} href={`/products/demo`} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3">
						<div className="aspect-square rounded-xl bg-gradient-to-br from-black to-[#0b0e14]" />
						<div className="mt-2 font-medium">{p.name}</div>
						<div className="text-[#d4af37]">${(p.price/100).toFixed(2)}</div>
					</a>
				))}
			</section>
		</div>
	);
}