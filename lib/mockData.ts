// lib/mockData.ts
import { Episodio, Autor, Resenha, Recomendacao, TimeMember, Produto } from '@/app/components/utils/types';

export const TODOS_PARCEIROS: Autor[] = [
    {
        id: 'a1',
        nomeCompleto: 'Pablo Costa',
        fotoUrl: '/images/mock/pablo_cover.jpg', 
        slug: 'pablo-costa',
        bio: "Escritor e entusiasta das artes, é uma das vozes que ajudam a tecer a tapeçaria cultural do Caliandras. Com uma trajetória marcada pela investigação da literatura regional e das novas linguagens audiovisuais, atua como convidado principal trazendo um olhar crítico e poético sobre a produção artística contemporânea. Sua presença nas intervenções poéticas e lives do projeto reforça o compromisso do Caliandras em fomentar o diálogo entre a tradição literária e a inovação cultural."
    },
    {
        id: 'a2',
        nomeCompleto: 'Gleicielly Medeiros',
        fotoUrl: '/images/mock/gleicy_autor.jpg', 
        slug: 'gleicielly-medeiros',
        bio: "Apresentadora/Entrevistadora e entusiasta cultural."
    },
    {
        id: 'a3',
        nomeCompleto: 'Nayra',
        fotoUrl: '/images/mock/nayra.jpg', 
        slug: 'nayra',
        bio: "Apresentadora e produtora do Caliandras."
    }
];

// Alias para evitar quebra imediata
export const TODOS_AUTORES = TODOS_PARCEIROS;

export const TODOS_EPISODIOS: Episodio[] = [
    {
        id: '1',
        titulo: 'Autor de Espirito Ilícito',
        slug: 'espirito-ilicito-autor',
        dataLancamento: '2025-11-24T12:00:00',
        urlVideo: 'ZFValH0rauY',
        descricao: 'Saiba mais sobre o autor da obra "Espiríto Ilícitio", Pablo Costa.',
        imagemCapaUrl: '/images/mock/pablo_cover.jpg',
        autorId: 'a1'
    },
    {
        id: '2',
        titulo: 'Encontro Ilícito',
        slug: 'encontro-ilicito',
        dataLancamento: '2025-11-28T12:00:00',
        urlVideo: 'NpGOg2fvgz4',
        descricao: 'Um pequeno Vlog do encontro "Espirito Ilícito", realizado no dia 10 de outubro.',
        imagemCapaUrl: '/images/mock/cover_vlog_encontro.png',
        autorId: 'a1'
    },
    {
        id: '3',
        titulo: 'Lançamento do livro Espirito Ilícito',
        slug: 'lancamento-espirito-ilicito',
        dataLancamento: '2025-10-10T12:00:00',
        urlVideo: 'Xgoom94yiNw',
        descricao: 'Registros do lançamento do livro Espirito Ilícito, realiado no Cine Teatro IFTO, em 10 de outubro.',
        imagemCapaUrl: '/images/mock/cover_lancamento_ei.png',
        autorId: 'a1'
    },
    {
        id: '4',
        titulo: 'Resenha de Espírito Ilícito',
        slug: 'resenha-esp-ili-gleicielly',
        dataLancamento: '2025-10-16T12:00:00',
        urlVideo: 'f0qlGFNDdEE',
        descricao: `Em ESPÍRITO ILÍCITO, Pabl. Costa tece uma obra envolvente, sensorial e perturbadora, onde o sagrado se entrelaça com o profano em uma história repleta de cicatrizes e beleza 💐. O leitor é guiado através de conventos, salas de aula abafadas e florestas impregnadas de mistério, conhecendo a jornada de dois jovens marcados pelo abandono, pela culpa e pela vontade de existir ✨️

Margarida é enviada à enigmática Ilha do Bom Passado após um escândalo familiar, descobre que a vida ali vai além da rotina religiosa e do isolamento: ela se depara com os vestígios de Narciso um ex-aluno desaparecido que deixou diários carregados de dor, confissões e visões perturbadoras 🌕. Em um emaranhado de páginas extraviadas e memórias ocultas, passado e presente se entrelaçam de forma a criar um tecido literário que combina lirismo, crítica social e um sutil toque de realismo mágico 📚

Pabl. Costa apresenta personagens multifacetados e humanos, como a severa Madre Sílvia, o enigmático Lírio e o reservado Padre Leon, todos orbitando em torno de um núcleo de afeto ferido e instituições em decadência. Com uma prosa lírica e fluida, o autor transforma a linguagem em um reflexo das emoções mais profundas aquelas que a religião tenta silenciar, que a sociedade prefere ocultar, mas que a literatura busca resgatar 🌷

Espírito Ilícito é uma história que aborda juventudes feridas, a falência das estruturas que deveriam proteger e o poder avassalador da memória. Um livro destinado àqueles que não temem a escuridão e que sabem que, por vezes, é nesse lugar que a luz começa a se manifestar 🌕

✍️Resenha por: Gleice Medeiros
📷Edição por: Emilly Campos

📍Local: Dunas do Jalapão (TO)
🗓 Data: 16/10/2025`,
        imagemCapaUrl: '/images/mock/cover_resenha.png',
        autorId: 'a2'
    }
];

export const TODOS_PRODUTOS: Produto[] = [
    {
        id: 'p1',
        titulo: 'Livro Espírito Ilícito',
        preco: 'Entre em contato',
        imagemUrl: '/images/mock/espirito_ilicito_cover.jpg',
        descricao: 'A obra física completa de Pablo Costa, explorando os limites da mente e da cultura.',
        linkCompra: 'https://www.instagram.com/calintras/',
        categoria: 'Livro'
    },
    {
        id: 'p2',
        titulo: 'E-book Espírito Ilícito',
        preco: 'R$30,00',
        imagemUrl: '/images/mock/espirito_ilicito_cover.jpg',
        descricao: 'Versão digital otimizada para Kindle e dispositivos móveis.',
        linkCompra: 'https://www.amazon.com.br/Esp%C3%ADrito-Il%C3%ADcito-Pabl-Costa-ebook/dp/B0FX1D9DYX/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3TQZYRJ5H5OQX&dib=eyJ2IjoiMSJ9.qvDPruSj4VphiwDeQ1ZwXz9tQ-ZpasBxhSNx_UpLLn6TaYxxM_ic44Uif1AUr2fY_VDFHB5FOIIEg31_oPhM-piVn6s0R0tHP5klRWKVt7c.EQk2nWxE_ccFeRCTr7Q7QjXgNeiQGZRvJZGzBY5u2_w&dib_tag=se&keywords=espirito+ilicito&qid=1766987259&s=books&sprefix=espirito+ilicito%2Cstripbooks%2C226&sr=1-1',
        categoria: 'E-book'
    },
    {
        id: 'p3',
        titulo: 'Marca-Páginas',
        preco: 'Entre em contato',
        imagemUrl: '/images/mock/marca_pagina.png',
        descricao: 'Camiseta oficial em algodão premium com a estampa exclusiva da temporada.',
        linkCompra: 'https://www.instagram.com/calintras/',
        categoria: 'Acessório'
    }
];

export const EVENTOS_CALINDRAS = [
    { 
        id: 1, 
        titulo: "Lançamento Espiríto Ilícito", 
        data: "2025-10-10",
        imagem: "/images/mock/eve1.jpeg", 
        descricao: 'O marco inicial da obra literária, reunindo entusiastas e críticos em uma noite de autógrafos no Cine Teatro IFTO.'
    },
    { 
        id: 2, 
        titulo: "Aula de Leitura Regional", 
        data: "2025-11-18", 
        imagem: "/images/mock/eve2.jpeg" ,
        descricao: 'Uma imersão nas raízes da literatura local, explorando a construção da identidade através das palavras.'
    },
    { 
        id: 3, 
        titulo: "VIII Feira de Cultura", 
        data: "2025-11-24", 
        imagem: "/images/mock/eve3.jpeg",
        descricao: 'Participação especial do projeto Caliandras na oitava edição da feira de cultura regional.'
    },
    { 
        id: 4, 
        titulo: "Aula de Língua Portuguesa", 
        data: "2025-11-28", 
        imagem: "/images/mock/eve4.jpeg",
        descricao: 'Intervenção cultural focada na norma culta e na expressão literária contemporânea.'
    },
    { 
        id: 5, 
        titulo: "Intervenções Poéticas", 
        data: "2025-12-05", 
        imagem: "/images/mock/eve5.jpeg",
        descricao: 'Sarau e leituras dramáticas realizadas ao ar livre para a comunidade.'
    },
];

export const TODAS_RESENHAS: Resenha[] = [
    {
        id: 'r1',
        slug: 'resenha-espirito-ilicito-gleice',
        tituloObra: 'Espírito Ilícito',
        autorObra: 'Pablo Costa',
        textoResenha: `Em ESPÍRITO ILÍCITO, Pabl. Costa tece uma obra envolvente, sensorial e perturbadora, onde o sagrado se entrelaça com o profano em uma história repleta de cicatrizes e beleza 💐. O leitor é guiado através de conventos, salas de aula abafadas e florestas impregnadas de mistério, conhecendo a jornada de dois jovens marcados pelo abandono, pela culpa e pela vontade de existir ✨️

Margarida é enviada à enigmática Ilha do Bom Passado após um escândalo familiar, descobre que a vida ali vai além da rotina religiosa e do isolamento: ela se depara com os vestígios de Narciso um ex-aluno desaparecido que deixou diários carregados de dor, confissões e visões perturbadoras 🌕. Em um emaranhado de páginas extraviadas e memórias ocultas, passado e presente se entrelaçam de forma a criar um tecido literário que combina lirismo, crítica social e um sutil toque de realismo mágico 📚

Pabl. Costa apresenta personagens multifacetados e humanos, como a severa Madre Sílvia, o enigmático Lírio e o reservado Padre Leon, todos orbitando em torno de um núcleo de afeto ferido e instituições em decadência. Com uma prosa lírica e fluida, o autor transforma a linguagem em um reflexo das emoções mais profundas aquelas que a religião tenta silenciar, que a sociedade prefere ocultar, mas que a literatura busca resgatar 🌷

Espírito Ilícito é uma história que aborda juventudes feridas, a falência das estruturas que deveriam proteger e o poder avassalador da memória. Um livro destinado àqueles que não temem a escuridão e que sabem que, por vezes, é nesse lugar que a luz começa a se manifestar 🌕`,
        nota: 5,
        dataPostagem: '2025-10-16',
        imagemCapa: '/images/mock/cover_resenha.png',
        resenhista: 'Gleice Medeiros',
        editor: 'Emilly Campos',
        local: 'Dunas do Jalapão (TO)'
    },
    {
        id: 'r2',
        slug: 'uma-obra-visceral-regional',
        tituloObra: 'Espírito Ilícito',
        autorObra: 'Pablo Costa',
        textoResenha: 'Uma obra visceral que explora as nuances da cultura regional com uma linguagem moderna.',
        nota: 5,
        dataPostagem: '2025-12-30',
        imagemCapa: '/images/mock/espirito_ilicito_cover.jpg'
    }
];

export const TODAS_RECOMENDACOES: Recomendacao[] = [
    {
        id: 'rec1',
        tituloObra: 'Torto Arado',
        autorObra: 'Itamar Vieira Junior',
        descricao: 'Uma recomendação essencial para entender a relação com a terra e a ancestralidade.',
        imagemCapa: '/images/placeholder.jpg'
    }
];

export const TIME_CALIANDRAS: TimeMember[] = [
    {
        id: 't1',
        nome: 'Equipe Editorial',
        cargo: 'Curadoria',
        fotoUrl: '/images/placeholder.jpg',
        bio: 'Responsável pela seleção e refinamento das obras apresentadas.'
    },
    {
        id: 't2',
        nome: 'Produção Audiovisual',
        cargo: 'Caliandras Show',
        fotoUrl: '/images/placeholder.jpg',
        bio: 'Transformando literatura em experiência visual.'
    }
];