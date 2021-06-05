import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ComandaFacadeApi } from "./apis/comanda.facade.api";
import { ComandaClienteDTO } from "src/app/models/comanda.dto";
import { tap } from "rxjs/operators";
import { ComandaStorageService } from "../services/storage/comanda-storage.service";

@Injectable({ providedIn: "root" })
export class ComandaFacade {
  constructor(private api: ComandaFacadeApi, private comandaStorage: ComandaStorageService) {}

  adquirirAberta(): Observable<ComandaClienteDTO> {
    return this.api.adquirirAberta().pipe(tap(comandaAberta=>{
      if (!comandaAberta) {
        this.comandaStorage.limpar();

        return;
      }

      this.comandaStorage.definir(comandaAberta);
    }));
  }

  pagamentoRealizado(): Observable<boolean> {
    return this.api.pagamentoRealizado();
  }

  pagar():Observable<void> {
    return this.api.pagar();
  }
}
