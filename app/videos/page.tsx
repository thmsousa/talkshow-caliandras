'use client'; 

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react'; 
import { TODOS_EPISODIOS } from '@/lib/mockData'; 
import { Episodio } from '../components/utils/types';
import styles from './VideosIndex.module.css';

// FUNÇÃO DE DATA REFORÇADA (Blindada contra "Invalid Date")
const formatFullDate = (dateString: string) => {
    if (!dateString) return "";
    
    try {
        const onlyDate = dateString.split('T')[0];
        const parts = onlyDate.split('-');
        const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });
    } catch (e) { 
        return dateString; 
    }
};

export default function VideosIndexPage() {
    const [busca, setBusca] = useState('');

    const videosFiltrados = useMemo(() => {
        const termo = busca.toLowerCase();
        const filtrados = TODOS_EPISODIOS.filter(ep => 
            ep.titulo.toLowerCase().includes(termo) || 
            ep.descricao.toLowerCase().includes(termo)
        );
        return filtrados.sort((a, b) => new Date(b.dataLancamento).getTime() - new Date(a.dataLancamento).getTime());
    }, [busca]);

    return (
        <main className={styles.mainContainer}>
            <header className={styles.headerSection}>
                <div className={styles.headerContent}>
                    <div className={styles.titleBlock}>
                        <span className={styles.supLabel}>Acervo • Caliandras</span>
                        <h1 className={styles.mainTitle}>Galeria de Vídeos</h1>
                    </div>
                    
                    <div className={styles.searchBarContainer}>
                        <Search size={18} className={styles.searchIcon} />
                        <input 
                            type="text" 
                            placeholder="Buscar conteúdo..." 
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            className={styles.searchInput}
                        />
                    </div>
                </div>
            </header>

            <div className={styles.videoGrid}>
                {videosFiltrados.map((episodio, index) => (
                    <Link 
                        key={episodio.id} 
                        href={`/videos/${episodio.slug}`} 
                        className={styles.videoCard}
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div className={styles.thumbnailWrapper}>
                            <Image 
                                src={episodio.imagemCapaUrl} 
                                alt={episodio.titulo} 
                                fill 
                                className={styles.thumbImage}
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className={styles.playOverlay}>
                                <div className={styles.playCircle}>▶</div>
                            </div>
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.dateTag}>{formatFullDate(episodio.dataLancamento)}</div>
                            <h3 className={styles.videoTitle}>{episodio.titulo}</h3>
                            <p className={styles.videoDescription}>{episodio.descricao}</p>
                            
                            <div className={styles.cardFooter}>
                                <span className={styles.footerInfo}>VÍDEO</span>
                                <span className={styles.readMore}>ASSISTIR</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}