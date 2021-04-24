import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ComandaFacadeApi } from "./apis/comanda.facade.api";
import { ComandaClienteDTO } from "src/app/models/comanda.dto";

@Injectable({ providedIn: "root" })
export class ComandaFacade {
  constructor(private api: ComandaFacadeApi) {}

  adquirirAberta(): Observable<ComandaClienteDTO> {
    return this.api.adquirirAberta();
  }

  pagamentoRealizado(): Observable<boolean> {
    return this.api.pagamentoRealizado();
  }

  pagar():Observable<void> {
    return this.api.pagar();
  }
}
