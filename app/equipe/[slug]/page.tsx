"use client";

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, ArrowLeft, PenTool, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { EQUIPE_CALIANDRAS, TODOS_EPISODIOS, TODAS_RESENHAS } from '@/lib/mockData';
import styles from './EquipeDetalhe.module.css';
import { formatFullDate } from '@/lib/utils/formatters';

export default function EquipeMembroPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const membro = EQUIPE_CALIANDRAS.find(m => m.slug === slug || m.nome.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "") === slug);

    if (!membro) {
        notFound();
    }

    // Mapeamento flexível de conteúdo baseado no nome e em IDs
    const videosDoMembro = TODOS_EPISODIOS.filter(ep => 
        ep.descricao.toLowerCase().includes(membro.nome.toLowerCase()) || 
        ep.titulo.toLowerCase().includes(membro.nome.toLowerCase()) ||
        (ep.autorId && ep.autorId.replace('a', '') === membro.id.replace('t', ''))
    );
    
    const resenhasDoMembro = TODAS_RESENHAS.filter(r => 
        (r.resenhista && r.resenhista.toLowerCase().includes(membro.nome.toLowerCase())) || 
        (r.editor && r.editor.toLowerCase().includes(membro.nome.toLowerCase()))
    );

    const obrasEContribuicoes = [
        ...videosDoMembro.map(v => ({ ...v, tipoItem: 'video' as const, dataOrdenacao: new Date(v.dataLancamento).getTime() })),
        ...resenhasDoMembro.map(r => ({ ...r, tipoItem: 'resenha' as const, dataOrdenacao: new Date(r.dataPostagem).getTime() }))
    ].sort((a, b) => b.dataOrdenacao - a.dataOrdenacao);

    return (
        <main className={styles.mainContainer}>
            {/* BACKGROUND DECO */}
            <div className={styles.bgNoise} />

            <div className={styles.contentWrapper}>
                <Link href="/equipe" className={styles.backButton}>
                    <ArrowLeft size={16} /> Ver Equipe
                </Link>

                <motion.article 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className={styles.profileSection}
                >
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
                        }}
                        className={styles.imageColumn}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src={membro.fotoUrl || '/images/placeholder.jpg'}
                                alt={membro.nome}
                                fill
                                priority
                                className={styles.profileImage}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className={styles.imageOverlay} />
                        </div>
                    </motion.div>

                    <div className={styles.textColumn}>
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className={styles.roleBadge}
                        >
                            {membro.cargo}
                        </motion.div>
                        
                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className={styles.memberName}
                        >
                            {membro.nome}
                        </motion.h1>
                        
                        <motion.div 
                            variants={{
                                hidden: { scaleX: 0 },
                                visible: { scaleX: 1, transition: { duration: 1, delay: 0.5 } }
                            }}
                            className={styles.nameDivider} 
                        />
                        
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className={styles.bioContainer}
                        >
                            <p className={styles.bioText}>{membro.bio || membro.minibio || "Sem biografia cadastrada."}</p>
                        </motion.div>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 }
                            }}
                            className={styles.socialLinks}
                        >
                            {membro.email && (
                                <a href={`mailto:${membro.email}`} className={styles.socialBtn}>
                                    <Mail size={18} /> E-mail
                                </a>
                            )}
                            {membro.instagram && (
                                <a href={`https://instagram.com/${membro.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                                    <Instagram size={18} /> Instagram
                                </a>
                            )}
                        </motion.div>
                    </div>
                </motion.article>

                {/* CONTEÚDO PRODUZIDO PELO MEMBRO */}
                {obrasEContribuicoes.length > 0 && (
                    <section className={styles.portfolioSection}>
                        <h2 className={styles.portfolioTitle}>Obras & Contribuições</h2>
                        
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { 
                                    opacity: 1,
                                    transition: { staggerChildren: 0.1 }
                                }
                            }}
                            className={styles.portfolioGrid}
                        >
                            {obrasEContribuicoes.map(item => {
                                const isVideo = item.tipoItem === 'video';
                                const link = isVideo ? `/videos/${item.slug}` : `/resenhas/${item.slug}`;
                                const Icon = isVideo ? Video : PenTool;
                                const date = isVideo ? (item as any).dataLancamento : (item as any).dataPostagem;
                                const title = isVideo ? (item as any).titulo : `Resenha: ${(item as any).tituloObra}`;
                                const actionText = isVideo ? 'Assistir ao Vídeo' : 'Ler Resenha';

                                return (
                                    <motion.div
                                        key={`${item.tipoItem}-${item.id}`}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <Link href={link} className={styles.portfolioCard}>
                                            <div className={styles.cardIcon}><Icon size={20} /></div>
                                            <div className={styles.cardContent}>
                                                <span className={styles.cardMeta}>{formatFullDate(date)}</span>
                                                <h3 className={styles.cardTitle}>{title}</h3>
                                                <span className={styles.cardAction}>{actionText} &rarr;</span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </section>
                )}
            </div>
        </main>
    );
}
