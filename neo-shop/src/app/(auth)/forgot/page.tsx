"use client";
import { useState } from "react";

export default function ForgotPage() {
	const [email, setEmail] = useState("");
	const [sent, setSent] = useState(false);
	async function submit(e: React.FormEvent) {
		e.preventDefault();
		// TODO: implement email via /api/auth/forgot
		setSent(true);
	}
	return (
		<form onSubmit={submit} className="space-y-4">
			<h1 className="text-xl font-semibold">Reset password</h1>
			<div>
				<label className="text-sm text-white/70">Email</label>
				<input className="w-full mt-1 rounded-md bg-white/10 border border-white/20 px-3 py-2" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
			</div>
			<button className="w-full rounded-full bg-[#00d9ff] text-black py-2 font-medium">Send reset link</button>
			{sent && <div className="text-sm text-white/70">If an account exists, a reset link will be sent.</div>}
		</form>
	);
}