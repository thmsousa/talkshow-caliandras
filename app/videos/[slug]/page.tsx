'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TODOS_EPISODIOS, TODOS_PARCEIROS, EQUIPE_CALIANDRAS } from '@/lib/mockData';
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

    // Busca o autor do vídeo (Pode estar em Parceiros ou na Equipe)
    const autorNaLista = TODOS_PARCEIROS.find(a => a.id === episodio.autorId);
    const membroNaEquipe = !autorNaLista ? EQUIPE_CALIANDRAS.find(t => t.id === episodio.autorId) : null;
    
    // Normaliza os dados para o componente
    const autorRelacionado = autorNaLista ? {
        nomeCompleto: autorNaLista.nomeCompleto,
        fotoUrl: autorNaLista.fotoUrl,
        slug: autorNaLista.slug
    } : membroNaEquipe ? {
        nomeCompleto: membroNaEquipe.nome,
        fotoUrl: membroNaEquipe.fotoUrl,
        slug: 'gleicielly-medeiros' // Slug fixo para membros da equipe ou mapeado
    } : {
        nomeCompleto: 'Caliandras Show',
        fotoUrl: '/favicon.ico',
        slug: 'equipe'
    };
    
    // Filtra vídeos relacionados (excluindo o atual)
    const relacionados = TODOS_EPISODIOS.filter((ep) => ep.slug !== slug).slice(0, 4);
    const isInstagram = episodio.tipoVideo === 'instagram';
    const embedUrl = isInstagram
        ? `https://www.instagram.com/reel/${episodio.urlVideo}/`
        : `https://www.youtube.com/embed/${episodio.urlVideo}?autoplay=0&rel=0`;

    return (
        <div className={styles.mainContainer}>
            <header className={styles.sectionHeader}>
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={styles.title}
                >
                    {episodio.titulo}
                </motion.h1>
            </header>

            <div className={styles.upperLayout}>
                {/* LADO ESQUERDO: PLAYER */}
                <div className={styles.playerSection}>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.playerWrapper}
                    >
                        {isInstagram ? (
                            <div className={styles.instagramCard}>
                                <div className={styles.instagramCover}>
                                    <Image
                                        src={episodio.imagemCapaUrl}
                                        alt={episodio.titulo}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className={styles.instagramOverlay}>
                                        <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                        <span className={styles.instagramLabel}>Reel no Instagram</span>
                                    </div>
                                </div>
                                <a
                                    href={embedUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.instagramBtn}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                    Ver Reel no Instagram
                                </a>
                            </div>
                        ) : (
                            <iframe
                                src={embedUrl}
                                title={episodio.titulo}
                                allowFullScreen
                                className={styles.iframe}
                            ></iframe>
                        )}
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
                            <h3 className={styles.miniTag}>Autor</h3>
                            <Link 
                                href="/equipe"
                                className={styles.authorLink}
                            >
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