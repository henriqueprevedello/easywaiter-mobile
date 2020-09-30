import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Injectable({ providedIn: 'root' })
export class ProdutoFacadeApi {
    constructor(private http: HttpClient) {}

    adquirir() {
        return this.http.get<Array<Produto>>('http://127.0.0.1:3333/easywaiter-mobile-server/produto/adquirir');
    }
}