'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, Youtube, Twitter } from 'lucide-react';
import styles from './Navbar.module.css';

const navItems = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Resenhas', href: '/resenhas' },
    { name: 'Indicações', href: '/indicacoes' },
    { name: 'Equipe', href: '/equipe' },
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
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className={styles.mobileDrawer}
                >
                    {/* Botão de Fechar dentro do Drawer */}
                    <button 
                        onClick={() => setIsOpen(false)}
                        className={styles.closeButton}
                        aria-label="Fechar Menu"
                    >
                        <motion.div
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </motion.div>
                    </button>

                    <ul className={styles.mobileList}>
                        {navItems.map((item, i) => (
                            <motion.li
                                key={item.name}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.3 + i * 0.08,
                                    duration: 0.8,
                                    ease: [0.19, 1, 0.22, 1]
                                }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`${styles.navLinkMobile} ${pathname === item.href ? styles.activeMobile : ''}`}
                                >
                                    <span className={styles.navIndex}>{(i + 1).toString().padStart(2, '0')}</span>
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>

                    <motion.div 
                        className={styles.mobileFooter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <div className={styles.socialLinks}>
                            <a href="https://www.instagram.com/caliandrasshow/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><Instagram size={20} /></a>
                            <a href="https://www.youtube.com/@CaliantrasTalkShow" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><Youtube size={20} /></a>
                            <a href="mailto:caliandrasshow@gmail.com" className={styles.socialIcon}><Mail size={20} /></a>
                        </div>
                        <div className={styles.mobileInfo}>
                            <span>Caliandras • 2026</span>
                            <span>Coletivo Criativo</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <nav>
            {/* BOTÃO mobile*/}
            <button
                onClick={toggleMenu}
                className={styles.mobileToggle}
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
                    zIndex: 10000,
                    position: 'relative'
                }}
            >
                <motion.div
                    animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                    style={{
                        width: '24px', height: '1.5px',
                        background: isOpen ? 'white' : '#111',
                        position: 'absolute'
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                    style={{
                        width: '24px', height: '1.5px',
                        background: '#111',
                        position: 'absolute'
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                    style={{
                        width: '24px', height: '1.5px',
                        background: isOpen ? 'white' : '#111',
                        position: 'absolute'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </button>

            {/* DESKTOP NAV */}
            <ul className={`${styles.navList} ${styles.desktopOnly}`}>
                {navItems.map((item) => (
                    <li key={item.name} className={styles.navItem}>
                        <Link
                            href={item.href}
                            className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* PORTAL PARA O MENU MOBILE */}
            {mounted && createPortal(menuContent, document.body)}
        </nav>
    );
}