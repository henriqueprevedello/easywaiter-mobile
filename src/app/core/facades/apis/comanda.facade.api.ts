import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EndpointsConstants } from "src/app/shared/constants/endpoints.constant";
import { ComandaClienteDTO } from "src/app/models/comanda.dto";

@Injectable({ providedIn: "root" })
export class ComandaFacadeApi {
  constructor(private http: HttpClient) {}

  adquirirAberta(): Observable<ComandaClienteDTO> {
    return this.http.get<ComandaClienteDTO>(EndpointsConstants.COMANDA.ADQUIRIR_ABERTA);
  }

  pagamentoRealizado(): Observable<boolean> {
    return this.http.get<boolean>(EndpointsConstants.COMANDA.PAGAMENTO_REALIZADO);
  }
}
