import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointsConstants } from 'src/app/shared/constants/endpoints.constant';
import { UsuarioDTO } from 'src/app/models/usuario.dto';

@Injectable({ providedIn: 'root' })
export class ClienteFacadeApi {
  constructor(private http: HttpClient) {}

  registrar(usuarioDTO: UsuarioDTO): Observable<void> {
    return this.http.post<void>(
      EndpointsConstants.CLIENTE.REGISTRAR,
      usuarioDTO
    );
  }
}
