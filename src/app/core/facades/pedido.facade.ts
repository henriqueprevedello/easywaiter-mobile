import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { PedidoFacadeApi } from "./apis/pedido.facade.api";
import { PedidoDTO } from "src/app/models/pedido.dto";
import { ListagemPedidoDTO } from "src/app/models/listagem-pedido.dto";

@Injectable({ providedIn: "root" })
export class PedidoFacade {
  constructor(private api: PedidoFacadeApi) {}

  adicionar(pedidoDTO: PedidoDTO): Observable<void> {
    return this.api.adicionar(pedidoDTO);
  }

  adquirir(codigoPedido: number): Observable<PedidoDTO> {
    return this.api.adquirir(codigoPedido);
  }

  adquirirTodos(): Observable<Array<ListagemPedidoDTO>> {
    return this.api.adquirirTodos();
  }
}
