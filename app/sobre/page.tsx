'use client';

import Link from 'next/link';
import styles from './SobrePage.module.css';

export default function SobrePage() {
    return (
        <main className={styles.mainContainer}>
            
            {/* 1. HERO SECTION */}
            <header className={styles.hero}>
                <span className={styles.overtitle}>Manifesto Caliandras</span>
                <h1 className={styles.title}>
                    Cultura que <span style={{ color: 'var(--color-accent)' }}>inspira</span> e conecta.
                </h1>
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--color-accent)', margin: '40px auto 0' }} />
            </header>

            {/* 2. SEÇÃO: MANIFESTO */}
            <section className={styles.contentSection}>
                <div className={styles.textBlock}>
                    <span className={styles.sectionLabel}>01 // A Missão</span>
                    <h2 className={styles.sectionTitle}>Mais que um Talk Show.</h2>
                    <p className={styles.description}>
                        O Caliandras nasceu da urgência de dar palco às vozes que constroem a identidade cultural brasileira. 
                        Exploramos as profundezas da literatura regional e nacional, conectando autores consagrados e novos talentos 
                        a um público ávido por conteúdo inteligente e sensível.
                    </p>
                </div>
                <div style={{ 
                    flex: 1, 
                    height: '480px', 
                    backgroundColor: '#fafafa', 
                    borderRadius: '8px',
                    border: '1px solid #f0f0f0',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                }} />
            </section>

            {/* 3. CITAÇÃO SUCINTA */}
            <div className={styles.quoteContainer}>
                <blockquote className={styles.quoteText}>
                    “Nossa missão é transformar a conversa em legado literário e a curiosidade em movimento cultural.”
                </blockquote>
            </div>

            {/* 4. SEÇÃO: EQUIPE (DESTAQUE NA CURADORIA) */}
            <section className={styles.contentSection} style={{ marginBottom: '120px' }}>
                <div className={styles.textBlock} style={{ textAlign: 'center', width: '100%' }}>
                    <span className={styles.sectionLabel}>02 // Quem Faz</span>
                    <h2 className={styles.sectionTitle} style={{ fontSize: '42px', letterSpacing: '-2.5px' }}>Mentes por trás do projeto</h2>
                    
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <h3>Curadoria & Talk</h3>
                            <p>Nayra, Gleicy & Emily</p>
                        </div>
                        <div className={styles.teamMember}>
                            <h3>Visão & Direção</h3>
                            <p>Pablo Costa</p>
                        </div>
                        <div className={styles.teamMember}>
                            <h3>Nosso Palco</h3>
                            <p>Palmas // TO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA FINAL (O FOCO TOTAL) */}
            <footer style={{ textAlign: 'center', marginTop: '100px', paddingBottom: '120px' }}>
                <span style={{ display: 'block', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '5px', color: '#bbb', marginBottom: '30px' }}>
                    Pronto para o próximo capítulo?
                </span>

                <Link href="/videos" className="cta-premium-btn">
                    Explorar Galeria 
                    <span className="arrow-icon">→</span>
                </Link>
            </footer>

            <style jsx>{`
                .cta-premium-btn {
                    position: relative;
                    font-size: 13px;
                    color: #fff;
                    font-weight: 950;
                    background-color: #000;
                    padding: 28px 90px;
                    border-radius: 100px;
                    text-decoration: none;
                    display: inline-block;
                    text-transform: uppercase;
                    letter-spacing: 6px;
                    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                }

                .arrow-icon {
                    margin-left: 15px;
                    display: inline-block;
                    transition: transform 0.4s ease;
                }

                .cta-premium-btn:hover {
                    background-color: var(--color-accent);
                    transform: translateY(-12px) scale(1.05);
                    box-shadow: 0 40px 80px rgba(255, 107, 0, 0.45);
                    letter-spacing: 8px;
                }

                .cta-premium-btn:hover .arrow-icon {
                    transform: translateX(10px);
                }

                /* Efeito de brilho (Shine) */
                .cta-premium-btn::after {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -60%;
                    width: 20%;
                    height: 200%;
                    background: rgba(255, 255, 255, 0.1);
                    transform: rotate(30deg);
                    transition: all 0.6s ease;
                }

                .cta-premium-btn:hover::after {
                    left: 120%;
                }

                @media (max-width: 768px) {
                    .cta-premium-btn {
                        padding: 22px 50px;
                        font-size: 11px;
                        letter-spacing: 4px;
                    }
                }
            `}</style>
        </main>
    );
}