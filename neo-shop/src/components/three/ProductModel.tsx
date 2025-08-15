"use client";
import { useGLTF } from "@react-three/drei";
import type { ComponentProps } from "react";

type Props = {
	url?: string;
	color?: string;
} & Partial<ComponentProps<"mesh">>;

export default function ProductModel({ url, color = "#00d9ff", ...props }: Props) {
	const gltf = useGLTF(url || "/models/placeholder.glb", true);
	return <primitive object={(gltf as any).scene} {...props} />;
}

useGLTF.preload("/models/placeholder.glb");