'use client';

import { EVENTOS_CALINDRAS } from '@/lib/mockData';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Eventos.module.css';

function EventoItem({ evento, index }: { evento: any, index: number }) {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: "-10% 0px" });
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    // Parallax suave para reforçar a profundidade do espaçamento
    const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]); 
    const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <section ref={itemRef} className={`${styles.eventRow} ${isEven ? styles.even : styles.odd}`}>
            <div className={styles.bgNumber}>
                {String(index + 1).padStart(2, '0')}
            </div>

            <div className={styles.imageSide}>
                <motion.div style={{ y: imageY }} className={styles.imageCardWrapper}>
                    <div className={styles.imageCard}>
                        <img src={evento.imagem} alt={evento.titulo} />
                    </div>
                    <div className={styles.imageCaption}>REGISTRO // {evento.data}</div>
                </motion.div>
            </div>

            <motion.div 
                style={{ y: textY }} 
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className={styles.contentSide}
            >
                <div className={styles.textContainer}>
                    <div className={styles.metaTag}>
                        <span className={styles.eventDate}>{evento.data}</span>
                    </div>
                    <h2 className={styles.eventTitle}>{evento.titulo}</h2>
                    <p className={styles.eventDescription}>
                        Registro documental e artístico, capturando a essência e a evolução 
                        contínua do projeto Caliandras no panorama cultural brasileiro.
                    </p>
                    <div className={styles.editorialFooter}>CRONOLOGIA OFICIAL</div>
                </div>
            </motion.div>
        </section>
    );
}

export default function EventosPage() {
    return (
        <main className={styles.pageWrapper}>
            <header className={styles.pageHeader}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.supLabel}>
                    ARQUIVO VIVO
                </motion.div>
                
                <h1 className={styles.mainTitle}>Cronologia Caliandras</h1>

                <div className={styles.titleDivider} />
            </header>

            <div className={styles.timelineContainer}>
                {/* Divisória central visual fixa */}
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