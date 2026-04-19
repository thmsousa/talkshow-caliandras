'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/ui/SplashScreen';
import { Episodio } from './components/utils/types';
import { TODOS_EPISODIOS, EVENTOS_CALINDRAS } from '@/lib/mockData';
import { formatFullDate } from '@/lib/utils/formatters';
import styles from './Home.module.css';

export default function HomePage() {
    const [destaques, setDestaques] = useState<Episodio[]>([]);
    const [eventosOrdenados, setEventosOrdenados] = useState<any[]>([]);
    const [showSplash, setShowSplash] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [initialCheckComplete, setInitialCheckComplete] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    const carrosselRef = useRef<HTMLDivElement>(null);
    const isInteracting = useRef(false);

    // --- EFEITO: LUZ DE ESTÚDIO (Otimizado) ---
    useEffect(() => {
        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            rafId = requestAnimationFrame(() => {
                setMousePos({ x: e.clientX, y: e.clientY });
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // --- SCROLL INFINITO ---
    useEffect(() => {
        let animationFrameId: number;
        const smoothScroll = () => {
            if (carrosselRef.current && !isInteracting.current) {
                carrosselRef.current.scrollLeft += 0.6;
                if (carrosselRef.current.scrollLeft >= carrosselRef.current.scrollWidth - carrosselRef.current.clientWidth) {
                    carrosselRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(smoothScroll);
        };
        animationFrameId = requestAnimationFrame(smoothScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const scrollManual = (direction: 'left' | 'right') => {
        if (carrosselRef.current) {
            const scrollAmount = carrosselRef.current.clientWidth * 0.7;
            const scrollTo = direction === 'left'
                ? carrosselRef.current.scrollLeft - scrollAmount
                : carrosselRef.current.scrollLeft + scrollAmount;
            carrosselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    // --- CARREGAMENTO E ORDENAÇÃO ---
    useEffect(() => {
        const loadData = async () => {
            const sortedVideos = [...TODOS_EPISODIOS].sort((a, b) =>
                new Date(b.dataLancamento).getTime() - new Date(a.dataLancamento).getTime()
            );
            const sortedEvents = [...EVENTOS_CALINDRAS].sort((a, b) =>
                new Date(b.data).getTime() - new Date(a.data).getTime()
            );

            setDestaques(sortedVideos.slice(0, 4));
            setEventosOrdenados(sortedEvents);
            setDataLoaded(true);
            setInitialCheckComplete(true);
        };
        
        loadData();
        
        if (typeof window !== 'undefined' && localStorage.getItem('hasSeenSplash') === 'true') {
            setShowSplash(false);
        }
    }, []);

    if (!initialCheckComplete || !dataLoaded) return <div className={styles.mainWrapper} />;

    return (
        <AnimatePresence>
            {showSplash ? (
                <SplashScreen 
                    key="splash"
                    onComplete={() => { 
                        setShowSplash(false); 
                        if (typeof window !== 'undefined') localStorage.setItem('hasSeenSplash', 'true'); 
                    }} 
                />
            ) : (
                <motion.main 
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className={styles.mainWrapper}
                >
                    {/* --- ELEMENTO: LUZ DE ESTÚDIO --- */}
                    <div 
                        className={styles.studioLight}
                        style={{
                            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.08), transparent 80%)`,
                        }} 
                    />

                    {/* --- SEÇÃO: EVENTOS --- */}
                    <section className={styles.section}>
                        <header className={styles.sectionHeader}>
                            <span className={styles.overtitle}>Agenda Cultural • Caliandras</span>
                            <h2 className={styles.sectionTitle}>Eventos</h2>
                        </header>

                        <div
                            className={styles.carrosselWrapper}
                            onMouseEnter={() => isInteracting.current = true}
                            onMouseLeave={() => isInteracting.current = false}
                        >
                            <div className={styles.varalLine} />

                            <button onClick={() => scrollManual('left')} className={styles.navButton} style={{ left: '-30px' }}>‹</button>
                            <button onClick={() => scrollManual('right')} className={styles.navButton} style={{ right: '-30px' }}>›</button>

                            <div ref={carrosselRef} className={styles.carrossel}>
                                {eventosOrdenados.map((evento, index) => (
                                    <Link key={evento.id} href="/eventos" style={{ textDecoration: 'none' }}>
                                        <div
                                            className={styles.eventCard}
                                            style={{ 
                                                // Definimos a variável CSS para a animação sway
                                                ['--index' as any]: index 
                                            }}
                                        >
                                            <div className={styles.pin} />
                                            <div className={styles.eventImageWrapper}>
                                                <Image
                                                    src={evento.imagem || '/images/mock/cover_resenha.png'}
                                                    alt={evento.titulo}
                                                    fill
                                                    className={styles.eventImage}
                                                    sizes="(max-width: 768px) 100vw, 340px"
                                                />
                                            </div>
                                            <div className={styles.cardDetails}>
                                                <span className={styles.cardDateTag}>{formatFullDate(evento.data)}</span>
                                                <h4 className={styles.cardTitle}>{evento.titulo}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- SEÇÃO DE VÍDEOS --- */}
                    <section className={styles.section}>
                        <header className={styles.sectionHeader}>
                            <span className={styles.overtitle}>Mídia & Destaques</span>
                            <h2 className={styles.sectionTitle}>Últimos Vídeos</h2>
                        </header>

                        <div className={styles.videoGrid}>
                            {destaques.map((episodio, index) => (
                                <motion.div
                                    key={episodio.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.8 }}
                                >
                                    <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none' }}>
                                        <div className={styles.videoCard}>
                                            <div className={styles.videoThumbnailWrapper}>
                                                <Image
                                                    src={episodio.imagemCapaUrl}
                                                    alt={episodio.titulo}
                                                    fill
                                                    className={styles.videoThumb}
                                                    sizes="(max-width: 900px) 100vw, 50vw"
                                                />
                                                <div className={styles.playOverlay}>
                                                    <div className={styles.playCircle}>▶</div>
                                                </div>
                                            </div>
                                            <div className={styles.videoCardBody}>
                                                <span className={styles.videoDate}>{formatFullDate(episodio.dataLancamento)}</span>
                                                <h3 className={styles.videoCardTitle}>{episodio.titulo}</h3>
                                                <p className={styles.videoDesc}>{episodio.descricao}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.main>
            )}
        </AnimatePresence>
    );
}