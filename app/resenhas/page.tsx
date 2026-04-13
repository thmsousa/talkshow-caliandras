'use client';

import { TODAS_RESENHAS } from '@/lib/mockData';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '80px' }}
                    transition={{ delay: 0.3 }}
                    className={styles.divider}
                />
            </header>

            <div className={styles.reviewsGrid}>
                {TODAS_RESENHAS.map((resenha, idx) => (
                    <motion.article 
                        key={resenha.id}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.reviewArticle}
                        style={{ flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
                    >
                        <div className={styles.imageSection}>
                            <div className={styles.imageWrapper}>
                                <Image 
                                    src={resenha.imagemCapa || '/images/placeholder.jpg'} 
                                    alt={resenha.tituloObra}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                        <div className={styles.contentSection}>
                            <span className={styles.authorTag}>
                                {resenha.autorObra}
                            </span>
                            <h2 className={styles.reviewTitle}>
                                {resenha.tituloObra}
                            </h2>
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
                            <p className={styles.reviewText}>
                                "{resenha.textoResenha}"
                            </p>
                            <time className={styles.dateTag}>
                                Publicado em {new Date(resenha.dataPostagem).toLocaleDateString('pt-BR')}
                            </time>
                        </div>
                    </motion.article>
                ))}
            </div>
        </main>
    );
}
