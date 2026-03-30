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
    descricao?: string; 
};