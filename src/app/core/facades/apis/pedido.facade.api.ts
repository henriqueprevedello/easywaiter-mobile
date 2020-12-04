import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EndpointsConstants } from "src/app/shared/constants/endpoints.constant";
import { PedidoDTO } from "src/app/models/pedido.dto";

@Injectable({ providedIn: "root" })
export class PedidoFacadeApi {
  constructor(private http: HttpClient) {}

  adicionar(pedidoDTO: PedidoDTO): Observable<void> {
    return this.http.post<void>(EndpointsConstants.PEDIDO.ADICIONAR, pedidoDTO);
  }

  adquirir(codigoPedido: number): Observable<PedidoDTO> {
    const params = new HttpParams().set(
      "codigoPedido",
      codigoPedido.toString()
    );

    return this.http.get<PedidoDTO>(EndpointsConstants.PEDIDO.ADQUIRIR, {params});
  }
}
