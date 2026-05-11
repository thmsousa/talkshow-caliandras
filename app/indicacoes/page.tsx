'use client';

import { TODAS_RECOMENDACOES } from '@/lib/mockData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import styles from './Indicacoes.module.css';

export default function IndicacoesPage() {
    return (
        <main className={styles.mainContainer}>
            <header className={styles.header}>
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={styles.headerContent}
                >
                    <span className={styles.overtitle}>RECOMENDAÇÕES • CALIANDRAS</span>
                    <h1 className={styles.title}>Indicações Literárias</h1>
                    <p className={styles.headerSubtitle}>
                        Obras selecionadas que dialogam com a alma do cerrado e a força da literatura.
                    </p>
                </motion.div>
            </header>

            <div className={styles.grid}>
                {TODAS_RECOMENDACOES.map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className={styles.recommendationCard}
                    >
                        <div className={styles.cardLayout}>
                            {/* COLUNA DA IMAGEM */}
                            <div className={styles.imageColumn}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageFrame} />
                                    <div className={styles.cornerL} />
                                    <div className={styles.cornerR} />
                                    <Image 
                                        src={item.imagemCapa || '/images/placeholder.jpg'} 
                                        alt={item.tituloObra}
                                        fill
                                        className={styles.bookCover}
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                </div>
                            </div>

                            {/* COLUNA DE CONTEÚDO */}
                            <div className={styles.contentColumn}>
                                <div className={styles.categoryBadge}>
                                    <BookOpen size={12} />
                                    OBRA RECOMENDADA
                                </div>
                                
                                <h2 className={styles.obraTitle}>{item.tituloObra}</h2>
                                <span className={styles.authorName}>por {item.autorObra}</span>
                                
                                <div className={styles.divider} />
                                
                                <p className={styles.obraDescription}>
                                    {item.descricao}
                                </p>

                                <div className={styles.cardFooter}>
                                    <div className={styles.technicalInfo}>
                                        <span>CAT: LITERATURA REGIONAL</span>
                                        <span>REF: {item.id.toUpperCase()}</span>
                                    </div>
                                    
                                    {item.linkSugerido && (
                                        <a 
                                            href={item.linkSugerido} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={styles.actionButton}
                                        >
                                            CONHECER OBRA <ArrowUpRight size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* DECORAÇÃO DE RODAPÉ */}
            <div className={styles.footerDecor}>
                <div className={styles.decorLine} />
                <span className={styles.decorText}>CALIANDRAS SHOW • COLETIVO LITERÁRIO</span>
            </div>
        </main>
    );
}
