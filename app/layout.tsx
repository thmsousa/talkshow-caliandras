'use client'; // Precisamos disso para detectar a mudança de página
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header"; 
import Footer from "./components/layout/Footer"; 
import ChatBot from "./components/ChatBot"; 
import { usePathname } from "next/navigation"; // Importante para detectar a troca

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Detecta qual página estamos (ex: /videos)

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        
        {/* Adicionamos o "key={pathname}". 
            Isso força o React a reiniciar a animação toda vez que o link muda */}
        <main 
            key={pathname} 
            className="container page-transition-wrapper" 
            style={{ paddingTop: '20px', paddingBottom: '50px' }}
        >
            {children}
        </main>

        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}