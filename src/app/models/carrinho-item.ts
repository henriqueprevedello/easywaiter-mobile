import { Produto } from './produto';

export interface CarrinhoItem {
    produto: Produto;
    observacao: string;
    quantidade: number;
}
