'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Resenhas', href: '/resenhas' },
    { name: 'Parceiros', href: '/parceiros' },
    { name: 'Indicações', href: '/indicacoes' },
    { name: 'Nosso Time', href: '/time' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Sobre', href: '/sobre' }, 
];

export default function NavbarClient() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav>
            {/* BOTÃO HAMBÚRGUER REFINADO */}
            <button 
                onClick={toggleMenu}
                className="mobile-toggle"
                aria-label="Menu"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '26px',
                    height: '16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    zIndex: 2005,
                    position: 'relative'
                }}
            >
                <div style={{ 
                    width: '100%', height: '1.5px', 
                    background: isOpen ? 'white' : 'black', 
                    transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)' 
                }} />
                <div style={{ 
                    width: '100%', height: '1.5px', 
                    background: isOpen ? 'white' : 'black', 
                    transition: '0.4s',
                    opacity: isOpen ? 0 : 1 
                }} />
                <div style={{ 
                    width: '100%', height: '1.5px', 
                    background: isOpen ? 'white' : 'black', 
                    transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)' 
                }} />
            </button>

            {/* DESKTOP NAV */}
            <ul className="nav-list desktop-only">
                {navItems.map((item) => (
                    <li key={item.name} className="nav-item"> 
                        <Link 
                            href={item.href} 
                            className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* MOBILE GAVETA (Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="mobile-drawer"
                    >
                        <ul className="mobile-list">
                            {navItems.map((item, i) => (
                                <motion.li 
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link 
                                        href={item.href} 
                                        onClick={() => setIsOpen(false)}
                                        className={`nav-link-mobile ${pathname === item.href ? 'active-mobile' : ''}`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .nav-list {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 30px;
                }

                :global(.nav-link) {
                    color: #121212;
                    font-weight: 700;
                    font-size: 11px;
                    transition: all 0.3s ease;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-decoration: none;
                    position: relative;
                    opacity: 0.6;
                }

                :global(.nav-link:hover), :global(.nav-link.active) {
                    opacity: 1;
                    color: var(--color-accent);
                }

                /* Linha minimalista no active/hover para Desktop */
                @media (min-width: 769px) {
                    :global(.nav-link::after) {
                        content: '';
                        position: absolute;
                        bottom: -6px;
                        left: 50%;
                        width: 0;
                        height: 2px;
                        background: var(--color-accent);
                        transition: all 0.3s ease;
                        transform: translateX(-50%);
                        border-radius: 2px;
                    }
                    :global(.nav-link:hover::after), :global(.nav-link.active::after) {
                        width: 15px;
                    }
                }

                .mobile-drawer {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #0a0a0a;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                }

                .mobile-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                :global(.nav-link-mobile) {
                    color: white;
                    font-size: 28px;
                    font-weight: 950;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    text-decoration: none;
                    opacity: 0.4;
                    transition: opacity 0.3s;
                }

                :global(.active-mobile) {
                    opacity: 1;
                    color: var(--color-accent);
                }

                @media (max-width: 768px) {
                    .desktop-only { display: none; }
                }

                @media (min-width: 769px) {
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
}