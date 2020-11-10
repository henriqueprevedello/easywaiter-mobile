import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { EstabelecimentoFacadeApi } from "./apis/estabelecimento.facade.api";
import { LocalizacaoDTO } from "src/app/models/localizacao.dto";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";

@Injectable({ providedIn: "root" })
export class EstabelecimentoFacade {
  constructor(private api: EstabelecimentoFacadeApi) {}

  adquirirPorCodigo(
    codigoEstabelecimento: number
  ): Observable<EstabelecimentoDTO> {
    return this.api.adquirirPorCodigo(codigoEstabelecimento);
  }

  adquirirLocalizacoes(): Observable<Array<LocalizacaoDTO>> {
    return this.api.adquirirLocalizacoes();
  }

  adquirirPorLocalizacao(
    cidade: string,
    estado: string
  ): Observable<Array<EstabelecimentoDTO>> {
    return this.api.adquirirPorLocalizacao(cidade, estado);
  }
}
