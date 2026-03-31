'use client';

import Link from 'next/link';
import { Autor } from '../components/utils/types';
import { useState } from 'react';

export default function AuthorCard({ autor }: { autor: Autor }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
            href={`/autores/${autor.slug}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                height: 'clamp(400px, 65vh, 520px)', // Altura fluida para mobile/desktop
                textDecoration: 'none',
                borderRadius: '4px', 
                overflow: 'hidden',
                transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.08)',
                display: 'block',
                position: 'relative',
                backgroundColor: '#1a1a1a',
                transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
            }}
        >
            {/* Imagem com Zoom Suave */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${autor.fotoUrl})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center 15%',
                transition: 'transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                opacity: 0.85
            }} />
            
            {/* Overlay Editorial */}
            <div style={{ 
                position: 'absolute', 
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'flex-end', 
                padding: 'clamp(25px, 5vw, 40px)', // Padding adaptável
            }}>
                <h2 style={{ 
                    fontSize: 'clamp(22px, 4vw, 28px)', 
                    fontWeight: '900', 
                    color: 'white', 
                    marginBottom: '12px', 
                    letterSpacing: '-1px',
                    textTransform: 'uppercase', // Título em Uppercase
                    lineHeight: '1',
                    transition: 'transform 0.4s ease',
                    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
                }}>
                    {autor.nomeCompleto}
                </h2>
                
                {/* Barra de Acento Dinâmica */}
                <div style={{
                    width: isHovered ? '100%' : '45px',
                    height: '2px',
                    backgroundColor: 'var(--color-accent)',
                    marginBottom: '20px',
                    transition: 'width 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
                }} />

                <p style={{ 
                    fontSize: '10px', 
                    fontWeight: '800', 
                    textTransform: 'uppercase', 
                    letterSpacing: '3px', 
                    color: isHovered ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.3s ease'
                }}>
                    Ver Perfil 
                </p>
            </div>
        </Link>
    );
}