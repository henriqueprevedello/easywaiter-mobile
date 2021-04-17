import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EndpointsConstants } from "src/app/shared/constants/endpoints.constant";
import { CategoriaDTO } from "src/app/models/categoria.dto";

@Injectable({ providedIn: "root" })
export class CategoriaFacadeApi {
  constructor(private http: HttpClient) {}

  adquirirCategoriasEProdutosDisponiveis(
    codigoEstabelecimento: number
  ): Observable<Array<CategoriaDTO>> {
    const params = new HttpParams().set(
      "codigoEstabelecimento",
      codigoEstabelecimento.toString()
    );

    return this.http.get<Array<CategoriaDTO>>(
      EndpointsConstants.CATEGORIA.ADQUIRIR,
      { params }
    );
  }
}
