'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TODAS_RESENHAS, TODOS_EPISODIOS } from '@/lib/mockData';
import { formatFullDate } from '@/lib/utils/formatters';
import PDFSlider from '@/app/components/ui/PDFSlider';
import styles from './ResenhaDetalhe.module.css';

export default function ResenhaDetalhePage() {
    const params = useParams();
    const slug = params?.slug as string;

    const resenha = TODAS_RESENHAS.find((r) => r.slug === slug);

    if (!resenha) return notFound();

    const episodioRelacionado = TODOS_EPISODIOS.find(ep =>
        (ep.titulo.toLowerCase().includes('resenha') && ep.titulo.toLowerCase().includes(resenha.tituloObra.toLowerCase())) ||
        ep.slug === resenha.slug ||
        ep.descricao.includes(resenha.resenhista || '')
    );

    return (
        <main className={styles.mainContainer}>
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.overtitle}
                    >
                        Resenha Crítica
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={styles.title}
                    >
                        {resenha.tituloObra}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={styles.authorName}
                    >
                        Obra de {resenha.autorObra}
                    </motion.p>
                </div>
            </header>

            {/* --- NOVO: IMPACT SECTION (SPLIT) --- */}
            <section className={styles.impactSection}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={styles.imageSide}
                >
                    <Image
                        src={resenha.imagemCapa || '/images/reviews/cover_resenha.png'}
                        alt={resenha.tituloObra}
                        fill
                        className={styles.featuredImage}
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.detailsSide}
                >
                    <div className={styles.detailsHeader}>
                        <span className={styles.detailsLabel}>Avaliação Editorial</span>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < resenha.nota ? styles.starActive : styles.starInactive}>★</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.techGrid}>
                        {resenha.resenhista && (
                            <div className={styles.techItem}>
                                <span className={styles.techLabel}>Resenhista</span>
                                <Link href="/equipe" className={styles.reviewerProfileLink}>
                                    <div className={styles.reviewerProfile}>
                                        {resenha.fotoResenhista ? (
                                            <div className={styles.reviewerAvatar}>
                                                <Image
                                                    src={resenha.fotoResenhista}
                                                    alt={resenha.resenhista}
                                                    fill
                                                    className={styles.avatarImage}
                                                />
                                            </div>
                                        ) : (
                                            <div className={styles.reviewerAvatarFallback}>
                                                {resenha.resenhista.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <span className={styles.techValue}>{resenha.resenhista}</span>
                                            <span className={styles.reviewerLinkHint}>Ver perfil na equipe</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                        {resenha.editor && (
                            <div className={styles.techItem}>
                                <span className={styles.techLabel}>Edição</span>
                                <span className={styles.techValue}>{resenha.editor}</span>
                            </div>
                        )}
                        <div className={styles.techItem}>
                            <span className={styles.techLabel}>Data da Obra</span>
                            <span className={styles.techValue}>
                                {formatFullDate(resenha.dataPostagem)}
                            </span>
                        </div>
                        {resenha.local && (
                            <div className={styles.techItem}>
                                <span className={styles.techLabel}>Local</span>
                                <span className={styles.techValue}>{resenha.local}</span>
                            </div>
                        )}
                    </div>
                </motion.div>
            </section>

            {resenha.pdfUrl && (
                <section className={styles.massiveMuralSection}>
                    <div className={styles.muralHeader}>
                        <h2 className={styles.muralTitle}>Mural da Resenha</h2>
                        <div className={styles.muralHint}>
                            <span className={styles.muralHintIcon}>↔</span>
                            Arraste ou use as setas para ler
                        </div>
                    </div>
                    <PDFSlider pdfUrl={resenha.pdfUrl} />
                </section>
            )}

            <div className={styles.contentLayout}>
                {/* DECORAÇÕES LATERAIS */}
                <div className={styles.decorGrid}></div>
                <div className={styles.decorGlow1}></div>
                <div className={styles.decorGlow2}></div>
                <div className={styles.decorCrossTL}></div>
                <div className={styles.decorCrossTR}></div>
                <div className={styles.decorLineLeft}></div>
                <div className={styles.decorLineRight}></div>
                <div className={styles.decorTextLeft}>Resenha Crítica</div>
                <div className={styles.decorTextRight}>Caliandras</div>

                {/* LADO ESQUERDO: TEXTO DA RESENHA */}
                <article className={styles.articleBody}>
                    {/* Elementos tipográficos de fundo */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={styles.abstractTypography1}
                    >01</motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className={styles.abstractTypography2}
                    >TXT</motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.articleHeader}
                    >
                        <div className={styles.decorBadge}>LEITURA</div>
                        <span className={styles.articleSubtitle}>Transcrição da Resenha</span>
                        <h3 className={styles.articleTitle}>Texto Integral</h3>
                        <div className={styles.headerDivider}></div>
                    </motion.div>

                    <div className={styles.reviewText}>
                        {resenha.textoResenha.split('\n\n').map((paragraph, idx) => (
                            <motion.p 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.5) }}
                            >
                                {paragraph.replace(/\n/g, ' ')}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.3, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.quoteDivider}
                    >
                        <div className={styles.dot} />
                        <div className={styles.line} />
                        <div className={styles.dot} />
                    </motion.div>

                    <motion.blockquote 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.dramaticQuote}
                    >
                        "Nossa missão é: dar o devido valor ao que dá sentido à vida."
                    </motion.blockquote>
                </article>

                {/* LADO DIREITO: LINKS E EXTRA */}
                <aside className={styles.sidebar}>
                    <div className={styles.stickySidebar}>
                        {episodioRelacionado && (
                            <div className={styles.sidebarBlock}>
                                <div className={styles.videoCTA}>
                                    <p>Conteúdo em Vídeo</p>
                                    <Link href={`/videos/${episodioRelacionado.slug}`} className={styles.videoLink}>
                                        Assistir Talk Show
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div className={styles.sidebarBlock}>
                            <Link href="/resenhas" className={styles.backLink}>
                                → Todas as Resenhas
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
