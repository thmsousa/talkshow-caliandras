'use client';

import { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, useMotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFSliderProps {
    pdfUrl: string;
}

export default function PDFSlider({ pdfUrl }: PDFSliderProps) {
    const [currentX, setCurrentX] = useState(0);
    const [pdfWidth, setPdfWidth] = useState(0);
    const [viewWidth, setViewWidth] = useState(1200);
    const [viewHeight, setViewHeight] = useState(600);

    // Espaço extra no final para o conteúdo não grudar na borda/seta
    const END_PADDING = 200;

    const x = useMotionValue(0);

    useEffect(() => {
        const update = () => {
            setViewWidth(window.innerWidth);
            const isMobile = window.innerWidth <= 768;
            setViewHeight(Math.round(window.innerHeight * (isMobile ? 0.60 : 0.80)));
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    function onPageLoadSuccess(page: any) {
        const vp = page.getViewport({ scale: 1 });
        const ratio = vp.width / vp.height;
        const calculatedWidth = Math.round(viewHeight * ratio);
        setPdfWidth(calculatedWidth);
        setCurrentX(0);
        x.set(0);
    }

    // O limite de rolagem considera o padding final para não cortar nada
    const maxScroll = Math.max(0, (pdfWidth + END_PADDING) - viewWidth);

    const scroll = (dir: number) => {
        const step = viewWidth * 0.75;
        let next = currentX + dir * step;
        if (next < 0) next = 0;
        if (next > maxScroll) next = maxScroll;
        setCurrentX(next);
        x.set(-next);
    };

    useEffect(() => {
        return x.onChange((latest) => {
            setCurrentX(-latest);
        });
    }, [x]);

    const canGoLeft = currentX > 10;
    const canGoRight = currentX < maxScroll - 10;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
                position: 'relative',
                width: '100%',
                height: `${viewHeight}px`,
                background: 'transparent',
                overflow: 'visible',
                cursor: 'grab'
            }}
            whileTap={{ cursor: 'grabbing' }}
        >
            <div style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ left: -maxScroll, right: 0 }}
                    style={{
                        x,
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        // Adicionamos o padding aqui para criar o espaço extra no fim
                        paddingRight: `${END_PADDING}px`,
                        width: `${pdfWidth}px`,
                        boxSizing: 'content-box'
                    }}
                >
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={() => { }}
                        loading={<div style={{ color: '#111', fontWeight: 800, textAlign: 'center', width: '100vw', paddingTop: '20px' }}>CARREGANDO MURAL...</div>}
                    >
                        <Page
                            pageNumber={1}
                            height={viewHeight}
                            onLoadSuccess={onPageLoadSuccess}
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                        />
                    </Document>
                </motion.div>
            </div>

            {/* SETAS */}
            <button
                onClick={() => scroll(-1)}
                style={{
                    position: 'absolute', left: '15px', top: '50%',
                    transform: 'translateY(-50%)', zIndex: 100,
                    width: '56px', height: '56px', borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: canGoLeft ? 'pointer' : 'default', opacity: canGoLeft ? 1 : 0,
                    pointerEvents: canGoLeft ? 'auto' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <ChevronLeft size={28} />
            </button>

            <button
                onClick={() => scroll(1)}
                style={{
                    position: 'absolute', right: '15px', top: '50%',
                    transform: 'translateY(-50%)', zIndex: 100,
                    width: '56px', height: '56px', borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: canGoRight ? 'pointer' : 'default', opacity: canGoRight ? 1 : 0,
                    pointerEvents: canGoRight ? 'auto' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >
                <ChevronRight size={28} />
            </button>
        </motion.div>
    );
}
