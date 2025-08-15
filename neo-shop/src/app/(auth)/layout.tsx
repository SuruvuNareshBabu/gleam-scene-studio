export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-[80vh] grid place-items-center px-4">
			<div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
				{children}
			</div>
		</div>
	);
}