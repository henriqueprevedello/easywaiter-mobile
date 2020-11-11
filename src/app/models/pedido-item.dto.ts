import { ProdutoDTO } from "./produto.dto";

export interface PedidoItemDTO {
  produto: ProdutoDTO;
  quantidade: number;
}
