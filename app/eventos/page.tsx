'use client';

import { EVENTOS_CALINDRAS } from '@/lib/mockData';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './Eventos.module.css';

function EventoItem({ evento, index }: { evento: any, index: number }) {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: "-10% 0px" });
    const isEven = index % 2 === 0;
    const [isMobile, setIsMobile] = useState(false);

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

    return (
        <section ref={itemRef} className={`${styles.eventRow} ${isEven ? styles.even : styles.odd}`}>
            <div className={styles.bgNumber}>
                {String(index + 1).padStart(2, '0')}
            </div>

            <div className={styles.imageSide}>
                <motion.div
                    style={{ y: imageY }}
                    className={styles.imageCardWrapper}
                    initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? -50 : 50), y: isMobile ? 30 : 0 }}
                    animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.imageCard}>
                        <img 
                            src={evento.imagem} 
                            alt={evento.titulo} 
                            style={{ objectPosition: '50% 20%' }}
                        />
                    </div>
                    <div className={styles.imageCaption}>REGISTRO N. {index + 1}</div>
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
                        <span className={styles.eventDate}>{evento.data}</span>
                    </div>
                    <h2 className={styles.eventTitle}>{evento.titulo}</h2>
                    <p className={styles.eventDescription}>
                        {evento.descricao}
                    </p>
                    <div className={styles.editorialFooter}>CRONOLOGIA DOCUMENTADA</div>
                </div>
            </motion.div>
        </section>
    );
}

export default function EventosPage() {
    return (
        <main className={styles.pageWrapper}>
            <header className={styles.pageHeader}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.supLabel}
                >
                    PERSPECTIVA HISTÓRICA
                </motion.div>

                <motion.h1
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className={styles.mainTitle}
                >
                    EVENTOS
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={styles.titleDivider}
                />
            </header>

            <div className={styles.timelineContainer}>
                <div className={styles.lineBg} />
                <div className={styles.eventsList}>
                    {EVENTOS_CALINDRAS.map((evento, index) => (
                        <EventoItem key={evento.id} evento={evento} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}