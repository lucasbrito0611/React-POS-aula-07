import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center bg-zinc-700">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        className="mb-8 dark:invert"
        priority
      />
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Bem-vindo ao meu projeto com Next.js
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
        Este é um projeto inicial usando a estrutura App Router do Next.js com suporte a Tailwind CSS, com direito a página de TAREFAS.
      </p>
      {/* LINK */}
      <Link
        href="/tarefas"
        className="px-6 py-3 bg-black text-white rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
      >
        Tarefas
      </Link>

    </main>
  );
}