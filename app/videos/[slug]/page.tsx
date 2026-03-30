'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TODOS_EPISODIOS, TODOS_AUTORES } from '@/lib/mockData';
import styles from './EpisodioPage.module.css';

const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });
    } catch (e) { return dateString; }
};

export default function EpisodioPage() {
    const params = useParams();
    const slug = params?.slug as string;
    
    const episodio = TODOS_EPISODIOS.find((ep) => ep.slug === slug);

    if (!episodio) return notFound();

    // Busca o autor do vídeo
    const autorRelacionado = TODOS_AUTORES.find(a => a.id === episodio.autorId) || TODOS_AUTORES[0];
    
    // Filtra vídeos relacionados (excluindo o atual)
    const relacionados = TODOS_EPISODIOS.filter((ep) => ep.slug !== slug).slice(0, 4);
    const embedUrl = `https://www.youtube.com/embed/${episodio.urlVideo}?autoplay=0&rel=0`;

    return (
        <div className={styles.mainContainer}>
            {/* Título com Reveal */}
            <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.title}
            >
                {episodio.titulo}
            </motion.h1>

            <div className={styles.upperLayout}>
                {/* LADO ESQUERDO: PLAYER */}
                <div className={styles.playerSection}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.playerWrapper}
                    >
                        <iframe
                            src={embedUrl}
                            title={episodio.titulo}
                            allowFullScreen
                            className={styles.iframe}
                        ></iframe>
                    </motion.div>

                    <div className={styles.playerBar}>
                        <div className={styles.tagList}>
                            <span className={styles.badge}>#Literatura</span>
                            <span className={styles.badge}>#Cultura</span>
                            <span className={styles.badge}>#Tocantins</span>
                        </div>
                        
                    </div>
                </div>

                {/* LADO DIREITO: SIDEBAR CINZA ASFALTO */}
                <aside className={styles.sidebarSection}>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={styles.sidebarCard}
                    >
                        <div className={styles.authorBox}>
                            <h3 className={styles.miniTag}>Convidado</h3>
                            <Link href={`/autores/${autorRelacionado.slug}`} className={styles.authorLink}>
                                <div className={styles.avatar}>
                                    <Image 
                                        src={autorRelacionado.fotoUrl} 
                                        alt={autorRelacionado.nomeCompleto} 
                                        fill 
                                        style={{ objectFit: 'cover', objectPosition: 'top' }} 
                                    />
                                </div>
                                <div>
                                    <span className={styles.authorName}>{autorRelacionado.nomeCompleto}</span>
                                    <span style={{ color: 'var(--color-accent)', fontSize: '10px', fontWeight: 'bold', display: 'block', marginTop: '4px' }}>
                                        VER PERFIL →
                                    </span>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.dividerHorizontal} />

                        <div className={styles.relatedBox}>
                            <h3 className={styles.miniTag}>Relacionados</h3>
                            <div className={styles.relatedGrid}>
                                {relacionados.map((rel) => (
                                    <Link key={rel.id} href={`/videos/${rel.slug}`} className={styles.relatedItem}>
                                        <div className={styles.thumb}>
                                            <Image 
                                                src={rel.imagemCapaUrl} 
                                                alt={rel.titulo} 
                                                fill 
                                                style={{ objectFit: 'cover' }} 
                                            />
                                        </div>
                                        <p className={styles.relatedTitle}>{rel.titulo}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </aside>
            </div>

            {/* DESCRIÇÃO */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={styles.descriptionSection}
            >
                <div className={styles.descriptionHeader}>
                    <h2 className={styles.modernSectionTitle}>Sobre o Episódio</h2>
                    <div className={styles.redLine} />
                </div>
                <p className={styles.descriptionText}>{episodio.descricao}</p>
            </motion.section>
        </div>
    );
}