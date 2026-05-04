'use client';

import { EQUIPE_CALIANDRAS } from '@/lib/mockData';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import styles from './Time.module.css';

export default function EquipePage() {
    console.log("Dados carregados:", EQUIPE_CALIANDRAS);

    // Variantes para animações coordenadas
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
        }
    };

    return (
        <main className={styles.mainContainer}>
            {/* HEADER */}
            <header className={styles.sectionHeader}>
                <span className={styles.overtitle}>Coletivo Criativo • Caliandras</span>
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={styles.sectionTitle}
                >
                    Equipe
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className={styles.subtitle}
                >
                    A força criativa por trás do Caliandras, unindo literatura, arte e tecnologia em um único propósito.
                </motion.p>
            </header>

            {/* 1. COLLECTIVE HERO (SPLIT LAYOUT) */}
            <motion.section
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                className={styles.collectiveHero}
            >
                <div className={styles.heroImageWrapper}>
                    <Image
                        src="/images/equipe/time_1.jpg"
                        alt="Time Caliandras em momento de diálogo"
                        fill
                        className={styles.heroImage}
                        priority
                        sizes="(max-width: 1024px) 100vw, 800px"
                        style={{ objectPosition: '50% 35%' }}
                    />
                </div>
                <div className={styles.heroCaption}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h2>O Coletivo</h2>
                        <h3 className={styles.captionTitle}>A Literatura como Sopro de Vida</h3>
                        <p>Cada projeto, cada resenha e cada talk show é o resultado de uma construção coletiva onde cada voz importa e cada olhar contribui para a cultura regional.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* 2. GRID DE MEMBROS */}
            <section className={styles.gridTitleSection}>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={styles.gridTitle}
                >
                    Nossos Integrantes
                </motion.span>
            </section>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={styles.grid}
            >
                {EQUIPE_CALIANDRAS.map((membro) => (
                    <motion.div
                        key={membro.id}
                        variants={itemVariants}
                        className={styles.memberCard}
                    >
                        <div className={styles.photoOuterCircle}>
                            <div className={styles.photoInnerCircle}>
                                <Image
                                    src={membro.fotoUrl || '/images/placeholder.jpg'}
                                    alt={membro.nome}
                                    fill
                                    className={styles.photo}
                                    sizes="200px"
                                />
                            </div>
                        </div>
                        <h3 className={styles.memberName}>{membro.nome}</h3>
                        <span className={styles.memberRole}>{membro.cargo}</span>
                        <p className={styles.memberBio}>{membro.bio}</p>

                        {(membro.email || membro.instagram) && (
                            <div className={styles.memberContact}>
                                {membro.email && (
                                    <a href={`mailto:${membro.email}`} className={styles.contactLink} title={membro.email}>
                                        <Mail size={16} />
                                        <span>E-mail</span>
                                    </a>
                                )}
                                {membro.instagram && (
                                    <a
                                        href={`https://instagram.com/${membro.instagram.replace('@', '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.contactLink}
                                        title={membro.instagram}
                                    >
                                        <Instagram size={16} />
                                        <span>Instagram</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>

            <div className={styles.sectionDivider}>
                <div className={styles.dividerLine} />
            </div>

            {/* 3. MOMENTOS GALLERY SECTION */}
            <div className={styles.momentsSection}>
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className={styles.momentsGallery}
                >
                    <div className={styles.momentInfo}>
                        <span className={styles.momentLabel}>Conexão & Diálogo</span>
                        <h2 className={styles.momentTitle}>Momentos que <br /> Fazem História</h2>
                        <p className={styles.momentDescription}>
                            Nossas intervenções literárias em bibliotecas e salas de aula são o coração do projeto, levando a literatura regional para todos os cantos e despertando novas vozes.
                        </p>
                    </div>
                    <div className={styles.momentImageWrapper}>
                        <img
                            src="/images/equipe/time2.jpeg"
                            alt="Coletivo Caliandras em Ação"
                            className={styles.momentImage}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
