'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import styles from './ChatBot.module.css';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    // Agora o estado armazena apenas a interação atual (Pergunta + Resposta)
    const [currentView, setCurrentView] = useState<{pergunta?: string, resposta: string}>({
        resposta: 'Olá! Notei seu interesse em nossas obras. Como podemos ajudar você hoje?'
    });
    
    const chatBodyRef = useRef<HTMLDivElement>(null);

    const faq = [
        { 
            id: 1,
            pergunta: "Como comprar os livros?", 
            resposta: "Você pode adquirir nossas obras diretamente via WhatsApp ou Instagram. Clique em um dos botões abaixo para falar com nossa curadoria!" 
        },
        { 
            id: 2,
            pergunta: "Quais os horários dos eventos?", 
            resposta: "Nossos Talk Shows acontecem mensalmente em Palmas. Acompanhe a agenda atualizada no nosso Instagram!" 
        },
        { 
            id: 3,
            pergunta: "Sou autor, como participar?", 
            resposta: "Ficamos felizes com o interesse! Envie um Direct no Instagram com seu portfólio para nossa equipe avaliar." 
        }
    ];

    const openChat = useCallback(() => setIsOpen(true), []);

    useEffect(() => {
        (window as any).openCaliantrasChat = openChat;
    }, [openChat]);

    // Sempre que a visão mudar, levamos o scroll para o topo do container de chat
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [currentView]);

    const handleQuestion = (q: typeof faq[0]) => {
        // Substitui a visão atual pela nova pergunta e resposta
        setCurrentView({
            pergunta: q.pergunta,
            resposta: q.resposta
        });
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.header}>
                <div className={styles.avatar}>C</div>
                <div className={styles.statusInfo}>
                    <h4>Caliandras</h4>
                </div>
                <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>✕</button>
            </div>

            <div className={styles.chatBody} ref={chatBodyRef}>
                <div className={styles.contentWrapper}>
                    {/* Se houver uma pergunta selecionada, exibe a bolha do usuário */}
                    {currentView.pergunta && (
                        <div className={`${styles.bubble} ${styles.userBubble}`}>
                            {currentView.pergunta}
                        </div>
                    )}

                    {/* Resposta do Bot (Sempre visível) */}
                    <div className={styles.bubble}>
                        {currentView.resposta}
                    </div>

                    {/* Menu de Opções (FAQ) */}
                    <div className={styles.faqContainer}>
                        <p className={styles.faqTitle}>Escolha um tópico:</p>
                        {faq.map((item) => (
                            <button 
                                key={item.id} 
                                onClick={() => handleQuestion(item)}
                                className={styles.faqButton}
                            >
                                {item.pergunta}
                            </button>
                        ))}
                    </div>

                    {/* Botões de Contato Humano */}
                    <div className={styles.buttonContainer}>
                        <p className={styles.faqTitle}>Falar com a equipe:</p>
                        <a href="https://wa.me/5563981150250" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.whatsapp}`}>
                            WhatsApp
                        </a>
                        <a href="https://instagram.com/caliandrasshow" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.instagram}`}>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.footer}>
                Atendimento Exclusivo • {new Date().getFullYear()}
            </div>
        </div>
    );
}