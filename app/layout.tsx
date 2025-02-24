import type React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Victoria Werner - Advogada",
  description: "Advogada especializada em direito penal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://raw.githubusercontent.com/francopoffo/image-files/main/logo.png"
                  alt="Logo"
                  width={115}
                  height={115}
                />
              </Link>
              <nav className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-primary"
                >
                  Contato
                </Link>
              </nav>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer className="border-t">
            <div className="container max-w-6xl mx-auto flex gap-2 px-4 py-6 justify-center">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Victoria Werner. Todos os direitos
                reservados.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
