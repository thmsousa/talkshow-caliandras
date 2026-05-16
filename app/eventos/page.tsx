'use client';

import { EVENTOS_CALINDRAS } from '@/lib/mockData';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './Eventos.module.css';

// Função para formatar a data por extenso (ex: 10 de outubro)
const formatFullDate = (dateString: string) => {
    try {
        // O replace evita o erro de fuso horário que subtrai 1 dia
        const localDateString = dateString.replace(/-/g, '/');
        const date = new Date(localDateString);
        return date.toLocaleDateString('pt-BR', { 
            day: 'numeric', 
            month: 'long' 
        });
    } catch (e) { 
        return dateString; 
    }
};

function EventoItem({ evento, index }: { evento: any, index: number }) {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: "-10% 0px" });
    const isEven = index % 2 === 0;
    const [isMobile, setIsMobile] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);
    const hasBackSide = !!evento.imagemVerso;

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-60, 60]);
    const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [60, -60]);

    const handleFlip = () => {
        if (hasBackSide) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <section ref={itemRef} className={`${styles.eventRow} ${isEven ? styles.even : styles.odd}`}>
            <div className={styles.bgNumber}>
                {String(index + 1).padStart(2, '0')}
            </div>

            <div className={styles.imageSide}>
                <motion.div
                    style={{ y: imageY }}
                    className={`${styles.imageCardWrapper} ${hasBackSide ? styles.flippable : ''}`}
                    initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? -50 : 50), y: isMobile ? 30 : 0 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    onClick={handleFlip}
                >
                    <div className={styles.flipScene}>
                        <motion.div 
                            className={styles.flipCard}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* FRONT */}
                            <div className={styles.flipCardFront}>
                                <div className={styles.imageCard}>
                                    <img 
                                        src={evento.imagem} 
                                        alt={evento.titulo} 
                                        style={{ objectPosition: '50% 20%' }}
                                    />
                                </div>
                            </div>

                            {/* BACK */}
                            {hasBackSide && (
                                <div className={styles.flipCardBack}>
                                    <div className={styles.imageCard}>
                                        <img 
                                            src={evento.imagemVerso} 
                                            alt={`${evento.titulo} - Verso`} 
                                            style={{ objectPosition: '50% 20%' }}
                                        />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    <div className={styles.imageCaption}>
                        {hasBackSide && <span className={styles.flipHint}>TOQUE PARA VIRAR</span>}
                        <span>EDIÇÃO {String(index + 1).padStart(2, '0')}</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                style={{ y: textY }}
                initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? 50 : -50), y: isMobile ? 30 : 0 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={styles.contentSide}
            >
                <div className={styles.textContainer}>
                    <div className={styles.metaTag}>
                        <span className={styles.eventDate}>{formatFullDate(evento.data)}</span>
                    </div>
                    <motion.h2 
                        initial={{ clipPath: 'inset(100% 0 0 0)' }}
                        animate={isInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className={styles.eventTitle}
                    >
                        {evento.titulo}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={styles.eventDescription}
                    >
                        {evento.descricao}
                    </motion.p>
                    <div className={styles.editorialFooter}>ACERVO CULTURAL</div>
                </div>
            </motion.div>
        </section>
    );
}

export default function EventosPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end 95%"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // ORDENAÇÃO: Do mais ANTIGO para o mais RECENTE (a - b)
    const eventosOrdenados = [...EVENTOS_CALINDRAS].sort((a, b) => 
        new Date(a.data).getTime() - new Date(b.data).getTime()
    );

    return (
        <main className={styles.pageWrapper}>
            <header className={styles.pageHeader}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.supLabel}
                >
                    AGENDA CULTURAL • CALIANDRAS
                </motion.div>

                <div className={styles.headerBody}>
                    <motion.h1
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className={styles.mainTitle}
                    >
                        NOSSOS ENCONTROS
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className={styles.headerDescription}
                    >
                        Acompanhe nossos encontros presenciais, lançamentos literários e tudo o que movimenta o ecossistema do Caliandras.
                    </motion.p>
                </div>
            </header>

            <div ref={containerRef} className={styles.timelineContainer}>
                {/* LINHA DE PROGRESSO DINÂMICA */}
                <div className={styles.progressLine}>
                    <motion.div 
                        className={styles.activeProgress}
                        style={{ scaleY }}
                    />
                    <motion.div 
                        className={styles.progressDot}
                        style={{ top: dotTop }}
                    />
                </div>

                <div className={styles.eventsList}>
                    {eventosOrdenados.map((evento, index) => (
                        <EventoItem key={evento.id} evento={evento} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
