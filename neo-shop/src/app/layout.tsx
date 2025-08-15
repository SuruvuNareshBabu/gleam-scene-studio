import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEO Shop — Futuristic 3D Commerce",
  description: "Immersive 3D shopping with glowing accents, glassmorphism, and ultra-smooth UX.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,120,255,0.15),transparent_60%)] dark:bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,200,255,0.12),transparent_60%)]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
