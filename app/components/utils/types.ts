// app/components/utils/types.ts

export type Episodio = { 
  id: string; 
  titulo: string; 
  slug: string; 
  dataLancamento: string; 
  urlVideo: string; 
  descricao: string; 
  imagemCapaUrl: string; 
  autorId: string; 
}; 

export type Autor = { 
    id: string; 
    nomeCompleto: string; 
    fotoUrl: string; 
    slug: string; 
    bio: string; 
};

export type CategoriaProduto = 'Livro' | 'E-book' | 'Acessório';

export type Produto = { 
    id: string;
    titulo: string; 
    preco: string; 
    imagemUrl: string; 
    descricao: string; 
    linkCompra: string;
    categoria: CategoriaProduto;
};

export type EventoCaliandra = {
    id: number;
    titulo: string;
    data: string;
    imagem: string;
    imagemVerso?: string;
    descricao?: string; 
};

export type Resenha = {
    id: string;
    slug: string;
    tituloObra: string;
    autorObra: string;
    textoResenha: string;
    nota: number;
    dataPostagem: string;
    imagemCapa?: string;
    resenhista?: string;
    editor?: string;
    local?: string;
};

export type Recomendacao = {
    id: string;
    tituloObra: string;
    autorObra: string;
    descricao: string;
    linkSugerido?: string;
    imagemCapa?: string;
};

export type TimeMember = {
    id: string;
    nome: string;
    cargo: string;
    minibio?: string;
    fotoUrl: string;
    bio?: string;
    email?: string;
    instagram?: string;
};