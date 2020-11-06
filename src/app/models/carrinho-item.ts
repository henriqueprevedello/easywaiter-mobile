import { ProdutoDTO } from './produto.dto';

export interface CarrinhoItem {
    produto: ProdutoDTO;
    observacao: string;
    quantidade: number;
}
