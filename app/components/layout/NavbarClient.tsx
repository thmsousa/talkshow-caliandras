'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, Youtube, Twitter, Sun, Moon } from 'lucide-react';
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
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Theme initialization and event syncing
    useEffect(() => {
        const savedTheme = localStorage.getItem('caliandras-theme') as 'light' | 'dark';
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            setTheme('light');
            document.documentElement.setAttribute('data-theme', 'light');
        }

        const handleThemeChange = () => {
            const currentTheme = localStorage.getItem('caliandras-theme') as 'light' | 'dark';
            if (currentTheme) {
                setTheme(currentTheme);
            }
        };
        window.addEventListener('theme-change', handleThemeChange);
        return () => window.removeEventListener('theme-change', handleThemeChange);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('caliandras-theme', newTheme);
        window.dispatchEvent(new Event('theme-change'));
    };

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
                            <a href="https://wa.me/556392551056?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20equipe%20do%20Caliandras!" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="currentColor" className="lucide lucide-whatsapp">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>
                            </a>
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
        <nav className={styles.navContainer}>
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

            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className={styles.themeToggle}
                aria-label={theme === 'light' ? 'Ativar Modo Escuro' : 'Ativar Modo Claro'}
            >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

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
                        background: isOpen ? 'white' : 'var(--color-text)',
                        position: 'absolute'
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                    style={{
                        width: '24px', height: '1.5px',
                        background: 'var(--color-text)',
                        position: 'absolute'
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                    style={{
                        width: '24px', height: '1.5px',
                        background: isOpen ? 'white' : 'var(--color-text)',
                        position: 'absolute'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </button>

            {/* PORTAL PARA O MENU MOBILE */}
            {mounted && createPortal(menuContent, document.body)}
        </nav>
    );
}