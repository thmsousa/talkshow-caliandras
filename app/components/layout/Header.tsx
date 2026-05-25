"use client";

import Link from 'next/link';
import NavbarClient from './NavbarClient';

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--color-header-bg)',
      boxShadow: '0 1px 0 var(--color-header-border)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid var(--color-header-border)',
      width: '100%',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      transition: 'background-color 0.4s ease, border-bottom-color 0.4s ease'
    }}>
      <div className="container header-flex-container">

        {/* LOGO: Estrutura original preservada */}
        <Link href="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          transform: 'translateY(4px)',
          paddingTop: "10px",
          height: '100%',
          padding: '8px 0'
        }}>
          <span className="font-amoresa" style={{
            fontSize: 'clamp(24px, 3.5vw, 30px)',
            lineHeight: '0.8',
            color: 'var(--color-accent)', // Seu novo Laranja
            display: 'inline-block'
          }}>
            C
          </span>
          <span className="font-perandory" style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: 'var(--color-text)', // Dinâmico para contraste nos dois modos
            marginLeft: '-3px',
            textTransform: 'lowercase',
            transition: 'color 0.4s ease'
          }}>
            aliandras
          </span>
        </Link>

        {/* NAVEGAÇÃO CLIENT SIDE COM LOGICA DE MENU OCULTO */}
        <NavbarClient />

      </div>

      <style jsx>{`
        .header-flex-container {
          padding: 5px 20px;
          display: flex;
          flex-direction: row; 
          align-items: center;
          justify-content: space-between;
          max-width: 1200px; /* Garante alinhamento com o restante do site */
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .header-flex-container {
            padding: 10px 40px;
          }
        }
      `}</style>
    </header>
  );
}