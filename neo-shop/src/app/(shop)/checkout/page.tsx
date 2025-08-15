export default function CheckoutPage() {
	const subtotal = 19900;
	const shipping = 0;
	const tax = Math.round(subtotal * 0.08);
	const total = subtotal + shipping + tax;
	return (
		<div className="grid lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2 space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-3">Shipping address</h2>
					<div className="text-white/60 text-sm">Add or select an address during this step.</div>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<h2 className="font-medium mb-3">Payment</h2>
					<div className="text-white/60 text-sm">Stripe card input and PayPal buttons will render here.</div>
				</div>
			</div>
			<div className="space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<div className="flex justify-between py-1"><span className="text-white/70">Subtotal</span><span>${(subtotal/100).toFixed(2)}</span></div>
					<div className="flex justify-between py-1"><span className="text-white/70">Shipping</span><span>${(shipping/100).toFixed(2)}</span></div>
					<div className="flex justify-between py-1"><span className="text-white/70">Tax</span><span>${(tax/100).toFixed(2)}</span></div>
					<div className="flex justify-between py-2 border-t border-white/10 mt-2 font-medium"><span>Total</span><span className="text-[#d4af37]">${(total/100).toFixed(2)}</span></div>
					<button className="w-full mt-2 rounded-full bg-[#d4af37] text-black py-3 font-medium">Pay now</button>
				</div>
			</div>
		</div>
	);
}