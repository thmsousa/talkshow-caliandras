'use client';

import Link from 'next/link';
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
                        <ul>
                            <li>
                                <Link 
                                    href="https://www.instagram.com/caliandrasshow/" 
                                    target="_blank" 
                                    className={styles.footerLink}
                                >
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="https://youtube.com" 
                                    target="_blank" 
                                    className={styles.footerLink}
                                >
                                    YouTube
                                </Link>
                            </li>
                        </ul>
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