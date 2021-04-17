import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CategoriaDTO } from "src/app/models/categoria.dto";
import { CategoriaFacadeApi } from "./apis/categoria.facade.api";

@Injectable({ providedIn: "root" })
export class CategoriaFacade {
  constructor(private api: CategoriaFacadeApi) {}

  adquirirCategoriasEProdutosDisponiveis(
    codigoEstabelecimento: number
  ): Observable<Array<CategoriaDTO>> {
    return this.api.adquirirCategoriasEProdutosDisponiveis(codigoEstabelecimento);
  }

}
