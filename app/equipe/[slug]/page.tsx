import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Mail, ArrowLeft, PenTool, Video } from 'lucide-react';
import { EQUIPE_CALIANDRAS, TODOS_EPISODIOS, TODAS_RESENHAS } from '@/lib/mockData';
import styles from './EquipeDetalhe.module.css';
import { formatFullDate } from '@/lib/utils/formatters';

export default async function EquipeMembroPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const membro = EQUIPE_CALIANDRAS.find(m => m.slug === slug || m.nome.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "") === slug);

    if (!membro) {
        notFound();
    }

    // Mapeamento flexível de conteúdo baseado no nome e em IDs
    const videosDoMembro = TODOS_EPISODIOS.filter(ep => 
        ep.descricao.toLowerCase().includes(membro.nome.toLowerCase()) || 
        ep.titulo.toLowerCase().includes(membro.nome.toLowerCase()) ||
        (ep.autorId && ep.autorId.replace('a', '') === membro.id.replace('t', ''))
    ).sort((a, b) => new Date(b.dataLancamento).getTime() - new Date(a.dataLancamento).getTime());
    
    const resenhasDoMembro = TODAS_RESENHAS.filter(r => 
        (r.resenhista && r.resenhista.toLowerCase().includes(membro.nome.toLowerCase())) || 
        (r.editor && r.editor.toLowerCase().includes(membro.nome.toLowerCase()))
    ).sort((a, b) => new Date(b.dataPostagem).getTime() - new Date(a.dataPostagem).getTime());

    return (
        <main className={styles.mainContainer}>
            {/* BACKGROUND DECO */}
            <div className={styles.bgNoise} />

            <div className={styles.contentWrapper}>
                <Link href="/equipe" className={styles.backButton}>
                    <ArrowLeft size={16} /> Ver Equipe
                </Link>

                <article className={styles.profileSection}>
                    <div className={styles.imageColumn}>
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
                    </div>

                    <div className={styles.textColumn}>
                        <div className={styles.roleBadge}>{membro.cargo}</div>
                        <h1 className={styles.memberName}>{membro.nome}</h1>
                        
                        <div className={styles.divider} />
                        
                        <div className={styles.bioContainer}>
                            <p className={styles.bioText}>{membro.bio || membro.minibio || "Sem biografia cadastrada."}</p>
                        </div>

                        <div className={styles.socialLinks}>
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
                        </div>
                    </div>
                </article>

                {/* CONTEÚDO PRODUZIDO PELO MEMBRO */}
                {(videosDoMembro.length > 0 || resenhasDoMembro.length > 0) && (
                    <section className={styles.portfolioSection}>
                        <h2 className={styles.portfolioTitle}>Obras & Contribuições</h2>
                        
                        <div className={styles.portfolioGrid}>
                            
                            {/* VÍDEOS */}
                            {videosDoMembro.map(video => (
                                <Link href={`/videos/${video.slug}`} key={`video-${video.id}`} className={styles.portfolioCard}>
                                    <div className={styles.cardIcon}><Video size={20} /></div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.cardMeta}>{formatFullDate(video.dataLancamento)}</span>
                                        <h3 className={styles.cardTitle}>{video.titulo}</h3>
                                        <span className={styles.cardAction}>Assistir ao Vídeo &rarr;</span>
                                    </div>
                                </Link>
                            ))}

                            {/* RESENHAS */}
                            {resenhasDoMembro.map(resenha => (
                                <Link href={`/resenhas/${resenha.slug}`} key={`res-${resenha.id}`} className={styles.portfolioCard}>
                                    <div className={styles.cardIcon}><PenTool size={20} /></div>
                                    <div className={styles.cardContent}>
                                        <span className={styles.cardMeta}>{formatFullDate(resenha.dataPostagem)}</span>
                                        <h3 className={styles.cardTitle}>Resenha: {resenha.tituloObra}</h3>
                                        <span className={styles.cardAction}>Ler Resenha &rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
