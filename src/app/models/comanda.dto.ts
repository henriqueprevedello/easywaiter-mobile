import { PedidoDTO } from "./pedido.dto";

export interface ComandaClienteDTO {
  id: number;
  numeroMesa: number;
  nomeEstabelecimento: number;
  nomeCliente: number;
  pedidos: Array<PedidoDTO>;
  dataAbertura: string;
  dataFechamento: string;
  valorTotal: number;
}
