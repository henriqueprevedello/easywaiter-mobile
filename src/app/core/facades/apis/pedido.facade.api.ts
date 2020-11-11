import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EndpointsConstants } from "src/app/shared/constants/endpoints.constant";
import { PedidoDTO } from "src/app/models/pedido.dto";

@Injectable({ providedIn: "root" })
export class PedidoFacadeApi {
  constructor(private http: HttpClient) {}

  adicionar(pedidoDTO: PedidoDTO): Observable<void> {
    return this.http.post<void>(EndpointsConstants.PEDIDO.ADICIONAR, pedidoDTO);
  }
}
