import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { PedidoFacadeApi } from "./apis/pedido.facade.api";
import { PedidoDTO } from "src/app/models/pedido.dto";

@Injectable({ providedIn: "root" })
export class PedidoFacade {
  constructor(private api: PedidoFacadeApi) {}

  adicionar(pedidoDTO: PedidoDTO): Observable<void> {
    return this.api.adicionar(pedidoDTO);
  }
}
