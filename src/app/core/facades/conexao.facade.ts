import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConexaoFacadeApi } from "./apis/conexao.facade.api";

@Injectable({ providedIn: "root" })
export class ConexaoFacade {
  constructor(private api: ConexaoFacadeApi) {}

  testar(): Observable<void> {
    return this.api.testar();
  }
}
