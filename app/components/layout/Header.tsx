"use client";

import Link from 'next/link';
import NavbarClient from './NavbarClient';

export default function Header() {
  return (
    <header style={{ 
      // Fundo branco com opacidade para o efeito de transparência (estilo Penguin)
      backgroundColor: 'rgba(255, 255, 255, 0.85)', 
      boxShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',      
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      // Borda inferior sutil para acabamento editorial
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      width: '100%',
      // O desfoque cria o efeito de degradê com o conteúdo que passa por baixo
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
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
            color: '#000000', // Preto para contraste no fundo branco
            marginLeft: '-3px', 
            textTransform: 'lowercase'
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