import { CategoriaDTO } from "./categoria.dto";
import { MesaDTO } from "./mesa.dto";
import { PedidoItemDTO } from "./pedido-item.dto";

export interface PedidoDTO {
  codigoEstabelecimento: number;
  codigoCliente: number;
  codigoMesa: number;
  pedidoItens: Array<PedidoItemDTO>;
}
