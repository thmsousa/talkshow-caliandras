'use client'; 

import Image from 'next/image';
import { TODOS_PRODUTOS } from '@/lib/mockData';
import styles from './Produtos.module.css';
import ChatBot from '../components/ChatBot';

export default function ProdutosPage() {
    const handleBuyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Abre o ChatBot do Caliandras para finalizar a compra
        if (typeof window !== 'undefined' && (window as any).openCaliantrasChat) {
            (window as any).openCaliantrasChat();
        }
    };

    return (
        <main className={styles.container}>
            {/* Decorações Editoriais de Fundo */}
            <div className={styles.decoVerticalTextLeft}>Catálogo</div>
            <div className={styles.decoVerticalTextRight}>Acervo</div>
            <div className={styles.bgGridPattern}></div>

            <header className={styles.sectionHeader}>
                <span className={styles.overtitle}>Livraria & Merch • Caliandras</span>
                <h1 className={styles.sectionTitle}>Loja Caliandras</h1>
            </header>

            <div className={styles.productGrid}>
                {TODOS_PRODUTOS.map((produto) => (
                    <div key={produto.id} className={styles.productCard}>
                        <div className={styles.imageWrapper}>
                            <span className={styles.categoryTag}>{produto.categoria}</span>
                            <Image 
                                src={produto.imagemUrl} 
                                alt={produto.titulo} 
                                fill
                                priority 
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className={styles.productImage} 
                            />
                        </div>
                        
                        <div className={styles.infoContent}>
                            <h3 className={styles.productTitle}>{produto.titulo}</h3>
                            <p className={styles.productDescription}>{produto.descricao}</p>
                            
                            <div className={styles.footerRow}>
                                <span className={styles.price}>{produto.preco}</span>
                                <button 
                                    onClick={handleBuyClick}
                                    className={styles.buyButton}
                                >
                                    COMPRAR
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ChatBot />
        </main>
    );
}