'use client';

import { TODAS_RESENHAS } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatFullDate } from '@/lib/utils/formatters';
import styles from './Resenhas.module.css';

export default function ResenhasPage() {
    return (
        <main className={styles.mainContainer}>
            <header className={styles.header}>
                <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.overtitle}
                >
                    Crítica & Literatura
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.title}
                >
                    Resenhas
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.headerSubtitle}
                >
                    Análises aprofundadas e perspectivas críticas sobre as obras que compõem o acervo Caliandras.
                </motion.p>
            </header>

            <div className={styles.reviewsGrid}>
                {[...TODAS_RESENHAS].sort((a, b) => new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime()).map((resenha, idx) => (
                    <motion.article 
                        key={resenha.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={styles.reviewCard}
                    >
                        <Link href={`/resenhas/${resenha.slug}`} className={styles.cardLink}>
                            <div className={styles.imageWrapper}>
                                <Image 
                                    src={resenha.imagemCapa || '/images/placeholder.jpg'} 
                                    alt={resenha.tituloObra}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.cardOverlay}>
                                    <span className={styles.readMoreBtn}>Ler Resenha</span>
                                </div>
                            </div>
                            
                            <div className={styles.cardContent}>
                                <span className={styles.authorTag}>{resenha.autorObra}</span>
                                <h2 className={styles.cardTitle}>{resenha.tituloObra}</h2>
                                <div className={styles.starsContainer}>
                                    {[...Array(5)].map((_, i) => (
                                        <span 
                                            key={i} 
                                            className={`${styles.star} ${i < resenha.nota ? styles.starActive : styles.starInactive}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <p className={styles.cardExcerpt}>
                                    {resenha.textoResenha.substring(0, 160)}...
                                </p>
                                <time className={styles.cardDate}>
                                    {formatFullDate(resenha.dataPostagem)}
                                </time>
                            </div>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </main>
    );
}
