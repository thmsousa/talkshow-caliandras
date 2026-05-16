'use client';
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ChatBot from "./components/ChatBot";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700", "900"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "600", "800"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Detecta qual página estamos (ex: /videos)

  const { scrollYProgress } = useScroll();

  return (
    <html lang="pt-BR">
      <body className={outfit.className} style={{ backgroundColor: '#ffffff' }}>
        {/* Barra de Progresso de Leitura */}
        <motion.div
          className="reading-progress-bar"
          style={{
            scaleX: scrollYProgress,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'var(--color-accent)',
            transformOrigin: '0%',
            zIndex: 10001 // Acima do header
          }}
        />
        
        <Header />

        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="page-transition-wrapper"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
        {pathname === '/produtos' && <ChatBot />}
      </body>
    </html>
  );
}