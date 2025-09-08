import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Box, Text } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Rick and Morty",
	description: "Rick and Morty application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<Box display="flex" justifyContent="center" alignItems="center" w="full" minH="100vh" bg={{ base: "white", _dark: "black" }}>
						<main>{children}</main>
					</Box>
				</Providers>
			</body>
		</html>
	);
}
