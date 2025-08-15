export default function AdminHome() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-8">
			<h1 className="text-2xl font-semibold mb-6">Admin</h1>
			<div className="grid md:grid-cols-2 gap-6">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-2">Products</h2>
					<div className="text-white/60 text-sm">Add, edit, delete products.</div>
					<div className="mt-3 flex gap-2">
						<a href="/admin/products" className="px-4 py-2 rounded-full bg-[#00d9ff] text-black">Manage</a>
					</div>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-2">Orders</h2>
					<div className="text-white/60 text-sm">Track and update order statuses.</div>
					<div className="mt-3 flex gap-2">
						<a href="/admin/orders" className="px-4 py-2 rounded-full bg-[#00d9ff] text-black">View</a>
					</div>
				</div>
			</div>
		</div>
	);
}