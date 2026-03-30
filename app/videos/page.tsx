'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react'; 
import { TODOS_EPISODIOS } from '@/lib/mockData'; 
import { Episodio } from '../components/utils/types';
import styles from './VideosIndex.module.css';

export default function VideosIndexPage() {
    const [busca, setBusca] = useState('');
    const [videosFiltrados, setVideosFiltrados] = useState<Episodio[]>(TODOS_EPISODIOS);

    useEffect(() => {
        const termoBusca = busca.toLowerCase();
        const resultados = TODOS_EPISODIOS.filter(episodio => 
            episodio.titulo.toLowerCase().includes(termoBusca) || 
            episodio.descricao.toLowerCase().includes(termoBusca)
        );
        setVideosFiltrados(resultados);
    }, [busca]);

    const isNovo = (dateString: string) => {
        const dataLancamento = new Date(dateString);
        const hoje = new Date();
        const seteDiasEmMs = 7 * 24 * 60 * 60 * 1000;
        return (hoje.getTime() - dataLancamento.getTime()) < seteDiasEmMs;
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
        } catch (e) { return dateString; }
    };

    return (
    <main className={styles.mainContainer}>
        <header className={styles.headerSection}>
            <div className={styles.titleWrapper}>
                {/* Texto de apoio acima do título para guiar o olhar */}
                <h1 className={styles.mainTitle}>Catálogo de Vídeos</h1>
            </div>
            
            <div className={styles.searchWrapper}>
                <input 
                    type="text" 
                    placeholder="Filtrar por tema ou convidado..." 
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className={styles.searchInput}
                />
                <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', color: '#1a1a1a' }}>
                    <Search size={18} />
                </div>
            </div>
        </header>

        <div className={styles.videoGrid}>
            {videosFiltrados.map(episodio => (
                <Link key={episodio.id} href={`/videos/${episodio.slug}`} className={styles.videoCard}>
                    <div className={styles.thumbnailWrapper}>
                        <Image 
                            src={episodio.imagemCapaUrl} 
                            alt={episodio.titulo} 
                            fill 
                            style={{ objectFit: 'cover', objectPosition: '50% 30%' }} 
                        />
                        {isNovo(episodio.dataLancamento) && (
                            <div className={styles.badgeNovo}>NOVO</div>
                        )}
                    </div>

                    <div className={styles.cardContent}>
                        <div className={styles.dateTag}>
                            {formatDate(episodio.dataLancamento)}
                        </div>
                        <h3 className={styles.videoTitle}>
                            {episodio.titulo}
                        </h3>
                        <p className={styles.videoDescription}>
                            {episodio.descricao}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    </main>
);
}