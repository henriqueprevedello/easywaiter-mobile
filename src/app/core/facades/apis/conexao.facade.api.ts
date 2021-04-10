import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EndpointsConstants } from "src/app/shared/constants/endpoints.constant";

@Injectable({ providedIn: "root" })
export class ConexaoFacadeApi {
  constructor(private http: HttpClient) {}

  testar(): Observable<void> {
    return this.http.get<void>(EndpointsConstants.CONEXAO.TESTAR);
  }
}
