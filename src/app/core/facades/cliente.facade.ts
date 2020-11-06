import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UsuarioDTO } from 'src/app/models/usuario.dto';
import { ClienteFacadeApi } from './apis/cliente.facade.api';

@Injectable({ providedIn: 'root' })
export class ClienteFacade {
  constructor(private api: ClienteFacadeApi) {}

  registrar(usuarioDTO: UsuarioDTO): Observable<void> {
    return this.api.registrar(usuarioDTO);
  }
}
