import styles from './Footer.module.css';
import { Instagram, Youtube, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.brandInfo}>
                        <h2 className={styles.logoText}>CALIANDRAS</h2>
                        <p className={styles.tagline}>
                            Caliandras, do texto para o mundo,<br />do mundo para o texto.
                        </p>
                    </div>

                    <div className={styles.socialCol}>
                        <h4 className={styles.colTitle}>Conecte-se</h4>
                        <div className={styles.socialLinks}>
                            <a href="https://www.instagram.com/caliandrasshow/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><Instagram size={20} /></a>
                            <a href="https://www.youtube.com/@CaliantrasTalkShow" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><Youtube size={20} /></a>
                            <a href="mailto:caliandrasshow@gmail.com" className={styles.socialIcon}><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottomRow}>
                    <div className={styles.copyright}>
                        © 2026 Caliandras Talkshow. Todos os direitos reservados.
                    </div>
                    <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Voltar ao topo">
                        <span className="premium-link">VOLTAR AO TOPO</span>
                        <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
}