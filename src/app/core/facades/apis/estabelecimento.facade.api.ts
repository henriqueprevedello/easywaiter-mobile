import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EndpointsConstants } from "src/app/shared/constants/endpoints.constant";
import { LocalizacaoDTO } from "src/app/models/localizacao.dto";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";

@Injectable({ providedIn: "root" })
export class EstabelecimentoFacadeApi {
  constructor(private http: HttpClient) {}

  adquirirPorCodigo(
    codigoEstabelecimento: number
  ): Observable<EstabelecimentoDTO> {
    const params = new HttpParams().set(
      "codigoEstabelecimento",
      codigoEstabelecimento.toString()
    );

    return this.http.get<EstabelecimentoDTO>(
      EndpointsConstants.ESTABELECIMENTO.ADQUIRIR_POR_CODIGO,
      { params }
    );
  }

  adquirirLocalizacoes(): Observable<Array<LocalizacaoDTO>> {
    return this.http.get<Array<LocalizacaoDTO>>(
      EndpointsConstants.ESTABELECIMENTO.ADQUIRIR_LOCALIZACOES
    );
  }

  adquirirPorLocalizacao(
    cidade: string,
    estado: string
  ): Observable<Array<EstabelecimentoDTO>> {
    const params = new HttpParams().set("cidade", cidade).set("estado", estado);

    return this.http.get<Array<EstabelecimentoDTO>>(
      EndpointsConstants.ESTABELECIMENTO.ADQUIRIR_POR_LOCALIZACAO,
      { params }
    );
  }
}
