'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SplashScreen from './components/ui/SplashScreen';
import { Episodio } from './components/utils/types';
import { TODOS_EPISODIOS, EVENTOS_CALINDRAS } from '@/lib/mockData';

// FUNÇÃO DE DATA REFORÇADA (Resolve o "Invalid Date" e o fuso horário)
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

export default function HomePage() {
    const [destaques, setDestaques] = useState<Episodio[]>([]);
    const [eventosOrdenados, setEventosOrdenados] = useState<any[]>([]);
    const [showSplash, setShowSplash] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [initialCheckComplete, setInitialCheckComplete] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    
    const carrosselRef = useRef<HTMLDivElement>(null);
    const isInteracting = useRef(false);

    // --- EFEITO: LUZ DE ESTÚDIO ---
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
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
            const scrollAmount = carrosselRef.current.clientWidth * 0.6;
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
        if (typeof window !== 'undefined' && localStorage.getItem('hasSeenSplash') === 'true') setShowSplash(false);
    }, []);

    if (!initialCheckComplete || !dataLoaded) return <div style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}></div>;
    if (showSplash) return <SplashScreen onComplete={() => { setShowSplash(false); localStorage.setItem('hasSeenSplash', 'true'); }} />;

    return (
        <main style={{ backgroundColor: '#fafafa', overflowX: 'hidden', position: 'relative' }}>
            
            {/* --- ELEMENTO: LUZ DE ESTÚDIO --- */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 1,
                background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.06), transparent 80%)`,
                transition: 'background 0.2s ease-out',
            }} />

            {/* --- SEÇÃO: EVENTOS --- */}
            <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px 0px', position: 'relative', zIndex: 2 }}>
                <header style={{ marginBottom: '40px', borderLeft: '5px solid var(--color-accent)', paddingLeft: '25px' }}>
                    <span style={overtitleStyle}>Agenda Cultural • Caliandras</span>
                    <h2 style={sectionTitleStyle}>Eventos</h2>
                </header>

                <div
                    style={{ position: 'relative' }}
                    onMouseEnter={() => isInteracting.current = true}
                    onMouseLeave={() => isInteracting.current = false}
                >
                    <div style={varalLineStyle} className="hide-mobile varal-line-organic" />

                    <button onClick={() => scrollManual('left')} className="nav-button-varal hide-mobile" style={{ ...navButtonStyle, left: '-25px' }}>‹</button>
                    <button onClick={() => scrollManual('right')} className="nav-button-varal hide-mobile" style={{ ...navButtonStyle, right: '-25px' }}>›</button>

                    <div ref={carrosselRef} className="carrossel-container" style={carrosselStyle}>
                        {eventosOrdenados.map((evento, index) => (
                            <Link key={evento.id} href="/eventos" style={{ textDecoration: 'none', display: 'block', flexShrink: 0 }}>
                                <div
                                    style={{
                                        ...cardBaseStyle,
                                        // @ts-ignore
                                        '--index': index,
                                    }}
                                    className="event-card-hover"
                                >
                                    <div style={pinStyle} />
                                    <div style={eventImageWrapper}>
                                        <Image
                                            src={evento.imagem || '/images/placeholder.jpg'}
                                            alt={evento.titulo}
                                            fill
                                            style={{ objectFit: 'contain', objectPosition: '50% 30%', padding: '20px' }}
                                        />
                                    </div>
                                    <div style={{ padding: '25px 20px' }}>
                                        <span style={dateTagStyle}>{formatFullDate(evento.data)}</span>
                                        <h4 style={eventTitleStyle}>{evento.titulo}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ESPAÇADOR SIMPLES --- */}
            <div style={{ height: '100px' }} />

            {/* --- SEÇÃO DE VÍDEOS --- */}
            <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '10px 20px 100px', position: 'relative', zIndex: 2 }}>
                <header style={{ marginBottom: '40px', borderLeft: '5px solid var(--color-accent)', paddingLeft: '25px' }}>
                    <span style={overtitleStyle}>Mídia & Destaques</span>
                    <h2 style={sectionTitleStyle}>Últimos Vídeos</h2>
                </header>

                <div style={gridStyle} className="video-grid-responsive">
                    {destaques.map((episodio, index) => (
                        <Link href={`/videos/${episodio.slug}`} key={episodio.id} style={{ textDecoration: 'none' }}>
                            <div 
                                style={{ ...videoCardStyle, animationDelay: `${index * 0.15}s` }} 
                                className="video-card-hover"
                            >
                                <div style={videoImageWrapper}>
                                    <Image
                                        src={episodio.imagemCapaUrl}
                                        alt={episodio.titulo}
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                                    />
                                    <div className="play-overlay">
                                        <span style={{ fontSize: '40px', color: '#fff', opacity: 0.9 }}>▶</span>
                                    </div>
                                </div>
                                <div style={{ padding: '25px' }} className="video-card-inner-padding">
                                    <p style={videoDateStyle}>{formatFullDate(episodio.dataLancamento)}</p>
                                    <h3 style={videoTitleStyle}>{episodio.titulo}</h3>
                                    <p style={videoDescStyle}>{episodio.descricao}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <style jsx global>{`
                @keyframes sway {
                    0% { transform: rotate(-1.5deg); }
                    50% { transform: rotate(1.5deg); }
                    100% { transform: rotate(-1.5deg); }
                }

                .event-card-hover { 
                    transition: all 2.2s cubic-bezier(0.19, 1, 0.22, 1) !important; 
                    animation: sway 5s ease-in-out infinite;
                    animation-delay: calc(var(--index) * 0.6s);
                    transform-origin: top center;
                    background: #fff;
                }

                .event-card-hover:hover {
                    animation-play-state: paused;
                    transform: rotate(0deg) scale(1.04) !important;
                    box-shadow: 0 50px 100px rgba(0,0,0,0.1) !important;
                    z-index: 20;
                }

                .video-card-hover { 
                    animation: fadeInUp 0.8s ease forwards;
                    opacity: 0;
                    transition: all 1.5s cubic-bezier(0.19, 1, 0.22, 1) !important; 
                }

                .video-card-hover:hover {
                    transform: translateY(-15px) !important;
                    box-shadow: 0 40px 90px rgba(255, 107, 0, 0.08) !important;
                }

                .play-overlay {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0,0,0,0.4);
                    opacity: 0;
                    transition: opacity 1.2s ease;
                    z-index: 2;
                }

                .video-card-hover:hover .play-overlay { opacity: 1; }
                .carrossel-container::-webkit-scrollbar { display: none; }
                
                .varal-line-organic {
                    background: linear-gradient(90deg, transparent 0%, #ccc 15%, #999 50%, #ccc 85%, transparent 100%) !important;
                }

                @media (max-width: 900px) {
                    .video-grid-responsive { grid-template-columns: 1fr !important; }
                    .hide-mobile { display: none !important; }
                    .event-card-hover { animation: none !important; transform: none !important; }
                }
            `}</style>
        </main>
    );
}

/* --- ESTILOS FIXOS --- */

const overtitleStyle: React.CSSProperties = {
    fontSize: '12px',
    color: '#aaa',
    fontWeight: '800',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px'
};

const sectionTitleStyle: React.CSSProperties = {
    fontSize: 'clamp(28px, 6vw, 42px)',
    fontWeight: '950',
    color: '#1a1a1a',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '-2px',
    lineHeight: 0.9
};

const varalLineStyle: React.CSSProperties = {
    position: 'absolute',
    top: '25px',
    left: '-50px',
    right: '-50px',
    height: '1.5px',
    zIndex: 5,
    pointerEvents: 'none',
    opacity: 0.6
};

const pinStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '12px',
    height: '28px',
    backgroundColor: '#333',
    borderRadius: '2px',
    zIndex: 15,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
};

const carrosselStyle: React.CSSProperties = {
    display: 'flex',
    gap: '35px',
    overflowX: 'auto',
    padding: '20px 10px 60px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    WebkitOverflowScrolling: 'touch',
    alignItems: 'flex-start'
};

const cardBaseStyle: React.CSSProperties = {
    width: '320px',
    minWidth: '320px',
    height: '500px',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    borderRadius: '4px',
    border: '1px solid #eee'
};

const eventImageWrapper: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '350px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f5f5f5'
};

const dateTagStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: '900',
    color: 'var(--color-accent)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '8px',
    display: 'block'
};

const eventTitleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '22px',
    fontWeight: '900',
    lineHeight: '1.2',
    color: '#1a1a1a',
    letterSpacing: '-0.5px'
};

const navButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 40,
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: '50%',
    width: '55px',
    height: '55px',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 20px rgba(0,0,0,0.08)',
    color: '#000'
};

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px',
    width: '100%'
};

const videoCardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 15px 50px rgba(0,0,0,0.05)',
    border: '1px solid #f5f5f5'
};

const videoImageWrapper: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '240px',
    overflow: 'hidden'
};

const videoDateStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: '900',
    color: 'var(--color-accent)',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: '10px'
};

const videoTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '900',
    color: '#1a1a1a',
    marginBottom: '12px',
    letterSpacing: '-0.8px',
    lineHeight: 1.1
};

const videoDescStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#555',
    lineHeight: '1.7',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
};