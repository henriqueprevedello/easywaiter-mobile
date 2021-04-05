import { CategoriaDTO } from "./categoria.dto";
import { PedidoItemDTO } from "./pedido-item.dto";

export interface PedidoDTO {
  id?: number;
  codigoEstabelecimento: number;
  codigoCliente?: number;
  codigoMesa: number;
  pedidoItens: Array<PedidoItemDTO>;
  status?: string;
  valorTotal?: number;
}
