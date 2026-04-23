// lib/mockData.ts
import { Episodio, Autor, Resenha, Recomendacao, TimeMember, Produto } from '@/app/components/utils/types';

export const TODOS_PARCEIROS: Autor[] = [
    {
        id: 'a1',
        nomeCompleto: 'Pablo Costa',
        fotoUrl: '/images/team/pablo.jpg',
        slug: 'pablo-costa',
        bio: "Escritor e entusiasta das artes, é uma das vozes que ajudam a tecer a tapeçaria cultural do Caliandras."
    },
    {
        id: 'a2',
        nomeCompleto: 'Gleicielly Medeiros',
        fotoUrl: '/images/team/gleice.jpg',
        slug: 'gleicielly-medeiros',
        bio: "Apresentadora/Entrevistadora e entusiasta cultural."
    },
    {
        id: 'a3',
        nomeCompleto: 'Nayra',
        fotoUrl: '/images/team/nayra.jpg',
        slug: 'nayra',
        bio: "Apresentadora e produtora do Caliandras."
    }
];

export const TODOS_AUTORES = TODOS_PARCEIROS;

export const TODOS_EPISODIOS: Episodio[] = [
    {
        id: '1',
        titulo: 'Autor de Espirito Ilícito',
        slug: 'espirito-ilicito-autor',
        dataLancamento: '2025-11-24T12:00:00',
        urlVideo: 'ZFValH0rauY',
        descricao: 'Saiba mais sobre o autor da obra "Espiríto Ilícitio", Pablo Costa.',
        imagemCapaUrl: '/images/episodes/pablo_cover.jpg',
        autorId: 'a1'
    },
    {
        id: '2',
        titulo: 'Encontro Ilícito',
        slug: 'encontro-ilicito',
        dataLancamento: '2025-11-28T12:00:00',
        urlVideo: 'NpGOg2fvgz4',
        descricao: 'Um pequeno Vlog do encontro "Espirito Ilícito", realizado no dia 10 de outubro.',
        imagemCapaUrl: '/images/episodes/cover_vlog_encontro.png',
        autorId: 'a1'
    },
    {
        id: '3',
        titulo: 'Lançamento do livro Espirito Ilícito',
        slug: 'lancamento-espirito-ilicito',
        dataLancamento: '2025-10-10T12:00:00',
        urlVideo: 'Xgoom94yiNw',
        descricao: 'Registros do lançamento do livro Espirito Ilícito, realiado no Cine Teatro IFTO, em 10 de outubro.',
        imagemCapaUrl: '/images/episodes/cover_lancamento_ei.png',
        autorId: 'a1'
    },
    {
        id: '4',
        titulo: 'Resenha de Espírito Ilícito',
        slug: 'resenha-esp-ili-gleicielly',
        dataLancamento: '2025-10-16T12:00:00',
        urlVideo: 'f0qlGFNDdEE',
        descricao: `Em ESPÍRITO ILÍCITO, Pabl. Costa tece uma obra envolvente, sensorial e perturbadora, onde o sagrado se entrelaça com o profano em uma história repleta de cicatrizes e beleza.`,
        imagemCapaUrl: '/images/episodes/cover_resenha.png',
        autorId: 'a2'
    }
];

export const TODOS_PRODUTOS: Produto[] = [
    {
        id: 'p1',
        titulo: 'Livro Espírito Ilícito',
        preco: 'Entre em contato',
        imagemUrl: '/images/products/espirito_ilicito_cover.jpg',
        descricao: 'A obra física completa de Pablo Costa, explorando os limites da mente e da cultura.',
        linkCompra: 'https://www.instagram.com/calintras/',
        categoria: 'Livro'
    },
    {
        id: 'p2',
        titulo: 'E-book Espírito Ilícito',
        preco: 'R$30,00',
        imagemUrl: '/images/products/espirito_ilicito_cover.jpg',
        descricao: 'Versão digital otimizada para Kindle e dispositivos móveis.',
        linkCompra: 'https://www.amazon.com.br/Esp%C3%ADrito-Il%C3%ADcito-Pabl-Costa-ebook/dp/B0FX1D9DYX/',
        categoria: 'E-book'
    },
    {
        id: 'p3',
        titulo: 'Marca-Páginas',
        preco: 'Entre em contato',
        imagemUrl: '/images/products/marca_pagina.png',
        descricao: 'Marcador de páginas oficial do projeto Caliandras.',
        linkCompra: 'https://www.instagram.com/calintras/',
        categoria: 'Acessório'
    }
];

export const EVENTOS_CALINDRAS = [
    {
        id: 1,
        titulo: "Lançamento Espiríto Ilícito",
        data: "2025-10-10",
        imagem: "/images/events/eve1.jpeg",
        descricao: 'O marco inicial da obra literária, reunindo entusiastas e críticos em uma noite de autógrafos no Cine Teatro IFTO.'
    },
    {
        id: 2,
        titulo: "Aula de Leitura Regional",
        data: "2025-11-18",
        imagem: "/images/events/eve2.jpeg",
        descricao: 'Uma imersão nas raízes da literatura local, explorando a construção da identidade através das palavras.'
    },
    {
        id: 3,
        titulo: "VIII Feira de Cultura",
        data: "2025-11-24",
        imagem: "/images/events/eve3.jpeg",
        descricao: 'Participação especial do projeto Caliandras na oitava edição da feira de cultura regional.'
    },
    {
        id: 4,
        titulo: "Aula de Língua Portuguesa",
        data: "2025-11-28",
        imagem: "/images/events/eve4.jpeg",
        descricao: 'Intervenção cultural focada na norma culta e na expressão literária contemporânea.'
    },
    {
        id: 5,
        titulo: "Intervenções Poéticas",
        data: "2025-12-05",
        imagem: "/images/events/eve5.jpeg",
        descricao: 'Sarau e leituras dramáticas realizadas ao ar livre para a comunidade.'
    },
    {
        id: 6,
        titulo: "Para Além das Letras - Espaço Cultural",
        data: "2026-03-09",
        imagem: "/images/events/eve6.png",
        descricao: 'Noite de lançamento da obra coletiva no Espaço Cultural de Palmas.'
    },
    {
        id: 7,
        titulo: "Para Além das Letras - São Paulo",
        data: "2026-04-07",
        imagem: "/images/events/eve7.jpg",
        descricao: 'Oficina prática que deu origem à obra "Para Além das Letras".'
    }
];

export const EQUIPE_CALIANDRAS: TimeMember[] = [
    {
        id: 't1',
        nome: 'Pablo Costa',
        cargo: 'Designer gráfico, conselheiro criativo e sonoplasta.',
        fotoUrl: '/images/equipe/pablo.jpg',
        bio: 'Pablo Costa é nascido na periferia de Palmas (TO) e em 2026 completa 20 anos. Publicou sua primeira obra em 2022 pela Editora Coerência, “As Estacões de Demp Esmerald e o Gato da Penumbra”, e a segunda de forma completamente independente, “Espírito Ilícito” em 2025. Autor queer na flor da idade, faz ilustrações e poemas para os próprios livros, atualmente cursa licenciatura em Letras pelo IFTO e faz designer gráficos e lidera o coletivo de literatura Caliandras Show.',
        email: 'ps.cosescritor@gmail.com',
        instagram: '@ps.co'
    },
    {
        id: 't2',
        nome: 'Gleicielly Medeiros',
        cargo: 'Entrevistadora e Resenhista',
        fotoUrl: '/images/equipe/gleice.jpg',
        bio: 'Gleicielly Medeiros, mais conhecida como Gleice, é natural do Maranhão, mas cresceu e vive em Palmas (TO), atualmente, em 2026, cursa Licenciatura em Letras pelo IFTO. Integra o coletivo Caliandras Show como apresentadora e resenhista.',
        email: 'gleiciellym7@gmail.com',
        instagram: '@gleici.smedeiros'
    },
    {
        id: 't3',
        nome: 'Nayra Souza',
        cargo: 'Roteirista, entrevistadora e secretária interna.',
        fotoUrl: '/images/equipe/nayra.jpg',
        bio: 'Nayra Souza nasceu em Barra do Corda, no interior do Maranhão. Estudante de Letras no IFTO Palmas. Atualmente cria os roteiros para os Caliandras Talk Show’s e também desempenha a função de entrevistadora.',
        email: 'nayra@gmail.com',
        instagram: '@nayra_souza'
    },
    {
        id: 't4',
        nome: 'Emilly Campos',
        cargo: 'Designer gráfica, Videomaker e Entrevistadora',
        fotoUrl: '/images/equipe/emilly.jpg',
        bio: 'De Palmas (TO), Emilly Campos, atualmente em 2026, faz parte do CALINTRAS, realizando trabalhos gráficos e organizando eventos voltados à leitura.',
        email: 'emilycampos2408@gmail.com',
        instagram: '@emillycsmps'
    },
    {
        id: 't5',
        nome: 'Rayssa Montelo',
        cargo: 'Resenhista',
        fotoUrl: '/images/equipe/rayssa.jpg',
        bio: 'Rayssa Montelo possui 20 anos em 2026, nascida em Palmas, Tocantins. Atualmente cursa Biomedicina e integra o Caliandras Show.',
        email: 'rayssamontelo10@gmail.com',
        instagram: '@rayssa_montelo'
    },
    {
        id: 't6',
        nome: 'Sávio Rodrigues',
        cargo: 'Resenhista',
        fotoUrl: '/images/equipe/savio.jpg',
        bio: 'Sávio Rodrigues tem 20 anos em 2026. É estudante de Psicologia e faz resenhas para o Caliandras Show.'
    },
    {
        id: 't7',
        nome: 'Mirelle Freitas',
        cargo: 'Conselheira para Administração e Finanças',
        fotoUrl: '/images/equipe/mirelle.jpg',
        bio: 'Mirelle Freitas é doutora e formadora de professores no IFTO Palmas. Atua como conselheira do coletivo Caliandras Show.',
        email: 'mirelle.sf11@gmail.com',
        instagram: '@mih_sfreitas'
    }
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

Espírito Ilícito é uma história que aborda juventudes feridas, a falência das estruturas que deveriam proteger e o poder avassalador da memória. Um livro destinado àqueles que não temem a escuridão e que sabem que, por vezes, é nesse lugar que a luz começa a se manifestar 🦇.`,
        nota: 5,
        dataPostagem: '2025-10-16',
        imagemCapa: '/images/reviews/resenha_espirito_ilicito.png',
        resenhista: 'Gleice Medeiros',
        editor: 'Emilly Campos',
        local: 'Dunas do Jalapão (TO)'
    }
];

export const TODAS_RECOMENDACOES: Recomendacao[] = [
    {
        id: 'rec1',
        tituloObra: 'Torto Arado',
        autorObra: 'Itamar Vieira Junior',
        descricao: 'Uma recomendação essencial para entender a relação com a terra e a ancestralidade.',
        imagemCapa: '/images/recommendations/torto_arado.jpg'
    }
];