import Image from 'next/image'; 
import { notFound } from 'next/navigation';
import { TODOS_AUTORES } from '@/lib/mockData'; 
import styles from './AutorPage.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function AutorPage({ params }: PageProps) {
  const { slug } = await params;
  const autor = TODOS_AUTORES.find(a => a.slug === slug);

  if (!autor) return notFound();

  return (
    <main className={styles.mainContainer}>
      <article className={styles.headerSection}>
        
        {/* PILHA DE FOTOGRAFIAS */}
        <div className={styles.photoStack}>
          <div className={`${styles.photoLayer} ${styles.layerBack}`} />
          <div className={`${styles.photoLayer} ${styles.layerMiddle}`} />
          
          <div className={`${styles.photoLayer} ${styles.avatarWrapper}`}>
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', backgroundColor: '#f9f9f9' }}>
              <Image
                src={autor.fotoUrl}
                alt={autor.nomeCompleto}
                fill
                sizes="(max-width: 900px) 100vw, 450px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* CONTEÚDO EDITORIAL */}
        <div className={styles.infoBox}>
          <span className={styles.subtitulo}>Convidado // Caliandras</span>
          <h1 className={styles.nome}>{autor.nomeCompleto}</h1>
          
          <div style={{ 
            width: '60px', 
            height: '2px', 
            backgroundColor: 'var(--color-accent)', 
            margin: '35px 0' 
          }} />

          <div className={styles.bio}>
            {autor.bio.split('\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '20px' }}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}