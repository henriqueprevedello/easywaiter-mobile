import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';

@Injectable()
export class InterceptadorJwt implements HttpInterceptor {
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private toastHelper: ToastHelper
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !this.autenticacaoService.possuiUsuarioLogado &&
      !request.url.includes('/autenticacao')
    ) {
      this.router.navigate(['/login']);

      this.toastHelper.exibir('Refaça login para continuar');

      return of(null);
    }

    let usuarioAtual = this.autenticacaoService.usuarioAtualDTO;

    if (usuarioAtual?.token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${usuarioAtual.token}` },
      });
    }

    return next.handle(request);
  }
}
