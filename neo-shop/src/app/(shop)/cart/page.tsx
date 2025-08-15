"use client";
import { useState } from "react";

export default function CartPage() {
	const [qty, setQty] = useState(1);
	const [coupon, setCoupon] = useState("");
	const price = 19900;
	const subtotal = price * qty;
	const discount = 0;
	const shipping = 0;
	const tax = Math.round(subtotal * 0.08);
	const total = subtotal - discount + shipping + tax;

	return (
		<div className="grid lg:grid-cols-3 gap-8">
			<div className="lg:col-span-2 space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center gap-4">
					<div className="size-20 rounded-xl bg-gradient-to-br from-black to-[#0b0e14]" />
					<div className="flex-1">
						<div className="font-medium">Neo Product</div>
						<div className="text-white/60 text-sm">Neon Blue / M</div>
					</div>
					<div className="flex items-center gap-2">
						<button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-full bg-white/10">-</button>
						<div className="w-8 text-center">{qty}</div>
						<button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-full bg-white/10">+</button>
					</div>
					<div className="w-24 text-right text-[#d4af37]">${(price / 100).toFixed(2)}</div>
				</div>
				<div className="flex items-center gap-2">
					<input placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-2" />
					<button className="px-4 py-2 rounded-full bg-[#00d9ff] text-black">Apply</button>
				</div>
			</div>
			<div className="space-y-4">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<div className="flex justify-between py-1"><span className="text-white/70">Subtotal</span><span>${(subtotal / 100).toFixed(2)}</span></div>
					<div className="flex justify-between py-1"><span className="text-white/70">Discount</span><span>-${(discount / 100).toFixed(2)}</span></div>
					<div className="flex justify-between py-1"><span className="text-white/70">Shipping</span><span>${(shipping / 100).toFixed(2)}</span></div>
					<div className="flex justify-between py-1"><span className="text-white/70">Tax</span><span>${(tax / 100).toFixed(2)}</span></div>
					<div className="flex justify-between py-2 border-t border-white/10 mt-2 font-medium"><span>Total</span><span className="text-[#d4af37]">${(total / 100).toFixed(2)}</span></div>
					<button className="w-full mt-2 rounded-full bg-[#d4af37] text-black py-3 font-medium">Checkout</button>
				</div>
				<div className="text-xs text-white/60">Secure payments with Stripe and PayPal.</div>
			</div>
		</div>
	);
}