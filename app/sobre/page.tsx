'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './SobrePage.module.css';

export default function SobrePage() {
    return (
        <main className={styles.mainContainer}>

            {/* 1. HERO SECTION */}
            <header className={styles.hero}>
                
                {/* DETALHE TÉCNICO (Preenche o vazio superior) */}
                <div className={styles.technicalHeader}>
                    <div className={styles.techLine} />
                    <div className={styles.techText}>
                        <span>PALMAS - TO</span>
                        <span className={styles.techDot}>•</span>
                        <span>10° 11′ 4″ S 48° 20′ 1″ W</span>
                    </div>
                    <div className={styles.techLine} />
                </div>

                <div className={styles.heroBadge}>Estreia 2024</div>
                <span className={styles.overtitle}>Manifesto Caliandras</span>
                <h1 className={styles.title}>
                    Cultura que <span className={styles.accentText}>inspira</span> <br /> e conecta.
                </h1>

                <div className={styles.heroContentExpand}>
                    <p className={styles.heroDescription}>
                        O Caliandras é uma plataforma de diálogo dedicada a investigar as potências da literatura contemporânea.
                        Nascemos no coração do Tocantins para ser o ponto de convergência entre o pensamento regional e as vozes
                        que definem o cenário cultural brasileiro.
                    </p>

                    <div className={styles.heroStatsMini}>
                        <div className={styles.statItem}>
                            <span className={styles.statLine} />
                            <strong>Diálogo</strong>
                            <p>Profundo</p>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLine} />
                            <strong>Curadoria</strong>
                            <p>Rigorosa</p>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLine} />
                            <strong>Legado</strong>
                            <p>Cultural</p>
                        </div>
                    </div>
                </div>

                <div className={styles.heroDivider} />
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

                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        <Image
                            src="/images/mock/cover_vlog.png" 
                            alt="Bastidores Caliandras"
                            fill
                            className={styles.featuredImage}
                        />
                    </div>
                    <div className={styles.imageFloatingCard}>
                        <strong>+50</strong>
                        <span>Autores <br /> Conectados</span>
                    </div>
                </div>
            </section>

            {/* 3. CITAÇÃO ESTILIZADA */}
            <div className={styles.quoteWrapper}>
                <div className={styles.quoteDividerTop}>
                    <div className={styles.quoteDividerDot} />
                </div>

                <div className={styles.quoteDecorativeCircle} />

                <div className={styles.quoteContainer}>
                    <span className={styles.quoteIcon}>“</span>
                    <blockquote className={styles.quoteText}>
                        Nossa missão é transformar a <span className={styles.quoteHighlight}>conversa em legado</span> literário e a curiosidade em <span className={styles.quoteHighlight}>movimento cultural</span>.
                    </blockquote>
                    <div className={styles.quoteAuthor}>— Manifesto Caliandras</div>
                </div>

                <div className={styles.quoteDividerBottom} />
            </div>

            {/* 4. EQUIPE & CURADORIA */}
            <section className={styles.contentSection} style={{ marginBottom: '120px' }}>
                <div className={styles.textBlock} style={{ textAlign: 'center', width: '100%' }}>
                    <span className={styles.sectionLabel}>02 // Quem Faz</span>
                    <h2 className={styles.sectionTitle} style={{ fontSize: '42px' }}>Mentes por trás do projeto</h2>

                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <div className={styles.memberAvatar}>N</div>
                            <h3>Pablo, Gleicy, Nayra & Emily</h3>
                            <p>Curadoria & Talk</p>
                            <span className={styles.memberBio}>Conduzem o diálogo com sensibilidade técnica e paixão literária.</span>
                        </div>
                        <div className={styles.teamMember}>
                            <div className={styles.memberAvatar}>P</div>
                            <h3>Pablo Costa</h3>
                            <p>Visão & Direção</p>
                            <span className={styles.memberBio}>Estrategista criativo focado em expandir a voz da cultura regional.</span>
                        </div>
                        <div className={styles.teamMember}>
                            <div className={styles.memberAvatar}>T</div>
                            <h3>Palmas - TO</h3>
                            <p>Nosso Palco</p>
                            <span className={styles.memberBio}>Onde a semente do Caliandras floresce para todo o país.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA FINAL */}
            <footer className={styles.footerCTA}>
                <div className={styles.ctaWrapper}>
                    <span className={styles.footerLabel}>O próximo capítulo começa aqui</span>
                    <h2 className={styles.ctaTitle}>Descubra o acervo completo do Caliandras.</h2>

                    <Link href="/videos" className="cta-premium-btn">
                        <span className="btn-text">Ver Episódios</span>
                    
                    </Link>
                </div>
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
                    display: inline-flex;
                    align-items: center;
                    gap: 15px;
                    text-transform: uppercase;
                    letter-spacing: 6px;
                    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    overflow: hidden;
                }

                .cta-premium-btn:hover {
                    background-color: var(--color-accent);
                    transform: translateY(-12px) scale(1.05);
                    box-shadow: 0 40px 80px rgba(255, 107, 0, 0.45);
                    letter-spacing: 8px;
                }
            `}</style>
        </main>
    );
}