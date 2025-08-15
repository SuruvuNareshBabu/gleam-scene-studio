import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const q = searchParams.get("q") || undefined;
	const category = searchParams.get("category") || undefined;
	const minPrice = Number(searchParams.get("minPrice") || 0);
	const maxPrice = Number(searchParams.get("maxPrice") || 10000000);
	const page = Number(searchParams.get("page") || 1);
	const pageSize = Math.min(Number(searchParams.get("pageSize") || 20), 48);

	const where: any = {
		isActive: true,
		price: { gte: minPrice, lte: maxPrice },
		...(q ? { name: { contains: q, mode: "insensitive" } } : {}),
		...(category ? { category: { slug: category } } : {}),
	};

	const [items, total] = await Promise.all([
		prisma.product.findMany({
			where,
			skip: (page - 1) * pageSize,
			take: pageSize,
			orderBy: { createdAt: "desc" },
			include: { images: true, variants: true },
		}),
		prisma.product.count({ where }),
	]);

	return NextResponse.json({ items, total, page, pageSize });
}