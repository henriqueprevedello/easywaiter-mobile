import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoFacadeApi } from './apis/produto.facade.api';

@Injectable({ providedIn: 'root' })
export class ProdutoFacade {
    constructor(private produtoFacadeApi: ProdutoFacadeApi) {}

    adquirir(): Observable<Array<Produto>>{
        return this.produtoFacadeApi.adquirir();
    }
}