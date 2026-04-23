'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './SobrePage.module.css';

export default function SobrePage() {
    return (
        <main className={styles.mainContainer}>
            {/* ANIMAÇÃO APRIMORADA: FIOS DO CERRADO (CAPIM DOURADO) */}
            <div className={styles.cerradoFlowContainer}>
                <div className={styles.goldenThread} />
                <div className={styles.goldenThread} />
                <div className={styles.goldenThread} />
                <div className={styles.goldenThread} />
                <div className={styles.goldenThread} />
                <div className={styles.sparkle} />
                <div className={styles.sparkle} />
                <div className={styles.sparkle} />
            </div>

            {/* FLORES DECORATIVAS FLUTUANTES (PÉTALAS) */}
            <div className={styles.flowerDecoration1}>
                <Image src="/images/decor/caliandra.png" alt="" width={300} height={300} />
            </div>
            <div className={styles.flowerDecoration2}>
                <Image src="/images/decor/caliandra.png" alt="" width={200} height={200} />
            </div>

            {/* MARCA D'ÁGUA VERTICAL DISCRETA */}
            <div className={styles.verticalWatermark}>CALIANDRAS SHOW</div>

            {/* 1. HERO SECTION */}
            <header className={styles.hero}>

                {/* DETALHE TÉCNICO (Preenche o vazio superior) */}
                <div className={styles.technicalHeader}>
                    <div className={styles.techLine} />
                    <div className={styles.techText}>
                        <span>PALMAS - TO</span>
                    </div>
                    <div className={styles.techLine} />
                </div>

                <div className={styles.heroBadge}>Estreia 2025</div>
                <span className={styles.overtitle}>Manifesto Caliandras</span>
                <span className={styles.heroSubtitle}>Literatura como sopro de vida</span>
                <h1 className={styles.title}>
                    Cultura que <span className={styles.accentText}>inspira</span> <br /> e conecta.
                </h1>

                <div className={styles.heroContentExpand}>
                    <p className={styles.heroDescription}>
                        O Caliandras Show é um coletivo que visa debater literatura de forma acessível e didática, no momento, principalmente em Palmas (TO).
                    </p>

                    <div className={styles.heroStatsMini}>
                        <div className={styles.statItem}>
                            <span className={styles.statLine} />
                            <strong>Visibilizar</strong>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLine} />
                            <strong>Oportunizar</strong>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statLine} />
                            <strong>Debater</strong>
                        </div>
                    </div>
                </div>

                <div className={styles.heroDivider} />
            </header>

            {/* 2. SEÇÃO: MANIFESTO */}
            <section className={styles.contentSection}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageDecorBackground} />
                    <div className={styles.imagePlaceholder}>
                        <div className={styles.imageInternalFrame} />
                        <div className={styles.imageCornerTopLeft} />
                        <div className={styles.imageCornerTopRight} />
                        <div className={styles.imageCornerBottomLeft} />
                        <div className={styles.imageCornerBottomRight} />
                        
                        <img
                            src="/images/about/biblioteca.jpg"
                            alt="Bastidores Caliandras"
                            className={styles.featuredImage}
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover', 
                                objectPosition: 'center 20%', 
                                display: 'block' 
                            }}
                        />
                    </div>
                </div>

                <div className={styles.textBlock}>
                    <span className={styles.sectionLabel}>01 // A Missão</span>
                    <h2 className={styles.sectionTitle}>Mais que um Talk Show.</h2>
                    <p className={styles.description}>
                        O projeto inaugurou na estreia do livro independente Espírito Ilícito, do autor Pabl. Costa, imaginado para criar um ambiente divertido e reflexivo durante o 1° lançamento dessa obra por meio do formato Talk Show, cujo teve roteirista, entrevistadores, sonoplastas... A partir disso, expandimos o projeto para desginer gráficos e publicações de resenhas, nos consolidando no circuito cultural de Palmas.
                    </p>
                </div>
            </section>

            {/* 3. CITAÇÃO ESTILIZADA (REVERTIDA) */}
            <div className={styles.quoteWrapper}>
                <div className={styles.quoteDividerTop}>
                    <div className={styles.quoteDividerDot} />
                </div>

                <div className={styles.quoteDecorativeCircle} />

                <div className={styles.quoteContainer}>
                    <span className={styles.quoteIcon}>“</span>

                    <blockquote className={styles.quoteText}>
                        Nossa missão é: dar o devido valor ao que dá sentido à vida
                    </blockquote>

                    <span className={styles.quoteIconEnd}>”</span>

                    <div className={styles.quoteAuthor}>— Manifesto Caliandras</div>
                </div>

                <div className={styles.quoteDividerBottom} />
            </div>

            {/* 4. CTA FINAL (Acervo) */}
            <footer className={styles.footerCTA}>
                <div className={styles.ctaWrapper}>
                    <span className={styles.footerLabel}>O próximo capítulo começa aqui</span>
                    <h2 className={styles.ctaTitle}>Descubra o acervo completo do Caliandras.</h2>

                    <Link href="/videos" className={styles.premiumBtn}>
                        <span>Ver Episódios</span>
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </footer>

            {/* 5. EQUIPE & CURADORIA */}
            <section className={styles.contentSection} style={{ marginBottom: '140px', textAlign: 'center', marginTop: '120px' }}>
                <div className={styles.textBlock} style={{ textAlign: 'center', width: '100%' }}>
                    <span className={styles.sectionLabelCenter}>02 // Quem Faz</span>
                    <h2 className={styles.ctaTitle}>Conheça os idealizadores.</h2>

                    <div style={{ marginTop: '40px' }}>
                        <Link href="/time" className={styles.premiumBtn}>
                            <span>Nossa Equipe</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}