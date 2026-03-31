import { TODOS_AUTORES } from '@/lib/mockData';
import AuthorCard from './AuthorCard';

export default async function AutoresPage() {
    return (
        <main style={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            padding: '30px 20px 100px', // Reduzi de 120px para 30px no topo
            backgroundColor: '#fff' 
        }}>
            <header style={{ marginBottom: '60px', textAlign: 'center' }}>
                <span style={{
                    fontSize: '11px',
                    fontWeight: '900',
                    color: 'var(--color-accent)',
                    letterSpacing: '5px',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '15px'
                }}>
                    Vozes & Talentos
                </span>
                
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '15px' 
                }}>
                    <h1 style={{ 
                        fontSize: 'clamp(32px, 8vw, 56px)', 
                        fontWeight: '950', 
                        color: '#1a1a1a',
                        margin: 0,
                        letterSpacing: '-3px',
                        textTransform: 'uppercase', // Título Principal em Uppercase
                        lineHeight: '0.9'
                    }}>
                        Autores e Convidados
                    </h1>
                    <div style={{ width: '60px', height: '4px', backgroundColor: '#1a1a1a' }} />
                </div>
                
                <p style={{ 
                    fontSize: '17px', 
                    color: '#666', 
                    maxWidth: '650px', 
                    margin: '25px auto 0',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    padding: '0 10px'
                }}>
                    Conheça as mentes brilhantes que dão vida às intervenções poéticas e audiovisuais do Caliandras.
                </p>
            </header>

            {/* Grid Responsiva: 1 coluna no mobile, 2 no tablet, 3 ou 4 no desktop */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', 
                gap: '30px', 
                padding: '0 10px'
            }}>
                {TODOS_AUTORES.map(autor => (
                    <AuthorCard key={autor.id} autor={autor} />
                ))}
            </div>

            {/* Micro-ajuste para Mobile via Inline CSS (Next.js Global hack sutil) */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 768px) {
                    main { padding-top: 15px !important; }
                    header { margin-bottom: 40px !important; }
                }
            `}} />
        </main>
    );
}