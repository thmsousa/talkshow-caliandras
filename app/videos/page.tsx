'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { TODOS_EPISODIOS } from '@/lib/mockData';
import styles from './VideosIndex.module.css';

import { formatFullDate } from '@/lib/utils/formatters';

export default function VideosIndexPage() {
    const [busca, setBusca] = useState('');

    const videosOrdenados = useMemo(() => {
        return [...TODOS_EPISODIOS].sort((a, b) => new Date(b.dataLancamento).getTime() - new Date(a.dataLancamento).getTime());
    }, []);

    const videosFiltrados = useMemo(() => {
        const termo = busca.toLowerCase();
        if (!termo) return videosOrdenados;

        return videosOrdenados.filter(ep =>
            ep.titulo.toLowerCase().includes(termo) ||
            ep.descricao.toLowerCase().includes(termo)
        );
    }, [busca, videosOrdenados]);

    const hasSearch = busca.trim().length > 0;

    return (
        <main className={styles.mainContainer}>
            <header className={styles.sectionHeader}>
                <motion.span
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className={styles.overtitle}
                >
                    Acervo • Caliandras
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                    className={styles.sectionTitle}
                >
                    Galeria de Vídeos
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className={styles.searchSection}
                >
                    <div className={styles.searchBarContainer}>
                        <Search size={20} className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Pesquisar por título, episódio ou autor..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </motion.div>
            </header>

            <div className={styles.videoGrid}>
                {videosFiltrados.map((episodio, index) => (
                    <Link
                        key={episodio.id}
                        href={`/videos/${episodio.slug}`}
                        className={styles.videoCard}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            className={styles.cardInner}
                        >
                            <div className={styles.thumbnailWrapper}>
                                <Image
                                    src={episodio.imagemCapaUrl}
                                    alt={episodio.titulo}
                                    fill
                                    className={styles.thumbImage}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                />
                                <div className={styles.playOverlay}>
                                    <div className={styles.playCircle}>
                                        <Play size={20} fill="currentColor" className={styles.playIcon} />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.dateTag}>{formatFullDate(episodio.dataLancamento)}</div>
                                <h3 className={styles.videoTitle}>{episodio.titulo}</h3>
                                <p className={styles.videoDescription}>{episodio.descricao}</p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.footerInfo}>TALKSHOW</span>
                                    <span className={styles.readMore}>ASSISTIR →</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>

            {videosFiltrados.length === 0 && (
                <div className={styles.noResults}>
                    Nenhum vídeo encontrado para "{busca}".
                </div>
            )}
        </main>
    );
}