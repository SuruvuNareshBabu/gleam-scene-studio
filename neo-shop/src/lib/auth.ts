import { PrismaAdapter } from "@next-auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma as any),
	session: { strategy: "jwt" },
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;
				const user = await prisma.user.findUnique({ where: { email: credentials.email } });
				if (!user?.passwordHash) return null;
				const valid = await bcrypt.compare(credentials.password, user.passwordHash);
				if (!valid) return null;
				return { id: user.id, name: user.name ?? null, email: user.email ?? null, image: user.image ?? null } as any;
			},
		}),
	],
	pages: {},
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.userId = (user as any).id;
			return token;
		},
		async session({ session, token }) {
			(session as any).userId = (token as any).userId;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};