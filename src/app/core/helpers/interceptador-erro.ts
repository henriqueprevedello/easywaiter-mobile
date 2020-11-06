import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AutenticacaoService } from '../services/autenticacao.service';


@Injectable()
export class InterceptadorErro implements HttpInterceptor {
    constructor(private autenticacaoService: AutenticacaoService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err:HttpErrorResponse) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.autenticacaoService.logout();
                location.reload(true);
            } else if(err.status === 400 && err.url.includes('/autenticacao')){

                return throwError('Dados inválidos');
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}