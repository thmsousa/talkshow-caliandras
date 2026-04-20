'use client'; 

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="mobile-drawer"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#0a0a0a',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999, // Valor altíssimo no portal
                    }}
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
    );

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
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '30px',
                    height: '30px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    zIndex: 10000, // Acima do portal para permitir fechar
                    position: 'relative'
                }}
            >
                <motion.div 
                    animate={isOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: -6 }}
                    style={{ 
                        width: '24px', height: '1.5px', 
                        background: isOpen ? 'white' : 'black', 
                        position: 'absolute'
                    }} 
                />
                <motion.div 
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    style={{ 
                        width: '24px', height: '1.5px', 
                        background: 'black',
                        position: 'absolute'
                    }} 
                />
                <motion.div 
                    animate={isOpen ? { rotate: -45, y: 1 } : { rotate: 0, y: 6 }}
                    style={{ 
                        width: '24px', height: '1.5px', 
                        background: isOpen ? 'white' : 'black', 
                        position: 'absolute'
                    }} 
                />
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

            {/* PORTAL PARA O MENU MOBILE */}
            {mounted && createPortal(menuContent, document.body)}

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