import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TarefasWeb",
	description: "Aplicativo Web tarefas com router e context",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
					<div className="min-h-screen bg-zinc-700">
						<Navbar />
						<main className="container mx-auto p-4">{children}</main>
					</div>
			</body>
		</html>
	);
};

export default RootLayout;