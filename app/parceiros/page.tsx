import { TODOS_PARCEIROS } from '@/lib/mockData';
import AuthorCard from './AuthorCard';
import styles from './Parceiros.module.css';

export default async function ParceirosPage() {
    return (
        <main className={styles.mainContainer}>
            <header className={styles.header}>
                <span className={styles.overtitle}>
                    Rede de Colaboração
                </span>
                
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        Parceiros e Convidados
                    </h1>
                    <div className={styles.titleUnderline} />
                </div>
                
                <p className={styles.subtitle}>
                    Conheça os profissionais e empresas que fortalecem o ecossistema cultural do Caliandras.
                </p>
            </header>

            <div className={styles.grid}>
                {TODOS_PARCEIROS.map(parceiro => (
                    <AuthorCard key={parceiro.id} autor={parceiro} />
                ))}
            </div>
        </main>
    );
}