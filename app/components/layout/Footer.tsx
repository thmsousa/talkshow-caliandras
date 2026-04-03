'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ 
            backgroundColor: 'rgba(12, 12, 12, 0.98)', // Um preto quase sólido, mas com leve transparência
            color: 'white', 
            marginTop: '0', 
            padding: '80px 0 60px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            width: '100%',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container footer-container">
                
                {/* LADO ESQUERDO: BRANDING */}
                <div className="footer-brand">
                    <p style={{ 
                        fontSize: '28px', 
                        fontWeight: '950', 
                        color: 'var(--color-accent)', 
                        margin: 0,
                        letterSpacing: '-1.5px',
                        lineHeight: '1'
                    }}>
                        CALIANDRAS
                    </p> 
                    <p style={{ 
                        fontSize: '13px', 
                        color: 'rgba(255,255,255,0.4)', 
                        marginTop: '15px',
                        maxWidth: '280px',
                        lineHeight: '1.6'
                    }}>
                        Explorando as profundezas da literatura e as vozes que constroem a identidade cultural brasileira.
                    </p>
                </div>

                {/* LADO DIREITO: NAVEGAÇÃO E REDES */}
                <div className="footer-nav-group">
                    <nav className="footer-nav">
                        <span className="nav-label">Navegação</span>
                        <ul>
                            <li><Link href="/sobre" className="footer-link">O Manifesto</Link></li>
                            <li><Link href="/videos" className="footer-link">Episódios</Link></li>
                            <li><Link href="/eventos" className="footer-link">Eventos</Link></li>
                        </ul>
                    </nav>

                    <nav className="footer-nav">
                        <span className="nav-label">Conecte-se</span>
                        <ul>
                            <li>
                                <Link href="https://www.instagram.com/caliandrasshow/" target="_blank" className="footer-link">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="https://youtube.com" target="_blank" className="footer-link">
                                    YouTube
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* BARRA INFERIOR DE CRÉDITOS */}
            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} Caliandras Show. Todos os direitos reservados.</p>
                <p className="credit-tag">Direção de Pablo Costa</p>
            </div>

            <style jsx>{`
                .footer-container {
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 40px;
                }

                .footer-nav-group {
                    display: flex;
                    gap: 60px;
                    flex-wrap: wrap;
                }

                .nav-label {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255, 255, 255, 0.2);
                    margin-bottom: 20px;
                }

                .footer-nav ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .footer-nav li {
                    margin-bottom: 12px;
                }

                :global(.footer-link) {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                :global(.footer-link:hover) {
                    color: var(--color-accent);
                }

                .footer-bottom {
                    max-width: 1200px;
                    margin: 60px auto 0;
                    padding: 30px 40px 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.3);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .credit-tag {
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.5);
                }

                @media (min-width: 768px) {
                    .footer-container {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                    }
                }

                @media (max-width: 767px) {
                    .footer-container {
                        text-align: center;
                        align-items: center;
                        padding: 0 20px;
                    }
                    .footer-nav-group {
                        justify-content: center;
                        gap: 40px;
                        text-align: center;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        gap: 15px;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
}