import type { NextConfig } from "next";

const securityHeaders = [
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "Permissions-Policy",
		value: "geolocation=(), microphone=(), camera=()",
	},
];

const nextConfig: NextConfig = {
	reactStrictMode: true,
	headers: async () => [
		{ source: "/(.*)", headers: securityHeaders },
	],
	eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
