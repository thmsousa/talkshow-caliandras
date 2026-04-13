'use client';

import Link from 'next/link';
import { Autor } from '../components/utils/types';
import styles from './AuthorCard.module.css';

export default function AuthorCard({ autor }: { autor: Autor }) {
    return (
        <Link 
            href={`/parceiros/${autor.slug}`}
            className={styles.cardLink}
        >
            <div 
                className={styles.bgImage}
                style={{ backgroundImage: `url(${autor.fotoUrl})` }} 
            />
            
            <div className={styles.overlay}>
                <h2 className={styles.name}>
                    {autor.nomeCompleto}
                </h2>
                
                <div className={styles.accentBar} />

                <p className={styles.ctaText}>
                    Ver Perfil 
                </p>
            </div>
        </Link>
    );
}