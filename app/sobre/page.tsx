'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Heart, Users, Lightbulb, Play, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { EQUIPE_CALIANDRAS } from '@/lib/mockData';
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

            {/* MARCA D'ÁGUA VERTICAL DISCRETA */}
            <div className={styles.verticalWatermark}>CALIANDRAS SHOW</div>

            {/* 1. HERO SECTION */}
            <motion.header
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                    }
                }}
                className={styles.hero}
            >
                {/* DETALHE TÉCNICO (Preenche o vazio superior) */}
                <div className={styles.technicalHeader}>
                    <div className={styles.techLine} />
                    <div className={styles.techText}>
                        <span>PALMAS - TO</span>
                    </div>
                    <div className={styles.techLine} />
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 }
                    }}
                    className={styles.heroBadge}
                >
                    Estreia 2025
                </motion.div>
                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className={styles.overtitle}
                >
                    Manifesto Caliandras
                </motion.span>
                <motion.span
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    className={styles.heroSubtitle}
                >
                    Literatura como sopro de vida
                </motion.span>
                <motion.h1
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
                    }}
                    className={styles.title}
                >
                    Cultura que <span className="font-amoresa" style={{ color: 'var(--color-accent)', textTransform: 'none', fontSize: '1.2em', marginLeft: '5px' }}>inspira</span> <br /> e conecta.
                </motion.h1>

                <div className={styles.heroContentExpand}>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}
                        className={styles.heroDescription}
                    >
                        O Caliandras Show é um coletivo que visa debater literatura de forma acessível e didática, no momento, principalmente em Palmas (TO).
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className={styles.heroStatsMini}
                    >
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
                    </motion.div>
                </div>

                <motion.div
                    variants={{
                        hidden: { scaleX: 0 },
                        visible: { scaleX: 1, transition: { duration: 1 } }
                    }}
                    className={styles.heroDivider}
                />
            </motion.header>

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
                    <span className={styles.sectionLabel}>A Missão</span>
                    <h2 className={styles.sectionTitle}>Mais que um Talk Show.</h2>
                    <p className={styles.description}>
                        O projeto inaugurou na estreia do livro independente Espírito Ilícito, do autor Pabl. Costa, imaginado para criar um ambiente divertido e reflexivo durante o 1° lançamento dessa obra por meio do formato Talk Show, cujo teve roteirista, entrevistadores, sonoplastas... A partir disso, expandimos o projeto para desginer gráficos e publicações de resenhas, nos consolidando no circuito cultural de Palmas.
                    </p>
                </div>
            </section>

            {/* 3. SEÇÃO: PILARES (NOVA) */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 }
                    }
                }}
                className={styles.pillarsSection}
            >
                <div className={styles.pillarItem}>
                    <div className={styles.pillarIcon}><Users size={24} /></div>
                    <span className={styles.pillarNumber}>01</span>
                    <h3 className={styles.pillarTitle}>Comunidade</h3>
                    <p className={styles.pillarText}>Fortalecemos o cenário literário local unindo autores, leitores e entusiastas em Palmas.</p>
                </div>
                <div className={styles.pillarItem}>
                    <div className={styles.pillarIcon}><Lightbulb size={24} /></div>
                    <span className={styles.pillarNumber}>02</span>
                    <h3 className={styles.pillarTitle}>Curadoria</h3>
                    <p className={styles.pillarText}>Selecionamos e debatemos obras com profundidade, trazendo novas perspectivas sobre o texto.</p>
                </div>
                <div className={styles.pillarItem}>
                    <div className={styles.pillarIcon}><Heart size={24} /></div>
                    <span className={styles.pillarNumber}>03</span>
                    <h3 className={styles.pillarTitle}>Paixão</h3>
                    <p className={styles.pillarText}>Acreditamos na literatura como ferramenta de transformação social e fôlego para a alma.</p>
                </div>
            </motion.section>

            {/* 4. CITAÇÃO ESTILIZADA */}
            <div className={styles.quoteWrapper}>
                <div className={styles.quoteDividerTop}><div className={styles.quoteDividerDot} /></div>
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

            {/* 5. EQUIPE & CURADORIA (REFORMULADA COM AVATARES) */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.teamTeaserSection}
            >
                <span className={styles.sectionLabelCenter}>Quem Faz</span>
                <h2 className={styles.ctaTitle}>Conheça as mentes criativas.</h2>

                <div className={styles.avatarStack}>
                    {EQUIPE_CALIANDRAS.slice(0, 5).map((membro, index) => (
                        <div key={membro.id} className={styles.avatarItem} style={{ zIndex: 10 - index }}>
                            <Image
                                src={membro.fotoUrl || '/images/placeholder.jpg'}
                                alt={membro.nome}
                                width={60}
                                height={60}
                                className={styles.avatarImg}
                            />
                        </div>
                    ))}
                    <div className={styles.avatarCount}>+{EQUIPE_CALIANDRAS.length - 5}</div>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <Link href="/equipe" className={styles.premiumBtn}>
                        <span>Conhecer a Equipe</span>
                        <div className={styles.btnIconWrapper}>
                            <ArrowRight size={14} />
                        </div>
                    </Link>
                </div>
            </motion.section>

            {/* 6. CTA FINAL (Acervo) */}
            <motion.section 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={styles.footerCTA}
            >
                <div className={styles.ctaWrapper}>
                    <span className={styles.sectionLabelCenter}>O próximo capítulo começa aqui</span>
                    <h2 className={styles.ctaTitle}>Explore o acervo completo.</h2>
                    
                    <div className={styles.ctaGrid}>
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className={styles.ctaCard}
                        >
                            <div className={styles.ctaCardIcon}><Play size={20} /></div>
                            <h3>Episódios</h3>
                            <p>Talk Shows imersivos com autores e mentes brilhantes.</p>
                        </motion.div>
                        
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className={styles.ctaCard}
                        >
                            <div className={styles.ctaCardIcon}><PenTool size={20} /></div>
                            <h3>Resenhas</h3>
                            <p>Análises profundas e críticas literárias curadas.</p>
                        </motion.div>
                        
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className={styles.ctaCard}
                        >
                            <div className={styles.ctaCardIcon}><Users size={20} /></div>
                            <h3>Coletivo</h3>
                            <p>Nossa atuação no cenário cultural de Palmas.</p>
                        </motion.div>
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Link href="/videos" className={styles.premiumBtn}>
                            <span>Acessar Acervo</span>
                            <div className={styles.btnIconWrapper}>
                                <ArrowRight size={14} />
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.section>
        </main>
    );
}