"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Link from "next/link";

const schema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(6),
});

type Values = z.infer<typeof schema>;

export default function SignupPage() {
	const { register, handleSubmit, formState: { errors } } = useForm<Values>({ resolver: zodResolver(schema) });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function onSubmit(values: Values) {
		setLoading(true);
		setError(null);
		const res = await fetch("/api/auth/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
		if (!res.ok) {
			const data = await res.json().catch(() => ({}));
			setError(data.error || "Failed to sign up");
		} else {
			window.location.href = "/login";
		}
		setLoading(false);
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<h1 className="text-xl font-semibold">Create account</h1>
			<div>
				<label className="text-sm text-white/70">Name</label>
				<input className="w-full mt-1 rounded-md bg-white/10 border border-white/20 px-3 py-2" {...register("name")}/>
				{errors.name && <div className="text-xs text-red-400 mt-1">{errors.name.message}</div>}
			</div>
			<div>
				<label className="text-sm text-white/70">Email</label>
				<input className="w-full mt-1 rounded-md bg-white/10 border border-white/20 px-3 py-2" type="email" {...register("email")}/>
				{errors.email && <div className="text-xs text-red-400 mt-1">{errors.email.message}</div>}
			</div>
			<div>
				<label className="text-sm text-white/70">Password</label>
				<input className="w-full mt-1 rounded-md bg-white/10 border border-white/20 px-3 py-2" type="password" {...register("password")}/>
				{errors.password && <div className="text-xs text-red-400 mt-1">{errors.password.message}</div>}
			</div>
			{error && <div className="text-sm text-red-400">{error}</div>}
			<button disabled={loading} className="w-full rounded-full bg-[#00d9ff] text-black py-2 font-medium">{loading ? "Creating..." : "Sign up"}</button>
			<div className="text-sm text-white/60">Already have an account? <Link className="text-[#00d9ff]" href="/login">Login</Link></div>
		</form>
	);
}