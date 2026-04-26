'use client';

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                
                {/* LADO ESQUERDO: BRANDING */}
                <div className={styles.footerBrand}>
                    <p className={styles.brandName}>
                        CALIANDRAS
                    </p> 
                    <p className={styles.brandDescription}>
                        Caliandras, do texto para o mundo, do mundo para o texto.
                    </p>
                </div>

                {/* LADO DIREITO: REDES */}
                <div className={styles.footerNavGroup}>
                    <nav className={styles.footerNav}>
                        <span className={styles.navLabel}>Conecte-se</span>
                        <div className={styles.socialGrid}>
                            <Link 
                                href="https://www.instagram.com/caliandrasshow/" 
                                target="_blank" 
                                className={styles.socialLink}
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                                <span>Instagram</span>
                            </Link>
                            <Link 
                                href="https://www.youtube.com/@CaliantrasTalkShow" 
                                target="_blank" 
                                className={styles.socialLink}
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                                <span>YouTube</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            {/* BARRA INFERIOR DE CRÉDITOS */}
            <div className={`container ${styles.footerBottom}`}>
                <p>© {new Date().getFullYear()} Caliandras Show. Todos os direitos reservados.</p>
                <p className={styles.creditTag}>Direção de Thiago e Isabella</p>
            </div>
        </footer>
    );
}