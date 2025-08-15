import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
	const session = await getServerSession(authOptions as any);
	const userId = (session as any)?.userId || null;
	let cart = await prisma.cart.findFirst({ where: { userId }, include: { items: true, coupon: true } });
	if (!cart) {
		cart = await prisma.cart.create({ data: { userId }, include: { items: true, coupon: true } });
	}
	return NextResponse.json(cart);
}

export async function POST(request: Request) {
	const session = await getServerSession(authOptions as any);
	const userId = (session as any)?.userId || null;
	const { productId, variantId, quantity } = await request.json();
	let cart = await prisma.cart.findFirst({ where: { userId } });
	if (!cart) cart = await prisma.cart.create({ data: { userId } });
	await prisma.cartItem.create({ data: { cartId: cart.id, productId, productVariantId: variantId, quantity: Math.max(1, quantity || 1), unitPrice: 0 } });
	return NextResponse.json({ ok: true });
}