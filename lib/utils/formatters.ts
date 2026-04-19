/**
 * Centraliza funções de formatação para garantir consistência em todo o projeto.
 */

/**
 * Formata strings de data (ex: 2025-10-10) para o padrão brasileiro por extenso.
 * Resolve problemas comuns de fuso horário e datas inválidas.
 */
export const formatFullDate = (dateString: string): string => {
    if (!dateString) return "";
    try {
        const onlyDate = dateString.split('T')[0];
        const parts = onlyDate.split('-');
        const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        
        if (isNaN(date.getTime())) return dateString;

        return date.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });
    } catch (e) { 
        return dateString; 
    }
};

/**
 * Gera um resumo de texto (excerpt) mantendo palavras inteiras quando possível.
 */
export const createExcerpt = (text: string, length: number = 160): string => {
    if (!text || text.length <= length) return text;
    return text.substring(0, length).trim() + '...';
};
