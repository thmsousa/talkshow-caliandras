'use client'; 
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Autores', href: '/autores' },
    { name: 'Sobre', href: '/sobre' }, 
];

export default function NavbarClient() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav>
            {/* BOTÃO HAMBÚRGUER REFINADO */}
            <button 
                onClick={toggleMenu}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '26px',
                    height: '16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    zIndex: 2005,
                    position: 'relative'
                }}
                className="mobile-toggle"
            >
                {/* As listras agora são pretas para aparecer no header branco, 
                    mas ficam brancas quando o menu (que é escuro) abre */}
                <div style={{ 
                    width: '100%', height: '1.5px', 
                    background: isOpen ? 'white' : 'black', 
                    transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)' 
                }} />
                <div style={{ 
                    width: '100%', height: '1.5px', 
                    background: isOpen ? 'white' : 'black', 
                    transition: '0.4s',
                    opacity: isOpen ? 0 : 1 
                }} />
                <div style={{ 
                    width: '100%', height: '1.5px', 
                    background: isOpen ? 'white' : 'black', 
                    transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                    transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)' 
                }} />
            </button>

            {/* GAVETA LATERAL */}
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.name} className="nav-item"> 
                        <Link href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className="nav-link"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .nav-list {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: 30px;
                }

                :global(.nav-link) {
                    color: #121212;
                    font-weight: 700;
                    font-size: 11px;
                    transition: all 0.3s ease;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-decoration: none;
                    position: relative;
                }

                /* Linha minimalista no hover para Desktop */
                @media (min-width: 769px) {
                    :global(.nav-link::after) {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 0;
                        height: 1px;
                        background: var(--color-accent);
                        transition: width 0.3s ease;
                    }
                    :global(.nav-link:hover::after) {
                        width: 100%;
                    }
                }

                /* MOBILE LOGIC */
                .mobile-toggle {
                    display: none !important;
                }

                @media (max-width: 768px) {
                    .mobile-toggle {
                        display: flex !important;
                    }

                    .nav-list {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: 100%; /* Ocupa a tela toda para um efeito mais dramático */
                        background: #0a0a0a;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 40px;
                        transform: translateY(-100%); /* Abre de cima para baixo ou do lado */
                        transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                        z-index: 2000;
                    }

                    .nav-list.open {
                        transform: translateY(0);
                    }

                    :global(.nav-link) {
                        color: white !important;
                        font-size: 24px;
                        letter-spacing: 4px;
                        font-weight: 900;
                    }

                    .nav-item {
                        overflow: hidden;
                    }
                }
            `}</style>
        </nav>
    );
}