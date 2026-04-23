'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TODAS_RESENHAS, TODOS_EPISODIOS } from '@/lib/mockData';
import { formatFullDate } from '@/lib/utils/formatters';
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
                                <span className={styles.techValue}>{resenha.resenhista}</span>
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

            <div className={styles.contentLayout}>
                {/* LADO ESQUERDO: TEXTO DA RESENHA */}
                <article className={styles.articleBody}>
                    <p className={styles.reviewText}>
                        {resenha.textoResenha}
                    </p>

                    <div className={styles.quoteDivider}>
                        <div className={styles.dot} />
                        <div className={styles.line} />
                        <div className={styles.dot} />
                    </div>

                    <blockquote className={styles.dramaticQuote}>
                        "Nossa missão é: dar o devido valor ao que dá sentido à vida."
                    </blockquote>
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
