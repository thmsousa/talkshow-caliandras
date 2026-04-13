'use client';

import { TIME_CALIANDRAS } from '@/lib/mockData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Time.module.css';

export default function TimePage() {
    return (
        <main className={styles.mainContainer}>
            <header className={styles.header}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={styles.logoIcon}
                >
                    C
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className={styles.title}
                >
                    Nosso Time
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className={styles.subtitle}
                >
                    A força criativa por trás do Caliandras, unindo literatura, arte e tecnologia.
                </motion.p>
            </header>

            <div className={styles.grid}>
                {TIME_CALIANDRAS.map((membro, idx) => (
                    <motion.div 
                        key={membro.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.15 }}
                        viewport={{ once: true }}
                        className={styles.memberCard}
                    >
                        <div className={styles.photoOuterCircle}>
                            <div className={styles.photoInnerCircle}>
                                <Image 
                                    src={membro.fotoUrl || '/images/placeholder.jpg'} 
                                    alt={membro.nome}
                                    fill
                                    className={styles.photo}
                                />
                                <div className={styles.overlay} />
                            </div>
                        </div>
                        <h3 className={styles.memberName}>
                            {membro.nome}
                        </h3>
                        <p className={styles.memberRole}>
                            {membro.cargo}
                        </p>
                        <p className={styles.memberBio}>
                            {membro.bio}
                        </p>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
