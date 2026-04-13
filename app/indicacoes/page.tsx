'use client';

import { TODAS_RECOMENDACOES } from '@/lib/mockData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Indicacoes.module.css';

export default function IndicacoesPage() {
    return (
        <main className={styles.mainContainer}>
            <header className={styles.header}>
                <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={styles.overtitle}
                >
                    Curadoria Caliandras
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.title}
                >
                    Indicações de Obras
                </motion.h1>
            </header>

            <div className={styles.grid}>
                {TODAS_RECOMENDACOES.map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={styles.card}
                    >
                        <div className={styles.imageWrapper}>
                            <Image 
                                src={item.imagemCapa || '/images/placeholder.jpg'} 
                                alt={item.tituloObra}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.badge}>
                                Recomendado
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>
                                {item.tituloObra}
                            </h3>
                            <p className={styles.authorTag}>
                                de {item.autorObra}
                            </p>
                            <p className={styles.description}>
                                {item.descricao}
                            </p>
                            {item.linkSugerido && (
                                <a 
                                    href={item.linkSugerido} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className={styles.buyButton}
                                >
                                    Onde encontrar
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
