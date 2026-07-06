// lib/mockData.ts
import { Episodio, Autor, Resenha, Recomendacao, TimeMember, Produto } from '@/app/components/utils/types';

export const TODOS_PARCEIROS: Autor[] = [
    {
        id: 'a1',
        nomeCompleto: 'Pablo Costa',
        fotoUrl: '/images/equipe/pablo.jpg',
        slug: 'pablo-costa',
        bio: "Escritor e entusiasta das artes, é uma das vozes que ajudam a tecer a tapeçaria cultural do Caliandras."
    },
    {
        id: 'a2',
        nomeCompleto: 'Gleicielly Medeiros',
        fotoUrl: '/images/equipe/gleice.jpg',
        slug: 'gleicielly-medeiros',
        bio: "Apresentadora/Entrevistadora e entusiasta cultural."
    },
    {
        id: 'a3',
        nomeCompleto: 'Nayra',
        fotoUrl: '/images/equipe/nayra.jpg',
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
        descricao: `Vídeo de apresentação do autor Pabl. Costa, de Espírito Ilícito.

**Filmagem e direção:** Emilly Campos`,
        imagemCapaUrl: '/images/episodes/pablo_autor_esp_ili.jpg',
        autorId: 'a1'
    },
    {
        id: '2',
        titulo: 'Encontro Ilícito',
        slug: 'encontro-ilicito',
        dataLancamento: '2025-11-28T12:00:00',
        urlVideo: 'NpGOg2fvgz4',
        descricao: `Minivlog dos bastidores do conselho editorial feito para o livro Espírito Ilícito.

**Filmagem e direção:** Emilly Campos`,
        imagemCapaUrl: '/images/episodes/cover_vlog_encontro.png',
        autorId: 'a1'
    },
    {
        id: '3',
        titulo: 'Lançamento do livro Espirito Ilícito',
        slug: 'lancamento-espirito-ilicito',
        dataLancamento: '2025-10-10T12:00:00',
        urlVideo: 'Xgoom94yiNw',
        descricao: `Cortes de momentos do lançamento do livro Espírito Ilícito, realizado no CineTeatro do IFTO campus Palmas.

**Autor:** Thallys`,
        imagemCapaUrl: '/images/episodes/cover_lancamento_ei.png',
        autorId: 'a1'
    },
    {
        id: '4',
        titulo: 'Resenha de Espírito Ilícito',
        slug: 'resenha-esp-ili-gleicielly',
        dataLancamento: '2025-10-16T12:00:00',
        urlVideo: 'f0qlGFNDdEE',
        descricao: `Vídeo da resenha feita por Gleici Medeiros, gravado nas dunas do Jalapão.

ESPÍRITO ILÍCITO, Pabl. Costa tece uma obra envolvente, sensorial e perturbadora, onde o sagrado se entrelaça com o profano em uma história repleta de cicatrizes e beleza.

**Autora:** Gleici Medeiros
**Filmado e editado:** Emilly Campos`,
        imagemCapaUrl: '/images/episodes/cover_resenha.png',
        autorId: 'a2'
    },
    {
        id: '5',
        titulo: 'Minivlog Caliandras: Para Além das Letras',
        slug: 'minivlog-para-alem-das-letras',
        dataLancamento: '2026-04-06T12:00:00',
        urlVideo: 'DWzujsWPTfG',
        tipoVideo: 'instagram',
        descricao: 'Minivlog dos bastidores do lançamento da antologia Para Além das Letras, das organizadoras Mirelle Freitas e Vanessa Trajano.',
        imagemCapaUrl: '/images/episodes/minivlog_espaco_cultural.jpg',
        autorId: 'caliandras'
    },
    {
        id: '6',
        titulo: 'Chamado para o Lançamento: Para Além das Letras',
        slug: 'chamado-lancamento-para-alem-das-letras',
        dataLancamento: '2026-03-02T12:00:00',
        urlVideo: 'DVZmjYxEbAg',
        tipoVideo: 'instagram',
        descricao: 'Chamado oficial para o lançamento do livro Para Além das Letras.',
        imagemCapaUrl: '/images/episodes/para_alem_das_letras.jpeg',
        autorId: 'caliandras'
    },
    {
        id: '7',
        titulo: 'Chamado para o Lançamento: Espírito Ilícito',
        slug: 'chamado-lancamento-espirito-ilicito',
        dataLancamento: '2025-09-25T12:00:00',
        urlVideo: 'DPCgMhYErjl',
        tipoVideo: 'instagram',
        descricao: `Chamado oficial para o lançamento do livro independente Espírito Ilícito.

A promoção dessa obra foi o marco inicial para o Caliandras.

**Autor:** Yuri`,
        imagemCapaUrl: '/images/episodes/chamado_espirito_ilicito.jpeg',
        autorId: 'caliandras'
    },
    {
        id: '8',
        titulo: 'Campanha de Arrecadação de Livros',
        slug: 'campanha-arrecadacao-livros',
        dataLancamento: '2025-04-30T12:00:00',
        urlVideo: 'DJFr1dqxQOn',
        tipoVideo: 'instagram',
        descricao: `A campanha de arrecadação de livros para um acervo comunitário das licenciaturas do IFTO campus Palmas foi um dos primeiros passos para o que se tornaria o Caliandras.

Reuniu-se +600 exemplares, de teóricos às clássicos da literatura brasileira. Hoje contamos com uma estante lotada localizada no Laboratório Paulo Freire, espaço comum das licenciaturas do campus Palmas.

**Estrelado por:** Sofia
**Filmado e editado por:** Emilly Campos`,
        imagemCapaUrl: '/images/episodes/doacao_livros.jpeg',
        autorId: 'caliandras'
    }
];

export const TODOS_PRODUTOS: Produto[] = [
    {
        id: 'p1',
        titulo: 'Livro Espírito Ilícito',
        preco: 'Entre em contato',
        imagemUrl: '/images/products/espirito_ilicito_cover.jpg',
        descricao: 'A obra física completa de Pablo Costa, explorando os limites da mente e da cultura.',
        linkCompra: 'https://wa.me/556392551056?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20Livro%20Esp%C3%ADrito%20Il%C3%ADcito%20f%C3%ADsico!',
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
        linkCompra: 'https://wa.me/556392551056?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20Marca-P%C3%A1ginas%20do%20Caliandras!',
        categoria: 'Acessório'
    }
];

export const EVENTOS_CALINDRAS = [
    {
        id: 1,
        titulo: "Lançamento Espírito Ilícito",
        data: "2025-10-10",
        imagem: "/images/events/eve1.jpeg",
        descricao: 'Lançamento do livro independente queer Espírito Ilícito, do autor Pabl. Costa em formato Talk Show. Foi o marco oficial do Caliandras Show no Cine Teatro IFTO (Palmas, TO).'
    },
    {
        id: 2,
        titulo: "Aula de Literatura Regional",
        data: "2025-11-18",
        imagem: "/images/events/eve2.jpeg",
        descricao: 'Lançamento do livro independente queer Espírito Ilícito, do autor Pabl. Costa em formato Talk Show. Participação especial na aula de Literatura Regional do curso de Letras do IFTO Campus Palmas (TO).'
    },
    {
        id: 3,
        titulo: "VIII Feira Cultural",
        data: "2025-11-24",
        imagem: "/images/events/eve3.jpeg",
        descricao: 'Lançamento do livro independente queer Espírito Ilícito, do autor Pabl. Costa em formato Talk Show. À convite da Biblioteca Professor José de Souza Porto na VIII Feira Cultural (Palmas, TO).'
    },
    {
        id: 4,
        titulo: "Santa Rita de Cássia",
        data: "2025-11-28",
        imagem: "/images/events/eve4.jpeg",
        descricao: 'Lançamento do livro independente queer Espírito Ilícito, do autor Pabl. Costa em formato Talk Show. Participação especial na aula de Língua Portuguesa nas turmas da escola Santa Rita de Cássia, na região de Taquaralto (Palmas, TO).'
    },
    {
        id: 5,
        titulo: "Intervenções Poéticas",
        data: "2025-12-04",
        imagem: "/images/events/eve5.jpeg",
        descricao: 'Intervenções Poéticas de autores da região mediados pelo Caliandras Show ao ar livre no Bar do Torresmo (Palmas, TO).'
    },
    {
        id: 6,
        titulo: "Para Além das Letras - Espaço Cultural",
        data: "2026-03-09",
        imagem: "/images/events/eve6.png",
        imagemVerso: "/images/events/eve6_2.png",
        descricao: 'Lançamento do livro antologia Para Além das Letras, das organizadoras Mirelle Freitas e Vanessa Trajano em formato Talk Show. O evento ocorreu no Espaço Cultural.'
    },
    {
        id: 7,
        titulo: "Para Além das Letras - São Paulo ",
        data: "2026-04-07",
        imagem: "/images/events/eve7.jpg",
        imagemVerso: "/images/events/eve7_2.jpg",
        descricao: 'Lançamento do livro antologia Para Além das Letras, das organizadoras Mirelle Freitas e Vanessa Trajano em formato roda de conversa. O evento ocorreu na Livraria Patuscada, em São Paulo.'
    },
    {
        id: 8,
        titulo: "Para Além das Letras - Pequizeiro",
        data: "2026-05-08",
        imagem: "/images/events/eve8.jpeg",
        imagemVerso: "/images/events/eve8_2.jpeg",
        descricao: 'Lançamento do livro antologia Para Além das Letras, das organizadoras Mirelle Freitas e Vanessa Trajano em formato Talk Show. O evento ocorreu na cidade natal da escritora Daniella Figuereido'
    },
    {
        id: 9,
        titulo: "Campanha de Arrecadação de Livros",
        data: "2026-05-27",
        imagem: "/images/events/eve9.jpeg",
        descricao: "Campanha de arrecadação para o Cantinho da Leitura do Laboratório Paulo Freire, espaço comum das licenciaturas do IFTO campus Palmas, promovida pelo Caliandras Show."
    },
    {
        id: 10,
        titulo: "Lançamento A Quarta Parede",
        data: "2026-06-13",
        imagem: "/images/events/eve10.jpeg",
        imagemVerso: "/images/events/eve10_2.jpeg",
        descricao: "Lançamento do livro A Quarta Parede da autora Gleys Ially Ramos pela Editora Libertinagem. O evento ocorreu no CineTeatro do IFTO Palmas (TO), mediado por Celine Azevedo."
    },
    {
        id: 11,
        titulo: "Lançamento Cerrado do Tocantins",
        data: "2026-07-11",
        imagem: "/images/events/eve11.jpeg",
        descricao: "Lançamento do livro Cerrado do Tocantins: O Gigante de Pedra & Koda da autora Alice Nardes pela Editora Vecchino. O evento ocorreu no Parque dos Povos Indígenas em Palmas (TO), mediado por Celine Azevedo."
    }
];

const RAW_EQUIPE_CALIANDRAS: TimeMember[] = [
    {
        id: 't4',
        nome: 'Emilly Campos',
        cargo: 'Designer Gráfica, Videomaker',
        fotoUrl: '/images/equipe/emilly.jpg',
        bio: 'Emilly faz parte do Calintras (Centro Acadêmico de Licenciatura em Letras) e por meio dele, foi uma das organizadoras de eventos universitários voltados à leitura, como “LITERATINS” (2024) e o “Cantinho da Leitura” (2025); nesse último, o material desenvolvido por Emilly resultou na arrecadação de mais de 500 livros e na divulgação dessa biblioteca comunitária do LabFreire/IFTO. Além disso, desenvolve pesquisas científicas na área de linguagem, sendo coautora do artigo “A (re)invenção do Nome: Apelidos e Hipocorísticos” no livro “O Léxico Como Espelho da Cultura” (2026), cuja fotografia da capa também é de sua autoria. Ela faz parte do Caliandras Show, fotografando, realizando trabalhos gráficos e audiovisuais e organizando eventos. Para o lançamento de “Espírito Ilícito” (2025) foi fotógrafa e designer da maioria dos materiais de divulgação, além de entrevistadora durante o evento. De maneira semelhante, colaborou no marketing do livro “Para Além das Letras” (2026). Estendendo suas habilidades, edita vídeos e produz postagens para redes sociais.',
        email: 'emilycampos2408@gmail.com',
        instagram: '@emillycsmps'
    },
    {
        id: 't2',
        nome: 'Gleicielly Medeiros',
        cargo: 'Entrevistadora e Resenhista',
        fotoUrl: '/images/equipe/gleice.jpg',
        bio: 'Gleice cursa Licenciatura em Letras pelo IFTO e desde 2023 faz parte do Calintras (Centro Acadêmico de Licenciatura em Letras), promovendo por meio dessa entidade eventos voltados à leitura e à linguagem, como “LITERANTINS” (2024) e a criação da biblioteca comunitária do LabFreire, o “Cantinho da Leitura” (2025). De forma paralela, escreve resenhas autorais de obras literárias regionais, como a vídeo-resenha de “Espírito Ilícito” (2025) e, mais recentemente, o texto-resenha de “A Quarta Parede” (2026) para o Caliandras Show. Ainda por meio do Caliandras, foi entrevistadora do Talk Show para lançamento da antologia “Para Além das Letras” (2026) na cidade de Pequizeiro, no interior do Tocantins. Além disso, tem interesse em ensino e literatura, sendo bolsista desde 2024 no Programa Institucional de Bolsa de Iniciação à Docência (PIBID). É uma leitora ativa que busca construir sua trajetória na educação e na literatura com foco e constância.',
        email: 'gleiciellym7@gmail.com',
        instagram: '@gleici.smedeiros'
    },
    {
        id: 't9',
        nome: 'Isabella',
        cargo: 'Direção & Tecnologia',
        fotoUrl: '/images/equipe/isabella.jpg',
        bio: 'Responsável pela estética e pela voz do projeto nos canais digitais, construindo a identidade visual que você vê aqui.',
        oculto: true
    },
    {
        id: 't8',
        nome: 'Luciano Gonçalves',
        cargo: 'Conselheiro Comunicacional',
        fotoUrl: '/images/equipe/luciano.jpg',
        bio: 'Luciano Gonçalves, doutor pelo Programa de Pós-Graduação em Literatura Brasileira da Universidade de São Paulo (USP), mestre e licenciado em Letras pela Universidade Federal de Mato Grosso Sul (UFMS), realizou dissertação e tese sobre a obra de Samuel Rawet, escritor judeu-polonês, naturalizado brasileiro. No presente, pesquisa a crônica édita de Dinah Silveira de Queiroz, publicada no jornal Correio Braziliense. Atua como professor de Português e suas literaturas no Instituto Federal do Tocantins (IFTO). Natural de Teixeira de Freitas, Bahia, é autor de Crônicas espectrais, notas sobre o TEA (Editora Patuá, 2024), sua estreia na prosa.',
        oculto: true
    },
    {
        id: 't7',
        nome: 'Mirelle Silva',
        cargo: 'Conselheira para Administração e Finanças',
        fotoUrl: '/images/equipe/mirelle.jpg',
        bio: 'Mirelle Freitas é doutora em Linguística pela Universidade Federal de São Carlos (UFSCar), mestre em Linguística Aplicada pela Universidade de Brasília (UnB) e em Educação pelo Mary Immaculate College (MIC/Irlanda), além de graduada em Administração pela Universidade Católica de Goiás (PUC/GO) e em Licenciatura em Letras pela Universidade do Tocantins (Unitins). Professora no Instituto Federal do Tocantins (IFTO) desde 2012, atuou como docente e coordenadora do curso de Licenciatura em Letras. Ela organizou a antologia “Para Além das Letras”, reunindo 11 autores do estado; a obra marca sua estreia como autora literária. Liderou a organização de eventos e inúmeros projetos de ensino, pesquisa e extensão, como PIBID/CAPES e “Vivências de Dança”. Nesses projetos, foi responsável pela proposição, coordenação, acompanhamento, apresentação de relatórios e prestação de contas. Além disso, é membra do coletivo Caliandras Show, aplicando suas habilidades de administração para manter a coerência e coesão do grupo e a efetividade da equipe.',
        email: 'mirelle.sf11@gmail.com',
        instagram: '@mih_sfreitas',
        website: 'https://drmirellefreitas.my.canva.site/'
    },
    {
        id: 't3',
        nome: 'Nayra Silva',
        cargo: 'Roteirista e Entrevistadora',
        fotoUrl: '/images/equipe/nayra.jpg',
        bio: 'Nayra é estudante de Letras no Instituto Federal do Tocantins (IFTO), Campus Palmas, integrou a “Coletânea Dos Sonhos: Primeiros Textos” (2023) com a crônica “Rotina", e é membra Centro Acadêmico de Licenciatura em Letras, promovendo eventos sobre leitura, literatura e língua desde 2023, como “LITERANTINS” (2024). Atuou na campanha de arrecadação de livros para o “Cantinho de Leitura” (2025) e foi pesquisadora do projeto “Trilhas Douradas” (2025) em que entrevistou moradores sobre as histórias locais na comunidade quilombola Mumbuca de Mateiros (TO). Além disso, é autora do artigo “A (Re)Invenção do Nome: Apelidos e Hipocorísticos” do livro científico “Léxico Como Espelho da Cultura” (2026). De maneira paralela, foi apresentadora e entrevistadora nos lançamentos das obras “Espírito Ilícito” (2025) e “Para Além das Letras” (2026), sendo também autora de um dos contos nessa última. Realiza essas atividades por meio do Caliandras Show, produzindo os roteiros dos talk shows para o coletivo. Sim, uma loucura! Seu objetivo? Encantar com simplicidade, verdade e um tantinho de caos poético.',
        email: 'nayra@gmail.com',
        instagram: '@nayra.souz'
    },
    {
        id: 't1',
        nome: 'Pablo Soares',
        cargo: 'Designer Gráfico, Conselheiro Criativo e Sonoplasta',
        fotoUrl: '/images/equipe/pablo.jpg',
        bio: 'Pablo Soares Costa é um autor LGBTQIAPN+ natural de Palmas (TO), em específico da região de Taquaralto, publicou sua primeira obra em 2022 pela Editora Coerência, “As Estações de Demp Esmerald e o Gato da Penumbra”, aos 15 anos e a segunda de forma completamente independente, “Espírito Ilícito” em 2025 aos 18 anos. Além de escritor, ilustra e cria poemas para suas próprias obras. Ademais, é o atual líder do Centro Acadêmico de Licenciatura em Letras (Calintras) e do coletivo de literatura Caliandras, organizando campanhas de arrecadação de livros para bibliotecas comunitárias, como o “Cantinho da Leitura” (2025), promovendo lançamentos de livros, como o da antologia “Para Além das Letras” (2026) no Espaço Cultural, na qual é um dos autores, e realizando trabalhos gráficos, como a capa do livro científico “O Léxico como Espelho da Cultura” (2026). Referente aos seus desempenhos estéticos, é o responsável pela identidade gráfica e sonora do coletivo Caliandras, tendo como exemplos os panfletos de divulgação de “A Quarta Parede” (2026) e “As Aventuras de Koda” (2026) e o repertório musical utilizado nos Talk Shows já realizados, responsabilizando-se pela mesa de som nesses momentos. De forma paralela, busca unir suas habilidades educativas ao seu amor pela literatura, sendo bolsista desde 2025 no Programa Institucional de Bolsa de Iniciação à Docência (PIBID/CAPES) e pesquisando na área da língua, identidade e memória. Atuou como pesquisador do projeto “Trilhas Douradas” (2025), realizado na comunidade quilombola Mumbuca em Mateiros (TO), sendo premiado em 1º lugar em sua respectiva área na Jornada de Iniciação Científica e Extensão (JICE) do IFTO. Especificamente sobre o coletivo Caliandras, é um dos fundadores do grupo e busca manter uma organização de poder descentralizado, assim criando um ambiente de igualdade com os voluntários que partilham um objetivo comum: criar debates em linguagem popular sobre direitos sociais por meio da literatura. De maneira adicional, é membro do movimento político Kizomba, que tematiza a juventude em Palmas (TO), faz parte do clube do livro Conversa de Bois, participando de encontros mensais para dialogar sobre leitura e foi Mediador de Leitura no Sesc, possuindo capacitação certificada para essa função.',
        email: 'ps.cosescritor@gmail.com',
        instagram: '@ps.cos',
        objectPosition: '50% 10%'
    },
    {
        id: 't5',
        nome: 'Rayssa Montelo',
        cargo: 'Resenhista e Sonoplasta',
        fotoUrl: '/images/equipe/rayssa.jpg',
        bio: 'Rayssa cursa Biomedicina e desde criança sempre foi apaixonada por leitura e música. Adora unir suas paixões, a ciência, a literatura e o som, resultando em ótimas resenhas para o Caliandras Show e um bom repertório musical, plataforma que compartilha suas impressões e descobertas. Acerca disso, realizou resenha para o livro “Espírito Ilícito” (2025), e para a antologia “Para Além das Letras” (2026). Sobre sua experiência musical, desde 2018 faz parte da banda de música da Guarda Metropolitana do E.T.I Eurídice Ferreira de Melo, tocando saxofone. Como projetos próximos, publicará as resenhas do livro “A Quarta Parede” (2026) e “As Aventuras de Koda” (2026). Além de tudo isso, também é uma das organizadoras do clube do livro “Conversa de Bois” (2024), grupo que realiza leituras em Palmas, nele busca unir análises sobre saúde mental à leitura (TO).',
        email: 'rayssamontelo10@gmail.com',
        instagram: '@rayssa_montelo'
    },
    {
        id: 't6',
        nome: 'Sávio Rodrigues',
        cargo: 'Resenhista',
        fotoUrl: '/images/equipe/savio.jpg',
        bio: 'Sávio é estudante de Psicologia e interessado, por meio dessa ciência, em compreender o comportamento humano e o desenvolvimento pessoal. Essa perspectiva reflete em suas resenhas para o coletivo Caliandras, como sua resenha de “Para Além das Letras” (2026). Ademais, é amante de música pop e histórias de fantasia e suspense, ótimos espaços para observar o comportamento humano por meio da literatura. Desse modo,  lidera o clube do livro Conversas de Bois, grupo de leitura local em que discute temas relacionados à saúde mental relacionados à literatura. Além disso, é membro voluntário da ONG “Unidos Por Um Mundo Melhor” (2025), atuando na região de Taquaralto.'
    },
    {
        id: 't10',
        nome: 'Thiago Medeiros',
        cargo: 'Direção & Tecnologia',
        fotoUrl: '/images/equipe/thiago.jpeg',
        bio: 'Thiago tem formação técnica em Mecatrônica e uma trajetória dedicada à programação, cursando Sistemas para a Internet no IFTO. Ele desempenha a função de programador do site Caliandras Show desde 2025, usando do seu conhecimento para transformar as ferramentas digitais como pontes para a democratização do saber. No Caliandras, sua missão é unir a precisão dos códigos à sensibilidade das artes, garantindo que a cultura e a literatura regional alcancem novos horizontes por meio de uma experiência digital moderna, fluida e acessível.',
        email: 'thiagosousam2004@gmail.com',
    },
    {
        id: 't11',
        nome: 'Yuri Vasconcelos',
        cargo: 'Filmmaker, roteirista e social mídia',
        fotoUrl: '/images/equipe/yuri.jpg',
        bio: 'Yuri é um digital influencer não-binário e estudante de jornalismo da UFT (Universidade Federal do Tocantins). Tem construído sua carreira nas redes sociais desde 2023, abordando autocuidado, moda não-binária e sua rotina de maneira popular, desse modo, consolidou uma base de seguidores que se interessam por esses temas. Acerca das suas parceiras, destaca-se as colaborações no podcast voltado a assuntos que sofrem invisibilidade social “PoldCast” com o tema “Quadrinhistas Tocantinenses” (2026) e nas campanhas de divulgação dos livros “Espírito Ilícito” (2025) e “Para Além das Letras” (2026). Sobre os dois últimos, dessa maneira, tornou-se o “rosto” do coletivo de literatura Caliandras, unindo seu posicionamento social à proposta do projeto.',
        email: 'yuri.vasconcelos@mail.uft.edu.br',
        instagram: '@yurykiim'
    }
];

export const EQUIPE_CALIANDRAS: TimeMember[] = RAW_EQUIPE_CALIANDRAS.filter(m => !m.oculto);

// lib/mockData.ts

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
        imagemCapa: '/images/reviews/resenha_gleicy_espiritoilicito.png',
        resenhista: 'Gleice Medeiros',
        fotoResenhista: '/images/equipe/gleice.jpg',
        editor: 'Emilly Campos',
        local: 'Dunas do Jalapão (TO)'
    },
    {
        id: 'r2',
        slug: 'resenha-para-alem-das-letras-rayssa',
        tituloObra: 'Para Além das Letras',
        autorObra: 'Mirelle Freitas & Vanessa Trajano',
        textoResenha: `"Houve o poeta que encontrou poesia em morrer lentamente e
em matar lentamente. Haverá poesia também, ou apenas o
prazer inerrável dos traiçoeiros sádicos, ávidos por aniquilar
qualquer possibilidade de sonhar ou qualquer um que ouse
esperançar?"

        DIANTE dessa citação do conto de Mirelle Freitas, "Do esperar, do lançar, do esperançar", começo a repensar minhas sensações ao ler Para Além das Letras, um livro composto por uma antologia de contos diversos e poéticos que nos fazem refletir sobre como a poesia pode nos fazer viver e morrer ao mesmo tempo diante das palavras. Cada texto traz experiências únicas, marcadas por sentimentos intensos, questionamentos e esperanças, mostrando que a literatura pode ser um espaço de criação, resistência e descoberta. É um livro que me fez refletir sobre todos os âmbitos da vida.

Fiquei emocionada pela história de luta e sabedoria de "Ela só queria amar", da Daniella Figuereido — a história de uma mulher que lutou muito pelo amor e que, além de tudo, amava e acreditava que poderia ser amada diante de todas as coisas ruins que passara. Nessa história, vi a vida de várias mulheres que sofrem violência doméstica sendo contada: a dor de amar alguém que a machuca, seja fisicamente ou psicologicamente, o acaso de perder totalmente sua identidade por alguém que ama e, no processo, afastar-se de pessoas que realmente a amam, apenas por pensar que é aquele amor que deveria receber.

A constatação da vida no conto "A efemeridade da vida", de Paulo Plácido, foi como um ensinamento de como a depressão é silenciosa, o vazio e a dor interna evidenciados pela sensação de rotina e do cotidiano. Jericó é uma pessoa observadora, que vê a vida com todas as suas falácias e feições, que tem sonhos possíveis e possibilidades de vida para realizá-los, mas, mesmo assim, não consegue consertar o que está quebrado por dentro. O conto me fez refletir sobre como a existência humana é frágil, instável e profundamente contraditória. Mesmo com a conexão com Raquel, que ele acreditava que poderia preencher esse vazio, isso não foi suficiente. A verdadeira escolha de Jericó foi entre a morte e a paixão. A morte, então, significou o desfecho de uma luta interna que, apesar do amor, nunca foi totalmente vencida.

Em "Palácio de Odara", de Mirelle Freitas, me surpreendi com a força da promessa de ascensão e mobilidade social. Odara, seduzida por um palácio, acreditava que encontraria a salvação. Adão, impulsionado por essa promessa, partiu rumo ao palácio. Mas, no fim, era tudo uma farsa: o palácio estava no meio de uma guerra. Adão, ao seguir essa ilusão, traiu a confiança de Odara. Essa promessa vazia do capitalismo deixou ambos vulneráveis.

Esse texto reflete muito nos dias de hoje. Quantas pessoas ainda acreditam em promessas de uma vida melhor, de lugares que se apresentam como saída, mas que, na realidade, são armadilhas. Sinto que aprendi muito com cada uma das histórias desse livro. Cada conto me ensinou algo diferente sobre amor, dor, identidade e esperança. Foi uma leitura que me tocou e que, com certeza, vou levar os ensinamentos para a minha vida.`,
        nota: 5,
        dataPostagem: '2026-04-20',
        imagemCapa: '/images/reviews/resenha_para_alem_letras_rayssa.png',
        resenhista: 'Rayssa Montelo',
        fotoResenhista: '/images/equipe/rayssa.jpg',
        editor: 'Pablo Costa',
        local: 'Clube do Livro Conversa de Bois',
        pdfUrl: '/docs/resenhas/resenha_rayssa.pdf'
    },
    {
        id: 'r3',
        slug: 'resenha-para-alem-das-letras-savio',
        tituloObra: 'Para Além das Letras',
        autorObra: 'Mirelle Freitas & Vanessa Trajano',
        textoResenha: `O livro Para Além das Letras me chamou atenção justamente pela variedade de textos e estilos. Durante a leitura, senti que não era apenas um livro para entreter, mas algo que realmente me provocou à reflexão. As histórias, mesmo diferentes entre si, abordam temas tão caros nesses últimos tempos, como a violência contra a mulher, dificuldades vividas em contextos sociais mais complexos, preconceitos... Isso fez com que eu me envolvesse mais com a leitura não só pela curiosidade, mas também pelo impacto emocional.

Um dos textos que me chamou atenção foi "Mal Presságio" da org. Vanessa Teodoro Trajano. A história da garota que passou por um trauma tão forte mexeu comigo, principalmente pela forma como isso aparece no comportamento dela. Não é algo exagerado, mas sim sutil, o que torna tudo mais realista. O final também me deixou pensativo, porque não entrega tudo de forma clara, fazendo com que eu ficasse tentando processar o que aconteceu.

Outro texto que me prendeu especialmente foi "A Última Chama", da escritora Ana Karla. Me envolvi com a forma como o suspense é construído nele, me deixando atento o tempo todo. Foi aquele tipo de leitura que dá vontade de continuar sem parar, justamente para descobrir o desfecho. A sensação de mistério é bem forte e faz com que a história fique ainda mais instigante.

Já em "Liberdade Falsa", do autor Pabl. Costa, o que mais me atraiu foi a questão da expectativa dos personagens em relação a uma vida melhor. Enquanto eu lia, refleti em como isso se relaciona com a realidade, já que muitas vezes as pessoas idealizam mudanças como uma forma de escapar do sofrimento. No entanto, o texto mostra que nem sempre as coisas acontecem como esperado, dando uma mudança de chave no enredo.

Enfim, ler Para Além das Letras foi uma experiência que realmente me marcou. Durante a leitura, me peguei refletindo sobre várias situações e até relacionando algumas delas com vivências próprias. Foi um livro que, de certa forma, me fez enxergar algumas coisas com mais sensibilidade.`,
        nota: 5,
        dataPostagem: '2026-04-22',
        imagemCapa: '/images/reviews/resenha_para_alem_letras_savio.png',
        resenhista: 'Sávio Rodrigues',
        fotoResenhista: '/images/equipe/savio.jpg',
        editor: 'Pablo Costa',
        local: 'Clube do Livro Conversa de Bois',
        pdfUrl: '/docs/resenhas/resenha_savio.pdf'
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