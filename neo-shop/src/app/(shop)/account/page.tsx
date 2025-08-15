export default function AccountPage() {
	return (
		<div className="grid lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2 space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-3">Order history</h2>
					<div className="text-white/60 text-sm">No orders yet.</div>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-3">Wishlist</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
						<div className="h-24 rounded-xl bg-white/5 border border-white/10" />
						<div className="h-24 rounded-xl bg-white/5 border border-white/10" />
					</div>
				</div>
			</div>
			<div className="space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-3">Addresses</h2>
					<div className="text-white/60 text-sm">Add a shipping address for faster checkout.</div>
					<button className="mt-3 px-4 py-2 rounded-full bg-[#00d9ff] text-black">Add address</button>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-3">Security</h2>
					<button className="px-4 py-2 rounded-full border border-white/20 bg-white/5">Change password</button>
				</div>
			</div>
		</div>
	);
}