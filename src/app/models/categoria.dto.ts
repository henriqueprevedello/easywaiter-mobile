import { ProdutoDTO } from './produto.dto';

export interface CategoriaDTO {
    id: number;
    nome: string;
    produtos: Array<ProdutoDTO>;
}
